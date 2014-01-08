
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  //, subdomains = require('express-subdomains')
  ;

var app = express();

//subdomains.use('fb');

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
//app.use( require('express-subdomain-handler')({ baseUrl: 'wrixton.net', prefix: 'fb', logger: true }) );
//app.use(express.vhost('fb.wrixton.net', require('/fb').app));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
app.use(express.static(__dirname + 'public'));

//app.use(express.vhost('fb.wrixton.net', require('./subdomains/fb').app));

/*
app.get('/fb/:subdomains/fb', function(req, res, next){

      // for the example url this will print 'mysubdomain'
      //res.send(req.params.thesubdomain);
      //
  res.render('fb', { title: 'This is a page using the FB API'});
});
*/

app.get('/', routes.index);

app.get('/fb', function(req, res, next) { //routes.fb);
  //res.send('this is working');
  //todo
  res.render('fb', { title: 'this is a page using the fb api'});
});

app.get('/test', function(req, res, next) {
  res.render('test', { title: 'Welcome'});
});


/*
app.get('/fb', function(req, res) { //routes.fb);
  //res.send('this is working');
  //todo
  res.render('fb', { title: 'this is a page using the fb api'});
});
*/

/*
function checkError(req, res){
  var hostHeader = req.headers.host;
  if (hostHeader != 'localhost:8080'){
    res.render('redirect', { title: 'Page does not exist' });
  }
}*/

app.use(function(req, res, next){
  res.render('error.jade', {title: "404 - Page Not Found", showFullNav: false, status: 404, url: req.url });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
