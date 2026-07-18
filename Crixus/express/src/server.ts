import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

//Import route files
import userSettings from "./routes/user_settings";
import armoury from  "./routes/armoury";
import home from "./routes/home";
import fighters from "./routes/view_fighters";
import addFighters from "./routes/add_fighters";
import editFighters from "./routes/edit_fighters";
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

app.use("/armory", armoury);

app.use("/home", home);

app.use("/fighters", fighters);

app.use("/api/newfighters", addFighters);

app.use("/api/editFighters", editFighters)
//starts server
app.listen(PORT,() =>{
    console.log(`Server runing on port ${PORT}`);
});