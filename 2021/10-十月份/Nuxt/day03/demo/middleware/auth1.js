export default () => {
    const server = process.server ? '服务端' : '客户端'
    console.log(`auth1中间件执行在${server}`)
}