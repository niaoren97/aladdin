<template>
  <div class="xwrap">
    <div class="xheader">
      <img class="xhimg" src="/static/xiangqingyetop/feblei-4.png" alt>
      <div class="xhtext">
        <p>心得体验</p>
        <p>
          <img src="/static/xiangqingyetop/feblei-2.png" alt>
        </p>
        <p>
          <router-link to="/tjckgd">查看更多
            <img class="xjiantou" src="/static/xiangqingyetop/jiantou.png" alt>
          </router-link>
        </p>
      </div>
    </div>
    <div class="xcontent">
      <div>
        <ul class="xguojiazhiyou" :key="item.name" v-for="item in datazhiyou">
          <li class="xgjzy">
            <p>
              <img :src="item.src" alt>
            </p>
            <p>{{item.name}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="xfooter">
      <p class="xh">热卖产品</p>
      <div>
        <ul class="xfhots">
          <li class="xfhot" :key="items.names" v-for="items in xdatahot">
            <p>
              <img :src="items.src" alt>
            </p>
            <p>{{items.names}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Tab1',
  data() {
    return {
      datazhiyou: [
        { src: '/static/guojiazhiyou/dhw-RB.png', name: '日本直邮' },
        { src: '/static/guojiazhiyou/dhw-MG.png', name: '美国直邮' },
        { src: '/static/guojiazhiyou/dhw-YG.png', name: '英国直邮' },
        { src: '/static/guojiazhiyou/dhw-ADLY.png', name: '澳大利亚直邮' },
        { src: '/static/guojiazhiyou/dhw-ZG.png', name: '中国直邮' },
      ],
      xdatahot: [
        { src: '/static/xiangqingyetop/feblei-3.png', names: '洁面清理' },
        { src: '/static/xiangqingyetop/feblei-5.png', names: '人气口红' },
        { src: '/static/xiangqingyetop/feblei-1.png', names: '名牌包包' },
        { src: '/static/xiangqingyetop/feblei-3.png', names: '洁面个清理' },
        { src: '/static/xiangqingyetop/feblei-5.png', names: '人气法口红' },
        { src: '/static/xiangqingyetop/feblei-1.png', names: '名牌法包包' },
      ],
    }
  },
  components: {},
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
ul li {
  font-size: 0.28rem;
  list-style-type: none;
}
.xwrap {
  width: 100%;
  height: 100%;
}
.xheader {
  width: 92.5%;
  height: 2.12rem;
  margin: 0.16rem 0.2rem;
  position: relative;
  left: 0;
}
.xhimg {
  width: 100%;
  height: 100%;
}
.xhtext {
  width: 2.14rem;
  height: 1.38rem;
  background: #fdf4f4;
  opacity: 0.8;
  text-align: center;
  font-size: 0.25rem;
  position: absolute;
  left: 0.42rem;
  top: 0.37rem;
}
.xhtext p:nth-child(1) {
  margin: 0.05rem auto;
}
.xhtext p:nth-child(2) {
  margin: 0.05rem auto;
}
.xhtext p:nth-child(3) {
  margin: 0.05rem auto;
}
.xjiantou {
  width: 0.25rem;
  height: 0.23rem;
}
.xcontent {
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-bottom: 2px solid #cccccc;
}

.xguojiazhiyou {
  width: 1.7rem;
  height: 2rem;
  text-align: center;
  display: inline-block;
}
.xgjzy p:nth-child(1) {
  margin-top: 0.1rem;
}
.xgjzy p:nth-child(2) {
  margin-top: 0.4rem;
}
.xfhots {
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 0.3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.xh {
  font-size: 0.3rem;
  margin: 0.2rem;
}
.xfhot {
  width: 30%;
  height: 1.6rem;
}
.xfhot img {
  width: 1.4rem;
  height: 1rem;
}
</style>

