import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.websiteUrl = 'https://yohaoyun.com/ycxq/test/';  
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
