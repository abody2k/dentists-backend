let sql = require("mysql2/promise");
const aws = require('aws-sdk');

/**
 * 
 * @param {String} table 
 * @param {Array<String>} fields 
 */
async function read(table,fields) {
    const conn =  await sql.createConnection({
        host:"localhost",
        user:"root",
        database:"dentists",
        password:"0001"
    })

    const data= (await conn.query(`select ${(fields != null ? fields.join(","): "*")} from ${table};`))[0];
    await conn.end();
    return data;
}

/**
 * 
 * @param {String} table 
 * @param {Array<String>} fields 
 * @param {Array<String>} conditions
 */
async function readConditionally(table,fields,conditions,limit=null) {
    const conn =  await sql.createConnection({
        host:"localhost",
        user:"root",
        database:"dentists",
        password:"0001"
    })
    const con=conditions.map(e=>((typeof(e[2])=="string"&& !e.toString().includes("(")) ? [e[0],e[1],`"${e[2]}"`].join(' ') : e.join(' '))).join(" and ");
    const data= (await conn.query(`select ${(fields != null ? fields.join(","): "*")} from ${table} where ${con}  ${limit ? " LIMIT "+ limit : ""};`))[0];
    await conn.end();
    return data;
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
        host:"localhost",
        user:"root",
        database:"dentists",
        password:"0001"
    })
    const con=conditions.map(e=>((typeof(e[2])=="string"&& !e.toString().includes("(")) ? [e[0],e[1],`"${e[2]}"`].join(' ') : e.join(' '))).join(" and ");
    let setter=``;
    fields.forEach((element,i) => {
        if (i == (fields.length-1)){
            setter += ` ${element} = ${(typeof(values[i])== 'string' ? `"${values[i]}"`:values[i])}` ;
        }else{
            setter += ` ${element} = ${(typeof(values[i])== 'string' ? `"${values[i]}"`:values[i])} , `;
        }
        
    });
     (await conn.query(`update ${table} set ${setter} where ${con};`))[0];
    await conn.end();
    
}


/**
 * 
 * @param {String} table 
 * @param {Array<String>} keys 
 * @param {Array<Array<String>>} values 
 */
async function write(table,keys,values) {
    const conn =  await sql.createConnection({
        host:"localhost",
        user:"root",
        database:"dentists",
        password:"0001"
    })
    const value = values.map(v=>(typeof(v)=="string" ? `"${v.replace(/'/g, "''") .replace(/"/g, '\\"')}"` : (v==undefined ? "null" : v)));
    console.log(value);
    const [rows,fields]=(await conn.query(`insert into ${table} (${keys.join(",")}) values(${value.join(",")}) ;`));
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
    



      


      // Configure AWS
      const s3 = new aws.S3({
        accessKeyId: 'AKIAT4PTBJP62OQ26E3R',
        secretAccessKey: '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',
        region: 'us-east-1',
      });



      
    const file = files[Object.keys(files)[0]];
    // console.log("reading filees");
    // console.log(file);


    const params = {
      Bucket: 'dentists-iq',
      Key: folder+"/"+fileName ,
      Body: file.data,
      ACL: 'public-read', // Set the ACL permissions as needed
    };
  
    // Upload the file to S3
    s3.upload(params, (err, data) => {
      if (err) {
        console.log(err);
        throw err;
      }
  
    });
      

}



function readFile(fileName,folder,res) {
    
    const s3 = new aws.S3({
        accessKeyId: 'AKIAT4PTBJP62OQ26E3R',
        secretAccessKey: '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',
        region: 'us-east-1',
      });


    const params = {
      Bucket: 'dentists-iq',
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
module.exports = {

    'write':write,
    'read':read,
    'readCon':readConditionally,
    'upload':uploadFile,
    'readFile':readFile,
    'updateCon':updateConditionally
}