const {
    app,
    apps
} = require("firebase-admin");
const {
    write,
    readCon,
    upload,
    updateCon,
    deleteCon,
    writeMany
} = require("../util");
const {
    auth
} = require("../auth");
const aws = require('aws-sdk');

const router = require("express").Router();





//update about us
router.post("/uaus", async (req, res) => {



    if (req.body.aus ) {


        apps[0].firestore().collection("dentists").doc("about").update({about:req.body.aus})



        auth(req.cookies, res, async (data) => {

            res.sendStatus(200);

        }, () => {


            console.log("something went wrong");
            res.sendStatus(403);


        }, 0)



    } else {
        console.log("it stopped here");
        res.sendStatus(403);
        return;
    }

    // res.cookie()

});

//new blog

router.post("/nb", async (req, res) => {



    console.log(req.body);
    if (req.body && req.files) {

        if (req.body.bd && Object.keys(req.files).length >0) {

            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {
                    await newBlog(req.body.bd,req.files);
                } catch (error) {
                    console.log(error);
                    res.send({
                        e: 1
                    });
                    return;
                }
                console.log(data);
                res.sendStatus(200);



            }, () => {


                console.log("something went wrong");



            }, 0)

        } else {
            console.log("wroooong");
            res.sendStatus(403);
            return;
        }

    } else {
        console.log("it stopped here");
        res.sendStatus(403);
        return;
    }

    // res.cookie()

})


//update blog
router.post("/ub", async (req, res) => {



    if (req.body.id && req.body.bd ) {




        auth(req.cookies, res, async (data) => {

            if ((await readCon("blogs", ['blogID'], [
                    ['blogID', '=', req.body.id]
                ])).length > 0) {


                console.log("Everything went well");

                try {
                    await updateBlog(req.body.id,req.body.files, req.body.bd);
                } catch (error) {
                    console.log(error);
                    res.sendStatus(403);
                    return;
                }
                console.log(data);
                res.sendStatus(200);

            } else {
                console.log("wroooong");
                res.sendStatus(403);
                return;
            }


        }, () => {


            console.log("something went wrong");



        }, 0)



    } else {
        console.log("it stopped here");
        res.sendStatus(403);
        return;
    }

    // res.cookie()

});


//notifity users that there is a new video
/**
 * 
 * @param {*} courseID 
 */
async function notifityUsers(courseID,acourse=true,update=false,videoID=null) {

    //get all the users that are in this course
    const usersIds = (await readCon(acourse ? 'coursessubscription' :"fellowshipssubscription", ['userID'], [
        [acourse ? "courseID" :"fellowshipID", '=', courseID]
    ])).map((e)=>e.userID);

    console.log(usersIds);
    if (usersIds.length<1){

        return;
    }
    const name=(await readCon(acourse ?"courses" :"fellowships",[acourse? "courseName":"fellowshipName"],[[acourse ? "courseID":"fellowshipID",'=',courseID]]))[0];
    if (acourse){
        name.name=name.courseName;
    }else{
        name.name=name.fellowshipName;
    }
    let video="";
    if (update){
        video=(await readCon(acourse ?"videos" :"fellowshipvideos",[acourse? "videoTitle":"title"],[["videoID",'=',videoID]]))[0];
        if(acourse){
video.name=video.videoTitle;
        }else{
            video.name=video.title;

        }


    }

    //get their notification token
    const tokens = await readCon('login', ['notToken','userID'], [
        ['userID', 'in', `(${usersIds.join(',')})`]
    ]);
    //send notifications to all of them
    //check if the number is more then 500 if it's more than this then group them

    if ((tokens).length > 500) {


        for (let index = 0; index < (Math.ceil(tokens.length) / 500.0); index++) {
            let currentTokens = [];

            for (let j = index * 500; j < (index + 1) * 500; j++) {
                if (tokens.length <= j) {
                    console.log("we are out at " + j);
                    //send notification from here
                    app().messaging().sendEach(


                        currentTokens.map(token => (Object({
                            notification: {
                                title: "Update!",
                                body: (!update) ? `a new video has been uploaded to the ${name.name} ${acourse ? "course":"fellowship"} please check it out` :`a video "${video.name}" has been updated in ${name.name} ${acourse ? "course":"fellowship"} please check it out`
                            },
                            token: token.notToken
                        })))
                    );

                    break;
                } else {
                    currentTokens.push(tokens[j])
                }
                if (j + 1 == (index + 1) * 500) { // send the current 500 tokens

                    await app().messaging().sendEach(


                        currentTokens.map(token => (Object({
                            notification: {
                                title: "Update!",
                                body: (!update) ? `a new video has been uploaded to the ${name.name} ${acourse ? "course":"fellowship"} please check it out` :`a video has "${video.name}" been updated in ${name.name} ${acourse ? "course":"fellowship"} please check it out`
                            },
                            token: token.notToken
                        })))
                    );

                    currentTokens = [];
                }
            }

        }

    } else {
       console.log((await apps[0].messaging().sendEach(


        tokens.map(token => (Object({
            notification: {
                title: "Update!",
                body: (!update) ? `a new video has been uploaded to the ${name.name} ${acourse ? "course":"fellowship"} please check it out` :`a video "${video.name}" has been updated in ${name.name} ${acourse ? "course":"fellowship"} please check it out`
            },
            token: token.notToken
        })))
    )));

        
    }


    await writeMany("notifications",["userID","notification"],tokens.map((e)=>[e.userID,acourse?1:0,update?1:0,courseID]));


}



