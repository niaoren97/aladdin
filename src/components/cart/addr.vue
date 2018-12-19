<template>
  <div class="top">
    <div class="rb"></div>
    <div class="address">
      <img src="../../assets/cart-img/add.png" alt>
      <span>添加收货地址</span>
    </div>
    <div class="rb"></div>

    <div class="ch-addres">
      <div class="starts"></div>
      <div class="ch-address-cont"></div>
      <div class="starts"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "addr",
  data() {
    return {};
  },
  components: {},
  props: {}
};
</script>

<style scoped lang='stylus'>
.top {
  border-top 0.1rem solid #f2f2f2
  margin: 1rem 0 0.2rem;
}

.top .rb {
  width: 100%;
  height: 0.1rem;
  background-image: url('../../assets/cart-img/r&b.png');
}

.top .address {
  background-color: #fff;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 0.2rem;
}
// .top {
//   border-top: 0.1px solid #cccccc;
//   // border-bottom: 0.1px solid #cccccc;
// }
.address img {
  width: 0.5rem;
  margin: 0 0.3rem;
}

.starts {
  width: 100%;
  height: 0.1rem;
  background-image: url('../../assets/cart-img/starts.png');
}

.ch-addres {
  width: 100%;
  height: 1.2rem;
  margin: 0.2rem 0;
}

.ch-address-cont {
  height: 1.2rem;
}
</style>



