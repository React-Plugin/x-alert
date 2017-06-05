# x-alert

> reactjs的alert、toast插件

我认为，每一个组件都应该有他自带的样式和属性事件回调配置。所以我会给x-alert默认一套简单的样式，和各种默认的配置项。它主要有两种样式，一种是普通的alert，一种是toast样式。

演示地址： [x-alert各种案例演示](https://react-plugin.github.io/x-alert/)

源文件地址：[https://github.com/react-plugin/x-alert](https://github.com/react-plugin/x-alert)

## npm安装 

使用 [npm](https://www.npmjs.com/package/x-alert) 安装, 运行

```bash
$ npm install x-alert --save
```
## 调用方式
```js
<Alert isShow={true}>我只是一个x-alert的提示</Alert>
```
由于`x-alert`是从`x-dialog`扩展出来的一个提示插件，所以大多数`x-dialog`的属性方法都是可以通用的,这里有[x-dialog](https://github.com/react-plugin/x-alert)的详细说明.
## 属性方法
### `isShow` :bool类型
    控制弹窗的显示隐藏的.
### `type`:string类型
    可选alert和toast，alert是带按钮的提示，toast是定时关闭的小提示
### `msg`:string类型
    消息提示内容
### `title`:string类型
    为空时，不显示标题.
### `className`:string类型
    弹窗的样式类
### `timer`:number类型
    定时关闭，可不传。
### `btnText`:string类型
    当type为alert时的按钮文字
### `okCallback`:func类型
    当默认按钮的情况下时，点击`确定`时的回调方法，点`取消`时直接隐藏，如果需要定制更多的方法，建议传递`buttons`属性。
### `afterShow`:func类型
    显示的回调方法
### `afterHide`:func类型
    关闭隐藏时的回调方法


### 关于作者
[https://github.com/tianxiangbing](https://github.com/tianxiangbing)