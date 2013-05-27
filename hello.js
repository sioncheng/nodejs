var http = require('http');
var fs = require('fs');
var url = require('url');
var queryString = require('querystring');

var app ;

http.createServer(function(req,res){
	res.writeHead(200,{'content-type':'text/plain'}) ;
	res.write('hello node js\n');
	res.write((new Date()).toString());
	res.write('\n');


	var query = url.parse(req.url).query;
	app = queryString.parse(query).file ;
	res.write(req.url);
	res.write('\n');
	if(typeof(app) == 'string'){
		res.write(app);
		res.write('\n');	
	}

	fs.readFile( 'content.txt' , 'utf8' , function(err,data){

		if(err){
			res.write('sorry, we are not able to open content \n');
		}
		else{
			res.write(data) ;
			res.write('\n') ;
		}

		res.end();

	}  );

	//res.end();
}).listen(8000);