var crossroads = require('crossroads'),
    http = require('http');


 crossroads.addRoute('/item/{type}/:pub:/:id:',function(type,pub,id){
 	console.log('type ' + type + ' , pub ' + pub + ' , id ' + id );
 });

crossroads.addRoute('/category/{type}/:pub:/:id:', function(type,pub,id) { 
	if (!id && !pub) {
		console.log('Accessing all entries of category ' + type);
		return;
	} else if (!id) {
		console.log('Accessing all entries of category ' + type + 'and pub ' + pub);
		return; 
	} else {
		console.log('Accessing item ' + id + ' of pub ' + pub + ' of category ' + type);
	} 
});

http.createServer(function(req,res){
	crossroads.parse(req.url);
	res.statusCode = 200;
	res.write(req.url);
	res.end();
}).listen(8000);

console.log('running on 8000 with route');