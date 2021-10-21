import { createStore } from 'vuex'
import bugsModule from './modules/bugs'

export default createStore({
  modules:{
    bugs: bugsModule
  }
})
