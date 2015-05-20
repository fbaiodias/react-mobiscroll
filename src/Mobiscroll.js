/* global document */
var React = require('react');
var $ = require('jQuery');
require('mobiscroll');
require('mobiscroll-frame');
require('mobiscroll-scroller');
require('mobiscroll-util');
require('mobiscroll-datetimebase');
require('mobiscroll-datetime');
require('mobiscroll-select');
require('mobiscroll-listbase');
require('mobiscroll-image');
require('mobiscroll-treelist');


var Mobiscroll = React.createClass({

  displayName: 'Mobiscroll',

  propTypes: {
    preset: React.PropTypes.string,
    elType: React.PropTypes.string,
    options: React.PropTypes.any,
  },

  getDefaultProps: function() {
    return {
      preset: 'select',
      elType: 'input',
    }
  },

  componentDidMount: function() {
    var node = this.getDOMNode();
    var el = $(node);

    el.mobiscroll()[this.props.preset](this.props.options)
  },

  render: function () {
    return React.createElement(this.props.elType, null, this.props.children);
  }
});


module.exports = Mobiscroll;