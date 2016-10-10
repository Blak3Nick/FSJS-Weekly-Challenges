const https = require('https');
var username = 'Blak3Nick';
var exports = module.exports = {};
var options = {
  hostname: 'api.github.com',
  port: 443,
  path: '/users/',
  method: 'GET',
  headers: { 'User-Agent': 'Blak3Nick' }
};



exports.getRepos = function(username){
  var response = '';
  options.path += username;
  options.path += '/repos';
    var req = https.request(options, (res) => {
      console.log('statusCode:', res.statusCode);
    // console.log('headers:', res.headers);
      res.on('data', (d) => {
        response += d;
        var profiles = "";
        profiles += JSON.parse(response);

      });
  });
  req.end( function(profiles){

    console.log(profiles);
  });
  req.on('error', (e) => {
    console.error(e);
  });
}
