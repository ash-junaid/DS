/// <reference path="../javascript/byond/v0.1.0/core.js" />
/// <reference path="../javascript/byond/v0.1.0/modules/menu.js" />
/// <reference path="../javascript/byond/v0.1.0/modules/ibLogin.js" />

// JavaScript Document

var app;
(function (app) {

	//	the scam alert modules
	var scamAlert = {};
	app.scamAlert = scamAlert;

	//	the admin modules
	var admin = {
		buttons: undefined,
		background: undefined,
		isLoggedIn: undefined
	};
	app.admin = admin;

	//	the header element
	var header = document.querySelector('.nav-wrapper');
	app.header = header;

	//	the quick tools menu
	var quickTools;
	app.quickTools = quickTools;

	//	the main content wrapper
	var wrapper = document.querySelector('.main-wrapper');
	app.wrapper = wrapper;

	//	carousels on the page
	var carousel = {};
	app.carousel = carousel;


	//	true if there is content inside menu.element.textContent
	function hasContent(elem) {
		var cont = elem.querySelector('.content').textContent;
		if (cont == null) return false;
		if (cont.trim() == '') return false;
		return cont.trim();
	}

	//	function sanitise the cookie
	function sanitiseCookie(cookieArr) {
		if (!(cookieArr instanceof Array)) return;

		var nCookieArray = [];

		for (var i in cookieArr) {
			if (cookieArr[i] == null || cookieArr[i] == undefined) continue;
			if (typeof (cookieArr[i]) !== 'string') continue;
			if (cookieArr[i].trim() == '') continue;

			nCookieArray.push(cookieArr[i]);
		}

		return nCookieArray;
	}

	//	check if the cookie exists or contains the hashCont
	function hasCookieAlert(contHash) {
		if (Byond.Common.Cookies.check('viewedCookieAlerts')) {
			var temp = Byond.Common.Cookies.get('viewedCookieAlerts');

			if (temp.trim() != '') {
				var hashes = sanitiseCookie(temp.split(','));
				return hashes.indexOf(contHash) > -1;
			}
		}

		return false;
	}

	//	add cookies to the viewedCookieAlerts
	function addCookieAlert(contHash) {
		if (!hasCookieAlert(contHash)) {

			var temp = Byond.Common.Cookies.get('viewedCookieAlerts');
			var hashes = [contHash];

			if (temp.trim() != '') {
				hashes = temp.split(',');
				hashes.push(contHash);
				hashes = sanitiseCookie(hashes);
			}

			Byond.Common.Cookies.set('viewedCookieAlerts', hashes.join(','), 9999);
		}
	}


	//	internet banking button
	/*	changes the url based on screen resolution */
	(function () {
		function IBLogin() {
			if (window.innerWidth >= 768) {
				Byond.Modules.IBLogin('desktop');
				console.log('DESKTOP');
			}
			else {
				Byond.Modules.IBLogin('mobile');
				console.log('MOBILE');
			}
		}
		app.IBLogin = IBLogin;
	})();

	
	//	init the scam alert module
	/*	creates the Byond.Modules.Menu object
		finds the buttons and binds click events to them
	*/
	(function () {

		if(document.querySelector('.mod-scam-alert.mod-menu')){

				//	the scam alert dropdown section
		var menu = new Byond.Modules.Menu(document.querySelector('.mod-scam-alert.mod-menu'));
		app.scamAlert = menu.active;

		//	create the close button
		var close = menu.element.querySelector('.mod-button-close');
		close.addEventListener('click', function (e) {
			app.scamAlert.isActive = false;
			e.preventDefault();
			return false;
		});

		//	create the open button
		var open = document.body.querySelector('header .mod-button-scam-alert i');
		open.addEventListener('click', function (e) {
			app.scamAlert.isActive = true;
			app.cookiesAlert.isActive = false;

			e.preventDefault();
			return false;
		});

		//	the loaded state of the scam alert
		var loaded = new Byond.Core.State('scam-alert-loaded');
		loaded.addElement(app.header);
		app.scamAlert.loaded = loaded;

		//	if content in scam alert;
		var scamAlert = hasContent(menu.element);
		if (scamAlert !== false) {
			setTimeout(function () {
				app.scamAlert.loaded.isActive = true;
			});
		}

		}

	

	})();

	//	init the cookies message module
	/*	shows the module based on if the user has
		seen the popup, and closed it.
	*/
	(function () {

		if(document.querySelector('.mod-cookies-alert.mod-menu')){

		//	the cookies message dropdown section
		var menu = new Byond.Modules.Menu(document.querySelector('.mod-cookies-alert.mod-menu'));
		app.cookiesAlert = menu.active;

		//	add a cookie when the menu closes
		menu.active.addHandle(function () {
			if (this.isActive == false) {
				//	add the content hash to the cookie
				addCookieAlert(alertCont.hash());
			}
		});

		//	add the close button
		var close = menu.element.querySelector('.mod-button-close');
		close.addEventListener('click', function (e) {
			app.cookiesAlert.isActive = false;
            if (window.innerWidth <= 640) {
                 jQuery('body').css('padding-top', '4em');
            } else {
                jQuery('body').css('padding-top', '4.5em');
            };
        
			e.preventDefault();
			return false;
		});

		//	is the module loaded
		var loaded = new Byond.Core.State('cookies-alert-loaded');
		loaded.addElement(app.header);
		app.cookiesAlert.loaded = loaded;

		//	if content in cookies alert
		var alertCont = hasContent(menu.element);
		if (alertCont !== false) {
			var hasContHash = hasCookieAlert(alertCont.hash());
			if (!hasContHash) app.cookiesAlert.isActive = true;
             if (window.innerWidth <= 640) {
                 jQuery('body').css('padding-top', '8em');
            } else {
                 jQuery('body').css('padding-top', '10em');
            };

			setTimeout(function () {
				app.cookiesAlert.loaded.isActive = true;
			});
		}

	}

	})();

	//	init the header menu button
	/*	does the same as the default menu functionality.
		but allowes the designer to place the menu button anywhere.
	*/
	(function () {


        //	search button module
        /*	drops down the search field when the search button is pressed
        */
		//	the search button
		var button;
		//	the search field dropdown
		var search;

		jQuery(document).ready(function () {
			if(document.querySelector('header .mod-top-menu .mod-search-button')){

				button = document.querySelector('header .mod-top-menu .mod-search-button');
			search = jQuery('.nav-wrapper #search-form');
           

			button.addEventListener('click', function (e) {
                 var menuToClose = jQuery('#mainNav, .menu-container .login-container-menu ');
				search.slideToggle();
                menuToClose.hide();
				e.preventDefault();
				return false;
			});

			}
			
		});

	
	if(document.querySelector('.nav-wrapper .mod-mobile-menu')){

		var menuBtn = document.querySelector('.nav-wrapper .mod-mobile-menu');
		var menuItems = document.querySelector('.nav-wrapper .menu-container');
       
		menuBtn.addEventListener('click', function (e) {
			var menus = jQuery(menuItems).find('#mainNav');
           // var findMenuCont = jQuery('.menu-wrapper').find('.menu-container');
            var menuToClose = jQuery('#search-form, .menu-container .login-container-menu ');
			menus.toggle();
            //findMenuCont.toggleClass('active');
            menuToClose.hide();
          // jQuery('.menu-wrapper .login-container-menu.active').removeClass('active');
           // menus.toggleClass('mobile-show');
			//	cancel click actions
			e.preventDefault();
			return false;
		});
        

	}
		// jQuery(".mainNavTopLevel li").click(function() { 
              // if (window.width <= 750){

                       // jQuery('html, body').animate({ 
                           // scrollTop: jQuery(this).offset().top 
                        //}); 

               // } ;
        
       // }); 

       if( document.querySelector('.mod-internet-banking')){

       	  var onlineBankingBtn = document.querySelector('.mod-internet-banking');
		
       
		onlineBankingBtn.addEventListener('click', function (e) {
			var onlineBankingMenu = jQuery('.menu-wrapper').find('.login-container-menu');
            var menuToClose = jQuery('#search-form, #mainNav ');
			onlineBankingMenu.toggle();
           onlineBankingBtn.toggleClass('active');
             if (window.innerWidth <= 768) {
                  menuToClose.hide();
            } 
           // jQuery('.menu-wrapper .menu-container.active').removeClass('active');
			//	cancel click actions
			e.preventDefault();
			return false;
		});
        

       }
        
      
        
        
	})();
    
   


	//	init the main content module
	/*	keep the margin for .main-banner
		same as header client height
	*/
	(function () {
		//	check if the use has loged into byond
		var isLoggedIn = (function () {
			var loginState = false;

			//	when doc is ready, find admin items, set loginState;
			jQuery(document).ready(function () {
				if (!app.admin.buttons) app.admin.buttons = document.querySelector('#adminNav');
				if (!app.admin.background) app.admin.background = document.querySelector('#myLogin');

				loginState = (
					app.admin.buttons != null &&
					app.admin.background != null
				);
			});

			return function () {
				return loginState;
			}
		})();
		app.admin.isLoggedIn = isLoggedIn;

		//	get client height;
		var getClientHeight = function (elem) {

			if(elem){

				var val = 0;

			if (app.admin.isLoggedIn())
				val += app.admin.background.clientHeight;

			//if (!elem.isStatic())
			val += elem.clientHeight;

			return val;

			}
			
		}

		//	height change handle
		var handleChange = function () {
			var height = getClientHeight(app.header);
			if (height == 0) height = '';

			//	update the main-wrapper top-margin
		//	app.wrapper.style.marginTop = height == '' ? height : height + 'px';
            

			//	get the quick links, set css top to same-same
			if (app.quickTools && app.quickTools.length) {
				var tmp = height;
				if (app.admin.background) tmp -= app.admin.background.clientHeight;

				if (!app.quickTools.linkWrapper.is('.qt-wrapper-internal')) {
					app.quickTools.linkWrapper.css({
						'top': tmp
					});
				}
			}

			//	if the admin is logged in
			if (app.admin.isLoggedIn()) {
				if (height != '') height -= app.admin.background.clientHeight;

				//	update the admin buttons and background
				app.admin.buttons.style.top = height == '' ? height : height + 'px';
				app.admin.background.style.top = height == '' ? height : height + 'px';
			}
		}

		//	init the watcher event
		var checkHeight = new Byond.Common.Persist(handleChange);


	})();

	//	jCarousel module
	/*	This is creates a slider from the news feed
		adds the relevent information to the app object
	*/
/*	(function () {

		var newsJC = jQuery('.news-carousel');
		var newsPersister;

		if (newsJC.length) {
			newsJC.jcarousel({
				auto: 5,
				start: 1,
				transition_speed: 1000,
				vertical: true,
				scroll: 1,
				wrap: 'circular'
			});
			function updateWidth() {
				var items = newsJC.find('.articlelist_item');
				var slide = newsJC.find('ul.jcarousel-list');

				var cWidth = newsJC.innerWidth();
				var itemCount = items.length;

				var nWidth = cWidth * itemCount;
				var change = cWidth * 0.05;

				slide.css({ 'width': (nWidth) + 'px' });
				items.css({ 'width': (cWidth) + 'px' });
			}

			newsPersister = new Byond.Common.Persist(updateWidth);
		}

		app.carousel.newsCarousel = newsJC;

	})();
*/

	//	Quicklinks popup
	/*	this creates a popups from the .quickTools #slideN items
		the item that opens the id is .<id>_open. i.e:
			#slide1			//	the popup content
			.slide1_open	//	the class to open the popup
	*/
	(function () {
		app.quickTools = jQuery('.quick-tools')
			.first();

		if (!app.quickTools.is('ul'))
			app.quickTools = app.quickTools.find('ul.quick-tools').first();

		app.quickTools.linkWrapper = app.quickTools.parent();

		var items = app.quickTools.linkWrapper.find('#slide,#slide2,#slide3,#slide4,#slide5');

if(items){
	if(items.length > 0){
		
		items.popup({
			focusdelay: 400,
			outline: true,
			vertical: 'center',
			horizontal: 'center',
			blur: true
		});

	}


}
		//	this is the toggle functionality
		jQuery(".mToggleLinks").on("click", function () {
			//app.quickTools.linkWrapper.toggle();
            app.quickTools.toggle();
			jQuery(this).toggleClass("active");
		});
	})();

	//	open the footer links
	/*	opens the footer links
		theres really not that much going on here
	*/
	(function () {
		jQuery(".mToggle").on("click", function () {
			jQuery(".links-tbl").toggle();
			jQuery(this).toggleClass("active");
		});
	})();

})(app || (app = {}));


