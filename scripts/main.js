import { interiorOptions } from "./Interiors.js"
import { paintOptions } from "./Paints.js"
import { technologyOptions } from "./Technologies.js"
import { wheelOptions } from "./Wheels.js"
import { Orders } from "./displayOrders.js"
import { saveOrder } from "./placeOrderButton.js"


const container = document.querySelector("#container")

const render = async () => {
    const interiorOptionsHTML = await interiorOptions()
    const paintOptionsHTML = await paintOptions()
    const technologyOptionsHTML = await technologyOptions()
    const wheelOptionsHTML = await wheelOptions()
    const orderButtonHTML = await saveOrder()
    const displayOrderHTML = await Orders()

    const composedHTML = `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__interior options">
                <h2>Interior</h2>
                ${interiorOptionsHTML}
            </section>

            <section class="choices__paint options">
                <h2>Paint</h2>
                ${paintOptionsHTML}
            </section>

            <section class="choices__technology options">
                <h2>Technology Packages</h2>
                ${technologyOptionsHTML}
            </section>

            <section class="choices__wheel options">
                <h2>Wheel Sizes</h2>
                ${wheelOptionsHTML}
            </section>
        </article>

            <article class="order">
                ${orderButtonHTML}
            </article>

            <article class="customOrderDisplay">
            <h2>Custom Car Orders</h2>
            ${displayOrderHTML}
            </article>
        </article>
        `
        
    container.innerHTML = composedHTML
}


document.addEventListener("orderSubmitted", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})

render()
