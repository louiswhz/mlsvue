<template>
	<div class="m-mine">
		<header class="yo-header">
			<h2 class="title">登录</h2>
			<span class="regret yo-ico" @click="back">&#xf07d;</span>
			<span class="affirm yo-ico" >&#xf07e;</span>
		</header>
		<section>
			<h3 class="zhanghao">美丽说账号</h3>
			<input type="text"  placeholder="昵称/邮箱/手机" class="shouji"/>
			<h3 class="zhanghao">密码</h3>
			<input type="text"  placeholder="输入密码" class="shouji"/>
			<h3 class="zhanghao">翻转至正确方向
				<span>换一组</span>
			</h3>
			<ul class="pic">
				<li class="pic1"><img src="../../../images/1.jpg"/></li>
				<li><img src="../../../images/2.jpg"></li>
				<li><img src="../../../images/3.jpg"></li>
				<li class="pic2"><img src="../../../images/4.jpg"></li>
			</ul>
			<input type="button" class="denglu" value="登录"/>
			<div class="zhuce">
				<span class="haiwai"><router-link to="/Home">海外手机</router-link></span>
				<span class="mianmi"><router-link to="/Home">免密登录</router-link></span>
				<span class="zhucezh"> <router-link to="/Home">注册账号</router-link></span>
			</div>
			<div class="xian">
			
			其他登录方式
			
			</div>
			<ul class="pic111">
				<li class="pic11"><img src="../../../images/images/4.jpg"/></li>
				<li><img src="../../../images/images/5.jpg"></li>
				
				<li class="pic22"><img src="../../../images/images/6.jpg"></li>
			</ul>
		</section>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
 let vm = {
  

  methods: {
    back: function () {
      this.$router.go(-1)
    },
    
  },
//mounted: function () {
//  // console.log(0);
//  let that =this
//  
//  
//	 Toast({
//	  message: '操作成功',
//	  iconClass: 'icon icon-success'
//	});
// },

 
}
window.vm = vm
export default vm



	

</script>
