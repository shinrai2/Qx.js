var rbody = $response.body;

rbody = rbody.replace(
    /"plus_js_bottom">/,
    '"plus_js_bottom">(function(){if(!localStorage["fxxkBaidu"]){localStorage.clear();localStorage["fxxkBaidu"]="true";alert("localStorage clear done.");}})();');

rbody = "123";
$done({body: rbody});
