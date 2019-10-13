import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.websiteUrl = 'http://localhost:8089/ycxq/test/';  
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
