

	var application_root = __dirname,
	    express = require ( 'express' );

	var app = express();

	app.configure( function() {

	    app.use( express.bodyParser() );

	    app.use( express.methodOverride() );

	    app.use( app.router );

	    app.use( express.errorHandler({ dumpExceptions: true, showStack: true}));
});

app.get( '/api/uno', function(request, response) {
	response.send("cadena UNO");
});

app.get( '/api/dos/:id', function(request, response) {
	response.send('valor pasado=[' + request.params.id+']');
});

app.get( '/api/tres', function(request, response) {
	var v1 = request.query.v1;
	var v2 = request.query.v2;
	response.send('valores=[' +v1+']['+v2+']');
});

var port = 4711;
app.listen( port, function(){
	console.log('Express server listening on port %d in &s mode', port, app.settings.env);
});
