<template>
	<div class="proList">
		<div class="first-box">
			<div class="title">
				<h2>限时抢购</h2>
				<div class="dataTime">
					<p>当前场次还剩 
						<span>00</span>
						<a href="##"> : </a>
						<span> 59</span>
						<a href="##"> : </a>
						<span>33</span> 结束</p>
				</div>
			</div>
			<ul>
				<li class="picture">
					<router-link to="/ProDetails">
						<div class="image">
							<img src="@/images/homedeng/deng01.jpg">
						</div>
						<p>日风摇篮式天花灯</p>
					</router-link>
				</li>
				<li class="photo">
					<router-link to="/ProDetails">
						<div class="image">
							<img src="@/images/homedeng/deng02.jpg">
						</div>
						<p>日风摇篮式天花灯 </p>
					</router-link>	
				</li>
				<li class="tupian">
					<router-link to="/ProDetails">
						<div class="image">
							<img src="@/images/homedeng/deng03.jpg">
						</div>
						<p>日风摇篮式天花灯 </p>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:"proList"
	}
</script>

<style scoped>
.proList{
	width: 100%;
	height: 100%;
	background: #eee6cd;
}
.proList .first-box{
	height: 60px;
	line-height: 60px;
	margin: 0 11px;
	background: #f1db66;
	display: block;
}
.proList .first-box .title{
	overflow: hidden;
}
.proList .first-box .title h2{
	font-size: 32px;
	padding-left: 6px;
	color: #000000;
	float: left;
}
.proList .first-box .title .dataTime{
	float: right;
	font-size: 24px;
	color: #333333;
}
.proList .first-box .title .dataTime a{
	color: #ff0000;
}
.proList .first-box .title .dataTime span{
	width: 35px;
	height: 32px;
	line-height: 32px;
	background: #FFFFFF;
	color: #ff0000;
}
.proList .first-box ul{
	overflow: hidden;
	/*height: 841px;*/
	flex-wrap: wrap;
	display: block;
	margin-bottom: 100%;
}
.proList .first-box li{
	margin-top: 10px;
	/*border: 1px solid #000000;*/
	float: left;
	position: relative; 
	z-index: 0;
}
.proList .first-box .picture .image img{
	width: 100%;
	height: 413px;
}
.proList .first-box .picture p{
	left: 38%;
}
.proList .first-box .photo .image img{
	width: 400px;
	height: 413px;
}
.proList .first-box .photo p{
	left: 25%;
}
.proList .first-box .tupian .image img{
	width: 325px;
	height: 413px;
}
.proList .first-box .tupian p{
	left: 20%;
}
.proList .first-box li p{
	position: absolute;
	font-size: 24px;
	color: #514e45;
	z-index: 11;
	bottom: 10px;
}
</style>