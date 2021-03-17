var buttUrl = 'http://mastergun.pro/butts/';

$(document).ready(
	
    function () {
		executeIfHas(['getProductBySkuPrefix', 'dinamicUrl'], function(){
	
			$('[href = "#opencart"]').click(function() {
					$(".t706__carticon")[0].click();
				});
			
			var rifle=getProductBySkuPrefix('R');
			if(rifle.length > 0){	
				$('a:contains("Ложе")').attr('href', buttUrl+(rifle[0].sku?rifle[0].sku.trim():""));
			}
			else{
					$('.t758__wrapper').hide();
				}
			
			/* Поручение от Романа. Отображать всегда
			//Сокрытие бендинг блока
			var bendingAvaibles=[
			'Anschutz 1416 22Lr',
			'Antonio Zoli 1900',
			'CZ-452',
			'CZ-455',
			'CZ-527',
			'CZ-550',
			'CZ-557',
			'Haenel Jaeger 10',
			'Orsis 120',
			'Remington 700',
			'Sako 75',
			'Tikka T3',
			'Sako 85',
			'ВПО-111',
			'ВПО-114',
			'ВПО-220',
			'КО-44',
			'ВПО-223',
			'КО-91/30',
			'Соболь 22 lr',
			'тест',
		        ];
			
			var riflename=rifle.length?rifle[0].name.trim():"-1";
			
			if(rifle.length&&bendingAvaibles.indexOf(riflename)==-1)
			{		
				$('.js-product')
					.filter(function(){
						return $(this)
							.find('.js-product-name')
							.text()
							.indexOf('Беддинг блок')!=-1;
						})
					.hide();
			}
			//*/
			
			var batt=getProductBySkuPrefix('MG');
			var color=getProductBySkuPrefix('C');
				
				var headerspan=$('.t030')
				.find('span')
				.filter(function(){ 
					return $(this).text().indexOf('Шаг 4')!=-1;
				});
				
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
						if(!color || color.length<=0)
						{
							headerspan.text('Выберите цвет на предыдущем шаге!');
						}
						else
						{
							var rifleName = getRifleName(rifle);

							headerspan.text('Шаг 4. Выберите аксессуары к '+rifleName+' ' + batt[0].sku.trim());
							
							var url=dinamicUrl(batt[0].sku.trim()+'_' + color[0].sku.trim() +'_' +rifle[0].sku.trim());
							
							var defaultUrl='NoPhoto';
							
							var fotoDiv=$('.t107').find('.t-img');			
							
							var setImage=function()
							{
								fotoDiv.attr('src',url);
								fotoDiv.attr('data-original',url);
								fotoDiv.attr('data-img-zoom-url',url);								
							};
							
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
									url = dinamicUrl(batt[0].sku.trim()+'_' + color[0].sku.trim());
									
									loadImage(url, setImage,
										function()
										{
											url=dinamicUrl(batt[0].sku.trim()+'_' +rifle[0].sku.trim());
											
											loadImage(url, setImage,
												function()
												{
													url=dinamicUrl(batt[0].sku.trim());
													
													loadImage(url, setImage,
														function()
														{
															url=dinamicUrl(defaultUrl);
															setImage();
														});
												});	
										});

								});

						}
					}
				}
		});
    });
