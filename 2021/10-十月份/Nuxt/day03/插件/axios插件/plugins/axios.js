import axios from 'axios'
export default (context, inject) => {
    // console.log(inject)
    axios.defaults.baseURL = 'https://cnodejs.org/api/v1'
    inject('aaa', {
        getTopics(path) {
            return axios.get(`${path}`)
        }
    })
}