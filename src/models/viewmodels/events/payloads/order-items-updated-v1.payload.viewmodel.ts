import { OrderItemVM } from "../../order.viewmodel";

export class OrderItemsUpdatedV1PayloadVM {
  DeletedItems: OrderItemVM[];
  UpdatedBy: string;
}
