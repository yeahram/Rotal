$(function(){  	
    $('.subslick').slick({
        dots: true,
        arrows:false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,   //한 화면에 보여줄 아이템수
        slidesToScroll: 1, // 한번에 슬라이드 시킬 아이템수
       
    });  
    //top(quick)메뉴
    var defaultTop=parseInt($("#quick_menu2").css("top"));

    $(window).on("scroll", function(){
        var scv=$(window).scrollTop();
        $("#quick_menu2").stop().animate({top:scv+defaultTop+"px"},1000);
    });
    $("#quick_menu2 p").click(function(){
        $("html,body").animate({
            scrollTop:0
        },400);
        return false;
    
    });

    /*tab메뉴*/
   // $('.tabcontent > div').hide();
   $(".tabcontent div:not(:first)").css("display","none");
    $('.tabnav a').click(function () {
      $('.tabcontent > div').hide().filter(this.hash).fadeIn();
      $('.tabnav a').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':eq(0)').click();

     /*동영상크기창*/
     $(".youtube").colorbox({iframe:true, innerWidth:"85%",      innerHeight:"65%"});
     
     /*동영상 슬릭*/
  $('.tabcontent>div').slick({
      centerMode:false,
      slide:"li",
      infinite: true,
      autoplay:true,
      autoplaySpeed:1000,
      slidesToShow:2,
      slidesToScroll:1,
      speed:2000,
      arrows:true,
      pauseOnHover:true,
      width:"20%",
      height: "15%",
      dots:false,
      
     
  });	

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

    //풀메뉴
    $("#gnb3>li>a").mouseenter(function(){
        $(this).next().stop().slideDown(500);
    });
    $("#gnb3>li").mouseleave(function(){
        $(this).find(".tmenu").stop().slideUp(500);
    });




});	