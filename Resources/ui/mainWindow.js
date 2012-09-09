
module.exports = function() {
	
	var win = Ti.UI.createWindow({
		backgroundImage:'ui/images/bitches.png',
		backgroundColor:'#FFF'
	});
	
	var sound = Ti.Media.createSound({
		url:'ui/sounds/parchis.mp3',
		looping:true,
		time:58.6
	});

	sound.play();

	var button = Ti.UI.createLabel({
		text:'¡Empezar!',
		bottom:-150,
		font:{fontFamily:Ti.App.font, fontSize:50},
		shadowOffset:{x:1,y:1},
		shadowColor:'#000',
		color:'yellow'
	});
	
	button.addEventListener('singletap', function() {
		
		win.remove(button);
		
		var bgDescription = Ti.UI.createView({
			opacity:0.6,
			backgroundColor:'#000'
		});
		
		win.add(bgDescription);
		
		var sec = 3;
		
		var remaining = Ti.UI.createLabel({
			text: sec,
			font:{fontSize:100, fontFamily:Ti.App.font},
			textAlign:'center',
			width:300,
			shadowOffset:{x:1,y:1},
			shadowColor:'#000',
			color:'yellow'
		});
		
		win.add(remaining);
		
		var interval = setInterval(function() {
			
			sec --;
			
			if (sec === 0) {
				
				remaining.text = 'GO!';
				
			} else if (sec == -1) {
				
				clearInterval(interval);
				
				setTimeout(function() {
					win.close();
				}, 300);
				
				var startGame = require('ui/startGame');
				
				new startGame(sound).open({left:0});
				
			} else {
				
				remaining.text = sec;
				
			}
			
		}, 1000);
		
	});
	
	var description = Ti.UI.createLabel({
		text:'¡Ya son 32 años! Veamos si has perdido reflejos con la edad... a ver si eres capaz de apagar todas las velas en menos de 10 segundos. ¡Mucha suerte!',
		font:{fontFamily:Ti.App.font, fontSize:30},
		shadowOffset:{x:1,y:1},
		shadowColor:'#000',
		color:'yellow',
		opacity:0,
		textAlign:'center',
		top:10,
		left:10,
		right:10
	});
	
	var bgDescription = Ti.UI.createView({
		opacity:0,
		backgroundColor:'#000',
		top:5,
		left:5,
		right:5,
		bottom:110,
		borderRadius:10
	});
	
	win.add(bgDescription);
	win.add(description);
	
	setTimeout(function() {
		win.add(button);
		button.animate({bottom:20});
	}, 8000);
	
	bgDescription.animate({opacity:0.5, delay:500, duration:1000});
	description.animate({opacity:1, delay:500, duration:1000});
	
	return win;
	
}
