var icp_ori = /<div id="copyright" class="se-copyright">.+?<\/div>/;
var icp_tgt = '<div id="copyright" class="se-copyright">Powerful purification by mura :) [ver 0.2]</div>';

var body = $response.body;

$done(body.replace(icp_ori, icp_tgt).replace('</head>', '<link rel="stylesheet" type="text/css" href="https://raw.githack.com/shinrai2/Qx.js/main/pure_searchbox.css" /></head>'));
