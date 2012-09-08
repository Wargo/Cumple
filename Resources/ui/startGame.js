
module.exports = function() {
	
	var win = Ti.UI.createWindow({
		backgroundImage:'images/bg_game.png',
		backgroundColor:'#FFF',
		left:320
	});
	
	var total = num = 2;
	var top = 300;
	var left = 100;
	var time = 3000; // milisegundos
	var sec = 0;
	var finished = false;
	
	var countdown = Ti.UI.createLabel({
		text:time / 1000,
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
		countdown.text = (time / 1000) - sec;
		if (sec >= time / 1000) {
			clearInterval(interval);
		}
		
	}, 1000);
	
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
				alert('yujuuu');
				clearInterval(interval);
			}
			
		});
		
	}
	
	return win;
	
}
