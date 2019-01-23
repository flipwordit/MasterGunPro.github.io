$('.t-submit').click(
		function()
		{
			var products =  window.tcart.products;
			var prodPref = [];
			
			var riple = getProductBySkuPrefix ('R');
			var model = getProductBySkuPrefix ('MG');
			var color = getProductBySkuPrefix ('C');
			
			var productFromAmo = riple[0].name + " " + model[0].name + " " + color[0].name;
			
			$("input[name='productNames']").val(productFromAmo);
			
			for (i=0; i<products.length; i ++)
			{
				prodPref[i] = getPrefix(products[i].sku);
			}
			
			if (prodPref.indexOf( 'R' ) == -1 )
			{
				var message = "Выберите оружие";
				
				getErrorMessage(message);
				
				return false;
			}
			
			if (prodPref.indexOf( 'MG' ) == -1 )
			{
				var message = "Выберите ложе";
					
				getErrorMessage(message);
					
				return false;
			}
			
			if (prodPref.indexOf( 'C' ) == -1 )
			{
				var message = "Выберите цвет";
				
				getErrorMessage(message);
				
				return false;
			}
	});	
 
 function getErrorMessage(message) {
   $('.t-form__errorbox-middle').show();
   $('.t-form__errorbox-wrapper').show();
   $('.t-text_md').show(); 
   $('.js-rule-error-all').show();
   $('.js-rule-error-req').empty();
   $('.js-successbox').hide();
   $('.js-rule-error-all').text(message);
}
