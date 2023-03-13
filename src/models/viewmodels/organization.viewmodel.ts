import { AddressVM } from "./address.viewmodel";
import { AccountEventVM } from "./events/account.event.viewmodel";

class OrganizationVM {
  VKN: string;
  ID: string;
  Name: string;
  PhoneNumber: string;
  Email: string;
  Active: boolean;

  CreditLimit: number;
  Balance: number;

  CompanyAddress: AddressVM;
  InvoiceAddress: AddressVM;

  JoinedUsers: string[];

  CreatedDate: string;

  DeliveryAddresses: AddressVM[];

  Events?: AccountEventVM[];
}

export { OrganizationVM };
