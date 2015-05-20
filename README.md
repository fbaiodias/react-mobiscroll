React-Mobiscroll
============

A simple wrapper of [Mobiscroll](https://github.com/acidb/mobiscroll) for [ReactJS](http://facebook.github.io/react/).

## Demo & Examples

Live demo: [xicombd.github.io/react-mobiscroll](http://xicombd.github.io/react-mobiscroll/)

To build the examples locally, run:

```
npm install
gulp dev
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Project Status

This project is still in development and bugs will arise very likely.

The project structure is based on [react-select](https://github.com/JedWatson/react-select) which uses [react-component-gulp-tasks](https://github.com/JedWatson/react-component-gulp-tasks).


## Installation

The easiest way to use React-Select is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), etc).

```
npm install react-mobiscroll --save
```


## Usage

```
  var Mobiscroll = require('react-mobiscroll');

  var ops = {
    display: 'inline',
    showInput: false,
    data: [
      { text: 'Paris', value: '1', group: 'Europe' },
      { text: 'New York',  value: '2',  group: 'America' }
    ]
  }

  <Mobiscroll preset="select" options={ops} elType="input"/>
```


# License

MIT
