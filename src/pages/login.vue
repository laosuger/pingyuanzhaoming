<template>
	<div class="login">
		<Header>
			<template slot="left">
				<router-link to="/User">
					<span class="iconfont">&#xe682;</span>
					<a>返回</a>
				</router-link>
			</template>
			<template slot="center">
				<h1>欢迎登录</h1>
			</template>
			<template slot="right">
				<router-link to="/register">
					<span>注册</span>
				</router-link>
			</template>
		</Header>

		<div class="main">
			<form>
				<div class="box">
					<a>会员名:</a>
					<input type="tel" id="tel" v-model="account">
				</div>

				<div class="box">
					<a><span>密码:</span></a>
					<input type="password" id="psw" v-model="password">
				</div>

				<div class="box">
					<a>验证码:</a>
					<input type="authorization" id="acode" v-model="authorization">
				</div>
				
				<div class="code">
					<img ref="codeImage" @click="reflash()" src="http://api.imecho.cn/dodiapi/code.php?n=4&info=30$96$43"/>
					<a class="change" @click="reflash()">换一张</a>
				</div>
				
				<div class="remember">
					<input type="checkbox" />
					<a href="###">记住密码</a>
				</div>
				
				<button class="submit" @click.prevent="handleSubmit()">登录</button>
				
				<div class="forget">
					<router-link to="/***">忘记密码</router-link>
					<span>|</span>
					<router-link to="/register">免费注册</router-link>
				</div>
			</form>
			
			<div class="channel">
				<p>其他账号登录</p>
				<ul>
					<li>
						<router-link to="/***">
							<img src="../images/login/wx.jpg" alt="" />
						</router-link>
					</li>
					<li>
						<router-link to="/***">
							<img src="../images/login/wb.jpg" alt="" />
						</router-link>
					</li>
					<li>
						<router-link to="/***">
							<img src="../images/login/zfb.jpg" alt="" />
						</router-link>
					</li>
					
				</ul>
			</div>
			
		</div>
		
	</div>
</template>
<script>
	import Header from '@/components/Header.vue'
	export default {
		name: "login",
		components: {
			Header
		},
		data(){
			return{
				"account":"",
				"password":"",
				"authorization":""
			}
		},
		methods:{
			returnClick(){
				this.$router.go("/User")
			},
			handleSubmit(){
				var that = this
				var xhrLogin = new XMLHttpRequest()
				xhrLogin.withCredentials = true
				xhrLogin.onreadystatechange = function() {
					if (xhrLogin.readyState == 4 && xhrLogin.status == 200) {
						var value = JSON.parse(xhrLogin.responseText).code
						if(value === "100"){
							that.$router.push('/User')
						}
					}
				}
				xhrLogin.open("POST", "http://api.imecho.cn/dodiapi/login.php", true)
				xhrLogin.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
				
				xhrLogin.send("account=" + this.account + "&password=" + this.password + "authorization" + this.authorization)
			},
			reflash(){
				// attributes 属性返回指定节点的属性集合  nodeValue 属性设置或返回指定节点的节点值
				this.$refs.codeImage.attributes.src.nodeValue = "http://api.imecho.cn/dodiapi/code.php?n=4&info=30$100$50"
			}
		}
	}
</script>
<style scoped>
	.login{
		width: 100%;
		height: 100%;
		background: #f5e7bf;
	}
	.main{
		margin-top: 80px;
	}
	.main .box {
		height: 55px;
		display: inline-block;
		margin-left: 20%;
		margin-bottom: 40px;
		text-align: center;
	}
	
	.main .box a{
		font-size: 28px;
		width: 110px;
		height: 55px;
		margin-right: 10px;
		text-align: justify;
	}
	.main .box span{
		margin-left: 18px;
	}
	.main .box input {
		width: 340px;
		height: 55px;
		border-radius: 4px;
		padding-left: 15px;
	}
	#psw{
		margin-left: 10px;
	}
	.main .code{
		font-size: 24px;
		margin-top: -24px;
		margin-left: 56%;
	}
	.main .code img{
		width: 96px;
		height: 43px;
		border-radius: 7px;
		margin-right: 15px;
	}
	.main .code a{
		color: #73716d;
	}
	.main .remember{
		font-size: 24px;
		margin-top: 27px;
		margin-left: 34%;
	}
	.main .remember a{
		margin-left: 10px;
		color: #73716d;
	}

	.main .submit {
		height: 45px;
		background: #f4d000;
		width: 218px;
		font-size: 28px;
		border-radius: 10px;
		color: #000;
		display: block;
		margin: 33px auto 105px;
	}
	.main .forget{
		font-size: 24px;
		margin-left: 58%;
		margin-bottom: 10px;
	}
	.main .forget a{
		color: #73716d;
	}
	.main .forget span{
		color: #959595;
		margin-left: 10px;
		margin-right: 10px;
	}
	.main .channel{
		width: 588px;
		border-top: 1px solid #c4bdaa;
		display: block;
		margin: 0 auto;
	}
	.main .channel p{
		text-align: center;
		margin-top: 15px;
		font-size: 24px;
		color: #666666;
	}
	.main .channel li{
		float: left;
		margin-top: 40px;
		
	}
	.main .channel img{
		width: 76px;
		height: 76px;
		margin-left: 92px;
	}
</style>
