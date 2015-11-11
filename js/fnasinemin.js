$(document).ready(function(){
	var otnosotros = $('#nosotros').offset().top;
	var otmision = $('#mision').offset().top;
	var otvision = $('#vision').offset().top;		
	var otparticipar = $('#participar').offset().top;
	var otcontacto = $('#contacto').offset().top;
	var topHeight = $('#top').outerHeight();
	var colorHover = '#33D6D6', colorNoHover = 'white';
	var windowWidth = $('body').outerWidth();
	var maxWidthResponsive = 992;

	//$('.carousel').carousel();

	$("a[href*='#']").hover(function(){
		$(this).css('color', '');
	});

	$(window).resize(function(){
		$("a[href*='#']").css('color', '');
		otnosotros = $('#nosotros').offset().top;
		otmision = $('#mision').offset().top;
		otvision = $('#vision').offset().top;		
		otparticipar = $('#participar').offset().top;
		otcontacto = $('#contacto').offset().top;
		topHeight = $('#top').outerHeight();
		windowWidth = $(window).width();
	});

	$(window).scroll(function(){
		var scrollTop = $(this).scrollTop();

		if(scrollTop > 200) {
			$('#scroll-up').fadeIn('slow');
		}else{
			$('#scroll-up').fadeOut('slow');
		}

		if(windowWidth > maxWidthResponsive){
			scrollTop += topHeight; 
			var flagotn = false, flagotm = false, flagotv = false, flagotp = false, flagotc = false;

			if(scrollTop >= otnosotros && scrollTop < otmision) {
				flagotn = true;
			}else if(scrollTop >= otmision && scrollTop < otvision) {
				flagotm = true;
			}else if(scrollTop >= otvision && scrollTop < otparticipar) {
				flagotv = true;
			}else if(scrollTop > otparticipar && scrollTop < otcontacto && !$('#contacto').visible()) {
				flagotp = true;
			}else if(scrollTop > otcontacto || $('#contacto').visible()) {
				flagotc = true;
			}

			$("a[href='#nosotros']").css('color', flagotn ? colorHover : colorNoHover);
			$("a[href='#mision']").css('color', flagotm ? colorHover : colorNoHover);
			$("a[href='#vision']").css('color', flagotv ? colorHover : colorNoHover);
			$("a[href='#participar']").css('color', flagotp ? colorHover : colorNoHover);
			$("a[href='#contacto']").css('color', flagotc ? colorHover : colorNoHover);

		}
	});

	$('#scroll-up').click(function(){
		$("html,body").animate({ scrollTop: 0 }, 1000);
	});

	$("a[href*='#']").click(function(){
		var href = $(this).attr("href");
		if(href != '#carousel-asinemin'){
			var section = $(href).offset().top;

			$("html,body").animate({ scrollTop: (section - topHeight)}, 1000);
			return false;
		}
	})
});