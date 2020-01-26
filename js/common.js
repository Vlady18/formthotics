$(document).ready(function(){
  $('.slider-wrap').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	adaptiveHeight: true,
	prevArrow: '<button type="button" class="slick-prevs"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
	nextArrow: '<button type="button" class="slick-nexts"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
	responsive: [
    {
      breakpoint: 700,
      settings: {
        arrows: false
      }
    }
  ]
  });

  $('.slide_wrapper').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prevs"><img src="img/arrow1.png" alt="" class="prev-arrow"></button>',
  	nextArrow: '<button type="button" class="slick-nexts"><img src="img/arrow2.png" alt="" class="next-arrow"></button>',
  	responsive: [
    {
      breakpoint: 1085,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 795,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});
  $('#position_yes').click(function() {
    $('.current_pos').css('display', 'none');
  })
  $('.pos_no').click(function() {
    $('.choose_position').toggleClass('visibility');
    $('.current_pos').css('display', 'none');
    $('.location span i').toggleClass('rotate');
  })

  $('#someid').click(function(e) {
    if (e.target.tagName == 'SPAN'){
      $('#someid1').toggleClass('visibility');
      $('#map h2 span i').toggleClass('rotate');
    }

  })

  $('.location span').click(function() {
    $('.choose_position').toggleClass('visibility');
    $('.location span i').toggleClass('rotate');
  })
  $('.choose_position form.city_search button.cancel_search img').click(function() {
    $('.choose_position form.city_search input').val('');
  })
  $('.choose_position .position_text img').click(function() {
    $('.choose_position').toggleClass('visibility');
    $('.location span i').toggleClass('rotate');
  })


  $('.choose_position2 form.city_search button.cancel_search img').click(function() {
    $('.choose_position2 form.city_search input').val('');
  })
  $('.sec-line').click(function() {
    $('.choose_position2').toggleClass('visibility');
    $('.arrow-down i').toggleClass('rotate');
  })
  $('.choose_position2 .position_text img').click(function() {
    $('.choose_position2').toggleClass('visibility');
    $('#map h2 span i').toggleClass('rotate');
    $('.arrow-down i').toggleClass('rotate');
  })


 $('.toggle').click(function(event){
  event.preventDefault();
  $('.menu_block').toggleClass('dbbl');
  // $('#overlay').toggleClass('dbbl');
  // $('ul.submenu').removeClass('dbbl');
  // $('.offer-r').toggleClass('dbbl');
  // $('body').toggleClass('ovrlhdn');
  // $('.of_wrap').toggleClass('ovrlhdn');
   // $('html').toggleClass('ovrlhdn');

  });

 $('.but_close').click(function(event){
    event.preventDefault();
    $('.menu_block').toggleClass('dbbl');
  	// $(this).toggleClass('dbbl');
  	// $('.offer-r').toggleClass('dbbl');
  	// $('body').toggleClass('ovrlhdn');
  // $('html').toggleClass('ovrlhdn');
  });

  function fun2() {
    $('.asdf2').css('opacity', '1');
    $('.asdf2').addClass('bounceInRight');
  }
  function fun3() {
    $('.asdf3').css('opacity', '1');
    $('.asdf3').addClass('bounceInRight');
  }
  function fun4() {
    $('.asdf4').css('opacity', '1');
    $('.asdf4').addClass('bounceInRight');
  }
  setTimeout(fun2, 500);
  setTimeout(fun3, 1000);
  setTimeout(fun4, 1500);


      var pp = $("#pos")
      function pp_show(pp){
          pp.css('display', 'block');
      }
      if ( $.cookie('visit') == undefined ){
          $.cookie('visit', true);
          pp_show(pp);
          console.log('first');
      } else {
          console.log('second');
      }


      $('#check').click(function() {
        if (!$('#checkbox').is(':checked')){
          $("#right_arrow img").attr('src', 'img/arrow_right_active.png');
          $("#left_arrow img").attr('src', 'img/arrow_left_not-active.png');
          $('.right_arrow_text').css('color', '#0f8a10');
          $('.left_arrow_text').css('color', '#bcbcbc');
          // $('.right_side_text').css('color', '#000000');
          // $('.left_side_text').css('color', '#bcbcbc');
          $('.right_side_text').toggleClass('text_true');
          $('.left_side_text').toggleClass('text_true');
          $('.mechanics .container .mechanics_info img').attr('src', 'img/switch_true.png');
          if($('.mechanics_info').hasClass('fld_revert')){
            $('.mechanics_info').toggleClass('fld_revert');
          }
        } else {
          $("#right_arrow img").attr('src', 'img/arrow_right_not-active.png');
          $("#left_arrow img").attr('src', 'img/arrow_left_active.png');
          $('.right_arrow_text').css('color', '#bcbcbc');
          $('.left_arrow_text').css('color', '#c60828');
          // $('.left_side_text').css('color', '#000000');
          // $('.right_side_text').css('color', '#bcbcbc');
          $('.right_side_text').toggleClass('text_true');
          $('.left_side_text').toggleClass('text_true');
          $('.mechanics .container .mechanics_info img').attr('src', 'img/switch_false.png');
          $('.mechanics_info').toggleClass('fld_revert');
        }
      });
      $('#check2').click(function() {
        if (!$('#checkbox').is(':checked')){
          $("#right_arrow img").attr('src', 'img/arrow_right_active.png');
          $("#left_arrow img").attr('src', 'img/arrow_left_not-active.png');
          $('.right_arrow_text').css('color', '#0f8a10');
          $('.left_arrow_text').css('color', '#bcbcbc');
          // $('.right_side_text').css('color', '#000000');
          // $('.left_side_text').css('color', '#bcbcbc');
          $('.right_side_text').toggleClass('text_true');
          $('.left_side_text').toggleClass('text_true');
          $('.mechanics .container .mechanics_info img').attr('src', 'img/foot1.png');
          if($('.mechanics_info').hasClass('fld_revert')){
            $('.mechanics_info').toggleClass('fld_revert');
          }
        } else {
          $("#right_arrow img").attr('src', 'img/arrow_right_not-active.png');
          $("#left_arrow img").attr('src', 'img/arrow_left_active.png');
          $('.right_arrow_text').css('color', '#bcbcbc');
          $('.left_arrow_text').css('color', '#c60828');
          // $('.left_side_text').css('color', '#000000');
          // $('.right_side_text').css('color', '#bcbcbc');
          $('.right_side_text').toggleClass('text_true');
          $('.left_side_text').toggleClass('text_true');
          $('.mechanics .container .mechanics_info img').attr('src', 'img/switch_false.png');
          $('.mechanics_info').toggleClass('fld_revert');
        }
      })


      $('#input_open').click(function() {
        $('#shoto').addClass('input_visible');
        $('#map .top-map-menu .wrap-menu_map form .fa-search').css('margin-left','-40px');
        $('#map .top-map-menu .wrap-menu_map form .fa-search').css('border', 'none')
      })

  $('.item-cab_arrow').click(function(){
  	$(this).toggleClass('trans_arrow')
  	$(this).parent().find('.dop-cab').toggleClass('dbbl')


})
  $('#on_map_show').click(function (e) {
    e.preventDefault();
    $('.where_list').removeClass('dbbl');
    $('#on_map').addClass('dbbl');
  })
  $('#list_show').click(function (e) {
    e.preventDefault();
    $('#on_map').removeClass('dbbl');
    $('.where_list').addClass('dbbl');
  })
  $('.switch_fir-ab a').click(function(e){
    e.preventDefault();
    $(this).parent().addClass('active')
    $('.switch_sec-sot').removeClass('active')
    $('.o-kompanii').addClass('dbbl')
    $('.sotrud').removeClass('dbbl')
  })
  $('.switch_sec-sot a').click(function(e){
    e.preventDefault();
    $(this).parent().addClass('active')
    $('.switch_fir-ab').removeClass('active')
    $('.sotrud').addClass('dbbl')
    $('.o-kompanii').removeClass('dbbl')
  })
  // $('.for-2019').click(function(e){
  //   e.preventDefault()
  //   $('.the-2019').addClass('dbbl')
    
  // })
  
  $('.toogle_items a').click(function(e){
    e.preventDefault();
    $('.toogle_items a').parent().removeClass('toogle-current')
    $(this).parent().addClass('toogle-current')

    var cur_class = $(this).attr('class');
    $('.exercises, .blog-new-sec').css('display', 'none');
    $('div.exercises').attr('class')
    $('div' + '.' + cur_class).css('display', 'block')
  })
  $('.read-rev-all').click(function(e){
    e.preventDefault();
    $(this).parent().siblings('.all-sport-review').css('display', 'block')
    $(this).css('display', 'none')
    $(this).siblings().css({'width': '100%', 'text-align': 'right'})
  })
  $('.review-switch a').click(function(e){
    e.preventDefault();
    var teg_class = $(this).attr('class');
    $('div' + '.' + teg_class).css('display', 'block')
    $(this).parent().addClass('review-switch-current')
    var sibl_class = $(this).parent().siblings().children().attr('class')
    $('div' + '.' + sibl_class).css('display', 'none')
    $(this).parent().siblings().removeClass('review-switch-current')
  })
    $('.history-menu a').click(function(e){
    e.preventDefault();
    var teg_class = $(this).attr('class');
    $('div' + '.history-files').css('display', 'none')
    $('div' + '.vovi').css('display', 'none')
    $('div' + '.history-content').css('display', 'none')
    $('div' + '.process-history').css('display', 'none')
    $('div' + '.' + teg_class).css('display', 'block')
    $(this).parent().addClass('history-menu_active')
    // var sibl_class = $(this).parent().siblings().children().attr('class')
    // console.log(sibl_class)
    // $('div' + '.' + sibl_class).css('display', 'none')
    $(this).parent().siblings().removeClass('history-menu_active')
  })

});
