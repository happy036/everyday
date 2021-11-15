import { createStore } from "vuex";
// 非命名空间模块和命名空间模块
const moduleA = {
    namespaced: true,
    state() {
        return {
            name: '模块A'
        }
    },
    mutations: {
        updateName(state) {
            state.name = 'ha模块Aha'
        }
    }, getters: {
        newName(state) {
            return state.name + '😀'
        }
    }
}
const moduleB = {
    namespaced: true,
    state() {
        return {
            name: '模块B'
        }
    },
    mutations: {
        updateName(state) {
            state.name = 'ha模块Bha'
        }
    }, getters: {
        newName(state) {
            return state.name + '😀'
        }
    }
}
export default createStore({
    state: {
        username: '张三'
    },
    // getters 是 vuex 中的计算属性, 基于现有状态计算出新的状态。
    getters: {
        newUsername(state) {
            return state.username + '哈哈哈'
        }
    },
    // mutations 是 vuex 中用于修改状态的方法。
    mutations: {
        updateUsername(state, username) {
            state.username = username
        }
    },
    // actions 在 Vuex 中用于执行异步操作, 当异步操作执行完成以后可以调用 commit 方法触发 mutation 来修改应用状态
    actions: {
        updateName(ctx) {
            setTimeout(() => {
                ctx.commit('updateUsername', '李四')
            }, 1000)
        }
    },
    // Vuex 允许开发者通过模块对状态进行拆分，允许开发者将不同功能的状态代码拆分到不同的模块中。
    // 模块分为两种，一种是不具备命名空间的模块，另一种是具备命名空间的模块，推荐使用命名空间，命名空间使模块更加独立。
    modules: {
        a: moduleA,
        b: moduleB
    }
})