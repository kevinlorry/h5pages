$(function () {
	new WOW().init();
	
	var pageNum = 1;
	
	var swiper1 = new Swiper('#swiper1', {
		
		slidesPerView: 4,
		spaceBetween: 30,
		autoplay: true,
		
	});
	var swiper2 = new Swiper('#swiper2', {
		slidesPerView: 3,
		spaceBetween: 0,
		direction: 'vertical',
		autoplay: true,
	});
	
	$('.inner-product .pages').on('click', '.num', function () {
		var index = $(this).text();
		pageNum = index;
		console.log(index)
		$(this).addClass('now').siblings().removeClass('now');
		$('.inner-product .content-item').eq(index - 1).fadeIn(0).siblings(".content-item").fadeOut(0);
		if (index == 1) {
			$('.inner-product .previous').addClass('cannotClick')
		} else {
			$('.inner-product .previous').removeClass('cannotClick')
		}
		if (index == 8) {
			$('.inner-product .next').addClass('cannotClick')
		} else {
			$('.inner-product .next').removeClass('cannotClick')
		}
		
		for (let i = 0; i < 7; i++) {
			if (index == 1) {
				if (i < 3) {
					$('.inner-product .num').eq(i).fadeIn(0)
				} else {
					$('.inner-product .num').eq(i).fadeOut(0)
				}
				$('.inner-product .shenglue').fadeIn(0)
			} else if (index == 8) {
				if (i > 4) {
					console.log(i)
					$('.inner-product .num').eq(i).fadeIn(0)
				} else {
					$('.inner-product .num').eq(i).fadeOut(0)
				}
				$('.inner-product .shenglue').fadeOut(0)
			} else {
				if (i >= index - 2 && i <= index) {
					$('.inner-product .num').eq(i).fadeIn(0)
				} else {
					$('.inner-product .num').eq(i).fadeOut(0)
				}
				
				if (index > 5) {
					$('.inner-product .shenglue').fadeOut(0)
					$('.inner-product .num').eq(6).fadeIn(0)
				} else {
					$('.inner-product .shenglue').fadeIn(0)
					$('.inner-product .num').eq(6).fadeOut(0)
				}
			}
			
		}
	})
	
	$('.inner-product .previous').on('click', function () {
		if ($('.inner-product .previous').hasClass("cannotClick")) {
			return
		}
		console.log(pageNum - 2)
		$('.inner-product .num').eq(pageNum - 2).click()
	})
	
	$('.inner-product .next').on('click', function () {
		if ($('.inner-product .next').hasClass("cannotClick")) {
			return
		}
		$('.inner-product .num').eq(pageNum).click()
	})
	
	layer.ready(function () {
		// layer.photos({
		//   scrollbar: false,
		//   photos: '.product-list'
		// });
		layer.photos({
			scrollbar: false,
			photos: '.case-list'
		});
		layer.photos({
			scrollbar: false,
			photos: '.honor-list'
		});
	})
	
})