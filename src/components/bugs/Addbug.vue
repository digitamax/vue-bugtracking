<template>
    <div class="mx-4">
        <h2>Form to add bug</h2>
        <form enctype="multipart/form-data" ref='form' @submit="handleSubmit">
            <div class="mb-3">
                <label for="bt" class="form-label">Bug title</label>
                <input type="text" class="form-control" id="bt" v-model="title">
            </div>
            <div class="mb-3">
                <label for="bd" class="form-label">Bug description</label>
                <textarea class="form-control" id="bd" rows="3" v-model="desc"></textarea>
            </div>
            <div class="mb-3">
                <label for="priority" class="form-label">Priority</label>
                <select class="form-select" v-model="priority">
                    <option selected>Open this select menu</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="capture" class="form-label">Capture d'écran</label>
                <file-input v-model="capture" is-image ref="fl"/>
                <br/> <br/>
            </div>
            <div class="mb-3">
            <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue'
import FileInput from 'vue3-simple-file-input/src/components/FileInput.vue'

import {useStore} from 'vuex'

export default {
    name:"Addbug",
    components: { FileInput},
    setup() {
        const store = useStore()
        let title = ref('')
        let desc = ref('')
        let priority = ref('')
        let capture = ref(null)
        let form = ref(null)
        const handleSubmit = (e) => {
            e.preventDefault();
            store.dispatch('addBug',{
                title: title.value, 
                desc: desc.value,
                priority: priority.value,
                capture: capture.value
                })
                e.target.reset()
            console.log(e)
        }
        return{
            title,
            desc,
            priority,
            capture,
            handleSubmit,
            form
        }
    }
}
</script>