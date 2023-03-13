import { PaymentMethodType } from "../../../types/payment-method.type";

export class OrganizationDepositV1PayloadVM {
  OrderId: string;
  PaymentMethodType: PaymentMethodType;
  DepositAmount: number;
  CurrentBalance: number;
}
