import { cars } from "@/api/cars.js";

export default {
  getCarAdsCar(context, obj) {
    context.commit("setCarAdsCar", obj);
  },
  async getCarId(context, id) {
    let res = cars.find(el => el.id === +id);
    setTimeout(() => {
      context.commit("setCarId", res ? res : "error");
    }, 300);
  }
};
