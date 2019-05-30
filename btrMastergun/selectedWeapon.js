var nextStepUrl = 'http://mastergun.pro/butts/';

$(document).ready(
    function() {
	    var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
	    
		var afterAddProductFunc=function(product){
			location.href = nextStepUrl+getUrlParameter('utm');
		};
        
		$('.t-btn_effects').click(
			function()
			{
				if(getUrlParameter('utm'))
				{
					var beginstr='Ложи и приклады на ';
					var endstr='с пожизненной гарантией';
					
					var text=$($('.t-title_sm:visible')[0]).text();
					
					
				 tcart__addProduct({
						sku: getUrlParameter('utm'),
						name: text.substring(beginstr.length, text.length-endstr.length),
						price:0,
						amount:1
						
					});
					
				return false;
				}
		});	
		
		executeIfHas(['setTcart__addProductProduct', 'tcart__addProduct'],
		function(){
			setTcart__addProductProduct(afterAddProductFunc);
		});
});
