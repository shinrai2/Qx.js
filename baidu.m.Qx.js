var body = $response.body;

body = body.replace(
    /id="logo"/,
    'id="logo" onclick="(function(){if(!localStorage["fxxkBaidu"]){localStorage.clear();localStorage["fxxkBaidu"]="true";alert("localStorage clear done.");}})();"');

$done(body);
