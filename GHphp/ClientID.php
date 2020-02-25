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
  CURLOPT_POSTFIELDS =>"{\n    \"accountId\": \"7145655\",\n    \"emailSubject\": \"API Example - Populating Data in Templates\",\n    \"templateId\": \"b854e0ee-7c6b-47ac-b80a-b60375be08ed\",\n    \"templateRoles\": [{\n        \"email\": \"percy.jackson2290@gmail.com\",\n        \"name\": \"Junaid Ash\",\n        \"roleName\": \"Member\",\n        \"tabs\": {\n            \"textTabs\": [{\n                \"tabLabel\": \"age\",\n                \"value\": \"123\"\n            }, \n            {\n                \"tabLabel\": \"caddress\",\n                \"value\": \"12 St Syd\"\n            }]\n        }\n    }],\n    \"status\": \"sent\"\n}",
  CURLOPT_HTTPHEADER => array(
    "X-DocuSign-Authentication: {\"Username\":\"{{username}}\",\"Password\":\"{{password}}\",\"IntegratorKey\": \"{{clientId}}\"}",
    "Content-Type: application/json"
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
?>