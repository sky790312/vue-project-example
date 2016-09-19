<template>
  <div id="hello" class="col-md-12">
    <img class="helloImage" :src="helloImage">
    <!-- <img class="logo" :src="logoImage"> -->
    <div class="hello">
      <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
       <path id="path">
      		<animate attributeName="d" from="m0,50 h0" to="m0,50 h1100" dur="4s" begin="0s"  repeatCount="indefinite"/>
      	</path>
      	<text font-size="22" fill='white'>
      		<textPath xlink:href="#path">HELLO VUE ...
          </textPath>
      	</text>
      </svg>
    </div>
  </div>
</template>

<script>
import {

} from '../vuex/getters'

import {

} from '../vuex/actions'

export default {
  name: 'Hello',
  components: {

  },

  vuex: {
    getters: {

    },
    actions: {

    }
  },

  data () {
    return {
      helloImage: require('../assets/hello.jpg')
    }
  },

  route: {
    // canActivate () {
    // },
    //
    activate: function () {
      const body = document.getElementsByTagName('body')[0]
      body.className += ' bg-brand'
    }
  },

  ready () {

  },

  methods: {

  }
}
</script>

<style lang="stylus">
@import '../variables'
@import '../mixins'

$fb-color = #3b5998

#hello,
#hello .container {
  max-width: 250px // TODO find a better way of doing this
}

#hello {
  color: $white
  transform: translate(-50%, -50%)
  top: 50%
  left: 50%
  position: fixed
  width: 100%
  padding: 0
  text-align: center
  -webkit-animation: fade-in 2s
  -moz-animation: fade-in 2s
  -o-animation: fade-in 2s
  animation: fade-in 2s

  @-webkit-keyframes fade-in {
    from {
      opacity: 0
      left:55%
    }
    to {
      opacity: 1
      left: 50%
    }
  }
  @-moz-keyframes fade-in {
    from {
      opacity: 0
      left:55%
    }
    to {
      opacity: 1
      left: 50%
    }
  }
  @-o-keyframes fade-in {
    from {
      opacity: 0
      left:55%
    }
    to {
      opacity: 1
      left: 50%
    }
  }
  @keyframes fade-in {
    from {
      opacity: 0
      left:55%
    }
    to {
      opacity: 1
      left: 50%
    }
  }

  .helloImage {
    width: 100%
  }

  .hello {
    -webkit-animation: fade 2s infinite
    -moz-animation: fade 2s infinite
    -o-animation: fade 2s infinite
    animation: fade 2s infinite
  }
}
</style>
