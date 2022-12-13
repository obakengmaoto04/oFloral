const poolConnection = require("../dbConn/dbConn");
const pool = poolConnection;


//Register fuction 
const createUser = (req, res) => {
    
    const {email,names,password,confirm} = req.body; 

   
     console.log(email)
     console.log(names)
    
    
  
    if(password == confirm){
  
     //checking if user already has an account
    pool.query('select * from ofloralusers where email = $1' ,[email],(error, results)=> {
      
      if (results.rowCount > 0) {
  
        res.send('user has already been registered')
      
      }else{
  
        pool.query('INSERT INTO ofloralusers (email,names,password,confirm) VALUES ($1,$2,$3,$4) RETURNING email',[email,names,password,confirm],(error, results) => 
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
  
