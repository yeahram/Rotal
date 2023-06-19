$(function(){
    //top(quick)메뉴
    var defaultTop=parseInt($("#quick_menu").css("top"));

    $(window).on("scroll", function(){
        var scv=$(window).scrollTop();
        $("#quick_menu").stop().animate({top:scv+defaultTop+"px"},1000);
    });
    $("#quick_menu p").click(function(){
        $("html,body").animate({
            scrollTop:0
        },400);
        return false;

    });

    $('.wp13').waypoint(function() {
        $('.wp13').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    }); 
    $('.wp14').waypoint(function() {
        $('.wp14').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    }); 
    $('.wp15').waypoint(function() {
        $('.wp15').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    }); 
    $('.wp16').waypoint(function() {
        $('.wp16').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    }); 
    $('.wp17').waypoint(function() {
        $('.wp17').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    }); 
    $('.wp18').waypoint(function() {
        $('.wp18').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    }); 

    //top(quick)메뉴
    var defaultTop=parseInt($("#quick_menu").css("top"));

    $(window).on("scroll", function(){
        var scv=$(window).scrollTop();
        $("#quick_menu").stop().animate({top:scv+defaultTop+"px"},1000);
    });
    $("#quick_menu p").click(function(){
        $("html,body").animate({
            scrollTop:0
        },400);
        return false;
    
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


})