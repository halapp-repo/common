import { ExtraChargeType } from "../types/extra-charge.type";
import { ExtraCharge } from "../extra-charge";
import { BaseStrategy } from "./base.startegy";

class DeliveryStrategy extends BaseStrategy<number, ExtraCharge | undefined> {
  execute(orderAmount: number): ExtraCharge | undefined {
    if (orderAmount < 100) {
      return {
        Warning:
          "₺100,00 altındaki siparişlere, ₺100,00 nakliye ücreti uygulanır.",
        Price: 100,
        Type: ExtraChargeType.lowPriceDeliveryCharge,
      };
    }
    return undefined;
  }
}

export { DeliveryStrategy };
