const request = require('request');

request("https://google.com/",function(err,res,body){
  console.log(body);
});