import { OrderSQSMessageType } from "../../types/order.sqs.message.type";
import {
  OrderCanceledPayload,
  OrderCreatedPayload,
  OrderItemDeletedPayload,
} from "./order.sqs.message";

export interface SQSMessage<T extends OrderSQSMessageType> {
  Type: T;
  Payload: OrderCreatedPayload | OrderCanceledPayload | OrderItemDeletedPayload;
}
