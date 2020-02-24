<?php

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://demo.docusign.net/restapi/v2.1/accounts/7145655/envelopes",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS = json_encode([
"emailSubject" => "DocuSignAPI-CompositeTemplates",
"emailBlurb" =>"CompositeTemplatesSample1",
"status" => "sent",
"compositeTemplates"=>
["serverTemplates"=>
["sequence"=>"1",
"templateId"=>"ff32490f-58ab-4e26-a505-b32c863b2398"]],
["inlineTemplates"=>
["sequence"=>"1",
"recipients"=>
["signers"=>
["email" => $email1, "name" => $name1,"recipientId"=>"1","roleName"=>"Client"]]]]]),
?>