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

      <div class="assortment">
        <div><img src="https://s2.mogucdn.com/mlcdn/c45406/170420_84jb793h4664ei6ekg4i5e2dd9a43_225x225.png_160x160.v1cAC.70.webp"><i>优选速递</i></div>
        <div><img src="https://s2.mogucdn.com/mlcdn/c45406/170420_4ea4j6e0fbd7ifbi1f14lj7dke730_225x225.png_160x160.v1cAC.70.webp"><i>热销单品</i></div>
        <div><img src="https://s2.mogucdn.com/mlcdn/c45406/170420_546j13c891lc706f3lda52al3ck9l_225x225.png_160x160.v1cAC.70.webp"><i>省心套装</i></div>
        <div><img src="https://s2.mogucdn.com/mlcdn/c45406/170405_4180684kj5l84e0d6l60fff8f4i16_225x225.png_160x160.v1cAC.70.webp"><i>签到有礼</i></div>
      </div>

      <div class="today">
        <div>今日新品</div>
        <p><img src="http://s2.mogucdn.com/p2/170504/arkmaster_3jdgj04a1l001l0910e9jg4kd3e1e_750x430.jpg_640x999.v1c96.70.webp"></p>
      </div>

      <div class="pop">
        <div></div>
        <div></div>
      </div>
    </section>
    <div class="m-tabbar">
        <div>
          <router-link to="/board" active-class="active"><i class="iconfont yo-ico">&#xe607;</i><b>首页</b></router-link>
          <router-link to="/classify"><i class="yo-ico iconfont">&#xe612;</i><b>分类</b></router-link>
          <router-link to="/minicar"><i class="yo-ico iconfont">&#xe678;</i><b>购物车</b></router-link>
          <router-link to="/mine"><i class="yo-ico iconfont">&#xe78c;</i><b>我</b></router-link>
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