<template>
	<div class="Search">
		<div class="scan">
			<span class="iconfont">&#xe6b2;</span>
		</div>
		<form>
			<input type="text" class="text" @focus="handleFocus()">
			<span class="iconfont btn">&#xe617;</span>
		</form>
		<div class="information">
			<span class="iconfont">&#xe6f1;</span>
		</div>
	</div>
</template>

<script>
	export default {
		name:"Search",
		methods:{
			handleFocus(){
				this.$router.push('SearchPage')
			}
		}
	} 
</script>

<style scoped>
.Search{
	width: 100%;
	height: 88px;
	line-height: 88px;
	background: #f4d000;
	position: fixed;
	z-index: 999;
	margin-top: -88px;
}
.Search .scan{
	position: absolute;
	left: 30px;
	top: -5px;
}
.Search .scan span{
	line-height: 60px;
	font-size: 50px;
}
.Search form{
	width: 435px;
	height: 60px;
	border-radius: 6px;
	overflow: hidden;
	display: block;
	margin: 0 auto;
	padding: 12px;
}
.Search form .text{
	width: 326px;
	height: inherit;
	float: left;
	padding-left: 20px;
	border-right: 1px solid #e3e3e3 ;
	font-size: 24px;
}
.Search form .iconfont{
	color: #757575;
}
.Search form .btn{
	width: 88px;
	height: inherit;
	float: left;
	background: #FFFFFF;
	text-align: center;
	line-height: 60px;
	font-size: 50px;
}
.Search .information{
	position: absolute;
	top: -5px;
	left: 655px;
}
.Search .information span{
	font-size: 38px;
}
</style>