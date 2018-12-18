<template>
  <div class="top">
    <div class="rb"></div>
    <div class="address">
      <div :key="item.key" v-for="item in data">
        <p class="name">{{item.name}} {{item.phone}}</p>
        <p class="des">{{item.address}}</p>
      </div>
      <img src="../../assets/cart-img/chaddr.png" alt="">
    </div>
    <div class="rb"></div>

    <div class="ch-addres">
      <div class="starts"></div>
      <div class="ch-address-cont">
        <div>实名认证<img src="../../assets/cart-img/tishi.png" alt=""></div>
        <div :key="item.key" v-for="item in data">
          <p class="name">{{item.name}} {{item.id}}</p>
        </div>
      </div>
      <div class="starts"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "addr",
  data() {
    return {
      data:[{name:'杜猛',phone:15832323232,address:'北京市朝阳区王府井大厦A栋101号',id:41132445456}]
    };
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

.top>.rb {
  height: 0.1rem;
  background-image: url('../../assets/cart-img/r&b.png');
}

 .address{
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.2rem;
}
.address>div{
  text-align left 
  width 4.5rem
} 
.name {
  font-size 20px
  color #4d4d4d
  margin-bottom 0.2rem
}
.des {
  font-size 15px
  color #8a8a8a
  letter-spacing 0.5px
}
.address img {
  width: 60px;
  margin: 0 0.3rem;
  line-height 35px
}

.starts {
  width: 100%;
  height: 0.1rem;
  background-image: url('../../assets/cart-img/starts.png');
}

.ch-addres {
  // height: 1.2rem;
  margin: 0.2rem 0;
}

.ch-address-cont {
  // height: 1.2rem;
}
.ch-address-cont img {
  width 4rem
}
.ch-address-cont>div {
  text-align left 
  margin  0.3rem 
}
</style>



