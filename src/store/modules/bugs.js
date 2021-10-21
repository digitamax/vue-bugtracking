import axios from 'axios'

const config = {
    headers: {
        "Content-Type": "multipart/form-data"
    }
}

const bugsModule = {
state: () => ({
    bugs:[],
    currentBug: null
 }),

 getters: {
     getBugs: (state) => state.bugs,
     currentBug: (state) => state.currentBug
},

mutations: {
    //eslint-disable-next-line
    ADD_BUG(state, payload) {
        console.log(payload)
        state.bugs.push(payload)
    },
    GET_BUGS(state, payload){
        console.log(payload)
       return  state.bugs = payload
    },
    GET_BUG(state, id){
        console.log(state)
        const bug = state.bugs.find(b => b._id === id)
        return state.currentBug = bug
    }
},

actions: {

    async getBugs({commit}){
        try {
            const res = await axios.get('/bugs')  
            commit('GET_BUGS', res.data.bugs)
        } catch (error) {
            console.log(error)
        }
        
    },

    async addBug({commit}, payload){
        
        try {
            const formData = new FormData()
            formData.append("title",payload.title)
            formData.append("description",payload.desc)
            formData.append("priority",payload.priority)
            formData.append("capture",payload.capture.file)

            const res = await axios.post('/bugs/', formData, config)  
            commit('ADD_BUG',res.data.bugSaved)
        } catch (error) {
            console.log(error)
        }

    },

    getBug({commit}, id){
        
        commit('GET_BUG', id)
    }
},
}


export default bugsModule