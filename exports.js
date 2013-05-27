var globalVar;

exports.setGlobal = function(gl){
	globalVar = gl;
}

exports.getGlobal = function(){
	console.log(globalVar);
	return globalVar;
}