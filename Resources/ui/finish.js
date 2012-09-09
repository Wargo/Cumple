
module.exports = function() {
	
	var win = Ti.UI.createWindow({
		backgroundImage:'images/finished.png',
		backgroundColor:'#FFF',
		opacity:0
	});
	
	var congratz = Ti.UI.createLabel({
		text:'¡FELICIDADES!',
		font:{fontSize:45, fontFamily:Ti.App.font} // Chalkduster, Party LET, Zapfino
	});
	
	win.add(congratz);
	
	return win;
	
}
