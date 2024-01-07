let sql = require("mysql2/promise")


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
async function readConditionally(table,fields,conditions) {
    const conn =  await sql.createConnection({
        host:"localhost",
        user:"root",
        database:"dentists",
        password:"0001"
    })
    const con=conditions.map(e=>((typeof(e[2])=="string"&& !e.toString().includes("(")) ? [e[0],e[1],`"${e[2]}"`] : e)).join(" and ");
    const data= (await conn.query(`select ${(fields != null ? fields.join(","): "*")} from ${table} where ${con};`))[0];
    await conn.end();
    return data;
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
    const value = values.map(v=>(typeof(v)=="string" ? `"${v}"` : (v==undefined ? "null" : v)));
    console.log(value);
    (await conn.query(`insert into ${table} (${keys.join(",")}) values(${value.join(",")}) ;`));
    await conn.end();
}

// write("products",['productID',"productName","productPrice"],[0,"Sugar",2000.222]).then(()=>{

//     read("products")
// })


module.exports = {

    'write':write,
    'read':read,
    'readCon':readConditionally
}