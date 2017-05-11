<template lang="html">
	<div class="toy"  v-if="info">
		<header class="header">
			<span class="yo-ico" @click="back">&#xf07d;</span>
		    <span><i class="yo-ico">&#xf07e;</i><i class="yo-ico right">&#xe602;</i><b>0</b></span>		    
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
	   	  <ul class="buy_th">
	   	  	<li><i class="yo-ico">&#xe616;</i><span>退货补运费</span></li>
	   	  	<li><i class="yo-ico">&#xe616;</i><span>7天无理由退货</span></li>
	   	  	<li><i class="yo-ico">&#xe616;</i><span>先行赔付</span></li>
	   	  </ul>
	   	  
	   	  <div class="car_privilege">
	   	  	<h3>优惠活动</h3>
	   	  	<ul>
	   	  		<li><p><span>￥</span><b>3</b></p><i>满99减</i></li>
	   	  		<li><p><span>￥</span><b>5</b></p><i>满129减</i></li>
	   	  		<li><p><span>￥</span><b>10</b></p><i>满199减</i></li>
	   	  	</ul>
	   	  </div>
	   	  <div class="car_mlj">
	   	  	<p><b>满件立减</b></p>
	   	  	<span>满两件立减5元</span>
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
	   	  	<div class="car_wpxz">
	   	  		<div class="clothes_color">
	   	  			<h3>颜色：</h3>
	   	  			<ul class="color_xz" >
	   	  				<li v-for="item in title">{{item.style}}</li>	
	   	  			</ul>
	   	  		</div>
	   	  		<div class="clothes_size">
	   	  			<h3>尺码：</h3>
	   	  			<ul class="size_xz">
	   	  				<li v-for="item in title">{{item.size}}</li>	   	  				
	   	  			</ul>
	   	  		</div>
	   	  		<div class="clothes_num">
	   	  			<h3>数量：</h3>
	   	  			<div class="num_xz">
	   	  				<span>-</span>
	   	  			    <span class="num">0</span>
	   	  			    <span>+</span>
	   	  			</div>	   	  			
	   	  		</div>
	   	  		<div class="clothes_confirm"><p></p><span>确定</span></div>
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
	        popupVisible:false,
	        title:[]
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
            that.title= res.data.result.skuInfo.skus
            that.name=res.data.result.skuInfo.skus
            
            console.log(res.data.result.skuInfo.skus.stock)
            
//          for(var i = 0; i < that.title.length ; i++){
//          	console.log(that.title[i].size)
//          }
        }
      })
    }
  }
</script>


<style lang="css">
	
</style>