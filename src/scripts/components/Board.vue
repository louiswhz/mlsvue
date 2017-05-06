<template>
  <div class="m-board">
    <div class="yo-header">
        <h2 class="title">美丽说</h2>
        <span>&#xe60a;</span>
        <span class="affirm yo-ico">&#xe60d;</span>
    </div>
    <section>
      <mt-swipe :auto="1625">
        <mt-swipe-item><img src="https://s2.mogucdn.com/mlcdn/c45406/170504_713jjf6ig2da11ebbgdcll76a0ccl_750x500.jpg_750x999.v1c7E.70.webp"></mt-swipe-item :key="index">
        <mt-swipe-item><img src="https://s2.mogucdn.com/mlcdn/c45406/170503_74kb32jk00jbb9cc7lk97e4j4j75l_750x500.png_750x999.v1c7E.70.webp"></mt-swipe-item :key="index">
        <mt-swipe-item><img src="https://s2.mogucdn.com/mlcdn/c45406/170502_20d32iilj8i72eehdj98k8963c299_750x500.jpg_750x999.v1c7E.70.webp"></mt-swipe-item :key="index">
        <mt-swipe-item><img src="https://s2.mogucdn.com/mlcdn/c45406/170503_735ej1j3a76ehffd6a1l5l09j25h9_750x500.jpg_750x999.v1c7E.70.webp"></mt-swipe-item :key="index">
        <mt-swipe-item><img src="https://s2.mogucdn.com/mlcdn/c45406/170504_4k54c6k053l76le0lil7chdbb9ah3_750x500.jpg_750x999.v1c7E.70.webp"></mt-swipe-item :key="index">
      </mt-swipe>

      <div>
        
      </div>
    </section>
    <div class="m-tabbar">
        <div>
          <router-link to="/board" active-class="active"><i class="yo-ico">&#xe729;</i><b>首页</b></router-link>
          <router-link to="/classify"><i class="yo-ico">&#xe612;</i><b>分类</b></router-link>
          <router-link to="/minicar"><i class="yo-ico">&#xe678;</i><b>购物车</b></router-link>
          <router-link to="/mine"><i class="yo-ico">&#xe629;</i><b>我</b></router-link>
        </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Swipe, SwipeItem } from 'mint-ui'
  import 'mint-ui/lib/style.css'
  Vue.component(Swipe.name, Swipe)
  Vue.component(SwipeItem.name, SwipeItem)

  export default {
    
  }
</script>