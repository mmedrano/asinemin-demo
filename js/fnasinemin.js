$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 200) {
			$('#scroll-up').fadeIn('slow');
		}else{
			$('#scroll-up').fadeOut('slow');
		}
	});

	$('#scroll-up').click(function(){
		$("html,body").animate({ scrollTop: 0 }, 1000);
	});

	$("a[href*='#']").click(function(){
		var href = $(this).attr("href");
		var section = $(href).offset().top;
		var top = $('#top').outerHeight();				

		$("html,body").animate({ scrollTop: (section - top)}, 1000);
		return false;
	})
});