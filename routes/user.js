const {auth} = require("../auth");
const {  readCon } = require("../util");

const router = require("express").Router();



//handle users requesting videos of the course
//we start with checking the parametters like courseID if it's not valid then reject
//first we check if this is actually a user or admin we only verify the token
//then we check if the course exists 
//then we check if this user is enrolled in this course already
//if yes then select all the video links and send them to the user, if not reject the request


//get videos
router.post("/gv",async(req,res)=>{

    if (req.body){
        if(typeof(req.body.courseID)=="number"){

            if((await readCon("courses",["userID"],[['courseID','=',req.body.courseID]])).length<=0){

                res.sendStatus(403);
                return;
            }
            auth(req.cookies,res,async(data)=>{


                if((await readCon("subscription",["userID"],[["userID",'=',data.i],['courseID','=',req.body.courseID]])).length>0){
                    const videos=(await readCon("videos",[],['courseID','=',req.body.courseID]));
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