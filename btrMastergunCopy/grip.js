
var nextStepUrl = baseUrl + '/selectcolor';
var buttUrl = baseUrl + '/butts/';

$(document).ready(
	function() {
		executeIfHas(['tcart', 'getProductBySkuPrefix', 'setTcart__addProductProduct', 'getRifleName'],
			function() {
				var rifle = getProductBySkuPrefix('R');
				if (rifle && rifle.length) {
					$('a:contains("Ложе")').attr('href', buttUrl + rifle[0].sku.trim());
				} else {
					$('a:contains("Ложе")').attr('href', '#');
				}

				$('.t776 a[href!="#order"]').click(function() {
					var current = $(this);

					var parent_block = current.closest('.t776__col');

					var price = parent_block.find('.t776__price-value').html();

					current.attr('href', current.attr('href') + '?f=' + mask_abc(price));
				});


				var headerSpan =
					$('.t030')
						.find('*')
						.filter(function() {
							return $(this).text().indexOf('Шаг 2') != -1;
						})
						.last();

				if (rifle && rifle.length) {
					var rifleName = getRifleName(rifle).trim()
					headerSpan.text('Шаг 2. Выберите ложе' +
						(rifleName === '' ? '' : ' к ') +
						rifleName);
				} else {
					headerSpan.text('Выберите оружие на предыдущем шаге!');
				}

				setTcart__addProductProduct(product => location.href = nextStepUrl, (p) => !p.sku && p.sku[0] != "R");
			});

	});

var mask_abc = function(arg) {
	var rez = '';

	for (i = 0; i < arg.length; i++) {
		rez += String.fromCharCode(23 + arg.charCodeAt(i));
	}

	return rez;

};
