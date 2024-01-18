import { User } from "../model/user.schema.js";

export class UserService {
  Add = (user) => {
    const repository = new User({
      name: user.name,
      email: user.email,
      password: user.password,
    });
    return repository.save();
  };

  update = async (id, item) => {
    const result = await User.findByIdAndUpdate({ _id: id }, item);
    if (result) return this.getOne(id);
    return null;
  };
  getAll = async () => User.find({});
  getOne = async (id) => User.findOne({ _id: id });
  delete = async (id) => User.findByIdAndDelete({ _id: id });
}
