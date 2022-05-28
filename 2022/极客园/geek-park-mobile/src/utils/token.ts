
export const getToken=()=>{

    return JSON.parse(localStorage.getItem('root')??'{"token":"","refresh_token":""}')

}
