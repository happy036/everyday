function Home(props){
    console.log('Home渲染了')
    return(
        <div>
            <h2>Home组件</h2>
            <button onClick={props.handler}>增加按钮</button>
        </div>
    )
}
export default Home