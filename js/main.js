
// 페이지 스크롤링
$(function(){
  var $menu = $('.menu-group ul li'),
      $contents = $('#contents > div')

     $menu.click(function(x){
      var idx = $(this).index();
      var section = $contents.eq(idx)
      var sectionDistance = section.offset().top;
      $('html').stop().animate({scrollTop:sectionDistance});
     });
     history.replaceState(null, null, ' ');
    });


// 생산성&불량률 증가
$(function(){
  var $window = $(window),
      $targetEl = $('.animate1'),
      $targetOST = $('.animate1').offset().top - 600;

      var executed = false;

      $window.scroll(function(){
        if(executed == false){
          if($(this).scrollTop() >= $targetOST){
            var $targetNum = $targetEl.attr('data-rate');
            $({mynumber : 0}).animate({mynumber:$targetNum},{
              duration: 1000,
              progress:function(){
                var percent = this.mynumber;
                $targetEl.text(percent.toFixed(1));
              }
            });
            executed = true;
          }
        }
      });
})
$(function(){
  var $window = $(window),
      $targetEl = $('.animate2'),
      $targetOST = $('.animate2').offset().top - 700;

      var executed = false;
      $window.scroll(function(){
        if(executed == false){
          if($(this).scrollTop() >= $targetOST){
            var $targetNum = $targetEl.attr('data-rate');
            $({mynumber : 11}).animate({mynumber:$targetNum},{
              duration: 1500,
              progress:function(){
                var percent = this.mynumber;
                $targetEl.text(Math.floor(percent) + '%');
              }
            });
            executed = true;
          }
        }
      });
})







