import "./character.css";
import { createElement } from "../utils/elements";

export function createCharacterElement({ id, image, name, description }) {
  return createElement("section", {
    className: "card block",
    children: [
      createElement("img", { src: image }),
      createElement("h2", { innerText: name }),
      createElement("p", { innerText: description }),
      createElement("p", { id }),
    ],
  });
}
