import express from "express";
import path from "path";
import fs from "fs";

const app = express();

console.log("hello world");

app.use(express.static("public"));

// ================================= PAGES =====================================

import { frontpagePage } from "./util/pagesUtil.js";

app.get("/", (req, res) => {
  res.send(frontpagePage);
});

// ================================= APIS ======================================

app.get("/api/topics", (req, res) => {
  const data = fs.readFile("./data/topics.json", "utf-8", (error, data) => {
    if (error) {
      console.error(
        "Something went wrong trying to read the data. Error:",
        error
      );
      return res
        .status(500)
        .send({ data: "Could not read data from file ..." });
    }
    res.send(data);
  });
});

// ================================= SERVER INFO ===============================

const PORT = Number(process.env.PORT) || 8080;

app.listen(PORT, (error) => {
  if (error) {
    console.log("Server didn't start on port", PORT);
  }

  console.log("Server is running on port", PORT);
});
