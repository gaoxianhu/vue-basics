import Vue from 'vue'
import App from '@/App'
import store from '@/vuex/store'
Vue.config.productionTip = false

new Vue({
    el: '#root',
    render: h => h(App),
    store//声明使用vuex，只有在这里注册以后vuex才生效
    //注册好之后，那么每个组件当中都可以通过this.$store拿到我们的vuex store对象
})