//	Force GBST Calc Redraw
//	Currently Disabled
//(function ($) {
//	function force() {
//		$(window).trigger('resize');
//	}

//	$(window).bind('load', force);
//	$(window).bind('ready', force);
//	$('#byondTabMenu').on('click', function () {
//		console.log('CLICK')
//		setTimeout(force, 1500)
//	});
//})(jQuery);


//font size manager
function getCookie(c_name) {
	return Byond.Common.Cookies.get(c_name);
}

function checkCookie() {
	var cookieName = 'byon_font_size';
	if (Byond.Common.Cookies.check(cookieName)) {
		var fsize = Byond.Common.Cookies.get(cookieName);
		alert('Welcome again ' + fsize + '!');
		return fsize;
	} else {
		return 3;
	}
}


switchFontSize = function (ckname, val) {
	var bd = jQuery("body");
	switch (val) {
		case 'inc':
			if (CurrentFontSize + 1 < 7) {
				bd.removeClass('fs' + CurrentFontSize);
				CurrentFontSize++;
				bd.addClass('fs' + CurrentFontSize);
			}
			break;
		case 'dec':
			if (CurrentFontSize - 1 > 0) {
				bd.removeClass('fs' + CurrentFontSize);
				CurrentFontSize--;
				bd.addClass('fs' + CurrentFontSize);
			}
			break;
		default:
			bd.removeClass('fs' + CurrentFontSize);
			CurrentFontSize = val;
			bd.addClass('fs' + CurrentFontSize);
	}
	Cookie.set(ckname, CurrentFontSize, { duration: 365 });
}


