const {auth} = require("../auth.cjs");
const {  readCon, write, read, readOrdered, updateCon } = require("../util.cjs");

const router = require("express").Router();





//get exam questions
router.post("/gexq",(req,res)=>{

        if(typeof(req.body.examID)=="number"){
            console.log("debug 1");
            auth(req.cookies,res,async function(data){
                console.log("debug 2");

    const result =await readCon("finalexams",null,[['examID','=',req.body.examID],['ending','>','(now())']]);
    console.log("debug 3");

            
                        if((result).length>0){
                            console.log("debug 4");

                            let pass=false;

                            if(result[0].type==0){
                                if((await(readCon("coursessubscription",null,[['courseID','=',result[0].ID],['groupID','=',result[0].groupID]]))).length>0){
pass=true;
                                }

                            }else{

                                if((await(readCon("fellowshipssubscription",null,[['fellowshipID','=',result[0].ID],['groupID','=',result[0].groupID]]))).length>0){
                                    pass=true;

                                }
                            }
            
            if(!pass){


                res.sendStatus(403);
                return;
            }else{


                res.send({
                    q:result[0].questions
                })
            }
   
            
            
                        }else{
            
                            res.sendStatus(403);
                            return;
                        }
                        
                    
            
                    
                },function(){},1)
                
                
                
            
        }else{

            res.sendStatus(404);
        }

    });
//handle users requesting videos of the course
//we start with checking the parametters like courseID if it's not valid then reject
//first we check if this is actually a user or admin we only verify the token
//then we check if the course exists 
//then we check if this user is enrolled in this course already
//if yes then select all the video links and send them to the user, if not reject the request

//bring me the questions of this chapter
//get chapter questions
router.post("/gcq",(req,res)=>{

    auth(req.cookies,res,async function(data){
    console.log(data);
        if(req.body.t >=0 && req.body.chID){

            const result =await readCon("chapter",null,[['chapterID','=',req.body.chID]]);
            

            if((result).length>0){


            if(req.body.t==0){
                console.log("here");
                if((await readCon("coursessubscription",null,[['userID','=',data.id],['courseID','=',result[0].ID],['status','=',0]])).length>0){


                    res.send({
                        d:result[0].questions
                    })
                    return;
                }else{

                    res.sendStatus(403);
                    return;
                }
            }else{
                console.log("here 2");

                if((await readCon("fellowshipssubscription",null,[['userID','=',data.id],['fellowshipID','=',result[0].ID],['status','=',0]])).length>0){

                    res.send({
                        d:result[0].questions
                    })
                    return;
                }else{

                    
                res.sendStatus(403);
                return;
                }

            }


            }else{

                res.sendStatus(403);
                return;
            }
            
        }else{
            res.sendStatus(403);
            return;

        }

        
    },function(){},1)
    
    
    
    });


//submit chapter answers
router.post("/sca",(req,res)=>{

    auth(req.cookies,res,async function(data){
    console.log(data);
        if(req.body.t >=0 && req.body.chID&&req.body.ans){

            const result =await readCon("chapter",null,[['chapterID','=',req.body.chID]]);
            
            if(req.body.ans.length==result[0].answers.length){


            }else{

                res.sendStatus(403);
                return;
            }

            if((result).length>0){


            if(req.body.t==0){
                console.log("here");
                if((await readCon("coursessubscription",null,[['userID','=',data.id],['courseID','=',result[0].ID],['status','=',0]])).length>0){


                 try {
                    await write("results",['type','answer','submissionDate','ID','userID','mark'],[0,
                    
                        JSON.stringify(

                          req.body.ans
                                                ),"now()",result[0].ID,data.id,(
                                                    ((result[0].answers.filter((e,i)=>(req.body.ans[i]==e))).length/result[0].answers.length) * 100
                                                )
                    
                    ]);
                 } catch (error) {
                    

                    res.sendStatus(403);
                    return;
                 }

                    res.send({
                        d:result[0].answers.map((e,i)=>(req.body.ans[i]==e ? true : e))
                    })
                    return;
                }else{

                    res.sendStatus(403);
                    return;
                }
            }else{
                console.log("here 2");

                if((await readCon("fellowshipssubscription",null,[['userID','=',data.id],['fellowshipID','=',result[0].ID],['status','=',0]])).length>0){

                    try {
                        
                    await write("results",['type','answer','submissionDate','ID','userID','mark'],[0,
                    
                        JSON.stringify(

                           req.body.ans
                            
                    ),"now()",result[0].ID,data.id,(
                            ((result[0].answers.filter((e,i)=>(req.body.ans[i]==e))).length/result[0].answers.length) * 100

                        )
                    
                    ]);
                    } catch (error) {

                        res.sendStatus(403);
                     return;   
                    }

                    res.send({
                        d:result[0].answers.map((e,i)=>(req.body.ans[i]==e))
                    })
                    return;
                }else{

                    
                res.sendStatus(403);
                return;
                }

            }


            }else{

                res.sendStatus(403);
                return;
            }
            
        }else{
            res.sendStatus(403);
            return;

        }

        
    },function(){},1)
    
    
    
    });




