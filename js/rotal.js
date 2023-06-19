$(function(){
    //toggleClass 
    //햄버거 클릭하면 오픈
    $( ".hamburger" ).click(function() { 			
        $(".menu").toggleClass("open") ;
        $(".menu").animate({marginLeft:"0px"},300);
       });
    //하위메뉴
     $(".menu >ul >li> a").click(function(){
          if($(this).next().is(":visible"))
          {
              $(this).next().stop().slideUp(500);
              $(this).children("img").attr("src","img/plus.png");
          }else{

      $(".sub").stop().slideUp(500);
      $(".menu >ul >li> a").children("img").attr("src","img/plus.png");
      $(this).next().stop().slideDown(500);
      $(this).children("img").attr("src","img/minus.png");
          };	
  });
        /*햄버거 닫는부분*/
      $( ".close7" ).click(function() {
           $(".menu").animate({marginLeft:"-235px"}, 300);
      });

    //상담
    var defaultTop = parseInt($("#quick_menu").css("top"));

    $(window).on("scroll", function(){
        var scv=$(window).scrollTop();
        $("#quick_menu").stop().animate({top:scv+defaultTop+"px"},1000);
    });
     $("#quick_menu>img").click(function(){
        $("#sangdam").animate({marginRight:"310px"},300)
        // $("body").animate({background:rgba(0,0,0,0.5)})
        
        // return false;
    });
    $( ".close8" ).click(function() {
        $("#sangdam").animate({marginRight:"-280px"}, 300);
   });

   
        //popup창
        if($.cookie("pop") != "no") $(".pop_wrap").show();
       $(".pop_wrap").css("cursor","move").draggable();
        $(".pop_wrap area:eq(0)").on("click",function(){
        $(".pop_wrap").fadeOut("fast");
        return false;
        });
        
        $(".pop_wrap area:eq(1)").on("click",function(){
         $.cookie("pop","no",{expires:1});    //클릭한 경우 쿠키의 value값을 no로 setting
         $(".pop_wrap").fadeOut("fast");
             return false;
          });

    /*스크롤*/
    window.onload = function () {
    var elm = ".box";
    $(elm).each(function (index) {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } 
            else if (event.detail)
                delta = -event.detail / 3;
            var moveTop = $(window).scrollTop();
            var elmSelecter = $(elm).eq(index);
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(elmSelecter).next() != undefined) {
                    try{
                        moveTop = $(elmSelecter).next().offset().top;
                    }catch(e){}
                }
            // 마우스휠을 아래에서 위로
            } else {
                if ($(elmSelecter).prev() != undefined) {
                    try{
                        moveTop = $(elmSelecter).prev().offset().top;
                    }catch(e){}
                }
            }
                
            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 800, complete: function () {
                }
            });
        });
    });
}
      
    /*circle*/ 
    var perNum = 91.99;
    var perNum2 = 30.99;
    var perNum3 = 60.99;
    $('.wp2').waypoint(function(){
        $('.wp2').addClass('animated fadeIn');
        $('.second.circle').circleProgress({
          value: perNum/100,
          startAngle:300,
            size:90,
            fill:{
              color:["tomato"]
            },
            animation:{
              duration:1500,
                easing:"swing"       //swing : 시작 / 끝에서는 느리게 움직이지만 중간에서는 빨라짐
            },
            //  lineCap : "rect",
            lineCap : "round",
            reverse:true
                        
            }).on('circle-animation-progress', function(event, progress) {
                        $(this).find('strong').html(Math.round(perNum * progress) + '<i>%</i>');
            });
        }, {
            offset:'75%' 
        });
    $('.wp2').waypoint(function(){
        $('.wp2').addClass('animated fadeIn');
        $('.third.circle').circleProgress({
            value: perNum2/100,
            startAngle:300,
            size:90,
            fill: {gradient: [['#0681c4', .5], ['#4ac5f8', .5]],
            gradientAngle: Math.PI / 4},
            animation:{
                duration:1500,
                easing:"swing"       //swing : 시작 / 끝에서는 느리게 움직이지만 중간에서는 빨라짐
            },
            //  lineCap : "rect",
            lineCap : "round",
            reverse:true
                        
            }).on('circle-animation-progress', function(event, progress) {
                        $(this).find('strong').html(Math.round(perNum2 * progress) + '<i>%</i>');
            });
        }, {
            offset:'75%' 
        });
    $('.wp2').waypoint(function(){
        $('.wp2').addClass('animated fadeIn');
        $('.forth.circle').circleProgress({
            value: perNum3/100,
            startAngle:300,
            size:90,
            fill: {color: '#ffa500'},
            animation:{
                duration:1500,
                easing:"swing"       //swing : 시작 / 끝에서는 느리게 움직이지만 중간에서는 빨라짐
            },
            //  lineCap : "rect",
            lineCap : "round",
            reverse:true
                        
            }).on('circle-animation-progress', function(event, progress) {
                        $(this).find('strong').html(Math.round(perNum3 * progress) + '<i>%</i>');
            });
        }, {
            offset:'75%' 
        });
        var perNum4 = 91.99;
        var perNum5 = 30.99;
        var perNum6 = 60.99;
        $('.wp3').waypoint(function(){
            $('.wp3').addClass('animated fadeIn');
            $('.fifth.circle').circleProgress({
              value: perNum4/100,
              startAngle:300,
                size:250,
                fill:{
                  color:["tomato"]
                },
                animation:{
                  duration:1500,
                    easing:"swing"       //swing : 시작 / 끝에서는 느리게 움직이지만 중간에서는 빨라짐
                },
                //  lineCap : "rect",
                lineCap : "round",
                reverse:true
                            
                }).on('circle-animation-progress', function(event, progress) {
                            $(this).find('strong').html(Math.round(perNum4 * progress) + '<i>%</i>');
                });
            }, {
                offset:'75%' 
            });
        $('.wp3').waypoint(function(){
            $('.wp3').addClass('animated fadeIn');
            $('.sixth.circle').circleProgress({
                value: perNum5/100,
                startAngle:300,
                size:250,
                fill: {gradient: [['#0681c4', .5], ['#4ac5f8', .5]],
                gradientAngle: Math.PI / 4},
                animation:{
                    duration:1500,
                    easing:"swing"       //swing : 시작 / 끝에서는 느리게 움직이지만 중간에서는 빨라짐
                },
                //  lineCap : "rect",
                lineCap : "round",
                reverse:true
                            
                }).on('circle-animation-progress', function(event, progress) {
                            $(this).find('strong').html(Math.round(perNum5 * progress) + '<i>%</i>');
                });
            }, {
                offset:'75%' 
            });
        $('.wp3').waypoint(function(){
            $('.wp3').addClass('animated fadeIn');
            $('.seventh.circle').circleProgress({
                value: perNum6/100,
                startAngle:300,
                size:250,
                fill: {color: '#ffa500'},
                animation:{
                    duration:1500,
                    easing:"swing"       //swing : 시작 / 끝에서는 느리게 움직이지만 중간에서는 빨라짐
                },
                //  lineCap : "rect",
                lineCap : "round",
                reverse:true
                            
                }).on('circle-animation-progress', function(event, progress) {
                            $(this).find('strong').html(Math.round(perNum6 * progress) + '<i>%</i>');
                });
            }, {
                offset:'75%' 
            });

