export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=wheel&_expand=technology&_expand=paint&_expand=interior")
    const orders = await fetchResponse.json()

    let ordersHTML = ""
    
const ordersArray = orders.map(
        (order) => {
            const orderPrice = order.wheel.price + order.technology.price + order.paint.price + order.interior.price
            const finalOrderPrice = orderPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"})
        return `<div>Order #${order.id} Cost: ${finalOrderPrice}</div>`
        }
    )

    ordersHTML += ordersArray.join("")
    return ordersHTML
}

