/**
* @copyright    Copyright (C) 2007 PixPro Stockholm AB. All rights reserved.
* @license      GNU/GPL, see LICENSE.php
* PixSearch is free software. This version may have been modified pursuant
* to the GNU General Public License, and as distributed it includes or
* is derivative of works licensed under the GNU General Public License or
* other free or open source software licenses.
* See COPYRIGHT.php for copyright notices and details.
*/

/**
* PixSearch javascript
*
* Used to process Ajax searches on a Joomla database.
*
* @author       Henrik Hussfelt <henrik@pixpro.net>
* @package      mod_pixsearch
* @since        1.5
* @version      0.4.0
* 
* This has been modified to use jQuery instead of mootools BYO-2752
*/

/*
Global language vars, to be set from languagefiles through mod_pixsearch.
*/
var _txtResults = null;
var _txtClose   = null;
var _txtSearch  = null;
var _txtReadmore= null;
var _txtNoResults=null;
var _txtAdvSearch=null;
var _txtSearchLink=null;
var _txtURIBase = null;
var _optLimit   = null;
var _optOrdering= null;
var _optPhrase  = null;
var _optHideDivs = null;
var _optIncludeLink=null;
var _txtViewAll =null;
var _optShowCategory=null;
var _optShowReadmore=null;
var _optShowDescription=null;

/*
Set global language vars
*/
function setSpecifiedLanguage(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
    _txtResults = a;
    _txtClose   = b;
    _txtSearch  = c;
    _txtReadmore= d;
    _txtNoResults=e;
    _txtAdvSearch=f;
    _txtSearchLink=g;
    _txtURIBase = h;
    _optLimit   = i;
    _optOrdering= j;
    _optPhrase  = k;
    _optHideDivs = l;
    _optIncludeLink = m;
    _txtViewAll = n;
    _optShowCategory = o;
    _optShowReadmore = p;
    _optShowDescription = q;
}

