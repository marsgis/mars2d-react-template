import React from "react"

import "leaflet/dist/leaflet.css"
import "leaflet"

// 使用免费开源版本
import "mars2d/dist/mars2d.css"
import * as mars2d from "mars2d"

import "./style.css"

let Cesium = mars2d.Cesium

class App extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      mapDivId: "mars2dView",
      mainMap: null,
      postInit: true,
      activeNav: "",
      activePage: "地图"
    }
  }

  componentDidMount() {
    var mapUrl = "config/config.json"
    mars2d.Util.fetchJson({ url: mapUrl }).then((data) => {
      this.initMars3d(data.mars2d) // 构建地图
    })
  }
  initMars3d(mapOptions) {
    // 创建三维地球场景
    var map = new mars2d.Map(`mars2dView`, mapOptions)
    console.log(">>>>> 地图创建成功 >>>>", map)

    this.onMapload(map)
  }

  // 地图构造完成回调
  onMapload(map) {}

  componentWillUnmount() {}

  componentDidUpdate() {
    console.log("component did update!")
  }

  render() {
    let mapStyle = { height: "100%", width: "100%" }
    return (
      <React.Fragment>
        <div id="mars2dContainer" className="itemContainer bg-gis collapsed">
          <div id="mars2dView" style={mapStyle} className="appmap" />
        </div>
      </React.Fragment>
    )
  }
}

export default App
