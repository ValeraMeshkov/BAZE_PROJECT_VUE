import axios from "axios";
const URL = "http://localhost:3000";

export default {
  async getColors(context) {
    const res = await axios.get(`${URL}/colors`);
    context.commit("setColors", res.data);
  },
  /**
   * Изменение Ширины экрана
   * @param {Object} commit - store
   * @param {Number} value - ширина экрана
   */
  changeWindowWidth(context, value) {
    context.commit("setWindowWidth", value);
  }
};
