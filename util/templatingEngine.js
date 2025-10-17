// import fs from "fs";

// const head = readPage("public/components/head/head.html");
// const header = readPage("public/components/header/header.html");
// const footer = readPage("public/components/footer/footer.html");

// export function compilePage(pageContent, option = {}) {
//   return (
//     head
//       .replace("{{TITLE}}", option.titleTag || "Remember This App")
//       .replace("{{CSS_LINKS}}", option.cssLinks || "") +
//     header +
//     pageContent
//       .replace(
//         "{{TOPICS_LIST}}",
//         option.topicsList || "Nothing to learn to here ..."
//       )
//       .replace("{{TOPIC_NAME}}", option.topic || "No topic in dataset ...")
//       .replace(
//         "{{TOPIC_DESCRIPTION}}",
//         option.description || "No description in dataset ..."
//       )
//       .replace("{{TOPIC_TAGS}}", option.tags || "No tags in dataset ...") +
//     footer
//   );
// }

// export function readPage(path) {
//   return fs.readFileSync(path).toString();
// }

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function readPage(relativePath) {
  const absolutePath = path.join(__dirname, "..", relativePath);
  return fs.readFileSync(absolutePath).toString();
}

const head = readPage("public/components/head/head.html");
const header = readPage("public/components/header/header.html");
const footer = readPage("public/components/footer/footer.html");

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

export { readPage };