//notifity users that there is a new video
/**
 * 
 * @param {*} courseID 
 */
async function notifityUsersFinalExams(courseID,acourse=true) {

    //get all the users that are in this course
    const usersIds = (await readCon(acourse ? 'coursessubscription' :"fellowshipssubscription", ['userID'], [
        [acourse ? "courseID" :"fellowshipID", '=', courseID]
    ])).map((e)=>e.userID);

    console.log(usersIds);
    if (usersIds.length<1){

        return;
    }

    const name=(await readCon(acourse ?"courses" :"fellowships",[acourse? "courseName":"fellowshipName"],[[acourse ? "courseID":"fellowshipID",'=',courseID]]))[0];
    //get their notification token
    if (acourse){
        name.name=name.courseName;
    }else{
        name.name=name.fellowshipName;
    }
    const tokens = await readCon('login', ['notToken','userID'], [
        ['userID', 'in', `(${usersIds.join(',')})`]
    ]);

    //send notifications to all of them
    //check if the number is more then 500 if it's more than this then group them

    if ((tokens).length > 500) {


        for (let index = 0; index < (Math.ceil(tokens.length) / 500.0); index++) {
            let currentTokens = [];

            for (let j = index * 500; j < (index + 1) * 500; j++) {
                if (tokens.length <= j) {
                    console.log("we are out at " + j);
                    //send notification from here
                    app().messaging().sendEach(


                        currentTokens.map(token => (Object({
                            notification: {
                                title: "Exam!",
                                body: `an exam in ${name.name} ${acourse ? "course":"fellowship"} just started, please check it out`
                            },
                            token: token.notToken
                        })))
                    );

                    break;
                } else {
                    currentTokens.push(tokens[j])
                }
                if (j + 1 == (index + 1) * 500) { // send the current 500 tokens

                    await app().messaging().sendEach(


                        currentTokens.map(token => (Object({
                            notification: {
                                title: "Exam!",
                                body: `an exam in ${name.name} ${acourse ? "course":"fellowship"} just started, please check it out`
                            },
                            token: token.notToken
                        })))
                    );

                    currentTokens = [];
                }
            }

        }


    } else {
       console.log((await apps[0].messaging().sendEach(


        tokens.map(token => (Object({
            notification: {
                title: "Exam!",
                body: `an exam in ${name.name} ${acourse ? "course":"fellowship"} just started, please check it out`
            },
            token: token.notToken
        })))
    )));

        
    }


    await writeMany("notifications",["userID","notification"],tokens.map((e)=>[e.userID,acourse?1:0,2,courseID]));


}





//update fellowship
router.post("/uf", async (req, res) => {


    req.body.fellowshipDuration = Number(req.body.fellowshipDuration);

    // req.body = Object.keys(req.body);
    // res.cookie("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsIjowLCJpYXQiOjE3MDQ2MTMxMTZ9.XngdKrHGUsC2zd-B1zmhC0A0vHsabbwb8HeLMveoL4Q",{httpOnly:true,maxAge:(60*60*60*24)});
    // res.sendStatus(200);
    console.log(req.body);
    // insert into courses (courseName,courseDuration,courseDetails) values(?,?,?);
    if (req.body.fellowshipName && req.body.fellowshipDetails && typeof (req.body.fellowshipDuration) == 'number' && req.body.id) {




        auth(req.cookies, res, async (data) => {

            if ((await readCon("fellowships", ['fellowshipID'], [
                    ['fellowshipID', '=', req.body.id]
                ])).length > 0) {


                console.log("Everything went well");

                try {
                    await updateFellowship(req.body.id, req.body.fellowshipName, req.body.fellowshipDuration, req.files, req.body.fellowshipDetails);
                } catch (error) {
                    res.sendStatus(403);
                    return;
                }
                console.log(data);
                res.sendStatus(200);

            } else {
                console.log("wroooong");
                res.sendStatus(403);
                return;
            }


        }, () => {


            console.log("something went wrong");



        }, 0)



    } else {
        console.log("it stopped here");
        res.sendStatus(403);
        return;
    }

    // res.cookie()

});

//update course
router.post("/uc", async (req, res) => {


    req.body.courseDuration = Number(req.body.courseDuration);

    // req.body = Object.keys(req.body);
    // res.cookie("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsIjowLCJpYXQiOjE3MDQ2MTMxMTZ9.XngdKrHGUsC2zd-B1zmhC0A0vHsabbwb8HeLMveoL4Q",{httpOnly:true,maxAge:(60*60*60*24)});
    // res.sendStatus(200);
    console.log(req.body);
    // insert into courses (courseName,courseDuration,courseDetails) values(?,?,?);
    if (req.body.courseName && req.body.courseDetails && typeof (req.body.courseDuration) == 'number' && req.body.id) {




        auth(req.cookies, res, async (data) => {

            if ((await readCon("courses", ['courseID'], [
                    ['courseID', '=', req.body.id]
                ])).length > 0) {


                console.log("Everything went well");

                try {
                    await updateCourse(req.body.id, req.body.courseName, req.body.courseDuration, req.files, req.body.courseDetails);
                } catch (error) {
                    res.sendStatus(403);
                    return;
                }
                console.log(data);
                res.sendStatus(200);

            } else {
                console.log("wroooong");
                res.sendStatus(403);
                return;
            }


        }, () => {


            console.log("something went wrong");



        }, 0)



    } else {
        console.log("it stopped here");
        res.sendStatus(403);
        return;
    }

    // res.cookie()

});


