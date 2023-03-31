import { OrderItemVM, OrderVM } from "../order.viewmodel";

export interface OrderCreatedMessagePayload {
  Order: OrderVM;
}
export interface OrderCanceledMessagePayload {
  Order: OrderVM;
}
export interface OrderItemsUpdatedMessagePayload {
  Order: OrderVM;
  DeletedItems: OrderItemVM[];
}
export interface OrderDeliveredMessagePayload {
  Order: OrderVM;
}
