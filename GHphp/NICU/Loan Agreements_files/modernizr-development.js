
/*! Respond.js: min/max-width media query polyfill. (c) Scott Jehl. MIT Lic. j.mp/respondjs  */
(function(e,h){e.respond={};respond.update=function(){};respond.mediaQueriesSupported=h;if(h){return}var u=e.document,r=u.documentElement,i=[],k=[],p=[],o={},g=30,f=u.getElementsByTagName("head")[0]||r,b=f.getElementsByTagName("link"),d=[],a=function(){var B=b,w=B.length,z=0,y,x,A,v;for(;z<w;z++){y=B[z],x=y.href,A=y.media,v=y.rel&&y.rel.toLowerCase()==="stylesheet";if(!!x&&v&&!o[x]){if(!/^([a-zA-Z]+?:(\/\/)?(www\.)?)/.test(x)||x.replace(RegExp.$1,"").split("/")[0]===e.location.host){d.push({href:x,media:A})}else{o[x]=true}}}t()},t=function(){if(d.length){var v=d.shift();n(v.href,function(w){m(w,v.href,v.media);o[v.href]=true;t()})}},m=function(G,v,x){var E=G.match(/@media[^\{]+\{([^\{\}]+\{[^\}\{]+\})+/gi),H=E&&E.length||0,v=v.substring(0,v.lastIndexOf("/")),w=function(I){return I.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+v+"$2$3")},y=!H&&x,B=0,A,C,D,z,F;if(v.length){v+="/"}if(y){H=1}for(;B<H;B++){A=0;if(y){C=x;k.push(w(G))}else{C=E[B].match(/@media ([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1;k.push(RegExp.$2&&w(RegExp.$2))}z=C.split(",");F=z.length;for(;A<F;A++){D=z[A];i.push({media:D.match(/(only\s+)?([a-zA-Z]+)(\sand)?/)&&RegExp.$2,rules:k.length-1,minw:D.match(/\(min\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/)&&parseFloat(RegExp.$1),maxw:D.match(/\(max\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/)&&parseFloat(RegExp.$1)})}}j()},l,q,j=function(E){var v="clientWidth",x=r[v],D=u.compatMode==="CSS1Compat"&&x||u.body[v]||x,z={},C=u.createDocumentFragment(),B=b[b.length-1],w=(new Date()).getTime();if(E&&l&&w-l<g){clearTimeout(q);q=setTimeout(j,g);return}else{l=w}for(var y in i){var F=i[y];if(!F.minw&&!F.maxw||(!F.minw||F.minw&&D>=F.minw)&&(!F.maxw||F.maxw&&D<=F.maxw)){if(!z[F.media]){z[F.media]=[]}z[F.media].push(k[F.rules])}}for(var y in p){if(p[y]&&p[y].parentNode===f){f.removeChild(p[y])}}for(var y in z){var G=u.createElement("style"),A=z[y].join("\n");G.type="text/css";G.media=y;if(G.styleSheet){G.styleSheet.cssText=A}else{G.appendChild(u.createTextNode(A))}C.appendChild(G);p.push(G)}f.insertBefore(C,B.nextSibling)},n=function(v,x){var w=c();if(!w){return}w.open("GET",v,true);w.onreadystatechange=function(){if(w.readyState!=4||w.status!=200&&w.status!=304){return}x(w.responseText)};if(w.readyState==4){return}w.send()},c=(function(){var v=false,w=[function(){return new ActiveXObject("Microsoft.XMLHTTP")},function(){return new XMLHttpRequest()}],y=w.length;while(y--){try{v=w[y]()}catch(x){continue}break}return function(){return v}})();a();respond.update=a;function s(){j(true)}if(e.addEventListener){e.addEventListener("resize",s,false)}else{if(e.attachEvent){e.attachEvent("onresize",s)}}})(this,(function(f){if(f.matchMedia){return true}var e,i=document,c=i.documentElement,g=c.firstElementChild||c.firstChild,h=!i.body,d=i.body||i.createElement("body"),b=i.createElement("div"),a="only all";b.id="mq-test-1";b.style.cssText="position:absolute;top:-99em";d.appendChild(b);b.innerHTML='_<style media="'+a+'"> #mq-test-1 { width: 9px; }</style>';if(h){c.insertBefore(d,g)}b.removeChild(b.firstChild);e=b.offsetWidth==9;if(h){c.removeChild(d)}else{d.removeChild(b)}return e})(this));

/* Modernizr custom build of 1.7: applicationcache | localstorage | touch | iepp | innerShiv */

/* disable IEPP - the site is not printing well in IE, and this helps */
window.iepp = { disablePP: true };

/* Modernizr */
/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 */
/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 */
;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(m.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}var d="2.5.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={},o={},p={},q=[],r=q.slice,s,t=function(a,c,d,e){var f,i,j,k=b.createElement("div"),l=b.body,m=l?l:b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),k.appendChild(j);return f=["&#173;","<style>",a,"</style>"].join(""),k.id=h,m.innerHTML+=f,m.appendChild(k),l||(m.style.background="",g.appendChild(m)),i=c(k,a),l?k.parentNode.removeChild(k):m.parentNode.removeChild(m),!!i},u=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return t("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e});var C=function(c,d){var f=c.join(""),g=d.length;t(f,function(c,d){var f=b.styleSheets[b.styleSheets.length-1],h=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"",i=c.childNodes,j={};while(g--)j[i[g].id]=i[g];e.touch="ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch||(j.touch&&j.touch.offsetTop)===9},g,d)}([,["@media (",m.join("touch-enabled),("),h,")","{#touch{top:9px;position:absolute}}"].join("")],[,"touch"]);n.touch=function(){return e.touch},n.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},n.applicationcache=function(){return!!a.applicationCache};for(var D in n)w(n,D)&&(s=D.toLowerCase(),e[s]=n[D](),q.push((e[s]?"":"no-")+s));return x(""),i=k=null,function(a,b){function g(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function h(){var a=k.elements;return typeof a=="string"?a.split(" "):a}function i(a){var b={},c=a.createElement,e=a.createDocumentFragment,f=e();a.createElement=function(a){var e=(b[a]||(b[a]=c(a))).cloneNode();return k.shivMethods&&e.canHaveChildren&&!d.test(a)?f.appendChild(e):e},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+h().join().replace(/\w+/g,function(a){return b[a]=c(a),f.createElement(a),'c("'+a+'")'})+");return n}")(k,f)}function j(a){var b;return a.documentShived?a:(k.shivCSS&&!e&&(b=!!g(a,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),f||(b=!i(a)),b&&(a.documentShived=b),a)}var c=a.html5||{},d=/^<|^(?:button|form|map|select|textarea)$/i,e,f;(function(){var a=b.createElement("a");a.innerHTML="<xyz></xyz>",e="hidden"in a,f=a.childNodes.length==1||function(){try{b.createElement("a")}catch(a){return!0}var c=b.createDocumentFragment();return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"}()})();var k={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:j};a.html5=k,j(b)}(this,b),e._version=d,e._prefixes=m,e.mq=u,e.testStyles=t,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+q.join(" "):""),e}(this,this.document);

document.documentElement.className = document.documentElement.className.replace( "applicationcache", "");

/* innerShiv Plugin for appending HTML5 elements */
window.innerShiv=(function(){var lteIE8 = document.documentElement.className.match( /ie6|ie7|ie8/ ),d,r;return function(h,u){if(!lteIE8){return h}if(!d){d=document.createElement("div");r=document.createDocumentFragment();d.style.display="none";d.style.display="none"}var e=d.cloneNode(true);document.body.appendChild(e);e.innerHTML=h.replace(/^\s\s*/,"").replace(/\s\s*$/,"");document.body.removeChild(e);if(u===false){return e.childNodes}var f=r.cloneNode(true),i=e.childNodes.length;while(i--){f.appendChild(e.firstChild)}return f}}());

// display: table and table-cell test. (both are tested under one name "table-cell" )
// By @scottjehl

/*
Modernizr.addTest( "display-table",function(){
  
  var doc   = window.document,
      docElem = doc.documentElement,   
      parent  = doc.createElement( "div" ),
      child = doc.createElement( "div" ),
      childb  = doc.createElement( "div" ),
      ret;
  
  parent.style.cssText = "display: table";
  child.style.cssText = childb.style.cssText = "display: table-cell; padding: 10px";    
          
  parent.appendChild( child );
  parent.appendChild( childb );
  docElem.insertBefore( parent, docElem.firstChild );
  
  ret = child.offsetLeft < childb.offsetLeft;
  docElem.removeChild(parent);
  return ret; 
});

/*/

//some quick support flags for enhanced scripting/styles
(function(win, undefined){
	//define some globals
	var doc 		= win.document,
		docElem 	= doc.documentElement,
		head		= doc.head || doc.getElementsByTagName( "head" )[0] || docElem,
		Modernizr	= win.Modernizr;

	//define "globe" global namespace
	globe = {};
	
	// mixins - utility object extender
	globe.extend = function( obj, props ){
		for (var i in props ) {
	        obj[i] = props[i];
	    }
	    return globe;
	};
	
	//support hash
	globe.extend( globe, {
		browser	: {},
		dev		: {},
		support	: {}
	});
	
	//define a few browsers (from conditional comments)
	var docElem = win.document.documentElement;
	globe.browser.ie6 = docElem.className.indexOf( "ie6" ) >= 0;
	globe.browser.ie7 = docElem.className.indexOf( "ie7" ) >= 0;
	globe.browser.ie8 = docElem.className.indexOf( "ie8" ) >= 0;	
	
	//dev mobile assets flag: use for previewing mobile-optimized assets
	globe.dev.mobileOverride = location.search.indexOf("mobile-assets") >= 0;
	
	//callback for dependencies. 
	// You can use isDefined to run code as soon as the document.body is defined, for example, for body-dependent scripts
	// or, for a script that's loaded asynchronously that depends on other scripts, such as jQuery.
	// First argument is the property that must be defined, second is the callback function
	globe.onDefine = function( prop, callback ){
		var callbackStack 	= [];
		
		if( callback ){
			callbackStack.push( callback );
		}
		
		function checkRun(){
			if( eval( prop ) ){
				while( callbackStack[0] && typeof( callbackStack[0] ) === "function" ){
					callbackStack.shift().call( win );
				}
			}
			else{
				setTimeout(checkRun, 15); 
			}
		};
		
		checkRun();
	};
	
	// shortcut of isDefine body-specific 
	globe.bodyready = function( callback ){
		globe.onDefine( "document.body", callback );
	};
	
	/* Asset loading functions:
		- globe.load is a simple script or stylesheet loader
		- scripts can be loaded via the globe.load.script() function
		- Styles can be loaded via the globe.load.style() function, 
		  which accepts an href and an optional media attribute
	*/

	//loading functions available on globe.load
	globe.load = {};

	//define globe.load.style
	globe.load.style = function( href, media ){
		if( !href ){ return; }
		var lk			= doc.createElement( "link" ),
			links		= head.getElementsByTagName("link"),
			lastlink	= links[links.length-1];
			lk.type 	= "text/css";
			lk.href 	= href;
			lk.rel		= "stylesheet";
			if( media ){
				lk.media = media;
			}
			
			//if respond.js is present, be sure to update its media queries cache once this stylesheet loads
			//IE should have no problems with the load event on links, unlike other browsers
			if( "respond" in window ){
				lk.onload = respond.update;
			}
			
			//might need to wait until DOMReady in IE...
			if( lastlink.nextSibling ){
				head.insertBefore(lk, lastlink.nextSibling );
			} else {
				head.appendChild( lk );
			}
	};
	
	//define globe.load.style
	globe.load.script = function( src ){
		if( !src ){ return; }
		var script		= doc.createElement( "script" ),
			fc			= head.firstChild;
			script.src 	= src;

			//might need to wait until DOMReady in IE...
			if( fc ){
				head.insertBefore(script, fc );
			} else {
				head.appendChild( script );
			}
	};
	
	//quick element class existence function
	globe.hasClass = function( el, classname ){
		return el.className.indexOf( classname ) >= 0;
	};
	
	//cookie functions - set,get,forget
	globe.cookie = {
		set: function(name,value,days) {
			if (days) {
				var date = new Date();
				date.setTime(date.getTime()+(days*24*60*60*1000));
				var expires = "; expires="+date.toGMTString();
			}
			else var expires = "";
			document.cookie = name+"="+value+expires+"; path=/";
		},
		get: function(name) {
			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for(var i=0;i < ca.length;i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1,c.length);
				if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
			}
			return null;
		},
		forget: function(name) {
			createCookie(name, "", -1);
		}
	};
	
	//extend globe.support with some modernizr definitions
	globe.extend( globe.support, {
		localStorage		: Modernizr.localstorage,
		applicationcache	: Modernizr.applicationcache,
		touch				: Modernizr.touch,
		displayTable		: Modernizr[ "display-table" ]
	});
	
	
	globe.stats = {};
	globe.stats.url = '/Statistics';

	
	/*
		- Function to send click to MSS so that the stats servlet can keep track of the most click (most popular)
		- Method expects at least two object properties, 1) loidEx and 2) portalCommons ( an instance of PortalCommons js from EIDOS )
	*/
	globe.stats.update = function ( obj ){ 
		var counter = "visits",
    	loidEx = obj.loidEx,
		url = globe.stats.url + '?counter=' + escape(counter) + '&loid=' + escape( obj.loidEx ),
		data = "1",
		errorCode = obj.portalCommons.postRemoteHTML(url,data);
		
		if (errorCode == 0){
			//console.log('Thank for sharing on '+counter+'!');
		} else {
			//console.log('Error #' + errorCode );
		}			

	};


	
})(this);
