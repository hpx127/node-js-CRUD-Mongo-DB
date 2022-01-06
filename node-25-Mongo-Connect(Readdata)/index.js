
const { MongoClient } = require('mongodb');
//uper ni syntax ne aa rite pan write kari sakay...
//const MongoClient = require('mongodb').MongoClient;

//....step-1 ===> create url......


/*hamesha yad rakhvanu ke apde ahiya temporary data par kam karta 6e
etlee aa URL ni link je 6e tema mongodb na localhost :27017 mate j used thase
aa bydefualt mongo db ma banavelo 6ee ok..
*/

const url = 'mongodb://localhost:port number';

//....step-2 ===> conect url with client

const client = new MongoClient(url);


//....step-3 ===> getdata tya thi data lavano 6e

    async function getData()
    {
        let result = await client.connect() // connect name nu function j hoi
        
        /*mongo db sathe connect to kari didhu pan ene batavu to padase
         ne ke e database ni under kya collection sathe mathi data
          fatch karvano 6e
        */

          let db = result.db('schooldatabase'); //database name.
          let collection = db.collection('studendata2'); //collection name.
          let response = await collection.find().toArray();
          console.log(response);
    }

      getData();

