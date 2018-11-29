<template>
	<div class="register">
		<Header>
			<template slot="left">
				<div class="return" @click="returnClick()">
					<span class="iconfont">&#xe682;</span>
					<a>返回</a>
				</div>
			</template>
			<template slot="center">
				<h1>欢迎注册</h1>
			</template>
			<template slot="right">
				<router-link to="/login">
					<span>登录</span>
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
					<a>手机号:</a>
					<input type="telephone" id="tep" v-model="telephone">
				</div>

				<div class="box">
					<a>验证码:</a>
					<input type="authorization" id="acode" v-model="authorization">
				</div>
				
				<div class="obtain">
					<a>获取手机验证码</a>
				</div>
				
				<div class="box">
					<a><span>密码:</span></a>
					<input type="password" id="psw" v-model="password" placeholder="6位数以上数字字母组合">
				</div>
				
				<div class="box">
					<a>确认密码:</a>
					<input type="confirm" id="cf" v-model="confirm" placeholder="请再次输入密码">
				</div>
				
				<div class="agree">
					<input type="checkbox" />
					<a href="###">我已阅读并同意 <span>《用户服务协议》</span></a>
				</div>
				
				<button class="submit" @click.prevent="handleSubmit()">免费注册</button>
				
				<router-link class="login" to="/login">
					<a>登录</a>
				</router-link>
				
				<div class="existence">
					<a>已有账号？</a>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	import Header from '@/components/Header.vue'
	export default{
		name:"register",
		components: {
			Header
		},
		data(){
			return{
				"account":"",
				"telephone":"",
				"password":"",
				"authorization":"",
				"confirm":""
			}
		},
		methods:{
			returnClick(){
				this.$router.go(-1)
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
				
				xhrLogin.send("account=" + this.account + "telephone" + this.telephone + "&password=" + this.password + "authorization" + this.authorization + "confirm" + this.confirm)
			}
		}
	}
</script>

<style scoped>
.register{
	width: 100%;
	height: 100%;
	background: #f5e7bf;
}
.main{
		margin-top: 82px;
}
.main .box{
	height: 55px;
	display: inline-block;
	margin-left: 18%;
	margin-bottom: 24px;
	text-align: center;
}
.main .box:nth-child(6){
	margin-left: 14%;
}
.main .box a{
	font-size: 28px;
	width: 110px;
	height: 55px;
	margin-right: 10px;
	text-align: justify;
}
.main .box span{
	margin-left: 25px;
}
.main .box input{
	width: 340px;
	height: 55px;
	border-radius: 4px;
	padding-left: 15px;
}
.main .obtain{
 	width: 205px;
	height: 43px;
	line-height: 43px;
	text-align: center;
	background: #f4d000;
	border-radius: 7px;
	font-size: 24px;
	margin-left: 51%;
	margin-bottom: 24px;
 }
#psw,
#cf{
	font-size: 24px;
}
.main .agree{
	font-size: 24px;
	margin-top: 26px;
	margin-left: 32%;
}
.main .agree a{
	margin-left: 10px;
	color: #73716d;
}
.main .agree span{
	color: #ee7a6e;
}
.main .submit {
	width: 218px;
	height: 45px;
	line-height: 45px;
	background: #f4d000;
	font-size: 28px;
	border-radius: 10px;
	color: #000;
	display: block;
	margin: 33px auto 42px;
}
.main .login{
	width: 218px;
	height: 45px;
	line-height: 45px;
	background: #f4d000;
	font-size: 28px;
	text-align: center;
	border-radius: 10px;
	color: #000;
	display: block;
	margin: 0 auto;
}
.main .existence{
	font-size: 24px;
	margin-top: 10px;
	margin-left: 50%;
}
.main .existence a{
	color: #ee7a6e;
}
</style>