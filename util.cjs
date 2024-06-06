let sql = require("mysql2/promise");
const aws = require('aws-sdk');
aws.config.update({region: 'me-central-1'});

/**
 * 
 * @param {String} table 
 * @param {Array<String>} fields 
 */
async function read(table,fields) {
    const conn =  await sql.createConnection({
        host:"dentists.ct0im0y0ome2.me-central-1.rds.amazonaws.com",
        user:"root",
        database:"dentists",
        password:"grabyOli0001",
        port:3306,
        timezone:"+03:00"
        
    })

    /*
        host:"dentists.cjmuc6u8m5ok.us-east-1.rds.amazonaws.com",
        user:"root",
        database:"dentists",
        password:"grabyOli0001",
        port:3306,
        timezone:"+03:00"
    */



    const data= (await conn.query(`select ${(fields != null ? fields.join(","): "*")} from ${table};`))[0];
    await conn.end();
    return data;
}




async function readOrder(table,fields,conditions,orderer,limit=null) {
    const conn =  await sql.createConnection({
        host:"dentists.ct0im0y0ome2.me-central-1.rds.amazonaws.com",
        user:"root",
        database:"dentists",
        password:"grabyOli0001",
        port:3306,
        timezone:"+03:00"
    })
    const con=conditions.map(e=>((typeof(e[2])=="string"&& !e.toString().includes("(")) ? [e[0],e[1],`"${e[2]}"`].join(' ') : e.join(' '))).join(" and ");
    const data= (await conn.query(`select ${(fields != null ? fields.join(",") : "*")} from ${table} where ${con} order by ${orderer} desc  ${limit ? " LIMIT "+ limit : ""};`))[0];
    await conn.end();
    return data;
}
//https://echo-dentists.s3.amazonaws.com/
//https://echo-dentists.s3.amazonaws.com/
//grabyOli0001
//host:"dentists.ct0im0y0ome2.me-central-1.rds.amazonaws.com"
//dentists.ct0im0y0ome2.me-central-1.rds.amazonaws.com
//host:"dentists.ct0im0y0ome2.me-central-1.rds.amazonaws.com"
// dentists.cp22o2g04xb8.region: 'me-central-1'.rds.amazonaws.com
/**
 * 
 * @param {String} table 
 * @param {Array<String>} fields 
 * @param {Array<String>} conditions
 */
async function readConditionally(table,fields,conditions,limit=null) {
    const conn =  await sql.createConnection({
        host:"dentists.ct0im0y0ome2.me-central-1.rds.amazonaws.com",
        user:"root",
        database:"dentists",
        password:"grabyOli0001",
        port:3306,
        timezone:"+03:00"
    })
    const con=conditions.map(e=>((typeof(e[2])=="string"&& !e.toString().includes("(")) ? [e[0],e[1],`"${e[2]}"`].join(' ') : e.join(' '))).join(" and ");
    const data= (await conn.query(`select ${(fields != null ? fields.join(",") : "*")} from ${table} where ${con}  ${limit ? " LIMIT "+ limit : ""};`))[0];
    await conn.end();
    return data;
}


async function deleteConditionally(table,conditions) {
    const conn =  await sql.createConnection({
        host:"dentists.ct0im0y0ome2.me-central-1.rds.amazonaws.com",
        user:"root",
        database:"dentists",
        password:"grabyOli0001",
        port:3306,
        timezone:"+03:00"
    })
    const con=conditions.map(e=>((typeof(e[2])=="string"&& !e.toString().includes("(")) ? [e[0],e[1],`"${e[2]}"`].join(' ') : e.join(' '))).join(" and ");
    (await conn.query(`delete from  ${table} where ${con} `));
    await conn.end();

}


