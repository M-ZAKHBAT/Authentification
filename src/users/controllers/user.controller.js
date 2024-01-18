import { UserService } from "../services/user.service.js";

export class UserController {
  constructor() {
    this.userService = new UserService();
  }

  Add = (user) => this.userService.Add(user);
  update = (id, item) => this.userService.update(id, item);
  delete = (id) => this.userService.delete(id);
  getOne = (id) => this.userService.getOne(id);
  getAll = () => this.userService.getAll();
}
