import React from 'react';
import ReactInterval from '..';


const App = React.createClass({
  getInitialState() {
    return {
      enabled: false,
      timeout: 1000,
      count: 0
    };
  },


  inc() {
    this.setState({count: this.state.count + 1});
  },


  render() {
    const {timeout, enabled, count} = this.state;

    return (
      <div>
        <ReactInterval {...{timeout, enabled}} callback={this.inc} />

        <input type="number" step="200" min="200" max="5000" value={this.state.timeout}
          onChange={({target: {value}}) => this.setState({timeout: parseInt(value, 10)})} />
        &nbsp;

        <button disabled={enabled} onClick={() => this.setState({enabled: true})}>
          Start
        </button>
        &nbsp;

        <button disabled={!enabled} onClick={() => this.setState({enabled: false})}>
          Stop
        </button>
        &nbsp;

        {count}
      </div>
    );
  }
});


React.render(<App />, document.body);
