import "./style.css";
import { createElement } from "./utils/elements";

const header = createElement("header", {
  className: "header",
  children: [
    createElement("h1", {
      className: "header-title",
      innerText: "Hyrule-Database",
    }),
    createElement("input", {
      className: "input",
      placeholder: "Search Hyrule Stuff",
      autofocus: true,
    }),
  ],
});

const characterSection = createElement("section", {
  className: "result",
});

const footer = createElement("footer", {
  className: "footer",
  innerText: "This is the Footer",
});

document.querySelector("#app").append(header, characterSection, footer);
