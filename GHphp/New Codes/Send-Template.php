<?php

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
  CURLOPT_POSTFIELDS =>'{
    "emailSubject": "Please DocuSign This NDA for ABC Company",
    "emailBlurb": "Please let us know if you have any questions.",
    "status": "sent",
	"templateId":"5753483c-fb34-4bc8-a8c2-dd5f67080c6f",
	"templateRoles": [
		{
		"roleName": "Client",
		"email": "jo.customer2290@gmail.com",
		"name": "Jo Customer",
        "clientUserId": "1",
		"tabs": {
			"textTabs": [
				{
				"tabLabel": "caddress",
				"value": "123 Sydney St"
				},
                {
				"tabLabel": "pnumber",
				"value": "0411111111"
				}
			]
			}
		}
	]
}',
  CURLOPT_HTTPHEADER => array(
    'Authorization: Bearer eyJ0eXAiOiJNVCIsImFsZyI6IlJTMjU2Iiwia2lkIjoiNjgxODVmZjEtNGU1MS00Y2U5LWFmMWMtNjg5ODEyMjAzMzE3In0.AQsAAAABAAUABwCAyhJq4gXZSAgAgAo2eCUG2UgCAM2-DigiKy1Lk5aiHJOP1HsVAAEAAAAYAAoAAAAFAAAAUQAAACsAAAAtAAAALwAAADEAAAAyAAAAOAAAADMAAAA1AAAADQAkAAAAOWM3YjUzM2ItYWFjNy00YTBhLTljZDAtYjZjNzQwZjE0YTdjIgAkAAAAOWM3YjUzM2ItYWFjNy00YTBhLTljZDAtYjZjNzQwZjE0YTdjEgABAAAACwAAAGludGVyYWN0aXZlMAAAB0lo4gXZSDcA4C-CYxk0m0W2Buyqt8xSSg.x2XjIDvDeaX2f8ymC0uI2mAlggtA4cJEkOAoVqt1v-geCX04V30rBwFHaFpC2ZIsUjNYgArt-v05VXQ5DywjysPNIuhzfzVwrnX_OeOzo6iaDNR6vTLTlEiqtFpvu92ekBqIsHAnCwmKP6LFgCHk14ezP-ZPZdv4JiIv_RHQyITx4a5gXwCZOGiO0HCtoGg3n8uViGFP-jUyiV8VFNkdzyYlWpgqS3FS0WJJKvb27ruqDxnlk60uYejaB2gS9GynbQTDRLKkskBc4RixysV9wekOIn0nJocCaajQq75aFCn5TLqxxEmH_A_3zBgUyrCsF2M1xUOor2EPb3ojyKdtwQ',
    'Content-Type: application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);

// Create Recipient View

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://demo.docusign.net/restapi/v2.1/accounts/4fbaccb3-876d-42f1-bac3-5677d9067c5f/envelopes/a98f1b5f-b4b5-4706-9e26-dedeac76d3ae/views/recipient',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
  "authenticationMethod": "email",
  "email": "jo.customer2290@gmail.com",
  "returnUrl": "https://www.google.com",
  "userName": "Jo Customer",
  "clientUserId": "1"
}',
  CURLOPT_HTTPHEADER => array(
    'Authorization: Bearer eyJ0eXAiOiJNVCIsImFsZyI6IlJTMjU2Iiwia2lkIjoiNjgxODVmZjEtNGU1MS00Y2U5LWFmMWMtNjg5ODEyMjAzMzE3In0.AQsAAAABAAUABwCAyhJq4gXZSAgAgAo2eCUG2UgCAM2-DigiKy1Lk5aiHJOP1HsVAAEAAAAYAAoAAAAFAAAAUQAAACsAAAAtAAAALwAAADEAAAAyAAAAOAAAADMAAAA1AAAADQAkAAAAOWM3YjUzM2ItYWFjNy00YTBhLTljZDAtYjZjNzQwZjE0YTdjIgAkAAAAOWM3YjUzM2ItYWFjNy00YTBhLTljZDAtYjZjNzQwZjE0YTdjEgABAAAACwAAAGludGVyYWN0aXZlMAAAB0lo4gXZSDcA4C-CYxk0m0W2Buyqt8xSSg.x2XjIDvDeaX2f8ymC0uI2mAlggtA4cJEkOAoVqt1v-geCX04V30rBwFHaFpC2ZIsUjNYgArt-v05VXQ5DywjysPNIuhzfzVwrnX_OeOzo6iaDNR6vTLTlEiqtFpvu92ekBqIsHAnCwmKP6LFgCHk14ezP-ZPZdv4JiIv_RHQyITx4a5gXwCZOGiO0HCtoGg3n8uViGFP-jUyiV8VFNkdzyYlWpgqS3FS0WJJKvb27ruqDxnlk60uYejaB2gS9GynbQTDRLKkskBc4RixysV9wekOIn0nJocCaajQq75aFCn5TLqxxEmH_A_3zBgUyrCsF2M1xUOor2EPb3ojyKdtwQ',
    'Content-Type: application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;

