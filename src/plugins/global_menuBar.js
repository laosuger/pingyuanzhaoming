import MenuBar from '.././components/MenuBar.vue'

const MyPlugin = {}

MyPlugin.install = function(Vue,options){
	Vue.component("MenuBar",MenuBar)
}

export default MyPlugin