<template lang="html">
  <div class="m-search">
<!--     <div class="yo-search yo-search-a">
      <label class="action">
        <span class="yo-ico"></span>
        <input type="text" @keyup.enter="search" v-model="keywords" class="input input-shrink" placeholder="输入搜索关键字...">
      </label>
      <span class="cancel" @click="cancel">取消</span>
    </div>
    <div class="result">
      <router-link :key="index" :to="`/detail/${item.id}`" tag="dl" v-for="(item, index) in list">
        <dt>
          <img v-lazy.container="item.images.large"/>
        </dt>
        <dd>
          <h1 v-html="item.title"></h1>
          <p v-html="item.original_title"></p>
          <p v-html="(item.directors[0] && item.directors[0].name) || ''"></p>
        </dd>
        <dd class="yo-badge" v-html="item.rating.average"></dd>
      </router-link>
    </div> -->
  </div>
</template>

<script>
import Vue from 'vue'

import { Indicator } from 'mint-ui';

import utilAxios from '../utils/axios'

export default {
  // data(){
  //   return {
  //     keywords: '',
  //     list: []
  //   }
  // },

  // methods: {
  //   search: function () {
  //     let that = this

  //     Indicator.open({
  //       text: '加载中...',
  //       spinnerType: 'fading-circle'
  //     });

  //     utilAxios.get({
  //       url: '/demo/v2/movie/search?q=' + this.keywords,
  //       method: 'get',
  //       callback: function (res) {
  //         that.list = res.data.subjects
  //         Indicator.close()
  //       }
  //     })
  //   },
  //   cancel: function () {
  //     this.keywords = ''
  //   }
  // }
}
</script>

<style lang="css">
</style>
