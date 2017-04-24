/*
 * Manage Session in Node.js and ExpressJS
 * Author : Shahid Shaikh
 * Version : 0.0.1
*/
var express		=	require('express');
var session		=	require('express-session');
var bodyParser  	= 	require('body-parser');
var unique = require('array-unique');
var app			=	express();
path = require('path');
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use(session({secret: 'rtyu454t5g565tg565g565tg',saveUninitialized: true,resave: false}));
app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({extended: true}));
app.use('/js',express.static(path.join(__dirname, 'public/js')));
app.use('/css',express.static(path.join(__dirname, 'public/css')));
var sess;
var sessarray=[];
app.get('/',function(req,res){
	sess=req.session;
	if(sess.email)
	{
		console.log('succes');
	}
	else{
	res.render('index.html');
	}
});

app.post('/setdata',function(req,res){
      sess=req.session;	
	  sess.cart = req.body.vurl;
	  sess.title = req.body.vtitle;
	  sess.vurl2 = req.body.vurl2;
      sessarray.push({imgurl:sess.cart,title:sess.title,vurl2:sess.vurl2});
	  sess.arr1 = sessarray;
});

app.get('/recent',function(req,res){
sess=req.session;	
	res.contentType('application/json');
    res.send(JSON.stringify(unique(sess.arr1)));
});

app.listen(80,function(){
	console.log("App Started on PORT 80");
});
