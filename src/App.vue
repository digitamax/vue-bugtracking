<template>
  <Navbar/>
  <router-view/>
</template>

<script>
import Navbar from './components/layout/Navbar'

export default {
  components: {
    Navbar
},
  setup() {
    
  },
}
</script>

<style>

</style>
