var $ = require('jquery');
var TweenMax = require('TweenMax');
var TweenLite = require('TweenLite');
var TimelineLite = require('TimelineLite');
var TimelineMax = require('TimelineMax');

console.log('hello world! ');


function log(){
	console.log('it works!');
}

var bkt = window.bkt  || {};

bkt.test = require('./test');

$(document).ready(function(){
	//TweenMax.to('#redBox', 1, {x:'+=100', y:"+=100"});
	//TweenLite.to('#redBox', 1, {x:'-=100', y:"-=100", delay:'2', repeat:-1, yoyo:true});

	var tl = new TimelineMax({repeat:-1, yoyo:true});

	tl.to('#phA', 1, {x:'+=30', y:"+=30"});
});

window.bkt = bkt;





