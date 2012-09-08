
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
		
		var startGame = require('ui/startGame');
		new startGame().open({left:0});
		
	});
	
	win.add(button);
	
	return win;
	
}
