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
        <i>流行</i> 
        <i>热销</i> 
        <i>上新</i>
      </div>
      <div class="c-fashion-list">
        <ul>
          <li v-for="(item,index) in classifydatalist" :key="index">
            <div><img :src="item.image"/></div>
            <div><i><b>优选</b></i><span v-html="item.title"></span></div>
            <div><i>￥</i><i v-text="item.price"></i><span><b></b></span></div>
          </li>
        </ul>
      </div>
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
  import utilAxios from '../utils/axios'
  export default {
    data() {
      return {
        dataSource: [],
        classifydatalist:[]
      }
    },

    mounted: function () {
      let that = this
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
          console.log(res)
          that.classifydatalist = that.classifydatalist.concat(res.data.data.rows)
        }
      })
    }
  }
</script>