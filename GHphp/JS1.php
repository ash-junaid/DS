<?php

ini_set("allow_url_fopen", 1);
$json = file_get_contents('https://blockchain.info/ticker');
$obj = json_decode($json);
echo $obj->access_token;

?>