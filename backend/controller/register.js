const poolConnection = require("../dbConn/dbConn");
const pool = poolConnection;


//Register fuction 
const createUser = (req, res) => {
    
    const {surname,email,name,password,confirm} = req.body; 

   
     console.log(email)
     console.log(surname)
     console.log(name)
    
    
  
    if(password == confirm){
  
     //checking if user already has an account
    pool.query('select * from ofloralusers where email = $1' ,[email],(error, results)=> {
      
      if (results.rowCount > 0) {
  
        res.send('user has already been registered')
      
      }else{
  
        pool.query('INSERT INTO ofloralusers (email,phone number,password, confirm password ) VALUES ($1,$2,$3,$4) RETURNING email',[surname,email,name,password],(error, results) => 
        {
    
            if (error) 
              {
                res.send(`sytem error `);
              }
            else{
            
                res.send('successfully registered')
              
            }  
           
                
        });
      }
      });
  
    }else{
  
      res.send('password dont match')
    }
    
  };

  module.exports = {
 
    createUser
   
    
  }    
  
