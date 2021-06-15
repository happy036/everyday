import React, { Component } from 'react';
// 导入AppGrSon
import AppGrSon from "./AppGrSon";

class AppSon extends Component {
    changeStatus = (index) => {
        this.props.changeStatus(index)
    }
    render() {
        return (
            <div className="App-son">
                <div className="container">
                    <h2>AppSon--记录信息</h2>
                    <ul>
                        {/* 提示：{时间}使用toLocaleString() */}
                        {/* 提示：{时间}使用toLocaleString() */}
                        {
                            this.props.list.map((item, index) => (
                                <li key={index}>{item.time}——{item.info}——{item.status === true ? '已读' : '未读'}</li>
                            ))
                        }
                    </ul>
                </div>
                {/* AppGrSon */}
                <AppGrSon list={this.props.list} changeStatus={this.changeStatus} />
            </div>
        );
    }
}

export default AppSon;