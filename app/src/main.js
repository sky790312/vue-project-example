import Vue from 'vue'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'
import Resource from 'vue-resource'
import App from './App'
import Hello from './pages/Hello'
import store from './vuex/store'

Vue.use(Router)
Vue.use(Resource)

Vue.config.debug = true

// export var router = new Router()
export var router = new Router()

router.map({
  '/hello': {
    component: Hello
  }
})

router.afterEach(function () {
  window.scrollTo(0, 0)
  // reset the body's class
  const body = document.getElementsByTagName('body')[0]
  body.className = ''
})

router.redirect({
  '*': '/hello'
})

sync(store, router)

router.start(App, '#app')
