import { InputJsonValue } from "../../types";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  password: string;
  roles: InputJsonValue;
  employee?: CustomerWhereUniqueInput | null;
};
