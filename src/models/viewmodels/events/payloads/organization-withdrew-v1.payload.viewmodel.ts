import { PaymentMethodType } from "../../../types/payment-method.type";

export class OrganizationWithdrewV1PayloadVM {
  OrderId: string;
  PaymentMethodType: PaymentMethodType;
  WithdrawAmount: number;
  CurrentBalance: number;
}
