$(function($){
        $(window).load(function(){
                $(".loadingAni").delay(1000).fadeOut(500)
                init()
        })

        $("#commHeader").load("header.html")
        $("#commFooter").load("footer.html")

        $('#wrap')
        .on("click", ".subMenu>li>a", function () {
          var url = this.href;
          $("#container > #content").remove();
          $("#container").load(url + " #content");
         return false
        });
        
        
       $(".art1Inner a > p").each(function(){
           var text1 = $(this).text()
           $(this).text(text1.slice(0,60)+"........" )
       })

        $(".visualRoll").slick({
                autoplay:true,  // 자동재생
                autoplaySpeed:2000, // 간격시간
                dots:true, // 동그라미버튼
                speed:600, // 바뀌는시간(생략가능)
                slidesToShow:1, // 보여질슬라이드수(생략가능)
                slidesToScroll:1, // 이동슬라이드수(생략가능)
                pauseOnHover:true, // 마우스오버시 멈춤여부(생략가능)
                pauseOnDotsHover:true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
                pauseOnFocus:false,  // 동그라미번호버튼 클릭시 자동실행 멈춤여부
                cssEase:'linear', // 속도함수(생략가능)
                draggable:true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
                fade:false, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
                arrows:true, // 좌우화살표 사용여부(생략가능)
                prevArrow: '<button class="prevArrow  marrow"><i class="fas fa-angle-left"></i></button>',
                nextArrow: '<button class="nextArrow  marrow"><i class="fas fa-angle-right"></i></button>',
        })

        $(".main_rolling .plpa").on("click", function(){
                if (  $(this).find("i").hasClass("fa-pause")  ) {
                        $(".visualRoll").slick("slickPause")
                        $(this).find("i").removeClass("fa-pause").addClass("fa-play")
                } else {
                        $(".visualRoll").slick("slickPlay")
                        $(this).find("i").removeClass("fa-play").addClass("fa-pause")
                }
        })

        $('.lord').on('click',function(){
                var i=0;
              $('.article3Box .art3Inner').each(function(){
                      if($(this).css('display')==='none' && i<3){
                              $(this).show()
                              i++
                      }
                //       if(i===3) return false;
              })
        })
        
     
})



