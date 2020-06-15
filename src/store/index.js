import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: "",
        buttonPushed: 0
    },
    mutations: {
        setUser(state, value) {
            state.user = value
        },
        increaseCounter(state,value){
            state.buttonPushed += value
        },
        resetCounter(state){
            state.buttonPushed = 0
        }
    },
    getters: {
        getUser: (state) => {
            return state.user
        },
        getButtonPushed(state){
            return state.buttonPushed
        }
    },
    actions: {},
    modules: {}
})
