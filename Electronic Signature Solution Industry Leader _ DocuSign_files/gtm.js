
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"529",
  
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;jQuery(\".hero-media__links__item\").each(function(){jQuery(this).is(\":visible\")\u0026\u0026(a=jQuery(this))});var b=a.attr(\"data-ga\").split(\"|\")[2];return b?jQuery.trim(b):\"not set\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;jQuery(\"[data-module\\x3dsecondary_panel]\").each(function(){jQuery(this).is(\":visible\")\u0026\u0026(a=jQuery(this))});var b=jQuery.trim(a.find(\"a\").attr(\"data-ga\"));return\"\"!=b?b.split(\"|\")[2]:\"not set\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;jQuery(\"[data-module\\x3dsecondary_panel_2]\").each(function(){jQuery(this).is(\":visible\")\u0026\u0026(a=jQuery(this))});var b=jQuery.trim(a.find(\"a\").attr(\"data-ga\"));return\"\"!=b?b.split(\"|\")[2]:\"not set\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;jQuery(\"[data-module\\x3dsecondary_panel_3]\").each(function(){jQuery(this).is(\":visible\")\u0026\u0026(a=jQuery(this))});var b=jQuery.trim(a.find(\"a\").attr(\"data-ga\"));return\"\"!=b?b.split(\"|\")[2]:\"not set\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return void 0==homepageCT.userSegment?\"not set\":homepageCT.userSegment})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCategory"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"HIW Value Prop\"==",["escape",["macro",5],8,16],")return 1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"Brand\"==",["escape",["macro",5],8,16],")return 1})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_ga"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=",["escape",["macro",8],8,16],".split(\".\");return a[2]+\".\"+a[3]}catch(b){return!1}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return!!window.Optanon\u0026\u0026\"1\"})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",11],8,16],".replace(\/.*.docusign.\/gi,\"\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;try{return(a=!!window.DS_C_Object\u0026\u0026window.DS_C_Object)\u0026\u0026a.country?a.country:!1}catch(b){throw\"GTM variable missing reference - CEV\";}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var f=location,g=f.pathname.substring(1).toLowerCase(),d=!1,b;try{if(b={\"go.docusign.com\":{cobranded:1,nar:1},\"www.docusign.ca\":{\"\":1,\"contact-sales\":2,features:2,industries:2,products:2,solutions:2,\"products-and-pricing\":2},\"www.docusign.mx\":{esign:2,\"contacto-ventas\":2,productos:2,\"features-and-benefits\":2,compania:2,\"como-funciona\/legalidad\/global\/mexico\":2,\"productos-y-precios\":2},\"www.docusign.jp\":{\"contact-us\":2,\"contact-sales\":2,products:2,solutions:2,industries:2,\"features-and-benefits\":2,\nresources:2,partner:2,\"products-and-pricing\":2,\"news-center\":2,\"how-it-works\/legality\/global\/japan\":2},\"www.docusign.com.es\":{\"productos-y-precios\":2,productos:2,\"como-funciona\/legalidad\/global\/espana\":2,\"caracteristicas_y_beneficios\/movil\":2},\"www.docusign.com.br\":{\"empresa\/contato-vendas\":2,\"produtos-e-precos\":2,produtos:2,solucoes:2,\"pequenas-e-medias-empresas\":2,\"grandes-empresas\":2,legislacao:2},\"www.docusign.nl\":{\"producten-en-pricing\":2,\"bedrijf\/neem-contact-met-ons-op\":2,products:2,\"neem-contact-op-met-sales\":2,\n\"functies-en-voordelen\/mobiel\":2,individuen:2,bedrijf:2,bedrijven:2},\"www.docusign.de\":{\"produkte-und-preise\":2,\"vertrieb-kontaktieren\":2,eidas:2,\"produkte\/mobile-app\":2,produkte:2,\"wie-es-funktioniert\":2,unternehmen:2,kontakt:2},\"www.docusign.fr\":{\"produits-et-tarifs\":2,societe:2,produits:2,\"signature-solutions\":2,partenaires:2,resources:2,\"fonctionnalites-et-benefices\/mobile\":2,\"contacter-ventes\":2},\"www.docusign.com.au\":{\"company\/contact-us\":2,\"contact-sales\":2,products:2,solutions:2,industries:2,\n\"features-and-benefits\":2,resources:2,partner:2,\"products-and-pricing\":2},\"www.docusign.co.uk\":{\"company\/contact-us\":2,\"contact-sales\":2,products:2,solutions:2,industries:2,\"features-and-benefits\":2,resources:2,partner:2,\"products-and-pricing\":2},\"www.docusign.com\":{\"\":1,\"company\/contact-us\":2,\"contact-sales\":2,customers:1,faq:1,\"features-and-benefits\/mobile\":1,\"features-and-benefits\":2,\"how-it-works\":1,industries:2,partner:2,products:2,\"products-and-pricing\":1,resources:1,solutions:2,\"why-docusign\":2}}[f.host])for(var a in b)if(!1===\nd){if(\"\"===a\u0026\u0026g===a\u0026\u0026(d=!0)||\"\"!==a\u0026\u0026-1\u003Cg.search(a))if(void 0===e\u0026\u0026void 0===c){var e=a;var c=b[a]}else e.length\u003C=a.length\u0026\u0026(e=a,c=b[a]);if(d)break}if(c)return c}catch(h){}return 0})();"]
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":",1,",
      "vtp_name":"OptanonActiveGroups"
    },{
      "function":"__r"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__c",
      "vtp_value":"GTM-NRWN2ZP"
    },{
      "function":"__c",
      "vtp_value":"UA-39550292-1"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_stripWww":false,
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_undefined_to":"4",
      "vtp_javascript":["template","(function(){return{ad:2,ae:2,af:2,ag:3,ai:3,al:2,am:2,ao:2,aq:2,ar:3,as:1,at:2,au:1,aw:3,ax:2,az:2,ba:2,bb:3,bd:1,be:2,bf:2,bg:2,bh:2,bi:2,bj:2,bl:2,bm:3,bn:1,bo:3,br:3,bs:3,bt:1,bv:2,bw:2,by:2,bz:3,ca:4,cc:1,cd:2,cf:2,cg:2,ch:2,ci:2,ck:2,cl:3,cm:2,cn:1,co:3,cr:3,cu:3,cv:2,cw:2,cx:1,cy:2,cz:2,de:2,dj:2,dk:2,dm:3,\"do\":3,dz:2,ec:3,ee:2,eg:2,eh:2,er:2,es:2,et:2,fi:2,fj:1,fk:3,fm:1,fo:2,fr:2,ga:2,gb:2,gd:3,ge:2,gf:2,gg:2,gh:2,gi:2,gl:2,gm:2,gn:2,gp:2,gq:2,gr:2,gs:3,gt:3,gu:1,gw:2,gy:3,hk:1,hm:2,hn:3,\nhr:2,ht:3,hu:2,id:1,ie:2,il:2,im:2,\"in\":1,io:1,iq:2,ir:2,is:2,it:2,je:2,jm:3,jo:2,jp:1,ke:2,kg:2,kh:1,ki:1,km:2,kn:3,kp:1,kr:1,kw:2,ky:3,kz:2,la:1,lb:2,lc:3,li:2,lk:1,lr:2,ls:2,lt:2,lu:2,lv:2,ly:2,ma:2,mc:2,md:2,me:2,mf:2,mg:2,mh:1,mk:2,ml:2,mm:1,mn:1,mo:1,mp:1,mq:2,mr:2,ms:3,mt:2,mu:2,mv:1,mw:2,mx:4,my:1,mz:2,na:2,nc:2,ne:2,nf:1,ng:2,ni:3,nl:2,no:2,np:1,nr:1,nu:1,nz:1,om:2,pa:3,pe:3,pf:2,pg:1,ph:1,pk:1,pl:2,pm:2,pn:1,pr:3,ps:2,pt:2,pw:1,py:3,qa:2,re:2,ro:2,rs:2,ru:2,rw:2,sa:2,sb:1,sc:2,sd:2,se:2,\nsg:1,sh:2,si:2,sj:2,sk:2,sl:2,sm:2,sn:2,so:2,sr:3,ss:2,st:2,sv:3,sx:2,sy:2,sz:2,tc:3,td:2,tf:2,tg:2,th:1,tj:2,tk:1,tl:1,tm:2,tn:2,to:1,tr:2,tt:3,tv:1,tw:1,tz:2,ua:2,ug:2,um:1,us:4,uy:3,uz:2,va:2,vc:3,ve:3,vg:3,vi:3,vn:1,vu:1,wf:2,ws:1,ye:2,yt:2,za:2,zm:2,zw:2}[",["escape",["macro",13],8,16],"]})();"]
    },{
      "function":"__c",
      "vtp_value":"L7L3QFB6AZERXCALORVQKA"
    },{
      "function":"__c",
      "vtp_value":"VE2DCWJYIZEXTJLCSVE5XM"
    },{
      "function":"__c",
      "vtp_value":"XKYHPPAZNVESJNUP6MCKL4"
    },{
      "function":"__c",
      "vtp_value":"MCPL5GJ4JNGJFM2STZZV3G"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",28],
      "vtp_defaultValue":["macro",29],
      "vtp_map":["list",["map","key","1","value",["macro",30]],["map","key","2","value",["macro",31]],["map","key","3","value",["macro",32]],["map","key","4","value",["macro",29]]]
    },{
      "function":"__c",
      "vtp_value":"DQTAWOHQF5GGTCQWS4YGYB"
    },{
      "function":"__c",
      "vtp_value":"XWZANL52NRCG7LYPL6JJT2"
    },{
      "function":"__c",
      "vtp_value":"QMBKIQD6RFDPTBMIWNP3QO"
    },{
      "function":"__c",
      "vtp_value":"G72UZDXBLJETTMLDGOTN2L"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",28],
      "vtp_defaultValue":["macro",34],
      "vtp_map":["list",["map","key","1","value",["macro",35]],["map","key","2","value",["macro",36]],["map","key","3","value",["macro",37]],["map","key","4","value",["macro",34]]]
    },{
      "function":"__c",
      "vtp_value":"UA-39550292-3"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_component":"FRAGMENT",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",11],
      "vtp_map":["list",["map","key","www.docusign.com","value","North America"],["map","key","www.docusign.ca","value","North America"],["map","key","www.docusign.co.uk","value","International"],["map","key","www.docusign.fr","value","International"],["map","key","www.docusign.in","value","International"],["map","key","www.docusign.com.br","value","International"],["map","key","www.docusign.nl","value","International"],["map","key","www.docusign.jp","value","International"],["map","key","www.docusign.de","value","International"],["map","key","www.docusign.com.au","value","International"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",11],
      "vtp_map":["list",["map","key","www.docusign.com","value","United States"],["map","key","www.docusign.ca","value","Canada"],["map","key","www.docusign.co.uk","value","United Kingdom"],["map","key","www.docusign.fr","value","France"],["map","key","www.docusign.in","value","India"],["map","key","www.docusign.com.br","value","Brazil"],["map","key","www.docusign.nl","value","Netherlands"],["map","key","www.docusign.jp","value","Japan"],["map","key","www.docusign.de","value","Germany"],["map","key","www.docusign.com.au","value","Australia"]]
    },{
      "function":"__c",
      "vtp_value":"docudemandbase"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageTitle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(Non-Company Visitor)",
      "vtp_name":"demandbase_sid"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"(Non-Company Visitor)",
      "vtp_name":"industry"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"(Non-Company Visitor)",
      "vtp_name":"revenue_range"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"(Non-Company Visitor)",
      "vtp_name":"audience"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"(Non-Company Visitor)",
      "vtp_name":"company_name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(Non-Company Visitor)",
      "vtp_name":"sub_industry"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"(Non-Company Visitor)",
      "vtp_name":"employee_range"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(Non-Company Visitor)",
      "vtp_name":"audience_segment"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(Non-Company Visitor)",
      "vtp_name":"city"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(Non-Company Visitor)",
      "vtp_name":"state"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(Non-Company Visitor)",
      "vtp_name":"country_name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(Non-Company Visitor)",
      "vtp_name":"watch_list_campaign_code"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"(Non-Company Visitor)",
      "vtp_name":"web_site"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"socialNetwork"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"socialAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"socialTarget"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"registry_country"
    },{
      "function":"__d",
      "vtp_elementSelector":"#successful-submit",
      "vtp_selectorType":"CSS"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",12],
      "vtp_defaultValue":"e4cffd97",
      "vtp_map":["list",["map","key","com","value","e4cffd97"],["map","key","com.au","value","0e325c07"]]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",12],
      "vtp_defaultValue":"415912e9",
      "vtp_map":["list",["map","key","com","value","415912e9"],["map","key","ca","value","415912e9"],["map","key","co.uk","value","e012dd4e"],["map","key","com.es","value","c6108e94"],["map","key","de","value","af73dce8"],["map","key","fr","value","0e15423d"],["map","key","nl","value","1c032384"],["map","key","com.au","value","00faf863"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",12],
      "vtp_defaultValue":"dabcb733",
      "vtp_map":["list",["map","key","com","value","dabcb733"],["map","key","com.au","value","0c29bb83"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",12],
      "vtp_defaultValue":"f23cbe98",
      "vtp_map":["list",["map","key","com","value","f23cbe98"],["map","key","ca","value","f23cbe98"],["map","key","co.uk","value","ba3a5dd6"],["map","key","com.es","value","fff151cc"],["map","key","de","value","46a9d021"],["map","key","fr","value","ba7f1183"],["map","key","nl","value","11fe19b0"],["map","key","com.au","value","0e325c07"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",12],
      "vtp_defaultValue":"en-US",
      "vtp_map":["list",["map","key","com","value","en-US"],["map","key","ca","value","en-CA"],["map","key","fr","value","fr-FR"],["map","key","in","value","en-IN"],["map","key","co.uk","value","en-GB"],["map","key","nl","value","nl-NL"],["map","key","jp","value","ja-JP"],["map","key","de","value","de-DE"],["map","key","com.br","value","pt-BR"],["map","key","mx","value","es-MX"],["map","key","com.es","value","es-ES"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",12],
      "vtp_defaultValue":"Chat with us",
      "vtp_map":["list",["map","key","com","value","Chat with us"],["map","key","com.au","value","Chat with us"],["map","key","co.uk","value","Chat with us"],["map","key","fr","value","Chattez en direct"],["map","key","de","value","Chatten sie mit uns"],["map","key","nl","value","Chat met ons"],["map","key","com.br","value","Converse conosco"],["map","key","com.es","value","Chatee con nosotros"],["map","key","jp","value","チャットによるサポート"],["map","key","mx","value","Chatee con nosotros"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",12],
      "vtp_defaultValue":"5731W000000TNyA",
      "vtp_map":["list",["map","key","com","value","5731W000000TNyA"],["map","key","com.au","value","5731W000000TNy5"],["map","key","co.uk","value","5731W000000TNyC"],["map","key","fr","value","5731W000000TNy7"],["map","key","de","value","5731W000000TNy8"],["map","key","nl","value","5731W000000TNy9"],["map","key","com.br","value","5731W000000TNy6"],["map","key","com.es","value","5731W000000TNyB"],["map","key","jp","value","5731W000000TNyF"],["map","key","mx","value","5731W000000TNyG"]]
    },{
      "function":"__f"
    },{
      "function":"__d",
      "vtp_selectorType":"CSS",
      "vtp_elementSelector":"submit-comprova"
    },{
      "function":"__c",
      "vtp_value":"UA-39550292-4"
    },{
      "function":"__c",
      "vtp_value":"docusign.com, docusign.co.uk, docusign.com.au, docusign.ca, docusign.fr, docusign.in, docusign.nl, docyousign.com.br"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"panel1Click"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"panel2Click"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"panel3Click"
    },{
      "function":"__d",
      "vtp_elementSelector":"[data-ga=\"navigation|top|contact sales\"]",
      "vtp_attributeName":"data-ga",
      "vtp_selectorType":"CSS"
    },{
      "function":"__j",
      "vtp_name":"document.location.pathname"
    },{
      "function":"__c",
      "vtp_value":"EMEA"
    },{
      "function":"__c",
      "vtp_value":"EMEA"
    },{
      "function":"__c",
      "vtp_value":"LATAM"
    },{
      "function":"__c",
      "vtp_value":"NAMER"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    }],
  "tags":[{
      "function":"__html",
      "priority":1000001,
      "teardown_tags":["list",["tag",1,0]],
      "once_per_load":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/geo.docusign.com\/ds_carmen_wrapper.min.js?w_geo=1\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":270
    },{
      "function":"__html",
      "priority":101,
      "once_per_load":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/compliance.docusign.com\/DS_oneTrust_wrapper.min.js\" type=\"text\/gtmscript\" charset=\"UTF-8\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Efunction OptanonWrapper(){if(window.OptanonWrapperCalled)return!1;window.OptanonWrapperCalled=!0;window.dataLayer\u0026\u0026window.dataLayer.push({event:\"oneTrust_InitAllCookieCategories\"});window.OptanonWrapperWrapper\u0026\u0026\"function\"===typeof window.OptanonWrapperWrapper\u0026\u0026window.OptanonWrapperWrapper();setTimeout(function(){window.OptanonWrapperCalled=!1},5E3)}window.$!==window.jQuery\u0026\u0026void 0===window.$\u0026\u0026void 0!==window.jQuery\u0026\u0026(window.$=window.jQuery.noConflict());\nDS_oneTrust_wrapper.init({1:function(){console.log(\"Calling everything in 1\")},2:function(){console.log(\"Calling everything in 2\")},3:function(){console.log(\"Calling everything in 3\")},4:function(){console.log(\"Calling everything in 4\")}},{serviceHostnameString:\"compliance.docusign.com\",geoHostnameString:\"geo.docusign.com\",countryRetrievalPathnameString:\"\/country\",defaultPolicyString:\"en_US\",jquerySourceString:\"https:\/\/compliance.docusign.com\/jquery_1_12_4.min.js\",countryRetrievalGlobalObjectCountryCallback:function(){var a=\nwindow;return a\u0026\u0026a.DS_C_Object\u0026\u0026a.DS_C_Object.country},countryRetrievalDataParserCallback:function(a){try{return JSON\u0026\u0026JSON.parse(a)}catch(b){return!1}}});\u003C\/script\u003E\n\u003Cstyle\u003E\n  \/* override styles for optanon banner *\/\n  .optanon-alert-box-bg .optanon-alert-box-button-container {max-width:33%;}\n  @media only screen and (max-width: 47em) {\n    .optanon-alert-box-bg .optanon-alert-box-button-container {max-width:none}\n  }\n\u003C\/style\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":220
    },{
      "function":"__html",
      "priority":5,
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(c,a){window.mixpanel=a;var h,d;var b=c.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=(\"https:\"===c.location.protocol?\"https:\":\"http:\")+\"\/\/cdn.mxpnl.com\/libs\/mixpanel-2.2.min.js\";var e=c.getElementsByTagName(\"script\")[0];e.parentNode.insertBefore(b,e);a._i=[];a.init=function(b,c,f){function e(a,b){var c=b.split(\".\");2==c.length\u0026\u0026(a=a[c[0]],b=c[1]);a[b]=function(){a.push([b].concat(Array.prototype.slice.call(arguments,0)))}}var g=a;\"undefined\"!==typeof f?g=a[f]=[]:f=\"mixpanel\";\ng.people=g.people||[];h=\"disable track track_pageview track_links track_forms register register_once unregister identify alias name_tag set_config people.set people.increment people.track_charge people.append\".split(\" \");for(d=0;d\u003Ch.length;d++)e(g,h[d]);a._i.push([b,c,f])};a.__SV=1.2})(document,window.mixpanel||[]);mixpanel.init(\"a4ee8d8b6f1745aa7258839a6a8ac8c9\");jQuery(\"body\").trigger(\"event.mixpanel.init\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":94
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/sp.analytics.yahoo.com\/spp.pl?a=10001286934827\u0026.yp=19492\u0026js=no",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",18],
      "tag_id":38
    },{
      "function":"__img",
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/sp.analytics.yahoo.com\/spp.pl?a=10001286934827\u0026.yp=19493\u0026js=no",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",18],
      "tag_id":39
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":52
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"0",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1069244687",
      "vtp_conversionLabel":"NitDCLfDlgIQj8Lt_QM",
      "vtp_url":["macro",19],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":63
    },{
      "function":"__hl",
      "tag_id":67
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"955174297",
      "vtp_conversionLabel":"fx7lCKTVmlwQmZu7xwM",
      "vtp_url":["macro",19],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":90
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"0",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"949750955",
      "vtp_conversionLabel":"C0DrCKDY2GMQq5nwxAM",
      "vtp_url":["macro",19],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":98
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"0",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"949750955",
      "vtp_conversionLabel":"VbSqCKK642MQq5nwxAM",
      "vtp_url":["macro",19],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":99
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"0",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"949750955",
      "vtp_conversionLabel":"GB6sCObZ0WMQq5nwxAM",
      "vtp_url":["macro",19],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":100
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"949750955",
      "vtp_conversionLabel":"VjKTCNWiyWcQq5nwxAM",
      "vtp_url":["macro",19],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":134
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"949750955",
      "vtp_conversionLabel":"DpsfCLaqyWcQq5nwxAM",
      "vtp_url":["macro",19],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":135
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"949750955",
      "vtp_conversionLabel":"9ngYCNy7xWcQq5nwxAM",
      "vtp_url":["macro",19],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":136
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":164
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":169
    },{
      "function":"__opt",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_optimizeContainerId":["macro",20],
      "vtp_gaSettings":["macro",22],
      "tag_id":173
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"949750955",
      "vtp_conversionLabel":"Yo-ECJOejHMQq5nwxAM",
      "vtp_url":["macro",19],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":175
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"949750955",
      "vtp_conversionLabel":"pQdOCPzNqXQQq5nwxAM",
      "vtp_url":["macro",19],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":177
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":180
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"1.0",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"949750955",
      "vtp_currencyCode":"USD",
      "vtp_conversionLabel":"kYAfCO7a4WQQq5nwxAM",
      "vtp_url":["macro",19],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":186
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"949750955",
      "vtp_conversionLabel":"v1EwCOCejHgQq5nwxAM",
      "vtp_url":["macro",19],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":191
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=46370\u0026conversionId=237553\u0026fmt=gif",
      "tag_id":198
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=46370\u0026conversionId=231788\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",18],
      "tag_id":200
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":215
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":219
    },{
      "function":"__bzi",
      "once_per_event":true,
      "vtp_id":"445396",
      "tag_id":251
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=445396\u0026conversionId=473636\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",18],
      "tag_id":252
    },{
      "function":"__gclidw",
      "once_per_load":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":253
    },{
      "function":"__asp",
      "once_per_load":true,
      "vtp_pixelId":["macro",33],
      "vtp_customerId":["macro",38],
      "vtp_conversionValueCurrency":"USD",
      "tag_id":256
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"942035356",
      "vtp_conversionLabel":"zOXfCJLl7pIBEJyjmcED",
      "vtp_url":["macro",19],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":266
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"942035356",
      "vtp_conversionLabel":"zOXfCJLl7pIBEJyjmcED",
      "vtp_url":["macro",19],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":276
    },{
      "function":"__hl",
      "tag_id":279
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"1500",
      "vtp_uniqueTriggerId":"31363_320",
      "tag_id":280
    },{
      "function":"__cl",
      "tag_id":281
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"31363_400",
      "tag_id":282
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"31363_401",
      "tag_id":283
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"31363_402",
      "tag_id":284
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"31363_403",
      "tag_id":285
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"500",
      "vtp_uniqueTriggerId":"31363_479",
      "tag_id":286
    },{
      "function":"__fsl",
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"31363_543",
      "tag_id":287
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"31363_584",
      "tag_id":288
    },{
      "function":"__html",
      "setup_tags":["list",["tag",81,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar _GA={};_GA.pageURI=document.location.pathname.toLowerCase()+document.location.search;_GA.readCookie=function(a){a+=\"\\x3d\";for(var c=document.cookie.split(\";\"),d=0;d\u003Cc.length;d++){for(var e=c[d];\" \"==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(a))return e.substring(a.length,e.length)}return\"\"};_GA.createCookie=function(a,c,d){if(d){var e=new Date;e.setTime(e.getTime()+1E3*d);d=\"; expires\\x3d\"+e.toGMTString()}else d=\"\";document.cookie=a+\"\\x3d\"+c+d+\"; path\\x3d\/\"};\nif(_GA.readCookie(\"pageCount\")){var count=parseInt(_GA.readCookie(\"pageCount\"));_GA.createCookie(\"pageCount\",\"\",0);_GA.createCookie(\"pageCount\",count+1,1800)}else _GA.createCookie(\"pageCount\",1,1800);_GA.trackPageview=function(a){dataLayer.push({event:\"trackPageview\",page:a})};\n_GA.trackEvent=function(a,c,d,e,g,f){f?dataLayer.push({event:\"trackEvent\",eventCategory:a,eventAction:c,eventLabel:d,eventInteraction:g,eventCallback:function(){window.location=f},eventTimeout:2E3}):dataLayer.push({event:\"trackEvent\",eventCategory:a,eventAction:c,eventLabel:d,eventInteraction:g})};\njQuery(document).ready(function(a){a(\"body\").on(\"click\",\"a\",function(c){var d=\/\\.(doc|jpg|png|xls|ppt.*|pdf|xls.*|zip|txt|js|mov|avi|epub|mobi|msi)$\/i;c=a(this);var e=\"undefined\"!=typeof c.attr(\"href\")?c.attr(\"href\"):\"\",g=e.match(",["escape",["macro",11],8,16],")?!0:!1,f=!0;if(!e.match(\/^javascript:\/i)\u0026\u0026\"\"!=e){var b=[];b.value=0;b.non_i=!1;b.callBack=e;c.attr(\"href\").match(\/\\\/member\\\/MemberLogin\\.aspx\/)?(d=_GA.readCookie(\"pageCount\"),1==d\u0026\u0026_GA.setCD(\"7\",d),_GA.createCookie(\"pageCount\",\"\",0),b.category=\"member-login\",\nb.action=_GA.pageURI,b.label=d):c.attr(\"data-ga\")?(d=c.attr(\"data-ga\").split(\"|\"),b.category=d[0],b.action=d[1],b.label=d[2],\"video-cta\"==b.category\u0026\u0026dataLayer.push({event:\"trackVideoConversion\"})):c.attr(\"href\").match(\/\\\/demo\/)?(b.category=\"demo-click\",b.action=_GA.pageURI):c.attr(\"href\").match(\/\\\/trial\/)?(b.category=\"trial-click\",b.action=_GA.pageURI):c.attr(\"href\").match(\/\\\/checkoutds\\\/checkout\/)?(b.category=\"buy-click\",b.action=_GA.pageURI):e.match(d)?(d=\/[.]\/.exec(e)?\/[^.]+$\/.exec(e):void 0,\nb.category=\"download\",b.action=\"click-\"+d[0],b.label=e.replace(\/ \/g,\"-\")):e.match(\/facebook\\.com\\\/sharer\\.php\/i)?(dataLayer.push({event:\"trackSocial\",socialNetWork:\"facebook\",socialAction:\"share\",socialTarget:_GA.pageURI}),f=!1):e.match(\/twitter\\.com\\\/intent\\\/tweet\/i)?(dataLayer.push({event:\"trackSocial\",socialNetWork:\"twitter\",socialAction:\"tweet\",socialTarget:_GA.pageURI}),f=!1):e.match(\/linkedin.com\\.com\\\/shareArticle\/i)?(dataLayer.push({event:\"trackSocial\",socialNetWork:\"linkedin\",socialAction:\"share\",\nsocialTarget:_GA.pageURI}),f=!1):e.match(\/^https?:\/i)\u0026\u0026!g?(b.category=\"external\",b.action=\"link\",b.label=e.replace(\/^https?:\\\/\\\/\/i,\"\"),b.non_i=!0):f=!1;if(1==f){if(void 0==c.attr(\"target\")||\"_blank\"!=c.attr(\"target\").toLowerCase())return _GA.trackEvent(b.category,b.action,b.label,b.value,b.non_i,b.callBack),!1;_GA.trackEvent(b.category,b.action,b.label,b.value,b.non_i);return!0}}c.hasClass(\"fancybox\")\u0026\u0026\"\"==e\u0026\u0026(b=[],b.value=0,c.attr(\"data-ga\")\u0026\u0026(d=c.attr(\"data-ga\").split(\"|\"),b.category=d[0],b.action=\nd[1],b.label=d[2]),_GA.trackEvent(b.category,b.action,b.label))})});jQuery(\"body\").on(\"click\",\"button\",function(a){var c=$(this);c.attr(\"data-ga\")\u0026\u0026(a=[],c=c.attr(\"data-ga\").split(\"|\"),a.category=c[0],a.action=c[1],a.label=c[2],_GA.trackEvent(a.category,a.action,a.label))});jQuery(\"body\").on(\"click\",\"input\",function(a){var c=$(this);c.attr(\"data-ga\")\u0026\u00260!=c[0].checked\u0026\u0026(a=[],c=c.attr(\"data-ga\").split(\"|\"),a.category=c[0],a.action=c[1],a.label=c[2],_GA.trackEvent(a.category,a.action,a.label))});\njQuery(\".nav-tabs\").on(\"click\",\"a\",function(a){a=jQuery(this);a=a.text().toLowerCase();_GA.trackEvent(\"tabs-click\",_GA.pageURI,a)});jQuery(\".panel h4 a\").on(\"click\",function(a){a=jQuery(this);a=a.text();_GA.trackEvent(\"expand\",\"click\",a)});jQuery(\".hero-media__links\").on(\"mousedown\",\"a\",function(a){dataLayer.push({event:\"featuredClick\"})});jQuery('div[data-module\\x3d\"secondary_panel\"]').on(\"mousedown\",\"a\",function(a){jQuery(this).is(\":visible\")\u0026\u0026dataLayer.push({event:\"panel1Click\"})});\njQuery('div[data-module\\x3d\"secondary_panel_2\"]').on(\"mousedown\",\"a\",function(a){jQuery(this).is(\":visible\")\u0026\u0026dataLayer.push({event:\"panel2Click\"})});jQuery('div[data-module\\x3d\"secondary_panel_3\"]').on(\"mousedown\",\"a\",function(a){jQuery(this).is(\":visible\")\u0026\u0026dataLayer.push({event:\"panel3Click\"})});dataLayer.push({event:\"customLoaded\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":50
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/fast.wistia.net\/static\/iframe-api-v1.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E_GA.trackWistia=function(){var a=jQuery(\".wistia_embed\")[0].wistiaApi,h;options={};var d=[];var k=function(){var b,a,c;var f=a=0;for(c=d.length;f\u003Cc;f++)(b=d[f])\u0026\u0026(a+=1);return a\/d.length};a.ready(function(){var b,e;var c=0;for(b=Math.floor(a.duration());0\u003C=b?c\u003C=b:c\u003E=b;0\u003C=b?++c:--c)d.push(!1);d[0]=!0;if(\"playing\"===a.state()){var f=[];c=b=0;for(e=Math.floor(a.time());0\u003C=e?b\u003C=e:b\u003E=e;c=0\u003C=e?++b:--b)f.push(d[c]=!0);return f}});a.bind(\"secondchange\",function(a){return d[a]=!0});var l=[.25,.5,.75,1];var m=\nfunction(b){return a.bind(\"secondchange\",function(e){e=k();if(0\u003Cd.length\u0026\u0026e\u003E=b)return dataLayer.push({event:\"trackEvent\",eventCategory:\"video\",eventAction:\"\"+Math.round(100*b)+\"%\",eventLabel:a.name()}),this.unbind})};var g=0;for(h=l.length;g\u003Ch;g++){var n=l[g];m(n)}a.bind(\"secondchange\",function(b){return 0\u003Cd.length?a.trigger(\"percentwatched\",k()):a.trigger(\"percentwatched\",0)});a.bind(\"play\",function(){dataLayer.push({event:\"trackEvent\",eventCategory:\"video\",eventAction:\"play\",eventLabel:a.name()})});\na.bind(\"end\",function(){dataLayer.push({event:\"trackEvent\",eventCategory:\"video\",eventAction:\"Complete\",eventLabel:a.name()})})};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":53
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar videoEventName,videoTitle;_YT={init:function(){0!==jQuery('iframe[src*\\x3d\"youtube.com\"]').length\u0026\u0026(jQuery('iframe[src*\\x3d\"youtube.com\/embed\/\"]').each(function(){var a=jQuery(this).attr(\"src\");-1===a.indexOf(\"?\")?jQuery(this).attr(\"src\",a+\"?enablejsapi\\x3d1\"):jQuery(this).attr(\"src\",a+\"\\x26enablejsapi\\x3d1\")}),jQuery.getScript(\"https:\/\/www.youtube.com\/iframe_api\",function(){setTimeout(_YT.onYouTubeIframeAPIReady,500)}))}};var playerArray=[];\n_YT.onYouTubeIframeAPIReady=function(){for(var a=document.getElementsByTagName(\"iframe\"),b=a.length;b--;)\/youtube.com\\\/embed\/.test(a[b].src)\u0026\u0026playerArray.push(new YT.Player(a[b],{events:{onStateChange:_YT.onPlayerStateChange,onError:_YT.onPlayerError,onReady:_YT.onPlayerReady}}))};_YT.onPlayerReady=function(a){a=a.target.getVideoUrl().match(\/v=([^\u0026]+)\/)[1];videoTitle=\"https:\/\/www.youtube.com\/embed\/\"+a;dataLayer.push({event:\"trackEvent\",eventCategory:\"Video\",eventAction:\"init\",eventLabel:videoTitle})};\n_YT.onPlayerStateChange=function(a){a.data==YT.PlayerState.PLAYING\u0026\u0026setTimeout(_YT.onPlayerPercent,1E3,a.target);a.data==YT.PlayerState.PLAYING\u0026\u0026(videoEventName=\"play\");a.data==YT.PlayerState.PAUSED\u0026\u0026(videoEventName=\"pause\");a.data==YT.PlayerState.ENDED\u0026\u0026(videoEventName=\"complete\");videoEventName\u0026\u0026dataLayer.push({event:\"trackEvent\",eventCategory:\"Video\",eventAction:videoEventName,eventLabel:videoTitle})};\n_YT.onPlayerError=function(a){dataLayer.push({event:\"trackEvent\",eventCategory:\"Video\",eventAction:\"error\",eventLabel:a.target.src+\"-\"+a.data})};\n_YT.onPlayerPercent=function(a){if(a.getPlayerState()==YT.PlayerState.PLAYING){var b=1.5\u003E=a.getDuration()-a.getCurrentTime()?1:(Math.floor(a.getCurrentTime()\/a.getDuration()*4)\/4).toFixed(2);if(!a.lastP||b\u003Ea.lastP)a.lastP=b,dataLayer.push({event:\"trackEvent\",eventCategory:\"Video\",eventAction:100*b+\"%\",eventLabel:videoTitle});1!=a.lastP\u0026\u0026setTimeout(_YT.onPlayerPercent,1E3,a)}};_YT.init();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":54
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\n\t\u003Cscript type=\"text\/gtmscript\"\u003Evar _elqQ=_elqQ||[];_elqQ.push([\"elqSetSiteId\",\"566810826\"]);_elqQ.push([\"elqTrackPageView\"]);(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/img.en25.com\/i\/elqCfg.min.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\t",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":62
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,c,e,d){a=b.createElement(c);b=b.getElementsByTagName(c)[0];a.async=1;a.id=d;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+e;d=document.getElementsByTagName(\"script\");for(c=d.length;c--;)if(d[c].src==e)return!0;b.parentNode.insertBefore(a,b)})(window,document,\"script\",\"scripts.demandbase.com\/1IEYtQv1.min.js\",\"demandbase_js_lib\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":64
    },{
      "function":"__html",
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"trackPageview\",page:window.location.pathname+window.location.hash.replace(\"#\",\"?\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":68
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"4001782\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E\u003Cnoscript\u003E\u003Cimg src=\"\/\/bat.bing.com\/action\/0?ti=4001782\u0026amp;Ver=2\" height=\"0\" width=\"0\" style=\"display:none; visibility: hidden;\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":69
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"357123711145934\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=357123711145934\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":71
    },{
      "function":"__html",
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar _GA={};window.jQuery\u0026\u0026(_GA.jQuery=!0);(function(a,b,d,c,e,f,g){a.GoogleAnalyticsObject=e;a[e]=a[e]||function(){(a[e].q=a[e].q||[]).push(arguments)};a[e].l=1*new Date;f=b.createElement(d);g=b.getElementsByTagName(d)[0];f.async=1;f.src=c;g.parentNode.insertBefore(f,g)})(window,document,\"script\",\"\/\/www.google-analytics.com\/analytics.js\",\"ga\");_GA.getDomain=function(a){return(a.replace(\/^https?:\\\/\\\/\/i,\"\").split(\"\/\")[0].split(\".\").reverse()[1]+\".\"+a.replace(\/^https?:\\\/\\\/\/i,\"\").split(\"\/\")[0].split(\".\").reverse()[0]).toLowerCase()};\n_GA.hitCallbackHandler=function(a){window.location.href=a};_GA.setCD=function(a,b){ga(\"set\",\"dimension\"+a,b)};_GA.trackPageview=function(a){if(_GA.readCookie(\"pageCount\")){var b=parseInt(_GA.readCookie(\"pageCount\"));_GA.createCookie(\"pageCount\",\"\",0);_GA.createCookie(\"pageCount\",b+1,1800)}else _GA.createCookie(\"pageCount\",1,1800);ga(\"send\",\"pageview\",a)};_GA.setVirtualPage=function(a){ga(\"set\",{page:a})};\n_GA.trackEvent=function(a,b,d,c,e,f){f?ga(\"send\",\"event\",a,b,d,c,{nonInteraction:e,hitCallback:function(){_GA.hitCallbackHandler(f)}}):ga(\"send\",\"event\",a,b,d,c,e)};_GA.trackSocial=function(a,b){ga(\"send\",\"social\",a,b,_GA.thisDomain,{page:_GA.pageURI})};_GA.createCookie=function(a,b,d){if(d){var c=new Date;c.setTime(c.getTime()+1E3*d);d=\"; expires\\x3d\"+c.toGMTString()}else d=\"\";document.cookie=a+\"\\x3d\"+b+d+\"; path\\x3d\/\"};\n_GA.readCookie=function(a){a+=\"\\x3d\";for(var b=document.cookie.split(\";\"),d=0;d\u003Cb.length;d++){for(var c=b[d];\" \"==c.charAt(0);)c=c.substring(1,c.length);if(0==c.indexOf(a))return c.substring(a.length,c.length)}return\"\"};_GA.updateSearch=function(){_GA.trackPageview(window.location.pathname+window.location.hash.replace(\"#\",\"?\"));console.log(\"updateSearch\")};_GA.delay=300;_GA.accountUniversal=",["escape",["macro",39],8,16],";_GA.fullHostname=document.location.hostname.toLowerCase();_GA.thisDomain=_GA.getDomain(_GA.fullHostname);\n_GA.pageURI=document.location.pathname.toLowerCase()+document.location.search;_GA.hrefRedirect=\"\";ga(\"create\",_GA.accountUniversal,\"auto\");ga(\"require\",\"displayfeatures\");ga(\"require\",\"linkid\",\"linkid.js\");var search_matches=window.location.pathname.match(\/\\\/results(.*)\/);search_matches?_GA.updateSearch():_GA.trackPageview();dataLayer.push({event:\"initLoaded\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":86
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(d,a,b,f,e){d[e]=d[e]||[];d[e].push({projectId:\"10000\",properties:{pixelId:\"24181\"}});var c=a.createElement(b);c.src=f;c.async=!0;c.onload=c.onreadystatechange=function(){var a=this.readyState,c=d[e];if(!a||\"complete\"==a||\"loaded\"==a)try{var b=YAHOO.ywa.I13N.fireBeacon;d[e]=[];d[e].push=function(a){b([a])};b(c)}catch(g){}};a=a.getElementsByTagName(b)[0];b=a.parentNode;b.insertBefore(c,a)})(window,document,\"script\",\"https:\/\/s.yimg.com\/wi\/ytc.js\",\"dotq\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":92
    },{
      "function":"__html",
      "setup_tags":["list",["tag",2,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Emixpanel.track_links(\".video-bg-block .container .buttons-wrapper .btn-yellow\",\"Homepage Click\",{\"Homepage Button\":\"Main CTA\"});mixpanel.track_links(\".header-bottom-bar .commercial-buttons .pane-bundle-mini-cta .btn-yellow\",\"Homepage Click\",{\"Homepage Button\":\"Free Trial (TN)\"});jQuery(\".header-bottom-bar .container\").on(\"click\",'a[href\\x3d\"https:\/\/www.docusign.com\/products-and-pricing\"]',function(){mixpanel.track(\"Homepage Click\",{\"Homepage Button\":\"Pricing (TN)\"})});\nmixpanel.track_links(\"#sticky-navigation .sticky-container .btn-yellow\",\"Homepage Click\",{\"Homepage Button\":\"Free Trial (FN)\"});mixpanel.track_links(\"#sticky-navigation .sticky-container .btn-white\",\"Homepage Click\",{\"Homepage Button\":\"Pricing (FN)\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":95
    },{
      "function":"__html",
      "setup_tags":["list",["tag",50,0]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Lead\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=357123711145934\u0026amp;ev=Lead\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":102
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Emixpanel.track(\"View Pricing\",{\"Pricing Page Type\":\"Plans and Pricing - Real Estate\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":104
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Ewindow.uetq=window.uetq||[];window.uetq.push({ec:\"navigation\",ea:\"cta\",el:\"login\",ev:\"0\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":123
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003EjQuery(\"a[data-ga\\x3d'navigation|top|log in']\").click(function(){window.dotq=window.dotq||[];window.dotq.push({projectId:\"10000\",properties:{pixelId:\"24181\",qstrings:{et:\"custom\",ec:\"loginbutton\"}}})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":124
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EjQuery(\".commercial-buttons .btn-transparent\").mousedown(function(){jQuery(\"body\").append('\\x3cimg id\\x3d\"linkedin-login\" src\\x3d\"https:\/\/www.bizographics.com\/collect\/?fmt\\x3dgif\\x26url\\x3dloginbuttonclick.docusign.com\\x26pid\\x3d1248\" width\\x3d\"1px!important\" height\\x3d\"1px!important\" border\\x3d\"0\" alt\\x3d\"\" \/\\x3e');jQuery(\"#linkedin-login\").hide()});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":129
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003EjQuery('a[href\\x3d\"http:\/\/bit.ly\/w4i9download\"]').click(function(){ga(\"send\",\"event\",\"Support - Download W-4 I-9 Forms\",\"Download\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":139
    },{
      "function":"__html",
      "setup_tags":["list",["tag",2,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Emixpanel.track(\"View Contact Form\",{\"Contact Form Type\":\"\/company\/contact-us\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":141
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Emixpanel.track(\"Completed Contact Form\",{\"Contact Form Type\":\"\/company\/contact-us\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":142
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"trackPageview\",page:\"\/thankyou\/contact\",pageTitle:\"Contact Us Form Submitted (US)\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":144
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"trackPageview\",page:\"\/thankyou\/contact\",pageTitle:\"Contact Us Form Submitted (UK)\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":145
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"trackPageview\",page:\"\/thankyou\/contact\",pageTitle:\"Contact Us Form Submitted (CA)\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":146
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"trackPageview\",page:\"\/thankyou\/contact\",pageTitle:\"Contact Us Form Submitted (FR)\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":147
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"trackPageview\",page:\"\/thankyou\/contact\",pageTitle:\"Contact Us Form Submitted (AU)\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":148
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"trackPageview\",page:\"\/thankyou\/contact\",pageTitle:\"Contact Us Form Submitted (JP)\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":149
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"trackPageview\",page:\"\/thankyou\/contact\",pageTitle:\"Contact Us Form Submitted (DE)\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":150
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ega(\"send\",\"event\",\"Webform\",\"Submit\",\"Developer Center Newsletter\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":151
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_linkedin_data_partner_id=\"46370\";\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=document.getElementsByTagName(\"script\")[0],a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":153
    },{
      "function":"__html",
      "setup_tags":["list",["tag",2,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Emixpanel.track(\"View Pricing\",{\"Pricing Page Type\":\"vC dotCOM PnP Test\"});mixpanel.track_links(\".general-personal\",\"PnP Button Click\",{\"Buy Now Button\":\"Personal\"});mixpanel.track_links(\".general-standard\",\"PnP Button Click\",{\"Buy Now Button\":\"Standard\"});mixpanel.track_links(\".general-business-pro\",\"PnP Button Click\",{\"Buy Now Button\":\"Business Pro\"});mixpanel.track_links(\".general-schedule\",\"PnP Button Click\",{\"Buy Now Button\":\"Schedule A Call - General\"});\nmixpanel.track_links(\".real-estate-personal\",\"PnP Button Click\",{\"Buy Now Button\":\"RE Personal\"});mixpanel.track_links(\".real-estate-realtors\",\"PnP Button Click\",{\"Buy Now Button\":\"REALTORS\"});mixpanel.track_links(\".real-estate-schedule\",\"PnP Button Click\",{\"Buy Now Button\":\"RE Schedule a Call - RE\"});mixpanel.track_links(\".developers-basic-api\",\"PnP Button Click\",{\"Buy Now Button\":\"Basic API\"});mixpanel.track_links(\".developers-intermediate-api\",\"PnP Button Click\",{\"Buy Now Button\":\"Intermediate API\"});\nmixpanel.track_links(\".developers-advanced-api\",\"PnP Button Click\",{\"Buy Now Button\":\"Advanced API\"});mixpanel.track_links(\".developers-schedule-demo\",\"PnP Button Click\",{\"Buy Now Button\":\"Schedule a Call - DEV\"});mixpanel.track_links(\".get-free-edition\",\"PnP Button Click\",{\"PnP Button\":\"Get Free Edition\"});mixpanel.track_links(\".developers-get-started\",\"PnP Button Click\",{\"PnP Button\":\"Developers Get Started\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":156
    },{
      "function":"__html",
      "setup_tags":["list",["tag",2,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Emixpanel.track(\"View Pricing\",{\"Pricing Page Type\":\"vB dotCOM PnP Test\"});mixpanel.track_links(\".general-personal\",\"PnP Button Click\",{\"Buy Now Button\":\"Personal\"});mixpanel.track_links(\".general-standard\",\"PnP Button Click\",{\"Buy Now Button\":\"Standard\"});mixpanel.track_links(\".general-business-pro\",\"PnP Button Click\",{\"Buy Now Button\":\"Business Pro\"});mixpanel.track_links(\".general-schedule\",\"PnP Button Click\",{\"Buy Now Button\":\"Schedule A Call - General\"});\nmixpanel.track_links(\".real-estate-personal\",\"PnP Button Click\",{\"Buy Now Button\":\"RE Personal\"});mixpanel.track_links(\".real-estate-realtors\",\"PnP Button Click\",{\"Buy Now Button\":\"REALTORS\"});mixpanel.track_links(\".real-estate-schedule\",\"PnP Button Click\",{\"Buy Now Button\":\"RE Schedule a Call - RE\"});mixpanel.track_links(\".developers-basic-api\",\"PnP Button Click\",{\"Buy Now Button\":\"Basic API\"});mixpanel.track_links(\".developers-intermediate-api\",\"PnP Button Click\",{\"Buy Now Button\":\"Intermediate API\"});\nmixpanel.track_links(\".developers-advanced-api\",\"PnP Button Click\",{\"Buy Now Button\":\"Advanced API\"});mixpanel.track_links(\".developers-schedule-demo\",\"PnP Button Click\",{\"Buy Now Button\":\"Schedule a Call - DEV\"});mixpanel.track_links(\".get-free-edition\",\"PnP Button Click\",{\"PnP Button\":\"Get Free Edition\"});mixpanel.track_links(\".developers-get-started\",\"PnP Button Click\",{\"PnP Button\":\"Developers Get Started\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":157
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"num3n\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":158
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nxebn\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n\n\u003Cimg src=\"https:\/\/dc.ads.linkedin.com\/collect\/?fmt=gif\u0026amp;url=baixeoebook.docusign.com\/button\u0026amp;pid=46370\" width=\"1\" height=\"1\" border=\"0\" alt=\"\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":176
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":" \n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Lead\");\u003C\/script\u003E \n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=357123711145934\u0026amp;ev=Lead\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E \n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":178
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b={\"www.docusign.com\":{orgId:\"f00000000030713\",domain:\".docusign.com\"},\"www.docusign.ca\":{orgId:\"f00000000053482\",domain:\".docusign.ca\"},\"www.docusign.co.uk\":{orgId:\"f00000000040914\",domain:\".docusign.co.uk\"},\"www.docusign.com.au\":{orgId:\"f00000000051136\",domain:\".docusign.com.au\"},\"www.docusign.de\":{orgId:\"f00000000053483\",domain:\".docusign.de\"},\"www.docusign.fr\":{orgId:\"f00000000043908\",domain:\".docusign.fr\"}},c=window.location.hostname;if(c in b){var a=document.createElement(\"script\");\na.type=\"text\/javascript\";a.async=!0;a.setAttribute(\"data-id\",\"bec\");a.setAttribute(\"org-id\",b[c].orgId);a.setAttribute(\"domain\",b[c].domain);a.setAttribute(\"session-timeout\",432E5);a.setAttribute(\"show-link-block\",!0);a.src=document.location.protocol+\"\/\/www.docusign.com\/sites\/default\/files\/cpn\/383117.js?nocache\\x3d1\";b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":179
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(c,a){window.mixpanel=a;var h,d;var b=c.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=(\"https:\"===c.location.protocol?\"https:\":\"http:\")+\"\/\/cdn.mxpnl.com\/libs\/mixpanel-2.2.min.js\";var e=c.getElementsByTagName(\"script\")[0];e.parentNode.insertBefore(b,e);a._i=[];a.init=function(b,c,f){function e(a,b){var c=b.split(\".\");2==c.length\u0026\u0026(a=a[c[0]],b=c[1]);a[b]=function(){a.push([b].concat(Array.prototype.slice.call(arguments,0)))}}var g=a;\"undefined\"!==typeof f?g=a[f]=[]:f=\"mixpanel\";\ng.people=g.people||[];h=\"disable track track_pageview track_links track_forms register register_once unregister identify alias name_tag set_config people.set people.increment people.track_charge people.append\".split(\" \");for(d=0;d\u003Ch.length;d++)e(g,h[d]);a._i.push([b,c,f])};a.__SV=1.2})(document,window.mixpanel||[]);mixpanel.init(\"5d834813be526f286462deb3a92b2f99\");jQuery(\"body\").trigger(\"event.mixpanel.init\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":181
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nx68b\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":187
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/dc.ads.linkedin.com\/collect\/?pid=46370\u0026amp;conversionId=164268\u0026amp;fmt=gif\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":188
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.setAttribute(\"data-id\",\"bec\");a.setAttribute(\"org-id\",\"f00000000030713\");a.setAttribute(\"domain\",\".docusign.com\");a.setAttribute(\"session-timeout\",432E5);a.setAttribute(\"show-link-block\",!0);a.src=document.location.protocol+\"\/\/ccdn.b0e8.com\/conv_v3.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":199
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Econsole.log(\"GA - GT - DW\");\nfunction DS_GASetupConstructor(f,t,g,u){function v(b,e,c,h){var a=this;a.whiteListObject=q(c);a.commandOptionObject=b;a.getXDomainLinker=function(b){return n[a.instanceNameString](function(a){return b(a.get(\"linkerParam\"))})};a.instanceNameString=h||\"ga\";a.gaInitScriptTag=document.body.appendChild(p({textContent:w(a.instanceNameString)}));a.gaScriptTag=function(){var a=document.querySelector('[src\\x3d\"https:\/\/www.google-analytics.com\/analytics.js\"]');return a?a:m.body.appendChild(p({src:\"https:\/\/www.google-analytics.com\/analytics.js\"}))}();a.gaInstanceNamespace=\nn[a.instanceNameString];a.gaInstanceNamespace(\"create\",a.commandOptionObject.create);for(var d in a.commandOptionObject)\"create\"!==d\u0026\u0026\"require\"!==d\u0026\u0026\"plugins\"!==d\u0026\u0026a.gaInstanceNamespace(d,a.commandOptionObject[d]);if(a.commandOptionObject.require)for(var g in a.commandOptionObject.require)a.commandOptionObject.require[g]?a.gaInstanceNamespace(\"require\",a.commandOptionObject.require[g]):a.gaInstanceNamespace(\"require\",g);if(a.commandOptionObject.plugins)for(var f in a.commandOptionObject.plugins)a.gaInstanceNamespace(f,\na.commandOptionObject.plugins[f]);a.commandOptionObject.set\u0026\u0026a.commandOptionObject.set.location?a.gaInstanceNamespace(\"set\",\"location\",r(a.commandOptionObject.set.location,e)):a.gaInstanceNamespace(\"set\",\"location\",r(m.location.href,e));return a}function q(b){for(var e={},c=0;c\u003Cb.length;c++)e[b[c].toLowerCase()]=!0;return e}function p(b){var e=m.createElement(\"script\"),c;for(c in b)e[c]=b[c];return m.body.appendChild(e)}function w(b){return\"window.GoogleAnalyticsObject \\x3d '\"+b+\"';window.\"+b+\"\\x3dwindow.\"+\nb+\"||function(){(\"+b+\".q\\x3d\"+b+\".q||[]).push(arguments)};\"+b+\".l\\x3d+new Date\"}function r(b,e){var c=[],h=\/\\?\/g,a=\/\u0026\/g,d=\/#\/g,f=\/=\/g;h=b.split(h);d=b.split(d);if(1\u003Ch.length\u0026\u0026g\u0026\u0026\"number\"===typeof g.length\u0026\u00260\u003Cg.length){var m=q(g);a=h[1].split(a);for(var k=0;k\u003Ca.length;k++){k+1===a.length\u0026\u0026(a[k]=a[k].replace(\/#(.*)\/,\"\"));var l=a[k].split(f);if(m[l[0].toLowerCase()]){if(l[1])for(var n in e){var p=new RegExp(e[n],\"i\");if(p.test(l[1])){l[1]=(\"-DSRedacted \"+n+\"-\").replace(\" \",\"_\");break}}c.push([l[0],l[1]].join(\"\\x3d\"))}}return h[0]+\n\"?\"+c.join(\"\\x26\")+(1\u003Cd.length?\"#\"+d[1]:\"\")}return 1\u003Ch.length?h[0]+(1\u003Cd.length?\"#\"+d[1]:\"\"):b}var n=window,m=document;if(f\u0026\u0026f.create\u0026\u0026f.create.trackingId)return new v(f,t,g,u);throw\"need a tracking id - DS_GA\";};\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar DS_GA_instance=DS_GASetupConstructor({create:{trackingId:",["escape",["macro",21],8,16],",cookieDomain:\"auto\",allowLinker:!0},require:{linker:\"\",ec:\"\"},set:{customTask:function(a){a.set(\"dimension9\",a.get(\"clientId\"))}},plugins:{\"linker:autoLink\":\"docusign.ca docusign.com docusign.com.au docusign.com.br docusign.com.es docusign.co.uk docusign.de docusign.fr docusign.in docusign.jp docusign.mx docusign.nl docebosaas.com\".split(\" \")}},{email:\"^[A-Za-z0-9._%+\\x3d-?!#$%^\\x26*{}\/|`'*~]+@(?:[A-Za-z0-9.-]+.)+[A-Za-z]{2,}$\",\nguid:\"^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$\",phone:\"^\\\\d{3}(-|.|_|%20|\\\\+)\\\\d{3}(-|.|_|%20|\\\\+)\\\\d{4}$\"},\"utm_medium utm_source utm_content utm_campaign utm_term gclid Channel cName Offer oName ECID CTA LS elqCampaignId promocode opt ptype ms seats add_promo product category topic q gh_jid qu msclickid gh_src tgr\".split(\" \"));\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":204
    },{
      "function":"__html",
      "setup_tags":["list",["tag",81,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Econsole\u0026\u0026console.log(\"GA - GPV\");var pageViewVar=",["escape",["macro",42],8,16],",pageTitle=document.title;-1!==pageTitle.indexOf(\"(404)\")\u0026\u0026(pageViewVar=document.location.pathname+\"-404\",dataLayer.push({page:pageViewVar}));try{ga(\"require\",\"ec\"),ga(\"send\",{dimension15:",["escape",["macro",43],8,16],",dimension16:",["escape",["macro",44],8,16],",hitType:\"pageview\",name:",["escape",["macro",45],8,16],",title:",["escape",["macro",46],8,16],",page:pageViewVar})}catch(a){console\u0026\u0026console.log(\"GA - GPV - er\",a)};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":205
    },{
      "function":"__html",
      "setup_tags":["list",["tag",81,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ega(\"send\",{hitType:\"event\",dimension1:",["escape",["macro",47],8,16],",dimension2:",["escape",["macro",48],8,16],",dimension3:",["escape",["macro",49],8,16],",dimension4:",["escape",["macro",50],8,16],",dimension5:",["escape",["macro",51],8,16],",dimension6:",["escape",["macro",52],8,16],",dimension8:",["escape",["macro",53],8,16],",dimension17:",["escape",["macro",54],8,16],",dimension18:",["escape",["macro",55],8,16],",dimension19:",["escape",["macro",56],8,16],",dimension20:",["escape",["macro",57],8,16],",dimension22:",["escape",["macro",58],8,16],",dimension24:",["escape",["macro",59],8,16],",eventCategory:\"Demandbase\",eventAction:\"Loaded\",\nnonInteraction:!0});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":206
    },{
      "function":"__html",
      "setup_tags":["list",["tag",81,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ega\u0026\u0026ga(\"send\",{hitType:\"social\",socialNetwork:",["escape",["macro",60],8,16],",socialAction:",["escape",["macro",61],8,16],",socialTarget:",["escape",["macro",62],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":207
    },{
      "function":"__html",
      "setup_tags":["list",["tag",81,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ega\u0026\u0026ga(\"send\",{hitType:\"event\",eventCategory:",["escape",["macro",5],8,16],",eventAction:",["escape",["macro",63],8,16],",eventLabel:",["escape",["macro",64],8,16],",metric9:",["escape",["macro",6],8,16],",metric10:",["escape",["macro",7],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":208
    },{
      "function":"__html",
      "setup_tags":["list",["tag",81,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ega(\"send\",{hitType:\"event\",eventCategory:\"Homepage\",eventAction:\"Panel Click\",eventLabel:\"Panel 1\",dimension11:",["escape",["macro",1],8,16],",metric4:1});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":209
    },{
      "function":"__html",
      "setup_tags":["list",["tag",81,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ega(\"send\",{hitType:\"event\",eventCategory:\"Homepage\",eventAction:\"Panel Click\",eventLabel:\"Panel 2\",dimension12:",["escape",["macro",2],8,16],",metric6:1});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":210
    },{
      "function":"__html",
      "setup_tags":["list",["tag",81,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ega(\"send\",{hitType:\"event\",eventCategory:\"Homepage\",eventAction:\"Panel Click\",eventLabel:\"Panel 3\",dimension15:",["escape",["macro",3],8,16],",metric8:1});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":211
    },{
      "function":"__html",
      "setup_tags":["list",["tag",81,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ega(\"send\",{hitType:\"event\",eventCategory:\"Homepage\",eventAction:\"Panel Click\",eventLabel:\"Featured\",dimension10:",["escape",["macro",0],8,16],",metric2:1});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":212
    },{
      "function":"__html",
      "setup_tags":["list",["tag",81,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ega(\"send\",{hitType:\"event\",eventCategory:\"Homepage\",eventAction:\"Panel View\",dimension10:",["escape",["macro",0],8,16],",dimension11:",["escape",["macro",1],8,16],",dimension12:",["escape",["macro",2],8,16],",dimension13:",["escape",["macro",3],8,16],",dimension14:",["escape",["macro",4],8,16],",metric1:1,metric3:1,metric5:1,metric7:1,nonInteraction:!0});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":213
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"trackPageview\",page:\"\/thankyou\/contact\",pageTitle:\"Contact Us Form Submitted (NL)\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":214
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ega\u0026\u0026ga(\"send\",{hitType:\"event\",eventCategory:\"error pages\",eventAction:\"404\",eventLabel:",["escape",["macro",23],8,16],",eventValue:",["escape",["macro",25],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":216
    },{
      "function":"__html",
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"trackPageview\",page:\"\/thankyou\/schedule-demo\",pageTitle:\"Schedule Demo Form Submitted (US)\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":217
    },{
      "function":"__html",
      "setup_tags":["list",["tag",1,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){for(var b=document.querySelectorAll(\".cookie-settings-menu-item\"),a=0;a\u003Cb.length;a++)b[a].className=b[a].className.replace(\"hide\",\" \")})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":222
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction trackEvent(b,c,a){dataLayer.push({event:\"trackEvent\",eventCategory:b,eventAction:c,eventLabel:a})}var greenscoreForm=document.getElementById(\"greenscoreForm\");\nnull!=greenscoreForm\u0026\u0026greenscoreForm.addEventListener(\"submit\",function(b){b.preventDefault();b=this.querySelectorAll(\"select, input\");for(var c=0;c\u003Cb.length;c++){var a=[],d=b[c].getAttribute(\"data-ga\").split(\"|\");a.category=d[0];a.action=d[1];a.label=d[2];if(\"\"===a.label)switch(b[c].nodeName){case \"INPUT\":a.label=b[c].value;break;case \"SELECT\":a.label=b[c].options[b[c].selectedIndex].value;break;default:a.label=\"\"}trackEvent(a.category,a.action,a.label)}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":225
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"trackPageview\",page:\"\/thankyou\/contact\",pageTitle:\"Contact Sales Form Submitted (AU)\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":226
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"trackPageview\",page:\"\/thankyou\/contact\",pageTitle:\"Contact Sales Form Submitted (CA)\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":227
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"trackPageview\",page:\"\/thankyou\/contact\",pageTitle:\"Contact Sales Form Submitted (DE)\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":228
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"trackPageview\",page:\"\/thankyou\/contact\",pageTitle:\"Contact Sales Form Submitted (FR)\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":229
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"trackPageview\",page:\"\/thankyou\/contact\",pageTitle:\"Contact Sales Form Submitted (BR)\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":230
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"trackPageview\",page:\"\/thankyou\/contact\",pageTitle:\"Contact Sales Form Submitted (JP)\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":231
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"trackPageview\",page:\"\/thankyou\/contact\",pageTitle:\"Contact Sales Form Submitted (UK)\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":232
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"trackPageview\",page:\"\/thankyou\/contact\",pageTitle:\"Contact Sales Form Submitted (NL)\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":233
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction getParameterByName(a){a=a.replace(\/[\\[]\/,\"\\\\[\").replace(\/[\\]]\/,\"\\\\]\");a=new RegExp(\"[\\\\?\\x26amp;]\"+a+\"\\x3d([^\\x26amp;#]*)\");a=a.exec(location.search);return null===a?\"\":decodeURIComponent(a[1].replace(\/\\+\/g,\" \"))}function eloquaCampaignCookie(){if(window.jQuery.cookie){var a=getParameterByName(\"ECID\");a\u0026\u0026jQuery.cookie(\"ECID\",a,{expires:60})}}eloquaCampaignCookie();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":234
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar preferredHostCookieExists=!1;document.cookie.split(\";\").filter(function(a){return 0\u003C=a.indexOf(\"preferredHost\\x3d\")}).length\u0026\u0026(preferredHostCookieExists=!0);\n\"www.docusign.com\"!=window.location.hostname||\"\/\"!=window.location.pathname||preferredHostCookieExists||(\"Mexico\"==",["escape",["macro",65],8,16],"\u0026\u0026window.location.replace(\"https:\/\/www.docusign.mx\"),\"Spain\"==",["escape",["macro",65],8,16],"\u0026\u0026window.location.replace(\"https:\/\/www.docusign.com.es\"),\"Canada\"==",["escape",["macro",65],8,16],"\u0026\u0026window.location.replace(\"https:\/\/www.docusign.ca\"),\"France\"==",["escape",["macro",65],8,16],"\u0026\u0026window.location.replace(\"https:\/\/www.docusign.fr\"),\"Germany\"==",["escape",["macro",65],8,16],"\u0026\u0026window.location.replace(\"https:\/\/www.docusign.de\"),\n\"Brazil\"==",["escape",["macro",65],8,16],"\u0026\u0026window.location.replace(\"https:\/\/www.docusign.com.br\"),\"United Kingdom\"==",["escape",["macro",65],8,16],"\u0026\u0026window.location.replace(\"https:\/\/www.docusign.co.uk\"),\"Austrailia\"==",["escape",["macro",65],8,16],"\u0026\u0026window.location.replace(\"https:\/\/www.docusign.com.au\"),\"Netherlands\"==",["escape",["macro",65],8,16],"\u0026\u0026window.location.replace(\"https:\/\/www.docusign.nl\"),\"Japan\"==",["escape",["macro",65],8,16],"\u0026\u0026window.location.replace(\"https:\/\/www.docusign.jp\"));\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":236
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"trackPageview\",page:\"\/thankyou\/momentumx-melbourne-australia\",pageTitle:\"MomentumX Form Submitted (AU)\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":237
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"trackPageview\",page:\"\/thankyou\/momentumx-paris-france\",pageTitle:\"MomentumX Form Submitted (FR)\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":238
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"trackPageview\",page:\"\/thankyou\/momentumx-london-uk\",pageTitle:\"MomentumX Form Submitted (UK)\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":239
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{__adroll.record_user({adroll_segments:\"",["escape",["macro",68],7],"\"})}catch(a){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":242
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{__adroll.record_user({adroll_segments:\"",["escape",["macro",71],7],"\"})}catch(a){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":243
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{__adroll.record_user({adroll_segments:\"",["escape",["macro",72],7],"\"})}catch(a){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":244
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{__adroll.record_user({adroll_segments:\"5fc90027\"})}catch(a){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":245
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"trackPageview\",page:\"\/thankyou\/contact\",pageTitle:\"Dreamforce 2018 Form Submitted (US)\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":249
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o02be\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":250
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.optimizely=window.optimizely||[];window.optimizely.push({type:\"event\",eventName:\"Contact_Sales_Form_Submission\",tags:{revenue:0,value:0}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":254
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Econsole.log(\"AR - LCC\");try{__adroll.record_user({adroll_segments:\"",["escape",["macro",73],7],"\"})}catch(a){console.log(\"A - LCC - err\")};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":255
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/dc.ads.linkedin.com\/collect\/?pid=46370\u0026amp;conversionId=643377\u0026amp;fmt=gif\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":257
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cbutton id=\"submitButton\"\u003ELead\u003C\/button\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003EjQuery(\"#$submitButton\").click(function(){fbq(\"track\",\"Lead\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":258
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{__adroll.record_user({adroll_segments:\"692853ae\"})}catch(a){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":260
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Ciframe src=\"https:\/\/pcloudtrk.com\/p.ashx?o=2412\u0026amp;e=479\u0026amp;t=TRANSACTION_ID\" height=\"1\" width=\"1\" frameborder=\"0\"\u003E\u003C\/iframe\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E_linkedin_partner_id=\"516332\";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=document.getElementsByTagName(\"script\")[0],a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E \u003Cnoscript\u003E \u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/dc.ads.linkedin.com\/collect\/?pid=516332\u0026amp;fmt=gif\"\u003E \u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":261
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"trackPageview\",page:\"\/thankyou\/contact\",pageTitle:\"TEI landing page from submitted (DE)\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":262
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"trackPageview\",page:document.location.pathname,pageTitle:\"TEI landing page from submitted (FR)\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":263
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"trackPageview\",page:\"\/thankyou\/whitepaper\",pageTitle:\"Forrester report landing page (US)\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":264
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"trackPageview\",page:\"\/thankyou\/whitepaper\",pageTitle:\"Forrester report landing page (UK)\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":265
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{__adroll.record_user({adroll_segments:\"40e7ca4c\"})}catch(a){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":268
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"ffeff5b6f608417ebc4613dd3b055193\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/ffeff5b6f608417ebc4613dd3b055193\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":269
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cstyle type=\"text\/css\"\u003E\n  .embeddedServiceHelpButton .helpButton .uiButton {\n    background-color: #2463D1;\n    font-weight:bold;\n    text-transform: uppercase;\n    font-family: \"Salesforce Sans\", sans-serif;\n    \/*\n    \twe dont walk around with Xem wide devices... no one does... they are and always will be based on pixels... stop trying to be so cool...\n    *\/\n    max-width: 300px;\n  }\n  .embeddedServiceHelpButton .helpButton .uiButton.helpButtonDisabled {\n    \/* don't want to display the button if they arent around... *\/\n    display: none !important;\n  }\n\n  @font-face {\n    font-family: 'Salesforce Sans';\n    src: url('https:\/\/www.sfdcstatic.com\/system\/shared\/common\/assets\/fonts\/SalesforceSans\/SalesforceSans-Regular.woff') format('woff'),\n      url('https:\/\/www.sfdcstatic.com\/system\/shared\/common\/assets\/fonts\/SalesforceSans\/SalesforceSans-Regular.ttf') format('truetype');\n  }\n\u003C\/style\u003E\n\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/service.force.com\/embeddedservice\/5.0\/esw.min.js\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,f,c){function g(){clearInterval(l);h(1E3,5)}function h(a,b){var d=0,c=b||5,e=a||2500,g={\".embeddedServiceHelpButton\":\".embeddedServiceHelpButton .helpButton\",\".embeddedServiceSidebar\":\".embeddedServiceSidebar .dockableContainer\"},h={\".optanon-alert-box-wrapper\":1};l=setInterval(function(){var a,b;if(c\u003Cd++)return clearInterval(l),!1;try{for(var e in g)if((a=f.querySelector(g[e]))\u0026\u0026a.offsetHeight)for(var k in h)if(b=f.querySelector(k))b.offsetHeight\u0026\u0026b.offsetHeight+b.offsetTop\u003Ea.offsetTop?\na.style.bottom=b.offsetHeight+\"px\":a.removeAttribute(\"style\")}catch(q){}},e)}var m=\".embeddedServiceSidebar .prechatUI .inputPhone {display:none;}.embeddedServiceSidebar .prechatUI .inputCompany {display:none;}\",n=\"\",d,b,e,l,k=function(c){try{d=",["escape",["macro",14],8,16],"}catch(p){d=0}embedded_svc.settings.displayHelpButton=!0;embedded_svc.settings.language=\"",["escape",["macro",74],7],"\";embedded_svc.settings.storageDomain=\"docusign.",["escape",["macro",12],7],"\";embedded_svc.settings.defaultMinimizedText=\"",["escape",["macro",75],7],"\";\nif(d){b=f.createElement(\"style\");b.setAttribute(\"id\",\"ds-snapin-additional-styles\");b.setAttribute(\"data-sfsi-form-type\",d);switch(d){case 1:embedded_svc.settings.prepopulatedPrechatFields={Phone:\"N\/A\",Company:\"N\/A\"};b.innerHTML=m;e=\"5731W000000blNV\";break;case 2:b.innerHTML=n,e=\"",["escape",["macro",76],7],"\"}b.innerHTML\u0026\u0026f.body.appendChild(b);embedded_svc.settings.extraPrechatInfo=[{entityFieldMaps:[{doCreate:!1,doFind:!0,fieldName:\"LastName\",isExactMatch:!0,label:\"Last Name\"},{doCreate:!1,doFind:!0,fieldName:\"FirstName\",\nisExactMatch:!0,label:\"First Name\"},{doCreate:!1,doFind:!0,fieldName:\"Email\",isExactMatch:!0,label:\"Email\"}],entityName:\"Contact\",saveToTranscript:\"Contact\",showOnCreate:!0}];embedded_svc.addEventHandler(\"onHelpButtonClick\",function(b){a.ga\u0026\u0026\"function\"===typeof a.ga\u0026\u0026a.ga(\"send\",\"event\",\"SalesForce Snap-Ins\",\"Snap-In Help Button Click\",a.location.href)});console.log(embedded_svc.settings);embedded_svc.settings.enabledFeatures=[\"LiveAgent\"];embedded_svc.settings.entryFeature=\"LiveAgent\";embedded_svc.init(\"https:\/\/docusign.my.salesforce.com\",\n\"https:\/\/support.docusign.com\/\",c,\"00D300000000bS4\",\"webchat\",{baseLiveAgentContentURL:\"https:\/\/c.la1-c1cs-ph2.salesforceliveagent.com\/content\",deploymentId:\"572400000008PFB\",buttonId:e,baseLiveAgentURL:\"https:\/\/d.la2-c2-iad.salesforceliveagent.com\/chat\",eswLiveAgentDevName:\"EmbeddedServiceLiveAgent_Parent04I1W000000TN3GUAW_16b75ea4b2e\",isOfflineSupportEnabled:!1});a.ga\u0026\u0026\"function\"===typeof a.ga\u0026\u0026a.ga(\"send\",\"event\",\"SalesForce Snap-Ins\",\"Snap-In Initialization\",a.location.href);h();a.addEventListener(\"click\",\ng);a.addEventListener(\"resize\",g)}};a.embedded_svc?k(\"https:\/\/service.force.com\"):(c=f.createElement(\"script\"),c.setAttribute(\"src\",\"https:\/\/docusign.my.salesforce.com\/embeddedservice\/5.0\/esw.min.js\"),c.onload=function(){k(null)},f.body.appendChild(c))})(window,document);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":275
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,a,d,e){b=1E13*a;return e[d]?(a=c.createElement(\"iframe\"),a.src=\"https:\/\/9540102.fls.doubleclick.net\/activityi;src\\x3d9540102;type\\x3dagree0;cat\\x3d\"+e[d].cat+\";dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d;tfua\\x3d;npa\\x3d;ord\\x3d\"+b+\"?\",a.height=\"1\",a.id=\"ds_google_floodlight_dac\",a.width=\"1\",a.frameborder=\"0\",a.style.display=\"none\",c.body.appendChild(a),!0):!1})(window,document,Math\u0026\u0026Math.random\u0026\u0026Math.random()||1,location\u0026\u0026location.pathname\u0026\u0026location.pathname.toLowerCase\u0026\u0026\nlocation.pathname.toLowerCase(),{\"\/contact-sales\":{cat:\"docus00\"},\"\/products\/agreement-cloud\":{cat:\"docus0\"}});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":278
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(http|https):\/\/www\\.docusign\\.(com|co\\.uk)\/campaigns\/.*"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"oneTrust_InitAllCookieCategories"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(http|https):\/\/www\\.docusign\\.(com|co\\.uk)\/thankyou\/demo"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(http|https):\/\/www\\.docusign\\.(com|co\\.uk)\/partners\/real\\-estate\/.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(http|https):\/\/www\\.docusign\\.(com|co\\.uk|com\\.au)\/thankyou\/narprotrial"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(http|https):\/\/www\\.docusign\\.(com|co\\.uk|com\\.au)\/thankyou\/re(pro|plus)trial"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(http|https):\/\/www\\.docusign\\.(com|co\\.uk|com\\.au)\/thankyou\/businesstrial"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(http|https):\/\/www\\.docusign\\.(com|co\\.uk|com\\.au)\/thankyou\/.*"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(http|https):\/\/www\\.docusign\\.(com|co\\.uk)\/thankyou\/narfree"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(http|https):\/\/www\\.docusign\\.(com|co\\.uk)\/thankyou\/personal"
    },{
      "function":"_cn",
      "arg0":["macro",17],
      "arg1":",4,"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":".*"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(http|https):\/\/www\\.docusign\\.(com|co\\.uk|com\\.au)\/campaigns\/thankyou"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"customLoaded"
    },{
      "function":"_cn",
      "arg0":["macro",17],
      "arg1":",2,"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"https:\/\/www.docusign.com.br\/thankyou\/whitepaper"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"https:\/\/www.docusign.com.br\/thankyou\/webinar"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"https:\/\/www.docusign.com\/p\/membernet\/thankyou.php"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(http|https):\/\/www\\.docusign\\.(com|co\\.uk|com\\.au)\/thankyou\/protrial"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"https:\/\/www.docusign.com.br\/thankyou\/contact",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"Demandbase_Loaded"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"trackSocial"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"1"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"oneTrust_InitAllCookieCategories|oneTrust_initPerformanceCookie"
    },{
      "function":"_re",
      "arg0":["macro",23],
      "arg1":"\/thankyou\\\/whitepaper",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"webformSubmit-202801"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"webformSubmit-202801"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"webformSubmit-203511"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"webformSubmit-203511"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"webformSubmit-204336"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"webformSubmit-204336"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"webformSubmit-203296"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"webformSubmit-203296"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"webformSubmit-205296"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"webformSubmit-203236"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"webformSubmit-203236"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"\/esignature"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"\/learn"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"webformSubmit-47691"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"webformSubmit-47691"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"webformSubmit-199221"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"webformSubmit-199211"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"webformSubmit-199336"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"webformSubmit-199206"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"webformSubmit-199206"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"webformSubmit-199331"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"webformSubmit-199316"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"webformSubmit-203036"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"thankyou\/webinar"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"docusign.com\/esign\/"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"webformSubmit"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"(404)"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"oneTrust_InitAllCookieCategories"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"www.docusign.com\/dreamforce"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"webformSubmit-208601"
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":"^www.docusign.com$"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"www.docusign.com.au"
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":"^www.docusign.co.uk$"
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":"^www.docusign.com.br$"
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":"^www.docusign.mx$"
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":"^www.docusign.ca$"
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":"^www.docusign.de$"
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":"^www.docusign.fr$"
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":"^www.docusign.nl$"
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":"^www.docusign.com.es$"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"www.docusign.jp"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"www.docusign.in"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"https:\/\/momentum.docusign.com"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"webformSubmit-211341"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"webformSubmit-211341"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(http|https):\\\/\\\/www\\.docusign\\.(.*)(\\\/p\\\/.*|\\\/console\\\/.*|\\\/content\\\/dfs-welcome-portal-iframe)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(http|https):\\\/\\\/go\\.docusign\\.(com|co\\.uk|com\\.au|ca|fr|de|in|nl|sg|jp|es|mx|com\\.br)"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"initLoaded"
    },{
      "function":"_ew",
      "arg0":["macro",15],
      "arg1":"https:\/\/www.docusign.com"
    },{
      "function":"_ew",
      "arg0":["macro",15],
      "arg1":"https:\/\/www.docusign.com\/"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(http|https):\\\/\\\/(www\\.)*(docusign.*)(?!\\.)"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"developers.docusign."
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"investor.docusign"
    },{
      "function":"_cn",
      "arg0":["macro",17],
      "arg1":",3,"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"gtm.historyChange"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(http|https):\\\/\\\/(www\\.)*(docusign\\.(com(\\.au)*|ca|de|fr|in|co\\.uk|nl)|docusign\\.com\\.br)(?!\\.)"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"apiexplorer.docusign"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(http|https):\/\/www\\.docusign.*\/(products\\-and\\-pricing|produtos\\-e\\-precos|produits\\-et\\-tarifs|producten\\-en\\-pricing|produkte\\-und\\-preise).*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",23],
      "arg1":"^\/$"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"www.docusign.com"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(http|https):\\\/\\\/www\\.docusign\\.com\\\/thankyou\\\/webinar",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(http|https):\\\/\\\/www\\.docusign\\.com\\\/thankyou\\\/whitepaper",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(http|https):\\\/\\\/www\\.docusign\\.com\\\/thankyou\\\/analyst-report",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(http|https):\\\/\\\/(www\\.)*docusign\\.((com(\\.au)*|ca|in|co\\.uk|nl)\\\/products-and-pricing\\\/real-estate-editions)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(http|https):\\\/\\\/www\\.docusign\\.com\\\/products\\-and\\-pricing\/real\\-estate\\-editions.*",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"account.docusign"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"gtm.click"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(http|https):\\\/\\\/www\\.docusign\\.com(?!.au|.br)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"https:\/\/support.docusign.com\/en\/answers\/00011686"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"https:\\\/\\\/www\\.docusign\\.com\\\/company\\\/contact-us"
    },{
      "function":"_eq",
      "arg0":["macro",41],
      "arg1":"sales"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"webformSubmit-199301"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"https:\/\/www.docusign.com\/c\/products-and-pricing"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"https:\/\/www.docusign.com\/b\/products-and-pricing"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"https:\/\/www\\.docusign\\.com.br\/blog\/encante-seus-clientes-utilizando-quatro-praticas"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"https:\/\/www.docusign.com\/blog\/category\/developers\/"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"trackPageview"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"trackEvent"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"panel1Click"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"panel2Click"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"panel3Click"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"featuredClick"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"^https:\\\/\\\/www\\.docusign\\.(com|com\\.au|com\\.br|co\\.uk|ca|de|fr|nl|jp|in)(\\\/$|$|\\\/\\?|\\\/#|#)"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"webformSubmit-204546"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"https:\/\/www\\.docusign\\.com\/p\/.*"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(esign\/green-score|esign\/Calculadora-Papel|esign\/puntaje-verde|elektronische-unterschriften\/sparpotential|signature-electronique\/calculateur-gains)"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"webformSubmit-207071"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"webformSubmit-207071"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"webformSubmit-207061"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"webformSubmit-206821"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"webformSubmit-207166"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"webformSubmit-207076"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"webformSubmit-207091"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"webformSubmit-207336"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"webformSubmit-207381"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"webformSubmit-207216"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"webformSubmit-207216"
    },{
      "function":"_cn",
      "arg0":["macro",66],
      "arg1":"Merci, votre demande a été reçue."
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"docusign.fr\/momentum-paris"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"gtm.dom"
    },{
      "function":"_cn",
      "arg0":["macro",66],
      "arg1":"Thank you, your submission has been received."
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"docusign.co.uk\/momentum-london"
    },{
      "function":"_cn",
      "arg0":["macro",67],
      "arg1":"buy-btn"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"oneTrust_InitAllCookieCategories|oneTrust_initTargetingCookie"
    },{
      "function":"_cn",
      "arg0":["macro",69],
      "arg1":"form-47701"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",70],
      "arg1":"(^$|((^|,)31363_584($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",40],
      "arg1":"\/go\\.docusign\\..*\\\/o\\\/trial\/gi"
    },{
      "function":"_re",
      "arg0":["macro",70],
      "arg1":"(^$|((^|,)31363_479($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"webformSubmit-208531"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"webformSubmit-208531"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"webformSubmit-209331"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"webformSubmit-209331"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"webformSubmit-211091"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"webformSubmit-211091"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"webformSubmit-211226"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"webformSubmit-211226"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"webformSubmit-211421"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"webformSubmit-211421"
    },{
      "function":"_ge",
      "arg0":["macro",14],
      "arg1":"1"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"^(com|com\\.br|com\\.es|com\\.au|co\\.uk|ca|fr|de|nl|mx|jp)$"
    }],
  "rules":[
    [["if",0,1],["add",3]],
    [["if",1,2],["add",3]],
    [["if",1,3],["add",3]],
    [["if",1,9],["add",4,6,54],["block",3]],
    [["if",1,12],["add",4,6,9,10,11,54]],
    [["if",13],["add",5]],
    [["if",1,15],["add",7,45]],
    [["if",1,16],["add",8,12]],
    [["if",1,17],["add",8,13]],
    [["if",1,6],["add",9,54],["block",3]],
    [["if",1,18],["add",9,10,11,54]],
    [["if",1,19],["add",10,54]],
    [["if",1,5],["add",11,54],["block",3]],
    [["if",1,20],["add",14]],
    [["if",21],["add",15,83,105]],
    [["if",22],["add",16,84]],
    [["if",14,23,24],["add",17,29,43,81,82]],
    [["if",1,25],["add",18,32]],
    [["if",26,27],["add",18,32]],
    [["if",28,29],["add",18,32,75]],
    [["if",30,31],["add",18,32,54,79]],
    [["if",32,33],["add",18,32,54,79]],
    [["if",34],["add",18,24,32]],
    [["if",35,36],["add",19]],
    [["if",1,37],["add",20],["block",76]],
    [["if",1,38],["add",20],["block",76]],
    [["if",39,40],["add",21,54,61,62,115]],
    [["if",41],["add",21,63]],
    [["if",42],["add",21,64]],
    [["if",43],["add",21,65]],
    [["if",44,45],["add",21,66]],
    [["if",46],["add",21,67]],
    [["if",47],["add",21,68]],
    [["if",48],["add",21,91]],
    [["if",1,49],["add",22]],
    [["if",50,51],["add",23]],
    [["if",52,53],["add",25,92]],
    [["if",54],["add",26,0,33,34,35,36,37,38,39,40,41,42]],
    [["if",1,55],["add",27]],
    [["if",56],["add",28,113,114]],
    [["if",1,57],["add",30,126]],
    [["if",1,58],["add",30]],
    [["if",1,59],["add",30]],
    [["if",1,60],["add",30]],
    [["if",1,61],["add",30]],
    [["if",1,62],["add",30,126]],
    [["if",1,63],["add",30]],
    [["if",1,64],["add",30]],
    [["if",1,65],["add",30]],
    [["if",1,66],["add",30]],
    [["if",1,67],["add",30]],
    [["if",1,68],["add",30]],
    [["if",1,69],["add",30,47,50,70,73]],
    [["if",70,71],["add",31,123,125]],
    [["if",74],["unless",73],["add",44]],
    [["if",1,15],["unless",75,76],["add",46]],
    [["if",1,77],["add",47,76,94,104]],
    [["if",1,78],["add",47,50,73]],
    [["if",1,79],["add",47,49,50,2,58,70,73,76]],
    [["if",81],["add",48]],
    [["if",1,82],["add",49,50,52,2,70,73]],
    [["if",1,83],["add",50,73]],
    [["if",1,72],["add",51],["block",43]],
    [["if",1,85,86],["add",53]],
    [["if",1,87],["add",54]],
    [["if",1,88],["add",54,80]],
    [["if",1,89],["add",54,80]],
    [["if",1,90],["add",55]],
    [["if",92,93],["add",56,116]],
    [["if",1,94],["add",57,58,128]],
    [["if",1,95],["add",59]],
    [["if",1,96,97],["add",60]],
    [["if",98],["add",69]],
    [["if",1,99],["add",71]],
    [["if",1,100],["add",72]],
    [["if",1,101],["add",74]],
    [["if",1,84],["add",77],["block",2]],
    [["if",1,102],["add",78]],
    [["if",103],["add",82]],
    [["if",104],["add",85]],
    [["if",105],["add",86]],
    [["if",106],["add",87]],
    [["if",107],["add",88]],
    [["if",108],["add",89]],
    [["if",109,110],["add",90]],
    [["if",111],["add",93,111]],
    [["if",1,113],["add",95]],
    [["if",114,115],["add",96,110]],
    [["if",116],["add",97,110]],
    [["if",117],["add",98,110]],
    [["if",118],["add",99,110]],
    [["if",119],["add",100,110]],
    [["if",120],["add",101,110]],
    [["if",121],["add",102,110]],
    [["if",122],["add",103,110]],
    [["if",123,124],["add",106]],
    [["if",125,126,127],["add",107]],
    [["if",127,128,129],["add",108]],
    [["if",130,131],["add",109]],
    [["if",40],["add",110]],
    [["if",133,134,135],["add",110]],
    [["if",131,136,137],["add",112]],
    [["if",138,139],["add",117,118,120]],
    [["if",140,141],["add",119]],
    [["if",142,143],["add",121]],
    [["if",144,145],["add",122]],
    [["if",146,147],["add",124,125]],
    [["if",1,148,149],["add",127]],
    [["if",1,4],["block",3]],
    [["if",1,7],["block",3]],
    [["if",1,8],["block",3]],
    [["if",11],["unless",10],["block",3,4,23,24,27,28,30,46,49,50,52,54,56,57,58,70,73,74,75,78,79,112,114,116,126]],
    [["if",11],["unless",14],["block",6,8,9,10,11,12,13,14,18,19,21,22,32,44,45,48,51,2,53,55,59,60,61,62,63,64,65,66,67,68,69,71,72,76,77,80,82,83,84,85,86,87,88,89,90,91,92,93,95,96,97,98,99,100,101,102,103,104,128]],
    [["if",11],["unless",80],["block",47,105,127]],
    [["if",1,91],["block",55]],
    [["if",54,112],["block",1]],
    [["if",54],["unless",14],["block",107,108]],
    [["if",10,23,132],["block",109,110,111,115]]]
},
"runtime":[
[],[]
]



};
var aa,ba=this||self,ca=/^[\w+/_-]+[=]{0,2}$/,da=null,ha=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var ia=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ja=function(){this.Ha={};this.Lc=!1;this.ie={}};ja.prototype.get=function(a){return this.Ha["dust."+a]};ja.prototype.set=function(a,b){this.Lc||(a="dust."+a,this.ie.hasOwnProperty(a)||(this.Ha[a]=b))};ja.prototype.has=function(a){return this.Ha.hasOwnProperty("dust."+a)};var ka=function(a){var b=[],c;for(c in a.Ha)a.Ha.hasOwnProperty(c)&&b.push(c.substr(5));return b};
ja.prototype.remove=function(a){a="dust."+a;this.Lc||this.ie.hasOwnProperty(a)||delete this.Ha[a]};ja.prototype.Og=function(){this.Lc=!0};var la=function(a){this.Ka=new ja;this.s=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ia(b)?this.s[Number(b)]=a[Number(b)]:this.Ka.set(b,a[b]))};aa=la.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.s.length;c++){var d=this.s[c];null===d||void 0===d?b.push(""):d instanceof la?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"==a){if(!ia(b))throw Error("RangeError: Length property must be a valid integer.");this.s.length=Number(b)}else ia(a)?this.s[Number(a)]=b:this.Ka.set(a,b)};aa.get=function(a){return"length"==a?this.length():ia(a)?this.s[Number(a)]:this.Ka.get(a)};aa.length=function(){return this.s.length};aa.Ic=function(){for(var a=ka(this.Ka),b=0;b<this.s.length;b++)a.push(b+"");return new la(a)};aa.remove=function(a){ia(a)?delete this.s[Number(a)]:this.Ka.remove(a)};aa.pop=function(){return this.s.pop()};
aa.push=function(a){return this.s.push.apply(this.s,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.s.shift()};aa.splice=function(a,b,c){return new la(this.s.splice.apply(this.s,arguments))};aa.unshift=function(a){return this.s.unshift.apply(this.s,Array.prototype.slice.call(arguments))};aa.has=function(a){return ia(a)&&this.s.hasOwnProperty(a)||this.Ka.has(a)};la.prototype.unshift=la.prototype.unshift;la.prototype.splice=la.prototype.splice;la.prototype.shift=la.prototype.shift;
la.prototype.push=la.prototype.push;la.prototype.pop=la.prototype.pop;la.prototype.remove=la.prototype.remove;la.prototype.getKeys=la.prototype.Ic;la.prototype.get=la.prototype.get;la.prototype.set=la.prototype.set;var ma=function(){},na=function(a){return"function"==typeof a},f=function(a){return"string"==typeof a},oa=function(a){return"number"==typeof a&&!isNaN(a)},pa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},ra=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},sa=function(a,b){if(a&&pa(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},ta=function(a,b){if(!oa(a)||
!oa(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},va=function(a,b){for(var c=new ua,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},wa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},xa=function(a){return Math.round(Number(a))||0},ya=function(a){return"false"==String(a).toLowerCase()?!1:!!a},za=function(a){var b=[];if(pa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Aa=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Ba=function(){return(new Date).getTime()},ua=function(){this.prefix="gtm.";this.values={}};ua.prototype.set=function(a,b){this.values[this.prefix+a]=b};ua.prototype.get=function(a){return this.values[this.prefix+a]};ua.prototype.contains=function(a){return void 0!==this.get(a)};
var Ca=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Fa=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ga=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ha=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ia=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Ja=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c};var Ka=function(a,b){ja.call(this);this.pe=a;this.ng=b};ha(Ka,ja);var La=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof Ka))throw Error("Attempting to execute non-function "+b[0]+".");return c.Tb.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.Qh;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};Ka.prototype.toString=function(){return this.pe};Ka.prototype.getName=function(){return this.pe};Ka.prototype.getName=Ka.prototype.getName;Ka.prototype.Ic=function(){return new la(ka(this))};
Ka.prototype.getKeys=Ka.prototype.Ic;Ka.prototype.Tb=function(a,b){var c=this;a.de().Lh();return this.ng.apply({evaluate:function(d){var e=a;return pa(d)?La(e,d):d},Sh:function(d){for(var e=a,g,h=0;h<d.length;h++)g=La(e,d[h]);return g},getName:function(){return c.getName()},de:function(){return a.de()},Rb:function(){return a}},Array.prototype.slice.call(arguments,1))};Ka.prototype.invoke=Ka.prototype.Tb;
Ka.prototype.lh=function(a,b){try{return this.Tb.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};Ka.prototype.safeInvoke=Ka.prototype.lh;/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ma=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Na=function(a){if(null==a)return String(a);var b=Ma.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Oa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Pa=function(a){if(!a||"object"!=Na(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Oa(a,"constructor")&&!Oa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Oa(a,b)},u=function(a,b){var c=b||("array"==Na(a)?[]:{}),d;for(d in a)if(Oa(a,d)){var e=a[d];"array"==Na(e)?("array"!=Na(c[d])&&(c[d]=[]),c[d]=u(e,c[d])):Pa(e)?(Pa(c[d])||(c[d]={}),c[d]=u(e,c[d])):c[d]=e}return c};
var Qa=[],Ra={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Sa=function(a){return Ra[a]},Ta=/[\x00\x22\x26\x27\x3c\x3e]/g;var Xa=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,ab={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},bb=function(a){return ab[a]};Qa[7]=function(a){return String(a).replace(Xa,bb)};
Qa[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Xa,bb)+"'"}};var jb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,kb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},mb=function(a){return kb[a]};Qa[16]=function(a){return a};var ob;
var pb=[],qb=[],sb=[],tb=[],ub=[],vb={},wb,xb,yb,zb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Ab=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=vb[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[void 0!==d?g:g.substr(4)]=a[g]);return void 0!==d?d(e):ob(c,e,b)},Cb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Bb(a[e],b,c));
return d},Db=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=vb[b];return c?c.priorityOverride||0:0},Bb=function(a,b,c){if(pa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Bb(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=pb[g];if(!h||b.Nc(h))return;c[g]=!0;try{var k=Cb(h,b,c);k.vtp_gtmEventId=b.id;d=Ab(k,b);yb&&(d=yb.$f(d,k))}catch(w){b.oe&&b.oe(w,Number(g)),d=!1}c[g]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Bb(a[l],b,c)]=Bb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,p=1;p<a.length;p++){var n=Bb(a[p],b,c);xb&&(m=m||n===xb.Ab);d.push(n)}return xb&&m?xb.cg(d):d.join("");case "escape":d=Bb(a[1],b,c);if(xb&&pa(a[1])&&"macro"===a[1][0]&&xb.Kg(a))return xb.Wg(d);d=String(d);for(var t=2;t<a.length;t++)Qa[a[t]]&&(d=Qa[a[t]](d));return d;case "tag":var q=a[1];if(!tb[q])throw Error("Unable to resolve tag reference "+q+".");return d={$d:a[2],
index:q};case "zb":var r={arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var v=Eb(r,b,c);a[4]&&(v=!v);return v;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Eb=function(a,b,c){try{return wb(Cb(a,b,c))}catch(d){JSON.stringify(a)}return null};var Fb=function(){var a=function(b){return{toString:function(){return b}}};return{qd:a("convert_case_to"),rd:a("convert_false_to"),sd:a("convert_null_to"),td:a("convert_true_to"),ud:a("convert_undefined_to"),Eh:a("debug_mode_metadata"),ka:a("function"),pf:a("instance_name"),qf:a("live_only"),rf:a("malware_disabled"),sf:a("metadata"),Gh:a("original_vendor_template_id"),tf:a("once_per_event"),Nd:a("once_per_load"),Od:a("setup_tags"),Pd:a("tag_id"),Qd:a("teardown_tags")}}();var Gb=null,Jb=function(a){function b(n){for(var t=0;t<n.length;t++)d[n[t]]=!0}var c=[],d=[];Gb=Hb(a);for(var e=0;e<qb.length;e++){var g=qb[e],h=Ib(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],p=0;p<tb.length;p++)c[p]&&!d[p]&&(m[p]=!0);return m},Ib=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Gb(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=Gb(e[g]);if(null===h)return null;
if(h)return!1}return!0},Hb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Eb(sb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var Kb,Lb=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.Lf&&(l["fix_"+m]=!0),l.ae=l.ae||l["fix_"+m]);var p={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},n={comment:function(){var q=k.indexOf("--\x3e");if(0<=q)return{content:k.substr(4,q),length:q+3}},endTag:function(){var q=k.match(d);if(q)return{tagName:q[1],length:q[0].length}},atomicTag:function(){var q=n.startTag();
if(q){var r=k.slice(q.length);if(r.match(new RegExp("</\\s*"+q.tagName+"\\s*>","i"))){var v=r.match(new RegExp("([\\s\\S]*?)</\\s*"+q.tagName+"\\s*>","i"));if(v)return{tagName:q.tagName,J:q.J,content:v[1],length:v[0].length+q.length}}}},startTag:function(){var q=k.match(c);if(q){var r={};q[2].replace(e,function(v,w,y,x,z){var A=y||x||z||g.test(w)&&w||null,B=document.createElement("div");B.innerHTML=A;r[w]=B.textContent||B.innerText||A});return{tagName:q[1],J:r,pb:!!q[3],length:q[0].length}}},chars:function(){var q=
k.indexOf("<");return{length:0<=q?q:k.length}}},t=function(){for(var q in p)if(p[q].test(k)){var r=n[q]();return r?(r.type=r.type||q,r.text=k.substr(0,r.length),k=k.slice(r.length),r):null}};l.ae&&function(){var q=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,r=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.ne=function(){return this[this.length-1]};v.Rc=function(B){var E=this.ne();return E&&E.tagName&&E.tagName.toUpperCase()===B.toUpperCase()};v.Zf=
function(B){for(var E=0,G;G=this[E];E++)if(G.tagName===B)return!0;return!1};var w=function(B){B&&"startTag"===B.type&&(B.pb=q.test(B.tagName)||B.pb);return B},y=t,x=function(){k="</"+v.pop().tagName+">"+k},z={startTag:function(B){var E=B.tagName;"TR"===E.toUpperCase()&&v.Rc("TABLE")?(k="<TBODY>"+k,A()):l.Th&&r.test(E)&&v.Zf(E)?v.Rc(E)?x():(k="</"+B.tagName+">"+k,A()):B.pb||v.push(B)},endTag:function(B){v.ne()?l.mg&&!v.Rc(B.tagName)?x():v.pop():l.mg&&(y(),A())}},A=function(){var B=k,E=w(y());k=B;if(E&&
z[E.type])z[E.type](E)};t=function(){A();return w(y())}}();return{append:function(q){k+=q},fh:t,$h:function(q){for(var r;(r=t())&&(!q[r.type]||!1!==q[r.type](r)););},clear:function(){var q=k;k="";return q},ai:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.gi="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.bi=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,g=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.hi=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var p="<"+m.tagName,n;for(n in m.J){var t=m.J[n];
p+=" "+n+'="'+(t?t.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return p+(m.pb?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.Rh=function(k){var l={},m;for(m in k){var p=k[m];l[m]=p&&p.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var h in b)a.Qf=a.Qf||!b[h]&&h;Kb=a})();(function(){function a(){}function b(n){return void 0!==n&&null!==n}function c(n,t,q){var r,v=n&&n.length||0;for(r=0;r<v;r++)t.call(q,n[r],r)}function d(n,t,q){for(var r in n)n.hasOwnProperty(r)&&t.call(q,r,n[r])}function e(n,
t){d(t,function(q,r){n[q]=r});return n}function g(n,t){n=n||{};d(t,function(q,r){b(n[q])||(n[q]=r)});return n}function h(n){try{return m.call(n)}catch(q){var t=[];c(n,function(r){t.push(r)});return t}}var k={Bf:a,Cf:a,Df:a,Ef:a,Mf:a,Nf:function(n){return n},done:a,error:function(n){throw n;},jh:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,p=function(){function n(q,r,v){var w="data-ps-"+r;if(2===arguments.length){var y=q.getAttribute(w);return b(y)?String(y):y}b(v)&&""!==v?q.setAttribute(w,
v):q.removeAttribute(w)}function t(q,r){var v=q.ownerDocument;e(this,{root:q,options:r,rb:v.defaultView||v.parentWindow,Ea:v,Xb:Kb("",{Lf:!0}),zc:[q],$c:"",ad:v.createElement(q.nodeName),nb:[],qa:[]});n(this.ad,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.qa,arguments);for(var q;!this.Mb&&this.qa.length;)q=this.qa.shift(),"function"===typeof q?this.Uf(q):this.ld(q)};t.prototype.Uf=function(q){var r={type:"function",value:q.name||q.toString()};this.Xc(r);q.call(this.rb,this.Ea);this.se(r)};
t.prototype.ld=function(q){this.Xb.append(q);for(var r,v=[],w,y;(r=this.Xb.fh())&&!(w=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("script"):!1)&&!(y=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("style"):!1);)v.push(r);this.Ch(v);w&&this.ug(r);y&&this.vg(r)};t.prototype.Ch=function(q){var r=this.Rf(q);r.Td&&(r.Kc=this.$c+r.Td,this.$c+=r.ah,this.ad.innerHTML=r.Kc,this.Ah())};t.prototype.Rf=function(q){var r=this.zc.length,v=[],w=[],y=[];c(q,function(x){v.push(x.text);if(x.J){if(!/^noscript$/i.test(x.tagName)){var z=
r++;w.push(x.text.replace(/(\/?>)/," data-ps-id="+z+" $1"));"ps-script"!==x.J.id&&"ps-style"!==x.J.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+z+(x.pb?" />":">"))}}else w.push(x.text),y.push("endTag"===x.type?x.text:"")});return{ii:q,raw:v.join(""),Td:w.join(""),ah:y.join("")}};t.prototype.Ah=function(){for(var q,r=[this.ad];b(q=r.shift());){var v=1===q.nodeType;if(!v||!n(q,"proxyof")){v&&(this.zc[n(q,"id")]=q,n(q,"id",null));var w=q.parentNode&&n(q.parentNode,"proxyof");
w&&this.zc[w].appendChild(q)}r.unshift.apply(r,h(q.childNodes))}};t.prototype.ug=function(q){var r=this.Xb.clear();r&&this.qa.unshift(r);q.src=q.J.src||q.J.Hh;q.src&&this.nb.length?this.Mb=q:this.Xc(q);var v=this;this.Bh(q,function(){v.se(q)})};t.prototype.vg=function(q){var r=this.Xb.clear();r&&this.qa.unshift(r);q.type=q.J.type||q.J.Ih||"text/css";this.Dh(q);r&&this.write()};t.prototype.Dh=function(q){var r=this.Tf(q);this.Ig(r);q.content&&(r.styleSheet&&!r.sheet?r.styleSheet.cssText=q.content:
r.appendChild(this.Ea.createTextNode(q.content)))};t.prototype.Tf=function(q){var r=this.Ea.createElement(q.tagName);r.setAttribute("type",q.type);d(q.J,function(v,w){r.setAttribute(v,w)});return r};t.prototype.Ig=function(q){this.ld('<span id="ps-style"/>');var r=this.Ea.getElementById("ps-style");r.parentNode.replaceChild(q,r)};t.prototype.Xc=function(q){q.Sg=this.qa;this.qa=[];this.nb.unshift(q)};t.prototype.se=function(q){q!==this.nb[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.nb.shift(),this.write.apply(this,q.Sg),!this.nb.length&&this.Mb&&(this.Xc(this.Mb),this.Mb=null))};t.prototype.Bh=function(q,r){var v=this.Sf(q),w=this.qh(v),y=this.options.Bf;q.src&&(v.src=q.src,this.nh(v,w?y:function(){r();y()}));try{this.Hg(v),q.src&&!w||r()}catch(x){this.options.error(x),r()}};t.prototype.Sf=function(q){var r=this.Ea.createElement(q.tagName);d(q.J,function(v,w){r.setAttribute(v,w)});q.content&&(r.text=q.content);return r};t.prototype.Hg=function(q){this.ld('<span id="ps-script"/>');
var r=this.Ea.getElementById("ps-script");r.parentNode.replaceChild(q,r)};t.prototype.nh=function(q,r){function v(){q=q.onload=q.onreadystatechange=q.onerror=null}var w=this.options.error;e(q,{onload:function(){v();r()},onreadystatechange:function(){/^(loaded|complete)$/.test(q.readyState)&&(v(),r())},onerror:function(){var y={message:"remote script failed "+q.src};v();w(y);r()}})};t.prototype.qh=function(q){return!/^script$/i.test(q.nodeName)||!!(this.options.jh&&q.src&&q.hasAttribute("async"))};
return t}();l.postscribe=function(){function n(){var w=r.shift(),y;w&&(y=w[w.length-1],y.Cf(),w.stream=t.apply(null,w),y.Df())}function t(w,y,x){function z(G){G=x.Nf(G);v.write(G);x.Ef(G)}v=new p(w,x);v.id=q++;v.name=x.name||v.id;var A=w.ownerDocument,B={close:A.close,open:A.open,write:A.write,writeln:A.writeln};e(A,{close:a,open:a,write:function(){return z(h(arguments).join(""))},writeln:function(){return z(h(arguments).join("")+"\n")}});var E=v.rb.onerror||a;v.rb.onerror=function(G,J,N){x.error({Xh:G+
" - "+J+":"+N});E.apply(v.rb,arguments)};v.write(y,function(){e(A,B);v.rb.onerror=E;x.done();v=null;n()});return v}var q=0,r=[],v=null;return e(function(w,y,x){"function"===typeof x&&(x={done:x});x=g(x,k);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.Vh?w[0]:w;var z=[w,y,x];w.Vg={cancel:function(){z.stream?z.stream.abort():z[1]=a}};x.Mf(z);r.push(z);v||n();return w.Vg},{streams:{},Zh:r,Jh:p})}();Lb=l.postscribe}})();var Mb=function(a,b){var c=new Ka(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.evaluate(d[e]);return b.apply(this,d)});c.Og();return c};for(var Nb="floor ceil round max min abs pow sqrt".split(" "),Ob=0;Ob<Nb.length;Ob++)Math.hasOwnProperty(Nb[Ob]);(function(){var a={};return a})();var C=window,D=document,Pb=navigator,Qb=D.currentScript&&D.currentScript.src,Rb=function(a,b){var c=C[a];C[a]=void 0===c?b:c;return C[a]},Sb=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Tb=function(a,b,c){var d=D.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Sb(d,b);c&&(d.onerror=c);var e;if(null===da)b:{var g=ba.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&ca.test(k)){da=k;break b}}da=""}e=da;e&&d.setAttribute("nonce",e);var l=D.getElementsByTagName("script")[0]||D.body||D.head;l.parentNode.insertBefore(d,l);return d},Ub=function(){if(Qb){var a=Qb.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Vb=function(a,b){var c=D.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=D.body&&D.body.lastChild||
D.body||D.head;d.parentNode.insertBefore(c,d);Sb(c,b);void 0!==a&&(c.src=a);return c},Wb=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Xb=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Yb=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},F=function(a){C.setTimeout(a,0)},Zb=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},$b=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},ac=function(a){var b=D.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},bc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},cc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var H={Za:"_ee",ic:"event_callback",Qa:"event_timeout",H:"gtag.config",S:"allow_ad_personalization_signals",U:"cookie_expires",Oa:"cookie_update",za:"session_duration"};var rc=/[A-Z]+/,sc=/\s/,tc=function(a){if(f(a)&&(a=Aa(a),!sc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(rc.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],h:d}}}}},vc=function(a){for(var b={},c=0;c<a.length;++c){var d=tc(a[c]);d&&(b[d.id]=d)}uc(b);var e=[];wa(b,function(g,h){e.push(h)});return e};
function uc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.h[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var wc={},xc=null,yc=Math.random();wc.m="GTM-646L";wc.Eb="aa0";var zc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0},Ac="www.googletagmanager.com/gtm.js";var Bc=Ac,Cc=null,Dc=null,Ec=null,Fc="//www.googletagmanager.com/a?id="+wc.m+"&cv=529",Gc={},Hc={},Ic=function(){var a=xc.sequence||0;xc.sequence=a+1;return a};var Jc={},Kc=function(a,b){Jc[a]=Jc[a]||[];Jc[a][b]=!0},Lc=function(a){for(var b=[],c=Jc[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var Mc=function(){return"&tc="+tb.filter(function(a){return a}).length},Xc=function(){Oc&&(C.clearTimeout(Oc),Oc=void 0);void 0===Pc||Qc[Pc]&&!Rc||(Sc[Pc]||Tc.Mg()||0>=Uc--?(Kc("GTM",1),Sc[Pc]=!0):(Tc.hh(),Wb(Vc()),Qc[Pc]=!0,Wc=Rc=""))},Vc=function(){var a=Pc;if(void 0===a)return"";var b=Lc("GTM"),c=Lc("TAGGING");return[Yc,Qc[a]?"":"&es=1",Zc[a],b?"&u="+b:"",c?"&ut="+c:"",Mc(),Rc,Wc,"&z=0"].join("")},$c=function(){return[Fc,"&v=3&t=t","&pid="+ta(),"&rv="+wc.Eb].join("")},ad="0.005000">
Math.random(),Yc=$c(),bd=function(){Yc=$c()},Qc={},Rc="",Wc="",Pc=void 0,Zc={},Sc={},Oc=void 0,Tc=function(a,b){var c=0,d=0;return{Mg:function(){if(c<a)return!1;Ba()-d>=b&&(c=0);return c>=a},hh:function(){Ba()-d>=b&&(c=0);c++;d=Ba()}}}(2,1E3),Uc=1E3,cd=function(a,b){if(ad&&!Sc[a]&&Pc!==a){Xc();Pc=a;Rc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Zc[a]="&e="+c+"&eid="+a;Oc||(Oc=C.setTimeout(Xc,500))}},dd=function(a,b,c){if(ad&&!Sc[a]&&b){a!==Pc&&(Xc(),Pc=a);var d=String(b[Fb.ka]||"").replace(/_/g,
"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;Rc=Rc?Rc+"."+e:"&tr="+e;Oc||(Oc=C.setTimeout(Xc,500));2022<=Vc().length&&Xc()}};var ed={},fd=new ua,gd={},hd={},kd={name:"dataLayer",set:function(a,b){u(Ja(a,b),gd);id()},get:function(a){return jd(a,2)},reset:function(){fd=new ua;gd={};id()}},jd=function(a,b){if(2!=b){var c=fd.get(a);if(ad){var d=ld(a);c!==d&&Kc("GTM",5)}return c}return ld(a)},ld=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:nd(d)},nd=function(a){for(var b=gd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var qd=function(a,b){hd.hasOwnProperty(a)||(fd.set(a,b),u(Ja(a,b),gd),id())},id=function(a){wa(hd,function(b,c){fd.set(b,c);u(Ja(b,void 0),gd);u(Ja(b,c),gd);a&&delete hd[b]})},rd=function(a,b,c){ed[a]=ed[a]||{};var d=1!==c?ld(b):fd.get(b);"array"===Na(d)||"object"===Na(d)?ed[a][b]=u(d):ed[a][b]=d},sd=function(a,b){if(ed[a])return ed[a][b]};var td=function(){var a=!1;return a};var L=function(a,b,c,d){return(2===ud()||d||"http:"!=C.location.protocol?a:b)+c},ud=function(){var a=Ub(),b;if(1===a)a:{var c=Bc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=D.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Jd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Kd={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Ld={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Md="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Od=function(a){var b=jd("gtm.whitelist");b&&Kc("GTM",9);var c=b&&Ia(za(b),Kd),d=jd("gtm.blacklist");d||(d=jd("tagTypeBlacklist"))&&Kc("GTM",3);
d?Kc("GTM",8):d=[];Nd()&&(d=za(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=ra(za(d),"google")&&Kc("GTM",2);var e=d&&Ia(za(d),Ld),g={};return function(h){var k=h&&h[Fb.ka];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=Hc[k]||[],m=a(k,l);if(b){var p;if(p=m)a:{if(0>ra(c,k))if(l&&0<l.length)for(var n=0;n<l.length;n++){if(0>
ra(c,l[n])){Kc("GTM",11);p=!1;break a}}else{p=!1;break a}p=!0}m=p}var t=!1;if(d){var q=0<=ra(e,k);if(q)t=q;else{var r=va(e,l||[]);r&&Kc("GTM",10);t=r}}var v=!m||t;v||!(0<=ra(l,"sandboxedScripts"))||c&&-1!==ra(c,"sandboxedScripts")||(v=va(e,Md));return g[k]=v}},Nd=function(){return Jd.test(C.location&&C.location.hostname)};var Pd={$f:function(a,b){b[Fb.qd]&&"string"===typeof a&&(a=1==b[Fb.qd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Fb.sd)&&null===a&&(a=b[Fb.sd]);b.hasOwnProperty(Fb.ud)&&void 0===a&&(a=b[Fb.ud]);b.hasOwnProperty(Fb.td)&&!0===a&&(a=b[Fb.td]);b.hasOwnProperty(Fb.rd)&&!1===a&&(a=b[Fb.rd]);return a}};var Qd={active:!0,isWhitelisted:function(){return!0}},Rd=function(a){var b=xc.zones;!b&&a&&(b=xc.zones=a());return b};var Sd=!1,Td=0,Ud=[];function Vd(a){if(!Sd){var b=D.createEventObject,c="complete"==D.readyState,d="interactive"==D.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Sd=!0;for(var e=0;e<Ud.length;e++)F(Ud[e])}Ud.push=function(){for(var g=0;g<arguments.length;g++)F(arguments[g]);return 0}}}function Wd(){if(!Sd&&140>Td){Td++;try{D.documentElement.doScroll("left"),Vd()}catch(a){C.setTimeout(Wd,50)}}}var Xd=function(a){Sd?a():Ud.push(a)};var Yd={},Zd={},$d=function(a,b,c,d){if(!Zd[a]||zc[b]||"__zone"===b)return-1;var e={};Pa(d)&&(e=u(d,e));e.id=c;e.status="timeout";return Zd[a].tags.push(e)-1},ae=function(a,b,c,d){if(Zd[a]){var e=Zd[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function be(a){for(var b=Yd[a]||[],c=0;c<b.length;c++)b[c]();Yd[a]={push:function(d){d(wc.m,Zd[a])}}}
var ee=function(a,b,c){Zd[a]={tags:[]};na(b)&&ce(a,b);c&&C.setTimeout(function(){return be(a)},Number(c));return de(a)},ce=function(a,b){Yd[a]=Yd[a]||[];Yd[a].push(Fa(function(){return F(function(){b(wc.m,Zd[a])})}))};function de(a){var b=0,c=0,d=!1;return{add:function(){c++;return Fa(function(){b++;d&&b>=c&&be(a)})},Jf:function(){d=!0;b>=c&&be(a)}}};var fe=function(){function a(d){return!oa(d)||0>d?0:d}if(!xc._li&&C.performance&&C.performance.timing){var b=C.performance.timing.navigationStart,c=oa(kd.get("gtm.start"))?kd.get("gtm.start"):0;xc._li={cst:a(c-b),cbt:a(Dc-b)}}};var je=!1,ke=function(){return C.GoogleAnalyticsObject&&C[C.GoogleAnalyticsObject]},le=!1;
var me=function(a){C.GoogleAnalyticsObject||(C.GoogleAnalyticsObject=a||"ga");var b=C.GoogleAnalyticsObject;if(C[b])C.hasOwnProperty(b)||Kc("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);C[b]=c}fe();return C[b]},ne=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=ke();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var pe=function(){},oe=function(){return C.GoogleAnalyticsObject||"ga"};var re=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var se=/:[0-9]+$/,te=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},we=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=ue(a.protocol)||ue(C.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:C.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||C.location.hostname).replace(se,"").toLowerCase());var g=b,h,k=ue(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=ve(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(se,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||Kc("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=ra(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=te(h,e,void 0));break;case "extension":var p=a.pathname.split(".");h=1<p.length?p[p.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},ue=function(a){return a?a.replace(":","").toLowerCase():""},ve=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
xe=function(a){var b=D.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Kc("TAGGING",1),c="/"+c);var d=b.hostname.replace(se,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var De=function(a){};function Ce(a,b){a.containerId=wc.m;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function Ee(a,b,c,d){var e=tb[a],g=Fe(a,b,c,d);if(!g)return null;var h=Bb(e[Fb.Od],c,[]);if(h&&h.length){var k=h[0];g=Ee(k.index,{L:g,V:1===k.$d?b.terminate:g,terminate:b.terminate},c,d)}return g}
function Fe(a,b,c,d){function e(){if(g[Fb.rf])k();else{var w=Cb(g,c,[]),y=$d(c.id,String(g[Fb.ka]),Number(g[Fb.Pd]),w[Fb.sf]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var B=Ba()-A;dd(c.id,tb[a],"5");ae(c.id,y,"success",B);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var B=Ba()-A;dd(c.id,tb[a],"6");ae(c.id,y,"failure",B);k()}};w.vtp_gtmTagId=g.tag_id;
w.vtp_gtmEventId=c.id;dd(c.id,g,"1");var z=function(B){var E=Ba()-A;De(B);dd(c.id,g,"7");ae(c.id,y,"exception",E);x||(x=!0,k())};var A=Ba();try{Ab(w,c)}catch(B){z(B)}}}var g=tb[a],h=b.L,k=b.V,l=b.terminate;if(c.Nc(g))return null;var m=Bb(g[Fb.Qd],c,[]);if(m&&m.length){var p=m[0],n=Ee(p.index,{L:h,V:k,terminate:l},c,d);if(!n)return null;h=n;k=2===p.$d?l:n}if(g[Fb.Nd]||g[Fb.tf]){var t=g[Fb.Nd]?ub:c.sh,q=h,r=k;if(!t[a]){e=Fa(e);var v=Ge(a,t,e);h=v.L;k=v.V}return function(){t[a](q,r)}}return e}
function Ge(a,b,c){var d=[],e=[];b[a]=He(d,e,c);return{L:function(){b[a]=Ie;for(var g=0;g<d.length;g++)d[g]()},V:function(){b[a]=Je;for(var g=0;g<e.length;g++)e[g]()}}}function He(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Ie(a){a()}function Je(a,b){b()};var Me=function(a,b){for(var c=[],d=0;d<tb.length;d++)if(a.jb[d]){var e=tb[d];var g=b.add();try{var h=Ee(d,{L:g,V:g,terminate:g},a,d);h?c.push({He:d,we:Db(e),kg:h}):(Ke(d,a),g())}catch(l){g()}}b.Jf();c.sort(Le);for(var k=0;k<c.length;k++)c[k].kg();return 0<c.length};function Le(a,b){var c,d=b.we,e=a.we;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.He,k=b.He;g=h>k?1:h<k?-1:0}return g}
function Ke(a,b){if(!ad)return;var c=function(d){var e=b.Nc(tb[d])?"3":"4",g=Bb(tb[d][Fb.Od],b,[]);g&&g.length&&c(g[0].index);dd(b.id,tb[d],e);var h=Bb(tb[d][Fb.Qd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var Ne=!1,Oe=function(a,b,c,d,e){if("gtm.js"==b){if(Ne)return!1;Ne=!0}cd(a,b);var g=ee(a,d,e);rd(a,"event",1);rd(a,"ecommerce",1);rd(a,"gtm");var h={id:a,name:b,Nc:Od(c),jb:[],sh:[],oe:function(p){Kc("GTM",6);De(p)}};h.jb=Jb(h);var k=Me(h,g);
if(!k)return k;for(var l=0;l<h.jb.length;l++)if(h.jb[l]){var m=tb[l];if(m&&!zc[String(m[Fb.ka])])return!0}return!1};var Qe=function(a,b,c,d,e){var g=this;this.eventModel=a;this.containerConfig=c||{};this.targetConfig=b||{};this.containerConfig=c||{};this.lb=d||{};this.globalConfig=e||{};this.getWithConfig=function(h){if(void 0!==g.eventModel[h])return g.eventModel[h];if(void 0!==g.targetConfig[h])return g.targetConfig[h];if(void 0!==g.containerConfig[h])return g.containerConfig[h];if(void 0!==g.lb[h])return g.lb[h];if(void 0!==g.globalConfig[h])return g.globalConfig[h]}};var Re={},Se=["G"];Re.Je="";var Te=Re.Je.split(",");function Ue(){var a=xc;return a.gcq=a.gcq||new Ve}
var We=function(a,b,c){Ue().register(a,b,c)},Xe=function(a,b,c,d){Ue().push("event",[b,a],c,d)},Ye=function(a,b){Ue().push("config",[a],b)},Ze={},$e=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.lb={};this.xe=null;this.je=!1},af=function(a,b,c,d,e){this.type=a;this.Ie=b;this.N=c||"";this.Ib=d;this.defer=e},Ve=function(){this.Wd={};this.fe={};this.eb=[]},bf=function(a,b){var c=tc(b);return a.Wd[c.containerId]=a.Wd[c.containerId]||new $e},cf=function(a,b,c,d){if(d.N){var e=
bf(a,d.N),g=e.xe;if(g){var h=u(c),k=u(e.targetConfig[d.N]),l=u(e.containerConfig),m=u(e.lb),p=u(a.fe),n=new Qe(h,k,l,m,p);try{3===g.length?g(b,d.Ie,n):4===g.length&&g(d.N,b,d.Ie,n)}catch(t){}}}};
Ve.prototype.register=function(a,b,c){if(3!==bf(this,a).status){bf(this,a).xe=b;bf(this,a).status=3;c&&(bf(this,a).lb=c);var d=tc(a),e=Ze[d.containerId];if(void 0!==e){var g=xc[d.containerId].bootstrap,h=jd("gtm.uniqueEventId"),k=d.prefix,l=Ba()-g;if(ad&&!Sc[h]){h!==Pc&&(Xc(),Pc=h);var m=k+"."+Math.floor(g-e)+"."+Math.floor(l);Wc=Wc?Wc+","+m:"&cl="+m}delete Ze[d.containerId]}this.flush()}};
Ve.prototype.push=function(a,b,c,d){var e=Math.floor(Ba()/1E3);if(c){var g=tc(c),h;if(h=g){var k;if(k=1===bf(this,c).status)a:{var l=g.prefix;k=!0}h=k}if(h&&(bf(this,c).status=2,this.push("require",[],g.containerId),Ze[g.containerId]=Ba(),!td())){var m=encodeURIComponent(g.containerId);Tb(("http:"!=C.location.protocol?"https:":
"http:")+("//www.googletagmanager.com/gtag/js?id="+m+"&l=dataLayer&cx=c"))}}this.eb.push(new af(a,e,c,b,d));d||this.flush()};
Ve.prototype.flush=function(a){for(var b=this;this.eb.length;){var c=this.eb[0];if(c.defer)c.defer=!1,this.eb.push(c);else switch(c.type){case "require":if(3!==bf(this,c.N).status&&!a)return;break;case "set":wa(c.Ib[0],function(l,m){u(Ja(l,m),b.fe)});break;case "config":var d=c.Ib[0],e=!!d[H.yb];delete d[H.yb];var g=bf(this,c.N),h=tc(c.N),k=h.containerId===h.id;e||(k?g.containerConfig={}:g.targetConfig[c.N]={});g.je&&e||cf(this,H.H,d,c);g.je=!0;k?u(d,g.containerConfig):u(d,g.targetConfig[c.N]);break;
case "event":cf(this,c.Ib[1],c.Ib[0],c)}this.eb.shift()}};var df=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},gf=function(a,b,c,d){var e=ef(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=ff(e,function(g){return g.Nb},b);if(1===e.length)return e[0].id;e=ff(e,function(g){return g.kb},c);return e[0]?e[0].id:void 0}};
function hf(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=df(b,e).indexOf(c)}
var lf=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var p=l;p&&1200<p.length&&(p=p.substring(0,1200));l=p;m=a+"="+l}var n=void 0,t=void 0,q;for(q in h)if(h.hasOwnProperty(q)){var r=h[q];if(null!=r)switch(q){case "secure":r&&(m+="; secure");break;case "domain":n=r;break;default:"path"==q&&(t=r),"expires"==q&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+q+"="+r}}if("auto"===n){for(var v=jf(),w=0;w<v.length;++w){var y="none"!=v[w]?v[w]:void 0;if(!kf(y,t)&&hf(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else n&&"none"!=n&&(m+="; domain="+n),k=!kf(n,t)&&hf(m,a,l)}return k};function ff(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function ef(a,b){for(var c=[],d=df(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Nb:1*k[0]||1,kb:1*k[1]||1}))}}return c}
var mf=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,nf=/(^|\.)doubleclick\.net$/i,kf=function(a,b){return nf.test(document.location.hostname)||"/"===b&&mf.test(a)},jf=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;nf.test(e)||mf.test(e)||a.push("none");return a};var of="".split(/,/),qf=null,rf={},sf={},tf,uf=function(a,b){var c={event:a};b&&(c.eventModel=u(b),b[H.ic]&&(c.eventCallback=b[H.ic]),b[H.Qa]&&(c.eventTimeout=b[H.Qa]));return c};
var Af={config:function(a){},
event:function(a){var b=a[1];if(f(b)&&!(3<a.length)){var c;if(2<a.length){if(!Pa(a[2])&&void 0!=a[2])return;c=a[2]}var d=uf(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){3===a.length&&(void 0).Uh().Kh(a[1],a[2])},set:function(a){var b;2==a.length&&Pa(a[1])?b=u(a[1]):3==a.length&&f(a[1])&&(b={},Pa(a[2])||pa(a[2])?b[a[1]]=u(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},Bf={policy:!0};var Df=function(a){return Cf?D.querySelectorAll(a):null},Ef=function(a,b){if(!Cf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!D.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Ff=!1;if(D.querySelectorAll)try{var Gf=D.querySelectorAll(":root");Gf&&1==Gf.length&&Gf[0]==D.documentElement&&(Ff=!0)}catch(a){}var Cf=Ff;var Nf=function(a){if(Mf(a))return a;this.zh=a};Nf.prototype.sg=function(){return this.zh};var Mf=function(a){return!a||"object"!==Na(a)||Pa(a)?!1:"getUntrustedUpdateValue"in a};Nf.prototype.getUntrustedUpdateValue=Nf.prototype.sg;var Of=!1,Pf=[];function Qf(){if(!Of){Of=!0;for(var a=0;a<Pf.length;a++)F(Pf[a])}}var Rf=function(a){Of?F(a):Pf.push(a)};var Sf=[],Tf=!1,Uf=function(a){return C["dataLayer"].push(a)},Vf=function(a){var b=xc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}},Xf=function(a){var b=a._clear;wa(a,function(g,h){"_clear"!==g&&(b&&qd(g,void 0),qd(g,h))});Cc||(Cc=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Ic(),a["gtm.uniqueEventId"]=d,qd("gtm.uniqueEventId",d));Ec=c;var e=Wf(a);
Ec=null;switch(c){case "gtm.init":Kc("GTM",19),e&&Kc("GTM",20)}return e};function Wf(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=xc.zones;d=e?e.checkState(wc.m,c):Qd;return d.active?Oe(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var Yf=function(){for(var a=!1;!Tf&&0<Sf.length;){Tf=!0;delete gd.eventModel;id();var b=Sf.shift();if(null!=b){var c=Mf(b);if(c){var d=b;b=Mf(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=jd(h,1);if(pa(k)||Pa(k))k=u(k);hd[h]=k}}try{if(na(b))try{b.call(kd)}catch(v){}else if(pa(b)){var l=b;if(f(l[0])){var m=
l[0].split("."),p=m.pop(),n=l.slice(1),t=jd(m.join("."),2);if(void 0!==t&&null!==t)try{t[p].apply(t,n)}catch(v){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&f(b[0])){var r=Af[b[0]];if(r&&(!c||!Bf[b[0]])){b=r(b);break a}}b=void 0}if(!b){Tf=!1;continue}}a=Xf(b)||a}}finally{c&&id(!0)}}Tf=!1}
return!a},Zf=function(){var a=Yf();try{var b=wc.m,c=C["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},$f=function(){var a=Rb("dataLayer",[]),b=Rb("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Xd(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Rf(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||
0)+1;var c=a.push;a.push=function(){var d;if(0<xc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Nf(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);Sf.push.apply(Sf,d);if(300<this.length)for(Kc("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Yf()&&h};Sf.push.apply(Sf,a.slice(0));F(Zf)};var ag;var wg={};wg.Ab=new String("undefined");
var xg=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===wg.Ab?b:a[d]);return c.join("")}};xg.prototype.toString=function(){return this.resolve("undefined")};xg.prototype.valueOf=xg.prototype.toString;wg.wf=xg;wg.xc={};wg.cg=function(a){return new xg(a)};var yg={};wg.ih=function(a,b){var c=Ic();yg[c]=[a,b];return c};wg.Xd=function(a){var b=a?0:1;return function(c){var d=yg[c];if(d&&"function"===typeof d[b])d[b]();yg[c]=void 0}};wg.Kg=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};wg.Wg=function(a){if(a===wg.Ab)return a;var b=Ic();wg.xc[b]=a;return'google_tag_manager["'+wc.m+'"].macro('+b+")"};wg.Pg=function(a,b,c){a instanceof wg.wf&&(a=a.resolve(wg.ih(b,c)),b=ma);return{Kc:a,L:b}};var zg=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Zb(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Ag=function(a){xc.hasOwnProperty("autoEventsSettings")||(xc.autoEventsSettings={});var b=xc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Bg=function(a,b,c){Ag(a)[b]=c},Cg=function(a,b,c,d){var e=Ag(a),g=Ca(e,b,d);e[b]=c(g)},Dg=function(a,b,c){var d=Ag(a);return Ca(d,b,c)};var Eg=function(){for(var a=Pb.userAgent+(D.cookie||"")+(D.referrer||""),b=a.length,c=C.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ba()/1E3)].join(".")},Hg=function(a,b,c,d){var e=Fg(b);return gf(a,e,Gg(c),d)},Ig=function(a,b,c,d){var e=""+Fg(c),g=Gg(d);1<g&&(e+="-"+g);return[b,e,a].join(".")},Fg=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Gg=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var Jg=["1"],Kg={},Og=function(a,b,c,d){var e=Lg(a);Kg[e]||Mg(e,b,c)||(Ng(e,Eg(),b,c,d),Mg(e,b,c))};function Ng(a,b,c,d,e){var g=Ig(b,"1",d,c);lf(a,g,c,d,0==e?void 0:new Date(Ba()+1E3*(void 0==e?7776E3:e)))}function Mg(a,b,c){var d=Hg(a,b,c,Jg);d&&(Kg[a]=d);return d}function Lg(a){return(a||"_gcl")+"_au"};var Pg=function(){for(var a=[],b=D.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({hd:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].hd]||(g[a[h].hd]=[]),g[a[h].hd].push({timestamp:k[1],pg:k[2]}))}return g};function Qg(){for(var a=Rg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Sg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var Rg,Tg,Ug=function(a){Rg=Rg||Sg();Tg=Tg||Qg();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,p=(h&15)<<2|k>>6,n=k&63;e||(n=64,d||(p=64));b.push(Rg[l],Rg[m],Rg[p],Rg[n])}return b.join("")},Vg=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),p=Tg[m];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Rg=Rg||Sg();Tg=Tg||
Qg();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Wg;function Xg(a,b){if(!a||b===D.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var ah=function(){var a=Yg,b=Zg,c=$g(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){Xb(D,"mousedown",d);Xb(D,"keyup",d);Xb(D,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},$g=function(){var a=Rb("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var bh=/(.*?)\*(.*?)\*(.*)/,ch=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,dh=/^(?:www\.|m\.|amp\.)+/,eh=/([^?#]+)(\?[^#]*)?(#.*)?/,fh=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,hh=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Ug(String(d))))}var e=b.join("*");return["1",gh(e),e].join("*")},gh=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Wg)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}Wg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Wg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},jh=function(){return function(a){var b=xe(C.location.href),c=b.search.replace("?",""),d=te(c,"_gl",!0)||"";a.query=ih(d)||{};var e=we(b,"fragment").match(fh);a.fragment=ih(e&&e[3]||
"")||{}}},kh=function(){var a=jh(),b=$g();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ga(c,d.query),Ga(c,d.fragment));return c},ih=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=bh.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],p=0;p<b;++p)if(m===gh(k,p)){l=!0;break a}l=!1}if(l){for(var n={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)n[t[q]]=Vg(t[q+1]);return n}}}}catch(r){}};
function lh(a,b,c){function d(m){var p=m,n=fh.exec(p),t=p;if(n){var q=n[2],r=n[4];t=n[1];r&&(t=t+q+r)}m=t;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=eh.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function mh(a,b,c){for(var d={},e={},g=$g().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&Xg(k.domains,b)&&(k.fragment?Ga(e,k.callback()):Ga(d,k.callback()))}if(Ha(d)){var l=hh(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var p=a.childNodes||[],n=!1,t=0;t<p.length;t++){var q=p[t];if("_gl"===q.name){q.setAttribute("value",l);n=!0;break}}if(!n){var r=D.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=lh(l,a.action);re.test(v)&&(a.action=v)}}}else nh(l,a,!1)}if(!c&&Ha(e)){var w=hh(e);nh(w,a,!0)}}function nh(a,b,c){if(b.href){var d=lh(a,b.href,void 0===c?!1:c);re.test(d)&&(b.href=d)}}
var Yg=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||mh(e,e.hostname,!1)}}catch(h){}},Zg=function(a){try{if(a.action){var b=we(xe(a.action),"host");mh(a,b,!0)}}catch(c){}},oh=function(a,b,c,d){ah();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};$g().decorators.push(e)},ph=function(){var a=D.location.hostname,b=ch.exec(D.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(dh,""),l=e.replace(dh,""),m;if(!(m=k===l)){var p="."+l;m=k.substring(k.length-p.length,k.length)===p}return m},qh=function(a,b){return!1===a?!1:a||b||ph()};var rh={};var sh=/^\w+$/,th=/^[\w-]+$/,uh=/^~?[\w-]+$/,vh={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function wh(a){return a&&"string"==typeof a&&a.match(sh)?a:"_gcl"}var yh=function(){var a=xe(C.location.href),b=we(a,"query",!1,void 0,"gclid"),c=we(a,"query",!1,void 0,"gclsrc"),d=we(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||te(e,"gclid",void 0);c=c||te(e,"gclsrc",void 0)}return xh(b,c,d)};
function xh(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(th))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==rh.gtm_3pds?0:rh.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}var Ah=function(a){var b=yh();zh(b,a)};
function zh(a,b,c){function d(n,t){var q=Bh(n,e);q&&lf(q,t,h,g,l,!0)}b=b||{};var e=wh(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Vb?7776E3:b.Vb;c=c||Ba();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),p=function(n){return["GCL",m,n].join(".")};a.aw&&(!0===b.ki?d("aw",p("~"+a.aw[0])):d("aw",p(a.aw[0])));a.dc&&d("dc",p(a.dc[0]));a.gf&&d("gf",p(a.gf[0]));a.ha&&d("ha",p(a.ha[0]))}
var Dh=function(a,b,c,d,e){for(var g=kh(),h=wh(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==vh[l]){var m=Bh(l,h),p=g[m];if(p){var n=Math.min(Ch(p),Ba()),t;b:{for(var q=n,r=df(m,D.cookie),v=0;v<r.length;++v)if(Ch(r[v])>q){t=!0;break b}t=!1}t||lf(m,p,c,d,0==e?void 0:new Date(n+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};zh(xh(g.gclid,g.gclsrc),w)},Bh=function(a,b){var c=vh[a];if(void 0!==c)return b+c},Ch=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Eh(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Fh=function(a,b,c,d,e){if(pa(b)){var g=wh(e);oh(function(){for(var h={},k=0;k<a.length;++k){var l=Bh(a[k],g);if(l){var m=df(l,D.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},Gh=function(a){return a.filter(function(b){return uh.test(b)})},Hh=function(a){for(var b=["aw","dc"],c=wh(a&&a.prefix),d={},e=0;e<b.length;e++)vh[b[e]]&&(d[b[e]]=vh[b[e]]);wa(d,function(g,h){var k=df(c+h,D.cookie);if(k.length){var l=k[0],m=Ch(l),p={};p[g]=[Eh(l)];zh(p,a,m)}})};var Ih=/^\d+\.fls\.doubleclick\.net$/;function Jh(a){var b=xe(C.location.href),c=we(b,"host",!1);if(c&&c.match(Ih)){var d=we(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Kh(a,b){if("aw"==a||"dc"==a){var c=Jh("gcl"+a);if(c)return c.split(".")}var d=wh(b);if("_gcl"==d){var e;e=yh()[a]||[];if(0<e.length)return e}var g=Bh(a,d),h;if(g){var k=[];if(D.cookie){var l=df(g,D.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var p=Eh(l[m]);p&&-1===ra(k,p)&&k.push(p)}h=Gh(k)}else h=k}else h=k}else h=[];return h}
var Lh=function(){var a=Jh("gac");if(a)return decodeURIComponent(a);var b=Pg(),c=[];wa(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].pg);g=Gh(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},Mh=function(a,b,c,d,e){Og(b,c,d,e);var g=Kg[Lg(b)],h=yh().dc||[],k=!1;if(g&&0<h.length){var l=xc.joined_au=xc.joined_au||{},m=b||"_gcl";if(!l[m])for(var p=0;p<h.length;p++){var n="https://adservice.google.com/ddm/regclk",t=n=n+"?gclid="+h[p]+"&auiddc="+g;Pb.sendBeacon&&Pb.sendBeacon(t)||Wb(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var q=Lg(b),r=Kg[q];r&&Ng(q,r,c,d,e)}};var Nh;if(3===wc.Eb.length)Nh="g";else{var Oh="G";Nh=Oh}
var Ph={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Nh,OPT:"o"},Qh=function(a){var b=wc.m.split("-"),c=b[0].toUpperCase(),d=Ph[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",g;if(3===wc.Eb.length){var h=void 0;g="2"+(h||"w")}else g=
"";return g+d+wc.Eb+e};var Vh=["input","select","textarea"],Wh=["button","hidden","image","reset","submit"],Yh=function(a){var b=a.tagName.toLowerCase();return!sa(Vh,function(c){return c===b})||"input"===b&&sa(Wh,function(c){return c===a.type.toLowerCase()})?!1:!0},Zh=function(a){return a.form?a.form.tagName?a.form:D.getElementById(a.form):bc(a,["form"],100)},$h=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,g=1;e<a.elements.length;e++){var h=a.elements[e];if(Yh(h)){if(h.getAttribute(c)===d)return g;
g++}}return 0};var ci=!!C.MutationObserver,di=void 0,ei=function(a){if(!di){var b=function(){var c=D.body;if(c)if(ci)(new MutationObserver(function(){for(var e=0;e<di.length;e++)F(di[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Xb(c,"DOMNodeInserted",function(){d||(d=!0,F(function(){d=!1;for(var e=0;e<di.length;e++)F(di[e])}))})}};di=[];D.body?b():F(b)}di.push(a)};var Gi=C.clearTimeout,Hi=C.setTimeout,M=function(a,b,c){if(td()){b&&F(b)}else return Tb(a,b,c)},Ii=function(){return C.location.href},Ji=function(a){return we(xe(a),"fragment")},Ki=function(a){return ve(xe(a))},Li=null;
var Mi=function(a,b){return jd(a,b||2)},Ni=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return Uf(a)},Oi=function(a,b){C[a]=b},W=function(a,b,c){b&&(void 0===C[a]||c&&!C[a])&&(C[a]=b);return C[a]},Pi=function(a,b,c){return df(a,b,void 0===c?!0:!!c)},Qi=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Vb:d};Ah(e);Hh(e)},Ri=function(a,b,c,d,e){Fh(a,b,c,d,e);},Si=function(a,b){if(td()){b&&F(b)}else Vb(a,b)},Ti=function(a){return!!Dg(a,"init",!1)},Ui=function(a){Bg(a,"init",!0)},Vi=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":Bc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&wa(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});M(L("https://","http://",d))},Wi=function(a,b){var c=a[b];
return c};var Yi=wg.Pg;
var Zi=new ua,$i=function(a,b){function c(h){var k=xe(h),l=we(k,"protocol"),m=we(k,"host",!0),p=we(k,"port"),n=we(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,m,p,n]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},aj=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&pa(c)){for(var d=0;d<c.length;d++)if(aj({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var p;p=String(b).split(",");
return 0<=ra(p,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var n;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,r=Zi.get(q);r||(r=new RegExp(c,t),Zi.set(q,r));n=r.test(b)}catch(v){n=!1}return n;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return $i(b,c)}return!1};var cj={},dj=function(){if(C._gtmexpgrp&&C._gtmexpgrp.hasOwnProperty(1))return C._gtmexpgrp[1];void 0===cj[1]&&(cj[1]=Math.floor(2*Math.random()));return cj[1]};var ej=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var fj={},gj=encodeURI,X=encodeURIComponent,hj=Wb;var ij=function(a,b){if(!a)return!1;var c=we(xe(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var jj=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};fj.Lg=function(){var a=!1;return a};var Tj=function(){var a=C.gaGlobal=C.gaGlobal||{};a.hid=a.hid||ta();return a.hid};var Ck=window,Dk=document,Ek=function(a){var b=Ck._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Ck["ga-disable-"+a])return!0;try{var c=Ck.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=df("AMP_TOKEN",Dk.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Dk.getElementById("__gaOptOutExtension")?!0:!1};var Hk=function(a){return"_"===a.charAt(0)},Ik=function(a){wa(a,function(c){Hk(c)&&delete a[c]});var b=a[H.zb]||{};wa(b,function(c){Hk(c)&&delete b[c]})};var Lk=function(a,b,c){Xe(b,c,a)},Mk=function(a,b,c){Xe(b,c,a,!0)},Ok=function(a,b){},Nk=function(a,b){};
var Z={a:{}};


Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.b="c";Z.__c.g=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Z.a.d=["google"],function(){(function(a){Z.__d=a;Z.__d.b="d";Z.__d.g=!0;Z.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=Df(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}else b=D.getElementById(a.vtp_elementId);b&&(c=d?Zb(b,d):$b(b));return Aa(String(b&&c))})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(sd(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=Mi("gtm.referrer",1)||D.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?we(xe(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Ki(String(b)):String(b)})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=zg(c,"gtm.click");Ni(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!Ti("cl")){var c=W("document");Xb(c,"click",a,!0);Ui("cl")}F(b.vtp_gtmOnSuccess)})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.b="j";Z.__j.g=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=W(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.b="k";Z.__k.g=!0;Z.__k.priorityOverride=0})(function(a){return Pi(a.vtp_name,Mi("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();
Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0;Z.__r.priorityOverride=0})(function(a){return ta(a.vtp_min,a.vtp_max)})}();
Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Mi("gtm.url",1))||Ii();var d=b[a("vtp_component")];if(!d||"URL"==d)return Ki(String(c));var e=xe(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?pa(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var p=0;p<m.length;p++){var n=we(e,"QUERY",void 0,void 0,m[p]);if(void 0!=n&&(!l||""!==n)){g=n;break a}}g=void 0}else g=we(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Mi(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.asp=["nonGoogleScripts"],function(){(function(a){Z.__asp=a;Z.__asp.b="asp";Z.__asp.g=!0;Z.__asp.priorityOverride=0})(function(a){C.adroll_adv_id=a.vtp_customerId;C.adroll_pix_id=a.vtp_pixelId;void 0!==a.vtp_conversionValueInDollars&&(C.adroll_conversion_value=a.vtp_conversionValueInDollars,C.adroll_currency=a.vtp_conversionValueCurrency||"USD");if(a.vtp_customData){var b=jj(a.vtp_customData,"key","value");C.adroll_custom_data=b}a.vtp_segmentName&&(C.adroll_segments=a.vtp_segmentName);a.vtp_visitorEmail&&
(C.adroll_email=a.vtp_visitorEmail);C.__adroll_loaded=!0;var c=L("https://s","http://a",".adroll.com/j/roundtrip.js");M(c,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();



Z.a.opt=["google"],function(){var a,b=function(c){var d={};if(c.vtp_gaSettings){var e=c.vtp_gaSettings;u(jj(e.vtp_fieldsToSet,"fieldName","value"),d);c.vtp_gaSettings=null;e.vtp_fieldsToSet=void 0;var g=u(e);c=u(c,g)||{}}u(jj(c.vtp_fieldsToSet,"fieldName","value"),d);var h=me(c.vtp_functionName);if(na(h)){h.r=!0;var k="",l="";c.vtp_setTrackerName&&"string"===typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(l=c.vtp_trackerName,k=l+"."):(l="gtm"+Ic(),k=l+".");var m={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},p={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0},n=function(y,x,z){var A=0,B;for(B in y)if(y.hasOwnProperty(B)&&
(z&&m[B]||!z&&void 0===m[B])){var E=p[B]?ya(y[B]):y[B];"anonymizeIp"!==B||E||(E=void 0);x[B]=E;A++}return A},t={name:l};n(d,t,!0);var q={"&gtm":Qh(!0)};n(d,q,!1);var r=encodeURI(L("https:","http:","//www.google-analytics.com/"+(c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js"),!!d.forceSSL));h("create",c.vtp_trackingId,t);h(k+"set",q);h(k+"require",c.vtp_optimizeContainerId,{dataLayer:"dataLayer"});h(c.vtp_gtmOnSuccess);h(k+"require","render");a||(a=!0,M(r,function(){return ke().loaded||
c.vtp_gtmOnFailure()},c.vtp_gtmOnFailure));var v=W("dataLayer"),w=v&&v.hide;w&&w.end&&(w[c.vtp_optimizeContainerId]=!0)}else F(c.vtp_gtmOnFailure)};Z.__opt=b;Z.__opt.b="opt";Z.__opt.g=!0;Z.__opt.priorityOverride=0}();


Z.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha"];(function(b){Z.__gclidw=b;Z.__gclidw.b="gclidw";Z.__gclidw.g=!0;Z.__gclidw.priorityOverride=100})(function(b){F(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;if(b.vtp_enableCrossDomainFeature&&(!b.vtp_enableCrossDomain||!1!==b.vtp_acceptIncoming)&&(b.vtp_enableCrossDomain||
ph())){Dh(a,h,k,l,void 0);}Qi(e,c,d);Mh(g,e,c,d);var m=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var p=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");Ri(a,p,b.vtp_urlPosition,!!b.vtp_formDecoration,m)}})}();

Z.a.aev=["google"],function(){function a(q,r){var v=sd(q,"gtm");if(v)return v[r]}function b(q,r,v,w){w||(w="element");var y=q+"."+r,x;if(p.hasOwnProperty(y))x=p[y];else{var z=a(q,w);if(z&&(x=v(z),p[y]=x,n.push(y),35<n.length)){var A=n.shift();delete p[A]}}return x}function c(q,r,v){var w=a(q,t[r]);return void 0!==w?w:v}function d(q,r){if(!q)return!1;var v=e(Ii());pa(r)||(r=String(r||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<r.length;y++)if(r[y]instanceof RegExp){if(r[y].test(q))return!1}else{var x=
r[y];if(0!=x.length){if(0<=e(q).indexOf(x))return!1;w.push(e(x))}}return!ij(q,w)}function e(q){m.test(q)||(q="http://"+q);return we(xe(q),"HOST",!0)}function g(q,r,v){switch(q){case "SUBMIT_TEXT":return b(r,"FORM."+q,h,"formSubmitElement")||v;case "LENGTH":var w=b(r,"FORM."+q,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(r,"id",v);case "INTERACTED_FIELD_NAME":return l(r,"name",v);case "INTERACTED_FIELD_TYPE":return l(r,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(r,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(r,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(q){switch(q.tagName.toLowerCase()){case "input":return Zb(q,"value");case "button":return $b(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var r=0,v=0;v<q.elements.length;v++)Yh(q.elements[v])&&r++;return r}}function l(q,r,v){var w=a(q,"interactedFormField");return w&&Zb(w,r)||v}var m=/^https?:\/\//i,p={},n=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Z.__aev=q;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(q){var r=q.vtp_gtmEventId,v=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var y=a(r,"element");return y&&y.tagName||
v;case "TEXT":return b(r,w,$b)||v;case "URL":var x;a:{var z=String(a(r,"elementUrl")||v||""),A=xe(z),B=String(q.vtp_component||"URL");switch(B){case "URL":x=z;break a;case "IS_OUTBOUND":x=d(z,q.vtp_affiliatedDomains);break a;default:x=we(A,B,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===q.vtp_attribute)E=c(r,w,v);else{var G=q.vtp_attribute,J=a(r,"element");E=J&&Zb(J,G)||v||""}return E;case "MD":var N=q.vtp_mdValue,V=b(r,"MD",si);return N&&V?vi(V,N)||
v:V||v;case "FORM":return g(String(q.vtp_component||"SUBMIT_TEXT"),r,v);default:return c(r,w,v)}})}();
Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.b="gas";Z.__gas.g=!0;Z.__gas.priorityOverride=0})(function(a){var b=u(a),c=b;c[Fb.ka]=null;c[Fb.pf]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.a.hl=["google"],function(){function a(g){return g.target&&g.target.location&&g.target.location.href?g.target.location.href:Ii()}function b(g,h){Xb(g,"hashchange",function(k){var l=a(k);h({source:"hashchange",state:null,url:Ki(l),F:Ji(l)})})}function c(g,h){Xb(g,"popstate",function(k){var l=a(k);h({source:"popstate",state:k.state,url:Ki(l),F:Ji(l)})})}function d(g,h,k){var l=h.history,m=l[g];if(na(m))try{l[g]=function(p,n,t){m.apply(l,[].slice.call(arguments,0));k({source:g,state:p,url:Ki(Ii()),
F:Ji(Ii())})}}catch(p){}}function e(){var g={source:null,state:W("history").state||null,url:Ki(Ii()),F:Ji(Ii())};return function(h){var k=g,l={};l[k.source]=!0;l[h.source]=!0;if(!l.popstate||!l.hashchange||k.F!=h.F){var m={event:"gtm.historyChange","gtm.historyChangeSource":h.source,"gtm.oldUrlFragment":g.F,"gtm.newUrlFragment":h.F,"gtm.oldHistoryState":g.state,"gtm.newHistoryState":h.state};m["gtm.oldUrl"]=g.url,m["gtm.newUrl"]=h.url;
g=h;Ni(m)}}}(function(g){Z.__hl=g;Z.__hl.b="hl";Z.__hl.g=!0;Z.__hl.priorityOverride=0})(function(g){var h=W("self");if(!Ti("hl")){var k=e();b(h,k);c(h,k);d("pushState",h,k);d("replaceState",h,k);Ui("hl")}F(g.vtp_gtmOnSuccess)})}();
Z.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=W("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(k){fe();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:Qh()},m=function(v){return function(w,y,x){var z="DATA_LAYER"==v?Mi(x):k[y];z&&(l[w]=z)}},p=m("JSON");p("google_conversion_currency","vtp_currencyCode");p("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(p=m(k.vtp_productReportingDataSource),p("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),p("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),p("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),p("google_basket_discount","vtp_discount","discount"),p("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}}));var n=function(v,w){(l.google_additional_conversion_params=l.google_additional_conversion_params||{})[v]=w},t=function(v){return function(w,y,x,z){var A="DATA_LAYER"==
v?Mi(x):k[y];z(A)&&n(w,A)}},q="//www.googleadservices.com/pagead/conversion_async.js";-1!=navigator.userAgent.toLowerCase().indexOf("firefox")&&(0==dj()?(n("cjs","0"),q="https://www.googleadservices.com/pagead/conversion_async.js?cjs=0"):(n("cjs","1"),q="https://www.google.com/pagead/conversion_async.js?cjs=1"));k.vtp_enableNewCustomerReporting&&(p=t(k.vtp_newCustomerReportingDataSource),
p("vdnc","vtp_awNewCustomer","new_customer",function(v){return void 0!=v&&""!==v}),p("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(v){return void 0!=v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var r=!0;r&&b.push(l);a||(a=!0,M(q,g(),e(q)))};Z.__awct=h;Z.__awct.b="awct";Z.__awct.g=!0;Z.__awct.priorityOverride=0}();
Z.a.bzi=["nonGoogleScripts"],function(){(function(a){Z.__bzi=a;Z.__bzi.b="bzi";Z.__bzi.g=!0;Z.__bzi.priorityOverride=0})(function(a){try{C._bizo_data_partner_id=a.vtp_id,C._bizo_data_partner_title=a.vtp_title,C._bizo_data_partner_domain=a.vtp_domain,C._bizo_data_partner_company=a.vtp_company,C._bizo_data_partner_location=a.vtp_location,C._bizo_data_partner_employee_range=a.vtp_employeeRange,C._bizo_data_partner_sics=a.vtp_standardIndustrialClassification,C._bizo_data_partner_email=a.vtp_email,M(L("https://sjs",
"http://js",".bizographics.com/insight.min.js"),a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)}catch(b){F(a.vtp_gtmOnFailure)}})}();
Z.a.fsl=[],function(){function a(){var e=W("document"),g=c(),h=HTMLFormElement.prototype.submit;Xb(e,"click",function(k){var l=k.target;if(l&&(l=bc(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&Zb(l,"value")){var m;(m=l.form?l.form.tagName?l.form:D.getElementById(l.form):bc(l,["form"],100))&&g.store(m,l)}},!1);Xb(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,p=b(l)&&!m,n=g.get(l),t=!0;if(d(l,function(){if(t){var q;
n&&(q=e.createElement("input"),q.type="hidden",q.name=n.name,q.value=n.value,l.appendChild(q));h.call(l);q&&l.removeChild(q)}},m,p,n))t=!1;else return m||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),m=!0;d(k,function(){m&&h.call(k)},!1,l)&&(h.call(k),m=!1)}}function b(e){var g=e.target;return g&&"_self"!==g&&"_parent"!==g&&"_top"!==g?!1:!0}function c(){var e=[],g=function(h){return sa(e,function(k){return k.form===
h})};return{store:function(h,k){var l=g(h);l?l.button=k:e.push({form:h,button:k})},get:function(h){var k=g(h);return k?k.button:null}}}function d(e,g,h,k,l){var m=Dg("fsl",h?"nv.mwt":"mwt",0),p;p=h?Dg("fsl","nv.ids",[]):Dg("fsl","ids",[]);if(!p.length)return!0;var n=zg(e,"gtm.formSubmit",p),t=e.action;t&&t.tagName&&(t=e.cloneNode(!1).action);n["gtm.elementUrl"]=t;l&&(n["gtm.formSubmitElement"]=l);if(k&&m){if(!Ni(n,Vf(g),m))return!1}else Ni(n,function(){},m||2E3);return!0}(function(e){Z.__fsl=e;Z.__fsl.b=
"fsl";Z.__fsl.g=!0;Z.__fsl.priorityOverride=0})(function(e){var g=e.vtp_waitForTags,h=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(g){var m=function(n){return Math.max(k,n)};Cg("fsl","mwt",m,0);h||Cg("fsl","nv.mwt",m,0)}var p=function(n){n.push(l);return n};Cg("fsl","ids",p,[]);h||Cg("fsl","nv.ids",p,[]);Ti("fsl")||(a(),Ui("fsl"));F(e.vtp_gtmOnSuccess)})}();Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=jj(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0;Z.__paused.priorityOverride=0})(function(a){F(a.vtp_gtmOnFailure)})}();

Z.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=D.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var p=k.getAttribute("data-gtmsrc");p&&(m.src=p,Sb(m,l));d.insertBefore(m,null);p||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var n=
[];k.firstChild;)n.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,n,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){F(h)}}}var b=function(d,e,g){Xd(function(){var h,k=xc;k.postscribe||(k.postscribe=Lb);h=k.postscribe;var l={done:e},m=D.createElement("div");m.style.display="none";m.style.visibility="hidden";D.body.appendChild(m);try{h(m,d,l)}catch(p){F(g)}})};var c=function(d){if(D.body){var e=
d.vtp_gtmOnFailure,g=Yi(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.Kc,k=g.L;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(D.body,ac(h),k,e)()}else Hi(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();





Z.a.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.b="img";Z.__img.g=!0;Z.__img.priorityOverride=0})(function(a){var b=ac('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}hj(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();


Z.a.lcl=[],function(){function a(){var c=W("document"),d=0,e=function(g){var h=g.target;if(h&&3!==g.which&&(!g.timeStamp||g.timeStamp!==d)){d=g.timeStamp;h=bc(h,["a","area"],100);if(!h)return g.returnValue;var k=g.defaultPrevented||!1===g.returnValue,l=Dg("lcl",k?"nv.mwt":"mwt",0),m;m=k?Dg("lcl","nv.ids",[]):Dg("lcl","ids",[]);if(m.length){var p=zg(h,"gtm.linkClick",m);if(b(g,h,c)&&!k&&l&&h.href){var n=W((Wi(h,"target")||"_self").substring(1)),t=!0;if(Ni(p,Vf(function(){t&&n&&(n.location.href=Wi(h,
"href"))}),l))t=!1;else return g.preventDefault&&g.preventDefault(),g.returnValue=!1}else Ni(p,function(){},l||2E3);return!0}}};Xb(c,"click",e,!1);Xb(c,"auxclick",e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var g=Wi(d,"href"),h=g.indexOf("#"),k=Wi(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===h)return!1;if(0<h){var l=Ki(g),m=Ki(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.b="lcl";Z.__lcl.g=!0;Z.__lcl.priorityOverride=
0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,g=Number(c.vtp_waitForTagsTimeout);if(!g||0>=g)g=2E3;var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(g,m)};Cg("lcl","mwt",k,0);e||Cg("lcl","nv.mwt",k,0)}var l=function(m){m.push(h);return m};Cg("lcl","ids",l,[]);e||Cg("lcl","nv.ids",l,[]);Ti("lcl")||(a(),Ui("lcl"));F(c.vtp_gtmOnSuccess)})}();

var al={};al.macro=function(a){if(wg.xc.hasOwnProperty(a))return wg.xc[a]},al.onHtmlSuccess=wg.Xd(!0),al.onHtmlFailure=wg.Xd(!1);al.dataLayer=kd;al.callback=function(a){Gc.hasOwnProperty(a)&&na(Gc[a])&&Gc[a]();delete Gc[a]};al.Of=function(){xc[wc.m]=al;Ga(Hc,Z.a);xb=xb||wg;yb=Pd};
al.Gg=function(){rh.gtm_3pds=!0;xc=C.google_tag_manager=C.google_tag_manager||{};if(xc[wc.m]){var a=xc.zones;a&&a.unregisterChild(wc.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)pb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)tb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)sb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var p=l[m],n={},t=0;t<p.length;t++)n[p[t][0]]=Array.prototype.slice.call(p[t],1);qb.push(n)}vb=Z;wb=aj;al.Of();$f();Sd=!1;Td=0;if("interactive"==D.readyState&&!D.createEventObject||"complete"==D.readyState)Vd();else{Xb(D,"DOMContentLoaded",Vd);Xb(D,"readystatechange",Vd);if(D.createEventObject&&D.documentElement.doScroll){var q=!0;try{q=!C.frameElement}catch(y){}q&&Wd()}Xb(C,"load",Vd)}Of=!1;"complete"===D.readyState?Qf():
Xb(C,"load",Qf);a:{if(!ad)break a;C.setInterval(bd,864E5);}
Dc=(new Date).getTime();}};(0,al.Gg)();

})()
