<template>
	<div class="navigation">
		<ul>
			<li>
				<router-link to="/">
					<img src="../../../images/nav/nav01.jpg"/>
					<p class="text">限时抢购</p>
				</router-link>
			</li>
			<li>
				<router-link to="/">
					<img src="../../../images/nav/nav02.jpg"/>
					<p class="text">会员中心</p>
				</router-link>
			</li>
			<li>
				<router-link to="/">
					<img src="../../../images/nav/nav03.jpg"/>
					<p class="text">热门商品</p>
				</router-link>
			</li>
			<li>
				<router-link to="/">
					<img src="../../../images/nav/nav04.jpg"/>
					<p class="text">领金币</p>
				</router-link>
			</li>
			<li>
				<router-link to="/">
					<img src="../../../images/nav/nav05.jpg"/>
					<p class="text">新品上市</p>
				</router-link>
			</li>
			<li>
				<router-link to="/">
					<img src="../../../images/nav/nav06.jpg"/>
					<p class="text">今日团购</p>
				</router-link>
			</li>
			<li>
				<router-link to="/">
					<img src="../../../images/nav/nav07.jpg"/>
					<p class="text">门店活动</p>
				</router-link>
			</li>
			<li>
				<router-link to="/">
					<img src="../../../images/nav/nav08.jpg"/>
					<p class="text">浏览足迹</p>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"navigation"
	}
</script>

<style scoped>
	.navigation{
		width: 100%;
		height: 444px;
	}
	.navigation ul{
		margin: 36px 0 0 10px;
	}
	.navigation li{
		float:left;
		margin-right: 11px;
	}
	.navigation li img{
		width: 174px;
		height: 166px;
		border-radius: 15px;
	}
	.navigation li p{
		line-height: 40px;
		font-size: 28px;
		text-align: center;
	}
</style>