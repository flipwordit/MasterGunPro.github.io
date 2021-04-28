var nextStepUrl = baseUrl + 'accessory/';

$(document).ready(
    function () {
		executeIfHas(['tcart', 'getProductBySkuPrefix', 'setTcart__addProductProduct'], function(){
									
			var afterAddProductFunc=function(product){
				var batt=getProductBySkuPrefix('MG');
				
				location.href = nextStepUrl+batt[0].sku.trim();
			};
			
			setTcart__addProductProduct(afterAddProductFunc);
		});

    });
