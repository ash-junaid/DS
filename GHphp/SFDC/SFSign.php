<?php
$name1 = $_POST["fname1"];
$email1 = $_POST["femail1"];
$age1 = $_POST["fage1"];
$address1 = $_POST["faddress1"];


$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://demo.docusign.net/restapi/v2.1/accounts/4fbaccb3-876d-42f1-bac3-5677d9067c5f/envelopes',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>"{\n    \"accountId\": \"10899188\",\n    \"emailSubject\": \"API Example - Populating Data SFDC\",\n    \"templateId\": \"369e0018-da77-4050-a8df-db0d77f21f4c\",\n    \"templateRoles\": [{\n        \"email\": \"{$email1}\",\n        \"name\": \"{$name1}\",\n        \"clientUserId\": 1,\n        \"roleName\": \"Customer\",\n        \"tabs\": {\n            \"textTabs\": [{\n                \"tabLabel\": \"Current_Address\",\n               \"value\": \"{$address1}\"\n            }, \n            {\n                \"tabLabel\": \"ABN\",\n                \"value\": \"{$age1}\"\n            }]\n        }\n    }],\n    \"status\": \"sent\"\n}",
  CURLOPT_HTTPHEADER => array(
    'Authorization: Bearer eyJ0eXAiOiJNVCIsImFsZyI6IlJTMjU2Iiwia2lkIjoiNjgxODVmZjEtNGU1MS00Y2U5LWFmMWMtNjg5ODEyMjAzMzE3In0.AQsAAAABAAUABwCAHwC9AjfZSAgAgF8jy0U32UgCAM2-DigiKy1Lk5aiHJOP1HsVAAEAAAAYAAoAAAAFAAAAUQAAACsAAAAtAAAALwAAADEAAAAyAAAAOAAAADMAAAA1AAAADQAkAAAANTBiZGI4OTItOWM3Yi00NGNkLWI2Y2MtZDk0YTg2Y2U2MzJhIgAkAAAANTBiZGI4OTItOWM3Yi00NGNkLWI2Y2MtZDk0YTg2Y2U2MzJhEgABAAAACwAAAGludGVyYWN0aXZlMAAAXDa7AjfZSDcA4C-CYxk0m0W2Buyqt8xSSg.UgaUHbeNiKFq0-c5MRf9aLg3sBHhxetl4Gb80EfQ3nz8KJeoqBuAWntcpX-JFynrqVXRELUJFkzxnXc-0Y0LKHbyt8XTRnqJTxVOxpZRSnrq6Iw0t5JpEf4G45ayDobePOJNyE03EaAJMMmBvaDmcBC71bek32b53M-MoFKk8gMOzGDYsaf_jTh7rVBTOtXWlDvOqyDNqtInD4-KDC9fg2gmR1thRKSAWzpJsx5mqE50mQ5mCJ1Ys2ti-qHYptKg2pAqnRz-UyFNrnJkHIXOWYMeQ0BKEn8evKmjUCd4OIItNO1lme3Jkd_HeisGcfjrhqK8ekwo-dS8rwalLdZToA',
    'Content-Type: application/json'
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
  CURLOPT_POSTFIELDS =>"{\n  \"returnUrl\": \"http://localhost:8888/MAMP/\",\n  \"authenticationMethod\": \"None\",\n  \"email\": \"{$email1}\",\n  \"userName\": \"{$name1}\",\n  \"clientUserId\": 1\n}",

CURLOPT_HTTPHEADER => array(
    'Accept: application/json',
    'Authorization: Bearer eyJ0eXAiOiJNVCIsImFsZyI6IlJTMjU2Iiwia2lkIjoiNjgxODVmZjEtNGU1MS00Y2U5LWFmMWMtNjg5ODEyMjAzMzE3In0.AQsAAAABAAUABwCAHwC9AjfZSAgAgF8jy0U32UgCAM2-DigiKy1Lk5aiHJOP1HsVAAEAAAAYAAoAAAAFAAAAUQAAACsAAAAtAAAALwAAADEAAAAyAAAAOAAAADMAAAA1AAAADQAkAAAANTBiZGI4OTItOWM3Yi00NGNkLWI2Y2MtZDk0YTg2Y2U2MzJhIgAkAAAANTBiZGI4OTItOWM3Yi00NGNkLWI2Y2MtZDk0YTg2Y2U2MzJhEgABAAAACwAAAGludGVyYWN0aXZlMAAAXDa7AjfZSDcA4C-CYxk0m0W2Buyqt8xSSg.UgaUHbeNiKFq0-c5MRf9aLg3sBHhxetl4Gb80EfQ3nz8KJeoqBuAWntcpX-JFynrqVXRELUJFkzxnXc-0Y0LKHbyt8XTRnqJTxVOxpZRSnrq6Iw0t5JpEf4G45ayDobePOJNyE03EaAJMMmBvaDmcBC71bek32b53M-MoFKk8gMOzGDYsaf_jTh7rVBTOtXWlDvOqyDNqtInD4-KDC9fg2gmR1thRKSAWzpJsx5mqE50mQ5mCJ1Ys2ti-qHYptKg2pAqnRz-UyFNrnJkHIXOWYMeQ0BKEn8evKmjUCd4OIItNO1lme3Jkd_HeisGcfjrhqK8ekwo-dS8rwalLdZToA',
    'Content-Type: application/json',
    'Cookie: acctLogin=True'
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

  <link rel="stylesheet" href="SBstyles.css">
    </head>
    <body>
     <h2>APAC SE J.A. - Embedded Signing to Salesforce (Demo)</h2>

     <h3> Please start contract below </h3>

<iframe src="<?php echo $sign_url; ?>" width="100%" height="100%" ></iframe>