var title;


jQuery(document).ready(function () {

	//ADD First and last classes to menu
	jQuery('ul.menu li.active ul li:first').addClass("firstItem");
	jQuery('ul.menu li.active ul li:last').addClass("lastItem");

	//add irst and last classes to topmenu
	jQuery('ul#topMenu').each(function () {

		jQuery(this).children('li:first').addClass("firstItem");
		jQuery(this).children('li:last').addClass("lastItem");

	});

	//ADD First and last classes to menu
	jQuery('ul#matic li ul').each(function () {

		jQuery(this).children('li:first').addClass("firstItem");
		jQuery(this).children('li:last').addClass("lastItem");

	});

	// see if ul li ul li has chidlren if yes add class haschildren
	jQuery('ul#matic li ul li').each(function () {

		if (jQuery(this).children('ul').size() > 0) {
			jQuery(this).addClass("hasChildren");
		}
	});


	jQuery("ul#matic li ul li").hover(
	  function () {
	  	jQuery(this).parents('li').addClass('topMenuLeft');
	  },
	  function () {
	  	jQuery(this).parents('li').removeClass('topMenuLeft');
	  }
	);


	if (jQuery('ul.menu ul li').hasClass("active")) {

		jQuery('ul.menu li.active').attr("id", "topCurrent");
		jQuery('ul.menu ul li.active').attr("id", "current");
		jQuery('ul.menu ul li ul li.active').attr("id", "currentChild");
	}

	if (!jQuery('ul.menu li').hasClass("active")) {
		jQuery('ul.menu li:first').addClass("active");
		//jQuery('ul.menu li.active').attr("id", "topCurrent");
	}

	if (jQuery('ul.menu li').hasClass("active")) {
		jQuery('ul.menu > li.active').attr("id", "topCurrent");
	}

	/* end menu classes */

	if (jQuery('#page iframe').hasClass("noSizeInc")) {
		jQuery('span.styleswitcher').css('display', 'none');
	}

	/* start dropdown code */

	jQuery("ul.menu_body li:even").addClass("alt");
	jQuery("ul.menu_body2 li:even").addClass("alt");
	jQuery("ul.menu_body3 li:even").addClass("alt");
	jQuery("ul.menu_body4 li:even").addClass("alt");



	jQuery('img.menu_head').click(function () {

		document.getElementById("onlineTools1").style.position = "relative";
		document.getElementById("onlineTools2").style.position = "static";


		jQuery('ul.menu_body').slideToggle('medium');
		jQuery('ul.menu_body2').fadeOut('opacity:"hide"');



		jQuery('ul.menu_body').addClass("open");


		if (jQuery('ul.menu_body').hasClass("open")) {

			var alertTimerId = 0;

			jQuery("div#onlineTools1").bind("mouseenter", function () {
				clearTimeout(alertTimerId);
			}).bind("mouseleave", function () {
				alertTimerId = setTimeout('showAlert()', 2000);
			});
		}

	});


	jQuery('img.menu_head2').click(function () {

		document.getElementById("onlineTools2").style.position = "relative";
		document.getElementById("onlineTools1").style.position = "static";


		jQuery('ul.menu_body2').slideToggle('medium');
		jQuery('ul.menu_body').fadeOut('opacity:"hide"');




		jQuery('ul.menu_body2').addClass("open");


		if (jQuery('ul.menu_body2').hasClass("open")) {

			var alertTimerId = 0;

			jQuery("div#onlineTools2").bind("mouseenter", function () {
				clearTimeout(alertTimerId);
			}).bind("mouseleave", function () {
				alertTimerId = setTimeout('showAlert(2)', 2000);
			});
		}

	});








});

