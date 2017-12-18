require('jquery');
require('codemirror/lib/codemirror.js');
require('codemirror/addon/search/searchcursor.js');
require('codemirror/lib/codemirror.css');
require('mergely/lib/mergely.js');
require('mergely/lib/mergely.css');

$(document).ready(function() {
	$('#mergely').mergely({
		license: 'lgpl'
	});
});
