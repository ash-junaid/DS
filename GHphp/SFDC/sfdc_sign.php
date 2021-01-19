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
    'Authorization: Bearer eyJ0eXAiOiJNVCIsImFsZyI6IlJTMjU2Iiwia2lkIjoiNjgxODVmZjEtNGU1MS00Y2U5LWFmMWMtNjg5ODEyMjAzMzE3In0.AQsAAAABAAUABwAA1OejdbzYSAgAABQLsri82EgCAM2-DigiKy1Lk5aiHJOP1HsVAAEAAAAYAAEAAAAKAAAADQAkAAAANTBiZGI4OTItOWM3Yi00NGNkLWI2Y2MtZDk0YTg2Y2U2MzJhIgAkAAAANTBiZGI4OTItOWM3Yi00NGNkLWI2Y2MtZDk0YTg2Y2U2MzJhEgABAAAACwAAAGludGVyYWN0aXZlMACA94t_dbzYSDcA4C-CYxk0m0W2Buyqt8xSSg.a9NJ4tR9-PaHWrIOBEgp4p7zN7_itT8Ueq4JCekpaJAy9NgBi045BMY_SNad9vD-MRG5d7xT1fnzQb7kqqi-EHMYmhtI9-9j_-9_13yzSGrOOF1-KRDaCwHU5ZAjBK895HK_zVOjsfmyMPFIr6gZUyEhTdYKMA4CqX9JG1_SvSNwpQrBRC6nQJfRAVcw6Jb5OVyLp72_FPq-L3Rtrm6sJ6CPqLrwm7mEZeXp9l42XKwRZQ4s-K_X-aoDwWfqdYbNLImlsRjH8Oi3DKW-rRGZJ9WAyOSTvADRLt0Jck5AS_ms-JjnkTEprjsu7FDRloLHWJCT6T6Tk2rdyguzC1s9NA',
    'Cookie: dtd=eyJ0eXAiOiJNVCIsImFsZyI6IlJTMjU2Iiwia2lkIjoiNjgxODVmZjEtNGU1MS00Y2U5LWFmMWMtNjg5ODEyMjAzMzE3In0.AQQAAAABAAwABwCAG5gsgVvYSAgAgNtepVJ62UgfAAEAAAA9AAAAZjYxYTdhM2QtYjk4ZC00Y2M4LTgwNzItOTRhM2Y4MjExNTViOzIwMjAtMDktMTggMDM6MTY6MDNaOzM7Mg.kQ8goN0cBZg1lYJfWsNHzzxcdF-wwOJOU2h18i5GMg00sXGJ4v7f0B9KekuXJXVk-JT5bpFLm6009qAn6-yBUw16fjYfycXyYJ3zVRgDn15KSKQWMBm2bLql1I7bMW45iTowaGSu62lHXYox11Gse_lFEPH5XaBPgvkBwKZ9CRVKKTygfDy7mN4KZmLw57QuTvbqEanlOsMf93C30ULW16quWjNGfM-8mYSRsmlGFIjKeV5qyGsHLdJVIAu3xRB7hDMCzDLaM6gyv2q6EC_RCIAqeAMujolU5PrK0rec3zGozS_s0lV6faGiHh1mbvplXgnbSjEPbuE1M-mp0esTww; __RequestVerificationToken=AYZ4Qsrdf5B5ObFZwUThgtAB0'
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
    'Authorization: Bearer eyJ0eXAiOiJNVCIsImFsZyI6IlJTMjU2Iiwia2lkIjoiNjgxODVmZjEtNGU1MS00Y2U5LWFmMWMtNjg5ODEyMjAzMzE3In0.AQsAAAABAAUABwAA1OejdbzYSAgAABQLsri82EgCAM2-DigiKy1Lk5aiHJOP1HsVAAEAAAAYAAEAAAAKAAAADQAkAAAANTBiZGI4OTItOWM3Yi00NGNkLWI2Y2MtZDk0YTg2Y2U2MzJhIgAkAAAANTBiZGI4OTItOWM3Yi00NGNkLWI2Y2MtZDk0YTg2Y2U2MzJhEgABAAAACwAAAGludGVyYWN0aXZlMACA94t_dbzYSDcA4C-CYxk0m0W2Buyqt8xSSg.a9NJ4tR9-PaHWrIOBEgp4p7zN7_itT8Ueq4JCekpaJAy9NgBi045BMY_SNad9vD-MRG5d7xT1fnzQb7kqqi-EHMYmhtI9-9j_-9_13yzSGrOOF1-KRDaCwHU5ZAjBK895HK_zVOjsfmyMPFIr6gZUyEhTdYKMA4CqX9JG1_SvSNwpQrBRC6nQJfRAVcw6Jb5OVyLp72_FPq-L3Rtrm6sJ6CPqLrwm7mEZeXp9l42XKwRZQ4s-K_X-aoDwWfqdYbNLImlsRjH8Oi3DKW-rRGZJ9WAyOSTvADRLt0Jck5AS_ms-JjnkTEprjsu7FDRloLHWJCT6T6Tk2rdyguzC1s9NA',
    'Cookie: dtd=eyJ0eXAiOiJNVCIsImFsZyI6IlJTMjU2Iiwia2lkIjoiNjgxODVmZjEtNGU1MS00Y2U5LWFmMWMtNjg5ODEyMjAzMzE3In0.AQQAAAABAAwABwCAG5gsgVvYSAgAgNtepVJ62UgfAAEAAAA9AAAAZjYxYTdhM2QtYjk4ZC00Y2M4LTgwNzItOTRhM2Y4MjExNTViOzIwMjAtMDktMTggMDM6MTY6MDNaOzM7Mg.kQ8goN0cBZg1lYJfWsNHzzxcdF-wwOJOU2h18i5GMg00sXGJ4v7f0B9KekuXJXVk-JT5bpFLm6009qAn6-yBUw16fjYfycXyYJ3zVRgDn15KSKQWMBm2bLql1I7bMW45iTowaGSu62lHXYox11Gse_lFEPH5XaBPgvkBwKZ9CRVKKTygfDy7mN4KZmLw57QuTvbqEanlOsMf93C30ULW16quWjNGfM-8mYSRsmlGFIjKeV5qyGsHLdJVIAu3xRB7hDMCzDLaM6gyv2q6EC_RCIAqeAMujolU5PrK0rec3zGozS_s0lV6faGiHh1mbvplXgnbSjEPbuE1M-mp0esTww; __RequestVerificationToken=AYZ4Qsrdf5B5ObFZwUThgtAB0'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
$resp3 = explode("\"", $response);
$sign_url=$resp3[3];

//echo "$response_url_temp";
//header("Location: $sign_url");
echo $sign_url

?>
