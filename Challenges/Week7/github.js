//See readme for challenge instructions

/*
 * Note about github api: requires User-Agent header to be set. This can be done
 * in Node by passing an options object (rather than a simple url string) as the 
 * first param to the https.get() function
 *
 * So something like
 * */
<script
src="http://code.jquery.com/jquery-3.1.1.min.js"
integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
crossorigin="anonymous"></script>
 var options = {
    hostname: "api.github.com",
    path: '',
    headers: {
      'User-Agent': 'Blak3Nick'
    }
  };


function getRepos(username){
  api = "https://api.github.com/search/users?q=";
      api+= username;
  $.getJSON( api, function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      items.push(  key + "'>" + val  );
    });

    console.log(items);
  });
}
getRepos("Blak3Nick");