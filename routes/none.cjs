//this script takes place when no user has signed in or any type of user has signed in

const util = require("../util.cjs");

const router = require("express").Router()

//get products
router.post("/gp/",async(req,res)=>{
//the productID should be the image name too so that when a user tries to load an image he loads it directly from the source hosting site
//or from this server

const data = (await util.read("products"));
const beta = (await util.read("genres"));
res.send({d:data,g:beta});



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
    let data;
    if(req.body.id){
       data= (await util.readCon("courses",null,[['archived','=',0]],`${req.body.id? req.body.id: 0},10`));
    }else{
    data= (await util.readCon("courses",null,[['archived','=',0]],`${req.body.id? req.body.id: 0},10`));

    }
    res.send({d:data,
        c:(await (util.read("courses",['count(*) as count'])))[0]['count']
    });
});



//get all offers
router.post("/gaf/",async (req,res)=>{


    const data = (await util.read("offers"));
    res.send({d:data});
});



router.post("/ga/",async (req,res)=>{

    const fellowships = (await util.read("fellowships"));

    const courses = (await util.read("courses"));
    res.send({c:courses,f:fellowships});
});

//send certain course to all users
router.post("/gcc/",async (req,res)=>{
    console.log("this function is being called");
console.log(req.body);
try {
    if(!req.body.id){


        res.sendStatus(404);
        return;
    }
    const data = (await util.readCon("courses",null,[['courseID','=',req.body.id]]));
    res.send({d:data[0]});
} catch (error) {
    res.sendStatus(404)
}
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


//get user profile depending on the code
router.post("/gup", async (req, res) => {



    if (req.body.code) {


                try {



                    // get the user ID
                    const user = (await util.readCon("login",['userID','username','email','code','phonenumber','gender'],[['code','=',req.body.code]]))[0];
                    // get the user courses,fellowships

                    res.send({

                        u:user,
                    });

                    return;

                } catch (error) {
                    console.log(error);
                    res.sendStatus(403);
                    return;
                }



          

   

    } else {
        console.log("it stopped here");
        res.sendStatus(403);
        return;
    }

    // res.cookie()

})


//sign in
router.post("/si/",async (req,res)=>{
    
    if((req.body.email)&&req.body.p){
        let data = (await util.readCon("login",['password',"email","notToken",'userID','phonenumber','level','username','code'],[['email','=',req.body.email]]));
        if(data.length<=0){

            res.sendStatus(403);
            return;
        }

        require("argon2").verify(data[0].password.toString(),req.body.p.toString()).then(async (e)=>{

            if(e){

const options ={
    l:data[0].level,
    id:data[0].userID,
};


                var da=(new Date());
                da.setFullYear(da.getFullYear()+1)
                res.cookie("token",
                require("jsonwebtoken").sign(options,"secret"), {httpOnly:true,expires:(da)}
                );
                console.log(data);
                console.log('THIS IS OPTIONS');
                console.log(options);
                res.send({
                    n:(await util.readCon("notifications",['notification'],[['userID','=',data[0].userID]])).map((e)=>e.notification),
                    t:data[0].level,
                    i:data[0].userID,
                    n:data[0].username,
                  e:0,
                  c:data[0].code,
                  pn:data[0].phonenumber
                //   m: options["mac"] ? 0 : 1
                });
            }else{
                console.log("wrong password");
                res.sendStatus(403);
            }

        })

        

    }else{

        res.sendStatus(403)
    }
});

router.post("/gf/",async (req,res)=>{


    // const data = (await util.readCon("fellowships",null,[['archived','=',0]],10));



    let data;
    if(req.body.id){
       data= (await util.readCon("fellowships",null,[['archived','=',0]],`${req.body.id? req.body.id: 0},10`));
    }else{
    data= (await util.readCon("fellowships",null,[['archived','=',0]],`${req.body.id? req.body.id: 0},10`));

    }
    res.send({d:data,
        c:(await (util.read("fellowships",['count(*) as count'])))[0]['count']
    });
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
//get person profile


module.exports = router;
//