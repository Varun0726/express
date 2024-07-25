const express = require("express")
const app = express();
const port = 3000;

app.get("/",(req,res) =>{
    res.send("hi there");
})


app.listen(port,() => {
    console.log(`this app is listeined on the port ${port}`)
})