const https = require('https');
var username = 'Blak3Nick';

var options = {
  hostname: 'api.github.com',
  port: 443,
  path: '/search/users?q=Blak3Nick',
  method: 'GET',
  headers: { 'User-Agent': 'Blak3Nick' }
};


var req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});
req.end();

req.on('error', (e) => {
  console.error(e);
});
