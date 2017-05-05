<template>
  <div class="m-index">
    <div class="yo-header">
        <h2 class="title">美丽说</h2>
        <span>&#xe60a;</span>
        <span class="affirm yo-ico">&#xe60d;</span>
    </div>
    <section>
      <router-view></router-view>
    </section>
    <div class="m-tabbar">
        <div>
          <router-link to="/board"><i class="yo-ico">&#xe729;</i><b>首页</b></router-link>
          <router-link to="/classify"><i class="yo-ico">&#xe612;</i><b>分类</b></router-link>
          <router-link to="/minicar"><i class="yo-ico">&#xe678;</i><b>购物车</b></router-link>
          <router-link to="/mine"><i class="yo-ico">&#xe629;</i><b>我</b></router-link>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>