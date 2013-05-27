var http = require('http'),
    path = require('path'),
    fs = require('fs'),
    mime = require('mime');


var base = '../html5';

http.createServer(function(req,res){

	var filepath = base + req.url;
	console.log(' got request for ' + filepath);

	path.exists(filepath,function(exists){

		if(exists){
			
			var contentType = mime.lookup(filepath);
			res.setHeader('Content-type',contentType) ;
			res.writeHead(200);

			var rs = fs.createReadStream(filepath);

			rs.on('open',function(){
				rs.pipe(res);
			});

			rs.on('err',function(){
				console.log(err);
			});

		}
		else{
			res.writeHead(404);
			res.write('your rquest does not exists');
			res.end();

		}

	});

}).listen(8000);

console.log('server running at 8000');