async function deleteConditionallyOR(table,conditions) {
  const conn =  await sql.createConnection({
      host:"dentists.ct0im0y0ome2.me-central-1.rds.amazonaws.com",
      user:"root",
      database:"dentists",
      password:"grabyOli0001",
      port:3306,
      timezone:"+03:00"
  })
  const con=conditions.map(e=>( [e[0],e[1],`"${e[2]}"`].join(' ') )).join(" or ");
  (await conn.query(`delete from  ${table} where ${con} `));
  await conn.end();

}


/**
 * 
 * @param {String} table 
 * @param {Array<String>} fields 
 *  * @param {Array} fields 
 * @param {Array<String>} conditions
 */
async function updateConditionally(table,fields,values,conditions) {
    const conn =  await sql.createConnection({
        host:"dentists.ct0im0y0ome2.me-central-1.rds.amazonaws.com",
        user:"root",
        database:"dentists",
        password:"grabyOli0001",
        port:3306,
        timezone:"+03:00",

    })
    const con=conditions.map(e=>((typeof(e[2])=="string"&& !e.toString().includes("(")) ? [e[0],e[1],`"${e[2]}"`].join(' ') : e.join(' '))).join(" and ");
    let setter=``;
    fields.forEach((element,i) => {
        if (i == (fields.length-1)){
            setter += ` ${element} = ${(typeof(values[i])== 'string'&& !values[i].includes("(") ? `"${values[i]}"`:values[i])}` ;
        }else{
            setter += ` ${element} = ${(typeof(values[i])== 'string'&& !values[i].includes("(") ? `"${values[i]}"`:values[i])} , `;
        }
        
    });
     const[a,b]=(await conn.query(`update ${table} set ${setter} where ${con};`));
    await conn.end();

    return [a,b];
    
}


/**
 * 
 * @param {String} table 
 * @param {Array<String>} fields 
 *  * @param {Array} fields 
 * @param {Array<String>} conditions
 */
async function updateConditionallyJSON(table,fields,values,conditions) {
    const conn =  await sql.createConnection({
        host:"dentists.ct0im0y0ome2.me-central-1.rds.amazonaws.com",
        user:"root",
        database:"dentists",
        password:"grabyOli0001",
        port:3306,
        timezone:"+03:00",

    })
    const con=conditions.map(e=>((typeof(e[2])=="string"&& !e.toString().includes("(")) ? [e[0],e[1],`"${e[2]}"`].join(' ') : e.join(' '))).join(" and ");
    let setter=``;
    fields.forEach((element,i) => {
        if (i == (fields.length-1)){
            setter += ` ${element} = ${(typeof(values[i])== 'string' ? `"${values[i].replace(/'/g, "''") .replace(/"/g, '\\"')}"`:values[i])}` ;
        }else{
            setter += ` ${element} = ${(typeof(values[i])== 'string' ? `"${values[i].replace(/'/g, "''") .replace(/"/g, '\\"')}"`:values[i])} , `;
        }
        
    });
     const[a,b]=(await conn.query(`update ${table} set ${setter} where ${con};`));
    await conn.end();

    return [a,b];
    
}

/**
 * 
 * @param {String} table 
 * @param {Array<String>} keys 
 * @param {Array<Array<String>>} values 
 */
async function write(table,keys,values) {
    const conn =  await sql.createConnection({
        host:"dentists.ct0im0y0ome2.me-central-1.rds.amazonaws.com",
        user:"root",
        database:"dentists",
        password:"grabyOli0001",
        port:3306,
        timezone:"+03:00"
    })
    const value = values.map(v=>(typeof(v)=="string" ? (v.includes("now()")||v.includes("STR_TO_DATE")?v:`"${v.replace(/'/g, "''") .replace(/"/g, '\\"')}"`) : (v==undefined ? "null" : v)));
    console.log(value);
    const [rows,fields]=(await conn.query(`insert into ${table} (${keys.join(",")}) values(${value.join(",")}) ;`));
    await conn.end();
    return rows.insertId;
}


/**
 * 
 * @param {String} table 
 * @param {Array<String>} keys 
 * @param {Array<Array<String>>} values 
 */
