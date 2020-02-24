<?php

$name1 = $_POST["fname1"];
$email1 = $_POST["femail1"];
$age1 = $_POST["fage1"];
$address1 = $_POST["fadress1"];
$cnum = $_POST["fcnum1"];

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://demo.docusign.net/restapi/v2.1/accounts/7145655/envelopes",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS =>"{\n    \"accountId\": \"7145655\",\n    \"emailSubject\": \"API Example - Populating Data in Templates\",\n    \"templateId\": \"b854e0ee-7c6b-47ac-b80a-b60375be08ed\",\n    \"templateRoles\": [{\n        \"email\": \"{$email1}\",\n        \"name\": \"{name1}\",\n        \"roleName\": \"Member\",\n       \n        \"tabs\": {\n            \"textTabs\": [{\n                \"tabLabel\": \"caddress\",\n                \"value\": \"{address1}\"\n            }, \n            {\n                \"tabLabel\": \"age\",\n                \"value\": \"{age1}\"\n            }]\n        }\n    }],\n    \"status\": \"sent\"\n}",
  CURLOPT_HTTPHEADER => array(
    "X-DocuSign-Authentication: {\"Username\":\"stewie.griffin2290@gmail.com\",\"Password\":\"0lWiibvA9gsWYIZu8AnOKZSSYDw=\",\"IntegratorKey\": \"ea059d7d-8c39-4e2a-a17a-cb2079165cd6\"}",
    "Content-Type: application/json"
  ),
));

$response = curl_exec($curl);

curl_close($curl);
//echo $response;


$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://demo.docusign.net/restapi/v2.1/accounts/7145655/envelopes/2520f88f-cbbd-4e1e-8397-9c51dba03370/views/recipient",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS =>"{\n  \"returnUrl\": \"http://localhost/returnUrl\",\n  \"authenticationMethod\": \"None\",\n  \"email\": \"ash.junaid29@gmail.com\",\n  \"userName\": \"John Doe\",\n  \"clientUserId\": 1\n}",
  CURLOPT_HTTPHEADER => array(
    "X-DocuSign-Authentication: {\"Username\":\"stewie.griffin2290@gmail.com\",\"Password\":\"0lWiibvA9gsWYIZu8AnOKZSSYDw=\",\"IntegratorKey\": \"ea059d7d-8c39-4e2a-a17a-cb2079165cd6\"}",
    "Content-Type: application/json"
  ),
));

$response = curl_exec($curl);

curl_close($curl);
//echo $response;
$pieces = explode("\"", $response);
$response_url_temp=$pieces[3];
//echo $response_url_temp;
header("Location: $response_url_temp");


?>
