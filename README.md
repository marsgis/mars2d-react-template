<p align="center">
<img src="https://muyao1987.gitee.io/cdn/mars2d.cn/logo.png" width="300px" />
</p>

<p align="center">基于 Vue3.x + Vite 的 Mars2D🌎最简项目模板</p>


<p align="center">
<a target="_black" href="https://github.com/marsgis/mars2d">
<img alt="GitHub stars" src="https://img.shields.io/github/stars/marsgis/mars2d?style=flat&logo=github">
</a>
<a target="_black" href="https://www.npmjs.com/package/mars2d">
<img alt="Npm downloads" src="https://img.shields.io/npm/dt/mars2d?style=flat&logo=npm">
</a>
<a target="_black" href="https://www.npmjs.com/package/mars2d">
<img alt="Npm version" src="https://img.shields.io/npm/v/mars2d.svg?style=flat&logo=npm&label=version"/>
</a>
</p>

 [**English**](./README_EN.md) |[**中文**](./README.md) 


## 建议环境配置

1. 推荐使用 Visual Studio Code 编辑器
2. 推荐安装 ESlint、Volar 插件（如果已经安装Vetur插件，需要禁用）并将格式化工具设置为eslint （settings.json配置如下）

```json
"[vue]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
},
"[typescript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
},
"[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
},
```

## 运行命令

### 首次运行前安装依赖

```
npm i
```

### 启动开发环境

```
npm run dev
```

### 打包构建

```
npm run build
```

### 运行效果 
 [在线体验](http://marsgis.gitee.io/mars2d-es5-template/)  
 
 ## 视频讲解

建议先看一遍视频讲解，再实际操作，您可以[新页面查看高清视频](https://www.bilibili.com/video/BV1nZ4y1b7W7/)



## 如何集成到自己已有的项目中
 
1. ### 安装mars2d依赖包
```bash
npm install mars2d   //或  cnpm install mars2d   或  yarn add mars2d
```

2. ### 拷贝文件
 > 场景配置文件：`public\config\config.json`

```javascript
import "mars2d/dist/mars2d.css";
import * as mars2d from "mars2d";
```

具体代码可参考 `src\App.jsx`
 
## Mars2D 是什么

> `Mars2D平台` 是[火星科技](http://marsgis.cn/)研发的一款基于 WebGL 技术实现的三维客户端开发平台，基于leaflet优化提升与 B/S 架构设计，支持多行业扩展的轻量级高效能 GIS 开发平台，能够免安装、无插件地在浏览器中高效运行，并可快速接入与使用多种 GIS 数据和三维模型，呈现三维空间的可视化，完成平台在不同行业的灵活应用。

> Mars2D 平台可用于构建无插件、跨操作系统、 跨浏览器的三维 GIS 应用程序。平台使用 WebGL 来进行硬件加速图形化，跨平台、跨浏览器来实现真正的动态大数据三维可视化。通过 Mars2D 产品可快速实现浏览器和移动端上美观、流畅的三维地图呈现与空间分析。

### 相关网站

- Mars2D 官网：[http://mars2d.cn](http://mars2d.cn)

- Mars2D 开源项目列表：[https://github.com/marsgis/mars2d](https://github.com/marsgis/mars2d)

## 版权说明

1. Mars2D 平台由[火星科技](http://marsgis.cn/)自主研发，拥有所有权利。
2. 任何个人或组织可以在遵守相关要求下可以免费无限制使用。