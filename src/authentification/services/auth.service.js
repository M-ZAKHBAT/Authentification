import { UserService } from "../../users/services/user.service.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class AuthService {
  constructor() {
    this.userService = new UserService();
  }

  login = async (item) => {
    const { email, password } = item;
    const user = await this.userService.findByParams("email", email);
    if (user) {
      if (bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ id: user.id }, "privatekey", {
          expiresIn: "1d",
        });
        return { token, user: { email: user.email } };
      }
      return null;
    }
    return null;
  };
  register = async (item) => {
    const user = await this.userService.Add(item);
    if (user) {
      const token = jwt.sign({ id: user.id }, "privatekey", {
        expiresIn: "1d",
      });
      return { token, user: { email: user.email } };
    }

    resetPassword = async (email, newPassword) => {
      let user = await this.user.findByParams("email", email);
      if (user) {
        user.password = await bcrypt.hash(newPassword, user.salt);
        user = await this.userService.update(user.id, user);
        const token = jwt.sign({ id: user.id }, "privatekey", {
          expiresIn: "1d",
        });
        return { token, user: { email: user.email } };
      }
      return null;
    };
  };
}
