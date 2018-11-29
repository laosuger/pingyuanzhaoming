 
 <template>
	<div class="Classify">
		<div class="header">
			<ul>
				<li class="return" @click="returnClick()">
					<span class="iconfont">&#xe682;</span>
					<a>返回</a>
				</li>
				<li>
					<a href="###" class="href">分类</a>
				</li>
				<li class="search">
					<router-link to="/SearchPage">
						<span class="iconfont btn">&#xe617;</span>
					</router-link>
				</li>
			</ul>
		</div>
		
		<div class="main">
			
			<div class="slideBar" ref="slideBar">
				<ul>
					<li  
						v-for="(item,index) of slideBarList"
						:key="index"
						@click="handleClick(index,$event)"
						:class="{on:index === active}"
					>{{item}}</li>
				</ul>
			</div>
			
			<div class="wrapper" ref="wrapper">
				<ul class="wrapper-ul">
					<li class="wrapper-li" 
						v-for="(items,index) of proList"
						:key="index"
						ref="wrapperList"
					>
						<ul class="pro-items">
							<li 
								class="pro-item" 
								v-for="item of items"
								:key="item.id"
							>
								
									<router-link to="/ProDetails" tag="div">
										<div class="image">
											<img :src="item.imgUrl">
										</div>
										
										<p>{{item.text}}</p>
									</router-link>
							</li>
						</ul>
					</li>
				</ul>
			</div>
			
		</div>
			
		
		<MenuBar></MenuBar>
	</div>
</template>

