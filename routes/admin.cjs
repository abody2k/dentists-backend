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
    writeMany,
    updateJSON,
    read
} = require("../util.cjs");
const {
    auth
} = require("../auth.cjs");
const aws = require('aws-sdk');
const { hash } = require("argon2");

const router = require("express").Router();

// get final exams
router.post("/gfxms", async (req, res) => {





    auth(req.cookies, res, async (data) => {



        try {

            if(req.body.t){
                const fellowshipsstageexams= await readCon("fellowshipsstageexams",null,[['fellowshipID','=',req.body.id]]);
                const fellowshipsfinalexams= await readCon("fellowshipsfinalexams",null,[['fellowshipID','=',req.body.id]]);
                const fellowshipsperodicexams= await readCon("fellowshipsperodicexams",null,[['fellowshipID','=',req.body.id]]);
                res.send({d:{
                    
                    
                    fellowshipsfinalexams:fellowshipsfinalexams,
                    fellowshipsstageexams:fellowshipsstageexams,
                    fellowshipsperodicexams:fellowshipsperodicexams
                }})
            }else{

                const coursesfinalexams= await readCon("coursesfinalexams",null,[['courseID','=',req.body.id]]);
                const coursesstageexams= await readCon("coursesstageexams",null,[['courseID','=',req.body.id]]);
                const coursesperodicexams= await readCon("coursesperodicexams",null,[['courseID','=',req.body.id]]);
    
                
                res.send({d:{
                    
                    
                    coursesfinalexams:coursesfinalexams,

                    coursesstageexams:coursesstageexams,

                    coursesperodicexams:coursesperodicexams,

                }})
            }
   

        } catch (error) {
            console.log(error);
            res.sendStatus(403)
            return;
        }



    }, () => {


        console.log("something went wrong");



    }, 0)




// res.cookie()

})

// get groups
router.post("/ggs", async (req, res) => {





            auth(req.cookies, res, async (data) => {



                try {
                    const data= await read("`groups`",["DISTINCT groupID"]);
                    res.send({d:data})

                } catch (error) {
                    console.log(error);
                    res.sendStatus(403)
                    return;
                }



            }, () => {


                console.log("something went wrong");



            }, 0)

     
    

    // res.cookie()

})

