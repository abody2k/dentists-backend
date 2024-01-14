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

//send certain course to all users
router.post("/gcc/",async (req,res)=>{

    if(!req.body.id){


        res.sendStatus(404);
        return;
    }
    const data = (await util.readCon("courses",null,[['courseID','=',req.body.id]]));
    res.send({d:data[0]});
});


//send certain fellowship to all users
router.post("/gcf/",async (req,res)=>{

    if(!req.body.id){


        res.sendStatus(404);
        return;
    }
    const data = (await util.readCon("fellowships",null,[['fellowshipID','=',req.body.id]]));
    res.send({d:data[0]});
});


router.post("/gf/",async (req,res)=>{


    const data = (await util.read("fellowships"));
    res.send({d:data});
});

router.post("/se",async(req,res)=>{


    if(req.body.msg && req.body.e&&req.body.n){

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
          to: "alhmdanyb902@gmail.com", // list of receivers
          subject: "contacting us", // Subject line
          text: `this message has been sent to you by ${req.body.e} and their name is ${req.body.n} and their message is : ${req.body.msg}`, // plain text body
        }).then((e)=>{
          console.log(e);
        });

        res.sendStatus(200);

        
    }else{

        res.sendStatus(403);
    }
})
router.post("/gb/",async (req,res)=>{

    
    const data = (await util.read("blogs"));
    res.send({d:data});
});
module.exports = router;
//