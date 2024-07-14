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
    case 1:
    table="coursesperodicexams";    
        break;
    case 2:
    table="coursesstageexams";  
        break;
    case 3:
    table="coursesfinalexams";      
        break;

}

// ['ending','>','(now())'],['now()','>','startingDate']

    const result =await readCon(table,null,[['examID','=',req.body.examID]]);
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

                const dif= Math.ceil(((new Date()) - (new Date(result[0].ending)))/(1000*60*60*24));


                
                if((new Date())  > (new Date(result[0].ending))){ // exam ended send results to the user

                    // get all the results 
                    let results =await readCon("allresults",['userID as i','grade'],[['examID','=',req.body.examID],['ID','=',req.body.courseID],['atype','=',0],['examType','=',req.body.examType]]);
                    let names=[];
                    console.log(['userID','in',`(${results.map((e)=>e.userID).join(",")})`]);
                    if(results.length>0){
                        names=await readCon("login",['username as n','userID as i'],[['userID','in',`(${results.map((e)=>e.i).join(",")})`]]);
                        console.log(names);
                    }
                    
                if(dif>14){
                    res.send({
                        r:results,
                        na:names,
                        title:result[0].title,
                        sd:result[0].startingDate,
                        en:result[0].ending,
                        l:result[0].level,
                        n:result[0].note,
                    })
                }else{
                    res.send({
                        r:results,
                        na:names,
                        title:result[0].title,
                        sd:result[0].startingDate,
                        en:result[0].ending,
                        l:result[0].level,
                        n:result[0].note,
                        qu:result[0].questions,
                        ans:result[0].answers,
                        uans:(await readCon(table.replace("exams",'results'),['answer'],[['userID','=',data.id],['examID','=',req.body.examID]]))

                    })
                }
                    return;

                }
                else if((new Date())  > (new Date(result[0].startingDate)) && (new Date())  < (new Date(result[0].ending))){ // exam is still ongoing send the questions
                    let aresult =await readCon("allresults",['userID as i'],[['examID','=',req.body.examID],['atype','=',0],['ID','=',req.body.courseID],['examType','=',req.body.examType],['userID','=',data.id]]);
                    if(aresult.length>0){
                        res.send({
                            title:result[0].title,
                            sd:result[0].startingDate,
                            en:result[0].ending,
                            l:result[0].level,
                            n:result[0].note
                        })
                    }else{
                        res.send({
                            q:result[0].questions.map((s)=>{
                                delete s['n'];
                                return s;}),
                            title:result[0].title,
                            sd:result[0].startingDate,
                            en:result[0].ending,
                            l:result[0].level,
                            n:result[0].note
                        })
                    }

                }else{ //exam hasn't got started yet so send the details only
                    res.send({
                        title:result[0].title,
                        sd:result[0].startingDate,
                        en:result[0].ending,
                        l:result[0].level,
                        n:result[0].note
                    })
                
                }

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
    case 1:
    table="fellowshipsperodicexams";    
        break;
    case 2:
    table="fellowshipsstageexams";  
        break;
    case 3:
    table="fellowshipsfinalexams";      
        break;

}

