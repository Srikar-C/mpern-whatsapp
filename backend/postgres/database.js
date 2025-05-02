import pg from "pg";
import express from "express";

const app = express();
const port = 3000;

const db = new pg.Client({
     port: 5432,
     host: "localhost",
     user: "postgres",
     password: "tiger",
});

db.connect()
     .then(() => {
          console.log("Database connected successfully");
     })
     .catch((err) => {
          console.log("Database connection failed", err);
     });

app.get("/", (req, res) => {
     const dbQuery = "CREATE DATABASE whatsappWeb";
     db.query(dbQuery, (err, result) => {
          if (err) {
               console.log("Error in creating database", err);
               res.json({
                    message: "Error in creating database",
                    error: err.message,
               });
          } else {
               console.log("Database created successfully");
               res.json({ message: "Database created successfully" });
          }
     });
});

app.listen(port, () => {
     console.log(`Server is running on http://localhost:${port}`);
     console.log(
          'Go to the browser and type "http://localhost:3000" to create a database'
     );
});