//change user to passed in the current course
router.post("/pf", (req, res) => {
    //check if the data is valid
    //check if this user is an admin else reject
    //check if this fellowship exists else reject
    //check if the email ID exists else reject
    //add the user to the fellowship


    if (req.body) {

        if (typeof (req.body.i) == 'number' && typeof (req.body.f) == 'number' && typeof (req.body.s)) {

            auth(req.cookies, res, async (data) => {

                if ((await readCon("fellowships", ['fellowshipID'], [
                        ['fellowshipID', '=', req.body.f]
                    ])).length > 0) {
                    if ((await readCon("login", ['userID'], [
                            ['userID', '=', req.body.i]
                        ])).length > 0) {

                        try {
                            await updateCon("fellowshipssubscription", ['status'], [(req.body.s >= 1 ? 1 : 0)], [
                                ['fellowshipID', '=', req.body.f]
                            ]);

                            res.sendStatus(200);

                        } catch (e) {
                            console.log(e);
                            console.log("rejected , duplicate");

                            res.sendStatus(403);
                            return;
                        }

                    } else {
                        console.log("rejected , no such user exists");

                        res.sendStatus(403);
                        return;
                    }

                } else {
                    console.log("rejected , not such fellowship");

                    res.sendStatus(403);
                    return;
                }


            }, () => {

                console.log("rejected , during authentication");

            }, 0);

        } else {
            console.log("rejected , not in the desired form");
            res.sendStatus(403);
            return;
        }

    } else {

        res.sendStatus(403);
        return;
    }

});




//adding new ppl to fellowships
//add to fellowship
router.post("/pc", (req, res) => {
    //check if the data is valid
    //check if this user is an admin else reject
    //check if this course exists else reject


    if (req.body) {

        if (typeof (req.body.i) == 'number' && typeof (req.body.c) == 'number' && typeof (req.body.s)) {

            auth(req.cookies, res, async (data) => {

                if ((await readCon("courses", ['courseID'], [
                        ['courseID', '=', req.body.c]
                    ])).length > 0) {
                    if ((await readCon("login", ['userID'], [
                            ['userID', '=', req.body.i]
                        ])).length > 0) {
                        try {
                            await updateCon("coursessubscription", ['status'], [(req.body.s >= 1 ? 1 : 0)], [
                                ['courseID', '=', req.body.c]
                            ]);


                            res.sendStatus(200);
                        } catch (e) {

                            console.log("rejected , duplicate");

                            res.sendStatus(403);
                            return;
                        }

                    } else {
                        console.log("rejected , no such user exists");

                        res.sendStatus(403);
                        return;
                    }

                } else {
                    console.log("rejected , not such course");

                    res.sendStatus(403);
                    return;
                }


            }, () => {

                console.log("rejected , during authentication");

            }, 0);

        } else {
            console.log("rejected , not in the desired form");
            res.sendStatus(403);
            return;
        }

    } else {

        res.sendStatus(403);
        return;
    }

});

//remove someone from a course
//remove person from course
router.post("/rpfc", (req, res) => {
 

    if (req.body) {

        if (typeof (req.body.i) == 'number' && typeof (req.body.c) == 'number') {

            auth(req.cookies, res, async (data) => {

        

                        try {
                            deleteCon("coursessubscription",[['userID','=',req.body.i],['courseID','=',req.body.c]])

                            res.sendStatus(200);
                        } catch (e) {

                            console.log("rejected , duplicate");

                            res.sendStatus(403);
                            return;
                        }

                 

                


            }, () => {

                console.log("rejected , during authentication");

            }, 0);

        } else {
            console.log("rejected , not in the desired form");
            res.sendStatus(403);
            return;
        }

    } else {

        res.sendStatus(403);
        return;
    }

});


//remove someone from a fellowship
//remove person from fellowship
router.post("/rpff", (req, res) => {
 

    if (req.body) {

        if (typeof (req.body.i) == 'number' && typeof (req.body.f) == 'number') {

            auth(req.cookies, res, async (data) => {

        

                        try {
                            deleteCon("fellowshipssubscription",[['userID','=',req.body.i],['fellowshipID','=',req.body.f]])

                            res.sendStatus(200);
                        } catch (e) {

                            console.log("rejected , duplicate");

                            res.sendStatus(403);
                            return;
                        }

            }, () => {

                console.log("rejected , during authentication");

            }, 0);

        } else {
            console.log("rejected , not in the desired form");
            res.sendStatus(403);
            return;
        }

    } else {

        res.sendStatus(403);
        return;
    }

});



