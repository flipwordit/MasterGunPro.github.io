var nextStepUrl = baseUrl + 'accessory/';
var buttUrl = baseUrl + 'butts/';

$(document).ready(
    function () {
		executeIfHas(['tcart', 'getProductBySkuPrefix', 'getRifleName', 'dynamicUrl', 'setTcart__addProductProduct'], function(){
			var rifle = getProductBySkuPrefix('R');
			
			if(rifle.length > 0){	 
				$('a:contains("Ложе")').attr('href', buttUrl+rifle[0].sku.trim());
			}
			else{
					$('.t758__wrapper').hide();
				}
			
			var batt=getProductBySkuPrefix('MG');
				
				var headerspan=$('div#rec80918514').find('span');
				if(!rifle || rifle.length <=0)
				{
					headerspan.text('Выберите оружие на предыдущем шаге!');
				}
				else
				{
					if(!batt || batt.length<=0)
					{
						headerspan.text('Выберите ложе на предыдущем шаге!');
					}
					else
					{
						var rifleName = getRifleName(rifle).trim();

						headerspan.text('Шаг 3. Выберите цвет к '+rifleName+' ' + batt[0].sku.trim());
						
						var defaultUrl='NoPhoto.png';
						
						var fotoDiv=$('#rec81459814').find('.t-img');
						
						var setImage=function()
						{
							fotoDiv.attr('src',url);
							fotoDiv.attr('data-original',url);
							fotoDiv.attr('data-img-zoom-url',url);
						};
						
						var url = dynamicUrl(batt[0].sku.trim()+'_' +rifle[0].sku.trim());
						
						var loadImage=function(url, success, error)
						{
								var img = document.createElement('img');
								img.onload = success;
								img.onerror = error;
								img.src = url;
						};
						
						loadImage(url, setImage,
							function()
							{
					
								url = dynamicUrl(batt[0].sku.trim());
								
								loadImage(url, setImage,
									function()
									{
										url=dynamicUrl(defaultUrl);
										setImage();
									});
							});	
					}
				}
						 
						
			var afterAddProductFunc=function(product){
				var batt=getProductBySkuPrefix('MG');
				
				location.href = nextStepUrl+batt[0].sku.trim();
			};
			
			setTcart__addProductProduct(afterAddProductFunc);
		});

    });
