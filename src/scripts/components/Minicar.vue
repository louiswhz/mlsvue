<template lang="html">
	<div class="m_car">		
	<div class="car_header">购物车（1）</div>
	
	<section>
		<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :autoFill="false" ref="loadmore">
       
	  <div class="car_tis">
	    <p>温馨提示：现在登录，你可以同步电脑和手机购物车中的商品.</p><router-link to="/board" tag="span">登录</router-link>
	  </div>
	  
	  <div class="car_go">
	  	 <div class="car_lq">
	  	 	<div class="lq_xz"><i class="yo-ico">&#xe6bf;</i><b>美丽优选</b></div><span>领券</span>
	  	 </div>
	  	
	  </div>
	  
	  
	  <div class="car_love">
	  	
		<h3>猜你喜欢</h3>
		<div class="love_list">
           <router-link :key="index" :to="`/tobuy/${item.signGoodsId
			}`" tag="div" class="beau_girl" v-for="(item, index) in list">        
		  		<div class="girl_tu">
		  			<img v-lazy.container="item.image"/>
		  		</div>
		  		<p v-html="item.title"></p>
		  		<div class="girl_price">
		  			<span class="price_span">￥<b v-html="item.price"></b></span> 
		  			<span><i class="yo-ico">&#xe622;</i>
		  				<span v-html="item.collectNum"></span>
		  			</span>
		  		</div>	 		
		  	
		  	</router-link>  
		  		 </div>	 
	  	</div>	
	  		  	

	 </mt-loadmore>
	 <div class="car_footer">
	  		已经到底了
	 </div>
  </section>
	  <div class="m-tabbar">
	  	<div class="car_account">
      	 <div class="car_checkbox"><i class="yo-ico">&#xe6bf;</i><b>全选</b></div>
      	 <div class="car_zj">
      	 	<p>总价：￥<b>0.00</b></p>
      	 	<i>不含运费，优惠扣减</i>
      	 </div>
      	 <span class="car_js">去结算(<i>0</i>)</span>
      </div>
	        <div>
	          <router-link to="/board"><i class="yo-ico">&#xe6e2;</i><b>首页</b></router-link>
	          <router-link to="/classify"><i class="yo-ico">&#xe646;</i><b>分类</b></router-link>
	          <router-link to="/minicar"  active-class="active"><i class="yo-ico">&#xe605;</i><b>购物车</b></router-link>
	          <router-link to="/mine"><i class="yo-ico">&#xe60b;</i><b>我</b></router-link>
	       </div>
	    </div>
	    			
				
    </div>
</template>

<script>
	import Vue from 'vue'
	
	import { Loadmore } from 'mint-ui';	
    Vue.component(Loadmore.name, Loadmore);
    
	import { Indicator } from 'mint-ui';
	
	import { Lazyload } from 'mint-ui';
    Vue.use(Lazyload);
  
	import utilAxios from '../utils/axios'
	  export default {
	    data(){
	      return {
	        list: [],
	        title: '',
	        allLoaded: false
	      }
        },
    methods: {
      loadTop: function () {
	    this.$refs.loadmore.onTopLoaded();
      },
      loadBottom: function () {
        let that = this
        utilAxios.get({
          url: 'api/goodsunit/aj/wall?offset=0&frame=0&trace=0&limit=2&endId=0&id=6265',
          method: 'get',
          callback: function (res) {
	          that.title = res.data.data.rows
	          that.list = that.list.concat(res.data.data.rows)
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
	        url: 'api/goodsunit/aj/wall?offset=0&frame=0&trace=0&limit=20&endId=0&id=6265',
	        method: 'get',
	        
	        callback: function (res) {
	        	console.log(res)
	          that.title = res.data.data.rows
	          that.list = that.list.concat(res.data.data.rows)
	          Indicator.close()
	        }
	      })
	    }
	  }

</script>

<style lang="css">
	
	
</style>