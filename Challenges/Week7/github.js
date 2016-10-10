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


var response = '';
exports.getRepos = function(username){
options.path += username;
options.path += '/repos';
var req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  // console.log('headers:', res.headers);
  res.on('data', (d) => {
    process.stdout.write(d);
  });
});
req.end();


req.on('error', (e) => {
  console.error(e);
});
}
