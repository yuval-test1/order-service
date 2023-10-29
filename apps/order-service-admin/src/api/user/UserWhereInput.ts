import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  employee?: CustomerWhereUniqueInput;
};