router.post("/dp", async (req, res) => {


    if (req.body.id) {

            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {
                    await deleteCon("products",[['productID','=',req.body.id]])
                } catch (error) {
                    console.log(error);
                    res.send({
                        e: 1
                    });
                    return;
                }
                console.log(data);
                res.sendStatus(200);



            }, () => {


                console.log("something went wrong");



            }, 0)

        

    } else {
        console.log("it stopped here");
        res.sendStatus(403);
        return;
    }

    // res.cookie()

});



router.post("/up", async (req, res) => {


    req.body.productPrice =Number(req.body.productPrice );
    req.body.id=Number(req.body.id);
    if (req.body.productName && req.body.productPrice && typeof (req.body.productPrice) == 'number' && req.body.id) {




        auth(req.cookies, res, async (data) => {

            if ((await readCon("products", ['productID'], [
                    ['productID', '=', req.body.id]
                ])).length > 0) {


                console.log("Everything went well");

                try {
                    await updateProduct(req.body.id, req.body.productName, req.body.productPrice, req.files);
                } catch (error) {
                    console.log(req.body);
                    console.log(error);
                    res.sendStatus(403);
                    return;
                }
                console.log(data);
                res.sendStatus(200);

            } else {
                console.log("wroooong");
                res.sendStatus(403);
                return;
            }


        }, () => {


            console.log("something went wrong");



        }, 0)



    } else {
        console.log("it stopped here");
        res.sendStatus(403);
        return;
    }

    // res.cookie()

});



router.post("/np", async (req, res) => {


    req.body.productPrice=Number(req.body.productPrice);
    if (req.body && req.files) {
        if (req.body.productName&& typeof(req.body.productPrice) == "number") {

            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {
                    await newProduct(req.body.productName, req.body.productPrice, req.files);
                } catch (error) {
                    console.log(error);
                    res.send({
                        e: 1
                    });
                    return;
                }
                console.log(data);
                res.sendStatus(200);



            }, () => {


                console.log("something went wrong");



            }, 0)

        } else {
            console.log("wroooong");
            res.sendStatus(403);
            return;
        }

    } else {
        console.log("it stopped here");
        res.sendStatus(403);
        return;
    }

    // res.cookie()

})





router.post("/nc", async (req, res) => {


    req.body.courseDuration = Number(req.body.courseDuration);

    // req.body = Object.keys(req.body);
    // res.cookie("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsIjowLCJpYXQiOjE3MDQ2MTMxMTZ9.XngdKrHGUsC2zd-B1zmhC0A0vHsabbwb8HeLMveoL4Q",{httpOnly:true,maxAge:(60*60*60*24)});
    // res.sendStatus(200);
    console.log(req.body);
    // insert into courses (courseName,courseDuration,courseDetails) values(?,?,?);
    if (req.body && req.files) {
        if (req.body.courseName && typeof (req.body.courseDuration) == "number") {

            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {
                    await newCourse(req.body.courseName, req.body.courseDuration, req.files, (req.body.courseDetails ? req.body.courseDetails : null));
                } catch (error) {
                    res.send({
                        e: 1
                    });
                    return;
                }
                console.log(data);
                res.sendStatus(200);



            }, () => {


                console.log("something went wrong");



            }, 0)

        } else {
            console.log("wroooong");
            res.sendStatus(403);
            return;
        }

    } else {
        console.log("it stopped here");
        res.sendStatus(403);
        return;
    }

    // res.cookie()

})


router.post("/nf", async (req, res) => {


    req.body.fellowshipDuration = Number(req.body.fellowshipDuration);

    // req.body = Object.keys(req.body);
    // res.cookie("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsIjowLCJpYXQiOjE3MDQ2MTMxMTZ9.XngdKrHGUsC2zd-B1zmhC0A0vHsabbwb8HeLMveoL4Q",{httpOnly:true,maxAge:(60*60*60*24)});
    // res.sendStatus(200);
    console.log(req.body);
    // insert into courses (courseName,courseDuration,courseDetails) values(?,?,?);
    if (req.body && req.files) {
        if (req.body.fellowshipName && typeof (req.body.fellowshipDuration) == "number") {

            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {
                    await newfellowship(req.body.fellowshipName, req.body.fellowshipDuration, req.files, (req.body.fellowshipDetails ? req.body.fellowshipDetails : null));
                } catch (error) {
                    res.send({
                        e: 1
                    });
                    return;
                }
                console.log(data);
                res.sendStatus(200);



            }, () => {


                console.log("something went wrong");



            }, 0)

        } else {
            console.log("wroooong");
            res.sendStatus(403);
            return;
        }

    } else {
        console.log("it stopped here");
        res.sendStatus(403);
        return;
    }

    // res.cookie()

});






//get user by email
//check if this token belongs to the admin and then do the operation
//email exists ?
router.post("/ee", async (req, res) => {


    if (req.body) {
        if (req.body.email) {

            auth(req.cookies, res, async (data) => {

                const reuslt = (await readCon("login", ["userID"], [
                    ['email', '=', req.body.email]
                ]));
                res.send({
                    i: reuslt[0],
                    e: reuslt.length > 0
                });




            }, () => {


                console.log("something went wrong");



            }, 0)

        } else {
            res.sendStatus(403);
            return;
        }

    } else {
        res.sendStatus(403);
        return;
    }

    // res.cookie()

})