//ban user
router.post("/bu", async (req, res) => {



    console.log(req.body);

        if (req.body.ID && req.body.uID&&req.body.t>=0) {

            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {
                    await write("banned",['userID','ID','type'],[req.body.uID,req.body.ID,req.body.t])
                } catch (error) {
                    console.log(error);
                    res.sendStatus(403)
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

    

    // res.cookie()

})


//remove user from baned users
router.post("/rbu", async (req, res) => {



    console.log(req.body);

        if (req.body.ID && req.body.uID&&req.body.t>=0) {

            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {
                   await deleteCon("banned",[['userID','=',req.body.uID],['type','=',req.body.t],['ID','=',req.body.ID]]);
                } catch (error) {
                    console.log(error);
                    res.sendStatus(403)
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

    

    // res.cookie()

})

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



    req.body = JSON.parse(req.body.body);
    if (req.body && req.files) {

        if (req.body.bd&&req.body.title && Object.keys(req.files).length >0) {

            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {
                    await newBlog(req.body.bd,req.body.title,req.files);
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


//new genre

router.post("/ng", async (req, res) => {


console.log(req.body);
    if (req.body.t&&req.body.o) {


            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {

                    await updateCon("genres",['`order`'],['(`order`+1)'],[['`order`','>=',req.body.o]]);
                    await write("genres",['name','`order`'],[req.body.t,req.body.o]);
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

})


//update genre

router.post("/ug", async (req, res) => {



    if (req.body.t&&req.body.gID>=0&&req.body.o) {


            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {
                    await updateCon("genres",['`order`'],['(`order`+1)'],[['`order`','>=',req.body.o]]);
                    await updateCon('genres',['name','`order`'],[req.body.t,req.body.o],[['genreID','=',req.body.gID]]);
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

})


//delete genre

router.post("/dg", async (req, res) => {



    if (req.body.gID>=0) {


            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {
                    await deleteCon('products',[['genre','=',req.body.gID]]);
                    await deleteCon('genres',[['genreID','=',req.body.gID]]);
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

})

//update blog
router.post("/ub", async (req, res) => {


    req.body = JSON.parse(req.body.body);


    if (req.body.id && req.body.bd ) {




        auth(req.cookies, res, async (data) => {

            if ((await readCon("blogs", ['blogID'], [
                    ['blogID', '=', req.body.id]
                ])).length > 0) {


                console.log("Everything went well");

                try {
                    await updateBlog(req.body.id,req.body.files, req.body.bd,req.body.title);
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
    let usersIds = (await readCon(acourse ? 'coursessubscription' :"fellowshipssubscription", ['userID'], [
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
    console.log("user IDs left : "+usersIds.length);
    let bannedIds=(await readCon("banned",null,[['ID','=',courseID],['type','=',acourse? 0 : 1]])).map((e)=>e.userID);
    
    console.log(bannedIds);
    usersIds=usersIds.filter((e)=>!bannedIds.includes(e));

    console.log("user IDs left : "+usersIds.length);
    console.log(usersIds);

    if(usersIds.length<1)
    return;
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
            token: token.notToken,
     webpush:{
        "fcm_options": {
            "link": `http://localhost:5173/${acourse? "courses":"fellowships"}/${courseID}`
          }     }
        })))
    )).responses[0].error);

        
    }


    await writeMany("notifications",["userID","notification"],tokens.map((e)=>[e.userID,acourse?1:0,update?1:0,courseID]));


}


//notifity users that there is a new video
/**
 * 
 * @param {Number} courseID 
 * @param {Number} userID 
 * @param {Number} acourse 
 * @param {String} msg 
 * @returns 
 */
async function notifyAUsers(courseID,userID,msg,payment,acourse=true) {



    const name=(await readCon(acourse ?"courses" :"fellowships",[acourse? "courseName":"fellowshipName"],[[acourse ? "courseID":"fellowshipID",'=',courseID]]))[0];
    if (acourse){
        name.name=name.courseName;
    }else{
        name.name=name.fellowshipName;
    }


    //get their notification token
    const tokens = await readCon('login', ['notToken','userID'], [
        ['userID', '=', userID]
    ]);

    //send notifications to all of them
    //check if the number is more then 500 if it's more than this then group them

    await apps[0].messaging().send({

        notification: {
            title: "Update!",
            body: `you have paid ${payment}IQD your tuition for ${name.name} ${acourse ? "course":"fellowship"}`
        },
        token: tokens[0].notToken
    });
    

    await write("notifications",["userID","notification"],[userID,`$ ${payment}`]);
    // await writeMany("notifications",["userID","notification"],tokens.map((e)=>[e.userID,acourse?1:0,update?1:0,courseID]));


}



async function notifityUsersChapters(courseID,acourse=true,update=false,chapterID=null) {

    //get all the users that are in this course
    let usersIds = (await readCon(acourse ? 'coursessubscription' :"fellowshipssubscription", ['userID'], [
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
        video=(await readCon("chapter",["title"],[["chapterID",'=',chapterID]]))[0];



    }


    console.log("user IDs left : "+usersIds.length);

    let bannedIds=(await readCon("banned",null,[['ID','=',courseID],['type','=',acourse? 0 : 1]])).map((e)=>e.userID);
    
    console.log(bannedIds);
    usersIds=usersIds.filter((e)=>!bannedIds.includes(e));

    console.log("user IDs left : "+usersIds.length);
    console.log(usersIds);

    if(usersIds.length<1)
    return;


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
                                
                                body: (!update) ? `a new chapter has been uploaded to the ${name.name} ${acourse ? "course":"fellowship"} please check it out` :`a chapter "${video.title}" has been updated in ${name.name} ${acourse ? "course":"fellowship"} please check it out`
                            },
                            token: token.notToken,
                            data:{
                                chID:chapterID
                            }
                            
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
                                body: (!update) ? `a new video has been uploaded to the ${name.name} ${acourse ? "course":"fellowship"} please check it out` :`a video has "${video.title}" been updated in ${name.name} ${acourse ? "course":"fellowship"} please check it out`
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
                body: (!update) ? `a new chapter has been uploaded to the ${name.name} ${acourse ? "course":"fellowship"} please check it out` :`a chapter "${video.title}" has been updated in ${name.name} ${acourse ? "course":"fellowship"} please check it out`
            },
            token: token.notToken
        })))
    )).responses[0].error);

        
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

    let bannedIds=(await readCon("banned",null,[['ID','=',courseID],['type','=',acourse? 0 : 1]])).map((e)=>e.userID);
    
    console.log(bannedIds);
    usersIds=usersIds.filter((e)=>!bannedIds.includes(e));

    if (usersIds.length<1)
    return;
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

    req.body = JSON.parse(req.body.body);
    // req.body.fellowshipDuration = Number(req.body.fellowshipDuration);

    // req.body = Object.keys(req.body);
    // res.cookie("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsIjowLCJpYXQiOjE3MDQ2MTMxMTZ9.XngdKrHGUsC2zd-B1zmhC0A0vHsabbwb8HeLMveoL4Q",{httpOnly:true,maxAge:(60*60*60*24)});
    // res.sendStatus(200);
    console.log(req.body);
    // insert into courses (courseName,courseDuration,courseDetails) values(?,?,?);
    if (req.body.fellowshipName && req.body.fellowshipDetails &&  (req.body.fellowshipDuration) && req.body.id) {




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

    console.log( req.body);
    req.body = JSON.parse(req.body.body);

    // req.body.courseDuration = Number(req.body.courseDuration);

    // req.body = Object.keys(req.body);
    // res.cookie("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsIjowLCJpYXQiOjE3MDQ2MTMxMTZ9.XngdKrHGUsC2zd-B1zmhC0A0vHsabbwb8HeLMveoL4Q",{httpOnly:true,maxAge:(60*60*60*24)});
    // res.sendStatus(200);
    console.log(req.body);
    // insert into courses (courseName,courseDuration,courseDetails) values(?,?,?);
    if (req.body.courseName && req.body.courseDetails &&  (req.body.courseDuration)  && req.body.id) {




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

//archive course
router.post("/ac", async (req, res) => {
    req.body = JSON.parse(req.body.body);

    console.log( req.body);

    // req.body.courseDuration = Number(req.body.courseDuration);

    // req.body = Object.keys(req.body);
    // res.cookie("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsIjowLCJpYXQiOjE3MDQ2MTMxMTZ9.XngdKrHGUsC2zd-B1zmhC0A0vHsabbwb8HeLMveoL4Q",{httpOnly:true,maxAge:(60*60*60*24)});
    // res.sendStatus(200);
    // insert into courses (courseName,courseDuration,courseDetails) values(?,?,?);
    if (typeof(req.body.arch)=='number'&& req.body.id) {




        auth(req.cookies, res, async (data) => {

            if ((await readCon("courses", ['courseID'], [
                    ['courseID', '=', req.body.id]
                ])).length > 0) {


                console.log("Everything went well");

                try {
                    await updateCon("courses",['archived'],[req.body.arch],[['courseID','=',req.body.id]])
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

//archive fellowship
router.post("/af", async (req, res) => {


    // req.body.courseDuration = Number(req.body.courseDuration);
req.body = JSON.parse(req.body.body);
    // req.body = Object.keys(req.body);
    // res.cookie("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsIjowLCJpYXQiOjE3MDQ2MTMxMTZ9.XngdKrHGUsC2zd-B1zmhC0A0vHsabbwb8HeLMveoL4Q",{httpOnly:true,maxAge:(60*60*60*24)});
    // res.sendStatus(200);
    // insert into courses (courseName,courseDuration,courseDetails) values(?,?,?);
    console.log(req.body);
    if (req.body.arch!=null&& req.body.id) {

        auth(req.cookies, res, async (data) => {
            if ((await readCon("fellowships", ['fellowshipID'], [
                    ['fellowshipID', '=', req.body.id]
                ])).length > 0) {


                console.log("Everything went well");

                try {
                    await updateCon("fellowships",['archived'],[req.body.arch],[['fellowshipID','=',req.body.id]])
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


        }, (e) => {
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





//making user pass course
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


//remove offer
router.post("/rmof", (req, res) => {
 

    if (req.body) {

        if (typeof (req.body.id) == 'number') {

            auth(req.cookies, res, async (data) => {

        

                        try {
                            deleteCon("offers",[['offerID','=',req.body.id]])

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


//update offer
router.post("/uof", (req, res) => {
 

    if (req.body) {

        if (typeof (req.body.id) == 'number' && req.body.offer) {

            auth(req.cookies, res, async (data) => {

        

                        try {
                            await updateCon("offers",["offer"],[req.body.offer],[['offerID','=',req.body.id]])

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


//new offer
router.post("/nof", (req, res) => {
 
        if ( req.body.offer) {

            auth(req.cookies, res, async (data) => {

        

                        try {
                            await apps[0].firestore().collection("dentists").doc("offers").update({offer:req.body.offer});

                            // await deleteCon("offers",[['offerID','>=','0']]);
                            // await write("offers",['offer'],[JSON.stringify(req.body.offer)]);
                            // updateCon("offers",["offer"],[req.body.offer],[['offerID','=',req.body.id]])

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

    
});


//upload offer image
router.post("/uofi", (req, res) => {
 
    
    req.body = JSON.parse(req.body.body);
    console.log(req.body);
    if (req.body) {

        if (typeof (req.body.id) == 'number') {

            auth(req.cookies, res, async (data) => {

        

                        try {
                            const s3 = new aws.S3({
                                accessKeyId: 'AKIAT4PTBJP62OQ26E3R',
                                secretAccessKey: '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',
                                region: 'us-east-1',
                              });
                     
                      
                              const params = {
                                Bucket: 'dentists-iq',
                                Key: "offers/"+req.body.id.toString() ,
                                Body:req.files.files.data,
                                ACL: 'public-read', // Set the ACL permissions as needed
                              };
                            s3.putObject(params,(e,d)=>{

                                if(e){

                                    res.sendStatus(403);
                                    return;
                                }else{
                                    console.log("done done");
                                    console.log(d);
                                }
                            })
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

//delete offer image
router.post("/dofi", (req, res) => {
 

    if (req.body) {

        if (typeof (req.body.id) == 'number') {

            auth(req.cookies, res, async (data) => {

        

                        try {

                            const s3 = new aws.S3({
                                accessKeyId: 'AKIAT4PTBJP62OQ26E3R',
                                secretAccessKey: '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',
                                region: 'us-east-1',
                              });
               

                            s3.deleteObject({
                                Bucket:"dentists-iq",

                                Key:"/offers/"+req.body.id
                            })
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
//remove person from all fellowships and courses
router.post("/rpall", (req, res) => {
 

    if (req.body) {

        if (typeof (req.body.i) == 'number' && typeof (req.body.f) == 'number') {

            auth(req.cookies, res, async (data) => {

        

                        try {
                            await deleteCon("fellowshipssubscription",[['userID','=',req.body.i]])
                            await deleteCon("coursessubscription",[['userID','=',req.body.i]])
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

                    const s3 = new aws.S3({
                        accessKeyId: 'AKIAT4PTBJP62OQ26E3R',
                        secretAccessKey: '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',
                        region: 'us-east-1',
                      });
             
              
                      const listParams = {
                        Bucket:"dentists-iq",
                        Prefix:"products/"+req.body.id
                    };
                      

                      s3.listObjectsV2(listParams, function(err, data) {
                        if (err) {
                            console.error('Error listing objects:', err);
                        } else {
                            // Delete each object in the folder
                            const deleteParams = {
                                Bucket: "dentists-iq",
                                Delete: { Objects: [] }
                            };
                    
                            data.Contents.forEach((obj) => {
                                deleteParams.Delete.Objects.push({ Key: obj.Key });
                            });
                    
                            s3.deleteObjects(deleteParams, function(err, deleteData) {
                                if (err) {
                                    console.error('Error deleting objects:', err);
                                }
                            });
                        }
                    });

                    //   res.sendStatus(200);


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
    // console.log(req.body);

    req.body= JSON.parse(req.body.body)
    req.body.productPrice =Number(req.body.productPrice );
    req.body.id=Number(req.body.id);
    if (req.body.productName && req.body.productPrice && typeof (req.body.productPrice) == 'number' && req.body.id&&req.body.genre) {




        auth(req.cookies, res, async (data) => {

            if ((await readCon("products", ['productID'], [
                    ['productID', '=', req.body.id]
                ])).length > 0) {


                console.log("Everything went well");

                try {
                    await updateProduct(req.body.id, req.body.productName, req.body.productPrice,req.body.genre,req.body.discount,req.body.status ,req.files);
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

    
    // console.log(JSON.parse(req.body.body));
    // req.body.productPrice=Number(req.body.productPrice);
    // req.body = JSON.parse(req.body.body);
    // console.log(JSON.parse(req.body.files));

console.log(req.files);
    req.body=JSON.parse(req.body.body);
    console.log(typeof(req.files));
    console.log(req.body);
    if (req.body && req.files&&req.body.genre) {
        if (req.body.productName&&req.body.genre&&req.body.status != null&& typeof(req.body.productPrice) == "number") {

            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {
                    await newProduct(req.body.productName, req.body.productPrice,req.body.genre,req.body.discount,req.body.status, req.files);
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

    console.log(req.files);
    req.body = JSON.parse(req.body.body);

    // req.body.courseDuration = Number(req.body.courseDuration);

    // req.body = Object.keys(req.body);
    // res.cookie("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsIjowLCJpYXQiOjE3MDQ2MTMxMTZ9.XngdKrHGUsC2zd-B1zmhC0A0vHsabbwb8HeLMveoL4Q",{httpOnly:true,maxAge:(60*60*60*24)});
    // res.sendStatus(200);
    // insert into courses (courseName,courseDuration,courseDetails) values(?,?,?);
    if (req.body && req.files) {
        if (req.body.courseName) {

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

    req.body = JSON.parse(req.body.body);



    // req.body = Object.keys(req.body);
    // res.cookie("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsIjowLCJpYXQiOjE3MDQ2MTMxMTZ9.XngdKrHGUsC2zd-B1zmhC0A0vHsabbwb8HeLMveoL4Q",{httpOnly:true,maxAge:(60*60*60*24)});
    // res.sendStatus(200);
    console.log(req.body);
    // insert into courses (courseName,courseDuration,courseDetails) values(?,?,?);
    if (req.body && req.files) {
        if (req.body.fellowshipName ) {

            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {
                    await newfellowship(req.body.fellowshipName, req.body.fellowshipDuration, req.files, (req.body.fellowshipDetails ? req.body.fellowshipDetails : null));
                    res.sendStatus(200);
                } catch (error) {
                    res.send({
                        e: 1
                    });
                    return;
                }
                console.log(data);
                



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


//get users by name
router.post("/srch", async (req, res) => {


    if (req.body) {
        if (req.body.n) {

            auth(req.cookies, res, async (data) => {

                const reuslt = (await readCon("login", ["userID","username","email"], [
                    ['username', 'like', `%${req.body.n}%`]
                ]));
                res.send({
                    d: reuslt,
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

        if (typeof (req.body.i) == 'number' && typeof (req.body.f) == 'number'&&req.body.d &&req.body.groupID&&req.body.totalFee>=0&&req.body.remFee>=0) {

            auth(req.cookies, res, async (data) => {

                if ((await readCon("fellowships", ['fellowshipID'], [
                        ['fellowshipID', '=', req.body.f]
                    ])).length > 0) {
                    if ((await readCon("login", ['userID'], [
                            ['userID', '=', req.body.i]
                        ])).length > 0) {

                        try {
                            await write("fellowshipssubscription", ['fellowshipID', 'userID', 'status','expDate','totalFee','remainingFee','groupID'], [req.body.f, req.body.i, 0,(new Date(req.body.d)).toISOString().replace("Z",''),req.body.totalFee,req.body.remFee,req.body.groupID]);

                            if(Math.floor(req.body.totalFee-req.body.remFee)!=0){
                                await write("fellowshipstuition",[("fellowshipID"),'tuition','userID'],[req.body.f,Math.floor(req.body.totalFee-req.body.remFee),req.body.i]);
                          }else{
                            await write("fellowshipstuition",[("fellowshipID"),'tuition','userID'],[req.body.f,req.body.totalFee,req.body.i]);
                          }


                          

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
    console.log('DEBUGGING');
    console.log(req.body);

    if (req.body) {

        if (typeof (req.body.i) == 'number' && typeof (req.body.c) == 'number'&&req.body.d &&req.body.groupID&&req.body.totalFee>=0&&req.body.remFee>=0) {

            auth(req.cookies, res, async (data) => {

                if ((await readCon("courses", ['courseID'], [
                        ['courseID', '=', req.body.c]
                    ])).length > 0) {
                    if ((await readCon("login", ['userID'], [
                            ['userID', '=', req.body.i]
                        ])).length > 0) {
                        try {

                            (await write("coursessubscription", ['courseID', 'userID', 'status','expDate','totalFee','remainingFee','groupID'], [req.body.c, req.body.i, 0,(new Date(req.body.d)).toISOString().replace("Z",''),req.body.totalFee,req.body.remFee,req.body.groupID]));
                            
                            if(Math.floor(req.body.totalFee-req.body.remFee)!=0){
                                  await write("coursestuition",[("courseID"),'tuition','userID'],[req.body.c,Math.floor(req.body.totalFee-req.body.remFee),req.body.i]);

                            }else{
                                await write("coursestuition",[("courseID"),'tuition','userID'],[req.body.c,req.body.totalFee,req.body.i]);
                            }




                            // if((await readCon("groups",['groupID'],[['groupID','=',req.body.groupID]])).length>0){

                            // }else{
                            //     await write("groups",['groupID','level','userID'],[req.body.groupID,1,req.body.i]);
                            // }

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


async function newProduct(productName, productPrice,genre,discount,status, files) {

    const id = (await write("products", ["productName", "productPrice","productStatus",'discount','genre'], [productName, productPrice,status,discount,genre]));
    upload(files, "products", id.toString());


}


async function updateProduct(productID, productName, productPrice,genre,discount,status, files) {

    let fields = {};
    if (productName != -9) {
        fields["productName"] = productName;
    }
    if (productPrice != -9) {
        fields["productPrice"] = productPrice;
    }
    if (genre != -9) {
        fields["genre"] = genre;
    }
    if (discount != -9) {
        fields["discount"] = discount;
    }
    if (status != -9) {
        fields["status"] = status;
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
router.post("/gcv", async (req, res) => {



   
    if (typeof(req.body.cid)=='number') {

            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {
                    res.send({

                        d:(await readCon("videos",null,[['courseID','=',req.body.cid]]))
                    });
                    return;
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



//new course/fellowship video notification
router.post("/nvot", async (req, res) => {



   
    if (typeof(req.body.cid)=='number'||typeof(req.body.fid)=='number' && req.body.vid) {

    
                // notifityUsersFinalExams(req.body.cid || req.body.fid,req.body.cid ? true : false,);

                try {
                    await notifityUsers(req.body.cid || req.body.fid,req.body.cid ? true : false,true,req.body.vid);

                } catch (error) {
                    
                }
                res.sendStatus(200);


   

    } else {
        console.log("it stopped here");
        res.sendStatus(403);
        return;
    }

    // res.cookie()

})

//new course/fellowship notification
router.post("/not", async (req, res) => {



   
    if (typeof(req.body.cid)=='number'||typeof(req.body.fid)=='number') {

    
                // notifityUsersFinalExams(req.body.cid || req.body.fid,req.body.cid ? true : false,);

                try {
                    await notifityUsers(req.body.cid || req.body.fid,req.body.cid ? true : false);
                    // await notifityUsersChapters(req.body.cid || req.body.fid,req.body.cid ? true : false,false,12)
                    // notifyAUsers(7,1,"",20000,false)
                } catch (error) {
                    
                }
                res.sendStatus(200);


   

    } else {
        console.log("it stopped here");
        res.sendStatus(403);
        return;
    }

    // res.cookie()

})


//new account
router.post("/nacc", async (req, res) => {



    if (req.body.username &&req.body.email&& req.body.password&&typeof(req.body.level)=='number') {

            auth(req.cookies, res, async (data) => {

                try {
                    const id=(await write("login",["username","password","level",'status','email'],[req.body.username,await hash(req.body.password),req.body.level,0,req.body.email]));
                    await write("profile",['userID','courses','fellowships','email','username'],[id,null,null,req.body.email,req.body.username]);
                    const nodemailer = require("nodemailer");

                    const transporter = nodemailer.createTransport({
                      host: "smtp.mail.ru",
                      port: 465,
                      secure: true,
                      auth: {
                        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
                        user: "dentists-iq@mail.ru",
                        pass: "S4x0cMyN7N8f0H21vKBf",
                      },
                    });
                    
                    
                    await transporter.sendMail({
                      from:"dentists-iq@mail.ru",
                      to: req.body.email, // list of receivers
                      subject: "contacting us", // Subject line
                      text: `Hello ${req.body.username}, welcome to echo-dent! this is your password, please don't share it with anyone!`, // plain text body
                    }).then((e)=>{
                      console.log(e);
                    });
                    //send email to inform the user of the new password

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

//update account
router.post("/uacc", async (req, res) => {



    if (req.body.username&&req.body.userID &&req.body.email&& req.body.password&&typeof(req.body.level)=='number') {

            auth(req.cookies, res, async (data) => {

                try {

                    let fields = {};
                    if ( req.body.email != -9) {
                        fields["email"] =  req.body.email;
                        
                    const nodemailer = require("nodemailer");

                    const transporter = nodemailer.createTransport({
                      host: "smtp.mail.ru",
                      port: 465,
                      secure: true,
                      auth: {
                        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
                        user: "dentists-iq@mail.ru",
                        pass: "S4x0cMyN7N8f0H21vKBf",
                      },
                    });
                    
                    
                    await transporter.sendMail({
                      from:"dentists-iq@mail.ru",
                      to: req.body.email, // list of receivers
                      subject: "contacting us", // Subject line
                      text: `Hello ${req.body.username}, welcome to echo-dent! this is your password, please don't share it with anyone!`, // plain text body
                    });

                    }
                    if (req.body.username != -9) {
                        fields["username"] = req.body.username;
                    }
                    if ( req.body.password != -9) {
                        fields["password"] =  await hash(req.body.password);
                    }
                    if ( req.body.level != -9) {
                        fields["level"] =  req.body.level;

                    }
                    if ( req.body.status != -9) {
                        fields["status"] =  req.body.status;

                    }

                    if (Object.keys(fields).length > 0) {
                        await updateJSON("login", Object.keys(fields), Object.values(fields), [
                            ["userID", '=', req.body.userID]
                        ]);
                        delete fields['password'];
                        delete fields['level'];
                        delete fields['status'];

                        await updateJSON("profiles", Object.keys(fields), Object.values(fields), [
                            ["userID", '=', req.body.userID]
                        ]);
                    }
                    //send email to inform the user of the new password

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

//new chapter
router.post("/nch", async (req, res) => {



    if (req.body.ti &&req.body.ans&& req.body.q&&req.body.url&&req.body.t>=0&&req.body.ID&&req.body.chID) {

            auth(req.cookies, res, async (data) => {

                try {
                    await write("chapter",["title","answers","questions",'link','type',"ID",'chapterID'],[req.body.ti,JSON.stringify(req.body.ans),JSON.stringify(req.body.q),req.body.url,req.body.t,req.body.ID,req.body.chID]);
          

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

//update chapter
router.post("/uch", async (req, res) => {


    console.log(req.body);

    if (req.body.ti &&req.body.ans&& req.body.q&&req.body.url&&req.body.t>=0&&req.body.ID&&req.body.chID&&req.body.nchID) {

            auth(req.cookies, res, async (data) => {

                try {

                    let fields = {};
                    if (req.body.url != -9) {
                        fields["link"] = req.body.url;
                    }
                    if ( req.body.ans != -9) {
                        fields["answers"] =  JSON.stringify(req.body.ans);
                    }
                    if ( req.body.q != -9) {
                        fields["questions"] =  JSON.stringify(req.body.q);

                    }
                    if ( req.body.nchID != -9) {
                        fields["chapterID"] = req.body.nchID;
                        updateCon("results",['ID'],[req.body.nchID],[["type",'=',0]]);

                    }
                    if ( req.body.ti != -9) {
                        fields["title"] =  req.body.ti;

                    }
                    if (Object.keys(fields).length > 0) {
                        await updateJSON("chapter", Object.keys(fields), Object.values(fields), [
                            ["chapterID", '=', req.body.chID],['ID','=',req.body.ID],['type','=',req.body.t]
                        ]);
                    }else{

                        res.sendStatus(200);
                        return;
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


//update subscription
router.post("/usb", async (req, res) => {


    console.log(req.body);

    if (req.body.s>=0 &&req.body.exp&& req.body.joined&&req.body.rf && req.body.sid&&req.body.t >=0) {

            auth(req.cookies, res, async (data) => {

                try {

                    let fields = {};
                    if (req.body.s != -9) {
                        fields["status"] = req.body.s;
                    }
                    if ( req.body.exp != -9) {
                        fields["expDate"] =  req.body.exp;
                    }
                    if ( req.body.joined != -9) {
                        fields["joinedDate"] =  req.body.joinedDate;

                    }
                    if ( req.body.remainingFee != -9) {
                        fields["remainingFee"] = req.body.remainingFee;

                    }
                    if ( req.body.totalFee != -9) {
                        fields["totalFee"] = req.body.totalFee;

                    }
                    if ( req.body.groupID != -9) {
                        fields["groupID"] = req.body.groupID;

                    }
                    if (Object.keys(fields).length > 0) {
                        await updateCon((req.body.t ==0 ? "coursessubscription":"fellowshipssubscription"),Object.keys(fields),Object.values(fields),
                        [['subscriptionID','=',req.body.sid]]);


                        res.sendStatus(200);

                    }else{

                        res.sendStatus(200);
                        return;
                    }

          

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

//new final Exam
router.post("/nfxm", async (req, res) => {



    if (req.body.t>=0 &&req.body.ans&& req.body.q&&req.body.ending&&req.body.title&&req.body.startingDate&&req.body.ID&&req.body.v!=null&&req.body.type!=null&&req.body.groupID) {
console.log(req.body);
            auth(req.cookies, res, async (data) => {

                try {
                    if(!req.body.t){

                        switch (req.body.type) {
                            case 0:
                                await write("coursesperodicexams",["answers","questions",'ending','startingDate','title','visible',"courseID",'groupID'],[JSON.stringify(req.body.ans),JSON.stringify(req.body.q),` ${req.body.ending}`,`${req.body.startingDate}`,req.body.title,req.body.v,req.body.ID,req.body.groupID]);

                                break;
                                case 1:
                                    await write("coursesstageexams",["answers","questions",'ending','startingDate','title','visible',"courseID",'groupID'],[JSON.stringify(req.body.ans),JSON.stringify(req.body.q),` ${req.body.ending}`,`${req.body.startingDate}`,req.body.title,req.body.v,req.body.ID,req.body.groupID]);

                                break;
                                case 2:
                                    await write("coursesfinalexams",["answers","questions",'ending','startingDate','title','visible',"courseID",'groupID'],[JSON.stringify(req.body.ans),JSON.stringify(req.body.q),` ${req.body.ending}`,`${req.body.startingDate}`,req.body.title,req.body.v,req.body.ID,req.body.groupID]);

                                break;

                        }
                        // if(req.body.type){
                        //     await write("coursesperodicexams",["answers","questions",'ending','startingDate','title','visible',"courseID",'groupID'],[JSON.stringify(req.body.ans),JSON.stringify(req.body.q),` ${req.body.ending}`,`${req.body.startingDate}`,req.body.title,req.body.v,req.body.ID,req.body.groupID]);

                        // }else{
                        //     await write("coursesfinalexams",["answers","questions",'ending','startingDate','title','visible',"courseID",'groupID'],[JSON.stringify(req.body.ans),JSON.stringify(req.body.q),` ${req.body.ending}`,`${req.body.startingDate}`,req.body.title,req.body.v,req.body.ID,req.body.groupID]);

                        // }

                    }else{

                        
                        switch (req.body.type) {
                            case 0:
                                await write("fellowshipsperodicexams",["answers","questions",'ending','startingDate','title','visible',"fellowshipID",'groupID'],[JSON.stringify(req.body.ans),JSON.stringify(req.body.q),` ${req.body.ending}`,`${req.body.startingDate}`,req.body.title,req.body.v,req.body.ID,req.body.groupID]);

                                break;
                                case 1:
                                    await write("fellowshipsstageexams",["answers","questions",'ending','startingDate','title','visible',"fellowshipID",'groupID'],[JSON.stringify(req.body.ans),JSON.stringify(req.body.q),` ${req.body.ending}`,`${req.body.startingDate}`,req.body.title,req.body.v,req.body.ID,req.body.groupID]);

                                break;
                                case 2:
                                    await write("fellowshipsfinalexams",["answers","questions",'ending','startingDate','title','visible',"fellowshipID",'groupID'],[JSON.stringify(req.body.ans),JSON.stringify(req.body.q),` ${req.body.ending}`,`${req.body.startingDate}`,req.body.title,req.body.v,req.body.ID,req.body.groupID]);

                                break;

                        }

                        // if(req.body.type){
                        //     await write("fellowshipsperodicexams",["answers","questions",'ending','startingDate','title','visible',"fellowshipID",'groupID'],[JSON.stringify(req.body.ans),JSON.stringify(req.body.q),` ${req.body.ending}`,`${req.body.startingDate}`,req.body.title,req.body.v,req.body.ID,req.body.groupID]);

                        // }else{
                        //     await write("fellowshipsfinalexams",["answers","questions",'ending','startingDate','title','visible',"fellowshipID",'groupID'],[JSON.stringify(req.body.ans),JSON.stringify(req.body.q),` ${req.body.ending}`,`${req.body.startingDate}`,req.body.title,req.body.v,req.body.ID,req.body.groupID]);

                        // }
                    }

                    // await write("finalexams",["type","answers","questions",'ending','startingDate','title','perodic','visible',"ID",'groupID'],[req.body.t,JSON.stringify(req.body.ans),JSON.stringify(req.body.q),` ${req.body.ending}`,`${req.body.startingDate}`,req.body.title,req.body.type,req.body.v,req.body.ID,req.body.groupID]);
          

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
        console.log([req.body.t>=0 ,req.body.ans, req.body.q,req.body.ending,req.body.title,req.body.startingDate,req.body.ID,req.body.v!=null,req.body.type!=null,req.body.groupID]);
        console.log("it stopped here");
        res.sendStatus(403);
        return;
    }

    // res.cookie()

})



//add person to group
router.post("/aptg", async (req, res) => {



    if (req.body.uID&&req.body.gID>=0&&req.body.l) {

            auth(req.cookies, res, async (data) => {

                try {
                    await write("`groups`",["groupID","userID","level"],[req.body.gID,req.body.uID,req.body.l]);
          

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

//get group
router.post("/gch", async (req, res) => {



    if (req.body.t>=0&&req.body.ID) {

            auth(req.cookies, res, async (data) => {

                try {
                    res.send({

                        d:(await readCon("chapter",null,[["ID",'=',req.body.ID],['type','=',req.body.t]]))
                    });

                    return;

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



//get courses subscriptions
router.post("/gcs", async (req, res) => {

    console.log("SOMETHING WENT REALLY WRONG");


    if (req.body.cid) {
        console.log("SOMETHING WENT REALLY WRONG");

            auth(req.cookies, res, async (ff) => {
                console.log("SOMETHING WENT REALLY WRONG");

                try {
                    let sql = require("mysql2/promise");

                    const conn =  await sql.createConnection({
                        host:"dentists.cjmuc6u8m5ok.us-east-1.rds.amazonaws.com",
                        user:"root",
                        database:"dentists",
                        password:"grabyOli0001",
                        port:3306,
                        timezone:"+03:00",
                    })         
                    console.log("SOMETHING WENT REALLY WRONG");
           
                    const data= (await conn.query(`select login.username,login.email,login.userID,coursessubscription.userID,coursessubscription.subscriptionID,coursessubscription.joinedDate,coursessubscription.expDate,coursessubscription.groupID,coursessubscription.totalFee,coursessubscription.remainingFee,coursessubscription.status from login, coursessubscription where courseID=${req.body.cid} and login.userID = coursessubscription.userID;`))[0];
                    await conn.end();
                    console.log(data);

                    res.send({
d:data

                    });

                    return;

                } catch (error) {
                    console.log(error);
                    res.sendStatus(403);
                    return;
                }



            }, (e) => {
console.log(e);

                console.log("something went wrong");



            }, 0)

   

    } else {
        console.log("it stopped here");
        res.sendStatus(403);
        return;
    }

    // res.cookie()

});


//send certain course to all users
router.post("/gcc/",async (req,res)=>{

    if(!req.body.id){


        res.sendStatus(404);
        return;
    }
    const data = (await readCon("courses",null,[['courseID','=',req.body.id]]));
    res.send({d:data[0]});
});

//send certain fellowship to all users
router.post("/gcf/",async (req,res)=>{

    if(!req.body.id){


        res.sendStatus(404);
        return;
    }
    const data = (await readCon("fellowships",null,[['fellowshipID','=',req.body.id]]));
    res.send({d:data[0]});
});

//send courses to all users
router.post("/gc/",async (req,res)=>{


    const data = (await read("courses"));
    res.send({d:data});
});
//send fellowships to all users
router.post("/gf/",async (req,res)=>{


    const data = (await read("fellowships"));
    res.send({d:data});
});

//get fellowships subscriptions
router.post("/gfs", async (req, res) => {



    if (req.body.fid) {

            auth(req.cookies, res, async (data) => {

                try {

                    let sql = require("mysql2/promise");

                    const conn =  await sql.createConnection({
                        host:"dentists.cjmuc6u8m5ok.us-east-1.rds.amazonaws.com",
                        user:"root",
                        database:"dentists",
                        password:"grabyOli0001",
                        port:3306,
                        timezone:"+03:00",
                    })                    
                    const data= (await conn.query(`select login.username,login.email,login.userID,fellowshipssubscription.userID,fellowshipssubscription.subscriptionID,fellowshipssubscription.joinedDate,fellowshipssubscription.expDate,fellowshipssubscription.totalFee,fellowshipssubscription.remainingFee,fellowshipssubscription.groupID,fellowshipssubscription.status from login, fellowshipssubscription where fellowshipID=${req.body.fid} and login.userID = fellowshipssubscription.userID;`))[0];
                    await conn.end();


                    res.send({
d:data

                    });

                    return;

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

});


//get payments history
router.post("/gph", async (req, res) => {



    if (req.body.t>=0&&req.body.ID&&req.body.userID) {

            auth(req.cookies, res, async (data) => {

                try {
                    res.send({

                        d:(await readCon((req.body.t ? "fellowshipstuition":"coursestuition"),null,[[req.body.t?"fellowshipID": "courseID",'=',req.body.ID],['userID','=',req.body.userID]]))
                    });

                    return;

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

//get all final exams
router.post("/gafxm", async (req, res) => {



            auth(req.cookies, res, async (data) => {

                try {
                    res.send({

                        d:(await read("finalexam",['answers','questions','examID','title']))
                    });

                    return;

                } catch (error) {
                    console.log(error);
                    res.sendStatus(403);
                    return;
                }



            }, () => {


                console.log("something went wrong");



            }, 0)

   

    

    // res.cookie()

})

//update group info
router.post("/ugi", async (req, res) => {



    if (req.body.uID&&req.body.gID>=0&&req.body.l) {

            auth(req.cookies, res, async (data) => {

                try {

                    let fields = {};
                    if (req.body.l != -9) {
                        fields["level"] = req.body.l;
                    }


                    if (Object.keys(fields).length > 0) {
                        await updateCon("`groups`", Object.keys(fields), Object.values(fields), [
                            ["userID", '=', req.body.uID],['groupID','=',req.body.gID]
                        ]);
                    }else{

                        res.sendStatus(200);
                        return;
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

//update final exam
router.post("/ufxm", async (req, res) => {

console.log(req.body);

    if (req.body.t!=null &&req.body.ans&& req.body.q&&req.body.duration&&req.body.ID&&req.body.sd&&req.body.title&&req.body.visible>=-9&&req.body.groupID&&req.body.type!=null) {

            auth(req.cookies, res, async (data) => {

                try {

                    let fields = {};
                    if (req.body.duration != -9) {
                        fields["ending"] = req.body.duration;
                    }
                    if ( req.body.ans != -9) {
                        fields["answers"] =  JSON.stringify(req.body.ans);
                    }
                    if ( req.body.q != -9) {
                        fields["questions"] =  JSON.stringify(req.body.q);

                    }
                    if ( req.body.sd != -9) {
                        fields["startingDate"] =  req.body.sd;

                    }
                    if ( req.body.title != -9) {
                        fields["title"] =  req.body.title;

                    }
                    if ( req.body.groupID != -9) {
                        fields["groupID"] =  req.body.groupID;

                    }
                    if ( req.body.visible != -9) {
                        fields["visible"] =  req.body.visible;

                    }
                    if (Object.keys(fields).length > 0) {

                        if(req.body.type){
                            if(req.body.t){
                                await updateJSON("fellowshipsperodicexams", Object.keys(fields), Object.values(fields), [
                                    ["examID", '=', req.body.ID]
                                ]);
    
                            }else{
                                await updateJSON("fellowshipsfinalexams", Object.keys(fields), Object.values(fields), [
                                    ["examID", '=', req.body.ID]
                                ]);
                                
                            }
                        }else{

                            if(req.body.t){
                                await updateJSON("coursesfinalexams", Object.keys(fields), Object.values(fields), [
                                    ["examID", '=', req.body.ID]
                                ]);
    
                            }else{
                                await updateJSON("coursesperodicexams", Object.keys(fields), Object.values(fields), [
                                    ["examID", '=', req.body.ID]
                                ]);
                                
                            }
                        }

                   
                    }else{

                        res.sendStatus(200);
                        return;
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
// //update Exam
// router.post("/uxm", async (req, res) => {



//     if (req.body.ch &&req.body.ans&& req.body.q&&req.body.duration&&req.body.chid) {

//             auth(req.cookies, res, async (data) => {

//                 try {

//                     let fields = {};
//                     if (req.body.ch != -9) {
//                         fields["chapter"] = req.body.ch;
//                     }
//                     if ( req.body.ans != -9) {
//                         fields["answers"] =  req.body.ans;
//                     }
//                     if ( req.body.q != -9) {
//                         fields["questions"] =  req.body.q;

//                     }
//                     if ( req.body.duration != -9) {
//                         fields["duration"] =  req.body.duration;

//                     }

//                     if (Object.keys(fields).length > 0) {
//                         await updateCon("exams", Object.keys(fields), Object.values(fields), [
//                             ["chapter", '=', req.body.chid]
//                         ]);
//                     }else{

//                         res.sendStatus(200);
//                         return;
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

    console.log( req.body);
    req.body = JSON.parse(req.body.body);


   
    if (req.body.vt && req.body.url&&typeof(req.body.vid)=='number' && req.body.fid&&req.body.o>=0) {

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
                    if ( req.body.o != -9) {
                        fields["`order`"] =  req.body.o;
                        await updateCon("fellowshipvideos",['`order`'],["(`order`+1)"],[["fellowshipID",'=',req.body.fid],['`order`',">=",req.body.o]]);

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


//update mac
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




//update course video
router.post("/ucv", async (req, res) => {



   
    if (req.body.vt && req.body.url&&typeof(req.body.vid)=='number'&&req.body.cid&&req.body.o>=0) {

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
                    if ( req.body.o != -9) {
                        fields["`order`"] =  req.body.o;
                        await updateCon("videos",['`order`'],["(`order`+1)"],[["courseID",'=',req.body.cid],['`order`',">=",req.body.o]]);

                    }

                    if (Object.keys(fields).length > 0) {
                        console.log(await updateCon("videos", Object.keys(fields), Object.values(fields), [
                            ["videoID", '=', req.body.vid]
                        ]));
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


    req.body= JSON.parse(req.body.body)


   
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
                      res.sendStatus(200);

                      s3.deleteObject({

                        Bucket:"dentists-iq",
                        Key:"blogs/"+req.body.bid
                      },(e,d)=>{



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


//delete an exam
router.post("/dexm", async (req, res) => {



   
    if (req.body.exmID) {

            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {


                    await deleteCon("finalexams",[['examID','=',req.body.exmID]]);
                    res.sendStatus(200);
                    return;
   

                

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

    req.body= JSON.parse(req.body.body)


   
    if (req.body.id &&typeof(req.body.id)=='number') {

            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {


                    await deleteCon("videos",[['courseID','=',req.body.id]]);
                    await deleteCon("coursessubscription",[['courseID','=',req.body.id]]);
                    await deleteCon("courses",[['courseID','=',req.body.id]]);

                    const s3 = new aws.S3({
                        accessKeyId: 'AKIAT4PTBJP62OQ26E3R',
                        secretAccessKey: '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',
                        region: 'us-east-1',
                      });

                      s3.deleteObject({

                        Bucket:"dentists-iq",
                        Key:"courses/"+req.body.id
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


//delete fellowship
router.post("/df", async (req, res) => {

req.body= JSON.parse(req.body.body)

   
    if (req.body.id &&typeof(req.body.id)=='number') {
console.log("to be contiuned");
            auth(req.cookies, res, async (data) => {
                console.log("to be contiuned");

                console.log("Everything went well");

                try {


                    await deleteCon("fellowshipvideos",[['fellowshipID','=',req.body.id]]);
                    await deleteCon("fellowshipssubscription",[['fellowshipID','=',req.body.id]]);
                    await deleteCon("fellowships",[['fellowshipID','=',req.body.id]]);

                    const s3 = new aws.S3({
                        accessKeyId: 'AKIAT4PTBJP62OQ26E3R',
                        secretAccessKey: '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',
                        region: 'us-east-1',
                      });

                      s3.deleteObject({

                        Bucket:"dentists-iq",
                        Key:"fellowships/"+req.body.id
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



//delete selected exams
router.post("/dsexms", async (req, res) => {



   
    if (req.body.xms) {

            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {


                    await deleteCon("finalexams",[["examID",'in',`(${req.body.xms.join(",")})`]]);
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


//handlePayment
router.post("/hP", async (req, res) => {


try {
    
   console.log(req.body);
    if (req.body.subscriptionID>=0&&req.body.payment&&req.body.acourse!=null&&req.body.ID&&req.body.userID>=0&&req.body.newDate) {

        auth(req.cookies, res, async (data) => {


            console.log("Everything went well");

            try {

                console.log(req.body);
                await handlePaymentUnbanningAndExpDate(...Object.values(req.body))
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
} catch (error) {
 console.log(error);
    res.sendStatus(403);
}

    // res.cookie()

})

/**
 * 
 * @param {String}id 
 * @param {String} blogDetails 
 */
async function updateBlog(id,  files, blogDetails = null,title=null) {


    let fields = {};
    if (blogDetails != -9) {
        fields["blogDetails"] = blogDetails;
    }
    if (title != -9) {
        fields["title"] = title;
    }


    if (Object.keys(fields).length > 0) {
        await updateCon("blogs", Object.keys(fields), Object.values(fields), [
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
async function newBlog (blogDetails,title, files) {

    const id = (await write("blogs", ["blogDetails",'title'], [ blogDetails,title]));
    upload(files, "blogs", id.toString());


}


/**
 * 
 * @param {Number} subscriptionID 
 * @param {Number} payment 
 * @param {boolean} acourse 
 * @param {Number} ID 
 * @param {Number} userID 
 * @param {String} newDate 
 * @param {Boolean} unband 
 */
async function handlePaymentUnbanningAndExpDate(subscriptionID,  payment, acourse,ID,userID,newDate,gID,renew,totalFee) {
    
    await payTuition(subscriptionID,payment,acourse,ID,userID,(new Date(newDate)).toISOString().replace("Z",''),gID,renew,totalFee);
    if(payment>0)
    await removingSomeoneFromBannedTable(userID,acourse,ID);
    // if(newDate)
    // await changeExpDate(newDate,subscriptionID,acourse);

}

async function payTuition(subscriptionID,  payment, acourse,ID,userID, newDate,gID,renew,totalFee) {


    if(renew){
        console.log("Doing thiss");
        await updateCon((acourse? "coursessubscription":"fellowshipssubscription"),['remainingFee','expDate','groupID','totalFee'],[payment,newDate,gID,totalFee],[['subscriptionID','=',subscriptionID]]);

    }else{
        await updateCon((acourse? "coursessubscription":"fellowshipssubscription"),['remainingFee','expDate','groupID'],[`(remainingFee-${payment})`,newDate,gID],[['subscriptionID','=',subscriptionID]]);

    }
    await updateCon((acourse? "coursessubscription":"fellowshipssubscription"),['remainingFee'],[0],[['remainingFee','<',0],['subscriptionID','=',subscriptionID]]);
        console.log("done done ND FINISHED");

        await write(acourse?"coursestuition":"fellowshipstuition",[(acourse ?"courseID":"fellowshipID"),'tuition','userID'],[ID,payment,userID]);
        //send an email
        const user=readCon("login",['email'],[['userID','=',userID]])[0];
        const nodemailer = require("nodemailer");

        const transporter = nodemailer.createTransport({
          host: "smtp.mail.ru",
          port: 465,
          secure: true,
          auth: {
            // TODO: replace `user` and `pass` values from <https://forwardemail.net>
            user: "dentists-iq@mail.ru",
            pass: "S4x0cMyN7N8f0H21vKBf",
          },
        });
        
        
        await transporter.sendMail({
          from:"dentists-iq@mail.ru",
          to: user.email+"@gmail.com", // list of receivers
          subject: "contacting us", // Subject line
          text: `This email is for confirmation that you paid ${payment} for ${acourse ?"course":"fellowship"}`, // plain text body
        }).then((e)=>{
          console.log(e);
        });
}

async function removingSomeoneFromBannedTable(userID,acourse,ID) {

await deleteCon("banned",[['userID','=',userID],['type','=',acourse? 0 : 1],['ID','=',ID]]);

}

async function changeExpDate(newDate,subscriptionID,acourse) {
    updateCon((acourse? "coursessubscription":"fellowshipssubscription"),['expDate'],[newDate],[['subscriptionID','=',subscriptionID]]);

}
module.exports = router;