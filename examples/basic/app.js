import React from 'react';
import ReactDOM from 'react-dom';
import Alert from '../../lib/index';
import Style from '../../lib/index.css';
var appElement = document.getElementById('example');
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShow: false,msg:'',type:'alert' ,title:undefined };
  }
  defaultAlert() {
    this.setState({ isShow:true,msg:"我是一个小提示！",type:'alert'});
  }
  toast(){
    this.setState({ isShow:true,msg:"我是一个小提示！",type:'toast'});
  }
  noTitleAlert(){
    this.setState({ isShow:true,msg:"我是一个小提示！",type:'alert',title:"提示",btnText:"确定",okCallback:()=>alert('ok')});
  }
  render() {
    return (
      <div>
        <button onClick={this.defaultAlert.bind(this)}>默认弹窗提示</button>
        <button onClick={this.toast.bind(this)}>Toast</button>
        <button onClick={this.noTitleAlert.bind(this)}>带标题的确认框</button>
        <Alert {...this.state}>{this.state.msg}</Alert>
      </div>
    )
  }
}
ReactDOM.render(<App/>, appElement);