//submit perodic exam answers
router.post("/spa",(req,res)=>{

    auth(req.cookies,res,async function(data){
    console.log(data);
        if(req.body.ID&&req.body.ans&&req.body.i){

            const result =await readCon("finalexams",null,[['examID','=',req.body.i],['perodic','=',1]]);
            
            if(req.body.ans.length==result[0].answers.length){


            }else{

                res.sendStatus(403);
                return;
            }

            if((result).length>0){


            if(req.body.t==0){
                console.log("here");
                if((await readCon("coursessubscription",null,[['userID','=',data.id],['courseID','=',result[0].ID],['status','=',0]])).length>0){


                 try {
                    await write("results",['type','answer','submissionDate','ID','userID','mark'],[1,
                    
                        JSON.stringify(

                          req.body.ans
                                                ),"now()",result[0].ID,data.id,(
                                                    ((result[0].answers.filter((e,i)=>(req.body.ans[i]==e))).length/result[0].answers.length) * 100
                                                )
                    
                    ]);
                 } catch (error) {
                    

                    res.sendStatus(403);
                    return;
                 }

                    res.send({
                        d:result[0].answers.map((e,i)=>(req.body.ans[i]==e ? true : e))
                    })
                    return;
                }else{

                    res.sendStatus(403);
                    return;
                }
            }else{
                console.log("here 2");

                if((await readCon("fellowshipssubscription",null,[['userID','=',data.id],['fellowshipID','=',result[0].ID],['status','=',0]])).length>0){

                    try {
                        
                    await write("results",['type','answer','submissionDate','ID','userID','mark'],[1,
                    
                        JSON.stringify(

                           req.body.ans
                            
                    ),"now()",result[0].ID,data.id,(
                            ((result[0].answers.filter((e,i)=>(req.body.ans[i]==e))).length/result[0].answers.length) * 100

                        )
                    
                    ]);
                    } catch (error) {

                        res.sendStatus(403);
                     return;   
                    }

                    res.send({
                        d:result[0].answers.map((e,i)=>(req.body.ans[i]==e))
                    })
                    return;
                }else{

                    
                res.sendStatus(403);
                return;
                }

            }


            }else{

                res.sendStatus(403);
                return;
            }
            
        }else{
            res.sendStatus(403);
            return;

        }

        
    },function(){},1)
    
    
    
    });


