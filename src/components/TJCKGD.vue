<template>
  <div class="xcwrap">
    <div class="xcheader">
      <div>
        <a href="/oneclassifytow">
          <img src="../assets/jiantou/ssjg-1.png" alt="/">
        </a>
      </div>
      <p>面部护理</p>
    </div>
    <div class="xccontent">
      <div class="xcconheader">
        <div>销量</div>
        <div >最新</div>
        <div  class="xprice">
          <div @click="aabb(dataimg)" class="xleft">价格</div>
          <div class="xright">
            <img src="../assets/jiantou/ssjg-5.png" alt>
            <img src="../assets/jiantou/ssjg-4.png" alt>
          </div>
        </div>
        <div>
          <router-link to="/tjckgd/fenleisx">筛选</router-link>
          <div class="'xsgd'">
            
          </div>
          
        </div>
      </div>
      <div class="xcconcontent">
        <ul>
          <li class="xconcon" :key="index" v-for="(item,index) in dataimg">
            <div class="xconimg">
              <img :src="item.src" alt>
            </div>
            <div class="xconright">
              <div>{{item.xtitle}}</div>
              <div>{{item.xtxt}}</div>
              <div class="xconfooter">
                <div class="xconfl">
                  <img src="../assets/jiantou/ssjg-7.png" alt>
                  <img src="../assets/jiantou/ssjg-8.png" alt>
                  <p>海外直邮</p>
                </div>
                <div :class="'xconfr'" :style="'color:#e53e42'">￥{{item.xprice}}</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="xcfooter">
      <div class="xcfheader">
        <img class="xcfheaderimg" src="../assets/jiantou/ssjg-9.png" alt>
      </div>
      <div class="xcffooter">
        <router-view></router-view>
        <router-link to="">加载更多</router-link>
      </div>
    </div><router-view></router-view>
  </div>
</template>
<script>
export default {
  name:'TJCKGD',
  data(){
    return{
         num:0,
        dataimg:[
          {
            src:require('../assets/jiantou/ssjg-6.png'),xtitle:'1焕彩翠璨花蕊唇彩4.8g',xtxt:'焕彩翠璨花蕊唇彩4.8g焕彩翠璨花蕊唇彩4.8g焕彩翠璨花蕊唇彩4.8g焕彩翠璨花蕊唇彩4.8g',xprice:'166.06'
          },
          {
            src:require('../assets/jiantou/ssjg-6.png'),xtitle:'2焕彩翠璨花蕊唇彩4.8g',xtxt:'焕彩翠璨花蕊唇彩4.8g焕彩翠璨花蕊唇彩4.8g焕彩翠璨花蕊唇彩4.8g焕彩翠璨花蕊唇彩4.8g',xprice:'167.06'
          },
          {
            src:require('../assets/jiantou/ssjg-6.png'),xtitle:'3焕彩翠璨花蕊唇彩4.8g',xtxt:'焕彩翠璨花蕊唇彩4.8g焕彩翠璨花蕊唇彩4.8g焕彩翠璨花蕊唇彩4.8g焕彩翠璨花蕊唇彩4.8g',xprice:'168.06'
          },
          {
            src:require('../assets/jiantou/ssjg-6.png'),xtitle:'4焕彩翠璨花蕊唇彩4.8g',xtxt:'焕彩翠璨花蕊唇彩4.8g焕彩翠璨花蕊唇彩4.8g焕彩翠璨花蕊唇彩4.8g焕彩翠璨花蕊唇彩4.8g',
            xprice:'169.06'
          }
        ]
    }
  },
  computed:{
    mydata() {
      
      
      const data = Array.from(this.dataimg);
      
        return  data.sort((a,b)=> a.xprice - b.xprice);
      
    }
    
     
       
      },
      methods: {
      
      aabb(dataimg){
         var temp;
         for(var i = 0;i < this.dataimg.length;i++){
           for(var j = i+1;j < this.dataimg.length;j++){
             if (this.dataimg[j].xprice > this.dataimg[i].xprice) {
               temp = this.dataimg[j];
               this.dataimg[i] = temp;
               this.dataimg[j] = this.dataimg[i]
             }
           }
         }
         return this.dataimg;
      },
     
      }

  }

</script>
<style scoped>
.xcwrap {
  width: 100%;
  height: 100%;
  position: relative;
}
.xcheader {
  width: 100%;
  height: 1.1rem;
  background: #e53e42;
  text-align: center;
  font-size: 0.4rem;
  line-height: 1.1rem;
  position: relative;
  color: #ffffff;
}
.xcheader img {
  position: absolute;
  width: 0.4rem;
  height: 0.6rem;
  left: 0.2rem;
  top: 0.25rem;
}
.xcconheader {
  width: 100%;
  height: 0.8rem;
  background: #f2f2f2;
  font-size: 0.3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.xprice {
  width: 1rem;
  display: flex;
  justify-content: space-between;
}
.xleft {
  width: 60%;
}
.xright {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.xright img {
  width: 50%;
  height: 25%;
}
.xcconcontent {
  width: 100%;
  height: 100%;
  background: #f2f2f2;
}
.xconcon {
  width: 100%;
  height: 2.02rem;

  margin: 0.1rem auto;
  background: #ffffff;
  display: flex;
  justify-content: space-around;
}
.xconimg {
  width: 28%;
  height: 1.7rem;
  text-align: center;
}
.xconimg img {
  width: 0.9rem;
  height: 1.7rem;
  margin-top: 0.16rem;
}
.xconright {
  width: 72%;
  height: 2.02rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.xconright div:nth-child(1) {
  font-size: 0.3rem;
  line-height: 0.5rem;
}
.xconright div:nth-child(2) {
  font-size: 0.23rem;
  line-height: 0.3rem;
  color: #666666;
}
.xconfooter {
  width: 100%;
  font-size: 0.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.xconfl {
  width: 40%;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.xconfl img:nth-child(1) {
  width: 0.35rem;
  height: 0.25rem;
}
.xconfl img:nth-child(2) {
  width: 0.4rem;
  height: 0.4rem;
}
.xconfr {
  width: 20%;
}
.xcfheaderimg {
  width: 100%;
  height: 3rem;
  margin-top: 0.1rem;
}
.xcffooter {
  width: 100%;
  height: 0.73rem;
  text-align: center;
  line-height: 0.73rem;
  background: #f2f2f2;
}

</style>

