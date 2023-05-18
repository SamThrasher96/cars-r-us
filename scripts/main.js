import { interiorOptions } from "./Interiors.js"
import { paintOptions } from "./Paints.js"
import { technologyOptions } from "./Technologies.js"
import { wheelOptions } from "./Wheels.js"
import { saveOrder } from "./placeOrderButton.js"


const container = document.querySelector("#container")

const render = async () => {
    const interiorOptionsHTML = await interiorOptions()
    const paintOptionsHTML = await paintOptions()
    const technologyOptionsHTML = await technologyOptions()
    const wheelOptionsHTML = await wheelOptions()
    const orderButtonHTML = await saveOrder()

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

            <article class="order">
                ${orderButtonHTML}
            </article>
    `
    container.innerHTML = composedHTML
}

render()
/*
const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const styleOptionsHTML = await StyleOptions()
    const sizeOptionsHTML = await SizeOptions()
    const saveOrderButtonHTML = await saveOrder()
    const jewelryOrderHTML = await Orders()

    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizeOptionsHTML}
            </section>
            <section class="choices__styles options">
            <h2>Styles</h2>
                ${styleOptionsHTML}
            </section>
        </article>

        <article class="order">
                ${saveOrderButtonHTML}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
                ${jewelryOrderHTML}
        </article>
    `

    container.innerHTML = composedHTML
}

document.addEventListener("orderSubmitted", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})

render()
*/