<template>
  <div id="app">
     <CMENU></CMENU>
     <router-view></router-view>
  </div>
</template>

<script>
import CMENU from './components/c-menu'; 
export default {
  name: 'app',
  components:{
    CMENU
  },
  data () {
    return {
    }
  }
}
</script>