function showAlert(id) {

	if (typeof (id) == 'undefined') {
		id = '';
	}

	jQuery('ul.menu_body' + id).fadeOut('opacity:"hide"');
	jQuery('ul.menu_body' + id).addClass("closed");
	jQuery('ul.menu_body' + id).removeClass("open");

}

/*to hide extra title in the page if there's a carousel*/
function isShowCarousel() {
    var carouselShow = document.getElementById("carouselContainer");
    if (carouselShow != null) {
        return true;
    }
    return false;
}

 if (isShowCarousel()) {
    var findTitle = jQuery('#page').find('h1:first-child');
     findTitle.hide();
} 




/*Quick Link Code*/
var tmpstate = 1;

jQuery(function () {
	// hides the slickbox as soon as the DOM is ready (a little sooner that page load)
	jQuery('#quickLinksMore').hide();

	jQuery('#quickLinksMoreShow').click(function () {
		jQuery('#quickLinksMore').slideToggle(750);

		if (tmpstate == 1) {
			jQuery('#quickLinksMoreShow').html(" - Quick Links ");
			tmpstate = 2;
		} else {
			jQuery('#quickLinksMoreShow').html(" + Quick Links ");
			tmpstate = 1;

		}
		return false;
	});
});



jQuery(document).ready(function () {

	jQuery('table.expandTb tbody tr:first-child td').addClass('dropDownLink');
	jQuery('table.stripeTable tbody tr td').removeClass('dropDownLink');
	jQuery('ul#btmMenu li:last').addClass('lastBtmMenu');
	jQuery('ul#btmMenu li:last').addClass('lastBtmMenu');
	jQuery('#btmAdverts p:last').addClass('last');
	jQuery('ul#footerLinks li:last').addClass('lastBtmMenu');
    
 
    
		

});


