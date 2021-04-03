var buttUrl = baseUrl + '/butts/';

$(document).ready(
	
    function () {
		executeIfHas(['tcart', 'getProductBySkuPrefix', 'dinamicUrl'], function(){
	
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
			
			var model=getProductBySkuPrefix('MG');

			var configuration = [
				{
					products: [
						{ sku: "D_108", price: "1500" },
						{ sku: "D_102", price: "4500" },
						{ sku: "D_109", price: "1200" },
						{ sku: "D_105", price: "1800" },
						{ sku: "D_111", price: "10700" },
						{ sku: "D_112", price: "3500" },
						{ sku: "D_113", price: "5500" },
						{ sku: "D_101", price: "7000" },
						{ sku: "D_103", price: "2700" },
						{ sku: "D_104", price: "2000" },
						{ sku: "D_106", price: "900" },
						{ sku: "D_107", price: "1200" },
						{ sku: "D_110", price: "3500" },
						{ sku: "D_001", price: "2100" },
						{ sku: "D_002", price: "3200" },
						{ sku: "D_114", visible: false }, //Шасси
						{ sku: "D_115", visible: false }, //Комплект кожаных встравок
						{ sku: "D_315", visible: false }, //Шильдик на гребень
						{ sku: "D_820", visible: false }, //Магазин стандарта AICS 5 местный
						{ sku: "D_821", visible: false }, //Магазин стандарта AICS 8 местный
						{ sku: "D_822", visible: false }, //Магазин стандарта AICs 10 местный
						{ sku: "D_823", visible: false }, //Магазин стандарта AICs 12 местный
					]
				},
				{
					rifle: "R_BR93",
					products: [
						{
							sku: "D_114", //Шасси
							visible: true,
							price: 75000
						},
					]
				},
				{
					rifle: "R_BR8",
					products: [
						{
							sku: "D_114", //Шасси
							visible: true,
							price: 65000
						},
					]
				},
				{
					model: "MG-03",
					products: [
						{
							sku: "D_115", //Комплект кожаных встравок
							visible: true,
							price: 6000
						},
						{
							sku: "D_315", //Шильдик на гребень
							visible: true,
							price: 2700
						},
					]
				},
				{
					model: "MG-08",
					products: [
						{
							sku: "D_820",//Магазин стандарта AICS 5 местный
							visible: true,
							price: 6500
						}, 
						{
							sku: "D_821",//Магазин стандарта AICS 8 местный
							visible: true,
							price: 6800
						}, 
						{
							sku: "D_822",//Магазин стандарта AICs 10 местный
							visible: true,
							price: 7200
						}, 
						{
							sku: "D_823",//Магазин стандарта AICs 12 местный
							visible: true,
							price: 7500
						}, 
					]
				},
			];
			
			var rifleSku=rifle[0].sku.trim();
			var modelSku=model[0].sku.trim();
			
			var productConfiguration=[];
			
			configuration
				.filter(el=>el.products)
				.forEach(el=>{
					
					var products=el.products.map(sku=>Object.assign({},sku,el));
					
					productConfiguration = productConfiguration.concat(products);
				});
				
			var configRules = productConfiguration
				.filter(el => (!el.rifle || el.rifle === rifleSku) && (!el.model || el.model === modelSku))
				.reverse();
				
			var hides=configRules.filter(el=>el.visible!==undefined);
			var setPrices=configRules.filter(el=>!!el.price);
			
			
					$('.js-product')
							.each(
								(_, el)=>{
								
								var sku=$(el)
									.find('.js-product-sku')
									.text()
									.trim();
									
									var price=setPrices.find(hide=>hide.sku===sku);
									
									if(price)
									{
										$(el)
											.find('.js-product-price')
											.text(price.price);
									}
									
								var hide=hides.find(hide=>hide.sku===sku);
								
								if(hide){
									if(hide.visible)
										$(el).show();
									else
										$(el).hide()
								}
							});
							
							$('.t-slds, .t776, .t744').show();
							 t744_init('299156320');
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
			
			//Отображение фото под оружие, ложе, цвет
			/*
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
				*/
		});
    });
