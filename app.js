import express from "express";
import path from "path";

const app = express();

app.use(express.static("public"));

// ================================= PAGES =====================================

// Import my functions to compile my html pages SSR style in my templating engine ...
import {
  frontpagePage,
  compileAllTopicsPage,
  compileSingleTopicPage,
} from "./util/pagesUtil.js";

app.get("/", (req, res) => {
  res.send(frontpagePage);
});

app.get("/topics", (req, res) => {
  const topics = getTopicsData();
  const html = compileAllTopicsPage(topics);
  res.send(html);
});

app.get("/topics/:id", (req, res) => {
  const topic = getTopicData(req.params.id);
  if (!topic) return res.status(404).send("Topic not found");

  const html = compileSingleTopicPage(topic);
  res.send(html);
});

// ================================= APIS ======================================

// Import my data service to work with JSON data ...
import { getTopicsData, getTopicData } from "./data/dataService.js";

app.get("/api/topics", (req, res) => {
  res.send(getTopicsData());
});

app.get("/api/topics/:id", (req, res) => {
  const topicId = Number(req.params.id);
  const topic = getTopicData(topicId);
  if (!topic) return res.status(404).send({ data: "No topic found ..." });
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
