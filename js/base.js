(function () {
  initActive()
  bindEvenInit()
  var mycard = $('#mycard')
  
    let mycardTop = mycard&&mycard.offset()&&mycard.offset().top;
    // let height=$('.header').height()
    // console.log(mycardTop,height)
    window.onscroll = function () {
      var e = e || window.event;
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      console.log(scrollTop )
      if (scrollTop > mycardTop) {
        mycard.addClass('scroll')
      } else {
        mycard.removeClass('scroll')
      }
    }
 

  

  function initActive () {
    let root = document.querySelector(':root')
    var active = sessionStorage.getItem('wttandroid')
    
    
    if (active && active == 'true') { //非第一次登录 且是开灯(白色)
      $('#myRadio').removeClass('active')
      $('.navigation').removeClass('active')

      root.style.setProperty('--backColor', '#fff')
      root.style.setProperty('--borderline', '#fff')
      root.style.setProperty('--headerCOlor', '#fff')
      root.style.setProperty('--headerhover', 'rgb(255, 255, 255,.8)')
      root.style.setProperty('--headerFont', '#00283A' )
      root.style.setProperty('--fontColor', '#fff' )
      root.style.setProperty('--mainColor', '#ff8181' )
      root.style.setProperty('--bagColor', '#f4f5f7')
    } else { //第一次登录或是黑色时 默认变成黑色
      $('#myRadio').addClass('active')
      $('.navigation').addClass('active')
      
      root.style.setProperty('--backColor', '#fff')
      root.style.setProperty('--borderline', '#00283A')
      root.style.setProperty('--headerCOlor', '#00283A')
      root.style.setProperty('--headerhover', 'rgb(0, 40, 58,.8)')
      root.style.setProperty('--headerFont', '#fff' )
      root.style.setProperty('--fontColor', '#00283A' )
      root.style.setProperty('--mainColor', '#ff8181' )
      root.style.setProperty('--bagColor','#02162b' )
    }
  }



  $('#myRadio').click(function () {
    // h1
    let root = document.querySelector(':root')

    if ($('#myRadio').hasClass('active')) { //现在黑色变成白色
      sessionStorage.setItem('wttandroid', true)
      
      $('#myRadio').removeClass('active')
      $('.navigation').removeClass('active')

      root.style.setProperty('--backColor', '#fff')
      root.style.setProperty('--borderline', '#fff')
      root.style.setProperty('--headerCOlor', '#fff')
      root.style.setProperty('--headerhover', 'rgb(255, 255, 255,.8)')
      root.style.setProperty('--headerFont', '#00283A' )
      root.style.setProperty('--fontColor', '#fff' )
      root.style.setProperty('--mainColor', '#ff8181' )
      root.style.setProperty('--bagColor', '#f4f5f7')

    } else {//现在白色变成黑色
      sessionStorage.setItem('wttandroid', false)
      
      $('#myRadio').addClass('active')
      $('.navigation').addClass('active')
      
      root.style.setProperty('--backColor', '#fff')
      root.style.setProperty('--borderline', '#00283A')
      root.style.setProperty('--headerCOlor', '#00283A')
      root.style.setProperty('--headerhover', 'rgb(0, 40, 58,.8)')
      root.style.setProperty('--headerFont', '#fff' )
      root.style.setProperty('--fontColor', '#00283A' )
      root.style.setProperty('--mainColor', '#ff8181' )
      root.style.setProperty('--bagColor','#02162b' )
    }
})

  

   
$('#zhezhao>.close').click(function () {
  console.log('遮罩层')
  if ($('#zhezhao').hasClass('active')) {
    $('#zhezhao').removeClass('active')
    document.getElementById('videoResumeC').pause();
  } else {
    $('#zhezhao').addClass('active')
  }
})
  
$('#minmenu').click(function () {
  console.log('遮罩层')
  if ($('#minmenu').hasClass('active')) {
    $('#minmenu').removeClass('active');
    $('.menu_list').removeClass('active');
    
  } else {
    $('#minmenu').addClass('active')
    $('.menu_list').addClass('active')
  }
})
  
  

  
  
  // loading
  document.onreadystatechange = function () {
    if (document.readyState == 'complete') {
      let opacity = $('.loading-wrap').css('opacity');
      let timer = null;
      timer = opacity&&setInterval(() => {
        opacity-=0.1
        $('.loading-wrap').css('opacity', opacity);
        console.log(opacity)
        if (opacity <= 0) {
          $('.loading-wrap').css('display','none');
          clearInterval(timer)
        }
      }, 100);
     
    }
  }

  
 //锚点定位初始化
 function bindEvenInit(){
  $('.navbtn').bind("click touch",function () {
    //scrollTop 滚动到  $(this).attr('href')锚点关联id所在位置
    $('html,body').animate({scrollTop:($($(this).attr('href')).offset().top-100)},500)
    return false
  })
} 

            


})()
// 建议放在页面底部</body>标签前，或DOMContentLoaded事件中
document.addEventListener('DOMContentLoaded', function() {
  // 等待所有资源加载完成
  window.addEventListener('load', function() {
    const loader = document.querySelector('.loading-wrap');
    if (!loader) return;

    // 使用requestAnimationFrame确保样式应用
    requestAnimationFrame(() => {
      // 添加隐藏类名触发淡出过渡
      loader.classList.add('hide');
      
      // 过渡结束后移除元素
      setTimeout(() => {
        loader.remove();
      }, 300); // 这个时间需匹配CSS的transition时长(0.3s)
    });
  });
});


/*优化浮框*/
// 监听窗口的滚动事件
window.addEventListener('scroll', function() {
  // 获取左侧浮框元素
  const meCard = document.querySelector('.content .me-card');
  // 获取当前页面的滚动距离
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 0) {
      // 当页面滚动时，添加 scroll 类
      meCard.classList.add('scroll');
  } else {
      // 当页面回到顶部时，移除 scroll 类
      meCard.classList.remove('scroll');
  }
});



document.addEventListener('DOMContentLoaded', function () {
  // 获取播放按钮元素
  const playButton = document.getElementById('playbuttom');
  // 获取关闭按钮元素
  const closeButton = document.querySelector('.zhezhao .close');
  // 获取遮罩层元素
  const overlay = document.getElementById('zhezhao');
  // 获取视频元素
  const video = document.getElementById('videoskillC');
  // 获取视频容器元素
  const videoContainer = document.getElementById('videoskill');

  // 为播放按钮添加点击事件监听器
  playButton.addEventListener('click', function () {
      // 显示遮罩层
      overlay.style.display = 'block';
      // 设置视频容器样式，使其占据整个遮罩层
      videoContainer.style.width = '100%'; // 可根据需要调整宽度
      videoContainer.style.maxWidth = '1200px'; // 最大宽度限制
      videoContainer.style.height = 'auto';
      videoContainer.style.position = 'absolute';
      videoContainer.style.top = '50%';
      videoContainer.style.left = '50%';
      videoContainer.style.transform = 'translate(-50%, -50%)';

      // 设置视频样式，使其适应容器
      video.style.width = '100%';
      video.style.height = 'auto';

      // 播放视频
      video.play();
  });

  // 为关闭按钮添加点击事件监听器
  closeButton.addEventListener('click', function () {
      // 隐藏遮罩层
      overlay.style.display = 'none';
      // 暂停视频
      video.pause();
      // 将视频播放进度重置为开始位置
      video.currentTime = 0;
  });
});