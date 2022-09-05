import { Products } from "./daos/apiProducts.js";

export default class DataProducts {
  constructor() {}
  static getApi() {
    return new Products();
  }
}
