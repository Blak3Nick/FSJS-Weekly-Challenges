//See readme for challenge instructions

/*
 * Note about github api: requires User-Agent header to be set. This can be done
 * in Node by passing an options object (rather than a simple url string) as the 
 * first param to the https.get() function
 *
 * So something like
 * */
var http = require('http');

var options = {
  hostname: 'https://api.github.com/search/users?q=Blak3Nick'
  //,port: app.get('port')
  ,path: '/users'
  ,method: 'GET'
  ,headers: { 'Content-Type': 'application/json' }
};

var req = http.request(options, function(res) {
  res.setEncoding('utf8');
  res.on('data', function (data) {
    console.log(data); // I can't parse it because, it's a string. why?
  });
});
req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});
req.end();


 // var options = {
 //    hostname: "api.github.com",
 //    path: '',
 //    headers: {
 //      'User-Agent': 'Blak3Nick'
 //    }
 //  };


// function getRepos(username){
//   api = "https://api.github.com/search/users?q=";
//       api+= username;
//   $.getJSON( api, function( data ) {
//     var items = [];
//     $.each( data, function( key, val ) {
//       items.push(  key + "'>" + val  );
//     });
//
//     console.log(items);
//   });
// }
// getRepos("Blak3Nick");