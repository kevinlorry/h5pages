$(function() {
	new WOW().init();
	var swiper1 = new Swiper('#swiper1', {
		
		slidesPerView: 3,
		spaceBetween: 30,
		autoplay: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	var swiper2 = new Swiper('#swiper2', {
		
		slidesPerView: "auto",
		spaceBetween: 17,
		autoplay: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	
	
	$('.inner-about .nav').on('click','.nav-item', function(){
		$(this).addClass('now').siblings().removeClass('now');
		var index = $(this).index()
		$('.inner-about .content-item').eq(index).fadeIn(0).siblings(".content-item").fadeOut(0);
		
	})
	
	
	
	
	
	
	// var swiper2 = new Swiper('#swiper2', {
	//
	//   slidesPerView: 5,
	//   spaceBetween: 0,
	//   // slidesPerGroup: 3,
	//   // pagination: {
	//   //  el: '.swiper-pagination',
	//   //  clickable: true,
	//   // },
	//   navigation: {
	//     nextEl: '.swiper-button-next',
	//     prevEl: '.swiper-button-prev',
	//   },
	// });
	// var swiper3 = new Swiper('#swiper3', {
	//
	//   slidesPerView: 3,
	//   spaceBetween: 30,
	//   autoplay: true,
	//   pagination: {
	//     el: '.swiper-pagination',
	//     clickable: true,
	//   },
	//   navigation: {
	//     nextEl: '.swiper-button-next',
	//     prevEl: '.swiper-button-prev',
	//   },
	// });
	// var swiper4 = new Swiper('#swiper4', {
	//   slidesPerView: 3,
	//   spaceBetween: 0,
	//   direction: 'vertical',
	//   autoplay: true,
	// });
	
	
	
	
	
	layer.ready(function() {
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