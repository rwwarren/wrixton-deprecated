
/*
 * GET home page.
 */

exports.index = function(req, res){
  var hostHeader = req.headers.host;

  /*
  if (hostHeader != 'localhost:8080'){
    res.render('redirect', { title: 'Page does not exist' });
  }*/

  res.render('index', { title: 'Welcome!' });
};
