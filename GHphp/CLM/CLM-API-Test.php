<?php
include 'Token.php'; 
$company1 = $_POST["fcompany1"];
$email1 = $_POST["femail1"];
$name1 = $_POST["fname1"];
$glaw = $_POST["gname1"];
$TY = "Thanks for your submission. Please check your Email Inbox for further updates.";
$Err = "Cannot start workflow. Please refresh Access Token.";
//$company1 = "Company 123";
//$email1 = "jo.customer2290@gmail.com";
//$name1 = "JJ Abrams";

$postData = [ "Name" => "API Workflow",
              "Params" => "<root><Company>{$company1}</Company><Email>{$email1}</Email><Contact_Name>{$name1}</Contact_Name><Governing_LawText>{$glaw}</Governing_LawText></root>"
            ];


$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://apiuatna11.springcm.com/v2/3dfe9f2d-1734-46f4-9fea-dcd0d609fe5d/workflows',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS => json_encode($postData),
  CURLOPT_HTTPHEADER => array(
    'Authorization: Bearer ' . $token . '',
    'Content-Type: application/json'
  ),
));

$response = curl_exec($curl);
$resp1 = explode("\"", $response);
$iftest=$resp1[1];

if ($iftest == "Name") {
  echo $TY;
} else {
  echo $Err;
}

curl_close($curl);
