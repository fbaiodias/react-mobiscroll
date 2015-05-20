require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
Note: ESLint is currently misreporting unused / undeclared variables for JSX.
These errors can be ignored until the bug has been fixed.
 */

'use strict';

var React = require('react');
var Mobiscroll = require('react-mobiscroll');

function logChange(value) {
	console.log('Select value changed: ' + value);
}

var SelectField = React.createClass({
	displayName: 'SelectField',

	render: function render() {
		var ops = {
			display: 'inline',
			showInput: false,
			data: [{ text: 'Paris', value: '1', group: 'Europe' }, { text: 'New York', value: '2', group: 'America' }]
		};
		return React.createElement(
			'div',
			null,
			React.createElement(
				'label',
				null,
				'Select'
			),
			React.createElement(Mobiscroll, { preset: 'select', options: ops })
		);
	}
});

var TimeField = React.createClass({
	displayName: 'TimeField',

	render: function render() {
		var ops = {
			display: 'inline' };
		return React.createElement(
			'div',
			null,
			React.createElement(
				'label',
				null,
				'Time'
			),
			React.createElement(Mobiscroll, { preset: 'time', options: ops, elType: 'div' })
		);
	}
});

var DateField = React.createClass({
	displayName: 'DateField',

	render: function render() {
		var ops = {
			display: 'inline' };
		return React.createElement(
			'div',
			null,
			React.createElement(
				'label',
				null,
				'Date'
			),
			React.createElement(Mobiscroll, { preset: 'date', options: ops, elType: 'div' })
		);
	}
});

var ImageField = React.createClass({
	displayName: 'ImageField',

	render: function render() {
		var ops = {
			display: 'inline'
		};
		return React.createElement(
			'div',
			null,
			React.createElement(
				'label',
				null,
				'Image'
			),
			React.createElement(
				Mobiscroll,
				{ preset: 'image', options: ops, elType: 'ul' },
				React.createElement(
					'li',
					null,
					React.createElement('img', { src: 'http://demo.mobiscroll.com/Content/img/BMW_logo.png' }),
					React.createElement(
						'p',
						null,
						'BMW'
					)
				),
				React.createElement(
					'li',
					null,
					React.createElement('img', { src: 'http://demo.mobiscroll.com/Content/img/Dacia_logo.png' }),
					React.createElement(
						'p',
						null,
						'Dacia'
					)
				),
				React.createElement(
					'li',
					null,
					React.createElement('img', { src: 'http://demo.mobiscroll.com/Content/img/Ferrari_logo.png' }),
					React.createElement(
						'p',
						null,
						'Ferrari'
					)
				),
				React.createElement(
					'li',
					null,
					React.createElement('img', { src: 'http://demo.mobiscroll.com/Content/img/Mercedes_logo.png' }),
					React.createElement(
						'p',
						null,
						'Mercedes'
					)
				)
			)
		);
	}
});

var ScrollerField = React.createClass({
	displayName: 'ScrollerField',

	render: function render() {
		var ops = {
			display: 'inline',
			wheels: [[{
				keys: [3, 4, 5, 6],
				values: ['3\'', '4\'', '5\'', '6\'']
			}]]
		};
		return React.createElement(
			'div',
			null,
			React.createElement(
				'label',
				null,
				'Scroller'
			),
			React.createElement(Mobiscroll, { preset: 'scroller', options: ops, elType: 'div' })
		);
	}
});

var TreeListField = React.createClass({
	displayName: 'TreeListField',

	render: function render() {
		var ops = {
			display: 'inline',
			showInput: false,
			wheelArray: [{
				key: 'car',
				value: 'Car',
				children: [{
					key: 'wheels',
					value: 'Wheels',
					children: false
				}, {
					key: 'hood',
					value: 'Hood',
					children: false
				}]
			}, {
				key: 'plane',
				value: 'Plane',
				children: [{
					key: 'wings',
					value: 'Wings',
					children: false
				}, {
					key: 'cockpit',
					value: 'Cockpit',
					children: false
				}]
			}]
		};
		return React.createElement(
			'div',
			null,
			React.createElement(
				'label',
				null,
				'TreeList'
			),
			React.createElement(Mobiscroll, { preset: 'treelist', options: ops, elType: 'div' })
		);
	}
});

React.render(React.createElement(
	'div',
	null,
	React.createElement(SelectField, null),
	React.createElement(TimeField, null),
	React.createElement(DateField, null),
	React.createElement(ScrollerField, null),
	React.createElement(TreeListField, null)
), document.getElementById('example'));

},{"react":undefined,"react-mobiscroll":undefined}]},{},[1]);
