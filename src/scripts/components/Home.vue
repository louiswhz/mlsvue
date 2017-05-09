<template>
	<div class="m-home">
		<header class="yo-header">
			<h2 class="title" >注册</h2>
			<span class="regret yo-ico"  @click="back">&#xf07d;</span>
			
		</header>
			<section>
			<h3 class="zhanghao">国家与地区</h3>
			<input type="button"  value="中国 +86" class="shouji1"/>
			<h3 class="zhanghao">你的手机号码是？</h3>
			<input type="text"  placeholder="输入手机号" class="shouji"/>
			<h3 class="zhanghao">验证码			
			</h3>
			<input type="text"  placeholder="输入验证码" class="shouji"/>
			<span class="yzm">获取验证码</span>
			<input type="button" class="zhuce" value="注册"/>
		</section>
	</div>
</template>

<script>
 let vm = {
  

  methods: {
    back: function () {
      this.$router.go(-1)
    }
  },

 
}
window.vm = vm
export default vm
</script>
