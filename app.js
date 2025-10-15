import express from "express";
import path from "path";

const app = express();

console.log("hello world");

app.use(express.static("public"));

// ================================= PAGES =====================================

// ================================= APIS ======================================

// ================================= SERVER INFO ===============================

const PORT = Number(process.env.PORT) || 8080;

app.listen(PORT, (error) => {
  if (error) {
    console.log("Server didn't start on port", PORT);
  }

  console.log("Server is running on port", PORT);
});
