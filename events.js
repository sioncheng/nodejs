var events = require('events');

var counter = 0 ;

var em = new events.EventEmitter();

em.on('timed',function(data){
	console.log(data);
})

setInterval(function(){
	counter++;
	em.emit('timed',counter);
},1000);
