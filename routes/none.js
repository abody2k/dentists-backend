//this script takes place when no user has signed in or any type of user has signed in

const util = require("../util");

const router = require("express").Router()

//get products
router.post("/gp/",async(req,res)=>{
//the productID should be the image name too so that when a user tries to load an image he loads it directly from the source hosting site
//or from this server

const data = (await util.read("products"));
res.send({d:data});



});
//request blogs
router.post("/rb/",async (req,res)=>{
    if(typeof(req.body.lb)=='number'){
            res.send({
                d:(await util.readCon("blogs",['blogDetails'],[['blogID','>=','']],10))
            })

    }else{

        res.sendStatus(403);
    }

});

//send courses to all users

router.post("/gc/",async (req,res)=>{


    const data = (await util.read("courses"));
    res.send({d:data});
});
module.exports = router;
//