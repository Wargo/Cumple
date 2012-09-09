
module.exports = function() {
	
	var sound = Ti.Media.createSound({
		url:'ui/sounds/happytreefriends.mp3',
		looping:true
	});

	sound.play();
	
	var win = Ti.UI.createWindow({
		backgroundImage:'ui/images/albert.png',
		backgroundColor:'#FFF',
		opacity:0
	});
	
	var congratz = Ti.UI.createLabel({
		text:'¡FELICIDADES!',
		color:'yellow',
		font:{fontSize:45, fontFamily:Ti.App.font},
		shadowOffset:{x:1,y:1},
		shadowColor:'#000',
		zIndex:100
	});
	
	win.add(congratz);
	
	var gabino = Ti.UI.createImageView({
		image:'ui/images/gabino.png',
		opacity:0
	});
	
	win.add(gabino);
	
	gabino.animate({opacity:1, duration:5000, delay:2000});
	
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
	
	setTimeout(function() {
		win.add(back);
		back.animate({opacity:1})
	}, 8000);
	
	//back.animate({opacity:1, delay:8000});
	
	back.addEventListener('click', function() {
		
		sound.stop();
		
		win.close();
		
		Ti.App.begin();
		
	});
	
	return win;
	
}
