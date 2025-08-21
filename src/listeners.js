// require the eventBus and store from the respective files
const bus = require("./eventBus");
const store = require("./store");

// make order:created event listener to log the order created
// console.log the following message: [EVT] order:created #<id of the order> for <customer name who created the order> (<order item> x<qty of the item ordered>)
bus.on("order:created",(order)=>{
    console.log(`[EVT] order:created #${order.id} for ${order.customer} (${order.item}) x${order.qty}`);
});
bus.emit("order:created", { id: 25, customer: "sara", item: "Laptop", qty: 3 });

// make order:paid event listener to log the order paid
// if the order is not found, emit 'error' event with the message "Order not found"
// this event listener should transition the order to "paid" using store.setStatus function
// if the order is already shipped or canceled, emit 'error' event with the message "Invalid transition to paid"
// console.log the following message: [EVT] order:paid #<id of the order>-
// emit "order:statusChanged" with the id and status=paid

    bus.on("order:paid", (id) => {
        const order = store.findById(id);
        if (!order) {
            bus.emit("error", "Order not found");
            return;
        }

        if (order.status === "shipped" || order.status === "canceled") {
            bus.emit("error", "Invalid transition to paid");
            return;
        }

        const result = store.setStatus(id, "paid");
        if (!result.ok) {
            bus.emit("error", result.error);
            return;
        }
        console.log(`[EVT] order:paid #${id}-`);
        bus.emit("order:statusChanged", { id, status: "paid" });
    });


// make order:packed event listener to log the order packed
// if the order is not found, emit 'error' event with the message "Order not found"
// if the order is not paid, emit 'error' event with the message "Pack requires status=paid"
// this event listener should transition the order to "packed" using store.setStatus function
// console.log the following message: [EVT] order:packed #<id of the order>
// emit "order:statusChanged" with the id and status=packed
// order:packed listener
bus.on("order:packed", (id) => {
    const order = store.findById(id);
    if (!order) {
        bus.emit("error", "Order not found");
        return;
    }

    if (order.status !== "paid") {
        bus.emit("error", "Pack requires status=paid");
        return;
    }

    const result = store.setStatus(id, "packed");
    if (!result.ok) {
        bus.emit("error", result.error);
        return;
    }
});

// make order:shipped event listener to log the order shipped
// if the order is not found, emit 'error' event with the message "Order not found"
// if the order is not packed, emit 'error' event with the message "Ship requires status=packed"
// this event listener should transition the order to "shipped" using store.setStatus function
// console.log the following message: [EVT] order:shipped #<id of the order>
// emit "order:statusChanged" with the id and status=shipped
// order:shipped listener
bus.on("order:shipped", (id) => {
    const order = store.findById(id);
    if (!order) {
        bus.emit("error", "Order not found");
        return;
    }

    if (order.status !== "packed") {
        bus.emit("error", "Ship requires status=packed");
        return;
    }

    const result = store.setStatus(id, "shipped");
    if (!result.ok) {
        bus.emit("error", result.error);
        return;
    }
});

// make order:canceled event listener to log the order canceled
// if the order is not found, emit 'error' event with the message "Order not found"
// if the order is already shipped, emit 'error' event with the message "Cannot cancel shipped order"
// this event listener should transition the order to "canceled" using store.setStatus function
// console.log the following message: [EVT] order:canceled #<id of the order> ❌
// emit "order:statusChanged" with the id and status=canceled
// order:canceled listener
bus.on("order:canceled", (id) => {
    const order = store.findById(id);
    if (!order) {
        bus.emit("error", "Order not found");
        return;
    }

    if (order.status === "shipped") {
        bus.emit("error", "Cannot cancel shipped order");
        return;
    }

    const result = store.setStatus(id, "canceled");
    if (!result.ok) {
        bus.emit("error", result.error);
        return;
    }
});

// make order:statusChanged event listener to log the order status changed
// console.log the following message: [EVT] statusChanged  #<id of the order> → <status of the order>
bus.on("order:statusChanged", ({ id, status }) => {
    console.log(`[EVT] statusChanged #${id} ${status}`);
});

// make error event listener to log the error
// console.log the following message: [ERR] <error message>
bus.on("error", (msg) => {
    console.error(`[ERROR] ${msg}`);
});

// Export nothing; requiring this file attaches listeners

module.exports = {};
