const express = require("express");
const app = express();
const Port = 4000;

function CalculateSum(n){
    let variable = 0;
    for (let i =0;i<=n;i++){
        variable = variable+i;
    }
    return variable;
}

app.get("/",(req,res) => {
    const n = req.query.n;
    const ans = CalculateSum(n);
    res.send(ans.toString());
})

app.listen(Port);