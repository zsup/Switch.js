var arduino = require('duino'),
	express = require('express'),
	board = new arduino.Board(),
	app = express.createServer();
	
var led = new arduino.Led({
	board: board,
	pin: 13
})

app.use(express.static(__dirname + '/public'));

app.get('/on', function(req, res){
	led.on();
	res.send("on");
});

app.get('/off',function(req,res){
	led.off();
	res.send("off");
});

app.listen(3000);