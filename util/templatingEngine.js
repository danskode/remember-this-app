import fs from "fs";

const header = readPage("./public/components/header/header.html");
const footer = readPage("./public/components/footer/footer.html");

export function compilePage(pageContent, option = {}) {
  return (
    header
      .replace("$TITLE$", option.titleTag || "Remember This App")
      .replace("$CSS_LINKS$", option.cssLinks || "") +
    pageContent +
    footer
  );
}

export function readPage(path) {
  return fs.readFileSync(path).toString();
}
