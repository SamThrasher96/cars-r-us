import { setInteriorId } from "./transientState.js"

const handleInteriorChoice = (event) => {
    if (event.target.id === "interior-color-select") {
        setInteriorId(parseInt(event.target.value));
    }
};

export const interiorOptions = async () => {
    const response = await fetch("http://localhost:8088/interior")
    const interiors = await response.json()
    document.addEventListener("change", handleInteriorChoice)

    let interiorColorOptionsHTMLArray = interiors.map((interior) => `
    <option value="${interior.id}">${interior.name}</option>
  `);

  const interiorColorOptionsHTML = `
        <select id="interior-color-select">
        <option value="0">Select an interior design</option>
        ${interiorColorOptionsHTMLArray.join('')}
    </select>
  `;

return interiorColorOptionsHTML
}
/*
import { setMetalId } from "./TransientState.js"

const handleMetalChoice = (event) => {
    // Make sure you change this condition if you named your inputs differently
    if (event.target.name === "metal") {
        setMetalId(parseInt(event.target.value))
    }
}

export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()
    document.addEventListener("change", handleMetalChoice)

    let metalHTML = ""

    for (const metal of metals){
    metalHTML += `<div>
        <input type='radio' name='metal' value='${metal.id}'/> ${metal.metal}
        </div>`
    }
    return metalHTML
}

let paintColorOptionsHTMLArray = paints.map((paint) => `
    <option value="${paint.id}">${paint.color}</option>
  `);
  const paintColorOptionsHTML = `
    <h2>Paint Colors</h2>
    <select id="paint-color-select">
      ${paintColorOptionsHTMLArray.join('')}
    </select>
  `;

*/