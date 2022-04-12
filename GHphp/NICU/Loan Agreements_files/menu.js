
 if(typeof BC == 'undefined') {
    var BC = {};
 }
 
/**
 * @param BC.ResponsiveDescriptiveMenu
 */
(function($m, $) {
	$m.init = function() {
		$('#mainNav .mainNavBottomLevel').click(function(e) {
			e.stopPropagation();
		});
		$('#mainNav .mainNavMiddleLevel > li').click(function(e) {
			
			var activeContainers = $('div', this);
			var activeA = $('a:first', this);
			
			// if there is not a third level for this item, then execute link
			if (!activeContainers.length) {
				e.stopPropagation();
				return true;
			}
			
			// clean all menu items
			$('#mainNav .mainNavMiddleLevel > li a').not(activeA).removeClass('active');
			$('#mainNav .mainNavMiddleLevel .toggleChild').not(activeContainers).hide();

			// toggle active menu item on/off
			activeContainers.toggle();
			activeA.toggleClass('active');
			
			e.stopPropagation();
			e.preventDefault();
		});
		$('#mainNav .mainNavTopLevel > li').click(function(e) {
			
			// if there are only two levels, then the second level is actual the same HTML as the 3rd
			// in which case its a div not a ul
			if($('ul.mainNavMiddleLevel', this).length) {
				var activeUl = $('ul.mainNavMiddleLevel', this);
			} else {
				var activeUl = $('div', this);
			}

			var activeA = $('a:first', this);
						
			// if there is not a second level for this item, then execute link
			if (!activeUl.length) {
				e.stopPropagation();
				return true;
			}
			// clean all menu items
			$('#mainNav .mainNavTopLevel > li a').not(activeA).removeClass('active');
			$('#mainNav .mainNavTopLevel .toggleChild').not(activeUl).hide();

			// toggle active menu item on/off
			activeUl.toggle();

			// use the visibility of the active UL to determine if we toggle or not, this is useful
			// when you land on an internal page which starts off active.
			activeA.toggleClass('active', activeUl.is(':visible'));

			e.stopPropagation();

			// containerBottomLevelPromo will only contain promo (custom module).
			// we want its default event working.
			if($(e.target).parents(".containerBottomLevelPromo").length == 0){
				e.preventDefault();
			}

		});

		$('#mobileMenuIcon').click(function(e) {

			$('#mainNav .mainNavTopLevel').toggleClass('active');
			$('#mainNav .mainNavTopLevel').toggle();

			e.preventDefault();
		});
	};

})(BC.ResponsiveDescriptiveMenu = {}, jQuery);
