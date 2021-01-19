
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
    'Authorization: Bearer eyJ0eXAiOiJNVCIsImFsZyI6IlJTMjU2Iiwia2lkIjoiNjgxODVmZjEtNGU1MS00Y2U5LWFmMWMtNjg5ODEyMjAzMzE3In0.AQoAAAABAAUABwAACMidIbzYSAgAAEjrq2S82EgCAM2-DigiKy1Lk5aiHJOP1HsVAAEAAAAYAAEAAAAFAAAADQAkAAAANTBiZGI4OTItOWM3Yi00NGNkLWI2Y2MtZDk0YTg2Y2U2MzJhIgAkAAAANTBiZGI4OTItOWM3Yi00NGNkLWI2Y2MtZDk0YTg2Y2U2MzJhMAAA5J0uILzYSDcA4C-CYxk0m0W2Buyqt8xSSg.af5w0o6zujfoJ68hhbztmLjGc_pySXZ8eiur4rXyWxnF9A1QvXLcIzqf0HwUIlbNHTQPI8cs99Aq88pLn2IeFXP4nhIq0d5ISUJRTpzfvZQtyC8ZCEhSUrSGjWmTsMY1dpkhoZol44yYMv-FxL-O4rqVoCHL9oyDraFjYWTtHLEA3Qz3PQdqRFSUR-7bO2WuDSOh4qJl473CcZIRrUepUKjitBDDFCInhoiKMfXYMwNCYGCqsBG_Po7rHj4SE-cXs9rBIL6wJeM9N1jMmVFohr-VPuCebyPIJXpGyJcYsG2zGi88by7A1MpkvkG1jDdKnudb3-3m2Jx5-GQ9hBMlFw',
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
    'Authorization: Bearer eyJ0eXAiOiJNVCIsImFsZyI6IlJTMjU2Iiwia2lkIjoiNjgxODVmZjEtNGU1MS00Y2U5LWFmMWMtNjg5ODEyMjAzMzE3In0.AQoAAAABAAUABwAACMidIbzYSAgAAEjrq2S82EgCAM2-DigiKy1Lk5aiHJOP1HsVAAEAAAAYAAEAAAAFAAAADQAkAAAANTBiZGI4OTItOWM3Yi00NGNkLWI2Y2MtZDk0YTg2Y2U2MzJhIgAkAAAANTBiZGI4OTItOWM3Yi00NGNkLWI2Y2MtZDk0YTg2Y2U2MzJhMAAA5J0uILzYSDcA4C-CYxk0m0W2Buyqt8xSSg.af5w0o6zujfoJ68hhbztmLjGc_pySXZ8eiur4rXyWxnF9A1QvXLcIzqf0HwUIlbNHTQPI8cs99Aq88pLn2IeFXP4nhIq0d5ISUJRTpzfvZQtyC8ZCEhSUrSGjWmTsMY1dpkhoZol44yYMv-FxL-O4rqVoCHL9oyDraFjYWTtHLEA3Qz3PQdqRFSUR-7bO2WuDSOh4qJl473CcZIRrUepUKjitBDDFCInhoiKMfXYMwNCYGCqsBG_Po7rHj4SE-cXs9rBIL6wJeM9N1jMmVFohr-VPuCebyPIJXpGyJcYsG2zGi88by7A1MpkvkG1jDdKnudb3-3m2Jx5-GQ9hBMlFw',
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
//echo $sign_url

?>
<!DOCTYPE html>
<html>
    <head>
        <title>My Example</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
     <h2>APAC SE - Embedded Signing to Salesforce</h2>

     <h3> Please fill in the folloiwng details to start signing: </h3>



    </body>
</html>
<iframe src="<?php echo $sign_url; ?>" width="100%" height="100%" ></iframe>