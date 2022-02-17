const mysql = require('mysql2')

const connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'Andrei',
    password:'12345',
    database:'backendfundamentals'
})

function query(sql,data){
    return new Promise((resolve,reject)=>{
        connection.query(sql,data,function(error,result){
            if(error){
                reject(error.sqlMessage)
            }else{
                resolve(result)
            }
        })
    })
}

async function insert(tableName,data){
    try{
        await query(`INSERT INTO ${tableName}(??) VALUES(?)`,[Object.keys(data),Object.values(data)])
        return {data,success:true}
    }catch(error){
        return {error,success:false}
    }
}

async function del(tableName,data){
    try{
        await query(`DELETE FROM ${tableName} WHERE id=?`,[data])
        return data
    }catch(error){
        return error
    }
}

async function update(tablename, id, data){
    try{
        await query(`UPDATE ${tablename} SET birthday = '${data.birthday}'  id=${id}`)
        return data
    }catch(error){
        return error
    }
}

module.exports = {query,insert,del,update}