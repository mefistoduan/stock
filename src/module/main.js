import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './index/App.vue'
Vue.use(VueRouter)
const router = new VueRouter({
    routes:[
        { path: '/', component: resolve => require(['./index/App.vue'], resolve) },
    ]
})
const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
