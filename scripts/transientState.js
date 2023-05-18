const transientState = {
    paintId: 0,
    interiorId: 0,
    technologyId: 0,
    wheelId:0
}

export const setPaintId = (chosenPaint) => {
    transientState.paintId = parseInt(chosenPaint)
    console.log(transientState)
}

export const setInteriorId = (chosenInterior) => {
    transientState.interiorId = parseInt(chosenInterior)
    console.log(transientState)
}

export const setTechnologyId = (chosenTechnology) => {
    transientState.technologyId = parseInt(chosenTechnology)
    console.log(transientState)
}

export const setWheelsId = (chosenWheel) => {
    transientState.wheelId = parseInt(chosenWheel)
    console.log(transientState)
}

export const placeOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/orders", postOptions)

    const customEvent = new CustomEvent("Order submitted!")
    document.dispatchEvent(customEvent)
}
