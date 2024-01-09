const {
    app
} = require("firebase-admin");
const {
    write,
    readCon,
    upload,
    updateCon,
    deleteCon
} = require("../util");
const {
    auth
} = require("../auth");
const router = require("express").Router();


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
async function notifityUsers(courseID) {

    //get all the users that are in this course
    const usersIds = await util.readCon('subs', ['userID'], [
        ["courseID", '=', courseID]
    ]);
    //get their notification token
    const tokens = await util.readCon('login', 'notificationToken', [
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
                                title: "course Update!",
                                body: "a new video has been uploaded to the course please check it out"
                            },
                            "token": token
                        })))
                    );
                    break;
                } else {
                    currentTokens.push(tokens[j])
                }
                if (j + 1 == (index + 1) * 500) { // send the current 500 tokens

                    app().messaging().sendEach(


                        currentTokens.map(token => (Object({
                            notification: {
                                title: "course Update!",
                                body: "a new video has been uploaded to the course please check it out"
                            },
                            "token": token
                        })))
                    );

                    currentTokens = [];
                }
            }

        }





        //         for (let index = 0; index < (Math.ceil(tokens.length)/500.0) ; index++) {
        //             const currentTokens=[];

        //             for (let j = index * 500; j < (index+1)*500; j++) {
        //                 if (tokens.length <= j){
        //                     console.log("we are out at "+j);
        //                     //send notification from here
        //                     app().messaging().sendEach(


        //                         currentTokens.map(token=>(Object({notification:{
        //                             title : "course Update!",
        //                             body:"a new video has been uploaded to the course please check it out"
        //                         },"token":token})))
        //                     )
        //                     break;
        //                 }
        //                 else if (j + 1 == (index+1)*500){ // send the current 500 tokens
        // app().messaging().sendEach(


        //             currentTokens.map(token=>(Object({notification:{
        //                 title : "course Update!",
        //                 body:"a new video has been uploaded to the course please check it out"
        //             },"token":token})))
        //         );
        //         currentTokens=[];
        //                 }
        //                 else{  
        //                     currentTokens.push(tokens[j])
        //                 }

        //             }

        //         }
    } else {

        app().messaging().sendEach(


            tokens.map(token => (Object({
                notification: {
                    title: "course Update!",
                    body: "a new video has been uploaded to the course please check it out"
                },
                "token": token
            })))
        )
    }


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


    // req.body.fellowshipDuration = Number(req.body.fellowshipDuration);

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