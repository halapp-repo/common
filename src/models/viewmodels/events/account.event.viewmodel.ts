import { AccountEventType } from "../../types/account-event.type";

export class AccountEventVM {
  TS: string;
  EventType: AccountEventType;
  Payload: string;
}
