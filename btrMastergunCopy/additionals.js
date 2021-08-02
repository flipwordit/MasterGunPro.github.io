var configuration = [
	{
		products: [
			//Общие аксессуары
			{ sku: "D_108", price: "1500" },
			{ sku: "D_102", price: "4500" },
			{ sku: "D_109", price: "1200" },
			{ sku: "D_105", price: "1800" },
			{ sku: "D_111", price: "10700" },
			{ sku: "D_112", price: "3500" },
			{ sku: "D_113", price: "5500" },
			{ sku: "D_101", price: "6000" },
			{ sku: "D_103", price: "2700" },
			{ sku: "D_104", price: "2000" },
			{ sku: "D_106", price: "900" },
			{ sku: "D_107", price: "1200" },
			{ sku: "D_110", price: "3500" },
			{ sku: "D_001", price: "2100" },
			{ sku: "D_002", price: "3200" },
			{ sku: "D_819", price: "1200" },

			//Аксессуары отображающиеся по условию
			{ sku: "D_114", visible: false }, //Шасси Blaser R93
			{ sku: "D_116", visible: false }, //Шасси Blaser R8
			{ sku: "D_115", visible: false }, //Комплект кожаных встравок
			{ sku: "D_315", visible: false }, //Шильдик на гребень
			{ sku: "D_820", visible: false }, //Магазин стандарта AICS 5 местный
			{ sku: "D_821", visible: false }, //Магазин стандарта AICS 8 местный
			{ sku: "D_822", visible: false }, //Магазин стандарта AICs 10 местный
			{ sku: "D_823", visible: false }, //Магазин стандарта AICs 12 местный
			{ sku: "D_003", visible: false }, //Комплект лазерной насечки (МГ-03)
			{ sku: "D_004", visible: false }, //Комплект лазерной насечки (МГ-05)
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
				sku: "D_116", //Шасси
				visible: true,
				price: 65000
			},
		]
	},
	{
		model: "MG_01_Light",
		products: [
			{
				sku: "D_002", //Комплект лазерной насечки
				url: "modelPhotos/MG-01_D_002_mastergun_pro1.png",
				price: 3200
			},
			{
				sku: "D_003", //Комплект лазерной насечки (МГ-03)
				visible: false
			},
			{
				sku: "D_004", //Комплект лазерной насечки (МГ-05)
				visible: false
			},
			
		]
	},
	{
		model: "MG_02_Light",
		products: [
			{
				sku: "D_110", //Регулируемый по длине приклад
				visible: false
			}
		]
	},
	{
		model: "MG_02_Hunter",
		products: [
			{
				sku: "D_110", //Регулируемый по длине приклад
				visible: false
			}
		]
	},
	{
		model: "MG_03_Hunter",
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
			{
				sku: "D_110", //Регулируемый по длине приклад
				url: "modelPhotos/MG-03_D_110_mastergun.png",
				price: 4500
			},
			{
				sku: "D_002", //Комплект лазерной насечки (МГ-03)
				visible: false
			},
			{
				sku: "D_003", //Комплект лазерной насечки (МГ-03)
				url: "modelPhotos/MG-03_D_003_mastergun_pro1.png",
				price: 3200
			},
		]
	},
	{
		model: "MG_03_Light",
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
			{
				sku: "D_002", //Комплект лазерной насечки (МГ-03)
				visible: false
			},
			{
				sku: "D_003", //Комплект лазерной насечки (МГ-03)
				url: "modelPhotos/MG-03_D_003_mastergun_pro1.png",
				price: 3200
			},
			{
				sku: "D_110", //Регулируемый по длине приклад
				url: "modelPhotos/MG-03_D_110_mastergun.png",
				price: 4500
			},
		]
	},
	{
		model: "MG_04_Hunter",
		products: [
			{
				sku: "D_110", //Регулируемый по длине приклад
				visible: false
			},
		]
	},
	{
		model: "MG_04_Sport",
		products: [			
			{
				sku: "D_110", //Регулируемый по длине приклад
				visible: false
			},
		]
	},
	{
		model: "MG_05",
		products: [
			{
				sku: "D_004", //Комплект лазерной насечки (МГ-05)
				url: "modelPhotos/MG-05_D_004_mastergun_pro1.png",
				price: 3200
			},
			{
				sku: "D_002", //Комплект лазерной насечки (МГ-01)
				visible: false
			},
			{
				sku: "D_003", //Комплект лазерной насечки (МГ-03)
				visible: false
			},
			{
				sku: "D_110", //Регулируемый по длине приклад
				url: "modelPhotos/MG-05_D_110_mastergun.png",
				price: 4500
			},
		]
	},
	{
		model: "MG_08",
		products: [
			{
				sku: "D_820", //Магазин стандарта AICS 5 местный
				visible: true,
				price: 6500
			},
			{
				sku: "D_821", //Магазин стандарта AICS 8 местный
				visible: true,
				price: 6800
			},
			{
				sku: "D_822", //Магазин стандарта AICs 10 местный
				visible: true,
				price: 7200
			},
			{
				sku: "D_823", //Магазин стандарта AICs 12 местный
				visible: true,
				price: 7500
			},
			//hide
			{
				sku: "D_002", //Комплект лазерной насечки
				visible: false
			},
			{
				sku: "D_003", //Комплект лазерной насечки
				visible: false
			},
			{
				sku: "D_004", //Комплект лазерной насечки
				visible: false
			},
			{
				sku: "D_105", //Быстросъемные антабки QD
				visible: false,
			},
			{
				sku: "D_107", //Быстросъемные антабки
				visible: false,
			},
			{
				sku: "D_106", //Крепление для антабок
				visible: false,
			},
			{
				sku: "D_001", //Защитное антискользящее покрытие
				visible: false,
			},
			{
				sku: "D_110", //Регулируемый по длине приклад
				visible: false,
			},
			{
				sku: "D_103", //Рельсовый интерфейс M-LOK
				visible: false,
			},
			{
				sku: "D_101", //Беддинг блок 
				visible: false,
			},
			{
				sku: "D_104", //Втулки крепления ресивера
				visible: false
			},
		]
	},
	{
		rifle: "R_S-202",//Sauer 202
		products: [{sku: "D_101", /*Беддинг блок*/visible: false}]
	},
	{
		rifle: "R_VPO-208",//ВПО-208
		products: [{sku: "D_101", /*Беддинг блок*/visible: false}]
	},
	{
		rifle: "R_V212",//ВПО-212
		products: [{sku: "D_101", /*Беддинг блок*/visible: false}]
	},
	{
		rifle: "R_VPO-221",//ВПО-221
		products: [{sku: "D_101", /*Беддинг блок*/visible: false}]
	},
	{
		rifle: "R_MP-18",//МР-18
		products: [{sku: "D_101", /*Беддинг блок*/visible: false}]
	},
	{
		rifle: "R_CKC",//СКС
		products: [{sku: "D_101", /*Беддинг блок*/visible: false}]
	},
	{
		rifle: "R_COK-94",//сок-94
		products: [{sku: "D_101", /*Беддинг блок*/visible: false}]
	},
	{
		rifle: "R_COK-95",//сок -95
		products: [{sku: "D_101", /*Беддинг блок*/visible: false}]
	},
];


