<template>
	<div class="Home">
		<Search class-="Search"></Search>
		<banner class="banner"></banner>
		<navigation class="navigation"></navigation>
		<proList></proList>
		
		
		<MenuBar></MenuBar>
	</div>
</template>

<script>
	import Search from '../.././components/Search.vue'
	import banner from './components/banner.vue'
	import navigation from './components/navigation.vue'
	import proList from './components/proList.vue'
	export default {
		name:"Home",
		components:{
			Search,
			banner,
			navigation,
			proList
		}
	}
</script>

<style scoped>
.Home{
	width:100%;
	height: 100%;
	/*padding-bottom: 88px;*/
	background: #eee6cd;
}

</style>