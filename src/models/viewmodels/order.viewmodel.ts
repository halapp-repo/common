import { AddressVM } from "./address.viewmodel";

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
}
