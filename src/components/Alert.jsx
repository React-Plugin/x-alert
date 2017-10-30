/*
 * Created with Visual Studio Code.
 * github: https://github.com/React-Plugin/x-alert
 * User: 田想兵
 * Date: 2017-05-26
 * Time: 20:00:00
 * Contact: 55342775@qq.com
 */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Dialog from "x-dialog";

export default class Alert extends Component {
  static propTypes = {
    msg: PropTypes.string,
    isShow: PropTypes.bool,
    title: PropTypes.node,
    className: PropTypes.string,
    buttons: PropTypes.node,
    type: PropTypes.string,
    closeIcon: PropTypes.string
  };
  static defaultProps = {
    title: undefined,
    okCallback: () => {},
    type: "alert",
    closeIcon: "",
    className:''
  };
  constructor(props) {
    super(props);
    this.state = { isShow: false };
  }
  componentWillReceiveProps(newProps) {
    if (newProps.isShow && !this.state.isShow) {
      this.setState({ isShow: true });
    } else if (!newProps.isShow && this.state.isShow) {
      this.setState({ isShow: false });
    }
  }
  okCallback() {
    this.props.okCallback();
    this.setState({ isShow: false });
  }
  render() {
    if (this.props.type === "alert") {
      this.buttons = (
        <div>
          <button className="d-ok" onClick={this.okCallback.bind(this)}>
            {this.props.btnText||'知道了'}
          </button>
        </div>
      );
      this.title = this.props.title;
      this.timer = null;
    } else if (this.props.type === "toast") {
      this.buttons = false;
      this.timer = this.props.timer || 2000;
      this.title = undefined;
    } else {
      this.buttons = false;
      this.title = undefined;
      this.timer = this.props.timer || 2000;
    }
    return (
      <Dialog
        {...this.props}
        title={this.title}
        timer={this.timer}
        className={this.props.className + " " +this.props.type}
        isShow={this.state.isShow}
        buttons={this.buttons}
        closeIcon={this.props.closeIcon}
      >
        {this.props.children}
      </Dialog>
    );
  }
}
