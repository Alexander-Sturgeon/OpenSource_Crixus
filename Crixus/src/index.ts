import express from "express";

const app = express();
const PORT = 3000;

//GET is the HTTP method
app.get("/",(req,res) =>{
    res.send("Hello from Typescript Backend");
});
app.get("/gur",(req,res) =>{
    res.send("Hello from Typescript Backend by gur");
});

app.listen(PORT,() =>{
    console.log(`Server runing on port ${PORT}`);
});