//풀메뉴
    $("#gnb3>li>a").mouseenter(function(){
        $(this).next().stop().slideDown(500);
    });
    $("#gnb3>li").mouseleave(function(){
        $(this).find(".tmenu").stop().slideUp(500);
    });
   

/*waypoint애니*/
    $('.wp4').waypoint(function() {
        $('.wp4').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    }); 

    $('.wp6').waypoint(function() {
        $('.wp6').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });

    $('.wp7').waypoint(function() {
        $('.wp7').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });

    $('.wp8').waypoint(function() {
        $('.wp8').addClass('animated fadeInOut');
    }, {
        offset: '75%'
    });
    $('.wp9').waypoint(function() {
        $('.wp9').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    }); 


    $('.wp10').waypoint(function() {
        $('.wp10').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp11').waypoint(function() {
        $('.wp11').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });

    $('.wp12').waypoint(function() {
        $('.wp12').addClass('animated fadeInOut');
    }, {
        offset: '75%'
    });

    function initialize() {
        var mapOptions = {
          zoom: 14,
          scrollwheel: false,
          center: new google.maps.LatLng(35.410671, 129.155393)
        };
        var map = new google.maps.Map(document.getElementById('googleMap'),
            mapOptions);
        var marker = new google.maps.Marker({
          position: map.getCenter(),
          animation:google.maps.Animation.BOUNCE,
          icon: 'img/locred.png',
          map: map
        });
      }
      google.maps.event.addDomListener(window, 'load', initialize);



      function validateForm() {

var f = document.member;//폼이름이 멤버인거를 f에 가져옴
var reg_exp=new RegExp("^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,10}$");
var match=reg_exp.exec(f.id.value);//폼아이디 멤버의 값을 가져옴
//exec 메서드가 일치하는 부분을 찾지 못하면 null을 반환

if(match==null){
  alert("6~10자의 영문자,숫자,특수기호 혼합해서 사용할 수 있습니다");
  return false;
} 

var x=document.forms["member"]["name"].value;//폼이름이 member 나 name인값을 가져옴
if(x==null || x=="")//빈칸이나 값입력 안한거입력하면 이름 입력하라고 나오게하는 if문
{
alert("이름을 입력 하세요.");
return false;
}



var x=document.forms["member"]["tel"].value;
if (x==null || x=="")
{
  alert("전화번호를 입력하세요");
      return false;
}


var x=document.forms["member"]["email"].value;
if (x==null || x=="")
{
  alert("Email을 입력하세요");
      return false;
}

var sns = '0';
var form = document.member;
for(i=0;i<form.a1.length;i++) {//i는 배열. 라디오박스는 배열로 가져옴.
  if(form.a1[i].checked == 1) {
      sns = '1';
  }
}

}



});//전체종료

