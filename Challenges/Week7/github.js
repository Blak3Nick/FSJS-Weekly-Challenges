//See readme for challenge instructions

/*
 * Note about github api: requires User-Agent header to be set. This can be done
 * in Node by passing an options object (rather than a simple url string) as the 
 * first param to the https.get() function
 *
 * So something like
 * */
 var options = {
    hostname: api.github.com,
    path: '',
    headers: {
      'User-Agent': 'Blak3Nick'
    }
  };


function getRepos(username){
  console.log('Repos for ' + username);
}
