type order = {
    orderId: number;
    coustomer: string;
    items: {product: string; price: number; qty: number }[]

}

let orders: order[] = [
    { orderId: 1, coustomer: "Jaga", items:[{ product: "Laptop", price: 800, qty: 1}, { product: "Mouse", price:20, qty: 2}]},
    {orderId: 2, coustomer: "Harsha", items:[{ product:"phone", price: 50, qty :2},{product: "Charger", price: 25, qty:1}]},
    {orderId:3, coustomer: "Saru", items:[{ product: "Headphones", price: 50, qty:2},{product: "Keyboard", price: 45, qty :1}]}
];

let orderTotals = orders.map(order => {
    let total = order.items.reduce((sum,item) => sum+ item.price * item.qty, 0);
    return { orderId: order.orderId, coustomer: order.coustomer, total};
});
let highestOrder = orderTotals.reduce(
    (max, order) => (order.total > order.total ? order : max),
    orderTotals[0]
);
console.log("=== Orders Totals ===");
console.table(orderTotals);

console.log("\nHighest Order:", highestOrder);