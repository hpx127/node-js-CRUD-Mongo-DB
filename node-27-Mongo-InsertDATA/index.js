
// ===============>  INSERT FUNCTION <====================== //


const dbconnect = require('./mongodb');


const insertdata = async () =>{
    
    const db = await dbconnect();
    let result = await db.insert(
          [
          { name:'hardik patel',email:'hardy@gmail.com',marks:45,active:true},
          { name:'bharvi patel',email:'batu@gmail.com',marks:57,active:false},
          { name:'arvi patel',email:'gatu@gmail.com',marks:99,active:true}
          ]
    );
    if(result.acknowledged)
    {
          console.log('data inserted');
    }

    
}

insertdata();

