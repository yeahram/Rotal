<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="utf-8"/>
    <title>Rotal</title>
    <link rel="stylesheet" href="http://gioio.dothome.co.kr/rotal_yyr/css/reset.css">
    <link rel="stylesheet" href="http://gioio.dothome.co.kr/rotal_yyr/css/rotal.css">
    <script src="http://gioio.dothome.co.kr/rotal_yyr/js//jquery-1.11.2.min.js"></script>
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.12.4.min.js"></script>
    <script src="http://gioio.dothome.co.kr/rotal_yyr/js/waypoints.min.js"></script>
<script src="http://gioio.dothome.co.kr/rotal_yyr/js/circle-progress.min.js"></script>
    <script type="text/javascript" src="http://gioio.dothome.co.kr/rotal_yyr/js/jquery-ui.min.js"></script>
    <script type="text/javascript" src="http://gioio.dothome.co.kr/rotal_yyr/js/jquery.easing.1.3.js"></script>
    <script type="text/javascript" src="http://gioio.dothome.co.kr/rotal_yyr/js/prefixfree.min.js"></script>
    <script type="text/javascript" src="http://gioio.dothome.co.kr/rotal_yyr/js/jquery.mousewheel.min.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js"></script>
    <script>
        function initialize() {
          var mapOptions = {
            zoom: 14,
            scrollwheel: false,
            center: new google.maps.LatLng(37.556316, 126.935820)
          };
          var map = new google.maps.Map(document.getElementById('googleMap'),
              mapOptions);
          var marker = new google.maps.Marker({
            position: map.getCenter(),
            animation:google.maps.Animation.BOUNCE,
            icon: 'http://gioio.dothome.co.kr/rotal_html/img/locred.png',
            map: map
          });
        }
        google.maps.event.addDomListener(window, 'load', initialize);
    </script>
    <script src="http://gioio.dothome.co.kr/rotal_yyr/js/rotal.js"></script>
