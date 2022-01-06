
const dbconnect = require('./mongodb');



//....======= UPDATE DATA FUNCTION ===========...//

const updatedata = async () =>{
    
      let data = await dbconnect();
      let result = await data.updateOne(
            {name:'hadik patel'},{
                  $set:{name:'hadi patel',email:'hadi@gmail.in'}
            }
            );
      console.log(result);
}

updatedata();



