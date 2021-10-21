<template>
    <div class="container mt-4">
        <h1>Bug Details of: ID - {{bug._id}}</h1>
        <div class="row mt-4">
            <div class="col-6">
                <h3>Bug details</h3>
                <h5>{{bug.title}}</h5>
                <p>{{bug.description}}</p>
            </div>
            <div class="col-6">
                <h3>Image Capture</h3>
                <img :src="'http://localhost:3000/public/uploads/'+bug.capture" width="600" height="400"/>
            </div>
        </div>
    </div>
</template>
<script>
import { computed } from 'vue'
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'
export default {
    setup(){
        const route = useRoute()
        const store = useStore()
        const id = route.params.id
        store.dispatch('getBug', id)

        return {
            bug: computed(() => {
                console.log(store.getters.currentBug)
                return store.getters.currentBug
            })
        }
    }
}
</script>


//http://localhost:3000/public/uploads