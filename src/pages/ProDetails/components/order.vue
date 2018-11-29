<template>
	<div class="order">
		<div class="head">
			<div class="image">
				<img :src="imgUrl">
			</div>
			<div class="message">
				<p class="price">{{price}}</p>
				<p class="num">库存<span>523</span>件</p>
				<p class="type">请选择商品属性</p>
			</div>
			
			<div class="close" @click="closeClick()">
				<img src="@/images/pro_details/close.png">
			</div>
		</div>
		
		<div class="buyNums">
			<label>购买数量</label>
			<div class="form">
				<button class="reduce" @click="reduce()">-</button>
				<input 
					type="text" 
					class="text" 
					v-model.number="number"
					@input="handleInput()"
				>
				<button class="add" @click="add()">+</button>
			</div>
		</div>
		
		<!--<div class="prolist">
			<span>大小</span>
			<ul>
				<li 
					v-for="(item,index) of litre"
					:key="index"
					:class="{on:index === active}"
					@click="hdClick(index)"
				>{{item}}</li>
			</ul>
		</div>-->

		
		<button class="submit" @click="sub()">确定</button>
	</div>
</template>
<script>
	export default {
		name:"order",
		props:["value"],
		data(){
			return{
//				litre:["","","",""],
				number:1,
				imgUrl:require("@/images/pro_details/pro_details_01.jpg"),
				price:2999,
				title:this.value,
				arr:[],
				proItems:{},
				id:1,
				active:0
			}
		},
		methods:{
			handleInput(){
				var rule = /^[0-9]*[1-9][0-9]*$/
				// console.log(rule.test(this.number))
				if(!rule.test(this.number)){
					this.number = 1
				}
			},
			
			add(){
				this.number++
			},
			reduce(){
				if(this.number>1){
					this.number--
				}else{
					this.number = 1
				}
			},
			sub(){
				this.proItems = {
					"id":this.id,
					"checked":false,
					"ImgUrl":this.imgUrl,
					"ProTitle":this.title,
					"ProNums":this.number,
					"PorPrice":this.price
				}
				this.arr.push(this.proItems)
				localStorage.setItem("proItems",JSON.stringify(this.arr))
				this.$emit('close')
				this.id++
			},
			closeClick(){
				this.$emit('off')
			},
			hdClick(i){
				this.active = i
			}
		},
		mounted(){
			if(localStorage.getItem("proItems")){
				this.arr = JSON.parse(localStorage.getItem("proItems"))
			}
		}
	}
</script>
<style scoped>
.head{
	display: flex;
	width: 100%;
	padding-left: 40px;
	padding-right: 28px;
	justify-content: space-between;
	box-sizing: border-box;
	font-size: 28px;
}
.head .image{
	width: 205px;
	height: 205px;
	border: 7px solid #dddddd;
	border-radius: 10px;
	overflow: hidden;
	margin-top: -40px;
}
.head .image img{
	width: 100%;
	height: 100%;
	display: block;
}
.head .message{
	width: 300px;
	margin-top: 57px;
	line-height: 33px;
}
.head .message .price{
	color: #eb2222;
	font-size: 28px;
}
.head .close{
	width: 56px;
	height: 56px;
	margin-top: 30px;
}
.head .close img{
	width: 100%;
	height: 100%;
}


.buyNums{
	height: 100px;
	display: flex;
	align-items: center;
	width: 100%;
	padding: 0 40px;
	box-sizing: border-box;
	justify-content: space-between;
}
.buyNums label{
	font-size: 32px;
}
.buyNums .form{
	width: 200px;
	height: 50px;
}
.buyNums .form button{
	width: 50px;
	height: 50px;
	background: #999999;
	color: #fff;
}
.buyNums .form .text{
	width: 100px;
	height: 44px;
	border-top: 3px solid #dddddd;
	border-bottom: 3px solid #dddddd;
	text-align: center;
	line-height: 44px;
}
.prolist{
	width: 100%;
	padding: 0 33px;
	box-sizing: border-box;
	margin: 22px;
}
.prolist span{
	display: block;
	font-size: 30px;
	margin-left: 10px;
	margin-bottom: 20px;
}
.prolist ul{
	display: flex;
	flex-wrap: wrap;
}
.prolist ul li{
	height: 45px;
	padding: 0 44px;
	background: #dddddd;
	display: inline-block;
	text-align: center;
	line-height: 45px;
	border-radius: 10px;
	color: #999999;
	margin: 0 10px;
}
.prolist ul .on{
	background: #ff9900;
	color: #fff;
}
.submit{
	width: 175px;
	height: 45px;
	font-size: 28px;
	background: #ff9900;
	color: #000;
	margin: 0 auto;
	margin-top: 50px;
	display: block;
	border-radius: 10px;
}
</style>
