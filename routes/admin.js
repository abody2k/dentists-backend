const { app } = require("firebase-admin");
const {write} = require("../util");
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