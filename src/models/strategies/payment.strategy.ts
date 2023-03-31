import { ExtraChargeType } from "../types/extra-charge.type";
import { ExtraCharge } from "../extra-charge";
import { BaseStrategy } from "./base.startegy";

class PaymentStrategyError extends Error {
  constructor(msg: string) {
    super(msg);
  }
}

class PaymentStrategy extends BaseStrategy<
  { balance: number; orderPrice: number },
  ExtraCharge | undefined
> {
  execute({
    balance,
    orderPrice,
  }: {
    balance: number;
    orderPrice: number;
  }): ExtraCharge | undefined {
    if (balance < orderPrice) {
      return {
        Warning:
          "Sipariş ücreti bakiyenizden fazla ise %2 işlem komisyonu uygulanır.",
        Price: Math.round(orderPrice * 0.02 * 100) / 100,
        Type: ExtraChargeType.usingCreditCharge,
      };
    }
    return undefined;
  }
}

export { PaymentStrategy, PaymentStrategyError };
