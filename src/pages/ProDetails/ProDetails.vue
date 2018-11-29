<template>
	<div class="ProDetails" ref="ProDetails">
		<div class="header">
			<ul>
				<li class="return" @click="returnClick()">
					<span class="iconfont">&#xe682;</span>
					<a>返回</a>
				</li>
				<li>
					<a href="###" class="href">商品详情</a>
				</li>
				<li class="shopCar">
					<router-link to="/ShopCar">
						<span class="iconfont btn">&#xe60c;</span>
					</router-link>
				</li>
			</ul>
		</div>
		
		<div class="main">
			<banner class="banner"></banner>
			
			<div class="title">
				<h3>品源 客厅灯简约现代书房卧室灯大气客厅灯饰LED吸顶灯韩式灯具 </h3>
				<a href="##">快递： 免运费</a>
				<a href="##">月销量5678笔</a>
				<a href="##">广东中山</a>
				<div class="old">
					<a href="###">专柜价</a>
					<span class="old_price">￥5999</span>
				</div>
				<div class="new">
					<a href="###">促销价</a>
					<span class="new_price">￥2999</span>
				</div>
			</div>
			
			<div class="details">
				<img src="../../images/pro_details/pro_details_02.jpg"/>
			</div>
			
		</div>
		
		<div class="mask" v-show="bool">
			<div class="bg"></div>
			<order class="order" :value="title" @close="closeMask()" @off="offClick()"></order>
		</div>
		
		<div class="alert" v-show="boolB">添加成功</div>
		
		<div class="buyMenu">
			<div class="menu">
				<ul>
					<li>
						<router-link to="/***">
							<span class="iconfont">&#xe650;</span>
							<span class="text">店铺</span>
						</router-link>
					</li>
					<li>
						<router-link to="/***">
							<span class="iconfont">&#xe7c6;</span>
							<span class="text">客服</span>
						</router-link>
					</li>
					<li>
						<router-link to="" @click="handleClick()">
							<span class="iconfont">&#xe616;</span>
							<span class="text">收藏</span>
						</router-link>
					</li>
				</ul>
			</div>
			<button class="shopcar" @click="showMask()">加入购物车</button>
			<button class="buy" @click="showMask()">立即购买</button>
		</div>
		
	</div>
</template>

<script>
	import banner from './components/banner'
	import order from './components/order'
	export default {
		name:"ProDetails",
		components:{
			banner,
			order
		},
		data(){
			return{
				bool:false,
				boolB:false,
				title:"品源 客厅灯简约现代书房卧室灯大气客厅灯饰LED吸顶灯韩式灯具"
			}
		},
		methods:{
			returnClick(){
				this.$router.go(-1)
			},
			showMask(){
				this.bool = true
				this.$refs.ProDetails.className = 'ProDetailsShow'
			},
			closeMask(){
				this.bool = false
				this.$refs.ProDetails.className = ''
				this.boolB = true
				var that = this
				setTimeout(function(){
					that.boolB = false
				},1000)
			},
			offClick(){
				this.bool = false
			}
		}
	}
</script>

<style scoped>
.ProDetails{
	width: 100%;
	height: 100%;
	background: #f4edd9;
	position: relative;
}
.ProDetailsShow{
	height: 1238px;
	overflow: hidden;
	position: relative;
}

.header{
	width: 100%;
	height: 88px;
	line-height: 80px;
	background: #f4d000;
	position: fixed;
	z-index: 998;
	/*margin-top: -88px;*/
}
.header ul{
	display: flex;
	justify-content: space-around;
}
.header li{
	display: block;
	font-size: 32px;
}
.header .return{
	margin-left: -70px;
	
}
.header .return span{
	font-size: 32px;
}
.header .shopCar span{
	font-size: 38px;
	margin-right: -40px;
}
.main{
	width: 100%;
	/*margin-bottom: 88px;*/
}
.main .banner{
	overflow: hidden;
	position: absolute;
	z-index: 2;
	margin-top: 88px;
}
.main .title{
	width: 732px;
	height: 226px;
	background: #fff;
	border-radius: 4px;
	font-size: 24px;
	margin-left: 10px;
	position: absolute;
	z-index: 1;
	margin-top: 673px;
}
.main .title h3{
	font-size: 24px;
	color: #000000;
	margin-left: 12px;
	padding: 12px 0;
}
.main .title a{
	color: #a3a3a3;
	display: inline-block;
	margin-left: 10%;
	margin-bottom: 40px;
	margin-top: 6px;
}
.main .title .old a{
	margin-right: 25px;
}
.main .title .old span{
	font-size: 30px;
	color: #a3a3a3;
	text-decoration: line-through;
}
.main .title .new{
	margin-top: -15px;
}
.main .title .new a{
	margin-right: 25px;
}
.main .title .new span{
	font-size: 36px;
	color: #ff3030;
}
.main .details{
	margin-bottom: 100px;
	position: absolute;
	z-index: 1;
	margin-top: 906px;
}
.main .details img{
	width:100%;
	height: 6003px;
	margin-top: ;
}

/* 遮罩层 */
.mask{
	height: 1238px;
	width: 100%;
	position: relative;
	z-index: 2;
}
.mask .bg{
	width: inherit;
	height: inherit;
	background: #000;
	opacity: 0.5;
}
.mask .order{
	width: inherit;
	background: #fff;
	position: absolute;
	bottom: 0;
	top:50%;
}
.alert{
	width: 240px;
	height: 80px;
	border-radius: 10px;
	background: #000;
	color: #fff;
	opacity: 0.8;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
	z-index: 10;
	text-align: center;
	line-height: 80px;
	font-size: 26px;
}

.buyMenu{
	height: 98px;
	width: 100%;
	position: fixed;
	bottom: 0;
	display: flex;
	justify-content: flex-end;
	background: #fff;
	z-index: 999;
}
.buyMenu .menu ul{
	width: 402px;
	height: inherit;
	display: flex;
	justify-content: space-around;
}
.buyMenu .menu ul li{
	width: 20%;
	height: inherit;
}
.buyMenu .menu ul li a{
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.buyMenu .menu ul li a .iconfont{
	margin-top: 10px;
	font-size: 38px;
}
.buyMenu .menu ul li a .text{
	margin-top: 5px;
	font-size: 24px;
}
.buyMenu .menu ul li a span{
	display: block;
	margin: 4px 0;
}
.buyMenu .menu ul li .router-link-exact-active{
	background: #FFFFFF;
}
.buyMenu button{
	width: 174px;
	height: 98px;
}
.buyMenu .shopcar{
	font-size: 24px;
	background: #ffd545;
	color: #000000;
}
.buyMenu .buy{
	font-size: 24px;
	background: #eb2222;
	color: #ffffff;
}

</style>