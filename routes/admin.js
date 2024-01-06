const { app } = require("firebase-admin");
const util = require("../util");

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