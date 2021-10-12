export const state = () => (
    {
        list: [10, 20, 40]
    }
)
export const mutations = {
    add(state, payload) {
        state.list.push(payload)
    }
}