//adding new ppl to fellowships
//add to fellowship
router.post("/atf", (req, res) => {
    //check if the data is valid
    //check if this user is an admin else reject
    //check if this fellowship exists else reject
    //check if the email ID exists else reject
    //add the user to the fellowship


    if (req.body) {

        if (typeof (req.body.i) == 'number' && typeof (req.body.f) == 'number') {

            auth(req.cookies, res, async (data) => {

                if ((await readCon("fellowships", ['fellowshipID'], [
                        ['fellowshipID', '=', req.body.f]
                    ])).length > 0) {
                    if ((await readCon("login", ['userID'], [
                            ['userID', '=', req.body.i]
                        ])).length > 0) {

                        try {
                            await write("fellowshipssubscription", ['fellowshipID', 'userID', 'status'], [req.body.f, req.body.i, 0]);

                            res.sendStatus(200);

                        } catch (e) {

                            console.log("rejected , duplicate");

                            res.sendStatus(403);
                            return;
                        }

                    } else {
                        console.log("rejected , no such user exists");

                        res.sendStatus(403);
                        return;
                    }

                } else {
                    console.log("rejected , not such fellowship");

                    res.sendStatus(403);
                    return;
                }


            }, () => {

                console.log("rejected , during authentication");

            }, 0);

        } else {
            console.log("rejected , not in the desired form");
            res.sendStatus(403);
            return;
        }

    } else {

        res.sendStatus(403);
        return;
    }

});






//adding new ppl to courses
//add to courses
router.post("/atc", (req, res) => {
    //check if the data is valid
    //check if this user is an admin else reject
    //check if this course exists else reject
    //check if the email ID exists else reject
    //add the user to the fellowship


    if (req.body) {

        if (typeof (req.body.i) == 'number' && typeof (req.body.c) == 'number') {

            auth(req.cookies, res, async (data) => {

                if ((await readCon("courses", ['courseID'], [
                        ['courseID', '=', req.body.c]
                    ])).length > 0) {
                    if ((await readCon("login", ['userID'], [
                            ['userID', '=', req.body.i]
                        ])).length > 0) {
                        try {

                            (await write("coursessubscription", ['courseID', 'userID', 'status'], [req.body.c, req.body.i, 0]));

                            res.sendStatus(200);
                        } catch (e) {

                            console.log("rejected , duplicate");

                            res.sendStatus(403);
                            return;
                        }

                    } else {
                        console.log("rejected , no such user exists");

                        res.sendStatus(403);
                        return;
                    }

                } else {
                    console.log("rejected , not such course");

                    res.sendStatus(403);
                    return;
                }


            }, () => {

                console.log("rejected , during authentication");

            }, 0);

        } else {
            console.log("rejected , not in the desired form");
            res.sendStatus(403);
            return;
        }

    } else {

        res.sendStatus(403);
        return;
    }

});


//adding a group of ppl to courses
//add group to courses
router.post("/agtc", (req, res) => {
    //check if the data is valid
    //check if this user is an admin else reject
    //check if this course exists else reject
    //check if the email ID exists else reject
    //add the user to the fellowship


    if (req.body) {

        if (typeof (req.body.i) == 'object' && typeof (req.body.c) == 'number') {
            if (req.body.i.length<1){

              
                res.sendStatus(403);
                return;
            }
            auth(req.cookies, res, async (data) => {



                if ((await readCon("courses", ['courseID'], [
                        ['courseID', '=', req.body.c]
                    ])).length > 0) {

                        const report=[];

                        for (const id in req.body.i) {

                            try {

                                (await write("coursessubscription", ['courseID', 'userID', 'status'], [req.body.c, req.body.i[id], 0]));
                                report.push([id,0])
                            } catch (e) {
                                console.log(e);
                                report.push([id,1])
                                console.log("rejected , duplicate or user does not exist");
                                res.sendStatus(403)
                                return;
                            }
                        }


                        res.send({
                            d:report
                        })

                } else {
                    console.log("rejected , not such course");

                    res.sendStatus(403);
                    return;
                }


            }, () => {

                console.log("rejected , during authentication");

            }, 0);

        } else {
            console.log("rejected , not in the desired form");
            res.sendStatus(403);
            return;
        }

    } else {

        res.sendStatus(403);
        return;
    }

});


//adding a group of ppl to fellowships
//add group to fellowships
router.post("/agtf", (req, res) => {
    //check if the data is valid
    //check if this user is an admin else reject
    //check if this course exists else reject
    //check if the email ID exists else reject
    //add the user to the fellowship


    if (req.body) {

        if (typeof (req.body.i) == 'object' && typeof (req.body.f) == 'number') {
            if (req.body.i.length<1){

              
                res.sendStatus(403);
                return;
            }
            auth(req.cookies, res, async (data) => {



                if ((await readCon("fellowships", ['fellowshipID'], [
                        ['fellowshipID', '=', req.body.f]
                    ])).length > 0) {

                        const report=[];

                        for (const id in req.body.i) {

                            try {

                                (await write("fellowshipssubscription", ['fellowshipID', 'userID', 'status'], [req.body.f, req.body.i[id], 0]));
                                report.push([id,0])
                            } catch (e) {
                                console.log(e);
                                report.push([id,1])
                                console.log("rejected , duplicate or user does not exist");
                                res.sendStatus(403)
                                return;
                            }
                        }


                        res.send({
                            d:report
                        })

                } else {
                    console.log("rejected , not such course");

                    res.sendStatus(403);
                    return;
                }


            }, () => {

                console.log("rejected , during authentication");

            }, 0);

        } else {
            console.log("rejected , not in the desired form");
            res.sendStatus(403);
            return;
        }

    } else {

        res.sendStatus(403);
        return;
    }

});



