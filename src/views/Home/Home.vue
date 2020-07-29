<template>
  <div class="home">
    <div class="window_width">
      responsive block
      <div class="img">
        <img alt="Vue logo" src="@/assets/logo.png" />
      </div>
      <div>{{ WINDOW_WIDTH }}</div>
    </div>

    <HelloWorld
      v-if="WINDOW_WIDTH > 1000"
      class="text_red"
      msg="Адаптивный блок с шириной экрана больше 1000"
    />
    <HelloWorld
      v-else-if="WINDOW_WIDTH > 500"
      class="text_blue"
      msg="Адаптивный блок с шириной экрана больше 500"
    />
    <HelloWorld v-else class="text_green" msg="Адаптивный блок" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  computed: {
    ...mapState({
      WINDOW_WIDTH: state => state.WINDOW_WIDTH
    })
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;

  .img {
    width: 15vw;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .window_width {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 5vw;
    color: #42b983;
    font-weight: 900;
    border: 1px solid #42b983;
    margin-bottom: 20px;
  }
  .text_red {
    border: 1px solid red;
    color: red;
    font-size: 30px;
    width: 1000px;
  }
  .text_blue {
    border: 1px solid blue;
    color: blue;
    font-size: 20px;
    width: 500px;
  }
  .text_green {
    border: 1px solid green;
    color: green;
    font-size: 10px;
    width: 80%;
  }
}
</style>
