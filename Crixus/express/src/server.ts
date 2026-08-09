import dotenv from"dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import { requireAuth } from "./middleware/middleware";

const app = express();
const PORT = 3000;

//Import route files
import userSettings from "./routes/user_settings";
import armoury from  "./routes/armoury";
import home from "./routes/home";
import fighters from "./routes/view_fighters";
import addFighters from "./routes/add_fighters";
import editFighters from "./routes/edit_fighters";
import registerUser from "./routes/auth/register_user";
import loginUsers from "./routes/auth/login_user";
import verifyUser from "./routes/auth/verify_user";
import logoutUser from "./routes/auth/logout_user";
//cors allows requests from other origins
//express.json parses json request bodies so req.body works. 

import cookieParser from "cookie-parser";
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());




//GET is the HTTP method
app.get("/",(req,res) =>{
    res.send("Crixus Fight Organizer.\nGroup Members:\t\nAlex Sturgeon\t\nGurkirat Singh\t\nKenneth Barclay");
});
app.get("/gur",(req,res) =>{
    res.send("Hello from Typescript Backend by Gur");
});

// public routes — no auth required
app.use("/api/auth/register", registerUser);
app.use("/api/auth/login", loginUsers);
app.use("/api/auth/logout", logoutUser);
app.use("/home", home);

// everything below this line requires a valid token
app.use(requireAuth);

app.use("/users", userSettings);
app.use("/armory", armoury);
app.use("/fighters", fighters);
app.use("/api/newfighters", addFighters);
app.use("/api/editFighters", editFighters);
app.use("/api/auth/verify", verifyUser);
//starts server
app.listen(PORT,() =>{
    console.log(`Server runing on port ${PORT}`);
});