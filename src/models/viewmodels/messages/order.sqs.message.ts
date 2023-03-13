import { OrderItemVM, OrderVM } from "../order.viewmodel";

export interface OrderCreatedPayload {
  Order: OrderVM;
}
export interface OrderCanceledPayload {
  Order: OrderVM;
}
export interface OrderItemDeletedPayload {
  Order: OrderVM;
  DeletedItem: OrderItemVM;
}
