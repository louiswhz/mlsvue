<template lang="html">
	<div class="toy" >
		<!--<header class="yo-header yo-header-a">
		    <span class="regret yo-ico">&#xf07e;</span>
		    <span class="regret left yo-ico" >&#xf07d;</span>
	   </header>
	   <section>
	   	 
	   	  <div class="buy_tu">
	   	  	 <img :src=""/>
	   	  </div>
	   	  
	   	  <div class="buy_box">
	   	  		   	  
	   	  <div class="above">诶诶或或诶诶或或诶诶或或诶诶或或诶诶或或诶诶或或诶诶或或诶诶或或</div>
	   	  <div class="below">诶诶或或诶诶或或诶诶或或诶诶或或诶诶或或诶诶或或诶诶或或诶诶或或</div>
	   	  <div class="buy_price">
	   	  	<span class="price_left">￥<b>75.00</b></span>
	   	  	<span class="price_right">￥<b>100.00</b></span>
	   	  </div>
	   	  <div class="buy_num">
	   	  	<span>销量<b>23</b></span>
	   	  	<span>收藏<b>132</b>人</span>
	   	  	<span>默认快递</span>
	   	  </div>
	   	  </div>
	   </section>-->
   </div>
</template>

<script>
	import Vue from 'vue'
	import utilAxios from '../utils/axios'
	export default {
		data() {
	      return {
	        title: '',
//	        info: null
	      }
	    },
     mounted: function () {
      let that = this
		console.log(this.$route.params.id)

      utilAxios.get({
        url: 'api/detail/mls/v1/h5?iid='  + this.$route.params.id+'&_ajax=1&cparam=',
        method: 'get',
        callback: function (res) {
        	console.log(res)
//        that.title = res.data.data.rows  
          that.info = res.data.data
        }
      })
    }
  }
</script>


<style lang="css">
	
</style>