const { response } = require('express');
const jwt=require('jsonwebtoken')


//check if the token is valid and do something about it
/**
 * 
 * @param {String} token 
 * @param {response} res 
 * @param {Function} successFunc 
 * @param {Function} errFunc 
 * @param {Number} level
 */
function authenticate(cookies,res,successFunc,errFunc,level=-1) {
    if(level==-1){


        successFunc();
        return;
    }
    if (cookies!= undefined){
        if (cookies['token']!= undefined){
            jwt.verify(cookies['token'],"secret",function(err,data){
                if (err!= undefined){
                    if (errFunc)
                    errFunc();
                    res.sendStatus(403);
                }else{

console.log(level);
console.log(data);
                    if (level !=-1 && data['l']!=level){
                        errFunc();
                    res.sendStatus(403);
                    return;
                    }
                    if(successFunc)
                    successFunc(data);
                }
                // console.log(err);
                // console.log(data);
            })
        }else{
            console.log('rejected , no token cookie');
            res.sendStatus(403);
            return;
        }
    }
    else{
        console.log("cookies are unidentified");
        res.sendStatus(403);
        return;
    }
    
}


module.exports ={

    "auth":authenticate
}