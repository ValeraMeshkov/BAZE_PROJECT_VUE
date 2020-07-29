import { clone } from "@/helpers/helpers.js";
import { cars } from "@/api/cars.js";

export default {
  async getCarsShow(context, obj) {
    let newArr = [];
    const res = cars;
    for (
      let i = obj.count * obj.page - obj.count;
      i < obj.count * obj.page;
      i++
    ) {
      if (res[i]) {
        newArr.push(clone(res[i], true));
      }
    }
    context.commit("setCarsShow", newArr);
  },
  getCarsLength(context) {
    context.commit("setCarsLength", cars.length);
  },
  changeCarPage(context, page) {
    context.commit("setCarsPage", page);
  },
  changeCarsCount(context, count) {
    context.commit("setCarsCount", count);
  }
};
