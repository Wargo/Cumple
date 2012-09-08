
module.exports = function() {
	
	var win = Ti.UI.createWindow({
		backgroundImage:'images/home.png',
		backgroundColor:'#FFF'
	});
	
	var button = Ti.UI.createImageView();
	button.image = 'images/continue.png';
	button.bottom = 50;
	button.width = 200;
	button.height = 50;
	
	button.addEventListener('singletap', function() {
		
		var sec = 3;
		
		var remaining = Ti.UI.createLabel({
			text: sec,
			font:{fontSize:100},
			textAlign:'center',
			width:300
		});
		
		win.add(remaining);
		
		var interval = setInterval(function() {
			
			sec --;
			
			if (sec === 0) {
				
				remaining.text = 'GO!';
				
			} else if (sec == -1) {
				
				clearInterval(interval);
				
				var startGame = require('ui/startGame');
				
				new startGame().open({left:0});
				
			} else {
				
				remaining.text = sec;
				
			}
			
		}, 1000);
		
	});
	
	win.add(button);
	
	return win;
	
}
