/**
 * All rights reserved. No part of this code may be reproduced, modified,
 * amended or retransmitted in any form or by any means for any purpose without
 * prior written consent of Brighton Consulting. You must ensure that this
 * copyright notice remains intact at all times
 * 
 * @category BrightonConsulting
 * @package Bc_Js
 * @copyright Copyright (c) Brighton Consulting. All rights reserved.
 * @version $Id$
 */

if(typeof BC == 'undefined') {
	BC = {};
}
if(typeof BC.Mod == 'undefined') {
	BC.Mod = {};
}

/**
 * @param BC.Mod.SocialSharing
 */
(function($s, $) {

	function _animate()
	{
		$('#shareThisList li.socialLink_st ul').hide();
		
		$('#shareThisList li.socialLink_st').click(function(e){
			$('#shareThisList').toggleClass('active');
			$('#shareThisList li.socialLink_st ul').toggle();
		});
	};
	
	/**
	 * Setup the module
	 * 
	 * @param integer animate
	 */
	$s.init = function(animate)
	{
		if (animate) {
			_animate();
		}
		
		var url = encodeURIComponent(location.href);
		
		$('#shareThisList .socialLink_fb').click(function(){
			window.open('http://www.facebook.com/sharer.php?u='+ url, 'FacebookShare', "width=400, height=300");
			return false;
		});
		
		$('#shareThisList .socialLink_tw').click(function(){
			window.open('https://twitter.com/share?url='+ url, 'TwitterShare', "width=400, height=500");
			return false;
		});
		
		$('#shareThisList .socialLink_li').click(function(){
			window.open('https://www.linkedin.com/cws/share?url='+ url, 'LinkedInShare', "width=400, height=500");
			return false;
		});
		
		$('#shareThisList .socialLink_gp').click(function(){
			window.open('https://plus.google.com/share?url='+ url, 'Google+Share', "width=400, height=500");
			return false;
		});
		
		$('#shareThisList .socialLink_em').click(function(){
			window.location.href = 'mailto:?subject='+document.title+'&body=I thought you might be interested in this...%0D%0A%0D%0A'+document.title+'%0D%0A%0D%0A'+url;
		});
    };
	
})(BC.Mod.SocialSharing = {}, jQuery);