// router.post("/uf")


/**
 * 
 * @param {String} courseName 
 * @param {Number} courseDuration 
 * @param {import("aws-sdk/clients/batch").String} courseDetails 
 */
async function newCourse(courseName, courseDuration, files, courseDetails = null) {

    const id = (await write("courses", ["courseName", "courseDuration", "courseDetails"], [courseName, courseDuration, courseDetails]));
    upload(files, "courses", id.toString());


}


async function newProduct(productName, productPrice, files) {

    const id = (await write("products", ["productName", "productPrice","productStatus"], [productName, productPrice,1]));
    upload(files, "courses", id.toString());


}


async function updateProduct(productID, productName, productPrice, files) {

    let fields = {};
    if (productName != -9) {
        fields["productName"] = productName;
    }
    if (productPrice != -9) {
        fields["productPrice"] = productPrice;
    }


    if (Object.keys(fields).length > 0) {
        await updateCon("products", Object.keys(fields), Object.values(fields), [
            ["productID", '=', productID]
        ]);
    }

    if (files) {
        upload(files, "products", productID.toString());

    }


}


/**
 * 
 * @param {String}fellowshipName 
 * @param {Number} fellowshipDuration 
 * @param {String} fellowshipDetails 
 */
async function newfellowship(fellowshipName, fellowshipDuration, files, fellowshipDetails = null) {

    const id = (await write("fellowships", ["fellowshipName", "fellowshipDuration", "fellowshipDetails"], [fellowshipName, fellowshipDuration, fellowshipDetails]));
    upload(files, "fellowships", id.toString());


}

/**
 * 
 * @param {String}fellowshipName 
 * @param {Number} fellowshipDuration 
 * @param {String} fellowshipDetails 
 */
async function updateFellowship(id, fellowshipName, fellowshipDuration, files, fellowshipDetails = null) {

    let fields = {};
    if (fellowshipName != -9) {
        fields["fellowshipName"] = fellowshipName;
    }
    if (fellowshipDetails != -9) {
        fields["fellowshipDetails"] = fellowshipDetails;
    }


    if (fellowshipDuration != -9) {
        fields["fellowshipDuration"] = fellowshipDuration;
    }
    if (Object.keys(fields).length > 0) {
        await updateCon("fellowships", Object.keys(fields), Object.values(fields), [
            ["fellowshipID", '=', id]
        ]);
    }

    if (files) {
        upload(files, "fellowships", id.toString());

    }


}


/**
 * 
 * @param {String}fellowshipName 
 * @param {Number} fellowshipDuration 
 * @param {String} fellowshipDetails 
 */
async function updateCourse(id, courseName, courseDuration, files, courseDetails = null) {

    let fields = {};
    if (courseName != -9) {
        fields["courseName"] = courseName;
    }
    if (courseDetails != -9) {
        fields["courseDetails"] = courseDetails;
    }


    if (courseDuration != -9) {
        fields["courseDuration"] = courseDuration;
    }
    if (Object.keys(fields).length > 0) {
        await updateCon("courses", Object.keys(fields), Object.values(fields), [
            ["courseID", '=', id]
        ]);
    }

    if (files) {
        upload(files, "courses", id.toString());

    }


}





//new course video
router.post("/ncv", async (req, res) => {



   
    if (req.body.vt && req.body.url&&typeof(req.body.cid)=='number'&&typeof(req.body.o)=='number') {

            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {
                    await updateCon("videos",['`order`'],["(`order`+1)"],[["courseID",'=',req.body.cid],['`order`',">=",req.body.o]]);

                    await write("videos",["videoUrl","videoTitle","courseID",'`order`'],[req.body.url,req.body.vt,req.body.cid,req.body.o]);

                } catch (error) {
                    console.log(error);
                    res.sendStatus(403);

                    return;
                }
                console.log(data);
                res.sendStatus(200);
                notifityUsers(req.body.cid);


            }, () => {


                console.log("something went wrong");



            }, 0)

   

    } else {
        console.log("it stopped here");
        res.sendStatus(403);
        return;
    }

    // res.cookie()

})


//new course video
router.post("/not", async (req, res) => {



   
    if (typeof(req.body.cid)=='number') {

    
                // notifityUsers(2,false,true,11);
                notifityUsersFinalExams(2,false);
                res.sendStatus(200);


   

    } else {
        console.log("it stopped here");
        res.sendStatus(403);
        return;
    }

    // res.cookie()

})

