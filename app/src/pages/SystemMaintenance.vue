<template>
  <div id="maintenance" class="col-md-12">
    <img class="maintenanceImage" :src="maintenanceImage">
    <!-- <img class="logo" :src="logoImage"> -->
    <div class="maintenance">
      <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
       <path id="path">
      		<animate attributeName="d" from="m0,50 h0" to="m0,50 h1100" dur="4s" begin="0s"  repeatCount="indefinite"/>
      	</path>
      	<text font-size="22" fill='white'>
      		<textPath xlink:href="#path">SYSTEM MAINTENANCE ...
          </textPath>
      	</text>
      </svg>
    </div>
    <!-- <hr> -->
    <!-- <a class="btn btn-default btn-facebook" @click="fbLoginSubmit">
      <i class="fa fa-facebook"></i>
      {{ $t('logInWithFacebook') }}
      <div id="fb-root"></div>
    </a>
    <a :href="'#/forgot-pass'">{{ $t('forgotPassLink') }}</a> -->
  </div>
</template>

<script>
import {
  // isLoading,
  // authInfo,
  // user,
  // activeLoading,
  // alertParams
} from '../vuex/getters'

import {
  // fetchShareCodes,
  // fetchBuildings,
  // checkBuildings,
  // checkShareCodes,
  // setUserInfo,
  // setIsLoading,
  // setProfilePhoto,
  // setAlertParams
} from '../vuex/actions'

export default {
  name: 'Login',
  components: {

  },

  vuex: {
    getters: {
      // isLoading,
      // authInfo,
      // user,
      // activeLoading,
      // alertParams
    },
    actions: {
      // fetchShareCodes,
      // fetchBuildings,
      // checkBuildings,
      // checkShareCodes,
      // setUserInfo,
      // setIsLoading,
      // setProfilePhoto,
      // setAlertParams
    }
  },

  data () {
    return {
      logoImage: require('../assets/logo-login.png'),
      maintenanceImage: require('../assets/maintenance.png')
    }
  },

  route: {
    // canActivate () {
    //   return !auth.user.authenticated
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

#maintenance,
#maintenance .container {
  max-width: 500px // TODO find a better way of doing this
}

#maintenance {
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

  .maintenanceImage {
    width: 100%
  }

  .maintenance {
    -webkit-animation: fade 2s infinite
    -moz-animation: fade 2s infinite
    -o-animation: fade 2s infinite
    animation: fade 2s infinite
  }
}
</style>
