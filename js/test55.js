$(function(){
    var perNum = 91.99;
    var perNum2 = 30.99;
    var perNum3 = 60.99;
    $('.wp2').waypoint(function(){
        $('.wp2').addClass('animated fadeIn');
        $('.second.circle').circleProgress({
          value: perNum/100,
          startAngle:300,
            size:100,
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
            size:100,
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
            size:100,
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
//         });

// $('.second.circle').circleProgress({
//     value: 0.6
//   }).on('circle-animation-progress', function(event, progress) {
//     $(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
//   });

//   $('.third.circle').circleProgress({
//     value: 0.75,
//     fill: {gradient: [['#0681c4', .5], ['#4ac5f8', .5]], gradientAngle: Math.PI / 4}
//   }).on('circle-animation-progress', function(event, progress, stepValue) {
//     $(this).find('strong').text(stepValue.toFixed(2).substr(1));
//   });

//   var c4 = $('.forth.circle');

//   c4.circleProgress({
//     startAngle: -Math.PI / 4 * 3,
//     value: 0.5,
//     lineCap: 'round',
//     fill: {color: '#ffa500'}
//   });

//   setTimeout(function() { c4.circleProgress('value', 0.7); }, 1000);
//   setTimeout(function() { c4.circleProgress('value', 1.0); }, 1100);
//   setTimeout(function() { c4.circleProgress('value', 0.5); }, 2100);
});
