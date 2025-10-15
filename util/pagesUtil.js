import { readPage, compilePage } from "./templatingEngine.js";

const frontpage = readPage("./public/pages/frontpage/index.html");

export const frontpagePage = compilePage(frontpage, {
  titleTag: "Remember node.js | Welcome",
});
