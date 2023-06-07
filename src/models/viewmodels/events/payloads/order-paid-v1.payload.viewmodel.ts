import { OrderStatusType } from "../../../types/order-status.type";
import { PaymentMethodType } from "../../../types/payment-method.type";

export class OrderPaidV1PayloadVM {
  Status: OrderStatusType;
  PaidBy: string;
  PaymentMethodType: PaymentMethodType;
}