<script>
	import BetterScroll from 'better-scroll'
	export default {
		name:"Classify",
		data(){
			return{
				scrollY:0,
				clickEvent:false,
//				iconList:["&#xe69d;","&#xe610;","&#xe797;","&#xe618;","&#xe61c;","&#xe611;","&#xe7e7;","&#xe619;"],
				slideBarList:["台灯","射灯","日光灯","天花灯","吊灯","罩灯","水灯","发光二极管"],
				listHeight:[],
				proList:[
					[
						{
							"id":1,
							"imgUrl":require('@/images/classify/pro01.jpg'),
							"text":"后现代欧式灯"
						},
						{
							"id":2,
							"imgUrl":require('@/images/classify/pro02.jpg'),
							"text":"现代欧式灯"
						},
						{
							"id":3,
							"imgUrl":require('@/images/classify/pro03.jpg'),
							"text":"泰式宫廷灯"
						},
						{
							"id":4,
							"imgUrl":require('@/images/classify/pro04.jpg'),
							"text":"简约风灯"
						},
						{
							"id":5,
							"imgUrl":require('@/images/classify/pro05.jpg'),
							"text":"欧式纯砖石灯"
						},
						{
							"id":6,
							"imgUrl":require('@/images/classify/pro06.jpg'),
							"text":"韩式纯白银灯"
						},
						{
							"id":7,
							"imgUrl":require('@/images/classify/pro07.jpg'),
							"text":"日风摇篮式灯 "
						},
						{
							"id":8,
							"imgUrl":require('@/images/classify/pro08.jpg'),
							"text":"水晶简约灯 "
						},
						{
							"id":9,
							"imgUrl":require('@/images/classify/pro09.jpg'),
							"text":"中式纯黄金灯"
						}
					],
					[
						{
							"id":1,
							"imgUrl":require('@/images/classify/pro01.jpg'),
							"text":"后现代欧式灯"
						},
						{
							"id":2,
							"imgUrl":require('@/images/classify/pro02.jpg'),
							"text":"现代欧式灯"
						},
						{
							"id":3,
							"imgUrl":require('@/images/classify/pro03.jpg'),
							"text":"泰式宫廷灯"
						},
						{
							"id":4,
							"imgUrl":require('@/images/classify/pro04.jpg'),
							"text":"简约风灯"
						},
						{
							"id":5,
							"imgUrl":require('@/images/classify/pro05.jpg'),
							"text":"欧式纯砖石灯"
						},
						{
							"id":6,
							"imgUrl":require('@/images/classify/pro06.jpg'),
							"text":"韩式纯白银灯"
						},
						{
							"id":7,
							"imgUrl":require('@/images/classify/pro07.jpg'),
							"text":"日风摇篮式灯 "
						},
						{
							"id":8,
							"imgUrl":require('@/images/classify/pro08.jpg'),
							"text":"水晶简约灯 "
						},
						{
							"id":9,
							"imgUrl":require('@/images/classify/pro09.jpg'),
							"text":"中式纯黄金灯"
						}
					],
					[
						{
							"id":1,
							"imgUrl":require('@/images/classify/pro01.jpg'),
							"text":"后现代欧式灯"
						},
						{
							"id":2,
							"imgUrl":require('@/images/classify/pro02.jpg'),
							"text":"现代欧式灯"
						},
						{
							"id":3,
							"imgUrl":require('@/images/classify/pro03.jpg'),
							"text":"泰式宫廷灯"
						},
						{
							"id":4,
							"imgUrl":require('@/images/classify/pro04.jpg'),
							"text":"简约风灯"
						},
						{
							"id":5,
							"imgUrl":require('@/images/classify/pro05.jpg'),
							"text":"欧式纯砖石灯"
						},
						{
							"id":6,
							"imgUrl":require('@/images/classify/pro06.jpg'),
							"text":"韩式纯白银灯"
						},
						{
							"id":7,
							"imgUrl":require('@/images/classify/pro07.jpg'),
							"text":"日风摇篮式灯 "
						},
						{
							"id":8,
							"imgUrl":require('@/images/classify/pro08.jpg'),
							"text":"水晶简约灯 "
						},
						{
							"id":9,
							"imgUrl":require('@/images/classify/pro09.jpg'),
							"text":"中式纯黄金灯"
						}
					],
					[
						{
							"id":1,
							"imgUrl":require('@/images/classify/pro01.jpg'),
							"text":"后现代欧式灯"
						},
						{
							"id":2,
							"imgUrl":require('@/images/classify/pro02.jpg'),
							"text":"现代欧式灯"
						},
						{
							"id":3,
							"imgUrl":require('@/images/classify/pro03.jpg'),
							"text":"泰式宫廷灯"
						},
						{
							"id":4,
							"imgUrl":require('@/images/classify/pro04.jpg'),
							"text":"简约风灯"
						},
						{
							"id":5,
							"imgUrl":require('@/images/classify/pro05.jpg'),
							"text":"欧式纯砖石灯"
						},
						{
							"id":6,
							"imgUrl":require('@/images/classify/pro06.jpg'),
							"text":"韩式纯白银灯"
						},
						{
							"id":7,
							"imgUrl":require('@/images/classify/pro07.jpg'),
							"text":"日风摇篮式灯 "
						},
						{
							"id":8,
							"imgUrl":require('@/images/classify/pro08.jpg'),
							"text":"水晶简约灯 "
						},
						{
							"id":9,
							"imgUrl":require('@/images/classify/pro09.jpg'),
							"text":"中式纯黄金灯"
						}
					],
					[
						{
							"id":1,
							"imgUrl":require('@/images/classify/pro01.jpg'),
							"text":"后现代欧式灯"
						},
						{
							"id":2,
							"imgUrl":require('@/images/classify/pro02.jpg'),
							"text":"现代欧式灯"
						},
						{
							"id":3,
							"imgUrl":require('@/images/classify/pro03.jpg'),
							"text":"泰式宫廷灯"
						},
						{
							"id":4,
							"imgUrl":require('@/images/classify/pro04.jpg'),
							"text":"简约风灯"
						},
						{
							"id":5,
							"imgUrl":require('@/images/classify/pro05.jpg'),
							"text":"欧式纯砖石灯"
						},
						{
							"id":6,
							"imgUrl":require('@/images/classify/pro06.jpg'),
							"text":"韩式纯白银灯"
						},
						{
							"id":7,
							"imgUrl":require('@/images/classify/pro07.jpg'),
							"text":"日风摇篮式灯 "
						},
						{
							"id":8,
							"imgUrl":require('@/images/classify/pro08.jpg'),
							"text":"水晶简约灯 "
						},
						{
							"id":9,
							"imgUrl":require('@/images/classify/pro09.jpg'),
							"text":"中式纯黄金灯"
						}
					],
					[
						{
							"id":1,
							"imgUrl":require('@/images/classify/pro01.jpg'),
							"text":"后现代欧式灯"
						},
						{
							"id":2,
							"imgUrl":require('@/images/classify/pro02.jpg'),
							"text":"现代欧式灯"
						},
						{
							"id":3,
							"imgUrl":require('@/images/classify/pro03.jpg'),
							"text":"泰式宫廷灯"
						},
						{
							"id":4,
							"imgUrl":require('@/images/classify/pro04.jpg'),
							"text":"简约风灯"
						},
						{
							"id":5,
							"imgUrl":require('@/images/classify/pro05.jpg'),
							"text":"欧式纯砖石灯"
						},
						{
							"id":6,
							"imgUrl":require('@/images/classify/pro06.jpg'),
							"text":"韩式纯白银灯"
						},
						{
							"id":7,
							"imgUrl":require('@/images/classify/pro07.jpg'),
							"text":"日风摇篮式灯 "
						},
						{
							"id":8,
							"imgUrl":require('@/images/classify/pro08.jpg'),
							"text":"水晶简约灯 "
						},
						{
							"id":9,
							"imgUrl":require('@/images/classify/pro09.jpg'),
							"text":"中式纯黄金灯"
						}
					],
					[
						{
							"id":1,
							"imgUrl":require('@/images/classify/pro01.jpg'),
							"text":"后现代欧式灯"
						},
						{
							"id":2,
							"imgUrl":require('@/images/classify/pro02.jpg'),
							"text":"现代欧式灯"
						},
						{
							"id":3,
							"imgUrl":require('@/images/classify/pro03.jpg'),
							"text":"泰式宫廷灯"
						},
						{
							"id":4,
							"imgUrl":require('@/images/classify/pro04.jpg'),
							"text":"简约风灯"
						},
						{
							"id":5,
							"imgUrl":require('@/images/classify/pro05.jpg'),
							"text":"欧式纯砖石灯"
						},
						{
							"id":6,
							"imgUrl":require('@/images/classify/pro06.jpg'),
							"text":"韩式纯白银灯"
						},
						{
							"id":7,
							"imgUrl":require('@/images/classify/pro07.jpg'),
							"text":"日风摇篮式灯 "
						},
						{
							"id":8,
							"imgUrl":require('@/images/classify/pro08.jpg'),
							"text":"水晶简约灯 "
						},
						{
							"id":9,
							"imgUrl":require('@/images/classify/pro09.jpg'),
							"text":"中式纯黄金灯"
						}
					],
					[
						{
							"id":1,
							"imgUrl":require('@/images/classify/pro01.jpg'),
							"text":"后现代欧式灯"
						},
						{
							"id":2,
							"imgUrl":require('@/images/classify/pro02.jpg'),
							"text":"现代欧式灯"
						},
						{
							"id":3,
							"imgUrl":require('@/images/classify/pro03.jpg'),
							"text":"泰式宫廷灯"
						},
						{
							"id":4,
							"imgUrl":require('@/images/classify/pro04.jpg'),
							"text":"简约风灯"
						},
						{
							"id":5,
							"imgUrl":require('@/images/classify/pro05.jpg'),
							"text":"欧式纯砖石灯"
						},
						{
							"id":6,
							"imgUrl":require('@/images/classify/pro06.jpg'),
							"text":"韩式纯白银灯"
						},
						{
							"id":7,
							"imgUrl":require('@/images/classify/pro07.jpg'),
							"text":"日风摇篮式灯 "
						},
						{
							"id":8,
							"imgUrl":require('@/images/classify/pro08.jpg'),
							"text":"水晶简约灯 "
						},
						{
							"id":9,
							"imgUrl":require('@/images/classify/pro09.jpg'),
							"text":"中式纯黄金灯"
						}
					]
				]
			}
		},
		methods:{
			returnClick(){
				this.$router.go(-1)
			},
			handleClick(i){
				this.clickEvent = true
				if(!event._constructed){
					return
				}else{
					var right =  this.$refs.wrapperList
					var el = right[i]
					this.rights.scrollToElement(el,300)
				}
			},
			initScroll(){
				var that = this
				this.lefts = new BetterScroll(this.$refs.slideBar,{
					click:true
				})
				this.rights = new BetterScroll(this.$refs.wrapper,{
					probeType:3,
					click: true
				})
				
				this.rights.on("scroll",function(props){
					that.scrollY = Math.abs(Math.round(props.y))
				})
				
			},
			getHeight(){
				var itemHeight = this.$refs.wrapperList
				var height = 0
				this.listHeight.push(height)
				var that = this
				// console.log(itemHeight)
				for(var i=0;i<=itemHeight.length-1;i++){
					height += itemHeight[i].clientHeight
					that.listHeight.push(height)
				}
				// console.log(this.listHeight)
			}
		},
		mounted(){
			var that = this
			this.$nextTick(function(){
				that.initScroll()
				that.getHeight()
			})
		},
		computed:{
			active(){
				for(var i = 0; i<this.listHeight.length-1; i++){
					var h1 = this.listHeight[i]
					var h2 = this.listHeight[i+1]
					
					if(this.scrollY >= h1 && this.scrollY < h2){
						return i
					}
					if(this.scrollY >= this.listHeight[this.listHeight.length-1]){
						return 0
					}
				}
			}
		}
		
	}
