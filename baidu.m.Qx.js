var body = $response.body;

body = body.replace(
    /"plus_js_bottom">/,
    '"plus_js_bottom">(function(){if(!localStorage["fxxkBaidu"]){localStorage.clear();localStorage["fxxkBaidu"]="true";alert("localStorage clear done.");}})();')
console.log(body);
$done(body);
