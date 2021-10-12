export const state = () => {
    return {
        topics: []
    }
}

export const mutations = {
    setTopics(state, payload) {
        state.topics = payload
    }
}