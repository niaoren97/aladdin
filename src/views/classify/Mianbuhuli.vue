<template id="mbhl">
  <div class="mb">
    <div class="header">
      <router-link to>
        <img src="/static/xiangqingyetop/feblei-11w.png" alt>
      </router-link>
      <div class="ckgd">
        <router-link :style="'color:#333333'" to="/tjckgd">
          查看更多
          <img src="/static/jiantou/xx-4.png" alt>
        </router-link>
      </div>
    </div>
    <div class="footer">
      <ul class="xfhots">
        <li class="xfhot" :key="index" v-for="(items,index) in xdatahot">
          <p>
            <img :src="items.src" alt>
          </p>
          <p>{{items.names}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Mianbuhuli',
  data() {
    return {
      xdatahot: [
        { src: '/static/xiangqingyetop/feblei-3.png', names: '洁面清理' },
        { src: '/static/xiangqingyetop/feblei-5.png', names: '人气口红' },
        { src: '/static/xiangqingyetop/feblei-1.png', names: '名牌包包' },
        { src: '/static/xiangqingyetop/feblei-3.png', names: '洁面个清理' },
        { src: '/static/xiangqingyetop/feblei-5.png', names: '人气法口红' },
        { src: '/static/xiangqingyetop/feblei-1.png', names: '名牌法包包' },
        { src: '/static/xiangqingyetop/feblei-3.png', names: '洁面清理' },
        { src: '/static/xiangqingyetop/feblei-5.png', names: '人气口红' },
        { src: '/static/xiangqingyetop/feblei-1.png', names: '名牌包包' },
        { src: '/static/xiangqingyetop/feblei-3.png', names: '洁面个清理' },
        { src: '/static/xiangqingyetop/feblei-5.png', names: '人气法口红' },
        { src: '/static/xiangqingyetop/feblei-1.png', names: '名牌法包包' },
      ],
    }
  },
}
</script>
<style>
.mb {
  width: 100%;
  height: 100%;
}
.header {
  width: 5rem;
  height: 2rem;
  margin: 0.22rem auto;
  border: 1px solid green;
  position: relative;
}
.header img {
  width: 100%;
  height: 100%;
}
.ckgd {
  width: 1.2rem;
  height: 0.32rem;
  border: 1px solid #887979;
  background: #ffffff;
  font-size: 0.2rem;
  line-height: 0.32rem;
  position: absolute;
  left: 0.68rem;
  top: 1.17rem;
  text-align: center;
}
.ckgd img {
  width: 0.11rem;
  height: 0.16rem;
}

.footer {
  width: 100%;
  /* height: 100%; */
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
.xfhot {
  width: 30%;
  height: 1.6rem;
  margin: 0.2rem auto;
}
.xfhot img {
  width: 1.4rem;
  height: 1rem;
}
</style>


