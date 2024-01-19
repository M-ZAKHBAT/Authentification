import { Recep } from "../model/recipies.js";
import { User } from "../../users/model/user.schema.js";
export class RecepService {
  Add = (recep) => {
    const repository = new Recep({
      category: recep.category,
      name: recep.name,
      ingredients: recep.ingredients,
      instructions: recep.instructions,
      userId: recep.userId,
      // img: recep.img,
    });
    return repository.save();
  };

  update = async (id, item) => {
    const result = await Recep.findByIdAndUpdate({ _id: id }, item);
    if (result) return this.getOne(id);
    return null;
  };

  delete = (id) => Recep.findByIdAndDelete({ _id: id });

  getOne = (id) => Recep.findOne({ _id: id });

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
    return Recep.find(flt, {}, { limit, skip: (page - 1) * limit }).populate(
      "userId"
    );
  };
}
