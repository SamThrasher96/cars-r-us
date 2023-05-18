import { setPaintId } from "./transientState.js";


const handlePaintChoice = (event) => {
    if (event.target.id === "paint-color-select") {
        setPaintId(parseInt(event.target.value));
    }
};

export const paintOptions = async () => {
    const response = await fetch("http://localhost:8088/paintColor")
    const paintColors = await response.json()
    document.addEventListener("change", handlePaintChoice)
    
    let paintColorOptionsHTMLArray = paintColors.map((paintColor) => `
    <option value="${paintColor.id}">${paintColor.name}</option>
  `);

  const paintColorOptionsHTML = `
        <select id="paint-color-select">
        <option value="0">Select a paint color</option>
        ${paintColorOptionsHTMLArray.join('')}
    </select>
  `;

return paintColorOptionsHTML
}