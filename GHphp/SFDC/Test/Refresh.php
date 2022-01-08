<?php

// Get refresh token every 20-25 days from Postman
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://account-d.docusign.com/oauth/token');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, "grant_type=refresh_token&refresh_token=eyJ0eXAiOiJNVCIsImFsZyI6IlJTMjU2Iiwia2lkIjoiNjgxODVmZjEtNGU1MS00Y2U5LWFmMWMtNjg5ODEyMjAzMzE3In0.AQoAAAABAAgABwCAz-A66tHZSAgAgE9FM33p2UgCAM2-DigiKy1Lk5aiHJOP1HsVAAEAAAAYAAoAAAAFAAAAUQAAACsAAAAtAAAALwAAADEAAAAyAAAAOAAAADMAAAA1AAAADQAkAAAAOWM3YjUzM2ItYWFjNy00YTBhLTljZDAtYjZjNzQwZjE0YTdjIgAkAAAAOWM3YjUzM2ItYWFjNy00YTBhLTljZDAtYjZjNzQwZjE0YTdjMACAfzeP6dHZSDcA4C-CYxk0m0W2Buyqt8xSSg.LpVqI8P8fWHnHcyICm1rzRlRGRYou5bfGQamrcDoYE8CYFizK6Lc0jPwCBV6HopJYGTBzwRXaF_wcOWi4cbM0ixk2dAcSoF0co6s-ydOsEo17E264T2DFuef9XGd4jdFQbn3o4UnDChF6K6jIYgludxTmgm2w3Cq53ZKtEHNp2bM5mL-K_j08L8vF5vgQDos-3wDkhwmVEmk1iEIvXa9Wh37w9JjWW66pMze-eRiMAAf_5HpSakqoptz-eFwZcrcf2qChnTwUO-slyuqHThc2KwEEccnMc8MlXgmts8OPgBY1ssZ-K4_ASiAP5rlOi3X0G6gupzAdCwIjqu6K-ECJg");

$headers = array();
$headers[] = 'Authorization: Basic OWM3YjUzM2ItYWFjNy00YTBhLTljZDAtYjZjNzQwZjE0YTdjOjQ0YjFhYzBhLTM1MjQtNDNiNi1iOTQwLWMwNWRjNjVmZmIzNg==';
$headers[] = 'Content-Type: application/x-www-form-urlencoded';
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$result = curl_exec($ch);
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}
$new_token=explode("\"", $result);
//echo $result;

//echo $new_token[3];
curl_close($ch);
?>