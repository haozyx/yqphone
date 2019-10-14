import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.websiteUrl = 'http://10.4.42.22:8089/ycxq/test/';  
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
