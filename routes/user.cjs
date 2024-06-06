let rand;
import("random").then((d)=>{


rand=d;


})
const { hash } = require("argon2");
const {auth} = require("../auth.cjs");
const {  readCon, write, read, readOrdered, updateCon, deleteCon } = require("../util.cjs");

const router = require("express").Router();





//get exam questions for courses
router.post("/gexqc",(req,res)=>{

    console.log(req.body);
        if(typeof(req.body.examID)=="number"&&typeof(req.body.examType)=="number"&&typeof(req.body.courseID)=="number"){
            console.log("debug 1");
            auth(req.cookies,res,async function(data){
                console.log("debug 2");

                let table="";
switch (req.body.examType) {
    case 0:
    table="coursesperodicexams";    
        break;
    case 1:
    table="coursesstageexams";  
        break;
    case 2:
    table="coursesfinalexams";      
        break;

}
    const result =await readCon(table,null,[['examID','=',req.body.examID],['ending','>','(now())']]);
    console.log("debug 3");
    console.log(result);

            
            if((result).length>0){
                            console.log("debug 4");

                            let pass=false;

                                if((await(readCon("coursessubscription",null,[['courseID','=',req.body.courseID],['groupID','=',result[0].groupID]]))).length>0){
pass=true;
                                }

                            
            
            if(!pass){

                console.log("no pass");
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
            console.log("bit");
            res.sendStatus(404);
        }

    });


//get exam questions for fellowships
router.post("/gexqf",(req,res)=>{

    if(typeof(req.body.examID)=="number"&&typeof(req.body.examType)=="number"&&typeof(req.body.fellowshipID)=="number"){
        console.log("debug 1");
        auth(req.cookies,res,async function(data){
            console.log("debug 2");
let table="";
switch (req.body.examType) {
    case 0:
    table="fellowshipsperodicexams";    
        break;
    case 1:
    table="fellowshipsstageexams";  
        break;
    case 2:
    table="fellowshipsfinalexams";      
        break;

}
const result =await readCon(table,null,[['examID','=',req.body.examID],['ending','>','(now())']]);
console.log("debug 3");

        
                    if((result).length>0){
                        console.log("debug 4");

                        let pass=false;


                if((await(readCon("fellowshipssubscription",null,[['fellowshipID','=',req.body.fellowshipID],['groupID','=',result[0].groupID]]))).length>0){
                  pass=true;

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
                    await write("courseschapterresults",['answer','submissionDate','chapterID','userID','mark'],[
                    
                        JSON.stringify(

                          {ans:req.body.ans,rs:result[0].answers}
                                                ),"now()",result[0].chapterID,data.id,(
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
                        
                    await write("fellowshipschapterresults",['answer','submissionDate','ID','userID','mark'],[
                    
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

            const result =await readCon((req.body.t!=0?"fellowshipsperodicexams":"coursesperodicexams"),null,[['examID','=',req.body.i]]);
            
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
                    await write(("fellowshipsperodicresults"),['answer','submissionDate','ID','userID','mark'],[
                    
                        JSON.stringify(

                            {ans:req.body.ans,rs:result[0].answers}
                                                ),"now()",result[0].examID,data.id,(
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
                        
                    await write("coursesperodicresults",['answer','submissionDate','ID','userID','mark'],[
                    
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

//submit stage exam answers
router.post("/sfa",(req,res)=>{

    auth(req.cookies,res,async function(data){
    console.log(data);
        if(req.body.ID&&req.body.ans&&req.body.i){

            const result =await readCon((req.body.t!=0?"fellowshipsstageexams":"coursesstageexams"),null,[['examID','=',req.body.i]]);
            
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
                    await write("coursesstageresults",['answer','submissionDate','ID','userID','mark'],[
                    
                        JSON.stringify(

                            {ans:req.body.ans,rs:result[0].answers}
                                                ),"now()",result[0].examID,data.id,(
                                                    ((result[0].answers.filter((e,i)=>(req.body.ans[i]==e))).length/result[0].answers.length) * 100
                                                )
                    
                    ]);


                    if (((result[0].answers.filter((e,i)=>(req.body.ans[i]==e))).length/result[0].answers.length)>=result[0].passing){

                        await updateCon("coursessubscription",['level'],['(level + 1)'],[['userID','=',data.id]]);
                        // let userProfile = await readCon("profiles",null,['userID','=',data.id])[0];
                        // if(userProfile['courses']){
                        //     userProfile['courses'] = JSON.parse(userProfile['courses']);
                        //     userProfile['courses'].push({
                        //         name:result[0].courseName,
                        //         mark : ((result[0].answers.filter((e,i)=>(req.body.ans[i]==e))).length/result[0].answers.length) * 100,
                        //         date:(new Date())

                        //     })


                        // }else{
                        //     userProfile['courses'] = [
                        //         {
                        //             name:result[0].courseName,
                        //             mark : ((result[0].answers.filter((e,i)=>(req.body.ans[i]==e))).length/result[0].answers.length) * 100,
                        //             date:(new Date())
                        //         }
                        //     ];
                        // }

                        // await updateCon("profiles",['courses'],[JSON.stringify(userProfile['courses'])],[['userID','=',data.id]]);

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
                        
                    await write("fellowshipsstageresults",['answer','submissionDate','ID','userID','mark'],[
                    
                        JSON.stringify(

                           req.body.ans
                            
                    ),"now()",result[0].ID,data.id,(
                            ((result[0].answers.filter((e,i)=>(req.body.ans[i]==e))).length/result[0].answers.length) * 100

                        )
                    
                    ]);

                    await updateCon("fellowshipssubscription",['level'],['(level + 1)'],[['userID','=',data.id]]);
                    // let userProfile = await readCon("profiles",null,[['userID','=',data.id]])[0];
                    // if(userProfile['fellowships']){
                    //         userProfile['fellowships'] = JSON.parse(userProfile['fellowships']);
                    //         userProfile['fellowships'].push({
                    //             name:result[0].fellowshipName,
                    //             mark : ((result[0].answers.filter((e,i)=>(req.body.ans[i]==e))).length/result[0].answers.length) * 100,
                    //             date:(new Date())

                    //         })

                    // }else{
                    //     userProfile['fellowships'] = [
                    //         {
                    //             name:result[0].fellowshipName,
                    //             mark : ((result[0].answers.filter((e,i)=>(req.body.ans[i]==e))).length/result[0].answers.length) * 100,
                    //             date:(new Date())
                    //         }
                    //     ];
                    // }

                    // await updateCon("profiles",['fellowships'],[JSON.stringify(userProfile['fellowships'])],[['userID','=',data.id]]);

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

            const result =await readCon((req.body.t!=0?"fellowshipsfinalexams":"coursesfinalexams"),null,[['examID','=',req.body.i],['perodic','=',0]]);
            
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
                    await write("coursesfinalresults",['answer','submissionDate','ID','userID','mark'],[
                    
                        JSON.stringify(

                            {ans:req.body.ans,rs:result[0].answers}
                                                ),"now()",result[0].examID,data.id,(
                                                    ((result[0].answers.filter((e,i)=>(req.body.ans[i]==e))).length/result[0].answers.length) * 100
                                                )
                    
                    ]);


                    if (((result[0].answers.filter((e,i)=>(req.body.ans[i]==e))).length/result[0].answers.length)>=result[0].passing){

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
                        
                    await write("fellowshipsfinalresults",['answer','submissionDate','ID','userID','mark'],[
                    
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

    console.log('7');
    if (req.body){
        console.log('7');

        if(typeof(req.body.courseID)=="number"){
            console.log('7');

            if((await readCon("courses",["courseID"],[['courseID','=',req.body.courseID]])).length<=0){
                console.log('7');

                res.sendStatus(403);
                return;
            }
            auth(req.cookies,res,async(data)=>{
                console.log('777');
                console.log(data);

                let banned = (await readCon("banned",null,[['userID','=',data.id],['ID','=',req.body.courseID],['type','=',0]]));
                
                if((await readCon("coursessubscription",["courseID"],[["userID",'=',data.id],['courseID','=',req.body.courseID]])).length>0){
                    let videos=[];
                    let infos=Object();
                    if(banned.length>0){

                        let sql = require("mysql2/promise");

                        const conn =  await sql.createConnection({
                            host:"localhost",
                            user:"root",
                            database:"dentists",
                            password:"0001",
                            port:3306,
                            timezone:"+03:00"
                        })
                         videos= (await conn.query(`select videoUrl,videoTitle from videos where courseID = ${req.body.courseID} and dateAdded < STR_TO_DATE("${(new Date(banned[0].dateBanned)).toLocaleString('en-GB', { hour12: false }).replace(",",'')}","%d/%m/%Y %T")`))[0];
                        await conn.end();
                        console.log('7778');

                        banned[0].dateBanned=`STR_TO_DATE("${(new Date(banned[0].dateBanned)).toLocaleString('en-GB', { hour12: false }).replace(",",'')}","%d/%m/%Y %T")`;



                                             
                        // videos=(await readCon("videos",["videoUrl",'videoTitle'],[['courseID','=',req.body.courseID],['dateAdded','<',`(STR_TO_DATE("${(new Date(banned[0].dateBanned)).toLocaleString('en-GB', { hour12: false }).replace(",",'')}","%d/%m/%Y %T")   )`]]));
                        infos = await getAllCourseInfo(0,req.body.courseID,banned[0].dateBanned);

                        console.log('7778');


                    }else{
                        console.log('77789');

                        videos=(await readCon("videos",["videoUrl",'videoTitle','level'],[['courseID','=',req.body.courseID]]));
                        infos = await getAllCourseInfo(0,req.body.courseID);

                    }
                    res.send({
                        d:[videos,infos],
                        levels : (await readCon("courses",['levels'],[['courseID','=',req.body.courseID]]))[0]['levels']

                    });
                    console.log('sent it');

                    
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
                    let infos=Object();
                    if(banned.length>0){
                        // banned[0].dateBanned=`STR_TO_DATE("${(new Date(banned[0].dateBanned)).toLocaleString('en-GB', { hour12: false }).replace(",",'')}","%d/%m/%Y %T")`;

                        
                        let sql = require("mysql2/promise");

                        const conn =  await sql.createConnection({
                            host:"localhost",
                            user:"root",
                            database:"dentists",
                            password:"0001",
                            port:3306,
                            timezone:"+03:00"
                        })
                         videos= (await conn.query(`select videoUrl,videoTitle from fellowshipvideos where fellowshipID = ${req.body.courseID} and dateAdded < STR_TO_DATE("${(new Date(banned[0].dateBanned)).toLocaleString('en-GB', { hour12: false }).replace(",",'')}","%d/%m/%Y %T")`))[0];
                        await conn.end();

                        banned[0].dateBanned=`STR_TO_DATE("${(new Date(banned[0].dateBanned)).toLocaleString('en-GB', { hour12: false }).replace(",",'')}","%d/%m/%Y %T")`;




                        // videos=(await readCon("fellowshipvideos",["videoURL",'title'],[['fellowshipID','=',req.body.fellowshipID],['dateAdded','<',banned[0].dateBanned]]));
                        infos = await getAllCourseInfo(1,req.body.courseID,banned[0].dateBanned);


                    }else{
                        videos=(await readCon("fellowshipvideos",["videoUrl",'videoTitle','level'],[['fellowshipID','=',req.body.fellowshipID]]));
                        infos = await getAllCourseInfo(1,req.body.fellowshipID);

                    }
                    
                    res.send({
                        d:[videos,infos],
                        levels : (await readCon("fellowships",['levels'],[['fellowshipID','=',req.body.fellowshipID]]))[0]['levels']

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


//forgot password
router.post("/fop",async(req,res)=>{


    if (req.body){
        if(req.body.email){
            let ID="";
            let resd= (await readCon("login",["userID"],[['email','=',req.body.email.replace("gmail",'echo')]]));
            console.log(req.body.email.replace("gmail",'echo'));
            if(resd.length<=0){
                console.log("OUT");
                res.sendStatus(403);
                return;
            }else{
                ID=resd[0].userID;
                try {
                    const d = (new Date());
                    d.setMinutes(d.getMinutes()+10);
                    let r = new rand.Random("dento_echo_rando")
                    const token =(r.float()).toString(36).slice(2);
                    await write("reset_p",['userID',"expDate","token"],[ID,`( now() + interval 10 minute)`,token]);

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
                      to: req.body.email.replace("echo","gmail"), // list of receivers
                      subject: "contacting us", // Subject line
                      html:`
                      <p>Hello , you forgot your password, enter this link in order for you to reset your password</p>
                      
                      <a href="http://localhost:5173/reset/${token}">Here</a>`
                    }).then((e)=>{
                      console.log(e);
                    });

                    res.send({d:"0"});



                } catch (error) {
                    res.sendStatus(403);
                    return;   
                }
            }

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

//change password
router.post("/chngp",async(req,res)=>{


    if (req.body){
        if(req.body.token&&req.body.password){
            let ID="";
            let resd= (await readCon("reset_p",["userID","expDate"],[['token','=',req.body.token]]));

            if(resd.length<=0){
                console.log("OUT");
                res.sendStatus(403);
                return;
            }else{
                if((new Date()) > (new Date(resd[0].expDate))){
                    res.sendStatus(403);
                    await deleteCon("reset_p",[['userID','=',resd[0].userID]]);
                    return;
                }

                ID=resd[0].userID;
                await deleteCon("reset_p",[['userID','=',resd[0].userID]]);
                try {

                    await updateCon("login",['password'],[await hash(req.body.password)],[['userID','=',ID]]);

                    res.send({d:"0"});



                } catch (error) {
                    res.sendStatus(403);
                    return;   
                }
            }

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
router.post("/un",(req,res)=>{
if(req.body.token){

    auth(req.cookies,res,async function(data){
        console.log(data);
            await updateCon("login",['notToken'],[req.body.token],[['userID','=',data.id]]);
            res.sendStatus(200);
            
        },function(){},-1)
    
        
}else{

    res.sendStatus(403);
    return;
}

    
    
    });


    /**
     * 
     * @param {Number} studentID 
     * @param {Number} type wether it's a fellowship or course
     * @param {Number} ID the course/fellowship number 
     */
async function getAllCourseInfo(type,ID,banningDate=null) {
    
//check if the user is banned, if so 


    // const chapters=await readCon("chapter",null,[['type','=',type,['ID','=',ID]]]);
    // const chapterResults =await readCon("results",null,[['type','=',0,['userID','=',studentID],['ID','in',`(${chapters.map((e)=>e.chapterID).join(",")})`]]]);
    // const exams = await readCon("finalexams",null,[[['ID','=',ID]]]);
    

    if (banningDate){
        const chapters=await readCon("chapter",['title','link','details','questions','ID','level'],[['ID','=',ID],['dateAdded','<',banningDate],['type','=',type]]);

        if(type){

            const ffs=await readCon("fellowshipsfinalexams",['title','startingDate','ending','examID','level'],[['fellowshipID','=',ID],['dateAdded','<',banningDate]]);
            const fss=await readCon("fellowshipsstageexams",['title','startingDate','ending','examID','level'],[['fellowshipID','=',ID],['dateAdded','<',banningDate]]);
            const fps=await readCon("fellowshipsperodicexams",['title','startingDate','ending','examID','level'],[['fellowshipID','=',ID],['dateAdded','<',banningDate]]);
 
            return {
                ffs:ffs,fss:fss,fps:fps,
                ch:chapters
            };

        }else{
           const cfs=await readCon("coursesfinalexams",['title','startingDate','ending','examID','level'],[['courseID','=',ID],['dateAdded','<',banningDate]]);
           const css=await readCon("coursesstageexams",['title','startingDate','ending','examID','level'],[['courseID','=',ID],['dateAdded','<',banningDate]]);
           const cps=await readCon("coursesperodicexams",['title','startingDate','ending','examID','level'],[['courseID','=',ID],['dateAdded','<',banningDate]]);

           return {
            cfs:cfs,
            css:css,
            cps:cps,
            ch:chapters
           };

        }

    }else{

        const chapters=await readCon("chapter",['title','link','details','questions','ID','level'],[['ID','=',ID],['type','=',type]]);

        if(type){

            const ffs=await readCon("fellowshipsfinalexams",['title','startingDate','ending','examID','level'],[['fellowshipID','=',ID]]);
            const fss=await readCon("fellowshipsstageexams",['title','startingDate','ending','examID','level'],[['fellowshipID','=',ID]]);
            const fps=await readCon("fellowshipsperodicexams",['title','startingDate','ending','examID','level'],[['fellowshipID','=',ID]]);
 
            return {
                ffs:ffs,fss:fss,fps:fps,ch:chapters
            };

        }else{
            const chapters=await readCon("chapter",['title','link','details','questions','type','ID','level'],[['ID','=',ID]]);

           const cfs=await readCon("coursesfinalexams",['title','startingDate','ending','examID','level'],[['courseID','=',ID]]);
           const css=await readCon("coursesstageexams",['title','startingDate','ending','examID','level'],[['courseID','=',ID]]);
           const cps=await readCon("coursesperodicexams",['title','startingDate','ending','examID','level'],[['courseID','=',ID]]);

           return {
            cfs:cfs,
            css:css,
            cps:cps
            ,
            ch:chapters
           };

        }
    }

}
module.exports = router