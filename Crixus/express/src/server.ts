import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

//Import route files
import userSettings from "./routes/user_settings";
import armory from  "./routes/armoury";
import home from "./routes/home";
//cors allows requests from other origins
//express.json parses json request bodies so req.body works. 
app.use(cors());
app.use(express.json());


//GET is the HTTP method
app.get("/",(req,res) =>{
    res.send("Crixus Fight Organizer.\nGroup Members:\t\nAlex Sturgeon\t\nGurkirat Singh\t\nKenneth Barclay");
});
app.get("/gur",(req,res) =>{
    res.send("Hello from Typescript Backend by Gur");
});

app.use("/users", userSettings);

app.use("/armory", armory);

app.use("/home", home);

//starts server
app.listen(PORT,() =>{
    console.log(`Server runing on port ${PORT}`);
});