async function writeMany(table,keys,values) {
    const conn =  await sql.createConnection({
        host:"dentists.ct0im0y0ome2.me-central-1.rds.amazonaws.com",
        user:"root",
        database:"dentists",
        password:"grabyOli0001",
        port:3306,
        timezone:"+03:00"
    })
    // const value = values.map(v=>(typeof(v)=="string" ? `"${v.replace(/'/g, "''") .replace(/"/g, '\\"')}"` : (v==undefined ? "null" : v)));
    console.log(values);
    const [rows,fields]=(await conn.query(`insert into ${table} (${keys.join(",")}) values ${values.map(e=>`(${e[0]},${'"'+e[1]+e[2]+'"'})`).join(",")} ;`));
    await conn.end();
    return rows.insertId;
}

// write("products",['productID',"productName","productPrice"],[0,"Sugar",2000.222]).then(()=>{

//     read("products")
// })



//upload file
/**
 * 
 * @param {Object} files 
 * @param {String} folder 
 * @param {String} fileName
 */
function uploadFile(files,folder,fileName) {

    if (!files || Object.keys(files).length === 0) {
        return res.status(400).send('No files were uploaded.');
      }
    


      

      
//AKIA3FLDYBZIABM7ZXPS
//Y4s7pd41NOubY4aOHIkNOsE/PW61Git5T8v+p+It

      // Configure AWS
      const s3 = new aws.S3({
        accessKeyId: 'AKIA3FLDYBZIABM7ZXPS',
        secretAccessKey: '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',
        region: 'me-central-1',
      });

      const listParams = {
        Bucket:"echo-dentists",
        Prefix:folder+"/"+fileName
    };
      
    console.log('HERE');

      s3.listObjectsV2(listParams, function(err, data) {
        console.log('HERE');
        if (err) {
          console.log("something bad happened");
          console.log(err);
          console.log('HERE');

          console.error('Error listing objects:', err);
        } else {
          console.log('HERE');

          // Delete each object in the folder
            const deleteParams = {
                Bucket: "echo-dentists",
                Delete: { Objects: [] }
            };
    
            data.Contents.forEach((obj) => {
                deleteParams.Delete.Objects.push({ Key: obj.Key });
            });
    
            s3.deleteObjects(deleteParams, function(err, deleteData) {
                if (err) {
                  console.log('something went south');
                    console.error('Error deleting objects:', err);

                    if (folder=="products" && files.files.length){


                        for (let i = 0; i < files.files.length; i++) {
                
                            const file = files.files[i];
                            // console.log("reading filees");
                            // console.log(file);
                            
                        
                            const params = {
                              Bucket: 'echo-dentists',
                              Key: folder+"/"+fileName.toString()+"/"+i.toString() ,
                              Body: file.data,
                              ACL: 'public-read', // Set the ACL permissions as needed
                            };
                          console.log( folder+"/"+fileName.toString()+"/"+i.toString() );
                            // Upload the file to S3
                            
                            s3.upload(params, (err, data) => {
                              if (err) {
                                console.log(err);
                                throw err;
                              }else{
                
                                console.log("done done");
                                console.log(data);
                              }
                          
                            });    
                            
                        }
                        
                    }
                    
                    else if (folder=="cvs"){

                      const file = files[Object.keys(files)[0]];
                      
                      const params = {
                        Bucket: 'echo-dentists',
                        Key: "cvs/"+fileName.toString() ,
                        Body: file.data,
                        ACL: 'public-read', // Set the ACL permissions as needed
                      };
                    
                      // Upload the file to S3
                      console.log(params);
                      
                      s3.upload(params, (err, data) => {
                        if (err) {
                          console.log(err);
                          throw err;
                        }else{
                          console.log("done uploading");
                        }
                    
                      });                
                    }
                    else{

                        console.log("going here");
                        const file = files[Object.keys(files)[0]];
                        // console.log("reading filees");
                        // console.log(file);
                        
                    
                        const params = {
                          Bucket: 'echo-dentists',
                          Key: folder+"/"+fileName.toString()+"/0" ,
                          Body: file.data,
                          ACL: 'public-read', // Set the ACL permissions as needed
                        };
                      
                        // Upload the file to S3
                        console.log(params);
                        
                        s3.upload(params, (err, data) => {
                          if (err) {
                            console.log(err);
                            throw err;
                          }else{
                            console.log("done uploading");
                          }
                      
                        });       
                    }
                }else{
                    console.log("deleted all ");
                    if (folder=="products" && files.files.length){


                        for (let i = 0; i < files.files.length; i++) {
                
                            const file = files.files[i];
                            // console.log("reading filees");
                            // console.log(file);
                            
                        
                            const params = {
                              Bucket: 'echo-dentists',
                              Key: folder+"/"+fileName.toString()+"/"+i.toString() ,
                              Body: file.data,
                              ACL: 'public-read', // Set the ACL permissions as needed
                            };
                          console.log( folder+"/"+fileName.toString()+"/"+i.toString() );
                            // Upload the file to S3
                            
                            s3.upload(params, (err, data) => {
                              if (err) {
                                console.log(err);
                                throw err;
                              }else{
                
                                console.log("done done");
                                console.log(data);
                              }
                          
                            });    
                            
                        }
                        
                    }else{
                        console.log("going here");
                        const file = files[Object.keys(files)[0]];
                        // console.log("reading filees");
                        // console.log(file);
                        
                    
                        const params = {
                          Bucket: 'echo-dentists',
                          Key: folder+"/"+fileName.toString()+"/0" ,
                          Body: file.data,
                          ACL: 'public-read', // Set the ACL permissions as needed
                        };
                      
                        // Upload the file to S3
                        console.log(params);
                        
                        s3.upload(params, (err, data) => {
                          if (err) {
                            console.log(err);
                            throw err;
                          }else{
                            console.log("done uploading");
                          }
                      
                        });       
                    }
                }
            });
        }
    });


    console.log("deleted all of the pics");

    
 
      

}



