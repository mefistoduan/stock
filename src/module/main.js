import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './index/App.vue'
Vue.use(VueRouter)
const router = new VueRouter({
    routes:[
        { path: '/', redirect: '/index' },
        { path: '/index', component: resolve => require(['./index/App.vue'], resolve) },
        { path: '/detail', component: resolve => require(['./detail/App.vue'], resolve) },
    ]
})
const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
