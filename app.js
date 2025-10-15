import express from "express";
import path from "path";
import fs from "fs";

const app = express();

app.use(express.static("public"));

// ================================= PAGES =====================================

import { frontpagePage } from "./util/pagesUtil.js";
import { error } from "console";
import { type } from "os";

app.get("/", (req, res) => {
  res.send(frontpagePage);
});

// ================================= APIS ======================================

const data = JSON.parse(fs.readFileSync("./data/topics.json", "utf-8"));

app.get("/api/topics", (req, res) => {
  res.send(data);
});

app.get("/api/topics/:id", (req, res) => {
  const topicId = Number(req.params.id);
  const topic = data.find((topic) => topic.id === topicId);

  res.send(topic);
});

// ================================= SERVER INFO ===============================

const PORT = Number(process.env.PORT) || 8080;

app.listen(PORT, (error) => {
  if (error) {
    console.log("Server didn't start on port", PORT);
  }
  console.log("Server is running on port", PORT);
});