//submit final exam answers
router.post("/sfa",(req,res)=>{

    auth(req.cookies,res,async function(data){
    console.log(data);
        if(req.body.ID&&req.body.ans&&req.body.i){

            const result =await readCon("finalexams",null,[['examID','=',req.body.i],['perodic','=',0]]);
            
            if(req.body.ans.length==result[0].answers.length){


            }else{

                res.sendStatus(403);
                return;
            }

            if((result).length>0){


            if(req.body.t==0){
                console.log("here");
                if((await readCon("coursessubscription",null,[['userID','=',data.id],['courseID','=',result[0].ID],['status','=',0]])).length>0){


                 try {
                    await write("results",['type','answer','submissionDate','ID','userID','mark'],[2,
                    
                        JSON.stringify(

                          req.body.ans
                                                ),"now()",result[0].ID,data.id,(
                                                    ((result[0].answers.filter((e,i)=>(req.body.ans[i]==e))).length/result[0].answers.length) * 100
                                                )
                    
                    ]);


                    if (((result[0].answers.filter((e,i)=>(req.body.ans[i]==e))).length/result[0].answers.length)>=0.6){

                        await updateCon("coursessubscription",['level','status'],['(level + 1)',1],[['userID','=',data.id]]);
                        let userProfile = await readCon("profiles",null,['userID','=',data.id])[0];
                        if(userProfile['courses']){
                            userProfile['courses'] = JSON.parse(userProfile['courses']);
                            userProfile['courses'].push({
                                name:result[0].courseName,
                                mark : ((result[0].answers.filter((e,i)=>(req.body.ans[i]==e))).length/result[0].answers.length) * 100,
                                date:(new Date())

                            })


                        }else{
                            userProfile['courses'] = [
                                {
                                    name:result[0].courseName,
                                    mark : ((result[0].answers.filter((e,i)=>(req.body.ans[i]==e))).length/result[0].answers.length) * 100,
                                    date:(new Date())
                                }
                            ];
                        }

                        await updateCon("profiles",['courses'],[JSON.stringify(userProfile['courses'])],[['userID','=',data.id]]);

                    }

                 } catch (error) {
                    

                    res.sendStatus(403);
                    return;
                 }

                    res.send({
                        d:result[0].answers.map((e,i)=>(req.body.ans[i]==e ? true : e))
                    })
                    return;
                }else{

                    res.sendStatus(403);
                    return;
                }
            }else{
                console.log("here 2");

                if((await readCon("fellowshipssubscription",null,[['userID','=',data.id],['fellowshipID','=',result[0].ID],['status','=',0]])).length>0){

                    try {
                        
                    await write("results",['type','answer','submissionDate','ID','userID','mark'],[2,
                    
                        JSON.stringify(

                           req.body.ans
                            
                    ),"now()",result[0].ID,data.id,(
                            ((result[0].answers.filter((e,i)=>(req.body.ans[i]==e))).length/result[0].answers.length) * 100

                        )
                    
                    ]);

                    await updateCon("fellowshipssubscription",['level','status'],['(level + 1)',1],[['userID','=',data.id]]);
                    let userProfile = await readCon("profiles",null,[['userID','=',data.id]])[0];
                    if(userProfile['fellowships']){
                            userProfile['fellowships'] = JSON.parse(userProfile['fellowships']);
                            userProfile['fellowships'].push({
                                name:result[0].fellowshipName,
                                mark : ((result[0].answers.filter((e,i)=>(req.body.ans[i]==e))).length/result[0].answers.length) * 100,
                                date:(new Date())

                            })

                    }else{
                        userProfile['fellowships'] = [
                            {
                                name:result[0].fellowshipName,
                                mark : ((result[0].answers.filter((e,i)=>(req.body.ans[i]==e))).length/result[0].answers.length) * 100,
                                date:(new Date())
                            }
                        ];
                    }

                    await updateCon("profiles",['fellowships'],[JSON.stringify(userProfile['fellowships'])],[['userID','=',data.id]]);

                    } catch (error) {

                        res.sendStatus(403);
                     return;   
                    }

                    res.send({
                        d:result[0].answers.map((e,i)=>(req.body.ans[i]==e))
                    })
                    return;
                }else{

                    
                res.sendStatus(403);
                return;
                }

            }


            }else{

                res.sendStatus(403);
                return;
            }
            
        }else{
            res.sendStatus(403);
            return;

        }

        
    },function(){},1)
    
    
    
    });