jQuery(document).ready(function () {


	jQuery('ul#articlelist_teste div.articlelist_intro').each(function () {
		jQuery('p:first', this).addClass('newsImg');
		jQuery('p:nth-child(3)', this).addClass('stars');

	});

});


/*add arrow in the main nav menu 
jQuery(document).ready(function () {

    var menuParent = jQuery('ul.mainNavTopLevel li a').parent().width();
    var menuParentWidth = menuParent.width() / 2;
    
	jQuery('ul.mainNavTopLevel li a.active::after').css({
        'margin-top': -menuParentWidth
    });

});*/


/*testimonianls image */
jQuery('.testimonials ul#articlelist_teste li.articlelist_item').each(function () {

	jQuery('.articlelist_intro', this).addClass("mainArticle")
	jQuery('.articlelist_title', this).addClass("mainArticle");
	imageToMove = jQuery('div.articlelist_intro p:first', this).html();
	imageToMove2 = jQuery('div.articlelist_intro p:nth-child(2)', this).html();
	jQuery('div.articlelist_intro img:first', this).remove();
	jQuery('div.articlelist_intro p:nth-child(2)', this).remove();

	if (imageToMove != null) {

		jQuery("div.articlelist_title", this).before("<div class='thumbImage'>" + imageToMove + "</div>");
		jQuery("div.articlelist_intro", this).after("<div class='star-rating " + imageToMove2 + "'></div>");

		jQuery('.mainArticle', this).wrapAll('<div class="articleWrapper" />');

	}

	//alert (imageToMove);

});



