import { useContext } from "react";

import OrderContext from "../components/OrderContext";

export default function useOrder({ orderedItems, input }) {
  const [order, setOrder] = useContext(OrderContext);

  function addToOrder(orderedItem) {
    setOrder([...order, orderedItem]);
  }

  function removeFromOrder(index) {
    setOrder([...order.slice(0, index), ...order.slice(index + 1)]);
  }

  return {
    order,
    addToOrder,
    removeFromOrder,
  };
}