var buttUrl = baseUrl + '/butts/';

$(document).ready(
	function() {
		executeIfHas(['tcart', 'getProductBySkuPrefix', 'dynamicUrl'],
			function() {

				$('[href = "#opencart"]').click(function() {
					$(".t706__carticon")[0].click();
				});

				var rifle = getProductBySkuPrefix('R');
				if (rifle.length > 0) {
					$('a:contains("Ложе")').attr('href', buttUrl + (rifle[0].sku ? rifle[0].sku.trim() : ""));
				} else {
					$('.t758__wrapper').hide();
				}

				var model = getProductBySkuPrefix('MG');

				var rifleSku = rifle[0].sku.trim();
				var modelSku = model[0].sku.trim();

				var productConfiguration = [];

				configuration
					.filter(el => el.products)
					.forEach(el => {

						var products = el.products.map(sku => Object.assign({}, sku, el));

						productConfiguration = productConfiguration.concat(products);
					});

				var configRules = productConfiguration
					.filter(el => (!el.rifle || el.rifle === rifleSku) && (!el.model || el.model === modelSku))
					.reverse();


				$('.js-product')
					.each(
						(_, el) => {

							var sku = $(el)
								.find('.js-product-sku')
								.text()
								.trim();
							var sku1 = sku.replace("_", "-");
							var sku2 = sku.replace("-", "_");
							var productConfig = configRules.find(hide => hide.sku === sku1 || hide.sku === sku2);

							if (productConfig) {
								if (productConfig.price) {
									$(el)
										.find('.js-product-price')
										.text(productConfig.price);
									$(el).show();
								} else if (productConfig.visible === false) {
									$(el).hide()
								}
								
								if(productConfig.url){
									var url=dynamicUrl(productConfig.url);
									
									$(el)
										.find('.js-product-img')
										.css('background-image', "url('"+url+"')")
										.attr('data-original', url);
									$(el).show();
								}
							}
						});
				
				t744_init('299156320');
			
				setTimeout(()=>
					   $('.t-bgimg[data-original]')
						.each((i, el)=>
						{
							var backgroundUrl=$(el).css('background-image');
							if(backgroundUrl.indexOf('-/resizeb/20x')!==-1)
								$(el).css('background-image', 'url('+$(el).attr('data-original')+')');
						}),
					200);
			});
	});
