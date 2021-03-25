var nextStepUrl = baseUrl + '/selectcolor';
var buttUrl = baseUrl + '/butts/';

$(document).ready(
    function() {
		
		executeIfHas(['getProductBySkuPrefix', 'setTcart__addProductProduct'],
		function(){
		
			var rifle = getProductBySkuPrefix('R');
			
			if(rifle.length > 0){		
				$('a:contains("Ложе")').attr('href', buttUrl+rifle[0].sku.trim());
			}
			else{
				$('.t758__wrapper').hide();
			}
			
			setTcart__addProductProduct(pr=>{
				if(pr.sku==='MG-08')
					location.href = nextStepUrl+"_mg_08";
				else
					location.href = nextStepUrl;
			});    
		});
    });
