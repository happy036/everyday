import React from "react";
import "./Map.css"
class Map extends React.Component {
    // 当页面渲染完成就要加载地图
    componentDidMount() {
        // console.log(window)
        var map = new window.BMap.Map("container");
        console.log(map)
        var point = new window.BMap.Point(116.404, 39.915);
        console.log(point)
        map.centerAndZoom(point, 15);
        // var myCity = new window.BMap.LocalCity();
        // myCity.get((result) => {
        //     // var cityName = result.name;
        //     // map.setCenter(cityName);
        //     // console.log(result);
        // });
    }
    render() {
        return (
            <div className="map">
                <div id="container">

                </div>
            </div>
        )
    }
}
export default Map