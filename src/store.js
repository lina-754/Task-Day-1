// An order: { id, customer, item, qty, status }  
// status ∈ "new" | "paid" | "packed" | "shipped" | "canceled"
module.exports = {
    createOrder,
    findById,
    list,
    setStatus
};
let nextId = 1;
const orders = []; // keep simple for the exercise

function createOrder(customer, item, qty) {
    // validate inputs (non-empty customer/item, qty > 0)
    // If invalid, return { ok:false, error:"message" }
    if(!customer.trim()){
        return { ok: false, error: "Customer name is required" };
    }
    if(!item.trim()){
        return { ok: false, error: "Item name is required" };
    }
    if(Number(qty) <= 0 || isNaN(qty) ){
        return { ok: false, error: "Quantity must be a positive number" };
    }

    // Create a new order 
    const order = {
        id: nextId++,
        customer: customer.trim(),
        item: item.trim(),
        qty: Number(qty),
        status: "new"
    }

    // Add the order to the orders array
    orders.push(order);
    return { ok:true, order };
}

function findById(id) {
    // classic loop to find the order by id from the orders array
    // Return the order if found, otherwise return null
    for(let i of orders){
        if(i.id === id){
            return i;
        }
    }
    return null;
}

function list() {
    // return a shallow copy of the orders array
    return orders.slice();
}

function setStatus(id, newStatus) {
    // find the order by id from the orders array
    // if the order is not found, return { ok: false, error: "Order not found" }
    // if the order is found, update the status of the order to the newStatus
    // return { ok: true, order }
    for(let i of orders){
        if(id === i.id){
            i.status=newStatus;
            return { ok: true, i };
        }
    }
    return { ok: false, error: "Order not found" };
}
//anthor way
// function setStatus(id, newStatus) {
//     const order = findById(id);
//     if (!order) {
//         return { ok: false, error: "Order not found" };
//     }
//     order.status = newStatus;
//     return { ok: true, order };
// }

// export the functions to be used in the application
