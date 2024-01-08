const { app } = require("firebase-admin");
const {write, readCon} = require("../util");
const {auth} = require("../auth");
const router = require("express").Router();

//notifity users that there is a new video
/**
 * 
 * @param {*} courseID 
 */
async function notifityUsers(courseID) {

    //get all the users that are in this course
    const usersIds=await util.readCon('subs',['userID'],[["courseID",'=',courseID]]);
    //get their notification token
    const tokens = await util.readCon('login','notificationToken',[['userID','in',`(${usersIds.join(',')})`]]);
    //send notifications to all of them
    //check if the number is more then 500 if it's more than this then group them

    if ((tokens).length > 500){


          for (let index = 0; index < (Math.ceil(tokens.length)/500.0) ; index++) {
            let currentTokens=[];

            for (let j = index * 500; j < (index+1)*500; j++) {
                if (tokens.length <= j){
                    console.log("we are out at "+j);
                    //send notification from here
                    app().messaging().sendEach(
            
           
                        currentTokens.map(token=>(Object({notification:{
                            title : "course Update!",
                            body:"a new video has been uploaded to the course please check it out"
                        },"token":token})))
                    );
                                        break;
                }
                
                else{  
                    currentTokens.push(tokens[j])
                }
                if (j+1  == (index+1)*500){ // send the current 500 tokens
           
                    app().messaging().sendEach(
            
           
                        currentTokens.map(token=>(Object({notification:{
                            title : "course Update!",
                            body:"a new video has been uploaded to the course please check it out"
                        },"token":token})))
                    );

        currentTokens=[];
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
    }else{

        app().messaging().sendEach(
            
           
            tokens.map(token=>(Object({notification:{
                title : "course Update!",
                body:"a new video has been uploaded to the course please check it out"
            },"token":token})))
        )
    }
    
    
}


router.post("/nc",async(req,res)=>{

    console.log(req.cookies);
    
    // res.cookie("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsIjowLCJpYXQiOjE3MDQ2MTMxMTZ9.XngdKrHGUsC2zd-B1zmhC0A0vHsabbwb8HeLMveoL4Q",{httpOnly:true,maxAge:(60*60*60*24)});
    // res.sendStatus(200);

    // insert into courses (courseName,courseDuration,courseDetails) values(?,?,?);
    if (req.body){
        if(req.body.courseName && typeof(req.body.courseDuration)=="number"){

            auth(req.cookies,res,async(data)=>{
                
                
                console.log("Everything went well");
                
                newCourse(req.body.courseName,req.body.courseDuration,(req.body.courseDetails ? req.body.courseDetails : null));
                console.log(data);
                res.sendStatus(200);
            
            
            
            },()=>{
                
                
                console.log("something went wrong");
            
            
            
            },0)

        }else{
            res.sendStatus(403);
            return;    
        }

    }else{
        res.sendStatus(403);
        return;
    }
    
    // res.cookie()

})


//get user by email
//check if this token belongs to the admin and then do the operation
//email exists ?
router.post("/ee",async(req,res)=>{


    if (req.body){
        if(req.body.email){

            auth(req.cookies,res,async(data)=>{
     
                const reuslt = (await readCon("login",["userID"],[['email','=',req.body.email]]));
                res.send({
                    i:reuslt[0],
                    e:reuslt.length >0
                });

            
            
            
            },()=>{
                
                
                console.log("something went wrong");
            
            
            
            },0)

        }else{
            res.sendStatus(403);
            return;    
        }

    }else{
        res.sendStatus(403);
        return;
    }
    
    // res.cookie()

})


//adding new ppl to courses
//add to course
router.post("/atf",(req,res)=>{
//check if the data is valid
//check if this user is an admin else reject
//check if this fellowship exists else reject
//check if the email ID exists else reject
//add the user to the fellowship


if (req.body){

if (typeof(req.body.i)=='number' && typeof(req.body.f)=='number'){

    auth(req.cookies,res,async (data)=>{

        if((await readCon("fellowships",['fellowshipID'],[['fellowshipID','=',req.body.f]])).length >0){
            if((await readCon("login",['userID'],[['userID','=',req.body.i]])).length >0){

                try{
                await write("fellowshipssubscription",['fellowshipID','userID','status'],[req.body.f,req.body.i,0]);

                res.sendStatus(200);

            }
            catch(e){
        
                console.log("rejected , duplicate");
            
                res.sendStatus(403);
                return;  
            }

            }else{
                console.log("rejected , no such user exists");

                res.sendStatus(403);
                return;     
            }

        }else{
            console.log("rejected , not such fellowship");

            res.sendStatus(403);
            return; 
        }


    },()=>{

        console.log("rejected , during authentication");

    },0);

}else{
    console.log("rejected , not in the desired form");
    res.sendStatus(403);
        return;    
}

}else{

    res.sendStatus(403);
        return;
}

});


//adding new ppl to fellowships
//add to fellowship
router.post("/atc",(req,res)=>{
    //check if the data is valid
    //check if this user is an admin else reject
    //check if this fellowship exists else reject
    //check if the email ID exists else reject
    //add the user to the fellowship
    
    
    if (req.body){
    
    if (typeof(req.body.i)=='number' && typeof(req.body.c)=='number'){
    
        auth(req.cookies,res,async (data)=>{
    
            if((await readCon("courses",['courseID'],[['courseID','=',req.body.c]])).length >0){
                if((await readCon("login",['userID'],[['userID','=',req.body.i]])).length >0){
    try {
        
        (await write("coursessubscription",['courseID','userID','status'],[req.body.c,req.body.i,0]));
    
        res.sendStatus(200);
    }
    catch(e){

        console.log("rejected , duplicate");
    
        res.sendStatus(403);
        return;  
    }
    
                }else{
                    console.log("rejected , no such user exists");
    
                    res.sendStatus(403);
                    return;     
                }
    
            }else{
                console.log("rejected , not such course");
    
                res.sendStatus(403);
                return; 
            }
    
    
        },()=>{
    
            console.log("rejected , during authentication");
    
        },0);
    
    }else{
        console.log("rejected , not in the desired form");
        res.sendStatus(403);
            return;    
    }
    
    }else{
    
        res.sendStatus(403);
            return;
    }
    
    });
    

/**
 * 
 * @param {String} courseName 
 * @param {Number} courseDuration 
 * @param {import("aws-sdk/clients/batch").String} courseDetails 
 */
async function newCourse(courseName,courseDuration,courseDetails=null){

    await write("courses",["courseName","courseDuration","courseDetails"],[courseName,courseDuration,courseDetails]);

}

module.exports = router;