/*
Note: ESLint is currently misreporting unused / undeclared variables for JSX.
These errors can be ignored until the bug has been fixed.
 */

var React = require('react');
var Mobiscroll = require('react-mobiscroll');

var SelectField = React.createClass({
	render: function() {
		var ops = {
			display: 'inline',
			showInput: false,
			data: [
				{ text: 'Paris', value: '1', group: 'Europe' },
				{ text: 'New York',  value: '2',  group: 'America' }
			]
    }
		return (
			<div>
				<label>Select</label>
				<Mobiscroll preset="select" options={ops}/>
			</div>
		);
	}
});

var TimeField = React.createClass({
	render: function() {
		var ops = {
      display: 'inline',
    }
		return (
			<div>
				<label>Time</label>
				<Mobiscroll preset="time" options={ops} elType="div"/>
			</div>
		);
	}
});

var DateField = React.createClass({
	render: function() {
		var ops = {
      display: 'inline',
    }
		return (
			<div>
				<label>Date</label>
				<Mobiscroll preset="date" options={ops} elType="div"/>
			</div>
		);
	}
});


var ImageField = React.createClass({
	render: function() {
		var ops = {
      display: 'inline'
    }
		return (
			<div>
				<label>Image</label>
				<Mobiscroll preset="image" options={ops} elType="ul">
					<li>
						<img src="http://demo.mobiscroll.com/Content/img/BMW_logo.png" />
						<p>BMW</p>
					</li>
					<li>
						<img src="http://demo.mobiscroll.com/Content/img/Dacia_logo.png" />
						<p>Dacia</p>
					</li>
					<li>
						<img src="http://demo.mobiscroll.com/Content/img/Ferrari_logo.png" />
						<p>Ferrari</p>
					</li>
					<li>
						<img src="http://demo.mobiscroll.com/Content/img/Mercedes_logo.png" />
						<p>Mercedes</p>
					</li>
				</Mobiscroll>
			</div>
		);
	}
});

var ScrollerField = React.createClass({
	render: function() {
		var ops = {
      display: 'inline',
			wheels: [[
				{
				  keys: [3, 4, 5, 6],
				  values: ["3'", "4'", "5'", "6'"]
				}
			]]
		}
		return (
			<div>
				<label>Scroller</label>
				<Mobiscroll preset="scroller" options={ops} elType="div"/>
			</div>
		);
	}
});

var TreeListField = React.createClass({
	render: function() {
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
  	}
		return (
			<div>
				<label>TreeList</label>
				<Mobiscroll preset="treelist" options={ops} elType="div"/>
			</div>
		);
	}
});

React.render(
	<div>
		<SelectField />
		<TimeField />
		<DateField />
		<ScrollerField />
		<TreeListField />
	</div>,
	document.getElementById('example')
);
