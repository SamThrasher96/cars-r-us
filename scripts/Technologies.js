import { setTechnologyId } from "./transientState.js";

const handleTechnologyChoice = (event) => {
  if (event.target.id === "technology-option-select") {
    setTechnologyId(parseInt(event.target.value));
  }
};

export const technologyOptions = async () => {
  const response = await fetch("http://localhost:8088/technologies");
  const technologyChoices = await response.json();
  document.addEventListener("change", handleTechnologyChoice);

  let technologyOptionsHTMLArray = technologyChoices.map(
    (technologyChoice) => `
    <option value="${technologyChoice.id}">${technologyChoice.name}</option>
  `
  );

  const technologyOptionsHTML = `
        <select class="dropDown" id="technology-option-select">
        <option value="0">Select a package</option>
        ${technologyOptionsHTMLArray.join("")}
    </select>
  `;

  return technologyOptionsHTML;
};
