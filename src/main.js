import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import Router from 'vue-router'
import Post from './components/Post.vue'
import Hello from './components/Hello.vue'
// import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'mdbootstrap'
// import 'mdbootstrap/css/mdb.css'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name:'home',
      component: Hello,
    },
    {
      path: '/post/:id',
      name:'post',
      component: Post,
      props: true,
    },
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
