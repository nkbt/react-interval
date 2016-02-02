# react-interval

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/nkbt/help)

[![Circle CI](https://circleci.com/gh/nkbt/react-component-template.svg?style=shield)](https://circleci.com/gh/nkbt/react-component-template)
[![Appveyor](https://ci.appveyor.com/api/projects/status/mql8v50s8ghr0w1q?svg=true)](https://ci.appveyor.com/project/nkbt/react-component-template)
[![codecov.io](https://codecov.io/github/nkbt/react-component-template/coverage.svg?branch=master)](https://codecov.io/github/nkbt/react-component-template?branch=master)
[![Dependency Status](https://david-dm.org/nkbt/react-component-template.svg)](https://david-dm.org/nkbt/react-component-template)
[![devDependency Status](https://david-dm.org/nkbt/react-component-template/dev-status.svg)](https://david-dm.org/nkbt/react-component-template#info=devDependencies)

Safe React wrapper for setInterval


![React Interval](https://cdn.rawgit.com/nkbt/react-interval/master/src/example/react-interval.gif)


## Installation

### npm

```sh
npm install --save react-interval
```

### bower

```sh
bower install --save react-interval
```

## Demo

[http://nkbt.github.io/react-interval/example](http://nkbt.github.io/react-interval/example)

## Codepen demo

[http://codepen.io/nkbt/pen/ZGmpoO](http://codepen.io/nkbt/pen/ZGmpoO?editors=101)

## Usage

### Quicksart
Start counting on render

```js
import React from 'react';
import ReactInterval from 'react-interval';

const App = React.createClass({
  getInitialState() {
    return {count: 0};
  },

  inc() {
    this.setState({count: this.state.count + 1});
  },

  render() {
    const {count} = this.state;

    return (
      <div>
        {count}
        <ReactInterval timeout={1000} enabled={true} callback={this.inc} />
      </div>
    );
  }
});
```

### Full example
Chang timeout on the fly, start and stop counting

```js
import React from 'react';
import ReactInterval from 'react-interval';

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
          onChange={({target: {value}}) => this.setState({timeout: parseInt(value, 10)})} />&nbsp;

        <button disabled={enabled} onClick={() => this.setState({enabled: true})}>
          Start</button>&nbsp;

        <button disabled={!enabled} onClick={() => this.setState({enabled: false})}>
          Stop</button>&nbsp;

        {count}
      </div>
    );
  }
});
```

## Options


#### `callback`: PropTypes.func.isRequired

Function repeatedly called after timeout


#### `enabled`: PropTypes.bool (default: false)

Should start timer?


#### `timeout`: PropTypes.number (default: 1000)

Timeout before each `callback` call


## Development and testing

```bash
npm install
npm start
```

Then

```bash
open http://localhost:8080
```

## Tests

Only UI tests for now, see [demo](http://nkbt.github.io/react-interval/example)


## License

MIT