/*
When DOMReady, execute js_code.
*/
jQuery(function(){
	
    var addSearchResult = function(srchContainer) {
        var result_div = srchContainer.siblings('#ps_results');
        var row="ps_row_2";
        var x=0;
        var res_header = jQuery('<div>', {'class': 'ps_header' }).html(_txtResults).appendTo(result_div);
        var link = jQuery('<a>', {'id': 'ps_link', 'class': 'ps_link' }).attr('href','#').html(_txtClose).insertBefore(res_header);
        var splitDivs=_optHideDivs.split(" ");
        jQuery('#ps_link').bind('click','a', function(e) {
            e.preventDefault();
            srchContainer.val(_txtSearch);            
            srchContainer.siblings('#ps_results').empty().removeClass('ps_results').css('visibility', 'hidden');            
        });
     // SHOW DIVS
        if(splitDivs.length > 0 && splitDivs != '') jQuery.each(splitDivs, function(eachKey, eachVal){
            var r = eachVal;
            if (typeof(r) != 'string') r = jQuery(r);
            srchContainer.children('.' + r).css('visibility', 'visible');
        });
        // HIDE DIVS
        if(splitDivs.length > 0 && splitDivs != '') jQuery.each(splitDivs, function(eachKey, eachVal){
            var r = eachVal;
            if (typeof(r) != 'string') r = jQuery(r);
            srchContainer.children('.' + r).css('visibility', 'hidden');
        });
        result_div.addClass('ps_results');
        search_res = srchContainer.parent().siblings('#pixsearch_tmpdiv').find('fieldset');
        if(search_res.length > 0 && _optIncludeLink == 2){
            var el = jQuery('<div>', {'class': "ps_row_btm" });
            var link2 = jQuery('<a>').attr('href',"javascript:jQuery('#pp_search').submit();").appendTo(el);
            var name = jQuery('<span>').html(_txtViewAll).appendTo(link2);
            el.appendTo(result_div);
        }
        
        //browser all fieldset results
        var x = 0;
        if(search_res.length > 0) jQuery.each(search_res, function(eachKey, eachVal){
            var res = eachVal;
            if (typeof(res) != 'string') res = jQuery(res);
            x += 1;
            var res_data='';
            res_data=res.children();
            if(res_data.length > 0){
                
                //reset variables
                var suri        = '';
                var heading     = '';
                var sectioncat  = '';
                var description = '';
                
                jQuery.each(res_data, function(eachKey, eachVal){
                            
                    var r = eachVal;
                            
                    if (typeof(r) != 'string') r = jQuery(r);
                    var title   = r.find('a'); 
                    
                    if (title && title.length) 
                    {                   
                        suri    = title.attr('href');
                        heading = title.text();
                        sectioncat = r.find(':last-child').text();
                    }
                    else //if title does nto exist then it is the description DIV
                    {
                        description = r.text()}
                });
                
                //now let's build a result line
                if (suri != '' && heading != '')
                {
                    if(row == "ps_row_2") row = "ps_row_1";
                    else row = "ps_row_2";
                
                    var el = jQuery('<div>', {'class': row });
                    
                    var link = jQuery('<a>').attr('href',suri).appendTo(el);
                    var name = jQuery('<h3>').html(heading).appendTo(link);
                
                    if(_optShowDescription){
                        var desc = jQuery('<span>').html(description).insertAfter(link);
                    }
                    
                    if(_optShowCategory){
                        var cat = jQuery('<span>', {'class': 'small'}).html(sectioncat).insertAfter(link);
                        //var br = jQuery('<br>').insertAfter(cat);
                    }
                    
                    if(_optShowReadmore && _optShowDescription){ //shoudl only display readmore if there is a desc
                        var link = jQuery('<a>',{'class': 'clearboth'}).attr('href',suri).html(_txtReadmore).insertAfter(desc);
                        //if(_optShowDescription ) var br = jQuery('<br>').insertAfter(desc);
                    }
                    el.appendTo(result_div);
                }
            }
        });
        if(x < 1){
            var el = jQuery('<div>', {'class': "ps_row_1" });
            var name = jQuery('<h3>').html(_txtNoResults).appendTo(el);
            var link = jQuery('<a>').attr('href',_txtSearchLink).insertAfter(name);
            var name = jQuery('<span>').html(_txtAdvSearch).appendTo(link);
            el.appendTo(result_div);
        }else{
            if(_optIncludeLink == 1){
                var el = jQuery('<div>', {'class': "ps_row_btm" });
                var link2 = jQuery('<a>').attr('href',"javascript:jQuery('#pp_search').submit();").appendTo(el);
                var name = jQuery('<span>').html(_txtViewAll).appendTo(link2);
                el.appendTo(result_div);
            }
        }
    }
    
    jQuery('[class^="pixsearch"] :input[name=searchword]').bind('click', function(e) {
        if(jQuery(this).val() == _txtSearch) jQuery(this).val('');
    });

    jQuery('[class^="pixsearch"] :input[name=searchword]').bind('keyup', function(e){
        var curtime = new Date();
        var url = _txtURIBase+'/index.php?tmpl=component';
        var srchBox = jQuery(this);

        if(srchBox.val() == ''){
            var splitDivs=_optHideDivs.split(" ");
            srchBox.siblings('.pix_search_result').empty().removeClass('ps_results').css('visibility', 'hidden');
            // SHOW DIVS
            if(splitDivs.length > 0 && splitDivs != '') jQuery.each(splitDivs, function(eachKey, eachVal){
                var r = eachVal;
                if (typeof(r) != 'string') r = jQuery(r);
                jQuery('.' + r).css('visibility', 'visible');
            });
        }
        else{
            optOrdering2 = ( _optOrdering == 'default') ? '' : _optOrdering; // popular,oldest,newest,alpha,category, default (which will be empty)
            var req = {
                execution: null,
                delay: function(time) {
                    var ajax = this;
                    this.execution = setTimeout(function() {
                        jQuery.ajax(ajax.options);
                    }, time);
                    return this.execution;
                },
                cancel: function() {
                    if (this.execution) {
                        clearTimeout(this.execution);
                    }
                },
                options: {                  
                    url: url,
                    method: 'get',
                    //delay: 200,
                    data: {
                        'option' : 'com_search',
                        'view' : 'search',
                        'searchphrase' : _optPhrase, //any,all,exact
                        'ordering' : optOrdering2, 
                        'limit' : _optLimit, // 10
                        'searchword' : srchBox.val(),
                        'r' : curtime.getTime()
                    },
                    complete:function(results){
                        results = results.responseText;                     
                        var theNewEle = jQuery('<div>').html(results);                      
                        jQuery.each(theNewEle.children(), function(eachKey, eachVal){
                            var r = eachVal;
                            if (typeof(r) != 'string') r = jQuery(r);
                            if(r.attr('class') == 'contentpaneopen'){
                                //srchBox.siblings
                                srchBox.parent().siblings('#pixsearch_tmpdiv').html(r.html());
                            }
                        });
                        srchBox.siblings('#ps_results').empty().removeClass('ps_results').css('visibility', 'visible');
                        addSearchResult(srchBox);
                        srchBox.parent().siblings('#pixsearch_tmpdiv').css('visibility','visible');
                        srchBox.parent().siblings('#pixsearch_tmpdiv').css.display = 'block';
                    },
                    success: function(){
                        // Show "CLOSE" icon
                        // [RG] 20100616 jQuery('#ps_icon_background #ps_icon').css('background-image', 'url(' + _txtURIBase + 'modules/mod_pixsearch/images/icon_clear.gif)');
                        srchBox.siblings('.ps_icon_background #ps_icon').attr('class', "close");
                    }
                },
            };
            var rq = req.delay(200);
            // Show "SEARCHING" icon
            //[RG] 20100616 jQuery('#ps_icon').css('background-image', 'url(' + _txtURIBase + 'modules/mod_pixsearch/images/icon_spinner.gif)');
            srchBox.siblings('.ps_icon_background .ps_icon').attr('class', "searching");
            //var srchBox = jQuery(this);
            srchBox.siblings('.ps_icon_background .ps_icon').bind('click', function(){
                req.cancel();
                srchBox.val(_txtSearch);
                srchBox.siblings('.pix_search_result').empty().removeClass('ps_results').css('visibility', 'hidden');
                // Show "SEARCH" icon
                //[RG] 20100616 this.css('background', 'url(' + _txtURIBase + 'modules/mod_pixsearch/images/icon_search.gif)');
                srchBox.siblings('.ps_icon_background .ps_icon').attr('class', "");
            });
            
            srchBox.keydown(function(){clearTimeout(rq);});
        }
    })
});
