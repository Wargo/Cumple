
module.exports = function(sound) {
	
	var num, total, time, sec, finished;
	
	setDefaultValues();

	function setDefaultValues() {
		
		num = 32; // Años
		total = num;
		time = 10000; // milisegundos
		sec = 0;
		finished = false;
		
	}
	
	var win = Ti.UI.createWindow({
		backgroundImage:'ui/images/bg_game.png',
		backgroundColor:'#FFF',
		left:320,
		width:320
	});
	
	var top = 325;
	var left = 100;
	
	var countdown = Ti.UI.createLabel({
		top:10,
		left:10,
		color:'yellow',
		font:{fontSize:24, fontFamily:Ti.App.font},
		text:'Tiempo: ' + (time / 1000),
		shadowOffset:{x:1,y:1},
		shadowColor:'#000'
	});
	win.add(countdown);
	
	var timeoutBG = Ti.UI.createView({
		backgroundColor:'#000',
		opacity:0
	});
	
	var timeoutText = Ti.UI.createLabel({
		color:'yellow',
		font:{fontSize:40, fontFamily:Ti.App.font},
		text:'¡Se te acabó el tiempo!',
		textAlign:'center',
		shadowOffset:{x:1,y:1},
		shadowColor:'#000'
	});
	
	var back = Ti.UI.createLabel({
		text:'Volver',
		bottom:20,
		left:20,
		opacity:0,
		color:'yellow',
		font:{fontSize:45, fontFamily:Ti.App.font},
		shadowOffset:{x:1,y:1},
		shadowColor:'#000',
		zIndex:100
	});
	
	back.addEventListener('singletap', function() {
		sound.stop();
		win.close();
		Ti.App.begin();
	});
	
	setTimeout(function() {
		
		if (!finished) {
			
			win.add(timeoutBG);
			win.add(timeoutText);
			
			win.add(back);
	
			back.animate({opacity:1, delay:1000});
			
			timeoutBG.opacity = 0.6;
			
		}
		
	}, time);
	
	var secondInterval = 1000;
	var aux = 1000 / secondInterval; 
	
	var interval = setInterval(function() {
		
		sec ++;
		//countdown.text = 'Tiempo: ' + (((time / secondInterval) - sec) / aux).toFixed(1);
		countdown.text = 'Tiempo: ' + ((time / secondInterval) - sec);
		if (sec >= time / secondInterval) {
			clearInterval(interval);
		}
		
	}, secondInterval);
	
	for (i = 0; i < num; i ++) {
		
		var newTop = top + Math.round(Math.random() * 70);
		var newLeft = left + Math.round(Math.random() * 90);
		
		var candle = Ti.UI.createImageView({
			image:'ui/images/candle_on_' + Math.floor(Math.random() * 9) % 2 + '.png',
			top:newTop,
			left:newLeft
		});
		
		win.add(candle);
		
		candle.addEventListener('load', function(e) {
			
			e.source.setShadow({
				shadowOffset:{x:5,y:5},
				shadowOpacity:0.8,
				shadowRadius:3
			});
			
		});
		
		candle.addEventListener('singletap', function(e) {
			
			win.remove(e.source);
			total --;

			if (total === 0) {
				
				sound.stop();
				
				win.close();
				
				finished = true;
				
				clearInterval(interval);
				
				var startGame = require('ui/finish');
				
				new startGame().open({opacity:1});
				
			}
			
		});
		
	}
	
	return win;
	
}
