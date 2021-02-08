var body = $response.body;

body = body.replace(
    /bind\(\\"click\\",function\(a,c,h\)\{return function\(e\)/,
    'bind(\\"click\\",function(a,c,h){return a&&a["length"]&&a[0]=="sug"?function(e){void 0}:function(e)');

$done(body);