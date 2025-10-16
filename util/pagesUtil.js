import { readPage, compilePage } from "./templatingEngine.js";

const frontpageTemplate = readPage("./public/pages/frontpage/index.html");
const topicsTemplate = readPage("./public/pages/topics/index.html");
const singleTopicTemplate = readPage("./public/pages/topics/topic.html");

export const frontpagePage = compilePage(frontpageTemplate, {
  titleTag: "Remember node.js | Welcome",
});

export function compileAllTopicsPage(topics) {
  if (!topics) {
    console.log("Data retrieval gave NULL ...");
    return null;
  }

  const topicsListHTML = topics
    .map((t) => `<li><a href="/topics/${t.id}">${t.topic}</a></li>`)
    .join("");

  return compilePage(topicsTemplate, {
    titleTag: "Remember Node.js | All Topics",
    topicsList: topicsListHTML,
  });
}

export function compileSingleTopicPage(topic) {
  if (!topic) {
    console.log("Data retrieval gave NULL ...");
    return null;
  }

  return compilePage(singleTopicTemplate, {
    titleTag: `Remember This | ${topic.topic}`,
    topic: topic.topic,
    description: topic.description,
    tags: topic.tags.join(", "),
  });
}
