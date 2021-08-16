import Vue from 'vue'
import VueRouter from 'vue-router'
const home = ()=>import ("../views/Home.vue")
const category = ()=>import("../views/Category.vue")
const shopping = ()=>import("../views/Shopping.vue")
const profile = ()=>import("../views/Profile.vue")
Vue.use(VueRouter)


const routes = [
  { path: '/',redirect: "/home"},
  { path: '/home', component: home },
  { path: '/category', component: category },
  { path: '/shopping', component: shopping },
  { path: '/profile', component: profile }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
