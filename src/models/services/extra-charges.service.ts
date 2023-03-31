import { DeliveryStrategy } from "../strategies/delivery.strategy";
import { PaymentStrategy } from "../strategies/payment.strategy";
import { ExtraCharge } from "../../models/extra-charge";

export class ExtraChargeService {
  paymentStrategy: PaymentStrategy;
  deliveryStrategy: DeliveryStrategy;
  constructor() {
    this.paymentStrategy = new PaymentStrategy();
    this.deliveryStrategy = new DeliveryStrategy();
  }
  getExtraCharges({
    orderPrice,
    balance,
  }: {
    orderPrice: number;
    balance?: number;
  }): ExtraCharge[] {
    const charges: ExtraCharge[] = [];
    const deliveryExtraCharge = this.deliveryStrategy.execute(orderPrice);
    if (deliveryExtraCharge) {
      charges.push(deliveryExtraCharge);
    }
    if (typeof balance !== "undefined") {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const paymentExtraCharge = this.paymentStrategy.execute({
        balance: balance,
        orderPrice: orderPrice,
      });
      if (paymentExtraCharge) {
        charges.push(paymentExtraCharge);
      }
    }
    return charges;
  }
}
