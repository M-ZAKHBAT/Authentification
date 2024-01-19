import { RecepService } from "../services/recep.service.js";
export class RecepController {
  constructor() {
    this.recepService = new RecepService();
  }

  Add = (recep) => this.recepService.Add(recep);

  update = (id, item) => this.recepService.update(id, item);

  getOne = (id) => this.recepService.getOne(id);

  delete = (id) => this.recepService.delete(id);

  getAll = (page, limit, filter) =>
    this.recepService.getAll(page, limit, filter);
}
