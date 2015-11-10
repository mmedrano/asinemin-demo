$(document).ready(function(){
	var otnosotros = $('#nosotros').offset().top;
	var otmision = $('#mision').offset().top;
	var otvision = $('#vision').offset().top;		
	var otcontacto = $('#contacto').offset().top;
	var colorHover = '#33D6D6', colorNoHover = 'white';
	//var windowWidth = $(window).width();
	var windowWidth = $('body').outerWidth();
	var maxWidthResponsive = 992;

	$('.carousel').carousel();

	//$('#dtPickerForm').datepicker();

	$("a[href*='#']").hover(function(){
		$(this).css('color', '');
	});

	$(window).resize(function(){
		$("a[href*='#']").css('color', '');
		otnosotros = $('#nosotros').offset().top;
		otmision = $('#mision').offset().top;
		otvision = $('#vision').offset().top;		
		otcontacto = $('#contacto').offset().top;
		windowWidth = $(window).width();
		//windowWidth = $('body').outerWidth();
		console.log('windowWidth: '+ windowWidth);
	});

	$(window).scroll(function(){
		var scrollTop = $(this).scrollTop();

		if(scrollTop > 200) {
			$('#scroll-up').fadeIn('slow');
		}else{
			$('#scroll-up').fadeOut('slow');
		}

		if(windowWidth > maxWidthResponsive){
			var flagotn = false, flagotm = false, flagotv = false, flagotc = false;

			if(scrollTop >= otnosotros && scrollTop < otmision) {
				flagotn = true;
			}else if(scrollTop >= otmision && scrollTop < otvision) {
				flagotm = true;
			}else if(scrollTop >= otvision && scrollTop < otcontacto) {
				flagotv = true;
			}else if(scrollTop > otcontacto) {
				flagotc = true;
			}

			$("a[href='#nosotros']").css('color', flagotn ? colorHover : colorNoHover);
			$("a[href='#mision']").css('color', flagotm ? colorHover : colorNoHover);
			$("a[href='#vision']").css('color', flagotv ? colorHover : colorNoHover);
			$("a[href='#contacto']").css('color', flagotc ? colorHover : colorNoHover);

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