const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/:username",(req,res) =>{
    const username = req.params.username;
    const password = req.body.password;
    if (username != "Varun" || password != "1234"){
        res.status(403).json({
            msg:"Sorry you enter either wrong password or username"
        })
    }
    res.send({
        msg:"Welcome to the Application!"
    })
})






app.listen(port,()=>{
    console.log(`Welcome to the ${port}`)
})
