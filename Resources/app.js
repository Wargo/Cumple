
(function() {
	
	Ti.App.font = 'Noteworthy'; //'Party LET';

	require('ti.viewshadow');

	var Window = require('ui/mainWindow');
	
	function begin() {
		new Window().open();
	}
	
	begin();
	
	Ti.App.begin = begin;
	
})();
