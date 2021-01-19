<?php
$name1 = $_POST["fname1"];
$email1 = $_POST["femail1"];
$age1 = $_POST["fage1"];
$address1 = $_POST["faddress1"];
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://demo.docusign.net/restapi//v2.1/accounts/4fbaccb3-876d-42f1-bac3-5677d9067c5f/envelopes',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>"{\n    \"accountId\": \"10899188\",\n    \"emailSubject\": \"API Example - Populating Data SFDC\",\n    \"templateId\": \"369e0018-da77-4050-a8df-db0d77f21f4c\",\n    \"templateRoles\": [{\n        \"email\": \"{$email1}\",\n        \"name\": \"{$name1}\",\n        \"clientUserId\": 1,\n        \"roleName\": \"Customer\",\n        \"tabs\": {\n            \"textTabs\": [{\n                \"tabLabel\": \"Current Address\",\n                \"value\": \"{$address1}\"\n            }, \n            {\n                \"tabLabel\": \"ABN\",\n                \"value\": \"{$age1}\"\n            }]\n        }\n    }],\n    \"status\": \"sent\"\n}",
  CURLOPT_HTTPHEADER => array(
    'Accept: application/json',
    'Authorization: Bearer eyJ0eXAiOiJNVCIsImFsZyI6IlJTMjU2Iiwia2lkIjoiNjgxODVmZjEtNGU1MS00Y2U5LWFmMWMtNjg5ODEyMjAzMzE3In0.AQoAAAABAAUABwCAmkKXzLzYSAgAgNplpQ-92EgCAM2-DigiKy1Lk5aiHJOP1HsVAAEAAAAYAAEAAAAFAAAADQAkAAAANTBiZGI4OTItOWM3Yi00NGNkLWI2Y2MtZDk0YTg2Y2U2MzJhIgAkAAAANTBiZGI4OTItOWM3Yi00NGNkLWI2Y2MtZDk0YTg2Y2U2MzJhMACAgbB0zLzYSDcA4C-CYxk0m0W2Buyqt8xSSg.mdaeflfMBJfIXMguvjjdPMrP1f0jVInkNGU357BY4KNm6aHlzRv3AdcAvb48FQjboBMSFqr8_g3wHFqrs9OjTt6GnXeIn-52MpHemTdBRA_UMrkVBkHUqK3l0YZ6fm3EFwKrfSVAFjNQtkIOeasRqLR_6nmKTZ37QU86GnEbL72gJ34_1RdxM8YbWoqlji4Yk2887nbaiojrgJKgNcAJVm_t446cDzbdFJ5BNcAUfCrJHHJvn0naQKt8zz7l6Wvv-X9eDqmsUiTNtzDH10BOGP3DFViOg8y_qX98W1q4u2rLl24rgkcbXw0SwITebYlEhM2M0lrIN-_ukSJyP25ohA',
    'Content-Type: application/json',
    'Cookie: acctLogin=True; BIGipDocuSign_Demo=!0JujKagN/XbCe4SU4V8NQL3lsxkc/fTyqOu+sv0AjvzK6IKTwNm4dgnZgXgyKRXwYeS1nZ0/N+J0zAA='
  ),
));

$response = curl_exec($curl);

curl_close($curl);

$pieces = explode("envelopes/", $response);
$response_url_temp=$pieces[1];
$pieces2 = explode("\"", $response_url_temp);
$resp2=$pieces2[0];
//echo $response;
////echo $resp2;
$curl = curl_init();
$uri2 = "https://demo.docusign.net/restapi//v2.1/accounts/4fbaccb3-876d-42f1-bac3-5677d9067c5f/envelopes/".$resp2."/views/recipient";
//echo $uri2;
curl_setopt_array($curl, array(
  CURLOPT_URL => $uri2,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS =>"{\n  \"returnUrl\": \"http://localhost/returnUrl\",\n  \"authenticationMethod\": \"None\",\n  \"email\": \"{$email1}\",\n  \"userName\": \"{$name1}\",\n  \"clientUserId\": 1\n}",

 CURLOPT_HTTPHEADER => array(
    'Accept: application/json',
    'Authorization: Bearer eyJ0eXAiOiJNVCIsImFsZyI6IlJTMjU2Iiwia2lkIjoiNjgxODVmZjEtNGU1MS00Y2U5LWFmMWMtNjg5ODEyMjAzMzE3In0.AQoAAAABAAUABwCAmkKXzLzYSAgAgNplpQ-92EgCAM2-DigiKy1Lk5aiHJOP1HsVAAEAAAAYAAEAAAAFAAAADQAkAAAANTBiZGI4OTItOWM3Yi00NGNkLWI2Y2MtZDk0YTg2Y2U2MzJhIgAkAAAANTBiZGI4OTItOWM3Yi00NGNkLWI2Y2MtZDk0YTg2Y2U2MzJhMACAgbB0zLzYSDcA4C-CYxk0m0W2Buyqt8xSSg.mdaeflfMBJfIXMguvjjdPMrP1f0jVInkNGU357BY4KNm6aHlzRv3AdcAvb48FQjboBMSFqr8_g3wHFqrs9OjTt6GnXeIn-52MpHemTdBRA_UMrkVBkHUqK3l0YZ6fm3EFwKrfSVAFjNQtkIOeasRqLR_6nmKTZ37QU86GnEbL72gJ34_1RdxM8YbWoqlji4Yk2887nbaiojrgJKgNcAJVm_t446cDzbdFJ5BNcAUfCrJHHJvn0naQKt8zz7l6Wvv-X9eDqmsUiTNtzDH10BOGP3DFViOg8y_qX98W1q4u2rLl24rgkcbXw0SwITebYlEhM2M0lrIN-_ukSJyP25ohA',
    'Content-Type: application/json',
    'Cookie: acctLogin=True; BIGipDocuSign_Demo=!0JujKagN/XbCe4SU4V8NQL3lsxkc/fTyqOu+sv0AjvzK6IKTwNm4dgnZgXgyKRXwYeS1nZ0/N+J0zAA='
  ),
));

$response = curl_exec($curl);

curl_close($curl);
$resp3 = explode("\"", $response);
$sign_url=$resp3[3];

//echo "$response_url_temp";
//header("Location: $sign_url");
//echo $sign_url;

?>
 <head>
        <title>My Example</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
     <h2>APAC SE J.A. - Embedded Signing to Salesforce (Demo)</h2>

     <h3> Please start contract below </h3>

<iframe src="<?php echo $sign_url; ?>" width="100%" height="100%" ></iframe>
