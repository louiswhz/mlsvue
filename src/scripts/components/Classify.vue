<template>
  <div class="m-index">
    <Header></Header>
    <section class='m-classify'>      
      <div class="a-classify">全部分类</div>
      <div class="classify-list">
        <ul>
          <li  v-for="(item,index) in dataSource" :key="index">
            <img :src="item.image" alt=""/>
          </li>
        </ul>
      </div>
      <div class="pop-hot-new">
        <i @click='abc(6265)'>流行</i> 
        <i @click='abc(6264)'>热销</i> 
        <i @click='abc(6263)'>上新</i>
      </div>     
      <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :autoFill="false" ref="loadmore">
        <div class="c-fashion-list">
            <ul>
              <router-link :to="`/detail/${item.signGoodsId}`" tag='li' v-for="(item,index) in classifydatalist" :key="index">
                <div><img :src="item.image"/></div>
                <div><i><b>优选</b></i><span v-html="item.title"></span></div>
                <div><i>￥</i><i v-text="item.price"></i><span><b></b></span></div>
              </router-link>
            </ul>
        </div>
      </mt-loadmore>
    </section>
    <div class="m-tabbar">
        <div>
          <router-link to="/board"><i class="yo-ico">&#xe729;</i><b>首页</b></router-link>
          <router-link to="/classify" active-class='active'><i class="yo-ico">&#xe612;</i><b>分类</b></router-link>
          <router-link to="/minicar"><i class="yo-ico">&#xe678;</i><b>购物车</b></router-link>
          <router-link to="/mine"><i class="yo-ico">&#xe629;</i><b>我</b></router-link>
        </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Header from './Header'
  Vue.component('Header',Header)
  import { Loadmore } from 'mint-ui';
  Vue.component(Loadmore.name, Loadmore);
  import { Indicator } from 'mint-ui';
  import { Lazyload } from 'mint-ui';
  // Vue.use(Lazyload);
  import utilAxios from '../utils/axios'
  export default {
    data() {
      return {
        dataSource: [],
        allLoaded: false,
        classifydatalist:[],
        allLoaded: false,
        count:0,
        id:6265
      }
    },

    methods:{
      abc:function(a){
        this.id = a
        this.count = 0
        this.getdata(a)
      },
      getdata(a){
        let that = this
        utilAxios.get({
        url: '/api/goodsunit/aj/wall?offset=0&frame=0&trace=0&limit=10&endId=0&id='+a,
        method: 'get',
        callback: function (res) {
            // console.log(res)
            that.classifydatalist = [],
            that.classifydatalist = that.classifydatalist.concat(res.data.data.rows)
            Indicator.close()
          }
        })
      },
      loadBottom: function () {
        let that = this
        // let type = that.$route.params.type
        utilAxios.get({
          url: `/api/goodsunit/aj/wall?offset=${that.count+=10}&frame=2&trace=0&limit=10&endId=0&id=${that.id}`,
          method: 'get',
           callback: function (res) {
            that.classifydatalist = that.classifydatalist.concat(res.data.data.rows)
            this.allLoaded = false;
            that.$refs.loadmore.onBottomLoaded()       
          }
        })
      }  
    },

    mounted: function () {
      let that = this
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });

      utilAxios.get({
        url: 'http://localhost:9000/classifylist',
        method: 'get',
        callback: function (res) {
          that.dataSource = that.dataSource.concat(res.data.classifyList)
        }
      })

      utilAxios.get({
        url: '/api/goodsunit/aj/wall?offset=0&frame=0&trace=0&limit=10&endId=0&id=6265',
        method: 'get',
        callback: function (res) {
          // console.log(res)
          that.classifydatalist = that.classifydatalist.concat(res.data.data.rows)
          Indicator.close()
        }
      })
    }
  }
</script>