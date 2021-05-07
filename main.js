import "./style.css";
import { getCharacters } from "./utils/api";
import { createElement } from "./utils/elements";
import { createCharacterElement } from "./components/character";

const header = createElement("header", {
  className: "header",
  children: [
    createElement("h1", {
      className: "header-title",
      innerText: "Hyrule-Database",
    }),
    createElement("select", {
      className: "dropdown",
      id: "test",
      name: "select",
      children: [
        createElement("option", {
          value: "",
          innerText: "Wähle eine Kategorie",
        }),
        createElement("option", {
          value: "creatures",
          innerText: "Creatures",
        }),
        createElement("option", {
          value: "equipment",
          innerText: "Equipment",
        }),
        createElement("option", {
          value: "materials",
          innerText: "Materials",
        }),
        createElement("option", {
          value: "monsters",
          innerText: "Monsters",
        }),
        createElement("option", {
          value: "treasure",
          innerText: "Treasure",
        }),
      ],
      onchange: () => {
        const value = document.querySelector("#test").value;
        console.log(value);
        getCharacters(value).then((items) => {
          console.log(items);
          const itemElements = items.map(createCharacterElement);
          characterSection.append(...itemElements);
          console.log(itemElements);
        });
      },
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
