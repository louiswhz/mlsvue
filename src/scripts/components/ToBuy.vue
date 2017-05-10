<template lang="html">
	<div class="toy"  v-if="info">
		<header class="header">
			<span class="yo-ico" @click="back">&#xf07d;</span>
		    <span><i class="yo-ico">&#xf07e;</i><i class="yo-ico right">&#xe602;</i></span>		    
	   </header>
	   
       <section>
	   	 
	   	  <div class="buy_tu">
	   	  	 <img :src="info.itemInfo.topImages[0]"/>
	   	  </div>
	   	  
	   	  <div class="buy_box">
	   	  		   	  
		   	  <div class="above" v-text="info.itemInfo.desc"></div>
		   	  <div class="below" v-text="info.itemInfo.title"></div>
		   	  <div class="buy_price">
		   	  	<span class="price_left">￥<b v-text="info.itemInfo.lowPrice"></b></span>
		   	  	<span class="price_right">￥<b v-text="info.itemInfo.highPrice"></b></span>
		   	  </div>
		   	  <div class="buy_num" >
		   	  	<span v-text="info.columns[0]"></span>
		   	  	<span v-text="info.columns[1]"></span>
		   	  	<span v-text="info.columns[2]"></span>
		   	  </div>
	   	  </div>	   	  
	   </section>
	   <div class="car_shop">
	   	  	<ul>
	   	  		<li>
	   	  			<i class="yo-ico">&#xe60b;</i>
	   	  			<p>客服</p>
	   	  		</li>
	   	  		<li>
	   	  			<i class="yo-ico">&#xe6e2;</i>
	   	  			<p>店铺</p>
	   	  		</li>
	   	  		<li>
	   	  			<i class="yo-ico">&#xe622;</i>
	   	  			<p>收藏</p>
	   	  		</li>
	   	  	</ul>
	   	  	<div class="footbar-buy">  
	   	  		<span class="buy-cart" @click="showmodal" >加入购物车</span> 
	   	  		<span class="buy-now">购买</span>  
	   	  	</div>
	   	  </div>
	   	  <mt-popup v-model="popupVisible" position="bottom" class="bycart">
	   	  	<div class="car_wrap">
	   	  		<img :src="info.itemInfo.topImages[0]"/>
	   	  		<div class="car_title">
	   	  			<p v-text="info.skuInfo.title"></p>
	   	  			<b v-text="info.itemInfo.price"></b>
	   	  			<i>请选择“颜色”，“尺码”</i>
	   	  		</div>
	   	  		<span @click="hidemodal">X</span>
	   	  	</div>
		  </mt-popup>
   </div>
</template>

<script>
	import Vue from 'vue'
	import utilAxios from '../utils/axios'
	import 'mint-ui/lib/style.css'
	import { Popup } from 'mint-ui'
	Vue.component(Popup.name, Popup)
	export default {
		data() {
	      return {
	        info: null,
	        popupVisible:false
	      }
	    },
	    
	    methods:{
	    	back: function() {
	        this.$router.go(-1)
	     },
	     showmodal: function () {
//	     	console.log(1)
	      this.popupVisible = true
	    },
	     hidemodal: function () {
//	     	console.log(1)
	      this.popupVisible = false
	    }
	    },
      mounted: function () {
     	
      let that = this
//		console.log(this.$route.params.id)
        

      utilAxios.get({
        url: 'api/detail/mls/v1/h5?iid='  + this.$route.params.id+'&_ajax=1&cparam=',
        method: 'get',
        callback: function (res) {
            that.info = res.data.result
          
        }
      })
    }
  }
</script>


<style lang="css">
	
</style>