//new fellowship video
router.post("/nfv", async (req, res) => {


console.log(req.body);
   
    if (req.body.vt && req.body.url&&typeof(req.body.fid)=='number'&&typeof(req.body.o)=='number') {

            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {
                    await updateCon("fellowshipvideos",['`order`'],["(`order`+1)"],[["fellowshipID",'=',req.body.fid],['`order`',">=",req.body.o]]);
                    await write("fellowshipvideos",["videoURL","title","fellowshipID",'`order`'],[req.body.url,req.body.vt,req.body.fid,req.body.o]);
          

                } catch (error) {
                    console.log(error);
                    res.sendStatus(403);
                    return;
                }
                console.log(data);
                res.sendStatus(200);
                notifityUsers(req.body.fid,false);


            }, () => {


                console.log("something went wrong");



            }, 0)

   

    } else {
        console.log("it stopped here");
        res.sendStatus(403);
        return;
    }

    // res.cookie()

})


//update fellowship video
// router.post("/ufv", async (req, res) => {



   
//     if (req.body.c && req.body.fid) {

//             auth(req.cookies, res, async (data) => {



//                 try {


//                     if (req.body.n){ //notifiy them

//                         await notifityUsers(req.body.fid,req.body.c,true);

//                     }

//                 } catch (error) {
//                     console.log(error);
//                     res.sendStatus(403);
//                     return;
//                 }
//                 console.log(data);
//                 res.sendStatus(200);


//             }, () => {


//                 console.log("something went wrong");



//             }, 0)

   

//     } else {
//         console.log("it stopped here");
//         res.sendStatus(403);
//         return;
//     }

//     // res.cookie()

// })



//update fellowship video
router.post("/ufv", async (req, res) => {



   
    if (req.body.vt && req.body.url&&typeof(req.body.vid)=='number' && req.body.fid) {

            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {
                    let fields = {};
                    if (req.body.vt != -9) {
                        fields["title"] = req.body.vt;
                    }
                    if ( req.body.url != -9) {
                        fields["videoURL"] =  req.body.url;
                    }

                    if (Object.keys(fields).length > 0) {
                        await updateCon("fellowshipvideos", Object.keys(fields), Object.values(fields), [
                            ["videoID", '=', req.body.vid]
                        ]);
                    }else{

                        res.sendStatus(200);
                        return;
                    }

                    if (req.body.n){ //notifiy them

                        await notifityUsers(req.body.fid,false,true,req.body.vid);

                    }

                } catch (error) {
                    console.log(error);
                    res.sendStatus(403);
                    return;
                }
                console.log(data);
                res.sendStatus(200);


            }, () => {


                console.log("something went wrong");



            }, 0)

   

    } else {
        console.log("it stopped here");
        res.sendStatus(403);
        return;
    }

    // res.cookie()

})


//update fellowship video
router.post("/umac", async (req, res) => {



   
    if (req.body.mac && req.body.mac.length==17&&req.body.id) {

            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {



                        await updateCon("login", ["mac"], [req.body.mac], [
                            ["userID", '=',req.body.id ]]);
                    


                } catch (error) {
                    console.log(error);
                    res.sendStatus(403);
                    return;
                }
                console.log(data);
                res.sendStatus(200);


            }, () => {


                console.log("something went wrong");



            }, 0)

   

    } else {
        console.log("it stopped here");
        res.sendStatus(403);
        return;
    }

    // res.cookie()

})




//update fellowship video
router.post("/ucv", async (req, res) => {



   
    if (req.body.vt && req.body.url&&typeof(req.body.vid)=='number'&&req.body.cid) {

            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {
                    let fields = {};
                    if (req.body.vt != -9) {
                        fields["videoTitle"] = req.body.vt;
                    }
                    if ( req.body.url != -9) {
                        fields["videoUrl"] =  req.body.url;
                    }

                    if (Object.keys(fields).length > 0) {
                        await updateCon("videos", Object.keys(fields), Object.values(fields), [
                            ["videoID", '=', req.body.vid]
                        ]);
                    }else{

                        res.sendStatus(200);
                        return;
                    }
                        
                    if (req.body.n){ //notifiy them

                        await notifityUsers(req.body.cid,false,true,req.body.vid);

                    }

                } catch (error) {
                    console.log(error);
                    res.sendStatus(403);
                    return;
                }
                console.log(data);
                res.sendStatus(200);


            }, () => {


                console.log("something went wrong");



            }, 0)

   

    } else {
        console.log("it stopped here");
        res.sendStatus(403);
        return;
    }

    // res.cookie()

})

//delete blog
router.post("/db", async (req, res) => {



   
    if (req.body.bid &&typeof(req.body.bid)=='number') {

            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {


                    await deleteCon("blogs",[['blogID','=',req.body.bid]]);
                    const s3 = new aws.S3({
                        accessKeyId: 'AKIAT4PTBJP62OQ26E3R',
                        secretAccessKey: '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',
                        region: 'us-east-1',
                      });

                      s3.deleteObject({

                        Bucket:"dentists-iq",
                        Key:"blogs/"+req.body.bid
                      },(e,d)=>{


                        console.log(e);
                        console.log(d);
res.sendStatus(200);
                        console.log("sent");
                      });


                

                } catch (error) {
                    console.log(error);
                    res.sendStatus(403);
                    return;
                }
  


            }, () => {


                console.log("something went wrong");



            }, 0)

   

    } else {
        console.log("it stopped here");
        res.sendStatus(403);
        return;
    }

    // res.cookie()

})


