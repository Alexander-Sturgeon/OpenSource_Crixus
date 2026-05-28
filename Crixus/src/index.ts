import express from "express";

const app = express();
const PORT = 3000;

//GET is the HTTP method
app.get("/",(req,res) =>{
    res.send("Crixus Fight Organizer.\nGroup Members:\t\nAlex Sturgeon\t\nGurkirat Singh\t\nKenneth Barclay");
});

app.listen(PORT,() =>{
    console.log(`Server runing on port ${PORT}`);
});