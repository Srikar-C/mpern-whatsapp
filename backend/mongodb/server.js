import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import UserRouters from "./Routers/users.router.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(UserRouters);

mongoose
     .connect("mongodb://localhost:27017/whatsapp")
     .then((response) => {
          console.log("Connected to database");
     })
     .catch((err) => {
          console.log("Error connecting to database", err);
     });

app.listen(port, () => {
     console.log(`Server is running on http://localhost:${port}`);
});
