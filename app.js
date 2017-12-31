const express = require('express');
const fs = require('fs')
var app = express();
var path = require('path');

app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname + '/index.html'));

});

app.use(express.static('dif-files'));





app.listen(3000,()=>{
	console.log("server started at port 3000");
});