const express = require("express");
const app = express();
const port  = 3000;
const zod = require("zod");
const schema = zod.array(zod.number());

app.use(express.json());


app.post("/addKidneys",(req,res) => {
    const kidneys = req.body.kidney;
    const response = schema.safeParse(kidneys);
    const kidenylength = kidneys.length;
    res.json({
        response,
        msg:`total number of kidneys = ${kidenylength}`
    })
})

app.use((err,req,res,next) =>{
    console.log(err);
    res.json({
        msg:"Sorry for the inconvience see u later!"
    })
})
app.listen(port,() => {
    console.log(`Welcome to the server ${port}`);
})