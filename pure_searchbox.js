var icp_ori = /<div id="copyright" class="se-copyright">.+?<\/div>/;
var icp_tgt = '<div id="copyright" class="se-copyright">Powerful purification by mura :) [ver 0.2]</div>';

var body = $response.body;

$done(body.replace(icp_ori, icp_tgt).replace('</head>', '<link rel="stylesheet" type="text/css" href="https://rawcdn.githack.com/shinrai2/Qx.js/d76aa4914b62d95080f8d0434c2e5fcb5488055e/pure_searchbox.css?min=1" /></head>'));
