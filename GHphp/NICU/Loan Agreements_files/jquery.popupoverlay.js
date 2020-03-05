/*!
 * jQuery Popup Overlay
 *
 * @version 1.7.3
 * @requires jQuery v1.7.1+
 * @link //vast-engineering.github.com/jquery-popup-overlay/
 */
;(function (jQuery) {

    var jQuerywindow = jQuery(window);
    var options = {};
    var zindexvalues = [];
    var lastclicked = [];
    var scrollbarwidth;
    var bodymarginright = null;
    var opensuffix = '_open';
    var closesuffix = '_close';
    var stack = [];
    var transitionsupport = null;
    var opentimer;
    var iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);

    var methods = {

        _init: function (el) {
            var jQueryel = jQuery(el);
            var options = jQueryel.data('popupoptions');
            lastclicked[el.id] = false;
            zindexvalues[el.id] = 0;

            if (!jQueryel.data('popup-initialized')) {
                jQueryel.attr('data-popup-initialized', 'true');
                methods._initonce(el);
            }

            if (options.autoopen) {
                setTimeout(function() {
                    methods.show(el, 0);
                }, 0);
            }
        },

        _initonce: function (el) {
            var jQueryel = jQuery(el);
            var jQuerybody = jQuery('body');
            var jQuerywrapper;
            var options = jQueryel.data('popupoptions');
            var css;

            bodymarginright = parseInt(jQuerybody.css('margin-right'), 10);
            transitionsupport = document.body.style.webkitTransition !== undefined ||
                                document.body.style.MozTransition !== undefined ||
                                document.body.style.msTransition !== undefined ||
                                document.body.style.OTransition !== undefined ||
                                document.body.style.transition !== undefined;

            if (options.type == 'tooltip') {
                options.background = false;
                options.scrolllock = false;
            }

            if (options.backgroundactive) {
                options.background = false;
                options.blur = false;
                options.scrolllock = false;
            }

            if (options.scrolllock) {
                // Calculate the browser's scrollbar width dynamically
                var parent;
                var child;
                if (typeof scrollbarwidth === 'undefined') {
                    parent = jQuery('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body');
                    child = parent.children();
                    scrollbarwidth = child.innerWidth() - child.height(99).innerWidth();
                    parent.remove();
                }
            }

            if (!jQueryel.attr('id')) {
                jQueryel.attr('id', 'j-popup-' + parseInt((Math.random() * 100000000), 10));
            }

            jQueryel.addClass('popup_content');

            jQuerybody.prepend(el);

            jQueryel.wrap('<div id="' + el.id + '_wrapper" class="popup_wrapper" />');

            jQuerywrapper = jQuery('#' + el.id + '_wrapper');

            jQuerywrapper.css({
                opacity: 0,
                visibility: 'hidden',
                position: 'absolute'
            });

            // Make div clickable in iOS
            if (iOS) {
                jQuerywrapper.css('cursor', 'pointer');
            }

            if (options.type == 'overlay') {
                jQuerywrapper.css('overflow','auto');
            }

            jQueryel.css({
                opacity: 0,
                visibility: 'hidden',
                display: 'inline-block'
            });

            if (options.setzindex && !options.autozindex) {
                jQuerywrapper.css('z-index', '100001');
            }

            if (!options.outline) {
                jQueryel.css('outline', 'none');
            }

            if (options.transition) {
                jQueryel.css('transition', options.transition);
                jQuerywrapper.css('transition', options.transition);
            }

            // Hide popup content from screen readers initially
            jQueryel.attr('aria-hidden', true);

            if ((options.background) && (!jQuery('#' + el.id + '_background').length)) {

                jQuerybody.prepend('<div id="' + el.id + '_background" class="popup_background"></div>');

                var jQuerybackground = jQuery('#' + el.id + '_background');

                jQuerybackground.css({
                    opacity: 0,
                    visibility: 'hidden',
                    backgroundColor: options.color,
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                });

                if (options.setzindex && !options.autozindex) {
                    jQuerybackground.css('z-index', '9999');
                }

                if (options.transition) {
                    jQuerybackground.css('transition', options.transition);
                }
            }

            if (options.type == 'overlay') {
                jQueryel.css({
                    textAlign: 'left',
                    position: 'relative',
                    verticalAlign: 'middle'
                });

                css = {
                    position: 'fixed',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    textAlign: 'center'
                };

                if(options.backgroundactive){
                    css.position = 'relative';
                    css.height = '0';
                    css.overflow = 'visible';
                }

                jQuerywrapper.css(css);

                // CSS vertical align helper
                jQuerywrapper.append('<div class="popup_align" />');

                jQuery('.popup_align').css({
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    height: '100%'
                });
            }

            // Add WAI ARIA role to announce dialog to screen readers
            jQueryel.attr('role', 'dialog');

            var openelement =  (options.openelement) ? options.openelement : ('.' + el.id + opensuffix);

            jQuery(openelement).each(function (i, item) {
                jQuery(item).attr('data-popup-ordinal', i);

                if (!item.id) {
                    jQuery(item).attr('id', 'open_' + parseInt((Math.random() * 100000000), 10));
                }
            });

            // Set aria-labelledby (if aria-label or aria-labelledby is not set in html)
            if (!(jQueryel.attr('aria-labelledby') || jQueryel.attr('aria-label'))) {
                jQueryel.attr('aria-labelledby', jQuery(openelement).attr('id'));
            }

            // Handler: `close` element
            var closeelement = (options.closeelement) ? options.closeelement : ('.' + el.id + closesuffix);
            jQuery(document).on('click', closeelement, function (e) {
                methods.hide(el);
                e.preventDefault();
            });

            // Show and hide tooltips on hover
            if(options.action == 'hover'){
                options.keepfocus = false;

                // Handler: mouseenter, focusin
                jQuery(openelement).on('mouseenter', function (event) {
                    methods.show(el, jQuery(this).data('popup-ordinal'));
                });

                // Handler: mouseleave, focusout
                jQuery(openelement).on('mouseleave', function (event) {
                    methods.hide(el);
                });

            } else {

                // Handler: Show popup when clicked on `open` element
                jQuery(document).on('click', openelement, function (event) {
                    event.preventDefault();

                    var ord = jQuery(this).data('popup-ordinal');
                    setTimeout(function() { // setTimeout is to allow `close` method to finish (for issues with multiple tooltips)
                        methods.show(el, ord);
                    }, 0);
                });
            }

            if (options.detach) {
                jQueryel.hide().detach();
            } else {
                jQuerywrapper.hide();
            }
        },

        /**
         * Show method
         *
         * @param {object} el - popup instance DOM node
         * @param {number} ordinal - order number of an `open` element
         */
        show: function (el, ordinal) {
            var jQueryel = jQuery(el);

            if (jQueryel.data('popup-visible')) return;

            // Initialize if not initialized. Required for: jQuery('#popup').popup('show')
            if (!jQueryel.data('popup-initialized')) {
                methods._init(el);
            }
            jQueryel.attr('data-popup-initialized', 'true');

            var jQuerybody = jQuery('body');
            var options = jQueryel.data('popupoptions');
            var jQuerywrapper = jQuery('#' + el.id + '_wrapper');
            var jQuerybackground = jQuery('#' + el.id + '_background');

            // `beforeopen` callback event
            callback(el, ordinal, options.beforeopen);

            // Remember last clicked place
            lastclicked[el.id] = ordinal;

            // Add popup id to popup stack
            setTimeout(function() {
                stack.push(el.id);
            }, 0);

            // Calculating maximum z-index
            if (options.autozindex) {

                var elements = document.getElementsByTagName('*');
                var len = elements.length;
                var maxzindex = 0;

                for(var i=0; i<len; i++){

                    var elementzindex = jQuery(elements[i]).css('z-index');

                    if(elementzindex !== 'auto'){

                      elementzindex = parseInt(elementzindex, 10);

                      if(maxzindex < elementzindex){
                        maxzindex = elementzindex;
                      }
                    }
                }

                zindexvalues[el.id] = maxzindex;

                // Add z-index to the background
                if (options.background) {
                    if (zindexvalues[el.id] > 0) {
                        jQuery('#' + el.id + '_background').css({
                            zIndex: (zindexvalues[el.id] + 1)
                        });
                    }
                }

                // Add z-index to the wrapper
                if (zindexvalues[el.id] > 0) {
                    jQuerywrapper.css({
                        zIndex: (zindexvalues[el.id] + 2)
                    });
                }
            }

            if (options.detach) {
                jQuerywrapper.prepend(el);
                jQueryel.show();
            } else {
                jQuerywrapper.show();
            }

            opentimer = setTimeout(function() {
                jQuerywrapper.css({
                    visibility: 'visible',
                    opacity: 1
                });

                jQuery('html').addClass('popup_visible').addClass('popup_visible_' + el.id);
                jQueryel.addClass('popup_content_visible');
            }, 20); // 20ms required for opening animation to occur in FF

            // Disable background layer scrolling when popup is opened
            if (options.scrolllock) {
                jQuerybody.css('overflow', 'hidden');
                if (jQuerybody.height() > jQuerywindow.height()) {
                    jQuerybody.css('margin-right', bodymarginright + scrollbarwidth);
                }
            }

            if(options.backgroundactive){
                //calculates the vertical align
                jQueryel.css({
                    top:(
                        jQuerywindow.height() - (
                            jQueryel.get(0).offsetHeight +
                            parseInt(jQueryel.css('margin-top'), 10) +
                            parseInt(jQueryel.css('margin-bottom'), 10)
                        )
                    )/2 +'px',
                });
            }

            jQueryel.css({
                'visibility': 'visible',
                'opacity': 1
            });

            // Show background
            if (options.background) {
                jQuerybackground.css({
                    'visibility': 'visible',
                    'opacity': options.opacity
                });

                // Fix IE8 issue with background not appearing
                setTimeout(function() {
                    jQuerybackground.css({
                        'opacity': options.opacity
                    });
                }, 0);
            }

            jQueryel.data('popup-visible', true);

            // Position popup
            methods.reposition(el, ordinal);

            // Remember which element had focus before opening a popup
            jQueryel.data('focusedelementbeforepopup', document.activeElement);

            // Handler: Keep focus inside dialog box
            if (options.keepfocus) {
                // Make holder div focusable
                jQueryel.attr('tabindex', -1);

                // Focus popup or user specified element.
                // Initial timeout of 50ms is set to give some time to popup to show after clicking on
                // `open` element, and after animation is complete to prevent background scrolling.
                setTimeout(function() {
                    if (options.focuselement === 'closebutton') {
                        jQuery('#' + el.id + ' .' + el.id + closesuffix + ':first').focus();
                    } else if (options.focuselement) {
                        jQuery(options.focuselement).focus();
                    } else {
                        jQueryel.focus();
                    }
                }, options.focusdelay);

            }

            // Hide main content from screen readers
            jQuery(options.pagecontainer).attr('aria-hidden', true);

            // Reveal popup content to screen readers
            jQueryel.attr('aria-hidden', false);

            callback(el, ordinal, options.onopen);

            if (transitionsupport) {
                jQuerywrapper.one('transitionend', function() {
                    callback(el, ordinal, options.opentransitionend);
                });
            } else {
                callback(el, ordinal, options.opentransitionend);
            }
        },

        /**
         * Hide method
         *
         * @param {object} el - popup instance DOM node
         */
        hide: function (el) {
            if(opentimer) clearTimeout(opentimer);

            var jQuerybody = jQuery('body');
            var jQueryel = jQuery(el);
            var options = jQueryel.data('popupoptions');
            var jQuerywrapper = jQuery('#' + el.id + '_wrapper');
            var jQuerybackground = jQuery('#' + el.id + '_background');

            jQueryel.data('popup-visible', false);


            if (stack.length === 1) {
                jQuery('html').removeClass('popup_visible').removeClass('popup_visible_' + el.id);
            } else {
                if(jQuery('html').hasClass('popup_visible_' + el.id)) {
                    jQuery('html').removeClass('popup_visible_' + el.id);
                }
            }

            // Remove last opened popup from the stack
            stack.pop();

            if(jQuery('html').hasClass('popup_content_visible')) {
                jQueryel.removeClass('popup_content_visible');
            }

            if (options.keepfocus) {
                // Focus back on saved element
                setTimeout(function() {
                    if (jQuery(jQueryel.data('focusedelementbeforepopup')).is(':visible')) {
                        jQueryel.data('focusedelementbeforepopup').focus();
                    }
                }, 0);
            }

            // Hide popup
            jQuerywrapper.css({
                'visibility': 'hidden',
                'opacity': 0
            });
            jQueryel.css({
                'visibility': 'hidden',
                'opacity': 0
            });

            // Hide background
            if (options.background) {
                jQuerybackground.css({
                    'visibility': 'hidden',
                    'opacity': 0
                });
            }

            // Reveal main content to screen readers
            jQuery(options.pagecontainer).attr('aria-hidden', false);

            // Hide popup content from screen readers
            jQueryel.attr('aria-hidden', true);

            // `onclose` callback event
            callback(el, lastclicked[el.id], options.onclose);

            if (transitionsupport && jQueryel.css('transition-duration') !== '0s') {
                jQueryel.one('transitionend', function(e) {

                    if (!(jQueryel.data('popup-visible'))) {
                        if (options.detach) {
                            jQueryel.hide().detach();
                        } else {
                            jQuerywrapper.hide();
                        }
                    }

                    // Re-enable scrolling of background layer
                    if (options.scrolllock) {
                        setTimeout(function() {
                            jQuerybody.css({
                                overflow: 'visible',
                                'margin-right': bodymarginright
                            });
                        }, 10); // 10ms added for CSS transition in Firefox which doesn't like overflow:auto
                    }

                    callback(el, lastclicked[el.id], options.closetransitionend);
                });
            } else {
                if (options.detach) {
                    jQueryel.hide().detach();
                } else {
                    jQuerywrapper.hide();
                }

                // Re-enable scrolling of background layer
                if (options.scrolllock) {
                    setTimeout(function() {
                        jQuerybody.css({
                            overflow: 'visible',
                            'margin-right': bodymarginright
                        });
                    }, 10); // 10ms added for CSS transition in Firefox which doesn't like overflow:auto
                }

                callback(el, lastclicked[el.id], options.closetransitionend);
            }

        },

        /**
         * Toggle method
         *
         * @param {object} el - popup instance DOM node
         * @param {number} ordinal - order number of an `open` element
         */
        toggle: function (el, ordinal) {
            if (jQuery(el).data('popup-visible')) {
                methods.hide(el);
            } else {
                setTimeout(function() {
                    methods.show(el, ordinal);
                }, 0);
            }
        },

        /**
         * Reposition method
         *
         * @param {object} el - popup instance DOM node
         * @param {number} ordinal - order number of an `open` element
         */
        reposition: function (el, ordinal) {
            var jQueryel = jQuery(el);
            var options = jQueryel.data('popupoptions');
            var jQuerywrapper = jQuery('#' + el.id + '_wrapper');
            var jQuerybackground = jQuery('#' + el.id + '_background');

            ordinal = ordinal || 0;

            // Tooltip type
            if (options.type == 'tooltip') {
                jQuerywrapper.css({
                    'position': 'absolute'
                });

                var jQuerytooltipanchor;
                if (options.tooltipanchor) {
                    jQuerytooltipanchor = jQuery(options.tooltipanchor);
                } else if (options.openelement) {
                    jQuerytooltipanchor = jQuery(options.openelement).filter('[data-popup-ordinal="' + ordinal + '"]');
                } else {
                    jQuerytooltipanchor = jQuery('.' + el.id + opensuffix + '[data-popup-ordinal="' + ordinal + '"]');
                }

                var linkOffset = jQuerytooltipanchor.offset();

                // Horizontal position for tooltip
                if (options.horizontal == 'right') {
                    jQuerywrapper.css('left', linkOffset.left + jQuerytooltipanchor.outerWidth() + options.offsetleft);
                } else if (options.horizontal == 'leftedge') {
                    jQuerywrapper.css('left', linkOffset.left + jQuerytooltipanchor.outerWidth() - jQuerytooltipanchor.outerWidth() +  options.offsetleft);
                } else if (options.horizontal == 'left') {
                    jQuerywrapper.css('right', jQuerywindow.width() - linkOffset.left  - options.offsetleft);
                } else if (options.horizontal == 'rightedge') {
                    jQuerywrapper.css('right', jQuerywindow.width()  - linkOffset.left - jQuerytooltipanchor.outerWidth() - options.offsetleft);
                } else {
                    jQuerywrapper.css('left', linkOffset.left + (jQuerytooltipanchor.outerWidth() / 2) - (jQueryel.outerWidth() / 2) - parseFloat(jQueryel.css('marginLeft')) + options.offsetleft);
                }

                // Vertical position for tooltip
                if (options.vertical == 'bottom') {
                    jQuerywrapper.css('top', linkOffset.top + jQuerytooltipanchor.outerHeight() + options.offsettop);
                } else if (options.vertical == 'bottomedge') {
                    jQuerywrapper.css('top', linkOffset.top + jQuerytooltipanchor.outerHeight() - jQueryel.outerHeight() + options.offsettop);
                } else if (options.vertical == 'top') {
                    jQuerywrapper.css('bottom', jQuerywindow.height() - linkOffset.top - options.offsettop);
                } else if (options.vertical == 'topedge') {
                    jQuerywrapper.css('bottom', jQuerywindow.height() - linkOffset.top - jQueryel.outerHeight() - options.offsettop);
                } else {
                    jQuerywrapper.css('top', linkOffset.top + (jQuerytooltipanchor.outerHeight() / 2) - (jQueryel.outerHeight() / 2) - parseFloat(jQueryel.css('marginTop')) + options.offsettop);
                }

            // Overlay type
            } else if (options.type == 'overlay') {

                // Horizontal position for overlay
                if (options.horizontal) {
                    jQuerywrapper.css('text-align', options.horizontal);
                } else {
                    jQuerywrapper.css('text-align', 'center');
                }

                // Vertical position for overlay
                if (options.vertical) {
                    jQueryel.css('vertical-align', options.vertical);
                } else {
                    jQueryel.css('vertical-align', 'middle');
                }
            }
        }

    };

    /**
     * Callback event calls
     *
     * @param {object} el - popup instance DOM node
     * @param {number} ordinal - order number of an `open` element
     * @param {function} func - callback function
     */
    var callback = function (el, ordinal, func) {
        var openelement =  (options.openelement) ? options.openelement : ('.' + el.id + opensuffix);
        var elementclicked = jQuery(openelement + '[data-popup-ordinal="' + ordinal + '"]');
        if (typeof func == 'function') {
            func.call(jQuery(el), el, elementclicked);
        }
    };

    // Hide popup if ESC key is pressed
    jQuery(document).on('keydown', function (event) {
        if(stack.length) {
            var elementId = stack[stack.length - 1];
            var el = document.getElementById(elementId);

            if (jQuery(el).data('popupoptions').escape && event.keyCode == 27 && jQuery(el).data('popup-visible')) {
                methods.hide(el);
            }
        }
    });

    // Hide popup if clicked outside of it
    jQuery(document).on('click', function (event) {
        if(stack.length) {
            var elementId = stack[stack.length - 1];
            var el = document.getElementById(elementId);

            if (jQuery(el).data('popupoptions').blur && !jQuery(event.target).parents().andSelf().is('#' + elementId) && jQuery(el).data('popup-visible') && event.which !== 2) {
                methods.hide(el);

                if (jQuery(el).data('popupoptions').type === 'overlay') {
                    event.preventDefault(); // iOS will trigger click on the links below the overlay when clicked on the overlay if we don't prevent default action
                }
            }
        }
    });

    // Keep keyboard focus inside of popup
    jQuery(document).on('focusin', function(event) {
        if(stack.length) {
            var elementId = stack[stack.length - 1];
            var el = document.getElementById(elementId);

            if (jQuery(el).data('popupoptions').keepfocus) {
                if (!el.contains(event.target)) {
                    event.stopPropagation();
                    el.focus();
                }
            }
        }
    });

    /**
     * Plugin API
     */
    jQuery.fn.popup = function (customoptions) {
        return this.each(function () {

            jQueryel = jQuery(this);

            if (typeof customoptions === 'object') {  // e.g. jQuery('#popup').popup({'color':'blue'})
                var opt = jQuery.extend({}, jQuery.fn.popup.defaults, customoptions);
                jQueryel.data('popupoptions', opt);
                options = jQueryel.data('popupoptions');

                methods._init(this);

            } else if (typeof customoptions === 'string') { // e.g. jQuery('#popup').popup('hide')
                if (!(jQueryel.data('popupoptions'))) {
                    jQueryel.data('popupoptions', jQuery.fn.popup.defaults);
                    options = jQueryel.data('popupoptions');
                }

                methods[customoptions].call(this, this);

            } else { // e.g. jQuery('#popup').popup()
                if (!(jQueryel.data('popupoptions'))) {
                    jQueryel.data('popupoptions', jQuery.fn.popup.defaults);
                    options = jQueryel.data('popupoptions');
                }

                methods._init(this);

            }

        });
    };

    jQuery.fn.popup.defaults = {
        type: 'overlay',
        autoopen: false,
        background: true,
        backgroundactive: false,
        color: '#000000',
        opacity: '0.6',
        horizontal: 'center',
        vertical: 'middle',
        offsettop: 0,
        offsetleft: 0,
        escape: true,
        blur: true,
        setzindex: true,
        autozindex: false,
        scrolllock: false,
        keepfocus: true,
        focuselement: null,
        focusdelay: 50,
        outline: false,
        pagecontainer: null,
        detach: false,
        openelement: null,
        closeelement: null,
        transition: null,
        tooltipanchor: null,
        beforeopen: null,
        onclose: null,
        onopen: null,
        opentransitionend: null,
        closetransitionend: null
    };

})(jQuery);
