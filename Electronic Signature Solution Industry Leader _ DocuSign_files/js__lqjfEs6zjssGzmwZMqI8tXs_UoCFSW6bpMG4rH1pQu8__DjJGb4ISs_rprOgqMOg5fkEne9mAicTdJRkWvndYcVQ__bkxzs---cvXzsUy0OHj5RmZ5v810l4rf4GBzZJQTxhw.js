/* Source and licensing information for the line(s) below can be found at https://www.docusign.com.au/sites/all/modules/custom/dcs_redirect/dcs_redirect.js. */
(function(window,$,Drupal){"use strict";var dcsRedirect=function(lang){if(!lang){return;}
var settings=Drupal.settings.redirectDomain||{};if(lang==='current'){$.each(settings,function(key,value){if(value.current!==undefined&&value.current){$.cookie('preferredHost',key,{path:'/'});return false;}});return;}
if(settings[lang].current!==undefined&&!settings[lang].current&&settings[lang].host!==undefined){window.location.hash='drd';window.location.host=settings[lang].host;}};Drupal.behaviors.redirectDomain={attach:function(context,settings){$('select.lang-dropdown-select-element').change(function(){var lang=this.options[this.selectedIndex].value;$.cookie('preferredHost',lang,{path:'/'});});var preferredHost=$.cookie('preferredHost');if(window.location.hash.search('drd')!==-1){window.location.hash='';preferredHost='current';}
if(preferredHost){dcsRedirect(preferredHost);return;}
$.ajax({url:Drupal.settings.basePath+'sites/all/modules/custom/dcs_redirect/dcs_redirect.php'}).done(function(response){dcsRedirect(response);});}};}(this,this.jQuery,this.Drupal));;
/* Source and licensing information for the above line(s) can be found at https://www.docusign.com.au/sites/all/modules/custom/dcs_redirect/dcs_redirect.js. */
