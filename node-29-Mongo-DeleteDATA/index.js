
const dbconnect = require('./mongodb');



//....======= DELETE FUNCTION ===...//

const deletedata = async () =>{
    
      let data = await dbconnect();
      let result  = await data.deleteOne(
            {name:'hadi patel'}
      );

      if(result.acknowledged)
      {
            console.log('record deleted');

      }
}

deletedata();



