<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <router-view
          class="view"
          transition
          transition-mode="out-in">
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import store from './vuex/store'
import {

} from './vuex/getters'
import {

} from './vuex/actions'

export default {
  store,
  components: {

  },

  vuex: {
    getters: {

    },
    actions: {

    }
  },

  // computed: {
  //   fetchNotReady () {
  //     return !this.shareCodes &&
  //       !this.shareCodes.length &&
  //       !this.building &&
  //       !this.buildings.length
  //   }
  // },

  created () {
    // const browserLang = util.getBrowserLang()
    // util.setLang(browserLang)
  },

  ready () {

  }
}
</script>

<style lang="stylus">
@import './global'

.bg-brand {
  background: $brand-color

  .navbar {
    display: none
  }
}

// override aframe's CSS

html {
  position: relative !important
}

body {
  margin-bottom: 100px !important
  overflow: auto !important
}

</style>
