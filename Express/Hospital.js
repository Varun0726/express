const express = require("express")
const app = express()
const port = 3000;
var User = [{
    name: "John",
    Kidneys:[{number:1,
        health:"healthy"
    },{
        number:2,
        health:"Unhealth"
    }]
}]
function numberKidney(x){
    let kidney = 0;
    if (x.health == "healthy"){
        kidney++
    }
    return kidney;
}

app.get("/",(req,res) =>{
    const numberofKidney = User[0].Kidneys.length;
    const healthKidneys = User[0].Kidneys.filter(numberKidney).length
    res.json({
        numberofKidney,
        healthKidneys
    });
})

app.post("/",(req,res) =>{
    const numberofKidney = User[0].Kidneys.length;
    const newKidney = {
        number : numberofKidney,
        health : "healthy"
    }
    User[0].Kidneys.push(newKidney);
    res.json({
        msg:"Done"
    })
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