import { OrderEventType } from "../../types/order-event.type";

export class OrderEventVM {
  TS: string;
  EventType: OrderEventType;
  Payload: string;
}
