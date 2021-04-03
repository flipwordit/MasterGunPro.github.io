var buttUrl = baseUrl + '/butts/';

$(document).ready(
	function() {
		executeIfHas(['tcart', 'getProductBySkuPrefix', 'dinamicUrl'],
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
						]
					},
				];

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
							}
						});

				t744_init('299156320');

			});
	});
