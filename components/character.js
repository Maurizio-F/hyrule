import "./character.css";
import { createElement } from "../utils/elements";

export function createCharacterElement({ image, name, category, description }) {
  return createElement("section", {
    className: "card",
    children: [
      createElement("image", { src: image }),
      createElement("h2", { name }),
      createElement("p", { category }),
      createElement("p", { description }),
    ],
  });
}
