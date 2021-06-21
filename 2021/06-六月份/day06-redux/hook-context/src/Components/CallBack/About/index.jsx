function About(props){
    console.log('About渲染了')
    return(
        <div>
            <h2>About组件</h2>
            <button onClick={props.handler}>减少按钮</button>
        </div>
    )
}
export default About