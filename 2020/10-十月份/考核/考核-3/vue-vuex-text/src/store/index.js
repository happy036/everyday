import { createStore } from "vuex";

export default createStore({
    state() {
        return {
            name: '范志伟',
            age: 23,
            count: 0,
            sum: '11111111111'
        }
    },
    mutations: {
        add(state) {
            state.age++
        },
        add2(state, val) {
            state.count += val
        }
    },
    actions: {
        asyncAdd(context, val) {
            setInterval(function () {
                context.commit('add2', val)
            }, 2000)
        }
    },
    getters: {
        num(state) {
            return state.count
        },
        num2(state) {
            return state.sum
        }
    }
})