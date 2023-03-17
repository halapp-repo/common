import { CityType } from "../types/city.type";
import { PaymentMethodType } from "../types/payment-method.type";
import { AddressVM } from "./address.viewmodel";
import { OrderEventVM } from "./events/order.event.viewmodel";
import { ExtraCharge } from "../extra-charge";

export class OrderItemVM {
  ProductId: string;
  Price: number;
  Count: number;
  Unit: string;
}

export class OrderVM {
  Id: string;
  OrganizationId: string;
  Status: string;
  DeliveryAddress: AddressVM;
  CreatedBy: string;
  CreatedDate: string;
  Items: OrderItemVM[];
  Note?: string;
  DeliveryTime: string;
  Events?: OrderEventVM[];
  City: CityType;
  PaymentMethodType: PaymentMethodType;
  ExtraCharges?: ExtraCharge[];
  TotalPrice: number;
}
