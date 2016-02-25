// ==UserScript==
// @name        outpost
// @namespace   outpost
// @include     http://www.tf2outpost.com/trades
// @version     1
// @grant       none
// ==/UserScript==

unsafeWindow.bump = function(){
	$('.trade-bump').each(function ()
	{ var b= this
	  setTimeout(
	  	function ()
		  { $(b).click();
			 $(".gay").append('✔')
//		    $.post(
//		    	'http://www.tf2outpost.com/api/core', 
//		    	{
//			      action: 'trade.bump',
//			      hash: aries.user.hash,
//			      tradeid: $(tradelink).attr('data-tradeid')
//		    	}
		    
		  },
	  Math.floor(  	Math.random() * 10000  	)
	  )
	 
	}
	)
}

$($(".trade.widget.widget-trade.trade-has-tools")[0]).prepend('\
<div class="trade-contents container-fluid">\
    <div class="row row-no-gutter">\
				<div class="trade-has col-md-12">\
						<div class="trade-title">\
              <a onclick="bump()" class="gay"><strong>BUMP ALL</strong></a>\
        <div class="clear"></div>\
    </div></div></div>\
</div>')