<template lang="html">
	<div class="toy">
		<header class="header">
			<span class="yo-ico" @click="back">&#xf07d;</span>
		    <span><i class="yo-ico">&#xf07e;</i><i class="yo-ico right">&#xe602;</i></span>		    
	   </header>
	   
       <section v-if="info">
	   	 
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
   </div>
</template>

<script>
	import Vue from 'vue'
	import utilAxios from '../utils/axios'
	export default {
		data() {
	      return {
	        info: null
	      }
	    },
	    
	    methods:{
	    	back: function() {
	        this.$router.go(-1)
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