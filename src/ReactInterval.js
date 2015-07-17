import React from 'react';
import {shouldComponentUpdate} from 'react/lib/ReactComponentWithPureRenderMixin';


const ReactInterval = React.createClass({
  propTypes: {
    callback: React.PropTypes.func.isRequired,
    enabled: React.PropTypes.bool,
    timeout: React.PropTypes.number
  },


  getDefaultProps() {
    return {
      enabled: false,
      timeout: 1000
    };
  },


  shouldComponentUpdate,


  getInitialState() {
    return {enabled: this.props.enabled};
  },


  componentDidMount() {
    if (this.props.enabled) {
      this.start();
    }
  },


  componentWillUnmount() {
    this.stop();
  },


  componentWillReceiveProps({enabled}) {
    this.setState({enabled});
  },


  callback() {
    this.props.callback();
    this.start();
  },


  start() {
    this.stop();
    this.timer = setTimeout(this.callback, this.props.timeout);
  },


  stop() {
    clearTimeout(this.timer);
  },


  render() {
    if (this.state.enabled) {
      this.start();
    } else {
      this.stop();
    }
    return false;
  }
});


export default ReactInterval;
