import { setWheelsId } from "./transientState.js";

const handleWheelChoice = (event) => {
    if (event.target.id === "wheel-option-select") {
    setWheelsId(parseInt(event.target.value));
}
};
export const wheelOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels");
    const wheelChoices = await response.json();
    document.addEventListener("change", handleWheelChoice);

    let wheelOptionsHTMLArray = wheelChoices.map(
        (wheelChoice) => `
        <option value="${wheelChoice.id}">${wheelChoice.name}</option>
    `
);

    const wheelOptionsHTML = `
        <select class="dropDown" id="wheel-option-select">
        <option value="0">Select a wheel option</option>
        ${wheelOptionsHTMLArray.join("")}
    </select>
`;

    return wheelOptionsHTML;
};
