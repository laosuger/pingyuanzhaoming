<template>
	<div class="SearchPage">
		<div class="home">
			<div class="left" @click="returnClick()">
				<span class="iconfont">&#xe682;</span>
				<a>返回</a>
			</div>
			<div class="search">
				<form>
					<input type="text" class="text" placeholder="要最贵的">
					<span class="iconfont btn">&#xe617;</span>
				</form>
			</div>
			<div class="right">
				<a href="###">取消</a>
			</div>
		</div>
		<div class="record">
			<div class="hot-search">
				<p>热门搜索</p>
				<ul>
					<li v-for="item of list">{{item}}</li>
				</ul>
			</div>
			
			<div class="search-history">
				<p>搜索历史</p>
				<ul>
					<li v-for="item of proList">{{item}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import Search from '.././components/Search.vue'
	export default {
		name:"SearchPage",
		components:{
			Search
		},
		data(){
			return{
				list:["台灯","射灯","高端大气上档次","天花灯","日光灯","低调奢华有内涵","砖石美金","豪宅装饰","没钱也能买得起"],
				proList:["钢铁是怎么炼成的","日光灯有多亮","壁灯"]
			}
		},
		methods:{
			returnClick(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
.SearchPage{
	width:750px;
	padding-bottom: 100%;
	background: #f6efdb;
}
.SearchPage .home{
	position: relative;
	width:750px;
	height: 88px;
	line-height: 88px;
	background: #f4d000;
}
.SearchPage .left{
	position: absolute;
	left: 15px;
	top: -5px;
	font-size: 32px;
}
.SearchPage .left span{
	font-size: 32px;
}
.SearchPage form{
	width: 436px;
	height: 60px;
	border-radius: 6px;
	overflow: hidden;
	display: block;
	margin: 0 auto;
	padding: 12px;
}
.SearchPage form .text{
	width: 326px;
	height: 60px;
	line-height: 60px;
	float: left;
	padding-left: 20px;
	border-right: 1px solid #e3e3e3 ;
	font-size: 32px;
}
.SearchPage .text a{
	color: #E3E3E3;
}
.SearchPage form .iconfont{
	color: #757575;
}
.SearchPage form .btn{
	width: 88px;
	height: inherit;
	float: left;
	background: #FFFFFF;
	text-align: center;
	line-height: 60px;
	font-size: 50px;
}
.SearchPage .home .right{
	height: 88px;
	position: absolute;
	left: 640px;
	top: 0;
	font-size: 32px;
}
.SearchPage .record{
	width:750px;
	padding-bottom: 100%;
	background: #f6efdb;
}
.SearchPage .record .hot-search{
	height: 299px;
}
.SearchPage .record p{
	font-size: 24px;
	margin: 22px 0 28px 42px;
}
.SearchPage .record ul{
	height: 40px;
}
.SearchPage .record li{
	line-height: 40px;
	font-size: 24px;
	float:left;
	margin: 0 20px 35px 30px;
	background: #FFFFFF;
	border-radius: 13px;
	padding: 0 38px;
}
</style>