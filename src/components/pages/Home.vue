<template>
  <div class="container py-4">
    <div class="row">
      <div class="col-6"> <Addbug/></div>
      <div class="col-6"> 
        <Suspense>
          <template #default>
            <Listbug/> 
          </template>
          <template #fallback>
            loading...
          </template>
        </Suspense>
      </div>
    </div>
    
  </div>
</template>

<script>
import Addbug from '../bugs/Addbug'
import Listbug from '../bugs/ListBug'
export default {
  name: 'Home',
  components: {
    Addbug,
    Listbug
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
