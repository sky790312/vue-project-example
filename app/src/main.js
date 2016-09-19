import Vue from 'vue'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'
import Resource from 'vue-resource'
import App from './App'
import SystemMaintenance from './pages/SystemMaintenance'
import store from './vuex/store'

Vue.use(Router)
Vue.use(Resource)

Vue.config.debug = true

// export var router = new Router()
export var router = new Router()

router.map({
  '/system-maintenance': {
    component: SystemMaintenance
  }
})

router.afterEach(function () {
  window.scrollTo(0, 0)
  // reset the body's class
  const body = document.getElementsByTagName('body')[0]
  body.className = ''
})

router.redirect({
  '*': '/system-maintenance'
})

sync(store, router)

router.start(App, '#app')
