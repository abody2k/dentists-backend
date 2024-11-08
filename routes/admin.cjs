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
aws.config.update({region: 'me-central-1'});

const { hash, verify } = require("argon2");

const router = require("express").Router();

// get final exams
router.post("/gfxms", async (req, res) => {





    auth(req.cookies, res, async (data) => {



        try {

            if(req.body.t){
                const fellowshipsstageexams= await readCon("fellowshipsstageexams",null,[['fellowshipID','=',req.body.id]]);
                const fellowshipsfinalexams= await readCon("fellowshipsfinalexams",null,[['fellowshipID','=',req.body.id]]);
                const fellowshipsperodicexams= await readCon("fellowshipsperodicexams",null,[['fellowshipID','=',req.body.id]]);
                const fellowshipschapterexams= await readCon("fellowshipschapterexams",null,[['fellowshipID','=',req.body.id]]);

                res.send({d:{
                    
                    
                    fellowshipsfinalexams:fellowshipsfinalexams,
                    fellowshipsstageexams:fellowshipsstageexams,
                    fellowshipsperodicexams:fellowshipsperodicexams,
                    fellowshipschapterexams:fellowshipschapterexams,
                    l:(await readCon("fellowships",['levels'],[['fellowshipID','=',req.body.id]]))[0].levels

                }})
            }else{

                const coursesfinalexams= await readCon("coursesfinalexams",null,[['courseID','=',req.body.id]]);
                const coursesstageexams= await readCon("coursesstageexams",null,[['courseID','=',req.body.id]]);
                const coursesperodicexams= await readCon("coursesperodicexams",null,[['courseID','=',req.body.id]]);
    
                
                res.send({d:{
                    
                    
                    coursesfinalexams:coursesfinalexams,

                    coursesstageexams:coursesstageexams,

                    coursesperodicexams:coursesperodicexams,
                    l:(await readCon("courses",['levels'],[['courseID','=',req.body.id]]))[0].levels

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
        await apps[0].firestore().collection("dentists").doc("about").update({about:req.body.aus});

    }

        if(req.body.pn){
            await apps[0].firestore().collection("dentists").doc("about").update({phoneNumber:req.body.pn});

        }
        if(req.body.email){
            await apps[0].firestore().collection("dentists").doc("about").update({email:req.body.email});

        }
        if(req.body.name){
            await apps[0].firestore().collection("dentists").doc("about").update({name:req.body.name});

        }
        if(req.body.social){
            await apps[0].firestore().collection("dentists").doc("about").update({social:req.body.social});

        }
        if(req.body.location){
            await apps[0].firestore().collection("dentists").doc("about").update({location:req.body.location});

        }
        auth(req.cookies, res, async (data) => {

            res.sendStatus(200);

        }, () => {


            console.log("something went wrong");
            res.sendStatus(403);


        }, 0)



    

    // res.cookie()

});


//update or add a cv
router.post("/aucv", async (req, res) => {


    req.body = JSON.parse(req.body.body);
    console.log(req.body);
    console.log(req.files);
    if (req.body && req.files) {

        if (req.body.code&& Object.keys(req.files).length >0) {

            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {
                    upload(req.files,'cvs',req.body.code);

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


//update logo or bg
router.post("/alobg", async (req, res) => {


    req.body = JSON.parse(req.body.body);
    console.log(req.body);
    console.log(req.files);
    if (req.body && req.files) {


            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {


                    const s3 = new aws.S3({
                        accessKeyId: '',
                        secretAccessKey: 'Y4s7pd41NOubY4aOHIkNOsE/PW61Git5T8v+p+It',
                        region: 'me-central-1',
                      });
                      
                    const file = req.files[Object.keys(req.files)[0]];
                      
                      const params = {
                        Bucket: 'echo-dentists',
                        Key: req.body.bg ? "bg":"EDTULOGO.png",
                        Body: file.data,
                        ACL: 'public-read', // Set the ACL permissions as needed,
                        ContentDisposition: `inline`,
                      };
                    
                      // Upload the file to S3
                      
                      s3.upload(params, (err, data) => {
                        if (err) {
                          console.log(err);
                          throw err;
                        }else{
                          console.log("done uploading");
                          console.log(data);
                        }
                    
                      });  


                    if(req.body.bg){

                    }else{ //upload logo

                    }
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


router.post("/nb", async (req, res) => {



    req.body = JSON.parse(req.body.body);
    if (req.body && req.files) {

        if (req.body.bd&& Object.keys(req.files).length >0) {

            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {
                    
                    res.sendStatus({i:(await newBlog(req.body.bd,req.files))});

                } catch (error) {
                    console.log(error);
                    res.send({
                        e: 1
                    });
                    return;
                }



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

//delete payment

router.post("/rmpymt", async (req, res) => {



    if (req.body.id>0 && req.body.c != null) {


            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {
                    await deleteCon(req.body.c?'coursestuition':"fellowshipstuition",[['tuitionID','=',req.body.id]]);
                    await write(req.body.c?"coursesremovedpayments": "fellowshipsremovedpayments",['userID',req.body.c?'courseID':"fellowshipID",'payment'],[req.body.userID,req.body.cid,req.body.payment])
                    //
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



            }, 2)

        

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

console.log(Object(req.files));

    if (req.body.id && req.body.bd ) {




        auth(req.cookies, res, async (data) => {

            if ((await readCon("blogs", ['blogID'], [
                    ['blogID', '=', req.body.id]
                ])).length > 0) {


                console.log("Everything went well");

                try {
                    await updateBlog(req.body.id,req.files ? req.files.files: null, req.body.bd);
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
        [acourse ? "courseID" :"fellowshipID", '=', courseID],['status','=',0]
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
        video=(await readCon(acourse ?"videos" :"fellowshipvideos",["videoTitle"],[["videoID",'=',videoID]]))[0];
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


        for (let index = 0; index < Math.ceil((tokens.length) / 500.0); index++) {
            let currentTokens = [];

            for (let j = index * 500; j < (index + 1) * 500; j++) {
                if (tokens.length <= j) {

                    currentTokens=currentTokens.filter((s)=>s.notToken!=null);
                    if(currentTokens.length<=0){
                        continue;
                    }


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
                    await writeMany("notifications",["userID","notification"],currentTokens.map((e)=>[e.userID,acourse?1:0,update?1:0,name.name,videoID ? 0 : 1]));


                    break;
                } else {
                    currentTokens.push(tokens[j])
                }

                if (j + 1 == (index + 1) * 500) { // send the current 500 tokens

                    currentTokens=currentTokens.filter((s)=>s.notToken!=null);
                    if(currentTokens.length<=0){
                        continue;
                    }

           
                    await app().messaging().sendEach(


                        currentTokens.map(token => (Object({
                            notification: {
                                title: "Update!",
                                body: (!update) ? `a new video has been uploaded to the ${name.name} ${acourse ? "course":"fellowship"} please check it out` :`a video has "${video.name}" been updated in ${name.name} ${acourse ? "course":"fellowship"} please check it out`
                            },
                            token: token.notToken
                        })))
                    );
                    await writeMany("notifications",["userID","notification"],currentTokens.map((e)=>[e.userID,acourse?1:0,update?1:0,name.name,videoID ? 0 : 1]));


                    currentTokens = [];
                }
            }

        }

    } else {

        if(tokens.map((e)=>e.notToken).filter((s)=>s!=null).length<=0){
            return;

        }
       console.log((await apps[0].messaging().sendEach(

        tokens.map(token => (Object({
            notification: {
                title: "Update!",
                body: (!update) ? `a new video has been uploaded to the ${name.name} ${acourse ? "course":"fellowship"} please check it out` :`a video "${video.name}" has been updated in ${name.name} ${acourse ? "course":"fellowship"} please check it out`
            },
            token: token.notToken,
     webpush:{
        "fcm_options": {
            "link": `https://echo-dent.net/${acourse? "courses":"fellowships"}/${courseID}`
          }     }
        })))
    )).responses[0].error);

        
    }

    await writeMany("notifications",["userID","notification"],tokens.map((e)=>[e.userID,acourse?1:0,update?1:0,name.name,videoID ? 0 : 1]));

    // await writeMany("notifications",["userID","notification"],tokens.map((e)=>[e.userID,acourse?1:0,update?1:0,courseID]));


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
        [acourse ? "courseID" :"fellowshipID", '=', courseID],['status','=',0]
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

console.log(chapterID);
    if (update){
        video=(await readCon("chapter",["title"],[["chapterID",'=',chapterID]]))[0];



    }



    console.log("user IDs left : "+usersIds.length);

    let bannedIds=(await readCon("banned",null,[['ID','=',courseID],['type','=',acourse? 0 : 1]])).map((e)=>e.userID);
    
    console.log(bannedIds);
    usersIds=usersIds.filter((e)=>!bannedIds.includes(e));

    console.log("user IDs left : "+usersIds.length);
    console.log(usersIds);
    console.log(video);

    if(usersIds.length<1)
    return;


    //get their notification token
    const tokens = await readCon('login', ['notToken','userID'], [
        ['userID', 'in', `(${usersIds.join(',')})`]
    ]);

    //send notifications to all of them
    //check if the number is more then 500 if it's more than this then group them

    if ((tokens).length > 500) {


        for (let index = 0; index < Math.ceil((tokens.length) / 500.0); index++) {
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
                    await writeMany("notifications",["userID","notification"],currentTokens.map((e)=>[e.userID,acourse?1:0,update?1:0,name.name,2]));


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
                    await writeMany("notifications",["userID","notification"],currentTokens.map((e)=>[e.userID,acourse?1:0,update?1:0,name.name,2]));


                    currentTokens = [];
                }
            }

        }

    } else {

        console.log("we are here");
        console.log(tokens);


        
        if(tokens.map((e)=>e.notToken).filter((s)=>s!=null).length<=0){
            return;

        }
        console.log(name);
       console.log((await apps[0].messaging().sendEach(

        tokens.map(token => (Object({
            notification: {
                title: "Update!",
                body: (!update) ? `a new chapter has been uploaded to the ${name.name} ${acourse ? "course":"fellowship"} please check it out` :`a chapter "${video.title}" has been updated in ${name.name} ${acourse ? "course":"fellowship"} please check it out`
            },
            token: token.notToken,
     webpush:{
        "fcm_options": {
            "link": `https://echo-dent.net/${acourse? "courses":"fellowships"}/${courseID}`
          }     }
        })))
    )).responses[0].error);


    
        // (await apps[0].messaging().sendEach(


        //     tokens.map(token => (Object({
        //         notification: {
        //             title: "Update!",
        //             body: (!update) ? `a new chapter has been uploaded to the ${name.name} ${acourse ? "course":"fellowship"} please check it out` :`a chapter "${video.title}" has been updated in ${name.name} ${acourse ? "course":"fellowship"} please check it out`
        //         },
        //         token: token.notToken
        //     })))
        // ))

        
    }

    await writeMany("notifications",["userID","notification"],tokens.map((e)=>[e.userID,acourse?1:0,update?1:0,name.name,2]));

    // await writeMany("notifications",["userID","notification"],tokens.map((e)=>[e.userID,acourse?1:0,update?1:0,courseID]));


}


//notifity users that there is a new video
/**
 * 
 * @param {*} courseID 
 */
async function notifityUsersFinalExams(courseID,acourse=true) {




    //get all the users that are in this course
    const usersIds = (await readCon(acourse ? 'coursessubscription' :"fellowshipssubscription", ['userID'], [
        [acourse ? "courseID" :"fellowshipID", '=', courseID,['status','=',0]]
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


        for (let index = 0; index < Math.ceil((tokens.length) / 500.0); index++) {
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
    if (req.body.fellowshipName &&req.body.levels>0&& req.body.fellowshipDetails &&  (req.body.fellowshipDuration) && req.body.id&&req.body.expDate) {




        auth(req.cookies, res, async (data) => {

            if ((await readCon("fellowships", ['fellowshipID'], [
                    ['fellowshipID', '=', req.body.id]
                ])).length > 0) {


                console.log("Everything went well");

                try {
                    await updateFellowship(req.body.id, req.body.fellowshipName, req.body.fellowshipDuration, req.files,req.body.expDate,req.body.levels, req.body.fellowshipDetails);
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


//update fellowship
router.post("/uft", async (req, res) => {

    req.body = JSON.parse(req.body.body);
    // req.body.fellowshipDuration = Number(req.body.fellowshipDuration);

    // req.body = Object.keys(req.body);
    // res.cookie("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsIjowLCJpYXQiOjE3MDQ2MTMxMTZ9.XngdKrHGUsC2zd-B1zmhC0A0vHsabbwb8HeLMveoL4Q",{httpOnly:true,maxAge:(60*60*60*24)});
    // res.sendStatus(200);
    console.log(req.body);
    // insert into courses (courseName,courseDuration,courseDetails) values(?,?,?);
    if ( req.body.id&&req.body.expDate) {




        auth(req.cookies, res, async (data) => {

            if ((await readCon("fellowships", ['fellowshipID'], [
                    ['fellowshipID', '=', req.body.id]
                ])).length > 0) {


                console.log("Everything went well");

                try {
                await updateCon("fellowships",['expDate'],[req.body.expDate],[['fellowshipID','=',req.body.id]])
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
    if (req.body.courseName && req.body.levels>0&&req.body.courseDetails &&  (req.body.courseDuration)  && req.body.id&&req.body.expDate) {




        auth(req.cookies, res, async (data) => {

            if ((await readCon("courses", ['courseID'], [
                    ['courseID', '=', req.body.id]
                ])).length > 0) {


                console.log("Everything went well");

                try {
                    await updateCourse(req.body.id, req.body.courseName, req.body.courseDuration, req.files,req.body.expDate,req.body.levels, req.body.courseDetails);
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


//update course
router.post("/uct", async (req, res) => {

    console.log( req.body); 
    req.body = JSON.parse(req.body.body);

    // req.body.courseDuration = Number(req.body.courseDuration);
 
    // req.body = Object.keys(req.body);
    // res.cookie("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsIjowLCJpYXQiOjE3MDQ2MTMxMTZ9.XngdKrHGUsC2zd-B1zmhC0A0vHsabbwb8HeLMveoL4Q",{httpOnly:true,maxAge:(60*60*60*24)});
    // res.sendStatus(200);
    console.log(req.body);
    // insert into courses (courseName,courseDuration,courseDetails) values(?,?,?);
    if (req.body.expDate && req.body.id) {




        auth(req.cookies, res, async (data) => {

            if ((await readCon("courses", ['courseID'], [
                    ['courseID', '=', req.body.id]
                ])).length > 0) {


                console.log("Everything went well");

                try {
                    await updateCon("courses",['expDate'],[req.body.expDate],[['courseID','=',req.body.id]]);
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

//archive course
router.post("/ac", async (req, res) => {
    req.body = JSON.parse(req.body.body);

    console.log( req.body);

    // req.body.courseDuration = Number(req.body.courseDuration);

    // req.body = Object.keys(req.body);
    // res.cookie("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsIjowLCJpYXQiOjE3MDQ2MTMxMTZ9.XngdKrHGUsC2zd-B1zmhC0A0vHsabbwb8HeLMveoL4Q",{httpOnly:true,maxAge:(60*60*60*24)});
    // res.sendStatus(200);
    // insert into courses (courseName,courseDuration,courseDetails) values(?,?,?);
    if (typeof(Number(req.body.arch))=='number'&& req.body.id) {




        auth(req.cookies, res, async (data) => {

            if ((await readCon("courses", ['courseID'], [
                    ['courseID', '=', req.body.id]
                ])).length > 0) {


                console.log("Everything went well");

                try {
                    await updateCon("courses",['archived'],[req.body.arch],[['courseID','=',req.body.id]]);
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
                                accessKeyId: '',
                                secretAccessKey: 'Y4s7pd41NOubY4aOHIkNOsE/PW61Git5T8v+p+It',
                                region: 'me-central-1',
                              });
                     
                      
                              const params = {
                                Bucket: 'echo-dentists',
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
                                accessKeyId: '',
                                secretAccessKey: 'Y4s7pd41NOubY4aOHIkNOsE/PW61Git5T8v+p+It',
                                region: 'me-central-1',
                              });
               

                            s3.deleteObject({
                                Bucket:"echo-dentists",

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
                        accessKeyId: '',
                        secretAccessKey: 'Y4s7pd41NOubY4aOHIkNOsE/PW61Git5T8v+p+It',
                        region: 'me-central-1',
                      });
             
              
                      const listParams = {
                        Bucket:"echo-dentists",
                        Prefix:"products/"+req.body.id
                    };
                      

                      s3.listObjectsV2(listParams, function(err, data) {
                        if (err) {
                            console.error('Error listing objects:', err);
                        } else {
                            // Delete each object in the folder
                            const deleteParams = {
                                Bucket: "echo-dentists",
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



            }, 2)

        

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



        }, 2)



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
                let id;
                try {
                   id = await newProduct(req.body.productName, req.body.productPrice,req.body.genre,req.body.discount,req.body.status, req.files);
                } catch (error) {
                    console.log(error);
                    res.send({
                        e: 1
                    });
                    return;
                }
                console.log(data);
                res.send({
                    id:id
                });



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
console.log(req.body);
// req.files= req.body.files;
    console.log(req.files);
    req.body = JSON.parse(req.body.body);

    // req.body.courseDuration = Number(req.body.courseDuration);

    // req.body = Object.keys(req.body);
    // res.cookie("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsIjowLCJpYXQiOjE3MDQ2MTMxMTZ9.XngdKrHGUsC2zd-B1zmhC0A0vHsabbwb8HeLMveoL4Q",{httpOnly:true,maxAge:(60*60*60*24)});
    // res.sendStatus(200);
    // insert into courses (courseName,courseDuration,courseDetails) values(?,?,?);
    if (req.body && req.files) {
        if (req.body.courseName&& typeof(req.body.levels)=="number") {

            auth(req.cookies, res, async (data) => {

                let courseID;
                console.log("Everything went well");

                try {
                   courseID= await newCourse(req.body.courseName, req.body.courseDuration, req.files,req.body.expDate,req.body.levels, (req.body.courseDetails ? req.body.courseDetails : null));
                } catch (error) {
                    console.log(error);
                    res.send({
                        e: 1
                    });
                    return;
                }
                console.log(data);
                res.send({

                    id:courseID
                });



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
        if (req.body.fellowshipName&& typeof(req.body.levels)=="number" ) {

            auth(req.cookies, res, async (data) => {

                let fellowshipID;
                console.log("Everything went well");

                try {
                 fellowshipID=  await newfellowship(req.body.fellowshipName, req.body.fellowshipDuration, req.files,req.body.expDate,req.body.levels, (req.body.fellowshipDetails ? req.body.fellowshipDetails : null));
                    res.send({


                        id:fellowshipID
                    });
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

//get groups
router.post("/gcp", async (req, res) => {


    if (req.body) {
        if (req.body.ID && req.body.course!=null) {

            auth(req.cookies, res, async (data) => {

   
                res.send({
                    g: await readCon(req.body.course?"coursessubscription":"fellowshipssubscription",['distinct groupID'],[[req.body.course?'courseID':"fellowshipID",'=',req.body.ID]])

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
                            await write("fellowshipssubscription", ['fellowshipID', 'userID', 'status','expDate','totalFee','remainingFee','groupID'], [req.body.f, req.body.i, 0,`STR_TO_DATE("${(new Date(req.body.d)).toLocaleString('en-GB', { hour12: false }).replace(",",'')}","%d/%m/%Y %T")`,req.body.totalFee,req.body.remFee,req.body.groupID]);

                            if(Math.floor(req.body.totalFee-req.body.remFee)!=0){
                                await write("fellowshipstuition",[("fellowshipID"),'tuition','userID',"lastOne",'expDate'],[req.body.f,Math.floor(req.body.totalFee-req.body.remFee),req.body.i,0,`STR_TO_DATE("${(new Date(req.body.d)).toLocaleString('en-GB', { hour12: false }).replace(",",'')}","%d/%m/%Y %T")`]);
                          }else{
                            await write("fellowshipstuition",[("fellowshipID"),'tuition','userID',"lastOne",'expDate'],[req.body.f,req.body.totalFee,req.body.i,1,`STR_TO_DATE("${(new Date(req.body.d)).toLocaleString('en-GB', { hour12: false }).replace(",",'')}","%d/%m/%Y %T")`]);
                          }


                          
                          // read the profile
                          // check if the fellowship exists
                          //

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

                            
                            (await write("coursessubscription", ['courseID', 'userID', 'status','expDate','totalFee','remainingFee','groupID'], [req.body.c, req.body.i, 0,`STR_TO_DATE("${(new Date(req.body.d)).toLocaleString('en-GB', { hour12: false }).replace(",",'')}","%d/%m/%Y %T")`,req.body.totalFee,req.body.remFee,req.body.groupID]));
                            
                            if(Math.floor(req.body.totalFee-req.body.remFee)!=0){
                                  await write("coursestuition",[("courseID"),'tuition','userID',"lastOne",'expDate'],[req.body.c,Math.floor(req.body.totalFee-req.body.remFee),req.body.i,0,`STR_TO_DATE("${(new Date(req.body.d)).toLocaleString('en-GB', { hour12: false }).replace(",",'')}","%d/%m/%Y %T")`]);

                            }else{
                                await write("coursestuition",[("courseID"),'tuition','userID',"lastOne",'expDate'],[req.body.c,req.body.totalFee,req.body.i,1,`STR_TO_DATE("${(new Date(req.body.d)).toLocaleString('en-GB', { hour12: false }).replace(",",'')}","%d/%m/%Y %T")`]);
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
async function newCourse(courseName, courseDuration, files,expDate,levels, courseDetails = null) {

    let id ;
    
    const mysql = require("mysql2")
    
     
    if(expDate){
        id= (await write("courses", ["courseName", "courseDuration", "courseDetails","expDate","levels"], [courseName, courseDuration,mysql.escape(courseDetails),
        
        `STR_TO_DATE("${(new Date(expDate)).toLocaleString('en-GB', { hour12: false }).replace(",",'')}","%d/%m/%Y %T")`
        

        ,levels]));  
    }else{
        id= (await write("courses", ["courseName", "courseDuration", "courseDetails","levels"], [courseName, courseDuration, mysql.escape(courseDetails),levels]));  
    }
  
    upload(files, "courses", id.toString());

    return id;


}


async function newProduct(productName, productPrice,genre,discount,status, files) {

    const id = (await write("products", ["productName", "productPrice","productStatus",'discount','genre'], [productName, productPrice,status,discount,genre]));
    upload(files, "products", id.toString());
    return id;


}


async function uploadCV(files,id) {

    upload(files, "cvs", id.toString());


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
async function newfellowship(fellowshipName, fellowshipDuration, files,expDate,levels, fellowshipDetails = null) {

    let id;

    const mysql = require("mysql2")
    
    
    if(expDate){

        id= (await write("fellowships", ["fellowshipName", "fellowshipDuration", "fellowshipDetails","expDate","levels"], [fellowshipName, fellowshipDuration,mysql.escape(fellowshipDetails) ,
            `STR_TO_DATE("${(new Date(expDate)).toLocaleString('en-GB', { hour12: false }).replace(",",'')}","%d/%m/%Y %T")`
            ,levels]));
    }else{
        id= (await write("fellowships", ["fellowshipName", "fellowshipDuration", "fellowshipDetails","levels"], [fellowshipName, fellowshipDuration, mysql.escape(fellowshipDetails),levels]));

    }

    upload(files, "fellowships", id.toString());

    return id;


}

/**
 * 
 * @param {String}fellowshipName 
 * @param {Number} fellowshipDuration 
 * @param {String} fellowshipDetails 
 */
async function updateFellowship(id, fellowshipName, fellowshipDuration, files,expDate,levels, fellowshipDetails = null) {

    let fields = {};
    if (fellowshipName != -9) {
        fields["fellowshipName"] = fellowshipName;
    }
    if (fellowshipDetails != -9) {
        const mysql = require("mysql2")
        fields["fellowshipDetails"] =  mysql.escape(fellowshipDetails) ;
    }


    if (fellowshipDuration != -9) {
        fields["fellowshipDuration"] = fellowshipDuration;
    }

    if (expDate != -9) {
        fields["expDate"] =`STR_TO_DATE("${(new Date(expDate)).toLocaleString('en-GB', { hour12: false }).replace(",",'')}","%d/%m/%Y %T")`;
    }
    if (levels != -9) {
        fields["levels"] = levels;
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
async function updateCourse(id, courseName, courseDuration, files,expDate,levels, courseDetails = null) {


    console.log([id, courseName, courseDuration,expDate,levels, courseDetails]);

    console.log("HERE WE ARE");

    let fields = {};
    if (courseName != -9) {
        fields["courseName"] = courseName;
    }
    if (courseDetails != -9) {
        const mysql = require("mysql2")
        fields["courseDetails"] = mysql.escape(courseDetails);
    }


    if (courseDuration != -9) {
        fields["courseDuration"] = courseDuration;
    }

    if (expDate != -9) {
        fields["expDate"] =`STR_TO_DATE("${(new Date(expDate)).toLocaleString('en-GB', { hour12: false }).replace(",",'')}","%d/%m/%Y %T")`;
    }
    if (levels != -9) {
        fields["levels"] = levels;
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


   
    if (req.body.vt && req.body.url&&typeof(req.body.cid)=='number'&&typeof(req.body.o)=='number'&&typeof(req.body.level)=='number') {

            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {
                    await updateCon("videos",['`order`'],["(`order`+1)"],[["courseID",'=',req.body.cid],['`order`',">=",req.body.o]]);

                    await write("videos",["videoUrl","videoTitle","courseID",'`order`','level'],[req.body.url,req.body.vt,req.body.cid,req.body.o,req.body.level]);

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

//get courses videos
router.post("/gcv", async (req, res) => {



   
    if (typeof(req.body.cid)=='number') {

            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {
                    res.send({

                        d:(await readCon("videos",null,[['courseID','=',req.body.cid]])),
                        l:(await readCon("courses",['levels'],[['courseID','=',req.body.cid]]))[0].levels
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


//get fellowship videos
router.post("/gfv", async (req, res) => {



   
    if (typeof(req.body.fid)=='number') {

            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {
                    res.send({

                        d:(await readCon("fellowshipvideos",null,[['fellowshipID','=',req.body.fid]])),
                        l:(await readCon("fellowships",['levels'],[['fellowshipID','=',req.body.fid]]))[0].levels
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



    console.log(req.body);
   
    if (typeof(req.body.cid)=='number'||typeof(req.body.fid)=='number') {

    
                // notifityUsersFinalExams(req.body.cid || req.body.fid,req.body.cid ? true : false,);

                try {

                    if(req.body.vid){
                        await notifityUsers(req.body.cid || req.body.fid,req.body.cid ? true : false,true,req.body.vid);

                    }
                    if(req.body.chid){
                        console.log(req.body.chid);
                        await notifityUsersChapters(req.body.cid || req.body.fid,req.body.cid ? true : false,true,req.body.chid);

                    }
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

    req.body = JSON.parse(req.body.body);

 


    if (req.body.username &&req.body.email&&req.body.code&& req.body.password&&typeof(req.body.level)=='number'&&typeof(req.body.gender)=='number') {

            auth(req.cookies, res, async (data) => {

                try {
                    let id;
if(req.body.phonenumber){
    id=(await write("login",["username","password","level",'status','code','email','phonenumber',"gender"],[req.body.username,await hash(req.body.password),req.body.level,0,req.body.code,req.body.email,req.body.phonenumber,req.body.gender]));

}else{
    id=(await write("login",["username","password","level",'status','code','email','gender'],[req.body.username,await hash(req.body.password),req.body.level,0,req.body.code,req.body.email,req.body.gender]));

}         
if(req.files){
    upload(req.files,"pfps",req.body.code);
}
                   await write("profiles",['userID','courses','fellowships','email','username'],[id,null,null,req.body.email,req.body.username]);
                    const nodemailer = require("nodemailer");

                    const transporter = nodemailer.createTransport({
                        host: "smtp.mail.ru",
                        port: 465,
                        secure: true,
                        auth: {
                          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
                          user: "",
                          pass: "S4x0cMyN7N8f0H21vKBf",
                        },
                      });
                    
                    
                    await transporter.sendMail({
                      from:"",
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



    req.body = JSON.parse(req.body.body);


    console.log(req.body);

    if (req.body.username&&req.body.userID &&req.body.email&&req.body.code&&typeof(req.body.level)=='number') {

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
                          user: ,
                          pass: "S4x0cMyN7N8f0H21vKBf",
                        },
                      });
                    
                    
                    await transporter.sendMail({
                      from:,
                      to: req.body.email, // list of receivers
                      subject: "contacting us", // Subject line
                      text: `Hello ${req.body.username}, welcome to echo-dent! this is your password, please don't share it with anyone!`, // plain text body
                    });

                    }


                    let user;
                    let pass=false;

                    if(req.body.code){

                        user = (await readCon("login",['code'],[['userID','=',req.body.userID]]))[0];
                        pass= user.code != req.body.code;

                    }
                    if (req.body.username != -9) {
                        fields["username"] = req.body.username;
                    }
                    if ( req.body.password ) {
                        fields["password"] =  await hash(req.body.password);
                    }
                    if ( req.body.level != -9) {
                        fields["level"] =  req.body.level;

                    }
                    if ( req.body.status>=0 ) {
                        fields["status"] =  req.body.status;

                    }
                    if ( req.body.gender>=0 ) {
                        fields["gender"] =  req.body.gender;

                    }
                    if ( req.body.code && req.body.code != user.code) {
                        fields["code"] =  req.body.code;


                        
                        const aws = require('aws-sdk');
                        aws.config.update({region: 'me-central-1'});
                        const s3 = new aws.S3({        accessKeyId: '',
                            secretAccessKey: 'Y4s7pd41NOubY4aOHIkNOsE/PW61Git5T8v+p+It',
                            region: 'me-central-1',});



let params = {
    Bucket: 'echo-dentists',
    Key: "cvs/"+req.body.code+".pdf" ,
  CopySource: `/echo-dentists/cvs/${user.code}.pdf`,
  ACL: 'public-read', // Set the ACL permissions as needed

};


s3.copyObject(params, (err, data) => {
  if (err) {
    console.error('Error copying object:', err);
    console.log(data);
  } else {
    console.log('Object copied successfully:', data);
    // Now delete the original object
    s3.deleteObject({ Bucket:  'echo-dentists', Key: `cvs/${user.code}.pdf` }, (deleteErr) => {
      if (deleteErr) {
        console.error('Error deleting original object:', deleteErr);
      } else {
        console.log('Original object deleted successfully');
      }
    });
  }
});

params = {
    Bucket: 'echo-dentists',
    Key: "pfps/"+req.body.code ,
  CopySource: "/echo-dentists/pfps/"+user.code,
};



if(req.files){


    upload(req.files,"pfps",req.body.code);
}else{

    s3.copyObject(params, (err, data) => {
  if (err) {
    console.error('Error copying object:', err);
  } else {
    console.log('Object copied successfully:', data);
    // Now delete the original object
    s3.deleteObject({ Bucket:  'echo-dentists', Key:"/pfps/"+user.code }, (deleteErr) => {
      if (deleteErr) {
        console.error('Error deleting original object:', deleteErr);
      } else {
        console.log('Original object deleted successfully');
        
      }
    });
  }
});
}




                    }
                    if ( req.body.phonenumber ) {
                        fields["phonenumber"] =  req.body.phonenumber;

                    }

                    if (Object.keys(fields).length > 0) {
                        await updateJSON("login", Object.keys(fields), Object.values(fields), [
                            ["userID", '=', req.body.userID]
                        ]);
                        delete fields['password'];
                        delete fields['level'];
                        delete fields['status'];

                        // await updateJSON("profiles", Object.keys(fields), Object.values(fields), [
                        //     ["userID", '=', req.body.userID]
                        // ]);
                    }

                    if(req.files&&(!pass)){
                        upload(req.files,"pfps",req.body.code);
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



    if (req.body.ti &&req.body.ans&& req.body.q&&req.body.url&&req.body.t>=0&&req.body.ID&&req.body.chID&&req.body.level>=0) {

            auth(req.cookies, res, async (data) => {

                try {
                    await write("chapter",["title","answers","questions",'link','type',"ID",'chapterID',"level"],[req.body.ti,JSON.stringify(req.body.ans),JSON.stringify(req.body.q),req.body.url,req.body.t,req.body.ID,req.body.chID,req.body.level]);
                    await notifityUsersChapters(req.body.ID,req.body.t ? false : true,false,req.body.chID);

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

    if (req.body.ti &&req.body.ans&& req.body.q&&req.body.url&&req.body.t>=0&&req.body.ID&&req.body.chID) {

            auth(req.cookies, res, async (data) => {

                try {

                    let fields = {};
                    if (req.body.url) {
                        fields["link"] = req.body.url;
                    }
                    if ( req.body.ans != -9) {
                        fields["answers"] =  JSON.stringify(req.body.ans);
                    }
                    if ( req.body.q != -9) {
                        fields["questions"] =  JSON.stringify(req.body.q);

                    }
                    if ( req.body.level ) {
                        fields["level"] =  Number(req.body.level);

                    }
                    if ( req.body.nchID && req.body.chID!=req.body.chID) {
                        fields["chapterID"] = req.body.nchID;
                        // updateCon("results",['ID'],[req.body.nchID],[["type",'=',0]]);

                    }
                    if ( req.body.ti != -9) {
                        fields["title"] =  req.body.ti;

                    }

                    console.log(fields);
                    if (Object.keys(fields).length > 0) {
                        try {
                            await updateJSON("chapter", Object.keys(fields), Object.values(fields), [
                                ["chapterID", '=', req.body.chID],['ID','=',req.body.ID],['type','=',req.body.t]
                            ]);
                        } catch (error) {
                            console.log(error);
                            res.sendStatus(403);
                            return;
                        }
                        console.log('done done');
                    }else{

                        res.sendStatus(200);
                        return;
                    }

          
                    console.log('heeeeer4');

                } catch (error) {
                    console.log('heeeeer');
                    console.log(error);
                    res.sendStatus(403);
                    return;
                }

                console.log(data);
                res.sendStatus(200);
                return;


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


//update admin data
router.post("/uadmn", async (req, res) => {
    console.log("we arrived here");



            auth(req.cookies, res, async (data) => {
                console.log("we arrived here");

                try {
                    console.log("we arrived here");

                    let fields = {};
                    let p;
                    if (req.body.e) {
                        fields["email"] = req.body.e;
                        p = await readCon('login',['password'],[['level','=',req.body.l]]);
                        if(p.length>0){

                            if(await require("argon2").verify(p[0].password,req.body.p.toString())){

                            }else{
                                console.log("wrong password");
                                res.sendStatus(403);
                                return;
                            }
                            
                            
                       

                        }else{
                            console.log("wrong password");
                            res.sendStatus(403);
                            return;
                        }
                    }
                    if ( req.body.op && req.body.np) {

                        p = await readCon('login',['password'],[['level','=',req.body.l]]);
                        if(p.length>0){

                            if(await require("argon2").verify(p[0].password,req.body.op.toString())){
                                fields["password"] =  await hash(req.body.np);

                            }else{
                                console.log("wrong password");
                                res.sendStatus(403);
                                return;
                            }
                            
                            
                       

                        }
                    }

                    console.log("we arrived here");
                    if (Object.keys(fields).length > 0) {
                        try {
                            await updateCon("login", Object.keys(fields), Object.values(fields), [
                                ["level", '=', req.body.l]
                            ]);
                        } catch (error) {
                            console.log(error);
                            res.sendStatus(403);
                            return;
                        }
                        console.log('done done');
                    }else{

                        res.sendStatus(200);
                        return;
                    }

          

                } catch (error) {
                    console.log('heeeeer');
                    console.log(error);
                    res.sendStatus(403);
                    return;
                }

                console.log(data);
                res.sendStatus(200);
                return;


            }, () => {


                console.log("something went wrong");



            }, 0)

   

    

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



    if (req.body.t>=0 &&req.body.ans&& req.body.q&&req.body.title&&req.body.ID&&req.body.v!=null&&req.body.type!=null&&req.body.groupID) {
console.log(req.body);

if(req.body.type!=0){

    if(!req.body.ending|| !req.body.startingDate){

res.sendStatus(403);
        return;
    }
}


            auth(req.cookies, res, async (data) => {

                let id;

                try {
                    console.log("look");
                    if(!req.body.t){
                        console.log("look");

                        switch (req.body.type) {
                            case 1:
                                if(req.body.note){
                                    if(req.body.passing){
                                       id= await write("coursesperodicexams",["answers","questions",'ending','startingDate','title','visible',"courseID",'groupID','note','passing','level'],[JSON.stringify(req.body.ans),JSON.stringify(req.body.q),` ${req.body.ending}`,`${req.body.startingDate}`,req.body.title,req.body.v,req.body.ID,req.body.groupID,req.body.note,req.body.passing,req.body.level]);

                                    }else{
                                       id= await write("coursesperodicexams",["answers","questions",'ending','startingDate','title','visible',"courseID",'groupID','note','level'],[JSON.stringify(req.body.ans),JSON.stringify(req.body.q),` ${req.body.ending}`,`${req.body.startingDate}`,req.body.title,req.body.v,req.body.ID,req.body.groupID,req.body.note,req.body.level]);

                                    }

                                }else{
                                    console.log('we came here');

                                    if(req.body.passing){
                                        id=   await write("coursesperodicexams",["answers","questions",'ending','startingDate','title','visible',"courseID",'groupID','passing','level'],[JSON.stringify(req.body.ans),JSON.stringify(req.body.q),` ${req.body.ending}`,`${req.body.startingDate}`,req.body.title,req.body.v,req.body.ID,req.body.groupID,req.body.passing,req.body.level]);

                                    }else{
                                        id= await write("coursesperodicexams",["answers","questions",'ending','startingDate','title','visible',"courseID",'groupID','level'],[JSON.stringify(req.body.ans),JSON.stringify(req.body.q),` ${req.body.ending}`,`${req.body.startingDate}`,req.body.title,req.body.v,req.body.ID,req.body.groupID,req.body.level]);

                                    }
                                }

                                break;
                                case 2:

                                if(req.body.note){

                                    if(req.body.passing){

                                        id= await write("coursesstageexams",["answers","questions",'ending','startingDate','title','visible',"courseID",'groupID','note','passing','level'],[JSON.stringify(req.body.ans),JSON.stringify(req.body.q),` ${req.body.ending}`,`${req.body.startingDate}`,req.body.title,req.body.v,req.body.ID,req.body.groupID,req.body.note,req.body.passing,req.body.level]);

                                    }else{
                                        id= await write("coursesstageexams",["answers","questions",'ending','startingDate','title','visible',"courseID",'groupID','note','level'],[JSON.stringify(req.body.ans),JSON.stringify(req.body.q),` ${req.body.ending}`,`${req.body.startingDate}`,req.body.title,req.body.v,req.body.ID,req.body.groupID,req.body.note,req.body.level]);

                                        
                                    }



                                }else{

                                    if(req.body.passing){

                                        id= await write("coursesstageexams",["answers","questions",'ending','startingDate','title','visible',"courseID",'groupID','passing','level'],[JSON.stringify(req.body.ans),JSON.stringify(req.body.q),` ${req.body.ending}`,`${req.body.startingDate}`,req.body.title,req.body.v,req.body.ID,req.body.groupID,req.body.passing,req.body.level]);

                                    }else{

                                        id= await write("coursesstageexams",["answers","questions",'ending','startingDate','title','visible',"courseID",'groupID','level'],[JSON.stringify(req.body.ans),JSON.stringify(req.body.q),` ${req.body.ending}`,`${req.body.startingDate}`,req.body.title,req.body.v,req.body.ID,req.body.groupID,req.body.level]);
                                        
                                    }


                                }

                                break;
                                case 3:
                                    if(req.body.note){
                                        if(req.body.passing){

                                            id=  await write("coursesfinalexams",["answers","questions",'ending','startingDate','title','visible',"courseID",'groupID',"note",'passing','level'],[JSON.stringify(req.body.ans),JSON.stringify(req.body.q),` ${req.body.ending}`,`${req.body.startingDate}`,req.body.title,req.body.v,req.body.ID,req.body.groupID,req.body.note,req.body.passing,req.body.level]);

                                        }else{
    
                                            id=  await write("coursesfinalexams",["answers","questions",'ending','startingDate','title','visible',"courseID",'groupID',"note",'level'],[JSON.stringify(req.body.ans),JSON.stringify(req.body.q),` ${req.body.ending}`,`${req.body.startingDate}`,req.body.title,req.body.v,req.body.ID,req.body.groupID,req.body.note,req.body.level]);
                                            
                                        }
    

                                    }else{

                                        if(req.body.passing){

                                            id= await write("coursesfinalexams",["answers","questions",'ending','startingDate','title','visible',"courseID",'groupID','passing','level'],[JSON.stringify(req.body.ans),JSON.stringify(req.body.q),` ${req.body.ending}`,`${req.body.startingDate}`,req.body.title,req.body.v,req.body.ID,req.body.groupID,req.body.passing,req.body.level]);

                                        }else{
    
                                            id= await write("coursesfinalexams",["answers","questions",'ending','startingDate','title','visible',"courseID",'groupID','level'],[JSON.stringify(req.body.ans),JSON.stringify(req.body.q),` ${req.body.ending}`,`${req.body.startingDate}`,req.body.title,req.body.v,req.body.ID,req.body.groupID,req.body.level]);
                                            
                                        }
    

                                    }

                                break;

                        }
                        // if(req.body.type){
                        //     await write("coursesperodicexams",["answers","questions",'ending','startingDate','title','visible',"courseID",'groupID'],[JSON.stringify(req.body.ans),JSON.stringify(req.body.q),` ${req.body.ending}`,`${req.body.startingDate}`,req.body.title,req.body.v,req.body.ID,req.body.groupID]);

                        // }else{
                        //     await write("coursesfinalexams",["answers","questions",'ending','startingDate','title','visible',"courseID",'groupID'],[JSON.stringify(req.body.ans),JSON.stringify(req.body.q),` ${req.body.ending}`,`${req.body.startingDate}`,req.body.title,req.body.v,req.body.ID,req.body.groupID]);

                        // }

                    }else{

                        
                        switch (req.body.type) {


                            case 0 :

                            if(req.body.note){

                                id= await write("fellowshipschapterexams",["answers","questions",'title','visible',"fellowshipID",'groupID','note','level'],[JSON.stringify(req.body.ans),JSON.stringify(req.body.q),req.body.title,req.body.v,req.body.ID,req.body.groupID,req.body.note,req.body.level]);
                            }else{
                                id=  await write("fellowshipschapterexams",["answers","questions",'title','visible',"fellowshipID",'groupID','level'],[JSON.stringify(req.body.ans),JSON.stringify(req.body.q),req.body.title,req.body.v,req.body.ID,req.body.groupID,req.body.level]);

                            }


                            break;
                            case 1:

                            if(req.body.note){

                                id= await write("fellowshipsperodicexams",["answers","questions",'ending','startingDate','title','visible',"fellowshipID",'groupID','note','level'],[JSON.stringify(req.body.ans),JSON.stringify(req.body.q),` ${req.body.ending}`,`${req.body.startingDate}`,req.body.title,req.body.v,req.body.ID,req.body.groupID,req.body.note,req.body.level]);
                            }else{
                                id=  await write("fellowshipsperodicexams",["answers","questions",'ending','startingDate','title','visible',"fellowshipID",'groupID','level'],[JSON.stringify(req.body.ans),JSON.stringify(req.body.q),` ${req.body.ending}`,`${req.body.startingDate}`,req.body.title,req.body.v,req.body.ID,req.body.groupID,req.body.level]);

                            }
                                break;
                                case 2:
console.log('hwew qw EW');
                                if(req.body.note){

                                    id=   await write("fellowshipsstageexams",["answers","questions",'ending','startingDate','title','visible',"fellowshipID",'groupID','note','level'],[JSON.stringify(req.body.ans),JSON.stringify(req.body.q),` ${req.body.ending}`,`${req.body.startingDate}`,req.body.title,req.body.v,req.body.ID,req.body.groupID,req.body.note,req.body.level]);

                                }else{
                                    id=  await write("fellowshipsstageexams",["answers","questions",'ending','startingDate','title','visible',"fellowshipID",'groupID','level'],[JSON.stringify(req.body.ans),JSON.stringify(req.body.q),` ${req.body.ending}`,`${req.body.startingDate}`,req.body.title,req.body.v,req.body.ID,req.body.groupID,req.body.level]);

                                }

                                break;
                                case 3:
                                    if(req.body.note){
                                        id=   await write("fellowshipsfinalexams",["answers","questions",'ending','startingDate','title','visible',"fellowshipID",'groupID','note','level'],[JSON.stringify(req.body.ans),JSON.stringify(req.body.q),` ${req.body.ending}`,`${req.body.startingDate}`,req.body.title,req.body.v,req.body.ID,req.body.groupID,req.body.note,req.body.level]);

                                    }else{
                                        id=  await write("fellowshipsfinalexams",["answers","questions",'ending','startingDate','title','visible',"fellowshipID",'groupID','level'],[JSON.stringify(req.body.ans),JSON.stringify(req.body.q),` ${req.body.ending}`,`${req.body.startingDate}`,req.body.title,req.body.v,req.body.ID,req.body.groupID,req.body.level]);

                                    }


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
                res.send({
                    id:id
                });


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

                        d:(await readCon("chapter",null,[["ID",'=',req.body.ID],['type','=',req.body.t]])),
                        l:(await readCon(req.body.t==0 ? "courses":"fellowships",['levels'],[[req.body.t==0 ?'courseID':"fellowshipID",'=',req.body.ID]]))[0].levels

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


    if (req.body.cid&&req.body.l) {
        console.log("SOMETHING WENT REALLY WRONG");

            auth(req.cookies, res, async (ff) => {
                console.log("SOMETHING WENT REALLY WRONG");

                try {
                    let sql = require("mysql2/promise");

                    const conn =  await sql.createConnection({
                        host:"dentists.ct0im0y0ome2.me-central-1.rds.amazonaws.com",
                        user:"root",
                        database:"dentists",
                        password:"grabyOli0001",
                        port:3306,connectTimeout:900000,

                        timezone:"+03:00",
                    })         
                    console.log("SOMETHING WENT REALLY WRONG");
           
                    const data= (await conn.query(`select login.username,login.email,login.userID,coursessubscription.userID,coursessubscription.subscriptionID,coursessubscription.level,coursessubscription.joinedDate,coursessubscription.expDate,coursessubscription.groupID,coursessubscription.totalFee,coursessubscription.remainingFee,coursessubscription.status from login, coursessubscription where courseID=${req.body.cid} and coursessubscription.level =${req.body.l} and login.userID = coursessubscription.userID;`))[0];
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



    if (req.body.fid&&req.body.l) {

            auth(req.cookies, res, async (data) => {

                try {

                    let sql = require("mysql2/promise");

                    const conn =  await sql.createConnection({
                        host:"dentists.ct0im0y0ome2.me-central-1.rds.amazonaws.com",
                        user:"root",
                        database:"dentists",
                        password:"grabyOli0001",
                        port:3306,connectTimeout:900000,

                        timezone:"+03:00",
                    })                    
                    const data= (await conn.query(`select login.username,login.email,login.userID,fellowshipssubscription.userID,fellowshipssubscription.subscriptionID,fellowshipssubscription.level,fellowshipssubscription.joinedDate,fellowshipssubscription.expDate,fellowshipssubscription.totalFee,fellowshipssubscription.remainingFee,fellowshipssubscription.groupID,fellowshipssubscription.status from login, fellowshipssubscription where fellowshipID=${req.body.fid} and fellowshipssubscription.level=${req.body.l} and login.userID = fellowshipssubscription.userID;`))[0];
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

                        d:(await readCon((req.body.t ? "fellowshipstuition":"coursestuition"),null,[[req.body.t?"fellowshipID": "courseID",'=',req.body.ID],['userID','=',req.body.userID]])),
                        de:(await readCon((req.body.t ? "fellowshipsremovedpayments":"coursesremovedpayments"),null,[[req.body.t?"fellowshipID": "courseID",'=',req.body.ID],['userID','=',req.body.userID]]))
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


//get all users in login table
router.post("/gau", async (req, res) => {



    auth(req.cookies, res, async (data) => {

        try {
            res.send({

                d:(await readCon("login",['userID','username','email','code','phonenumber'],[['level','=',1]]))
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

//delete user
router.post("/du", async (req, res) => {


    console.log(req.body);
    req.body = JSON.parse(req.body.body);

    // return;
    if (req.body.uid>=0) {

            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {


                    await deleteCon("fellowshipschapterresults",[['userID','=',req.body.uid]]);
                    await deleteCon("fellowshipsfinalresults",[['userID','=',req.body.uid]]);
                    await deleteCon("fellowshipsperodicresults",[['userID','=',req.body.uid]]);
                    await deleteCon("fellowshipsstageresults",[['userID','=',req.body.uid]]);

                    await deleteCon("courseschapterresults",[['userID','=',req.body.uid]]);
                    await deleteCon("coursesfinalresults",[['userID','=',req.body.uid]]);
                    await deleteCon("coursesperodicresults",[['userID','=',req.body.uid]]);
                    await deleteCon("coursesstageresults",[['userID','=',req.body.uid]]);

                    await deleteCon("fellowshipstuition",[['userID','=',req.body.uid]]);
                    await deleteCon("coursestuition",[['userID','=',req.body.uid]]);

                    await deleteCon("notifications",[['userID','=',req.body.uid]]);
                    await deleteCon("profiles",[['userID','=',req.body.uid]]);
                    await deleteCon("banned",[['userID','=',req.body.uid]]);

                    
                    await deleteCon("coursessubscription",[['userID','=',req.body.uid]]);
                    await deleteCon("fellowshipssubscription",[['userID','=',req.body.uid]]);
                    await deleteCon("login",[['userID','=',req.body.uid]]);

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

    if (req.body.t!=null &&req.body.ans&& req.body.q&&req.body.ID&&req.body.title&&req.body.visible>=-9&&typeof(req.body.passing)=='number'&&req.body.groupID&&req.body.type!=null) {


        if(req.body.type!=0){

            if(!req.body.duration || !req.body.sd){
        
        res.sendStatus(403);
                return;
            }
        }

            auth(req.cookies, res, async (data) => {

                try {

                    let fields = {};
                    if (req.body.duration != -9 && req.body.type!=0) {
                        fields["ending"] = `STR_TO_DATE("${(new Date(req.body.duration)).toLocaleString("en-US",{ timeZone: 'Asia/Baghdad',hour12: false }).replace(",","")}", "%m/%d/%Y %H:%i:%s")`;                    }
                    if ( req.body.ans != -9) {
                        fields["answers"] =  JSON.stringify(req.body.ans);
                    }
                    if ( req.body.q != -9) {
                        fields["questions"] =  JSON.stringify(req.body.q);

                    }
                    if ( req.body.sd != -9  && req.body.type!=0) {
                        fields["startingDate"] =`STR_TO_DATE("${(new Date(req.body.sd)).toLocaleString("en-US",{ timeZone: 'Asia/Baghdad',hour12: false }).replace(",","")}", "%m/%d/%Y %H:%i:%s")`;

                    }
                    if ( req.body.note != -9) {
                        fields["note"] =  req.body.note;

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
                    if ( req.body.passing) {
                        fields["passing"] =  req.body.passing;

                    }
                    if (Object.keys(fields).length > 0) {

                            if(req.body.t){


                                switch (req.body.type) {
                                    case 0:
                                        await updateJSON("fellowshipschapterexams", Object.keys(fields), Object.values(fields), [
                                            ["examID", '=', req.body.ID]
                                        ]);
                                    case 1:
                                        await updateJSON("fellowshipsperodicexams", Object.keys(fields), Object.values(fields), [
                                            ["examID", '=', req.body.ID]
                                        ]);
                                        break;
                                        case 2:
                                            await updateJSON("fellowshipsstageexams", Object.keys(fields), Object.values(fields), [
                                                ["examID", '=', req.body.ID]
                                            ]);
                                        break;
                                        case 3:
                                            await updateJSON("fellowshipsfinalexams", Object.keys(fields), Object.values(fields), [
                                                ["examID", '=', req.body.ID]
                                            ]);                                      
                                        break;
                                }

    
                            }else{

     
                                switch (req.body.type) {
                                    case 1:
                                        await updateJSON("coursesperodicexams", Object.keys(fields), Object.values(fields), [
                                            ["examID", '=', req.body.ID]
                                        ]);
                                        break;
                                        case 2:
                                            await updateJSON("coursesstageexams", Object.keys(fields), Object.values(fields), [
                                                ["examID", '=', req.body.ID]
                                            ]);
                                        break;
                                        case 3:
                                            await updateJSON("coursesfinalexams", Object.keys(fields), Object.values(fields), [
                                                ["examID", '=', req.body.ID]
                                            ]);                                 
                                        break;
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
       
        if (req.body.vt && req.body.url&&typeof(req.body.fid)=='number'&&typeof(req.body.o)=='number'&&typeof(req.body.level)=='number') {
    
                auth(req.cookies, res, async (data) => {
    
    
                    console.log("Everything went well");
    
                    try {
                        await updateCon("fellowshipvideos",['`order`'],["(`order`+1)"],[["fellowshipID",'=',req.body.fid],['`order`',">=",req.body.o]]);
                        await write("fellowshipvideos",["videoUrl","videoTitle","fellowshipID",'`order`','level'],[req.body.url,req.body.vt,req.body.fid,req.body.o,req.body.level]);
              
    
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
    // req.body = JSON.parse(req.body.body);


   
    if (req.body.vt && req.body.url&&typeof(req.body.vid)=='number' && req.body.fid&&req.body.o>=0) {

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



   
    if (req.body.vt && req.body.url&&typeof(req.body.vid)=='number'&&typeof(req.body.level)=='number'&&req.body.cid&&req.body.o>=0) {

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
                    if ( req.body.level != -9) {
                        fields["level"] =  req.body.level;
                    }
                    if ( req.body.o != -9) {
                        fields["`order`"] =  req.body.o;
                        await updateCon("videos",['`order`'],["(`order`+1)"],[["courseID",'=',req.body.cid],['`order`',">=",req.body.o]]);

                    }

                    console.log(fields);
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


   console.log(req.body);
    if (req.body.bid &&typeof(req.body.bid)=='number') {

            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {


                    await deleteCon("blogs",[['blogID','=',req.body.bid]]);

                    const s3 = new aws.S3({
                        accessKeyId: '',
                        secretAccessKey: 'Y4s7pd41NOubY4aOHIkNOsE/PW61Git5T8v+p+It',
                        region: 'me-central-1',
                      });
                      res.sendStatus(200);

                      s3.deleteObject({

                        Bucket:"echo-dentists",
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


//delete chapter
router.post("/dch", async (req, res) => {



console.log(req.body);
   
    if (req.body.chid ) {

            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");

                try {


                    await deleteCon("chapter",[['chapterID','in',`(${req.body.chid.join(",")})`],['type','=',req.body.t],['ID','=',req.body.id]]);

              
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
                        accessKeyId: '',
                        secretAccessKey: 'Y4s7pd41NOubY4aOHIkNOsE/PW61Git5T8v+p+It',
                        region: 'me-central-1',
                      });

                      s3.deleteObject({

                        Bucket:"echo-dentists",
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
                    await deleteCon("fellowshipstuition",[['fellowshipID','=',req.body.id]]);
                    await deleteCon("fellowshipssubscription",[['fellowshipID','=',req.body.id]]);
                    await deleteCon("fellowships",[['fellowshipID','=',req.body.id]]);

                    const s3 = new aws.S3({
                        accessKeyId: '',
                        secretAccessKey: 'Y4s7pd41NOubY4aOHIkNOsE/PW61Git5T8v+p+It',
                        region: 'me-central-1',
                      });

                      s3.deleteObject({

                        Bucket:"echo-dentists",
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
        console.log(req.body);
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


                    // await deleteCon("finalexams",[["examID",'in',`(${req.body.xms.join(",")})`]]);
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


//give a specific student all exams for all courses and fellowships
router.post("/gsaex", async (req, res) => {


    if (req.body.sid>=0) {

            auth(req.cookies, res, async (data) => {

                try {

                console.log("Everything went well");
                const cpr= await readCon(" coursesperodicresults",['examID','mark','submissiondate','courseID'],[['userID','=',req.body.sid]]);
                const cfr= await readCon(" coursesfinalresults",['examID','mark','submissiondate','courseID'],[['userID','=',req.body.sid]]);
                const csr= await readCon("coursesstageresults",['examID','mark','submissiondate','courseID'],[['userID','=',req.body.sid]]);
                const fpr= await readCon("fellowshipsperodicresults",['examID','mark','submissiondate','fellowshipID'],[['userID','=',req.body.sid]]);
                const ffr= await readCon("fellowshipsfinalresults",['examID','mark','submissiondate','fellowshipID'],[['userID','=',req.body.sid]]);
                const fsr= await readCon("fellowshipsstageresults",['examID','mark','submissiondate','fellowshipID'],[['userID','=',req.body.sid]]);
                const namescp = await read("coursesperodicexams",['examID','title','courseID'])
                const namescf = await read("coursesfinalexams",['examID','title','courseID'])
                const namescs = await read("coursesstageexams",['examID',"title","courseID"])
                const namesfs = await read("fellowshipsstageexams",['examID',"title","fellowshipID"])
                const namesfp = await read("fellowshipsperodicexams",['examID',"title","fellowshipID"])
                const namesff = await read("fellowshipsfinalexams",['examID',"title","fellowshipID"])




              

                    res.send({
                        cpr:cpr,
                        cfr:cfr,
                        csr:csr,
                        fpr:fpr,
                        ffr:ffr,
                        fsr:fsr,
                        namescp:namescp,
                        namescf:namescf,
                        namescs:namescs,
                        namesfs:namesfs,
                        namesfp:namesfp,
                        namesff:namesff
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

//give a specific student all exams for one course
router.post("/gsacex", async (req, res) => {


    if (req.body.sid&&req.body.cid) {

            auth(req.cookies, res, async (data) => {

                try {

                console.log("Everything went well");
                const cpr= await readCon(" coursesperodicresults",['examID','mark','submissiondate','courseID'],[['userID','=',req.body.sid],['courseID','=',req.body.cid]]);
                const cfr= await readCon(" coursesfinalresults",['examID','mark','submissiondate','courseID'],[['userID','=',req.body.sid],['courseID','=',req.body.cid]]);
                const csr= await readCon("coursesstageresults",['examID','mark','submissiondate','courseID'],[['userID','=',req.body.sid],['courseID','=',req.body.cid]]);
                const namescp = await readCon("coursesperodicexams",['examID','title','courseID'],[['courseID','=',req.body.cid]])
                const namescf = await readCon("coursesfinalexams",['examID','title','courseID'],[['courseID','=',req.body.cid]])
                const namescs = await readCon("coursesstageexams",['examID',"title","courseID"],[['courseID','=',req.body.cid]])



              

                    res.send({
                        cpr:cpr,
                        cfr:cfr,
                        csr:csr,
                        namescp:namescp,
                        namescf:namescf,
                        namescs:namescs,
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

//give a specific student all exams for one fellowship
router.post("/gsafx", async (req, res) => {


    if (req.body.sid&&req.body.fid) {

            auth(req.cookies, res, async (data) => {

                try {

                console.log("Everything went well");
                const cpr= await readCon(" fellowshipsperodicresults",['examID','mark','submissiondate','fellowshipID'],[['userID','=',req.body.sid],['fellowshipID','=',req.body.fid]]);
                const cfr= await readCon(" fellowshipsfinalresults",['examID','mark','submissiondate','fellowshipID'],[['userID','=',req.body.sid],['fellowshipID','=',req.body.fid]]);
                const csr= await readCon("fellowshipsstageresults",['examID','mark','submissiondate','fellowshipID'],[['userID','=',req.body.sid],['fellowshipID','=',req.body.fid]]);
                const namesfp = await readCon("fellowshipsperodicexams",['examID','title','fellowshipID'],[['fellowshipID','=',req.body.fid]])
                const namesff = await readCon("fellowshipsfinalexams",['examID','title','fellowshipID'],[['fellowshipID','=',req.body.fid]])
                const namesfs = await readCon("fellowshipsstageexams",['examID',"title","fellowshipID"],[['fellowshipID','=',req.body.fid]])



              

                    res.send({
                        fpr:cpr,
                        ffr:cfr,
                        fsr:csr,
                        namesfs:namesfs,
                        namesfp:namesfp,
                        namesff:namesff
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

//give all students for one exams for one course
router.post("/gascex", async (req, res) => {


    if (req.body.examID&&req.body.et>=0) {

            auth(req.cookies, res, async (data) => {

                try {

                console.log("Everything went well");
                //get all the student marks and ID of that type of that exam
                //get the student names of all the students

                let data;

                let sql = require("mysql2/promise");

                const conn =  await sql.createConnection({
                    host:"dentists.ct0im0y0ome2.me-central-1.rds.amazonaws.com",
                    user:"root",
                    database:"dentists",
                    password:"grabyOli0001",
                    port:3306,connectTimeout:900000,

                    timezone:"+03:00"
                    
                })
                
                switch (req.body.et) {
                    case 0: // perodic
                    console.log(req.body);
                    data= (await conn.query(`select  login.username,coursesperodicresults.mark,coursesperodicresults.submissionDate from coursesperodicresults inner join login on coursesperodicresults.userID = login.userID where coursesperodicresults.examID=${req.body.examID}`))[0];

                        break;
                        case 1: //stage
                     data= (await conn.query(`select  login.username,coursesstageresults.mark,coursesstageresults.submissionDate from coursesstageresults inner join login on coursesstageresults.userID = login.userID where coursesstageresults.examID=${req.body.examID}`))[0];
                   
                        break;
                        case 2: //final
                    data= (await conn.query(`select  login.username,coursesfinalresults.mark,coursesfinalresults.submissionDate from coursesfinalresults inner join login on coursesfinalresults.userID = login.userID where coursesfinalresults.examID=${req.body.examID}`))[0];
           
                        break;
                    default:
                        break;
                }
                await conn.end();


              

                    res.send({d:data});


                

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

//give all students for one exams for one fellowship
router.post("/gasfex", async (req, res) => {


    if (req.body.examID&&req.body.et>=0) {

            auth(req.cookies, res, async (data) => {

                try {

                console.log("Everything went well");
                //get all the student marks and ID of that type of that exam
                //get the student names of all the students

                let data;

                let sql = require("mysql2/promise");

                const conn =  await sql.createConnection({
                    host:"dentists.ct0im0y0ome2.me-central-1.rds.amazonaws.com",
                    user:"root",
                    database:"dentists",
                    password:"grabyOli0001",
                    port:3306,connectTimeout:900000,

                    timezone:"+03:00"
                    
                })

                switch (req.body.et) {
                    case 0: // perodic
                    data= (await conn.query(`select  login.username,fellowshipsperodicresults.mark,fellowshipsperodicresults.submissionDate from fellowshipsperodicresults inner join login on fellowshipsperodicresults.userID = login.userID where fellowshipsperodicresults.examID=${req.body.examID}`))[0];

                        break;
                        case 1: //stage
                     data= (await conn.query(`select  login.username,fellowshipsstageresults.mark,fellowshipsstageresults.submissionDate from fellowshipsstageresults inner join login on fellowshipsstageresults.userID = login.userID where fellowshipsstageresults.examID=${req.body.examID}`))[0];
                   
                        break;
                        case 2: //final
                    data= (await conn.query(`select  login.username,fellowshipsfinalresults.mark,fellowshipsfinalresults.submissionDate from fellowshipsfinalresults inner join login on fellowshipsfinalresults.userID = login.userID where fellowshipsfinalresults.examID=${req.body.examID}`))[0];
           
                        break;
                    default:
                        break;
                }
                await conn.end();


              

                    res.send({d:data});


                

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

// get all kinds of exams for one course and one level
router.post("/gexolc", async (req, res) => {


    if (req.body.level>=1 && req.body.courseID) {

            auth(req.cookies, res, async (data) => {

                try {


                    const coursesfinalexams= await readCon("coursesfinalexams",["title",'groupID','startingDate','ending','examID as i'],[['courseID','=',req.body.courseID],['level','=',req.body.level]]);
                    const coursesstageexams= await readCon("coursesstageexams",["title",'groupID','startingDate','ending','examID as i'],[['courseID','=',req.body.courseID],['level','=',req.body.level]]);
                    const coursesperodicexams= await readCon("coursesperodicexams",["title",'groupID','startingDate','ending','examID as i'],[['courseID','=',req.body.courseID],['level','=',req.body.level]]);

              

                    res.send({
                        f:coursesfinalexams,
                        s:coursesstageexams,
                        p:coursesperodicexams,
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



// get all results for spicific exam,course and exam type
router.post("/gsrs", async (req, res) => {


    if (req.body.examID>=1 && req.body.ID&& req.body.t&& req.body.ac!=null) {

            auth(req.cookies, res, async (data) => {

                try {


                   let results=(await readCon("allresults",['userID as i','grade as g'],[['ID','=',req.body.ID],['examID','=',req.body.examID],['atype','=',req.body.ac ],['examType','=',req.body.t]]));
                   console.log(results);
                   let n ;
                   if(results.length>0)
                   n=(await readCon("login",['username as n','userID as i'],[['userID','in',`(${results.map(e=>e.i).join(",")})`]]));

                   
                    res.send({
                        r:results
                        ,n:n
                    })

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



// get all kinds of exams for one fellowship and one level
router.post("/gexolf", async (req, res) => {


    if (req.body.level>=1 && req.body.fellowshipID) {

            auth(req.cookies, res, async (data) => {

                try {


                    const fellowshipsstageexams= await readCon("fellowshipsstageexams",["title",'groupID','startingDate','ending','examID as i'],[['fellowshipID','=',req.body.fellowshipID],['level','=',req.body.level]]);
                    const fellowshipsfinalexams= await readCon("fellowshipsfinalexams",["title",'groupID','startingDate','ending','examID as i'],[['fellowshipID','=',req.body.fellowshipID],['level','=',req.body.level]]);
                    const fellowshipsperodicexams= await readCon("fellowshipsperodicexams",["title",'groupID','startingDate','ending','examID as i'],[['fellowshipID','=',req.body.fellowshipID],['level','=',req.body.level]]);
                    res.send({
                        
                        
                        f:fellowshipsfinalexams,
                        s:fellowshipsstageexams,
                        p:fellowshipsperodicexams
                    })


                

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


// get a specific exam from a course or fellowship
router.post("/gspx", async (req, res) => {


    if ( (req.body.fellowshipID || req.body.courseID) && typeof(req.body.examID)=='number'&&req.body.examType>=0) {

            auth(req.cookies, res, async (data) => {

                try {

                    let exam;
                    if(req.body.courseID){

                        switch (req.body.examType) {
                            case 1:
                            exam= await readCon("coursesperodicexams",['examID','CAST(`ending` AS CHAR) as ending','questions','answers','CAST(`startingDate` AS CHAR) as startingDate','visible','title','groupID','courseID','dateAdded','level','passing','note'],[['examID','=',req.body.examID]]);
   
                            break;
                            case 2:
                            exam= await readCon("coursesstageexams",['examID','CAST(`ending` AS CHAR) as ending','questions','answers','CAST(`startingDate` AS CHAR) as startingDate','visible','title','groupID','courseID','dateAdded','level','passing','note'],[['examID','=',req.body.examID]]);
                          
                            break;
                            case 3:
                            exam= await readCon("coursesfinalexams",['examID','CAST(`ending` AS CHAR) as ending','questions','answers','CAST(`startingDate` AS CHAR) as startingDate','visible','title','groupID','courseID','dateAdded','level','passing','note'],[['examID','=',req.body.examID]]);    
                            break;
                            default:
                                break;
                        }
                    }else{
                        switch (req.body.examType) {
                            case 0:
                            exam= await readCon("fellowshipschapterexams",['examID','questions','answers','visible','title','groupID','fellowshipID','level','passing','note'],[['examID','=',req.body.examID]]);
                
                            break;
                            case 1:
                            exam= await readCon("fellowshipsperodicexams",['examID','CAST(`ending` AS CHAR) as ending','questions','answers','CAST(`startingDate` AS CHAR) as startingDate','visible','title','groupID','fellowshipID','dateAdded','level','passing','note'],[['examID','=',req.body.examID]]);
                
                            break;
                            case 2:
                            exam= await readCon("fellowshipsstageexams",['examID','CAST(`ending` AS CHAR) as ending','questions','answers','CAST(`startingDate` AS CHAR) as startingDate','visible','title','groupID','fellowshipID','dateAdded','level','passing','note'],[['examID','=',req.body.examID]]);
                                
                            break;
                            case 3:
                            exam= await readCon("fellowshipsfinalexams",['examID','CAST(`ending` AS CHAR) as ending','questions','answers','CAST(`startingDate` AS CHAR) as startingDate','visible','title','groupID','fellowshipsID','dateAdded','level','passing','note'],[['examID','=',req.body.examID]]);   
                            break;
                            default:
                                break;
                        }

                    }
                    // const fellowshipsstageexams= await readCon("fellowshipsstageexams",null,[['fellowshipID','=',req.body.fellowshipID],['level','=',req.body.level]]);
                    // const fellowshipsfinalexams= await readCon("fellowshipsfinalexams",null,[['fellowshipID','=',req.body.fellowshipID],['level','=',req.body.level]]);
                    // const fellowshipsperodicexams= await readCon("fellowshipsperodicexams",null,[['fellowshipID','=',req.body.fellowshipID],['level','=',req.body.level]]);
                    res.send({d:exam


                        , g: await readCon(req.body.courseID?"coursessubscription":"fellowshipssubscription",['distinct groupID'],[[req.body.courseID?"courseID":"fellowshipID",'=',req.body.courseID?req.body.courseID:req.body.fellowshipID]])
                    })


                

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
    if (req.body.subscriptionID>=0&&req.body.payment>=0&&req.body.acourse!=null&&req.body.ID&&req.body.userID>=0&&req.body.newDate&&req.body.finishedTuition!=null) {

        auth(req.cookies, res, async (data) => {


            console.log("Everything went well");

            try {

                console.log(req.body);
                await updateCon(req.body.acourse ?"coursessubscription":"fellowshipssubscription",['groupID'],[req.body.gID],[[req.body.acourse ?"courseID":"fellowshipID",'=',req.body.ID],['userID','=',req.body.userID]]);
                let paymentID=await handlePaymentUnbanningAndExpDate(...Object.values(req.body))
                res.send({


                    d:paymentID
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
} catch (error) {
 console.log(error);
    res.sendStatus(403);
}

    // res.cookie()

})



//get user profile depending on the code
router.post("/gup", async (req, res) => {



    if (req.body.code) {

            auth(req.cookies, res, async (data) => {

                try {



                    // get the user ID
                    const user = (await readCon("login",['userID','username','email','phonenumber','gender'],[['code','=',req.body.code]]))[0];
                    // get the user courses,fellowships
                    const courses = await readCon("coursessubscription",null,[['userID','=',user.userID]]);
                    const fellowships = await readCon("fellowshipssubscription",null,[['userID','=',user.userID]]);
                    const coursesPayments = await readCon("coursestuition",null,[['userID','=',user.userID]]);
                    const fellowshipsPayments = await readCon("fellowshipstuition",null,[['userID','=',user.userID]]);
                    let coursesInfos=[];
                    if(courses.length>0)
{                     coursesInfos = await readCon("courses",['courseName','courseID','courseDuration as d'],[['courseID','in',`(${([...(new Set((courses.map((s)=>s.courseID))))].join(","))})`]])

}                   

let fellowshipsInfos=[];
if(fellowships.length>0){
    fellowshipsInfos = await readCon("fellowships",['fellowshipName','fellowshipID','fellowshipDuration as d'],[['fellowshipID','in',`(${(fellowships.map((s)=>s.fellowshipID).join(","))})`]])
}
                    res.send({

                        u:user,
                        c:courses,
                        f:fellowships,
                        cp:coursesPayments,
                        fp:fellowshipsPayments,
                        ci:coursesInfos,
                        fi:fellowshipsInfos
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



/**
 * 
 * @param {String}id 
 * @param {String} blogDetails 
 */
async function updateBlog(id,  files, blogDetails = null) {


    
    let fields = {};
    if (blogDetails != -9) {
        fields["blogDetails"] = blogDetails;
    }
    // if (title != -9) {
    //     fields["title"] = title;
    // }


    if (Object.keys(fields).length > 0) {
        await updateCon("blogs", Object.keys(fields), Object.values(fields), [
            ["blogID", '=', id]
        ]);
    }

    if (files) {
        console.log(id);
        upload(files, "blogs", id.toString());

    }


}


/**
 * 
 * @param {String}blogDetails  
 */
async function newBlog (blogDetails, files) {

    const id = (await write("blogs", ["blogDetails"], [ blogDetails]));
    upload(files.files, "blogs", id.toString());


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
async function handlePaymentUnbanningAndExpDate(subscriptionID,  payment, acourse,ID,userID,newDate,gID,renew,totalFee,finishedTuition) {
    
    let paymentID= await payTuition(subscriptionID,payment,acourse,ID,userID,(new Date(newDate)).toISOString().replace("Z",''),gID,renew,totalFee,finishedTuition);
    if(payment>0)
    await removingSomeoneFromBannedTable(userID,acourse,ID);
    // if(newDate)
    // await changeExpDate(newDate,subscriptionID,acourse);

    return paymentID;

}

async function payTuition(subscriptionID,  payment, acourse,ID,userID, newDate,gID,renew,totalFee,finishedTuition) {


    if(renew){
        console.log("Doing thiss");
        await updateCon((acourse? "coursessubscription":"fellowshipssubscription"),['remainingFee','expDate','groupID','totalFee'],[totalFee-payment,newDate,gID,totalFee],[['subscriptionID','=',subscriptionID]]);

    }else{
        await updateCon((acourse? "coursessubscription":"fellowshipssubscription"),['remainingFee','expDate','groupID'],[`(remainingFee-${payment})`,newDate,gID],[['subscriptionID','=',subscriptionID]]);

    }
    await updateCon((acourse? "coursessubscription":"fellowshipssubscription"),['remainingFee'],[0],[['remainingFee','<',0],['subscriptionID','=',subscriptionID]]);
        console.log("done done ND FINISHED");

       let paymentID= await write(acourse?"coursestuition":"fellowshipstuition",[(acourse ?"courseID":"fellowshipID"),'tuition','userID',"expDate","lastOne"],[ID,payment,userID,newDate,finishedTuition]);
        //send an email
        const user=await readCon("login",['email'],[['userID','=',Number(userID)]]);
        console.log(user);
        console.log(userID);
        const nodemailer = require("nodemailer");

                            const transporter = nodemailer.createTransport({
                      host: "smtp.mail.ru",
                      port: 465,
                      secure: true,
                      auth: {
                        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
                        user: ,
                        pass: "S4x0cMyN7N8f0H21vKBf",
                      },
                    });
                    
        
        
        try {
            await transporter.sendMail({
                from:,
                to: user[0].email+"@gmail.com", // list of receivers
                subject: "contacting us", // Subject line
                text: `This email is for confirmation that you paid ${payment} for ${acourse ?"course":"fellowship"}`, // plain text body
              }).then((e)=>{
                console.log("sent email successfully");
                console.log(e);
              }).catch((e)=>{});
        } catch (error) {
            
        }

        return paymentID;
}

async function removingSomeoneFromBannedTable(userID,acourse,ID) {

await deleteCon("banned",[['userID','=',userID],['type','=',acourse? 0 : 1],['ID','=',ID]]);

}

async function changeExpDate(newDate,subscriptionID,acourse) {
    updateCon((acourse? "coursessubscription":"fellowshipssubscription"),['expDate'],[newDate],[['subscriptionID','=',subscriptionID]]);

}
module.exports = router;
