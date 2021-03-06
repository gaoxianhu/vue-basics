import Vue from 'vue'
import App from '@/App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import "@babel/polyfill";
Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
    //先把全局事件总线安排好
    beforeCreate () {
      Vue.prototype.$bus = this  
    },
    el: '#root',
    render: h => h(App)
})