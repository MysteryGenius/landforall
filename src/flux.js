import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        fluxBlue: false,
        fluxPink: false,
        fluxOrange: false,
    },
    mutations: {
        setBlue(state) {
            state.fluxBlue = true
            state.fluxPink = false
            state.fluxOrange = false
        },
        setPink(state) {
            state.fluxBlue = false
            state.fluxPink = true
            state.fluxOrange = false
        },
        setOrange(state) {
            state.fluxBlue = false
            state.fluxPink = false
            state.fluxOrange = true
        }
    },
    actions: {
        setBlue(context) {
            context.commit('setBlue')
        },
        setPink(context) {
            context.commit('setPink')
        },
        setOrange(context) {
            context.commit('setOrange')
        }
    },
    getters: {
    }
})

export default store
