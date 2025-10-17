import fs from "fs";

const head = readPage("./public/components/head/head.html");
const header = readPage("./public/components/header/header.html");
const footer = readPage("./public/components/footer/footer.html");

console.log(head + header + footer);

export function compilePage(pageContent, option = {}) {
  return (
    head
      .replace("{{TITLE}}", option.titleTag || "Remember This App")
      .replace("{{CSS_LINKS}}", option.cssLinks || "") +
    header +
    pageContent
      .replace(
        "{{TOPICS_LIST}}",
        option.topicsList || "Nothing to learn to here ..."
      )
      .replace("{{TOPIC_NAME}}", option.topic || "No topic in dataset ...")
      .replace(
        "{{TOPIC_DESCRIPTION}}",
        option.description || "No description in dataset ..."
      )
      .replace("{{TOPIC_TAGS}}", option.tags || "No tags in dataset ...") +
    footer
  );
}

export function readPage(path) {
  return fs.readFileSync(path).toString();
}
