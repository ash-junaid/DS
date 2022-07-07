<?php
//$company1 = $_POST["companyname1"];
//$email1 = $_POST["cemail1"];
//$name1 = $_POST["cname1"];
$company1 = "Company 123";
$email1 = "jo.customer2290@gmail.com"
$name1 = "JJ Abrams";

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
  CURLOPT_POSTFIELDS =>'{
  "Name":"API Workflow",
  "Params": "<root><Company>{$company1}</Company><Email>{$email1}</Email><Contact_Name>{$name1}</Contact_Name></root>"
}',
  CURLOPT_HTTPHEADER => array(
    'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjY4MTg1ZmYxLTRlNTEtNGNlOS1hZjFjLTY4OTgxMjIwMzMxNyJ9.eyJUb2tlblR5cGUiOjUsIklzc3VlSW5zdGFudCI6MTY1NzE3ODA4NiwiZXhwIjoxNjU3MjA2ODg2LCJVc2VySWQiOiIwYWE5OWI5Ni1hMTAzLTQ3Y2EtOTAyMi04ZDI0OTgzZjBjM2IiLCJzaXRlaWQiOjEsInNjcCI6WyJzaWduYXR1cmUiLCJzcHJpbmdfcmVhZCIsInNwcmluZ193cml0ZSIsImV4dGVuZGVkIl0sImF1ZCI6IjgzNmFiYTViLTA1MjUtNDZkNS05YmZiLTdkY2JmNDE3OWIzMCIsImF6cCI6IjgzNmFiYTViLTA1MjUtNDZkNS05YmZiLTdkY2JmNDE3OWIzMCIsImlzcyI6Imh0dHBzOi8vYWNjb3VudC1kLmRvY3VzaWduLmNvbS8iLCJzdWIiOiIwYWE5OWI5Ni1hMTAzLTQ3Y2EtOTAyMi04ZDI0OTgzZjBjM2IiLCJhbXIiOlsiaW50ZXJhY3RpdmUiXSwiYXV0aF90aW1lIjoxNjU3MTc4MDgzLCJwd2lkIjoiNGE2NGY5OTYtZTk2OC00MWFjLWFmODAtZDdiYmViZDVhMDVmIn0.GyvgER6e43AuMOgDiI3XcJsxiZV1nMZrU00UvrAZ7LD7f6-t63iLGQg-Vjj9g-6lxTedtxYvqaXzdq4484rTBKccc2-wzJl8Epqmc_83C2et3KzjqYGdFyiR8DrKfNnGjdlMX02sACLpb1EJub4aViSlUQjlaQHTD-6K8G1fp2xm5KiHD2DursGcz6LpZ70lMfuu7QAz1T6fAGMEkDuKyuzOfOiIpt5mUlvymicrlOAhQyWbFOko01E_YzRhnsPf3x7hG1TVN8x8lF4Jobc1M7AtaCwM0rFlMKFz3L5BGF0AiOBCwAHY2EjpiGohLk14NfQ5qIiLvBsczJrfDWkCGw',
    'Content-Type: application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
