import pg from "pg";
import express from "express";

const app = express();
const port = 3000;

const db = new pg.Client({
     port: 5432,
     host: "localhost",
     user: "postgres",
     password: "tiger",
     database: "whatsappWeb",
});

db.connect()
     .then((res) => {
          console.log("Database connected successfully");
     })
     .catch((err) => {
          console.log("Database connection failed", err);
     });

app.listen(port, (req, res) => {
     console.log(`Server is running on http://localhost:${port}`);
     console.log(
          'Go to the browser and type "http://localhost:3000" to create a database'
     );
});
