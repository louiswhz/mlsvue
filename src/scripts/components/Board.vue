<template>
  <div class="m-board">
    <Header></Header>
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

      <div class="ming-pop">
        <div>正在流行</div>
        <div class="scroll">
          <ul>
            <li v-for="(item, index) in list"><img :src="item.image"/></li>
          </ul>
          <ul>
            <li v-for="(item, index) in list2"><img :src="item.image"/></li>
          </ul>
        </div>
      </div>
      
      <div class="ming-title">
          <div>好物X搭配</div>
      </div>

      <div class="ming-collocation">
        <ul class="ming-a">
          <li v-for="(item, index) in collocation2"><img :src="item.image"></li>
        </ul>
        <ul class="ming-f">
          <p v-for="(item, index) in collocation3">{{item.title}}</p>
          <p v-for="(item, index) in collocation3">{{item.subTitle}}</p>
        </ul>
        <ul class="ming-b">
          <li v-for="(item, index) in collocation"><img :src="item.image"></li>
        </ul>
        <ul class="ming-c">
          <li v-for="(item, index) in list"><img :src="item.image"></li>
        </ul>
        
        <ul class="ming-d">
          <li v-for="(item, index) in collocation4"><img :src="item.image"></li>
        </ul>
        <ul class="ming-f">
          <p v-for="(item, index) in collocation8">{{item.title}}</p>
          <p v-for="(item, index) in collocation8">{{item.subTitle}}</p>
        </ul>
        <ul class="ming-b">
          <li v-for="(item, index) in collocation6"><img :src="item.image"></li>
        </ul>
        <ul class="ming-c">
          <li v-for="(item, index) in list2"><img :src="item.image"></li>
        </ul>
        

        <ul class="ming-e">
          <li v-for="(item, index) in collocation5"><img :src="item.image"></li>
        </ul>
        <ul class="ming-f">
          <p v-for="(item, index) in collocation9">{{item.title}}</p>
          <p v-for="(item, index) in collocation9">{{item.subTitle}}</p>
        </ul>
        <ul class="ming-b">
          <li v-for="(item, index) in collocation7"><img :src="item.image"></li>
        </ul>
        <ul class="ming-c">
          <li v-for="(item, index) in list3"><img :src="item.image"></li>
        </ul>
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
  import Header from './Header'
  Vue.component('Header',Header)
  import { Swipe, SwipeItem } from 'mint-ui'
  import 'mint-ui/lib/style.css'
  Vue.component(Swipe.name, Swipe)
  Vue.component(SwipeItem.name, SwipeItem)
  import utilAxios from '../utils/axios'

  export default {
    data(){
      return {
        list: [],
        list2:[],
        list3:[],
        collocation: [],
        collocation2: [],
        collocation3: [],
        collocation4: [],
        collocation5: [],
        collocation6: [],
        collocation7: [],
        collocation8: [],
        collocation9: [],
        title: ''
      }
    },

    mounted: function () {
      let that = this
      let type = that.$route.params.type
      utilAxios.get({
        url: '/mls/venus/collection/v1/queryTopicCollocation/android?st=1492776749&_did=e06faa906461fdb2849043851d88795f&_res=1080*1920&imei=867830028775635&_version=905&mac=20%3A82%3Ac0%3A3b%3Aa1%3A4b&_channel=MALmiui&build_serial=edc2b347&page=2&_sign=a32c174a8a5f0cf2c13980528a732e98d3068809',
        method: 'get',
        callback: function (res) {
          that.title = res.data.title
          that.list = that.list.concat(res.data.data.topic[0].goodsList)
          that.list2 = that.list2.concat(res.data.data.topic[1].goodsList)
          that.list3 = that.list3.concat(res.data.data.topic[2].goodsList)
        }
      })
      utilAxios.get({
        url: '/mls/venus/collection/v1/queryTopicCollocation/android?st=1492776790&_did=e06faa906461fdb2849043851d88795f&_res=1080*1920&imei=867830028775635&_version=905&mac=20%3A82%3Ac0%3A3b%3Aa1%3A4b&_channel=MALmiui&build_serial=edc2b347&page=3&_sign=99e7025614ca30d8e5688d1ebfee305f0ba41f6c',
        method: 'get',
        callback: function (res) {
          that.collocation = that.collocation.concat(res.data.data.topic[0])
          that.collocation6 = that.collocation6.concat(res.data.data.topic[1])
          that.collocation7 = that.collocation7.concat(res.data.data.topic[2])
          that.collocation2 = that.collocation2.concat(res.data.data.collocation[0].goodsList)
          that.collocation4 = that.collocation4.concat(res.data.data.collocation[1].goodsList)
          that.collocation5 = that.collocation5.concat(res.data.data.collocation[2].goodsList)
          that.collocation3 = that.collocation3.concat(res.data.data.collocation[0])
          that.collocation8 = that.collocation8.concat(res.data.data.collocation[1])
          that.collocation9 = that.collocation9.concat(res.data.data.collocation[2])
        }
      })
    }
  }
</script>