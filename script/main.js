

$(document).ready(function(){

  //사용자가 마우스로 헤더영역에 오버하면 .on, .h_on 를 적용하고 마우스를 아웃하면 .on .h_on제거

  $('header').hover(function(){
    $(this).find('i.fas').addClass('on');
    $(this).find('.gnb a').addClass('on');//검정색 로고
    $(this).find('h1 img').attr('src','./img/logo-casper-black.png');
    $(this).addClass('h_on');

  },function(){//아웃시 동작
    $('header i.fas').removeClass('on');
    $('.gnb a').removeClass('on'); // 검정색 로고
    $('h1 img').attr('src','./img/logo-casper-white.png');
    $('header').removeClass('h_on');
  });

  //스크롤이벤트를 사용하여 일정영역이상으로 내려가면 위 서식을 적용한다.
  $(window).scroll(function(){
    let sPos = $(this).scrollTop();
    console.log(sPos); //스크롤값 체크
    if(sPos >= 953){ //영상콘테츠가 모두 올라가면
      $('header').find('i.fas').addClass('on');
      $('header').find('.gnb a').addClass('on');//검정색 로고
      $('header').find('h1 img').attr('src','./img/logo-casper-black.png');
      $('header').addClass('h_on');

      $('header').mouseleave(function(){
        $(this).find('i.fas').addClass('on');
        $(this).find('.gnb a').addClass('on');//검정색 로고
        $(this).find('h1 img').attr('src','./img/logo-casper-black.png');
        $(this).addClass('h_on');
      });
    }else{
      $('header i.fas').removeClass('on');
      $('.gnb a').removeClass('on'); // 검정색 로고
      $('h1 img').attr('src','./img/logo-casper-white.png');
      $('header').removeClass('h_on');

      $('header').mouseleave(function(){
        $(this).find('i.fas').removeClass('on');
        $(this).find('.gnb a').removeClass('on');//검정색 로고
        $(this).find('h1 img').attr('src','./img/logo-casper-white.png');
        $(this).removeClass('h_on');
      });
    }
  });
});