//delete course
router.post("/dc", async (req, res) => {



   
    if (req.body.cid &&typeof(req.body.cid)=='number') {

            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {


                    await deleteCon("videos",[['courseID','=',req.body.cid]]);
                    await deleteCon("coursessubscription",[['courseID','=',req.body.cid]]);
                    await deleteCon("courses",[['courseID','=',req.body.cid]]);

                    const s3 = new aws.S3({
                        accessKeyId: 'AKIAT4PTBJP62OQ26E3R',
                        secretAccessKey: '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',
                        region: 'us-east-1',
                      });

                      s3.deleteObject({

                        Bucket:"dentists-iq",
                        Key:"courses/"+req.body.cid
                      },(e,d)=>{


                        console.log(e);
                        console.log(d);
res.sendStatus(200);
                        console.log("sent");
                      });


                

                } catch (error) {
                    console.log(error);
                    res.sendStatus(403);
                    return;
                }
  


            }, () => {


                console.log("something went wrong");



            }, 0)

   

    } else {
        console.log("it stopped here");
        res.sendStatus(403);
        return;
    }

    // res.cookie()

})


//delete course
router.post("/df", async (req, res) => {



   
    if (req.body.fid &&typeof(req.body.fid)=='number') {

            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {


                    await deleteCon("fellowshipvideos",[['fellowshipID','=',req.body.fid]]);
                    await deleteCon("fellowshipssubscription",[['fellowshipID','=',req.body.fid]]);
                    await deleteCon("fellowships",[['fellowshipID','=',req.body.fid]]);

                    const s3 = new aws.S3({
                        accessKeyId: 'AKIAT4PTBJP62OQ26E3R',
                        secretAccessKey: '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',
                        region: 'us-east-1',
                      });

                      s3.deleteObject({

                        Bucket:"dentists-iq",
                        Key:"fellowships/"+req.body.fid
                      },(e,d)=>{


                        console.log(e);
                        console.log(d);
res.sendStatus(200);
                        console.log("sent");
                      });


                

                } catch (error) {
                    console.log(error);
                    res.sendStatus(403);
                    return;
                }
  


            }, () => {


                console.log("something went wrong");



            }, 0)

   

    } else {
        console.log("it stopped here");
        res.sendStatus(403);
        return;
    }

    // res.cookie()

})




//delete all fellowship videos
router.post("/dafv", async (req, res) => {



   
    if (req.body.fid &&typeof(req.body.fid)=='number') {

            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {


                    await deleteCon("fellowshipvideos",[['fellowshipID','=',req.body.fid]]);
                    res.sendStatus(200);


                

                } catch (error) {
                    console.log(error);
                    res.sendStatus(403);
                    return;
                }
  


            }, () => {


                console.log("something went wrong");



            }, 0)

   

    } else {
        console.log("it stopped here");
        res.sendStatus(403);
        return;
    }

    // res.cookie()

})

//delete some fellowship videos
router.post("/dfv", async (req, res) => {



   
    if (req.body.fid &&typeof(req.body.fid)=='number'&&req.body.v) {

            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {


                    await deleteCon("fellowshipvideos",[['fellowshipID','=',req.body.fid],["videoID",'in',`(${req.body.v.join(",")})`]]);
                    res.sendStatus(200);


                

                } catch (error) {
                    console.log(error);
                    res.sendStatus(403);
                    return;
                }
  


            }, () => {


                console.log("something went wrong");



            }, 0)

   

    } else {
        console.log("it stopped here");
        res.sendStatus(403);
        return;
    }

    // res.cookie()

})

//delete some course videos
router.post("/dcv", async (req, res) => {



   
    if (req.body.cid &&typeof(req.body.cid)=='number'&&req.body.v) {

            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {


                    await deleteCon("videos",[['courseID','=',req.body.cid],["videoID",'in',`(${req.body.v.join(",")})`]]);
                    res.sendStatus(200);


                

                } catch (error) {
                    console.log(error);
                    res.sendStatus(403);
                    return;
                }
  


            }, () => {


                console.log("something went wrong");



            }, 0)

   

    } else {
        console.log("it stopped here");
        res.sendStatus(403);
        return;
    }

    // res.cookie()

})

//delete all course video
router.post("/dacv", async (req, res) => {



   
    if (req.body.cid &&typeof(req.body.cid)=='number') {

            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {


                    await deleteCon("videos",[['courseID','=',req.body.cid]]);
                    res.sendStatus(200);


                

                } catch (error) {
                    console.log(error);
                    res.sendStatus(403);
                    return;
                }
  


            }, () => {


                console.log("something went wrong");



            }, 0)

   

    } else {
        console.log("it stopped here");
        res.sendStatus(403);
        return;
    }

    // res.cookie()

})


/**
 * 
 * @param {String}id 
 * @param {String} blogDetails 
 */
async function updateBlog(id,  files, blogDetails = null) {

    if (blogDetails != -9) {
        await updateCon("blogs",["blogDetails"],[blogDetails], [
            ["blogID", '=', id]
        ]);
    }


    if (files) {
        upload(files, "blogs", id.toString());

    }


}


/**
 * 
 * @param {String}blogDetails  
 */
async function newBlog (blogDetails, files) {

    const id = (await write("blogs", ["blogDetails"], [ blogDetails]));
    upload(files, "blogs", id.toString());


}
module.exports = router;