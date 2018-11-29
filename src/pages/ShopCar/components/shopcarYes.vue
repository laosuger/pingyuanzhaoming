<template>
	<div class="shopcarYes">
		<ul ref="aaa">
			<li v-for="(item,index) of proList" :key="index">
				<v-touch 
					@swipeleft="swipeleftFn(index)" 
					@swiperight="swiperightFn(index)" 
					class="vTouch"
				>
					<div class="main" ref="main">
						<div class="info">
							<input 
								type="checkbox" 
								:class="item.checked === true ? 'active' : null "
								:checked="item.checked"
								@click="item.cheched = !item.checked"
							>
							<router-link to="/ProDetails">
								<img :src="item.ImgUrl">
							</router-link>
							
							<div class="mes">
								<router-link to="/ProDetails">
									<h3>{{item.ProTitle}}</h3>
								</router-link>
								
								<div class="num">
									<p class="price">{{item.PorPrice}}</p>
									
									<button 
										class="reduice"
										@click="item.ProNums <= 1 ? item.ProNums = 1 : item.ProNums--"
									>-</button>
									<input 
										type="text" 
										class="text" 
										v-model="item.ProNums"
									>
									<button 
										class="add"
										@click="item.ProNums++"
									>+</button>
								</div>
							</div>
						</div>
						
						<div class="remove" @click="remove(index)">删除</div>
					</div>
				</v-touch>
			</li>
		</ul>
		
		
		<div class="computed">
			<div class="btn">
				<label @click="allChecked()">
					<input 
						type="checkbox"
					>
					<span>全选</span>
				</label>
				
				<label>
					<span>删除</span>
				</label>
			</div>
			
			<div class="total">
				<p>
					合计:
					<span>{{allTotal}}</span>
				</p>
				<p>(已包含运费)</p>
			</div>
			<router-link to="/Payment">
				<div class="accounts">
					结算
				</div>
			</router-link>
		</div>
	</div>
</template>
<script>
	export default {
		name:"shopcarYes",
		data(){
			return{
				proList:[]
				
			}
		},
		methods:{
			swipeleftFn(index){
				this.$refs.main[index].className = "left"
			},
			swiperightFn(index){
				this.$refs.main[index].className = 'main'
			},
			allChecked(){
				var that = this
				this.proList.forEach(function(item,i){
					that.proList[i].checked = true
				})
			},
			remove(i){
				this.proList.splice(i,1)
				localStorage.setItem("proItems",JSON.stringify(this.proList))
			}
		},
		mounted(){
			if(localStorage.getItem("proItems")){
				var pro = JSON.parse(localStorage.getItem("proItems"))
				this.proList = pro
			}else{
				this.$emit("proItemsNo")
			}
		},
		computed:{
			allTotal(){
				var total = 0
				var that = this
				this.proList.forEach(function(item,i){
					if(that.proList[i].checked){
						total += that.proList[i].PorPrice * that.proList[i].ProNums
					}
					
				})
				return total
			},
			isChecked(){
				var bool = true
				this.proList.forEach(function(item){
					if(item.checked === false){
						bool = false
					}
				})
				return bool
			}
		}
	}
</script>
<style scoped>
.shopcarYes{
	width: 100%;
	height: 100%;
	background: #f4edd9;
	/*padding-bottom: 220px;*/
}
.shopcarYes li{
	height: 273px;
	overflow: hidden;
}

.shopcarYes li .main{
	width: 850px;
	background: #fff;
	display: flex;
	transition: all .2s;
}
.shopcarYes li .left{
	width: 850px;
	display: flex;
	float: right;
	margin-left: -100px;
	transition: all .2s;
}

.shopcarYes li .info{
	height: 273px;
	display: flex;
	align-items: center;
	width: 750px;
	margin-left: 30px;
}
/*.shopcarYes li .info .checked{
	width: 40px;
	height: 40px;
}*/

.shopcarYes li .info img{
	width: 200px;
	height: 200px;
	margin-left: 30px;
}
.shopcarYe li .info .mes{
	width: 450px;
	height: 157px;
	margin-left: 21px;
}
.shopcarYes li .info .mes h3{
	width: 450px;
	display: flex;
	background: #fafafa;
	margin-top: 40px;
}
.info .mes .num{
	display: inline-block;
	text-align: center;
}
.info .mes .num .price{
	margin-top: 50px;
	font-size: 32px;
	float: left;
	margin-left: 20px;
	margin-right: 100px;
	color: #ff3030;
}
.info .mes .num button{
	width: 30px;
	height: 30px;
	line-height: 30px;
	background: #999999;
	float: left;
	margin-top: 50px;
}
.info .mes .num .text{
	width: 80px;
	height: 29px;
	border: 1px solid #cccccc;
	background: #fafafa;
	float: left;
	text-align: center;
	margin-top: 50px;
}

.shopcarYes li .remove{
	width: 100px;
	height: 273px;
	background: #ff9900;
	color: red;
	text-align: center;
	line-height: 273px;
	font-size: 32px;
}


.shopcarYes .computed{
	width: 100%;
	height: 88px;
	display: flex;
	position: fixed;
	bottom: 102px;
	justify-content: space-between;
	align-items: center;
	background: #C4BDAA;
	z-index: 999;
	font-size: 28px;
	border: 1px solid #D9D9D9;
	border-radius: 10px;
}
.shopcarYes .computed .btn{
	width: 240px;
	text-align: center;
	margin-left: 10px;
}
.shopcarYes .computed .btn label{
	height: inherit;
	display: block;
	float: left;
	margin-left: 20px;
}
.shopcarYes .computed .btn input{
	width: 35px;
	height: 35px;
	margin-right: 10px;
}

.shopcarYes .computed .total{
	font-size: 28px;
	line-height: 30px;
	margin-bottom: -20px;
	margin-left: 20px;
}

.shopcarYes .computed .accounts{
	width: 186px;
	height: 88px;
	line-height: 88px;
	background: #e44646;
	color: #000;
	text-align: center;
	font-size: 28px;
	border-radius: 10px;
}
.vTouch{
	touch-action: pan-y!important;
}

</style>
