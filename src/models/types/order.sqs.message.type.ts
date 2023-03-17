enum OrderSQSMessageType {
  OrderCreated = "OrderCreated",
  OrderCanceled = "OrderCanceled",
  OrderItemsUpdated = "OrderItemsUpdated",
  OrderDelivered = "OrderDelivered",
}

export { OrderSQSMessageType };
