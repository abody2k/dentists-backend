const {auth} = require("../auth");
const {  readCon } = require("../util");

const router = require("express").Router();



//handle users requesting videos of the course
//we start with checking the parametters like courseID if it's not valid then reject
//first we check if this is actually a user or admin we only verify the token
//then we check if the course exists 
//then we check if this user is enrolled in this course already
//if yes then select all the video links and send them to the user, if not reject the request


//get course videos
router.post("/gcv",async(req,res)=>{

    if (req.body){
        if(typeof(req.body.courseID)=="number"){

            if((await readCon("courses",["courseID"],[['courseID','=',req.body.courseID]])).length<=0){

                res.sendStatus(403);
                return;
            }
            auth(req.cookies,res,async(data)=>{


                if((await readCon("coursessubscription",["courseID"],[["userID",'=',data.id],['courseID','=',req.body.courseID]])).length>0){
                    const videos=(await readCon("videos",["videoUrl",'videoTitle'],[['courseID','=',req.body.courseID]]));
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


                if((await readCon("fellowshipssubscription",["userID"],[["userID",'=',data.id],['fellowshipID','=',req.body.fellowshipID]])).length>0){
                    const videos=(await readCon("fellowshipvideos",["videoURL",'title'],[['fellowshipID','=',req.body.fellowshipID]]));
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


module.exports = router