function readFile(fileName,folder,res) {
    
    const s3 = new aws.S3({
        accessKeyId: 'AKIA3FLDYBZIABM7ZXPS',
        secretAccessKey: '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',
        region: 'me-central-1',
      });


    const params = {
      Bucket: 'echo-dentists',
      Key: folder+"/"+fileName,
    };


    s3.getObject(params,(err,data)=>{


        if(err){
            console.log(err);
            res.sendStatus(403);
        }else{
            console.log(data);
            res.setHeader('Content-Type', data.ContentType || 'application/octet-stream');

            // Send the file as a response
            res.send(data.Body);
        }
    })
  
}

// function deleteFiles(fileName,folder,res) {
    
//     const s3 = new aws.S3({
//         accessKeyId: 'AKIA3FLDYBZIABM7ZXPS',
//         secretAccessKey: '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',
//         region: 'me-central-1',
//       });


//     const params = {
//       Bucket: 'echo-dentists',
//       Key: folder+"/"+fileName,
//     };


//     s3.getObject(params,(err,data)=>{


//         if(err){
//             console.log(err);
//             res.sendStatus(403);
//         }else{
//             console.log(data);
//             res.setHeader('Content-Type', data.ContentType || 'application/octet-stream');

//             // Send the file as a response
//             res.send(data.Body);
//         }
//     })
  
// }
module.exports = {

    'write':write,
    "writeMany":writeMany,
    'read':read,
    'readCon':readConditionally,
    'upload':uploadFile,
    'readFile':readFile,
    'updateCon':updateConditionally,
    "deleteCon":deleteConditionally,
    "deleteConOR":deleteConditionallyOR,
    "updateJSON":updateConditionallyJSON,
    "readOrdered":readOrder
}