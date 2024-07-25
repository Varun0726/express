const express = require("express");
const app = express();
const Port = 3000;

function CalculateSum(n){
    let variable = n;
    for (let i =0;i<=n;i++){
        variable = variable+i;
    }
    return variable;
}

app.get("/",(res,req) => {
    const n = req.query.n;
    const ans = CalculateSum(n);
    res.setEncoding(ans);
})

app.listen(Port);