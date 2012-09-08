
module.exports = function() {
	
	var num, total, time, sec, finished;
	
	setDefaultValues();

	function setDefaultValues() {
		num = 2; // Años
		total = num;
		time = 15000; // milisegundos
		sec = 0;
		finished = false;
	}
	
	var win = Ti.UI.createWindow({
		backgroundImage:'images/bg_game.png',
		backgroundColor:'#FFF',
		left:320
	});
	
	var top = 300;
	var left = 100;
	
	var countdown = Ti.UI.createLabel({
		top:10,
		left:10
	});
	win.add(countdown);
	
	var timeoutBG = Ti.UI.createView({
		backgroundColor:'#CCC',
		opacity:0
	});
	
	var timeout = Ti.UI.createImageView({
		top:400,
		image:'images/timeout.png'
	});
	
	timeout.addEventListener('singletap', function() {
		
		win.close();
		
	});
	
	setTimeout(function() {
		
		if (!finished) {
			win.add(timeoutBG);
			win.add(timeout);
			timeoutBG.opacity = 0.3;
			timeout.animate({top:50});
		}
		
	}, time);
	
	var interval = setInterval(function() {
		
		sec ++;
		countdown.text = (((time / 100) - sec) / 10).toFixed(1);
		if (sec >= time / 100) {
			clearInterval(interval);
		}
		
	}, 100);
	
	for (i = 0; i < num; i ++) {
		
		var newTop = top + Math.round(Math.random() * 100);
		var newLeft = left + Math.round(Math.random() * 100);
		
		var candle = Ti.UI.createImageView({
			image:'images/candle_on.png',
			top:newTop,
			left:newLeft,
			height:20,
			width:20
		});
		
		win.add(candle);
		
		candle.addEventListener('singletap', function(e) {
			
			win.remove(e.source);
			total --;

			if (total === 0) {
				finished = true;
				clearInterval(interval);
				
				var startGame = require('ui/finish');
				
				new startGame().open({opacity:1});
				
			}
			
		});
		
	}
	
	return win;
	
}
