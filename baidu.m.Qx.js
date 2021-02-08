var body = $response.body;

body = body.replace(
    /id="logo"/,
    'id="logo" onclick="localStorage.clear();alert(\'localStorage clear done.\');"');
body = body.replace(
    /type="submit">/,
    'type="submit">TEST'
);
console.log(body);
$done(body);