//get course videos
router.post("/gcv",async(req,res)=>{

    if (req.body){
        if(typeof(req.body.courseID)=="number"){

            if((await readCon("courses",["courseID"],[['courseID','=',req.body.courseID]])).length<=0){

                res.sendStatus(403);
                return;
            }
            auth(req.cookies,res,async(data)=>{
                
                let banned = (await readCon("banned",null,[['userID','=',data.id],['ID','=',req.body.courseID],['type','=',0]]));
                
                if((await readCon("coursessubscription",["courseID"],[["userID",'=',data.id],['courseID','=',req.body.courseID]])).length>0){
                    let videos=[];
                    if(banned.length>0){
                        videos=(await readCon("videos",["videoUrl",'videoTitle'],[['courseID','=',req.body.courseID],['dateAdded','<',banned[0].dateBanned]]));

                    }else{
                        videos=(await readCon("videos",["videoUrl",'videoTitle'],[['courseID','=',req.body.courseID]]));

                    }
                    res.send({
                        d:videos
                    });
                    
                }else{

                    res.sendStatus(403);
                    return;          
                }
            },()=>{},1);
        }else{
            res.sendStatus(403);
            return;   
        }
    }else{
        res.sendStatus(403);
        return;   
    }

});

//get chapter top results
router.post("/gcr",async(req,res)=>{

    if (req.body.ID){



            auth(req.cookies,res,async(data)=>{

                let userIDs=(await readOrdered("results",['mark','userID'],[['ID','=',req.body.ID],['type','=',0]],"mark",10));
                console.log(userIDs);
                let names=(await readCon("login",['username'],[['userID','in',`(${userIDs.map((e)=>e.userID).join(",")})`]]));
                for (let i = 0; i < userIDs.length; i++) {
                   
                    userIDs[i]['name']=names[i];
                    
                }

                    res.send({
d:userIDs
});
                    
                
            },()=>{},1);
        }else{
            res.sendStatus(403);
            return;   
        }
    }

);

//get fellowship videos
router.post("/gfv",async(req,res)=>{


    console.log(req.body);
    console.log(req.cookies);
    if (req.body){
        if(typeof(req.body.fellowshipID)=="number"){

            if((await readCon("fellowships",["fellowshipID"],[['fellowshipID','=',req.body.fellowshipID]])).length<=0){
                console.log("OUT");
                res.sendStatus(403);
                return;
            }
            auth(req.cookies,res,async(data)=>{

                let banned = (await readCon("banned",null,[['userID','=',data.id],['ID','=',req.body.fellowshipID],['type','=',1]]));

                if((await readCon("fellowshipssubscription",["userID"],[["userID",'=',data.id],['fellowshipID','=',req.body.fellowshipID]])).length>0){
                    let videos=[];

                    if(banned.length>0){
                        videos=(await readCon("fellowshipvideos",["videoURL",'title'],[['fellowshipID','=',req.body.fellowshipID],['dateAdded','<',banned[0].dateBanned]]));

                    }else{
                        videos=(await readCon("fellowshipvideos",["videoURL",'title'],[['fellowshipID','=',req.body.fellowshipID]]));

                    }
                    
                    res.send({
                        d:videos
                    });
                    
                }else{
                    console.log("OUT 2");

                    res.sendStatus(403);
                    return;          
                }
            },()=>{},1);
        }else{
            console.log("OUT 3");

            res.sendStatus(403);
            return;   
        }
    }else{
        console.log("OUT 4");

        res.sendStatus(403);
        return;   
    }

});
//get notifications
router.post("/gn",(req,res)=>{

auth(req.cookies,res,async function(data){
console.log(data);
    res.send({
        d:(await readCon("notifications",["notification"],[["userID",'=',data.id]]))
    });
    
},function(){},1)



});
//update notificationToken
router.post("/gn",(req,res)=>{
if(req.body.token){

    auth(req.cookies,res,async function(data){

            await updateCon("login",['notToken'],[req.body.token],[['userID','=',data.id]]);
            res.sendStatus(200);
            
        },function(){},1)
    
        
}else{

    res.sendStatus(403);
    return;
}

    
    
    });

module.exports = router