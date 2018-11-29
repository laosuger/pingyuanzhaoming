<template>
	<div class="banner">
		<swiper :options="swiperOption" ref="mySwiper">

			<!-- slides -->
			<swiper-slide v-for="item of imgList" :key="item.id">
				<img :src="item.url" class="image-item">
			</swiper-slide>

			<!-- Optional controls -->
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>
<script>
	import 'swiper/dist/css/swiper.css'
	import {swiper,swiperSlide} from 'vue-awesome-swiper'
	export default {
		name: "banner",
		data() {
			return {
				imgList: [{
					id: 1,
					url: require('@/images/pro_details/pro_details_01.jpg')
				}, {
					id: 2,
					url: require('@/images/pro_details/pro_details_01.jpg')
				}, {
					id: 3,
					url: require('@/images/pro_details/pro_details_01.jpg')
				}],
				swiperOption: {
					pagination: {
						el: '.swiper-pagination'
					},
// 					autoplay:{
// 						stopOnLastSlide:true,
// 						delay:3000,
// 						disableOnInteraction: false
// 					},
					loop:true
				},
				swiperSlides: [1, 2, 3]
			}
		},
		components: {
			swiper,
			swiperSlide
		}
	}
</script>
<style scoped>
	.banner {
		width: 100%;
		height: 585px;
	}

	.banner swiper {}

	.banner .swiper-slide {}

	.banner .swiper-slide .image-item {
		width: 580px;
		height: 580px;
		display: block;
		margin: 0 auto;
	}
	.banner >>> .swiper-pagination-bullet{
		width: 20px;
		height: 22px;
		display: inline-block;
		background: #333333;
		position: relative;
		bottom: 35px;
		opacity: 0.5;
		margin: 0 13px;
	}
	.banner >>> .swiper-pagination-bullet-active{
		background: #ff9900;
	}
</style>
