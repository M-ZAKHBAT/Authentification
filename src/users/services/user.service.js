import { User } from "../model/user.schema.js";
import bcrypt from "bcrypt";
export class UserService {
  // Add = (user) => {
  //   const repository = new User({
  //     name: user.name,
  //     email: user.email,
  //     password: user.password,
  //   });
  //   return repository.save();
  // };
  constructor() {
    this.saltRounds = 10;
  }
  async sanitize(item) {
    const { password, salt, ...user } = item;
    return user;
  }
  async getSchema(item) {
    const { name, email, password } = item;
    const salt = await bcrypt.genSalt(this.saltRounds);
    const cryptedPassword = await bcrypt.hash(password, salt);
    return new User({ name, email, password: cryptedPassword, salt });
  }
  Add = async (item) => {
    this.collection = await this.getSchema(item);
    return this.collection.save(item);
  };

  update = async (id, item) => {
    if (item.password) {
      const user = await this.getOne(id);
      if (user) {
        item.password = await bcrypt.hash(item.password, user.salt);
      } else {
        return null;
      }
    }
    const result = await User.findByIdAndUpdate({ _id: id }, item);
    if (result) return this.getOne(id);
    return null;
  };
  getOne = async (id) => User.findOne({ _id: id });

  delete = (id) => User.findByIdAndDelete({ _id: id });
  getAll = (page = 1, limit = 10, filter) => {
    if (page <= 0) page = 1;
    if (limit <= 0) limit = 10;
    const flt = {};
    if (filter) {
      if (typeof filter == "string") {
        const filters = `${filter}`.split("__");
        flt[filter[0]] = filters[1];
      } else {
        [...filter].forEach((item) => {
          const filters = `${item}`.split("__");
          flt[filter[0]] = filters[1];
        });
      }
    }
    return User.find(flt, {}, { limit, skip: (page - 1) * limit });
  };

  findByParams(params, value) {
    return User.findOne({ [params]: value });
  }
}
