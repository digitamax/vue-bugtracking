<template>
    <div>
        <h2>List of all bugs</h2>
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Priority</th>
                <th scope="col">Details</th>
                </tr>
            </thead>
            <tbody>
                <Bug v-for="(b,i) in getBugs" :bug='b' :key="b._id" :index="i"/>
            </tbody>
        </table>
    </div>
</template>

<script>
import Bug from './Bug'
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
export default {
    name:'ListBug',
    components:{
        Bug
        },
    setup() {
        const store  = useStore()
        onMounted(()=>{
            store.dispatch('getBugs')
        })
        const getBugs = computed(()=>{
            return store.getters.getBugs
        })
        return {
            getBugs
        }
    }
}
</script>