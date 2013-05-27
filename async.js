
var fs = require('fs') ;
var async = require('async') ;

try{

	async.waterfall([

		function read(callback){
			fs.readFile('./content.txt','utf8',function(err,data){
				console.log('read ********************** ') ;
				console.log(data);
				callback(err,data);
			});
		},

		function process(data,callback){
			callback(null, data.replace(/some/,'something'));
		},

		function write(data,callback){
			console.log(' write ************************');
			console.log(data);
			fs.writeFile('./content.txt',data,function(err){
				callback(err,data);
			});
		}],

		function final(err,result){
			if(err){
				console.log(err);
			}
			else{
				console.log(' result *********************** ')
				console.log(result);
			}
		}

	);
}
catch(err){
	console.log(err);
}