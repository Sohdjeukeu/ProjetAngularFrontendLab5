import { Role } from "./roles.js";
import { User } from "./users.js";

export class AddNewUser {
  User: User | undefined;
  RoleList: Role[] | undefined;
  constructor(user: User, roleList: Role[])
  {
    this.User = user;
    this.RoleList = roleList;
  }
}
