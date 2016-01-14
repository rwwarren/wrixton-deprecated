
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  ;

var app = express();

// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
//
//app.use(subdomains.middleware);
//
//app.use(express.vhost('fb.wrixton.net', require('./subdomains/fb')));
//
//
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
app.use(express.static(__dirname + 'public'));

app.get('/', routes.index);

app.get('/fb', function(req, res, next) { //routes.fb);
  //todo
  res.render('fb', { title: 'this is a page using the fb api'});
});

app.get('/test', function(req, res, next) {
  res.render('test', { title: 'Welcome'});
});

app.use(function(req, res, next){
  res.render('error.jade', {title: "404 - Page Not Found", showFullNav: false, status: 404, url: req.url });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
