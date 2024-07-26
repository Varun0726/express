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

function Unhealth(n){
    let output = false;
    for (let i = 0 ;i< n ; i++){
        if (User[0].Kidneys[i].health === "Unhealthy"){
            return true;
        }
    }
    return output;
}

app.use(express.json());

app.get("/",(req,res) =>{
    const numberofKidney = User[0].Kidneys.length;
    const healthKidneys = User[0].Kidneys.filter(numberKidney).length;
    const UnhealthyKidney = numberofKidney - healthKidneys
    res.json({
        numberofKidney,
        healthKidneys,
        UnhealthyKidney
    });
})

app.post("/",(req,res) =>{
    const numberofKidney = User[0].Kidneys.length;
    const health = req.body.health;
    const newKidney = {
        number : numberofKidney,
        health : health
    }
    User[0].Kidneys.push(newKidney);
    res.json({
        msg:"Done"
    })
})

app.put("/",(req,res) =>{
    const numberofKidney = User[0].Kidneys.length;
    if (Unhealth(numberofKidney)){
        for (let i =0;i<numberofKidney;i++ ){
            User[0].Kidneys[i].health = "healthy"
        }
    }
    res.json({
        msg:"Done"
    })
})

app.delete("/",(req,res) =>{
    const numberofKidney = User[0].Kidneys.length;
    if (Unhealth(numberofKidney)){
        Kidney = []
        for (let i = 0; i< numberofKidney ; i++){
            if (User[0].Kidneys[i].health == "healthy"){
            
                Kidney.push(User[0].Kidneys[i])
        }
    }
    User[0].Kidneys = Kidney;
}
res.json({
    msg:"Done"
    })
})

app.listen(port,() => {
    console.log(`Welcome to the hospital at ${port}`);
})