/* Fancybox launch code*/
jQuery(document).ready(function() {
	jQuery("a.overlay-flash").fancybox({
		'padding'                : 0,
		'overlayOpacity'        : 0.75,
		'width'				: 560,
		'height'			: 315,
		'autoScale'     	: true,
		'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'hideOnContentClick'    : false,
		'scrolling':	'auto',
		'type'				: 'iframe'
	});

	jQuery("a.overlay-flash2").fancybox({
		'padding'                : 0,
		'overlayOpacity'        : 0.75,
		'scrolling':	'auto',
		'autoScale'     	: true,
		'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'hideOnContentClick'    : false,
		'scrolling':	'auto',
		'type': 'iframe',
		'helpers' : {
			'media' : {}
		}
	});
	




});








jQuery(document).ready(function () {

	var defaults = {
		containerID: 'moccaUItoTop', // fading element id
		containerHoverClass: 'moccaUIhover', // fading element hover class
		scrollSpeed: 1200,
		easingType: 'linear'
	};


	jQuery().UItoTop({ easingType: 'easeOutQuart' });

});



//Disable click to call links// -->
jQuery(document).ready(function () {
	jQuery(".no-link").on("click", function (e) {
		if (jQuery(window).width() >= 640) {
			e.preventDefault();
		}
	});
});

jQuery(document).ready(function () {
    jQuery(window).load(function () {
        if (jQuery(".chart-wrapper").is(':visible')){
            jQuery(window).trigger('resize');
        }
        jQuery("#byondTabMenu").on('click', function () {
            if (jQuery(".chart-wrapper").is(':visible')){
                jQuery(window).trigger('resize');
            }
        });
        jQuery(".chart-wrapper").on('touch touchstart touchend vclick', function () {
            //specific to mobile devices
            jQuery(window).trigger('resize');
        });
    }); 
    
    //show-less-btn
    jQuery(".show-less-btn").on("click", function () {
        jQuery(".show-extra-content").toggle();
        jQuery(this).toggleClass("half-round");
         jQuery(this).html(function(){
          return jQuery(this).html()=="Less" ?"Find out more":"Less" ; 
        });
    });
    
    
    
});



	



