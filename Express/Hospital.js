const express = require("express")
const app = express()
const port = 3000;
let healthyKidney = 2;
let unhealthyKidney = 0;

app.get("/",(req,res) =>{
    res.send(`healthy kidney = ${healthyKidney},unhealthy kidney = ${unhealthyKidney}`)
})

app.post("/",(req,res) =>{
    unhealthyKidney += 1;
    healthyKidney -= 1;
    res.send(`healthy kidney = ${healthyKidney},unhealthy kidney = ${unhealthyKidney}`)
})

app.put("/",(req,res) =>{
    unhealthyKidney-=1;
    healthyKidney+=1;
    res.send(`healthy kidney = ${healthyKidney},unhealthy kidney = ${unhealthyKidney}`)
})

app.delete("/",(req,res) =>{
    unhealthyKidney = 0;
    res.send(`healthy kidney = ${healthyKidney},unhealthy kidney = ${unhealthyKidney}`)
})

app.listen(port,() => {
    console.log(`Welcome to the hospital at ${port}`);
})