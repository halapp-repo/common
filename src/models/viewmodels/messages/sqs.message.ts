import { OrderSQSMessageType } from "../../types/order.sqs.message.type";
import {
  OrderCanceledMessagePayload,
  OrderCreatedMessagePayload,
  OrderDeliveredMessagePayload,
  OrderItemsUpdatedMessagePayload,
} from "./order.sqs.message";

export interface SQSMessage<T extends OrderSQSMessageType> {
  Type: T;
  Payload:
    | OrderCreatedMessagePayload
    | OrderCanceledMessagePayload
    | OrderItemsUpdatedMessagePayload
    | OrderDeliveredMessagePayload;
}