</head>
<body>
    <section class="box">
        <a href="http://gioio.dothome.co.kr/rotal_yyr/rotal_html"><img class="main01 mo" src="http://gioio.dothome.co.kr/rotal_yyr/img/main08.png" alt="main"></a>
            <div class="main02 mo">
                <ul class="mo">
                    <li><p>로봇과 물류 자동화를 통한 생산성 향상</p></li>
                    <li><p><a href="#">ROTAL</a></p></li>
                    <li><p>Smart Factory를 넘어서는 “ART FACTORY”</p></li>
                </ul>
            </div>

            <div class="fun_mouse"><!--마우스 애니-->
                <span class="mou"></span>     
            </div>

            <header>
                <a href="http://gioio.dothome.co.kr/rotal_yyr/rotal.html"><img class="img" src="http://gioio.dothome.co.kr/rotal_yyr/img/mainlogo.png" alt="mainlogo"></a><!--pc로고-->
                
                <nav id="menu">
                    <ul id="gnb3">
                        <li><a href="#">회사 소개</a>
                        <div class="tmenu">
                            <div class="menubox">
                                    <ul class="n1 cf">
                                        <li><a href="#">CEO인사말</a></li>
                                        <li><a href="#">비전/경영철학</a></li>
                                        <li><a href="#">연혁</a></li>
                                        <li><a href="#">핵심전략</a></li>
                                        <li><a href="#">찾아오시는 길</a></li>
                                    </ul>		
                                </div>
                        </div>
                        </li>
                
                        <li><a href="#">제품</a>
                            <div class="tmenu">
                                <div class="menubox">
                                    <ul class="n1 cf">
                                        <li><a href="#">신제품</a></li>
                                        <li><a href="#">자율주행 리만</a></li>
                                        <li><a href="#">AGV/원스타</a></li>
                                        <li><a href="#">데카르트</a></li>
                                        <li><a href="#">계측센서</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                
                        <li><a href="#">공정사례</a>
                                <div class="tmenu">
                            <div class="menubox">
                                <ul class="n1 cf">
                                    <li><a href="#">소개</a></li>
                                    <li><a href="#">사례집</a></li>
                                </ul>
                            </div>
                        </div>
                        </li>
                
                        <li><a href="#">고객지원</a>
                                <div class="tmenu">
                            <div class="menubox">
                                <ul class="n1 cf">
                                    <li><a href="#">자료실</a></li>
                                    <li><a href="#">뉴스레터</a></li>
                                </ul>
                
                            </div>
                        </div>
                        </li>
                    </ul>
                  </nav>

                <button class="hamburger cf">&#9776;</button><!--모바일햄버거-->
                <div class="menu"><!--모바일메뉴-->
                    <ul>
                        <li> <a href="#" class="iframe">회사소개<img class="btn" src="http://gioio.dothome.co.kr/rotal_yyr/img/plus.png" alt="plus"></a>
                        <ul class="sub">
                            <li><a href="#">인사말</a></li>
                            <li><a href="#">회사연혁</a></li>
                            <li><a href="#">핵심전략</a></li>
                            <li><a href="#">오시는 길</a></li>
                            <li><a href="#">PR</a></li>
                        </ul>
                        </li>
                        <li><a href="#">제품<img class="btn" src="http://gioio.dothome.co.kr/rotal_yyr/img/plus.png" alt="plus"></a>
                        <ul class="sub">
                            <li><a href="#">신제품</a></li>
                            <li><a href="#">자율주행 리만</a></li>
                            <li><a href="#">AGV / 원스타</a></li>
                            <li><a href="#">데카르트</a></li>
                            <li><a href="#">예측센서</a></li>
                        </ul>
                        </li>
                        <li> <a href="#">공정사례<img class="btn" src="http://gioio.dothome.co.kr/rotal_yyr/img/plus.png" alt="plus"></a>
                        <ul class="sub">
                            <li><a href="#">소개</a></li>
                            <li><a href="#">사례집</a></li>
                        </ul>
                        </li>
                        <li><a href="#">고객지원<img class="btn" src="http://gioio.dothome.co.kr/rotal_yyr/img/plus.png" alt="plus"></a>
                        <ul class="sub">
                            <li><a href="#">자료실</a></li>
                            <li><a href="#">뉴스레터</a></li>
                        </ul>
                        </li>
                    </ul>
                </div>

                <img class="logo1 tablet" src="http://gioio.dothome.co.kr/rotal_yyr/img/mainlogo.png" alt="mainlogo"><!--모바일 pc-->
                <ul class="upmenu cf">
                    <li><a href="#"><p>Home | </p></a></li>
                    <li><a href="#"><p>&nbsp;로그인 | </p></a></li>
                    <li><a href="#"><p>&nbsp; 회원가입</p></a></li>
                </ul>
            </header>

            
            <video id="v1" class="tablet" src="http://gioio.dothome.co.kr/rotal_yyr/img/videoplayback.mp4" width="100%" height="auto" alt="fullPage" type="video/mp4" autoplay loop></video>
            <video id="v2" class="pc" src="http://gioio.dothome.co.kr/rotal_yyr/img/videoplayback.mp4" width="100%" height="auto" alt="fullPage" autoplay loop muted></video>
        </div><!--첫 페이지 끝-->
    </section>
    <section class="box">
        <div class="intro1">
            <h1><img class="quad" src="http://gioio.dothome.co.kr/rotal_yyr/img/quad.png" alt="quad"> Our values</h1>
            <img class="value1 wp4" src="http://gioio.dothome.co.kr/rotal_yyr/img/value02-1.jpg" alt="value1">
                <div class="memo wp6 delay-05s">
                    <ul>
                        <li><p>고객의 <span>신뢰</span> 차별화된 <span>경쟁력!</span></p></li>
                        <li>
                            <div class="ivr">
                                <p>고객에게 신뢰받는 기업, 차별적이고 경쟁력 있는 기업, 미래를 주도하는 기업이 되기 위해 최선을 다하겠습니다.</p><br>
                                <p>무한 경쟁시대에서 고객 만족 경영과 미래 경영을 실천하여 끊임없는 노력을
                                하고 있습니다.</p>
                                <p>Request demo</p>
                        </div>
                    </li>

                    </ul>
                </div>
                <div><p class="font">VALUE</p></div>
        </div>
    </section>
    <section class="box int1">
        <div class="intro2">
            <h1><img class="quad2" src="http://gioio.dothome.co.kr/rotal_yyr/img/quad.png" alt="quad"> Our technology</h1>
            <img class="value2 wp7" src="http://gioio.dothome.co.kr/rotal_yyr/img/tech01.jpg" alt="tech01">
                <div class="memo2 wp8 delay-05s">
                    <ul class="ivr2">
                        <li><p>로봇 전문가가 제안하는<br> <span>최적의 솔루션!</span> </p></li>
                        <li>스마트 공장의해법 MES 솔루션, 인포스트 당신에게 가장 필요한 최적의 생산 환경을 구축합니다!</li>
                        <li>
                            <table>
                                <tr>
                                    <td>운영가동시간 <span>최대화</span> </td>
                                    <td>사전투자 <span>Zero</span> </td>
                                </tr>
                                <tr>
                                    <td>유지보수 <span> 비용 절감</span></td>
                                    <td><span>EHS</span>  준수</td>
                                </tr>
                            </table>
                        </li>
                    </ul>
                </div>
                <div><p class="font2">TECHNO</p></div>
        </div>
    </section>
    <section class="box">
        <h1 class="bo"><img class="quad3" src="http://gioio.dothome.co.kr/rotal_yyr/img/quad.png" alt="quad"> Our number</h1>
        <div class="u1"><!--모바일-->
            <img class="value4" src="http://gioio.dothome.co.kr/rotal_yyr/img/circle01.jpg" alt="number">
            <p class="ro">함께 성장하는, ROTAL</p>
            <div class="intro4 wp2">
                <div class="fadeIn cf">
                    <div class="second circle">
                        <strong></strong>
                        <span>정확도</span>
                    </div>
                
                    <div class="third circle">
                        <strong></strong>
                        <span>생산성</span>
                    </div>
                
                    <div class="forth circle">
                        <strong></strong>
                        <span>납품율</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="u2"><!--pc-->
            <img class="value4" src="http://gioio.dothome.co.kr/rotal_yyr/img/number.jpg" alt="number">
            <div class="intro5 wp3">
                <div class="fadeIn cf">
                    <div class="fifth circle">
                        <strong></strong>
                        <span>정확도</span>
                    </div>
                
                    <div class="sixth circle">
                        <strong></strong>
                        <span>생산성</span>
                    </div>
                
                    <div class="seventh circle">
                        <strong></strong>
                        <span>납품율</span>
                    </div>
                </div>
            </div>
        </div>
           
    </section>
    <section class="box">
        <div class="intro3">
            <h1><img class="quad" src="http://gioio.dothome.co.kr/rotal_yyr/img/quad.png" alt="quad"> Our technology</h1>
            <p class="pp"><img class="value3 wp11" src="img/tech2.png" alt="tech02"></p>
            <div>
                <ul class="ivr3 wp12 delay-05s">
                    <li><p>언제 어디서나,<span>실시간 모니터링</span></p></li>
                    
                    <li>신호, 통신, 기계, 토목, 전기 등을 포함한
                        다양한 분야의 기능실 및 관제 대상의 정보들을 실시간으로
                        감시하고 데이터를 통합관리 할 수 있습니다!</li>
                    <li>
                        <table>
                            <tr>
                                <td>AI 기반 고장 예측 & SMS 알림 서비스
                                </td>
                            </tr>
                            <tr>
                                <td>다양한 분석지표 및 그래프
                                </td>
                            </tr>
                            <tr>
                                <td>자동 연계 통합 모니터링
                                </td>
                            </tr>
                        </table>
                    </li>
                </ul>

        </div>
    </section>
    <section class="box">
        <div class="intro6">
            <div class="newsl cf">
                <p>NEWS LETTER</p>
                <div class="lef pc tablet">
                    <p>공장자동화 적용 사례, 
                        신제품 및 신기술 등의 정보를 받아보세요!</p>
                </div>

                <div class="letter">
                    <ul>
                        <li class="wp10">
                            <ul class="cf">
                                <li><a href="#"><p>뉴스레터 신청</p></a></li>
                                <li><p class="l0">정기적으로 발송되는 뉴스레터를 신청하세요!  (rotalbusiness@gmail.com)</p></a>
                                </li>
                            </ul>
                        <li class="wp10 delay-05s">
                            <ul class="cf">
                                <li><a href="http://gioio.dothome.co.kr/g5/bbs/board.php?bo_table=qa"><p>Download</p></a></li>
                                <li><p class="l0">ROTAL의 제품 정보를 제공드립니다!  (Rotalbusiness, Rotalnews)</p></a>
                                </li>
                            </ul>
                        </li>
                        <li class=" wp10 delay-1s">
                            <ul class="cf">
                                <li><a href="http://gioio.dothome.co.kr/g5/bbs/board.php?bo_table=freebd"><p>공지사항</p></a></li><!--게시판연결-->
                                <li><p class="l0">문의사항을 남겨주세요! (051-911-2800)</p></a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>


            
            <div class="map">						
			     <h2>Contact us</h2>
                 <h3>rotalbusiness@gmail.com | rotal.co.kr</h3>
					<div id="googleMap" style="width:90%; height:250px;"></div>
			</div>
        </div>
        <footer>
            <div id="footer">
                <div id="fourmenu" class="cf"><!--4메뉴-->
                    <ul>
                        <li><a href="#"><p>Solution</p></a></li>
                        <li><a href="#"><p>센터안내</p></a></li>
                        <li><a href="#"><p>이메일무단 수신거부</p></a></li>
                        <li><a href="#"><p>개인정보처리방침</p></a></li>
                    </ul>
                    <ul>
                        <li><a href="#"><p>Cummunity</p></a></li>
                        <li><a href="#"><p>공지사항</p></a></li>
                        <li><a href="#"><p>채용안내</p></a></li>
                        <li><a href="#"><p>고객문의</p></a></li>
                    </ul>
                    <ul>
                        <li><a href="#"><p>인사이트</p></a></li>
                        <li><a href="#"><p>산업소개</p></a></li>
                        <li><a href="#"><p>솔루션 소개</p></a></li>
                        <li><a href="#"><p>래퍼런스</p></a></li>
                    </ul>
                    <ul>
                        <li><a href="#"><p>SNS</p></a></li>
                        <li><a href="#"><p>블로그</p></a></li>
                        <li><a href="#"><p>페이스북</p></a></li>
                        <li><a href="#"><p>유튜브</p></a></li>
                    </ul>
                </div>
                <div id="address"><!--주소-->
                    <P>(주) 로탈 | 연락처 : 051-911-2800 | 주소 : 대한민국 경상남도 양산시 소주동 291</P>
                    <P>영업시간 : 월~금 09:00~17:00 / 토,일 휴무</P>
                </div>
            </div>
            <div class="fo">
                <p>Copyright 2022 ROTAL - FA Total System All rights reserved</p>
            </div>
        </footer>
    </section>
    <!-- <div class="box" style="background-color:violet;">7</div> -->
</body>
</html>