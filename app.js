const express = require('express');
const fs = require('fs')
var app = express();
var path = require('path');

app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname + '/index.html'));
	console.log(req.connection.remoteAddress);

});

app.use(express.static('dif-files'));





app.listen(3000,()=>{
	console.log("server started at port 3000");
});