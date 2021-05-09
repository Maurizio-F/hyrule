import "./style.css";
import { getCharacters } from "./utils/api";
import { createElement, removeAllChildren } from "./utils/elements";
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
      id: "dropdown-menu",
      name: "select",
      children: [
        createElement("option", {
          value: "",
          innerText: "Wähle eine Kategorie",
        }),
        // createElement("option", {
        //   value: "creatures",
        //   innerText: "Creatures",
        // }),
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
        removeAllChildren(characterSection);
        const category = document.querySelector("#dropdown-menu").value;
        getCharacters(category).then((items) => {
          const itemElements = items.map(createCharacterElement);
          characterSection.append(...itemElements);
        });
      },
    }),
  ],
});

const characterSection = createElement("section", {
  className: "result",
  children: [
    createElement("h1", {
      innerText: "Die Zelda-Database zum Spiel Breath of the wild!",
    }),
    createElement("img", {
      className: "triforce",
      src: "./assets/triforce.png",
    }),
  ],
});

const footer = createElement("footer", {
  className: "footer",
  innerText: "Can Hyrule's destiny really depend on such a lazy boy?",
});

document.querySelector("#app").append(header, characterSection, footer);
