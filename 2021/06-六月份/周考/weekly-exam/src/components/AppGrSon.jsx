import React, { Component } from 'react';
import store from "../store/store";

class AppGrSon extends Component {
    constructor() {
        super()
        this.state = store.getState()
    }
    componentDidMount() {
        // console.log(this.state.list)
        console.log()
        store.subscribe(() => {
            this.setState({
                list: store.getState().list
            })
        })
    }
    changeStatus = (index) => {
        this.props.changeStatus(index)
    }
    render() {
        return (
            <div className="App-gr-son">
                <h3>AppGrSon--待读信息</h3>
                <ul>
                    {
                        this.props.list.map((item, index) => (
                            <li key={index} >{item.info}——<button onClick={() => { this.changeStatus(index) }} >点击已读</button></li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default AppGrSon;