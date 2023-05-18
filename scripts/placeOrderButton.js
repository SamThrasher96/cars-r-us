import { placeOrder } from "./transientState.js"


const handleOrderSubmissionsClick = (clickEvent) => {
    if (clickEvent.target.id === "placeOrder") {
        placeOrder()
    }
}

export const saveOrder = () => {
    document.addEventListener("click", handleOrderSubmissionsClick)

    return "<div><button id='placeOrder'>Place Order</button></div>"
}