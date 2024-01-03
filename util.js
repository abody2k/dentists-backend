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

    console.log((await conn.query(`select ${(fields != null ? fields.join(","): "*")} from ${table};`))[0]);
    await conn.end();
}

/**
 * 
 * @param {String} table 
 * @param {Array<String>} keys 
 * @param {Array<String>} values 
 */
async function write(table,keys,values) {
    const conn =  await sql.createConnection({
        host:"localhost",
        user:"root",
        database:"dentists",
        password:"0001"
    })
    const value = values.map(v=>(typeof(v)=="string" ? `"${v}"` : v));
    (await conn.query(`insert into ${table} (${keys.join(",")}) values(${value.join(",")}) ;`));
    await conn.end();
}

// write("products",['productID',"productName","productPrice"],[0,"Sugar",2000.222]).then(()=>{

//     read("products")
// })