const result =await readCon(table,null,[['examID','=',req.body.examID]]);
console.log("debug 3");

        
                    if((result).length>0){


                        console.log("debug 4");

                        let pass=false;
 
 
                if((await(readCon("fellowshipssubscription",null,[['fellowshipID','=',req.body.fellowshipID],['groupID','=',result[0].groupID]]))).length>0){
                  pass=true;

              }
        
              
        console.log(pass);
        if(!pass){


            res.sendStatus(403);
            return;
        }else{

            console.log('arried');

            const dif= Math.ceil(((new Date()) - (new Date(result[0].ending)))/(1000*60*60*24));
            


            if((new Date())  > (new Date(result[0].ending))){ // exam ended send results to the user

                // get all the results 
                let results =await readCon("allresults",['userID as i','grade'],[['examID','=',req.body.examID],['ID','=',req.body.fellowshipID],['atype','=',1],['examType','=',req.body.examType]]);
                let names=[];

                //check if there are 14 days or less if so send the question as well
                if(results.length>0){
                    names=await readCon("login",['username as n','userID as i'],[['userID','in',`(${results.map((e)=>e.i).join(",")})`]]);
                }
                
                if(dif>14){
                    res.send({
                        r:results,
                        na:names,
                        title:result[0].title,
                        sd:result[0].startingDate,
                        en:result[0].ending,
                        l:result[0].level,
                        n:result[0].note,
                    })
                }else{

                    res.send({
                        r:results,
                        na:names,
                        title:result[0].title,
                        sd:result[0].startingDate,
                        en:result[0].ending,
                        l:result[0].level,
                        n:result[0].note,
                        qu:result[0].questions,
                        ans:result[0].answers,
                        uans:(await readCon(table.replace("exams",'results'),['answer'],[['userID','=',data.id],['examID','=',req.body.examID]]))


                    })
                }
                return;

            }
            else if((new Date()) > (new Date(result[0].startingDate)) && (new Date()) < (new Date(result[0].ending)) ){ // ongoing exam

                let aresult =await readCon("allresults",['userID as i'],[['examID','=',req.body.examID],['atype','=',1],['ID','=',req.body.fellowshipID],['examType','=',req.body.examType],['userID','=',data.id]]);
                if(aresult.length>0){
                    res.send({
                        title:result[0].title,
                        sd:result[0].startingDate,
                        en:result[0].ending,
                        l:result[0].level,
                        n:result[0].note
                    })
                }else{
                    res.send({
                        q:result[0].questions.map((s)=>{
                            delete s['n'];
                            return s;}),
                        title:result[0].title,
                        sd:result[0].startingDate,
                        en:result[0].ending,
                        l:result[0].level,
                        n:result[0].note
                    })
                }

            }else{ //exam hasn't started yet
                res.send({

                    title:result[0].title,
                    sd:result[0].startingDate,
                    en:result[0].ending,
                    l:result[0].level,
                    n:result[0].note
                })}


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

                          req.body.ans
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
                if((await readCon("coursessubscription",null,[['userID','=',data.id],['courseID','=',req.body.ID],['status','=',0]])).length>0){


                 try {
                    await write(("coursesperodicresults"),['answer','submissionDate','examID','userID','mark','courseID'],[
                         
                        JSON.stringify(

                           req.body.ans
                                                ),"now()",result[0].examID,data.id,(
                                                    ((result[0].answers.map((e)=>e.map((d)=>d[0])).filter((e,i)=>(req.body.ans[i].toString()==e.toString()))).length/result[0].answers.length) * 100
                                                ),req.body.ID
                    
                    ]);

                    await write("allresults",["ID",'userID','grade','examID','examType','atype'],[req.body.ID,data.id,((result[0].answers.map((e)=>e.map((d)=>d[0])).filter((e,i)=>(req.body.ans[i].toString()==e.toString()))).length/result[0].answers.length) * 100
                ,req.body.i,1,0]);
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

                if((await readCon("fellowshipssubscription",null,[['userID','=',data.id],['fellowshipID','=',req.body.ID],['status','=',0]])).length>0){

                    try {
                        
                    await write("fellowshipsperodicresults",['answer','submissionDate','examID','userID','mark','fellowshipID'],[
                    
                        JSON.stringify(

                           req.body.ans
                            
                    ),"now()",result[0].ID,data.id,(
                            ((result[0].answers.map((e)=>e.map((d)=>d[0])).filter((e,i)=>(req.body.ans[i].toString()==e.toString()))).length/result[0].answers.length) * 100

                        ), req.body.ID
                    
                    ]);
                    await write("allresults",["ID",'userID','grade','examID','examType','atype'],[req.body.ID,data.id,((result[0].answers.map((e)=>e.map((d)=>d[0])).filter((e,i)=>(req.body.ans[i].toString()==e.toString()))).length/result[0].answers.length) * 100
                    ,req.body.i,1,1]);
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
router.post("/ssa",(req,res)=>{

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

                if((await readCon("coursessubscription",null,[['userID','=',data.id],['courseID','=',req.body.ID],['status','=',0]])).length>0){

                 try {
                    await write("coursesstageresults",['answer','submissionDate','examID','userID','mark','courseID'],[
                    
                        JSON.stringify(

                           req.body.ans
                                                ),"now()",result[0].examID,data.id,(
                                                    ((result[0].answers.map((e)=>e.map((d)=>d[0])).filter((e,i)=>(req.body.ans[i].toString()==e.toString()))).length/result[0].answers.length) * 100
                                                ),req.body.ID
                    
                    ]);
                    console.log('here as well II');

                    await write("allresults",["ID",'userID','grade','examID','examType','atype'],[req.body.ID,data.id,((result[0].answers.map((e)=>e.map((d)=>d[0])).filter((e,i)=>(req.body.ans[i].toString()==e.toString()))).length/result[0].answers.length) * 100
                    ,req.body.i,2,0]);


                    if (((result[0].answers.map((e)=>e.map((d)=>d[0])).filter((e,i)=>(req.body.ans[i].toString()==e.toString()))).length/result[0].answers.length)>=result[0].passing){

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
                    console.log(error);

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

                if((await readCon("fellowshipssubscription",null,[['userID','=',data.id],['fellowshipID','=',req.body.ID],['status','=',0]])).length>0){

                    try {
                        
                    await write("fellowshipsstageresults",['answer','submissionDate','examID','userID','mark','fellowshipID'],[
                    
                        JSON.stringify(

                           req.body.ans
                            
                    ),"now()",result[0].ID,data.id,(
                            ((result[0].answers.map((e)=>e.map((d)=>d[0])).filter((e,i)=>(req.body.ans[i].toString()==e.toString()))).length/result[0].answers.length) * 100

                        ),req.body.ID
                    
                    ]);

                    await write("allresults",["ID",'userID','grade','examID','examType','atype'],[req.body.ID,data.id,((result[0].answers.map((e)=>e.map((d)=>d[0])).filter((e,i)=>(req.body.ans[i].toString()==e.toString()))).length/result[0].answers.length) * 100
                    ,req.body.i,2,1]);


                    if (((result[0].answers.map((e)=>e.map((d)=>d[0])).filter((e,i)=>(req.body.ans[i].toString()==e.toString()))).length/result[0].answers.length)>=result[0].passing){

                        await updateCon("fellowshipssubscription",['level'],['(level + 1)'],[['userID','=',data.id]]);
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


    //get user profile depending on the code
router.post("/gup", async (req, res) => {




            auth(req.cookies, res, async (data) => {

                try {



                    // get the user ID
                    
                    const user = (await readCon("login",['userID','username','email','phonenumber','gender','code'],[['userID','=',data.id]]))[0];
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



            }, 1)

   

    

    // res.cookie()

})



//submit final exam answers
router.post("/sfa",(req,res)=>{

    auth(req.cookies,res,async function(data){
    console.log(data);
        if(req.body.ID&&req.body.ans&&req.body.i){

            const result =await readCon((req.body.t!=0?"fellowshipsfinalexams":"coursesfinalexams"),null,[['examID','=',req.body.i]]);
            
            if(req.body.ans.length==result[0].answers.length){


            }else{

                res.sendStatus(403);
                return;
            }

            if((result).length>0){


            if(req.body.t==0){
                console.log("here");
                if((await readCon("coursessubscription",null,[['userID','=',data.id],['courseID','=',req.body.ID],['status','=',0]])).length>0){


                 try {
                    await write("coursesfinalresults",['answer','submissionDate','examID','userID','mark','courseID'],[
                    
                        JSON.stringify(

                           req.body.ans
                                                ),"now()",result[0].examID,data.id,(
                                                    ((result[0].answers.map((e)=>e.map((d)=>d[0])).filter((e,i)=>(req.body.ans[i].toString()==e.toString()))).length/result[0].answers.length) * 100
                                                ),req.body.ID
                    
                    ]);


                    await write("allresults",["ID",'userID','grade','examID','examType','atype'],[req.body.ID,data.id,((result[0].answers.map((e)=>e.map((d)=>d[0])).filter((e,i)=>(req.body.ans[i].toString()==e.toString()))).length/result[0].answers.length) * 100
                    ,req.body.i,3,0]);

                    if (((result[0].answers.map((e)=>e.map((d)=>d[0])).filter((e,i)=>(req.body.ans[i].toString()==e.toString()))).length/result[0].answers.length)>=result[0].passing){

                        await updateCon("coursessubscription",['level','status'],['(level + 1)',1],[['userID','=',data.id]]);

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
                    
console.log(error);
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

                if((await readCon("fellowshipssubscription",null,[['userID','=',data.id],['fellowshipID','=',req.body.ID],['status','=',0]])).length>0){

                    try {

                        console.log(result[0].answers.map((e)=>e.map((d)=>d[0])).filter((e,i)=>(req.body.ans[i].toString()==e.toString())));
                        console.log(req.body.ans);
                        
                        // console.log(res);

                    await write("fellowshipsfinalresults",['answer','submissionDate','examID','userID','mark','fellowshipID'],[
                    
                        JSON.stringify(

                           req.body.ans
                            
                    ),"now()",result[0].examID,data.id,(
                            ((result[0].answers.map((e)=>e.map((d)=>d[0])).filter((e,i)=>(req.body.ans[i].toString()==e.toString()))).length/result[0].answers.length) * 100

                        ),req.body.ID
                    
                    ]);


                    await write("allresults",["ID",'userID','grade','examID','examType','atype'],[req.body.ID,data.id,((result[0].answers.map((e)=>e.map((d)=>d[0])).filter((e,i)=>(req.body.ans[i].toString()==e.toString()))).length/result[0].answers.length) * 100
                    ,req.body.i,3,1]);

                    if (((result[0].answers.map((e)=>e.map((d)=>d[0])).filter((e,i)=>(req.body.ans[i].toString()==e.toString()))).length/result[0].answers.length)>=result[0].passing){

                        await updateCon("fellowshipssubscription",['level','status'],['(level + 1)',1],[['userID','=',data.id]]);

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

                    }
                    // await updateCon("profiles",['fellowships'],[JSON.stringify(userProfile['fellowships'])],[['userID','=',data.id]]);


                    } catch (error) {
                        console.log(error);
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
                            host:"dentists.ct0im0y0ome2.me-central-1.rds.amazonaws.com",
                            user:"root",
                            database:"dentists",
                            password:"grabyOli0001",
                            port:3306,connectTimeout:900000,

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

                        videos=(await readCon("videos",["videoUrl",'videoTitle','level','order'],[['courseID','=',req.body.courseID]]));
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
                            host:"dentists.ct0im0y0ome2.me-central-1.rds.amazonaws.com",
                            user:"root",
                            database:"dentists",
                            password:"grabyOli0001",
                            port:3306,connectTimeout:900000,

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
                      
                      <a href="http://3.29.235.228:5173/reset/${token}">Here</a>`
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

//forgot password but I'm signed in
router.post("/fopi",async(req,res)=>{

    auth(req.cookies,res,async function(data){

            let ID="";
            console.log(data);
            let resd= (await readCon("login",["userID",'email'],[['userID','=',data.id]]));

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
                      to: resd[0].email.replace("echo","gmail"), // list of receivers
                      subject: "contacting us", // Subject line
                      html:`
                      <p>Hello , you forgot your password, enter this link in order for you to reset your password</p>
                      
                      <a href="http://3.29.235.228:5173/reset/${token}">Here</a>`
                    }).then((e)=>{
                      console.log(e);
                    });

                    res.sendStatus(200);



                } catch (error) {
                    console.log(error);
                    res.sendStatus(403);
                    return;   
                }
            }

        
            
        },function(){},1)



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

//update or delete pfp
router.post("/udpfp", async (req, res) => {


    req.body = JSON.parse(req.body.body);
    console.log(req.body);
    console.log(req.files);
    if (req.body) {


            auth(req.cookies, res, async (data) => {


                console.log("Everything went well");
                const aws = require('aws-sdk');
                aws.config.update({region: 'me-central-1'});


                try {


                    const s3 = new aws.S3({
                        accessKeyId: 'AKIA3FLDYBZIABM7ZXPS',
                        secretAccessKey: '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',
                        region: 'me-central-1',
                      });

                      if(req.body.d){
                        const params = {
                            Bucket: 'echo-dentists',
                            Key: "pfps/"+req.body.c ,
                        };
                          
                          s3.deleteObject(params, (err, data) => {
                            if (err) {
                              console.error('Error deleting object:', err);
                            } else {
                              console.log('Object deleted successfully:', data);
                              res.sendStatus(200);
                              return;
                            }
                          });
                      }else{
                    const file = req.files[Object.keys(req.files)[0]];

                    const params = {
                        Bucket: 'echo-dentists',
                        Key: "pfps/"+req.body.c ,
                        Body: file.data,
                        ACL: 'public-read', // Set the ACL permissions as needed,

                      };
                    
                      // Upload the file to S3
                      console.log(params);
                      
                      s3.upload(params, (err, data) => {
                        if (err) {
                          console.log(err);
                          throw err;
                        }else{
                          console.log("done uploading");
                          res.sendStatus(200);
                          return;
                        }
                    
                      }); 

                      }
                      
                      


          
                } catch (error) {
                    console.log(error);
                    res.send({
                        e: 1
                    });
                    return;
                }


            }, () => {


                console.log("something went wrong");



            }, 1)

        

    } else {
        console.log("it stopped here");
        res.sendStatus(403);
        return;
    }

    // res.cookie()

})

//update user data
router.post("/uud", async (req, res) => {
    console.log("we arrived here");
    req.body = JSON.parse(req.body.body);



            auth(req.cookies, res, async (data) => {
                console.log("we arrived here");

                try {
                    console.log("we arrived here");

                    let fields = {};
                    let p;
                    if (req.body.pn) {
                        fields["phonenumber"] = req.body.pn; 
                    }
                    if ( req.body.op && req.body.np) {

                        p = await readCon('login',['password'],[['userID','=',data.id]]);
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
                                ["userID", '=', data.id]
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



            }, 1)

   

    

    // res.cookie()

})
//get notifications
router.post("/gn",(req,res)=>{

auth(req.cookies,res,async function(data){
console.log(data);
    res.send({
        d:(await readCon("notifications",["notification"],[["userID",'=',data.id]]))
    });
    
},function(){},1)



});


//get an exam result
router.post("/gex",(req,res)=>{

    if(typeof(req.body.examID)=='number'&&typeof(req.body.atype)=='number'&&typeof(req.body.examType)=='number'){

        auth(req.cookies,res,async function(data){

            //check if such exam actually exists and check if the time is not too late

            let exam=[];
            let result;

            switch (req.body.atype) {
                case 0:
                    switch (req.body.examType) {

                        // courses exams starts from 1 because chapter exams does not exist in courses
                        case 1:
                    
                        exam = await readCon("coursesperodicexams",null,[['examID','=',req.body.examID],['timediff(now(),ending + interval 14 day)','<','0'],['timediff(now(),ending)','>=','0']]);
                            break;
                            case 2:
                        exam = await readCon("coursesstageexams",null,[['examID','=',req.body.examID],['timediff(now(),ending + interval 14 day)','<','0'],['timediff(now(),ending)','>=','0']]);
                            break;
                            case 3:
                        exam = await readCon("coursesfinalexams",null,[['examID','=',req.body.examID],['timediff(now(),ending + interval 14 day)','<','0'],['timediff(now(),ending)','>=','0']]);
                            break;
                    }
                break;
                case 1:
                    switch (req.body.examType) {

                        case 0:
                            
                            break;
                        case 1:
                            exam = await readCon("fellowshipsperodicexams",null,[['examID','=',req.body.examID],['timediff(now(),ending + interval 14 day)','<','0'],['timediff(now(),ending)','>=','0']]);
                            break;
                            case 2:
                        exam = await readCon("fellowshipsstageexams",null,[['examID','=',req.body.examID],['timediff(now(),ending + interval 14 day)','<','0'],['timediff(now(),ending)','>=','0']]);
                            break;
                            case 3:
                        exam = await readCon("fellowshipsfinalexams",null,[['examID','=',req.body.examID],['timediff(now(),ending + interval 14 day)','<','0'],['timediff(now(),ending)','>=','0']]);
                            break;
                    }                    
                break;

            }

            if(exam.length>0){ // time has not passed yet

                switch (req.body.atype) {
                    case 0:
                        switch (req.body.examType) {
    
                            // courses exams starts from 1 because chapter exams does not exist in courses
                            case 1:
                        
                            result = await readCon("coursesperodicresults",null,[['examID','=',req.body.examID],['userID','=',data.id]]);
                                break;
                                case 2:
                                    result = await readCon("coursesstageresults",null,[['examID','=',req.body.examID],['userID','=',data.id]]);
                                break;
                                case 3:
                                    result = await readCon("coursesfinalresults",null,[['examID','=',req.body.examID],['userID','=',data.id]]);
                                break;
                        }
                    break;
                    case 1:
                        switch (req.body.examType) {
    
                            case 0:
                                // result = await readCon("fellowshipschapterresults",null,[['examID','=',req.body.examID],['userID','=',data.id]]);

                                break;
                            case 1:
                                result = await readCon("fellowshipsperodicresults",null,[['examID','=',req.body.examID],['userID','=',data.id]]);
                                break;
                                case 2:
                            result = await readCon("fellowshipsstageresults",null,[['examID','=',req.body.examID],['userID','=',data.id]]);
                                break;
                                case 3:
                            result = await readCon("fellowshipsfinalresults",null,[['examID','=',req.body.examID],['userID','=',data.id]]);
                                break;
                        }                    
                    break;
    
                }     
            }else{

                result = await readCon("allexams",['grade'],[["userID",'=',data.id]]);

            }
            res.send({
                    d:result
                });
                
            },function(){},1)
    }

    
    
    
    });

//update notificationToken
router.post("/un",(req,res)=>{
if(req.body.token){

    auth(req.cookies,res,async function(data){
        console.log(data);
            await updateCon("login",['notToken'],[req.body.token],[['userID','=',data.id]]);
            res.sendStatus(200);
            
        },function(){},1)
    
        
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
        const chapters=await readCon("chapter",['title','link','details','questions','ID','level','chapterID as chID'],[['ID','=',ID],['dateAdded','<',banningDate],['type','=',type]]);

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

        const chapters=await readCon("chapter",['title','link','details','questions','ID','level','chapterID as chID'],[['ID','=',ID],['type','=',type]]);

        if(type){

            const ffs=await readCon("fellowshipsfinalexams",['title','startingDate','ending','examID','level'],[['fellowshipID','=',ID]]);
            const fss=await readCon("fellowshipsstageexams",['title','startingDate','ending','examID','level'],[['fellowshipID','=',ID]]);
            const fps=await readCon("fellowshipsperodicexams",['title','startingDate','ending','examID','level'],[['fellowshipID','=',ID]]);
 
            return {
                ffs:ffs,fss:fss,fps:fps,ch:chapters
            };

        }else{
            const chapters=await readCon("chapter",['title','link','details','questions','type','ID','level','chapterID as chID'],[['ID','=',ID]]);

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