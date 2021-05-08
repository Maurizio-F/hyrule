import "./character.css";
import { createElement } from "../utils/elements";

export function createCharacterElement({
  id,
  image,
  name,
  category,
  description,
}) {
  return createElement("section", {
    className: "card",
    children: [
      createElement("img", { src: image }),
      createElement("h2", { innerText: name }),
      createElement("p", { innerText: category }),
      createElement("p", { innerText: description }),
      createElement("p", { id }),
    ],
  });
}
