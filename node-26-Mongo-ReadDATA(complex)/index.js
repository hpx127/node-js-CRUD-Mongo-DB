
const dbconnect = require('./mongodb');
/* ahiya function mathi jevi value return thase tevi tene handle
 karva padse te handle mate 2 rit (1.) async await (2.) promise
*/

//....========= 2. "promise"  used kari ne =======......//
// promise ma then muki ne handle kari didhu

// databaseconnect().then((res) =>{
//   //toArray pa6u promise return kare etla  mate than lagyvu 
//   res.find().toArray().then((data) =>{
//       console.warn(data);
//   })
// })


//....======= 1.async method thiii ===...//

const getdata = async () =>{
    
      let data = await dbconnect();
      data = await data.find().toArray();
      console.log(data);
}

getdata();

