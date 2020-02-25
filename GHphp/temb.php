<?php

$name1 = $_POST["fname1"];
$email1 = $_POST["femail1"];
$age1 = $_POST["fage1"];
$address1 = $_POST["fadress1"];
$cnum = $_POST["fcnum1"];

<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "%7B%7BbaseUrl%7D%7D/envelopes",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS =>"{\n    \"accountId\": \"7145655\",\n    \"emailSubject\": \"API Example - Populating Data in Templates\",\n    \"templateId\": \"b854e0ee-7c6b-47ac-b80a-b60375be08ed\",\n    \"templateRoles\": [{\n        \"email\": \"{$email1}\",\n        \"name\": \"{$name1}\",\n        \"roleName\": \"Member\",\n        \"tabs\": {\n            \"textTabs\": [{\n                \"tabLabel\": \"age\",\n                \"value\": \"{$age}\"\n            }, \n            {\n                \"tabLabel\": \"caddress\",\n                \"value\": \"{$address1}\"\n            }]\n        }\n    }],\n    \"status\": \"sent\"\n}",
  CURLOPT_HTTPHEADER => array(
    "X-DocuSign-Authentication: {\"Username\":\"{{username}}\",\"Password\":\"{{password}}\",\"IntegratorKey\": \"{{clientId}}\"}",
    "Content-Type: application/json"
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
