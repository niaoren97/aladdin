<template>
    <div id="app">
        <div class="classify">
           <div class="side-sort">
                <ul>
                    <li :key="item.txt" v-for="(item,index) in dataSide" :class="{'active':cur == index}" @click="changeColor(index)">
                       
                        <p ref='a' class="xLine"></p>
                        <router-link :to="'/'+item.id">
                            <p>{{item.txt}}</p>
                        </router-link>
                      
                    </li>
                   
                </ul>
           </div>
           <div class="side-particulars">
             
                <router-view ></router-view>
              
           </div>
        </div>
        
    </div>
</template>
<script>

export default {
    name:'OneClassifyTow',
    data(){
        return {
          
            dataSide:[
                {id:'tab1',txt:'为您推荐'},
                {id:'mianbuhuli',txt:'面部护理'},
                {id:'dizhjuangcaizhaung',txt:'底妆彩妆'},
                {id:'xiuxian',txt:'休闲零食'},
                {id:'shentihuli',txt:'身体护理'},
                {id:'meirong',txt:'美容美发'},
                {id:'shenghuoyp',txt:'生活用品'},
                {id:'gerenhl',txt:'个人护理'},
                {id:'baoyangys',txt:'保健养生'},
                {id:'shishangcp',txt:'时尚潮品'},
                {id:'muyingyp',txt:'母婴用品'}
            ],
           cur:0
            
        }
    },
    methods:{
        changeColor(index){
            
            this.cur = index;
           
           
             if(this.$refs.a[index]){
                 var xcurrent =  this.$refs.a[index];
                  this.$refs.a[index].style.display = 'block';
                  if (this.$refs.a[index] != xcurrent) {
                      this.$refs.a[index].style.display = 'none';
                  }
            
            }
          

        },
        
    },
   
}
</script>

<style scoped>
    *{
        padding: 0;
        margin: 0;
    }
    ul li {
        list-style-type: none;
    }
    .classify {
        width: 100%;
        height: 10.83rem;
        border:1px solid green;
        display: flex;
        justify-content: space-between;
        
        
        
    }
    .side-sort{
        width: 25%;
    }
    .side-sort li{
        width: 100%;
        height: 0.8rem;
        font-size: 0.27rem;
        border-bottom:1px solid #cccccc;
        border-right: 1px solid #cccccc;
        text-align: center;
        line-height: 0.8rem;
        position: relative;
        left:0;

    }
    .xLine{
        position: absolute;
        top:50%;
        margin-top: -0.25rem;
        right:0;
        width: 0;
        height: 0.5rem;
        
    }
    

    .active {
        color:red;
    }

    .active .xLine {
        color:red;
        border: 1px solid #e53e42;
    }
    
    .side-particulars{
        width:75%;
        height: 10.39rem;
        /* border: 1px solid blue; */
        margin-right:0;
      
        
    }
</style>

