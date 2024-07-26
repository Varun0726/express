const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

function UserCheck(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;
    if (username != "Varun" || password != "1234"){
        res.status(403).json({
            msg:"Sorry you enter either wrong password or username"
        })
    }else{
        next()
    }
}



app.get("/",UserCheck,(req,res) =>{
   //
})


app.post("/Add",UserCheck,(req,res) =>{
    //
})

app.put("/update",UserCheck,(req,res) => {
    //
})






app.listen(port,()=>{
    console.log(`Welcome to the ${port}`)
})
