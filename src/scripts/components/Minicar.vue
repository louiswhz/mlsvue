<template lang="html">
	<div class="m_car">
		
	<div class="car_header">购物车（1）</div>
	
	<div class="section">

	  <div class="car_tis">
	    <p>温馨提示：现在登录，你可以同步电脑和手机购物车中的商品.</p><span>登录</span>
	  </div>
	  
	  <div class="car_go">
	  	 <div class="car_lq">
	  	 	<div class="lq_xz"><i class="yo-ico">&#xe6bf;</i><b>美丽优选</b></div><span>领券</span>
	  	 </div>
	  	
	  </div>
	  
	  
	  <div class="car_love">
	  	
		<h3>猜你喜欢高升</h3>
		<div class="love_list">
		  	<div class="beau_girl" v-for="(item, index) in list">
		  		<div class="girl_tu">
		  			<img :src="item.image"/>
		  		</div>
		  		<p v-html="item.title"></p>
		  		<div class="girl_price">
		  			<span class="price_span">￥<b v-html="item.price"></b></span> 
		  			<span><i class="yo-ico">&#xe622;</i>
		  				<span v-html="item.collectNum"></span>
		  			</span>
		  		</div>	 		
		  	</div>
	  	</div>	
	  	<div class="car_footer">
	  		已经到底了
	  	</div>
	  </div>
	  
  </div>
       
      
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
	          <router-link to="/board"><i class="yo-ico">&#xe729;</i><b>首页</b></router-link>
	          <router-link to="/classify"><i class="yo-ico">&#xe612;</i><b>分类</b></router-link>
	          <router-link to="/minicar" active-class='active'><i class="yo-ico">&#xe678;</i><b>购物车</b></router-link>
	          <router-link to="/mine"><i class="yo-ico">&#xe629;</i><b>我</b></router-link>
	       </div>
	    </div>
	    			
				
    </div>
</template>

<script>
	import Vue from 'vue'
	import utilAxios from '../utils/axios'
	  export default {
	    data(){
	      return {
	        list: [],
	        title: ''
	      }
        },
        mounted: function () {
	      let that = this
	      utilAxios.get({
	        url: 'api/goodsunit/aj/wall?offset=0&frame=0&trace=0&limit=20&endId=0&id=6265',
	        method: 'get',
	        callback: function (res) {
//	        	console.log(res.data.data.rows)
	          that.title = res.data.data.rows
	          that.list = that.list.concat(res.data.data.rows)
	        }
	      })
	    }
	  }

</script>

<style lang="css">
	
	
</style>