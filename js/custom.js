(function($){
	$(document).ready(function(){
		$('#tab_selector').on('change', function (e) {
			var link = $('.form-tabs li a').eq($(this).val()).attr('href');
			window.location.href= link;
		});
	});
})(jQuery);