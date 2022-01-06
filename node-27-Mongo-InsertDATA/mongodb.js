const { MongoClient} = require('mongodb');
const url = "mongodb://localhost:port number";

const client =  new MongoClient(url);

//...only for database connecttion function
async function databaseconnect()
{
    let result  = await client.connect();
    let db = result.db('schooldatabase');
    return db.collection('studendata2');
   
}

module.exports = databaseconnect;