(function ($) {

	var div = $(".menu-wrapper");
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();

		if (scroll >= 75) {
			div.removeClass('clearHeader').addClass("darkHeader");
		} else {
			div.removeClass("darkHeader").addClass('clearHeader');
		}
	});
    
    
    
    var findAlertActive = jQuery('body').find('.mod-notifications.is-active');

    if (jQuery('.mod-notifications').hasClass('is-active')) {
            
            if (window.innerWidth <= 640) {
                 jQuery('body').css('padding-top', '8em');
            } else {
                 jQuery('body').css('padding-top', '10em');
            };
        //if (window.innerWidth >= 750) {}
        
    } else {
        
         jQuery(window).trigger('resize');
         if (window.innerWidth <= 640) {
                 jQuery('body').css('padding-top', '4em');
            } else {
                jQuery('body').css('padding-top', '4.5em');
            };
        
        
    }
                      
           // mod-notifications mod-cookies-alert mod-menu is-active 
    
   // if (jQuery(window).width() >= 640)  // not sure who add
    
    // $(window).resize(checkWidth);

    // function checkWidth() {
    //     var windowsize = $window.width();
    //     if (windowsize > 768) {
    //     	 jQuery('body').css('padding-top', '4em');
           
    //     }
    // }
    
     // custom Slick starts

    if (jQuery(".main-slider").length > 0) {

        var slideWrapper = jQuery(".main-slider"),
            iframes = slideWrapper.find('.embed-player'),
            lazyImages = slideWrapper.find('.slide-image'),
            lazyCounter = 0;

        // POST commands to YouTube or Vimeo API
        function postMessageToPlayer(player, command) {
            if (player == null || command == null) return;
            player.contentWindow.postMessage(JSON.stringify(command), "*");
        }

        // When the slide is changing
        function playPauseVideo(slick, control) {
            var currentSlide, slideType, startTime, player, video;

            currentSlide = slick.find(".slick-current");
            slideType = currentSlide.attr("class").split(" ")[1];
            player = currentSlide.find("iframe").get(0);
            startTime = currentSlide.data("video-start");

            if (slideType === "vimeo") {
                switch (control) {
                    case "play":
                        if ((startTime != null && startTime > 0) && !currentSlide.hasClass('started')) {
                            currentSlide.addClass('started');
                            postMessageToPlayer(player, {
                                "method": "setCurrentTime",
                                "value": startTime
                            });
                        }
                        postMessageToPlayer(player, {
                            "method": "play",
                            "value": 1
                        });
                        break;
                    case "pause":
                        postMessageToPlayer(player, {
                            "method": "pause",
                            "value": 1
                        });
                        break;
                }
            } else if (slideType === "youtube") {
                switch (control) {
                    case "play":
                        postMessageToPlayer(player, {
                            "event": "command",
                            "func": "mute"
                        });
                        postMessageToPlayer(player, {
                            "event": "command",
                            "func": "playVideo"
                        });
                        break;
                    case "pause":
                        postMessageToPlayer(player, {
                            "event": "command",
                            "func": "pauseVideo"
                        });
                        break;
                }
            } else if (slideType === "video") {
                video = currentSlide.children("video").get(0);
                if (video != null) {
                    if (control === "play") {
                        video.play();
                    } else {
                        video.pause();
                    }
                }
            }
        }

        // Resize player
        function resizePlayer(iframes, ratio) {
            if (!iframes[0]) return;
            var win = jQuery(".main-slider"),
                width = win.width(),
                playerWidth,
                height = win.height(),
                playerHeight,
                ratio = ratio || 16 / 9;

            iframes.each(function() {
                var current = jQuery(this);
                if (width / ratio < height) {
                    playerWidth = Math.ceil(height * ratio);
                    current.width(playerWidth).height(height).css({
                        left: (width - playerWidth) / 2,
                        top: 0
                    });
                } else {
                    playerHeight = Math.ceil(width / ratio);
                    current.width(width).height(playerHeight).css({
                        left: 0,
                        top: (height - playerHeight) / 2
                    });
                }
            });
        }

        // Initialize
        slideWrapper.on("init", function(slick) {
            slick = jQuery(slick.currentTarget);
            setTimeout(function() {
                playPauseVideo(slick, "play");
            }, 1000);
            resizePlayer(iframes, 16 / 9);
            jQuery(".slick-slider-loader").hide(500);
            if (jQuery(window).width() >= 640) {
	        	 jQuery(".slick-active .slideText-Container").animate({"left":"0px"}, "slow");
	        }
        else{    
         	 	jQuery(".slick-active .slideText-Container").css({"left":"0px"});      	  	
				jQuery(".slick-active .slideText-Container").fadeIn('slow');
        }
        });
        slideWrapper.on("beforeChange", function(event, slick) {
        	if (jQuery(window).width() >= 640) {
	        	jQuery(".slideText-Container").animate({"left":"200px"}, "slow");
	        }
        else{
        	jQuery(".slideText-Container").css({"left":"0px"}); 
        	  jQuery(".slideText-Container").fadeOut('slow');
        }
            slick = jQuery(slick.$slider);
            playPauseVideo(slick, "pause");
        });
        slideWrapper.on("afterChange", function(event, slick) {
        	if (jQuery(window).width() >= 640) {
	        	 jQuery(".slick-active .slideText-Container").animate({"left":"0px"}, "slow");
	        }
        else{  
         		jQuery(".slick-active .slideText-Container").css({"left":"0px"});      	
				jQuery(".slick-active .slideText-Container").fadeIn('slow');
        }

        	
            slick = jQuery(slick.$slider);
            playPauseVideo(slick, "play");

        });



        //start the slider
        slideWrapper.slick({
            autoplay: true,
            autoplaySpeed: 4000,
            lazyLoad: "progressive",
            speed: 600,
            arrows: false,
            dots: true,
             fade: true,cssEase: 'linear',
            useTransform: false
        });

        jQuery(window).on("resize.slickVideoPlayer", function() {
            resizePlayer(iframes, 16 / 9);
        });

        jQuery(window).resize(function() {
            // jQuery('.main-slider').slick('resize');
            jQuery('.main-slider').each(function() {
                var me = this;
                jQuery(me).slick("getSlick").refresh();
            });

        });

        jQuery(window).on('orientationchange', function() {
            jQuery('.main-slider').slick('resize');
        });


    }



    // custom slick ends


    
    

})(jQuery);

getGraph();

function getGraph() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE '); // IE 10 or older => return version number
    var trident = ua.indexOf('Trident/'); // IE 11 => return version number
    var edge = ua.indexOf('Edge/'); // Edge (IE 12+) => return version number

    if (msie > 0 || trident > 0 || edge > 0) {

        jQuery('.results-wrapper').css('display', 'none');
        setTimeout(loadTool, 3400);


    }
}
