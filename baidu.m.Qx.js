var body = $response.body;

body = body.replace(
    /id="logo"/,
    'id="logo" onclick="localStorage.clear();alert(\'localStorage clear done.\');"');

$done(body);