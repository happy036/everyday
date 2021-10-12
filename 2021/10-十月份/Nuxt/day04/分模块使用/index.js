export const state = () => (
    {
        randomNum: 0

    }
)

export const mutations = {
    setNum(state, payload) {
        state.randomNum = payload
    }
}