<template>
	<div class="Header">
		<slot name="left"></slot>
		<slot name="center"></slot>
		<slot name="right"></slot>
	</div>
</template>
<script>
	export default {
		name:"login"
	}
</script>
<style scoped>
.Header{
	height: 94px;
	background: #f4d000;
	display: flex;
	justify-content: space-between;
	padding: 0 35px;
	width: 100%;
	box-sizing: border-box;
	align-items: center;
	font-size:32px;
	letter-spacing: 2px;
}
.Header .iconfont{
	font-size: 32px;
}
.Header h1{
	font-size: 32px;
}
</style>
