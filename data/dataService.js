import fs from "fs";
const data = JSON.parse(fs.readFileSync("./data/topics.json", "utf-8"));

export function getTopicsData() {
  return data;
}

export function getTopicData(id) {
  return data.find((t) => t.id === Number(id)) || null;
}
