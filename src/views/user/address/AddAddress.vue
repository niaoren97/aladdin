<template lang="pug">
.single-page
  navigation-bar(title="添加新地址")
    template(slot="right")
      span(@click="submit") 完成
  .content
    list
      list-item
        |姓名：
        input(v-model="name")
      list-item
        | 电话：
        input(v-model="phone")
      list-item
        |地址：
        City(v-model="cityInfo", class="select-city" ,           
        @input="chooseAddress")
      list-item
        |详细：
        input(v-model="detail")
</template>
<script>
import City from "@/components/cart/City";
export default {
  name: "AddAddress",
  components: {
    City
  },
  data() {
    return {
      name: "",
      phone: "",
      address: "",
      detail: "",
      cityInfo: "",
    };
  },
  methods: {
    // info 为子组件传递过来的参数
    chooseAddress(info) {
      console.log("info", info);
      this.cityInfo = info;
    },
    submit() {}
  },
  computed: {
    //cityName 为选择的省市区名称
    cityName() {
      const names = [];
      this.cityInfo.province && names.push(this.cityInfo.province.name + " ");
      this.cityInfo.city && names.push(this.cityInfo.city.name + " ");
      this.cityInfo.block && names.push(this.cityInfo.block.name + " ");
      return names.join("");
    }
  }
};
</script>
<style lang="stylus" scoped>
.single-page
  background-color #fff

.conten
  width 100%

.warn
  font-size 20px
  color #ff0000
  padding 5px
</style>