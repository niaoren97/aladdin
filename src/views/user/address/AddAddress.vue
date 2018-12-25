<template lang="pug">
.single-page
  navigation-bar(title="添加新地址")
    template(slot="right")
      span(@click="submit") 完成
  .content
        input(v-model="name" placeholder="请输入真实姓名")
        input(v-model="phone" placeholder="请输入电话号码")
        input(v-model="address" placeholder="请选择地址" @focus="show()")
        City(v-model="cityInfo", class="select-city", 
        @input="chooseAddress" v-if="isShow")
        input(v-model="detail" placeholder="请填写详细地址")
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
      isShow:false,
      
      name: "",
      phone: "",
      address: "",
      detail: "",
      cityInfo: ""
    };
  },
  methods: {
    show(){
      this.isShow=true
    },
    // info 为子组件传递过来的参数
    chooseAddress(info) {
      console.log("info", info);
      this.cityInfo = info;
    },
    submit() {},
    // vuex仓库的使用，对应address.js对地址进行存储
    addAddress() {
      this.$store.dispatch("address/addAddress", {
        name: this.name,
        phone: this.phone,
        address: this.address,
        detail: this.detail,
        cityInfo: this.cityInfo
      });
    }
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

input
  width 100%
  height 1rem
  outline none
  padding 0 0.2rem
  font-size 0.25rem
  border none
  border-bottom 1px solid #f2f2f2
input:last-child 
  border-top 1px solid #f2f2f2
</style>