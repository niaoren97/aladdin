import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import OneClassifyTow from "./components/OneClassifyTow";
import Mianbuhuli from './components/Mianbuhuli';
import Dizhuangcaizhuang from './components/Dizhuangcaizhuang';
import Xiuxian from './components/Xiuxian';
import Shentihuli from './components/Shentihuli';
import Meirong from './components/Meirong';
import Shenghuoyp from './components/Shenghuoyp'
import Gerenhl from './components/Gerenhl';
import Baoyangys from './components/Baoyangys';
import Shishangcp from './components/Shishangcp';
import Muyingyp from './components/Muyingyp';
import Tab1 from './components/Tab1';
import TJCKGD from './components/TJCKGD';
import Aabb from './components/Aabb'
import FenLeisx from './components/FenLeisx'



Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/oneclassifytow",
      redirect:'/tab1',
      name: "OneClassifyTow",
      component:OneClassifyTow,
      children:[
        {
          path:'/tab1',
          name:'Tab1',
          component:Tab1
        },
        {
          path: "/mianbuhuli",
          name: "Mianbuhuli",
          component: Mianbuhuli
        },
        {
          path: "/dizhjuangcaizhaung",
          name: "Dizhuangcaizhuang",
          component: Dizhuangcaizhuang
        },
        {
          path: "/xiuxian",
          name: "Xiuxian",
          component: Xiuxian
        },
        {
          path: "/shentihuli",
          name: "Shentihuli",
          component: Shentihuli
        },
        {
          path: "/meirong",
          name: "Meirong",
          component: Meirong
        },
        {
          path: "/shenghuoyp",
          name: "Shenghuoyp",
          component: Shenghuoyp
        },
        {
          path: "/gerenhl",
          name: "Gerenhl",
          component: Gerenhl
        },
        {
          path: "/baoyangys",
          name: "Baoyangys",
          component: Baoyangys
        },
        {
          path: "/shishangcp",
          name: "Shishangcp",
          component: Shishangcp
        },
        {
          path: "/muyingyp",
          name: "Muyingyp",
          component: Muyingyp
        },
        

      ]
    },
    {
      path:'/tjckgd',
      name:'TJCKGD',
      component:TJCKGD,
      children:[
        {
          path:'fenleisx',
          name:'FenLeisx',
          component:FenLeisx
        }
      ]
    },
    {
      path:'/aabb',
      name:'Aabb',
      component:Aabb
    }
  ]
});
