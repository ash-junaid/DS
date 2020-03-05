<?php

$name1 = $_POST["fname1"];
$email1 = $_POST["femail1"];
$mem1 = $_POST["memnum"];
$address1 = $_POST["faddress1"];
$lnum = $_POST["loannum"];



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
 CURLOPT_POSTFIELDS =>"{\n    \"accountId\": \"7145655\",\n    \"emailSubject\": \"Please sign Loan Agreement - {$mem1}\",\n    \"templateId\": \"3838a6f0-2c6b-4567-b8b3-a5779e56048e\",\n    \"templateRoles\": [{\n        \"email\": \"{$email1}\",\n        \"name\": \"{$name1}\",\n        \"roleName\": \"Customer\",\n        \"tabs\": {\n            \"textTabs\": [{\n                \"tabLabel\": \"caddress\",\n                \"value\": \"{$address1}\"\n            }, \n            {\n            \"tabLabel\": \"member_num\",\n                \"value\": \"{$mem1}\"\n            }, \n            {\n            \"tabLabel\": \"loan_num\",\n                \"value\": \"{$lnum}\"\n            }, \n            {\n                \"tabLabel\": \"loan_acc\",\n                \"value\": \"\"\n            }]\n        }\n    }],\n    \"status\": \"sent\"\n}",
  CURLOPT_HTTPHEADER => array(
    "X-DocuSign-Authentication: {\"Username\":\"stewie.griffin2290@gmail.com\",\"Password\":\"0lWiibvA9gsWYIZu8AnOKZSSYDw=\",\"IntegratorKey\": \"ea059d7d-8c39-4e2a-a17a-cb2079165cd6\"}",
    "Content-Type: application/json"
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
?>