</script>

<style scoped>
.Classify{
	width: 100%;
	height: 100%;
	background: #f3e9ce;
}
.Classify .header{
	width: 100%;
	height: 88px;
	line-height: 80px;
	background: #f4d000;
}
.Classify .header ul{
	display: flex;
	justify-content: space-around;
}
.Classify .header li{
	display: block;
	font-size: 32px;
}
.Classify .header .return{
	margin-left: -70px;
}
.Classify .header .return .iconfont{
	font-size: 32px;
}
.Classify .header .search span{
	font-size: 38px;
	margin-right: -40px;
}
.main{
	width: 100%;
	display: flex;
	overflow: hidden;
}											
.slideBar{
	width: 238px;
	height: 100%;
	
	font-size: 32px;
	position: fixed;
}
.slideBar ul {
	background-color: #fff;
}
.slideBar ul li{
	height: 112px;
	line-height: 112px;
	text-align: center;
	border-bottom: 1px solid #d9d9d9;
}
.slideBar ul li:last-child{
	border-bottom: none;
}
.slideBar ul .on{
	background: #faea8c;
}
.wrapper{
	margin-left: 238px;
	width: 509px;
	height: 1200px;
	/*height: 792px;*/
}.wrapper .wrapper-ul{
	padding-bottom: 100%;
}
.wrapper .pro-items{
	/*height: 143px;*/
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}
.wrapper .pro-item{
	width: 165px;
	height: 243px;
}
.wrapper .pro-item .image img{
	width: 165px;
	height: 178px;
	bottom: 1px;
	margin: auto;
}
.wrapper .pro-item p{
	height: 64px;
	width: 100%;
	text-align: center;
	line-height: 65px;
	font-size: 24px;
}
</style>