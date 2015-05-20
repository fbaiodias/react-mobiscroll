var gulp = require('gulp');
var initGulpTasks = require('react-component-gulp-tasks');

var taskConfig = {

	component: {
		name: 'Mobiscroll',
		less: {
			path: 'less',
			entry: 'default.less'
		}
	},

	example: {
		src: 'examples/src',
		dist: 'examples/dist',
		files: [
			'index.html',
			'css/mobiscroll.animation.css',
			'css/mobiscroll.icons.css',
			'css/mobiscroll.scroller.css',
			'css/mobiscroll.frame.css',
			'css/mobiscroll.image.css',
			'.gitignore'
		],
		scripts: [
			'app.js'
		],
		less: [
			'example.less'
		]
	}

};

initGulpTasks(gulp, taskConfig);
