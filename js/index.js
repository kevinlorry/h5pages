$(function() {
  new WOW().init();
 
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
	
	var pageNum = 1;
	$('.inner-news .pages').on('click','.num', function(){
		var index = $(this).text();
		pageNum = index;
		console.log(index)
		$(this).addClass('now').siblings().removeClass('now');
		$('.inner-news .content-item').eq(index-1).fadeIn(0).siblings(".content-item").fadeOut(0);
		if(index == 1){
			$('.inner-news .previous').addClass('cannotClick')
		}else{
			$('.inner-news .previous').removeClass('cannotClick')
		}
		if(index == 8){
			$('.inner-news .next').addClass('cannotClick')
		}else{
			$('.inner-news .next').removeClass('cannotClick')
		}
		
		for(let i=0;i<7;i++){
			if(index == 1){
				if(i <3){
					$('.inner-news .num').eq(i).fadeIn(0)
				}else{
					$('.inner-news .num').eq(i).fadeOut(0)
				}
				$('.inner-news .shenglue').fadeIn(0)
			}else if(index == 8){
				if(i >4){
					console.log(i)
					$('.inner-news .num').eq(i).fadeIn(0)
				}else{
					$('.inner-news .num').eq(i).fadeOut(0)
				}
				$('.inner-news .shenglue').fadeOut(0)
			}else{
				if(i>= index-2 && i<= index){
					$('.inner-news .num').eq(i).fadeIn(0)
				}else{
					$('.inner-news .num').eq(i).fadeOut(0)
				}
				
				if(index > 5){
					$('.inner-news .shenglue').fadeOut(0)
					$('.inner-news .num').eq(6).fadeIn(0)
				}else{
					$('.inner-news .shenglue').fadeIn(0)
					$('.inner-news .num').eq(6).fadeOut(0)
				}
			}
			
		}
	})
	
	$('.inner-news .previous').on('click',function () {
		if($('.inner-news .previous').hasClass("cannotClick")){
			return
		}
		console.log(pageNum-2)
		$('.inner-news .num').eq(pageNum-2).click()
	})
	
	$('.inner-news .next').on('click',function () {
		if($('.inner-news .next').hasClass("cannotClick")){
			return
		}
		$('.inner-news .num').eq(pageNum).click()
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