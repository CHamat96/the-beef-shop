export default function calculateOrderTotal(order, items) {
  const total = order.reduce((runningTotal, singleOrder) => {
    const item = items.find((singleItem) => singleItem.id === singleOrder.id);
    return runningTotal + item.price / 100;
  }, 0);
  return total;
}
