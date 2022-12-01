<?php

// Code to call ABN via webservice from ABN lookup service (AU govt): https://abr.business.gov.au/Tools/WebServices

// Created by Junaid Ashraf (Solution Engineer, DocuSign)

// Raw URL: https://abr.business.gov.au/abrxmlsearchRPC/AbrXmlSearch.asmx/ABRSearchByNameSimpleProtocol?name=orange&postcode=2300&legalName=&tradingName=&NSW=&SA=&ACT=&VIC=&WA=&NT=&QLD=&TAS=&authenticationGuid=3735f1af-652d-4920-987b-dfcbc1c6b97f

header('Content-Type: application/xml');
$name = "Big Name Brands";
$postcode = "2122";
$legalName = "";
$tradingName = "Big Name Brands";
$NSW = "";
$SA = "";
$ACT= "";
$VIC = "";
$WA = "";
$NT = "";
$QLD = "";
$TAS = "";
$authenticationGuid = "3735f1af-652d-4920-987b-dfcbc1c6b97f";
$xmlns = "http://abr.business.gov.au/ABRXMLSearchRPC/literalTypes";
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://abr.business.gov.au/abrxmlsearchRPC/AbrXmlSearch.asmx/ABRSearchByNameSimpleProtocol?name={$name}&postcode={$postcode}&legalName=&tradingName=&NSW=&SA=&ACT=&VIC=&WA=&NT=&QLD=&TAS=&authenticationGuid=3735f1af-652d-4920-987b-dfcbc1c6b97f',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',

));

$response = curl_exec($curl);
$NewXML = new SimpleXMLElement($response);
//$ABN = $NewXML->xpath('//ABRPayloadSearchResults/response/searchResultsList/searchResultsRecord/ABN/identifierValue');

//$ABN = $NewXML->ABRPayloadSearchResults[0]->response->searchResultsList->searchResultsRecord->ABN->identifierValue;
//$ABN = $response->xpath('//ABN/identifierValue');

//$ABN = $response->xpath('abr:ABRPayloadSearchResults/abr:response/abr:searchResultsList/abr:searchResultsRecord/abr:ABN/abr:identifierValue');
$ABN = $NewXML->xpath('$xmlns:ABRPayloadSearchResults/$xmlns:response/$xmlns:searchResultsList/$xmlns:searchResultsRecord/$xmlns:ABN/$xmlns:identifierValue');

//$xml1 = new SimpleXMLElement($response);

curl_close($curl);

echo $response;
//echo json_decode($ABN);

//echo $NewXML;


