import { AddressVM } from "./address.viewmodel";

class OrganizationVM {
  VKN: string;
  ID: string;
  Name: string;
  PhoneNumber: string;
  Email: string;
  Active: boolean;

  Balance: number;
  UsedBalance: number;

  CompanyAddress: AddressVM;
  InvoiceAddress: AddressVM;

  JoinedUsers: string[];

  CreatedDate: string;

  DeliveryAddresses: AddressVM[];
}

export { OrganizationVM };
