<template>
	<div class="User">
		<div class="header">
			<ul>
				<li class="return" @click="returnClick()">
					<span class="iconfont">&#xe682;</span>
					<a>返回</a>
				</li>
				<li>
					<router-link to="/">编辑</router-link>
					<span class="iconfont news">&#xe6f1;</span>
				</li>
			</ul>
		</div>
		
		<div class="userNews">
			<div class="information">
				<div class="headPic">
					<img src="" alt="" />
					<router-link class="nickname" to="/login">登录</router-link>
				</div>
			</div>	
			<div class="order">
				<ul>
					<li>
						<span class="iconfont">&#xe60a;</span>
						<router-link to="/">我的订单</router-link>
					</li>
					<li>
						<router-link to="/">查看全部订单</router-link>
						<span class="iconfont news">&#xe609;</span>
					</li>
				</ul>
			</div>
		</div>
		
		<div class="order management">
			<ul>
				<li>
					<router-link to="/">
						<span class="iconfont">&#xe6c2;</span>
						<p>待付款</p>
					</router-link>
				</li>
				<li>
					<router-link to="/">
						<span class="iconfont">&#xe627;</span>
						<p>待发货</p>
					</router-link>
				</li>
				<li>
					<router-link to="/">
						<span class="iconfont">&#xe789;</span>
						<p>退货/退款</p>
					</router-link>	
				</li>
				<li>
					<router-link to="/">
						<span class="iconfont">&#xe61f;</span>
						<p>待评价</p>
					</router-link>	
				</li>
			</ul>
		</div>
		
		<div class="details">
			<ul>
				<li class="address">
					<ul>
						<li>
							<span class="iconfont">&#xe62f;</span>
							<a>我的地址</a>
						</li>
						<li>
							<router-link to="/">管理地址</router-link>
							<span class="iconfont news">&#xe609;</span>
						</li>
					</ul>
				</li>
				<li class="footprint">
					<ul>
						<li>
							<span class="iconfont">&#xe630;</span>
							<a>我的足迹</a>
						</li>
						<li>
							<router-link to="/">199</router-link>
							<span class="iconfont news">&#xe609;</span>
						</li>
					</ul>
				</li>
				<li class="collection">
					<ul>
						<li>
							<span class="iconfont">&#xe62a;</span>
							<a>我的收藏</a>
						</li>
						<li>
							<router-link to="/">6</router-link>
							<span class="iconfont news">&#xe609;</span>
						</li>
					</ul>
				</li>
				<li class="follow">
					<ul>
						<li>
							<span class="iconfont">&#xe694;</span>
							<a>我的关注</a>
						</li>
						<li>
							<router-link to="/">29</router-link>
							<span class="iconfont news">&#xe609;</span>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		
		
		
		
		<MenuBar></MenuBar>
	</div>
</template>

<script>
	export default {
		name:"User",
		methods:{
			returnClick(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
.User{
	width: 100%;
	height: 100%;
	background: #f8f0df;
}
.header{
	width: 100%;
	height: 90px;
	background: #f4d000;
	line-height: 90px;
}
.header ul{
	display: flex;
	justify-content: space-around;
}
.header li{
	float: left;
	font-size: 32px;
}
.header li:first-child{
	margin-left: -190px;
}
.header li:last-child{
	margin-right: -170px;
}
.header li .iconfont{
	font-size:35px;
}
.header li .news{
	margin-left: 30px;
}
.userNews{
	width: 100%;
}
.userNews .information{
	height: 376px;
	background: #fff;
}
.userNews .headPic{
	width: 900px;
	height: 376px;
	margin-left: -70px;
	background: #f4d000;
	border-bottom-left-radius: 50%;
	border-bottom-right-radius: 50%;
	position: relative;
}
.userNews .headPic img{
	width: 200px;
	height: 200px;
	background: #fff;
	border-radius: 50%;
	position: absolute;
	left: 40%;
	top: 20px;
}
.userNews .headPic .nickname{
	position: absolute;
	left: 49%;
	top: 240px;
	font-size: 32px;
}
.userNews .order{
	width:100%;
	height: 51px;
	background: #fff;
}
.userNews .order ul{
	display: flex;
	justify-content: space-around;
}
.userNews .order li{
	float:left;
	font-size: 24px;
}
.userNews .order li:first-child{
	margin-left: -150px;
}
.userNews .order li:last-child{
	margin-right: -150px;
}
.userNews .order li .iconfont{
	font-size: 30px;
}
.management{
	width: 100%;
	height: 116px;
	background: #fff;
	margin: 49px 0;
}
.management ul{
	display: flex;
	justify-content: space-around;
}
.management li{
	margin-top: 14px;
	font-size: 24px;
	text-align: center;
}
.management .iconfont{
	font-size: 68px;
}
.details{
	width: 100%;
	height: 246px;
	background: #fff;
}
.details li{
	height: 58px;
	font-size: 24px;
	border-bottom:1px solid #f1f1f1;
}
.details li ul{
	display: flex;
	justify-content: space-around;
}

.details .address li{
	margin-top: 20px;
}
.details .address li:first-child{
	margin-left: -160px;
}
.details .address li:last-child{
	margin-right: -158px;
}
.details .address .iconfont{
	font-size: 32px;
	margin-right: 10px;
}
.details .footprint li{
	margin-top: 20px;
}
.details .footprint li:first-child{
	margin-left: -186px;
}
.details .footprint li:last-child{
	margin-right: -185px;
}
.details .footprint .iconfont{
	font-size: 32px;
	margin-right: 10px;
}
.details .collection li{
	margin-top: 20px;
}
.details .collection li:first-child{
	margin-left: -200px;
}
.details .collection li:last-child{
	margin-right: -200px;
}
.details .collection .iconfont{
	font-size: 32px;
	margin-right: 10px;
}
.details .follow li{
	margin-top: 20px;
}
.details .follow li:first-child{
	margin-left: -190px;
}
.details .follow li:last-child{
	margin-right: -190px;
}
.details .follow .iconfont{
	font-size: 32px;
	margin-right: 10px;
}
</style>