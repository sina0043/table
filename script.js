/* overlay */
$(window).on('load', function(){ 
    $( ".overlay" ).fadeOut(100, function() { 
      $( ".overlay" ).remove(); 
    }); 
}); 

/* sidebar */
document.querySelectorAll('.sidebar .list-group a').forEach(titleA=>{
    titleA.addEventListener('click',(e)=>{
        e.target.closest('.list-group').querySelectorAll('a').forEach(titleB=>{
            titleB.classList.remove('active')
        })
        e.target.classList.add('active')
    })
})

document.querySelectorAll('section').forEach(mysections=>{
    mysections.addEventListener('mouseover',(e)=>{
        e.currentTarget.classList.forEach(classNameSection=>{
            document.querySelectorAll('.sidebar-main .list-group a').forEach(mySidebarLinks=>{
                if(classNameSection === mySidebarLinks.href.slice(mySidebarLinks.href.indexOf("#") + 1).replace('-title','')) {
                    document.querySelectorAll('.sidebar-main .list-group a').forEach(mySidebarLinksTwo=>{
                        mySidebarLinksTwo.classList.remove('active')
                    })
                    mySidebarLinks.classList.add('active')
                }
            })
        })
    })
}) 

document.querySelectorAll('h3').forEach(mytitles=>{
    mytitles.addEventListener('mouseover',(e)=>{
        document.querySelectorAll('.sidebar-main .list-group a').forEach(mySidebarLinksOne=>{
            if(e.currentTarget.id === mySidebarLinksOne.href.slice(mySidebarLinksOne.href.indexOf("#") + 1)) {
                document.querySelectorAll('.sidebar-main .list-group a').forEach(mySidebarLinksTwo=>{
                    mySidebarLinksTwo.classList.remove('active')
                })
                mySidebarLinksOne.classList.add('active')
            }
        }) 
    })
}) 

if(matchMedia('(width <= 1200px)').matches) {
    $('.sidebar').addClass('active');
}else {
    $('.sidebar').removeClass('active');
}

$('.navbar-btn').on('click', function () {
    $('.sidebar').toggleClass('active');
    document.querySelector('.sidebar').classList.forEach((className)=>{
        if(className == 'active') {
            $('.sidebar').css('margin-left','-250px')
            $('.navbar-btn').css('left', "0")
            $('.content').css('margin-left','0px')
        }else {
            $('.sidebar').css('margin-left','0')
            $('.navbar-btn').css('left', "250px")
            if(matchMedia('(width > 1200px)').matches) {
                $('.content').css('margin-left','250px')
            }
        }
        /* close sidebar when click outside it */
        if(matchMedia('(width <= 1200px)').matches) {
            document.querySelector('.content').addEventListener('click', function handleClickOutsideBox(event) {
                const box = document.querySelector('.sidebar');
                if (!box.contains(event.target)) {
                    $('.sidebar').css('margin-left','-250px')
                    $('.navbar-btn').css('left', "0px")
                }
                setTimeout(() => {
                    $('.sidebar').addClass('active')
                }, 100);
            });
        }
    })
});
/* -------------------------------- */
/* sidebar filter */
let filterInput = document.querySelector('.filter input') 
filterInput.addEventListener('input',e=>{
    document.querySelectorAll('.list-group-item').forEach(element=>{
        if(element.innerText.toLowerCase().includes(e.target.value.toLowerCase())){
            element.style.display = 'block'
        }else{
            element.style.display = 'none'
        }
    })
})

/* perfect scrollbar */
$(".sidebar").mCustomScrollbar({
    theme:"minimal",
    scrollInertia:400
});

/* bootstrap tooltip */
$('[data-toggle="tooltip"]').tooltip();

/* lazy loading */
$(".lazy").Lazy();

/* pluse-table */
var tablePlus = document.querySelector('.pluse-table')
var tableSpin = document.querySelector('.table-spin')
var tableFront = document.querySelector('.table-front')
var tableBack = document.querySelector('.table-back')
var simpleTable = document.querySelectorAll('.pluse-table .simple-table')

tableBack.style.display= 'none'

tablePlus.addEventListener('click',()=>{
    if(tableSpin.style.transform == "rotateX(0deg) rotateY(-180deg)"){
        tableSpin.style.transform = "rotateX(0deg) rotateY(0deg)"
        setTimeout(() => {
            tableFront.style.display= 'block'
            tableBack.style.display= 'none'
            simpleTable.forEach((element)=>{
                element.style.transform = "rotateX(0deg) rotateY(0deg)"
            })
        }, 600);
    }else {
        tableSpin.style.transform = "rotateX(0deg) rotateY(-180deg)"
        setTimeout(() => {
            tableFront.style.display= 'none'
            tableBack.style.display= 'block'
            simpleTable.forEach((element)=>{
                element.style.transform = "rotateX(0deg) rotateY(-180deg)"
            })
        }, 600);
    }
})

/* color-table */
function test(){
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px", 
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click","li",function(e){
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top":itemPosNewAnimTop.top + "px", 
			"left":itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}

$(document).ready(function(){
	setTimeout(function(){ test(); });
});

$(window).on('resize', function(){
	setTimeout(function(){ test(); }, 500);
});

$(".color-table .nav-mini").click(function(){
    $(".color-table #rulelist").slideToggle(1000);
});

document.querySelector('.color-table ul li:nth-child(4)').click()

/* data-table */
new DataTable('.data-table table', {
    ajax: './lib/dataTable.txt',
});

$(".data-table").mCustomScrollbar({
    theme:"dark",
    axis:"x",
    scrollButtons:{enable:true},
});

/* easing-table */
var table = document.querySelector('.easing-table .simple-table')
var btnEasingTable = document.querySelector('.easing-table button')
var sel = $("<select class='form-control'>").appendTo('#controls');

for (x in jQuery.easing){
    if (x != 'linear' && x != 'swing'){
      sel.append($('<option>').attr('value', x).text(x));
    }
}

sel.val('easeOutBounce');
table.classList.add('open')

btnEasingTable.addEventListener('click',(e)=>{
    e.preventDefault();
    table.classList.forEach((className)=>{
      if(className == 'open') {
        $('.easing-table .simple-table').animate(
            {height:0},  
            {
              duration: 1000, 
              easing: sel.val(),
              complete: ()=>{
                table.style.display = 'none'
                table.classList.remove('open')
              }
            }
        )
      }else {
        $('.easing-table .simple-table').animate(
            {height:600}, 
            {
              duration: 1000, 
              easing: sel.val(),
              start: ()=>{
                table.style.display = 'block'
                table.classList.add('open')
              }
            }
        )
      }
    })
});

/* slider-table */
let thumbnails = 0

if(matchMedia('(width >= 1800px)').matches) {
    thumbnails = 15;
}else if(matchMedia('(width >= 1200px)').matches) {
    thumbnails = 9;
}else if(matchMedia('(width >= 600px)').matches) {
    thumbnails = 7;
}else {
    thumbnails = 5;
}

$('#image-gallery').lightSlider({
    gallery:true,
    item:1,
    thumbItem: thumbnails,
    slideMargin: 30,
    loop:true,
    onSliderLoad: function() {
        $('#image-gallery').removeClass('cS-hidden');
    }  
});

document.querySelector('.navbar-btn').addEventListener('click',()=>{
    setTimeout(() => {
        sliderTableRespansive()
    }, 1000);
})

$(window).on('load', function(){ 
    document.querySelectorAll('.slider-table img').forEach(element=>{
        element.addEventListener('click',()=>{
            setTimeout(() => {
                sliderTableRespansive()
            }, 10);
        })
    })
});

function sliderTableRespansive() {
    if(matchMedia('(width > 1200px)').matches) {
        document.querySelector('.sidebar').classList.forEach(classname=>{ 
            if(classname == 'active') {
                document.querySelectorAll('.slider-table ul.gallery li').forEach(element =>{
                    element.classList.forEach(elementClasses=>{
                        if(elementClasses == 'active') {
                            element.style.width = document.querySelector('.content .margin').clientWidth +'px'
                        }else {
                            element.style.width = document.querySelector('.content .margin').clientWidth -250 +'px'
                        }
                    })
                })
            }else {
                document.querySelectorAll('.slider-table ul.gallery li').forEach(element =>{
                    element.style.width = document.querySelector('.content .margin').clientWidth +'px'
                })
            }
        })
    }
}
/* search-table */
var filterInputSearchTable = document.querySelector('.search-table input[type=text]')
var RowSearchTable = document.querySelectorAll('.search-table .simple-table tbody tr')
var RowSearchTableFirstChild = document.querySelectorAll('.search-table .simple-table tbody tr td:nth-child(1)')
var RowSearchTableSecondChild = document.querySelectorAll('.search-table .simple-table tbody tr td:nth-child(2)')
var RowSearchTableThirdChild = document.querySelectorAll('.search-table .simple-table tbody tr td:nth-child(3)')
var RowSearchTableFourthChild = document.querySelectorAll('.search-table .simple-table tbody tr td:nth-child(4)')

document.querySelectorAll('.search-table .simple-table thead tr th:first-child').forEach(element=> {
    element.style.width = element.clientWidth + 'px'
})

document.querySelectorAll('.search-table .simple-table tbody tr td:first-child').forEach(element=> {
    element.style.width = element.clientWidth + 'px'
})

filterInputSearchTable.addEventListener('input',(e)=>{
    switch (document.querySelector('.search-table select').value) { 
        case 'All Column':       
            RowSearchTable.forEach(element=>{
                if(element.innerText.toLowerCase().includes(e.target.value.toLowerCase())){
                    element.style.display = 'table-row'
                }else{
                    element.style.display = 'none'
                }
            })
        break;
        case 'Compare all plans':       
            RowSearchTableFirstChild.forEach(element=>{
                if(element.innerText.toLowerCase().includes(e.target.value.toLowerCase())){
                    element.closest('tr').style.display = 'table-row'
                }else{
                    element.closest('tr').style.display = 'none'
                }
            })
        break;
        case 'Strater':
            RowSearchTableSecondChild.forEach(element=>{
                if(element.innerText.toLowerCase().includes(e.target.value.toLowerCase())){
                    element.closest('tr').style.display = 'table-row'
                }else{
                    element.closest('tr').style.display = 'none'
                }
            })
        break;
        case 'Advance':
            RowSearchTableThirdChild.forEach(element=>{
                if(element.innerText.toLowerCase().includes(e.target.value.toLowerCase())){
                    element.closest('tr').style.display = 'table-row'
                }else{
                    element.closest('tr').style.display = 'none'
                }
            })
        break;
        case 'Enterprise':
            RowSearchTableFourthChild.forEach(element=>{
                if(element.innerText.toLowerCase().includes(e.target.value.toLowerCase())){
                    element.closest('tr').style.display = 'table-row'
                }else{
                    element.closest('tr').style.display = 'none'
                }
            })
        break;
        default:    
          text = "Looking forward to the Weekend";
    }
})

/* parallax-table */
$('.parallax-table .simple-table .bg-img ').parallaxmouse({
    invert: false,
    range: 100,
    elms: [
        {el: $('.parallax-table #star1'), rate: 0.2},
        {el: $('.parallax-table #star2'), rate: 0.2},
        {el: $('.parallax-table #star3'), rate: 0.2},
        {el: $('.parallax-table #star4'), rate: 0.2},
        {el: $('.parallax-table #star5'), rate: 0.2},
        {el: $('.parallax-table #robot'), rate: 0.2},
        {el: $('.parallax-table #asteroid'), rate: 0.2}
    ]
});

/* scroll-table */
var content=$(".scroll-table .simple-table"),
autoScrollTimer=8000,
autoScrollTimerAdjust,
autoScroll;
				
content.mCustomScrollbar({
    scrollButtons:{enable:true},
    callbacks:{
        whileScrolling:function(){
            autoScrollTimerAdjust=autoScrollTimer*this.mcs.topPct/100;
        },
        onScroll:function(){ 
            if($(this).data("mCS").trigger==="internal"){AutoScrollOff();}
        }
    }
});

content.addClass("auto-scrolling-on auto-scrolling-to-bottom");

AutoScrollOn("bottom");

$(".auto-scrolling-toggle").click(function(e){
    e.preventDefault();
    if(content.hasClass("auto-scrolling-on")){
        AutoScrollOff();
    }else{
        if(content.hasClass("auto-scrolling-to-top")){
            AutoScrollOn("top",autoScrollTimerAdjust);
        }else{
            AutoScrollOn("bottom",autoScrollTimer-autoScrollTimerAdjust);
        }
    }
});

function AutoScrollOn(to,timer){
    if(!timer){timer=autoScrollTimer;}
    content.addClass("auto-scrolling-on").mCustomScrollbar("scrollTo",to,{scrollInertia:timer,scrollEasing:"easeInOutSmooth"});
    autoScroll=setTimeout(function(){
        if(content.hasClass("auto-scrolling-to-top")){
            AutoScrollOn("bottom",autoScrollTimer-autoScrollTimerAdjust);
            content.removeClass("auto-scrolling-to-top").addClass("auto-scrolling-to-bottom");
        }else{
            AutoScrollOn("top",autoScrollTimerAdjust);
            content.removeClass("auto-scrolling-to-bottom").addClass("auto-scrolling-to-top");
        }
    },timer);
}

function AutoScrollOff(){
    clearTimeout(autoScroll);
    content.removeClass("auto-scrolling-on").mCustomScrollbar("stop");
}

/* sliderPro-table */
$( '.sliderPro-table .slider-pro' ).sliderPro({
    height: 600,
    orientation: 'vertical',
    loop: false,
    arrows: true,
    waitForLayers: true,
    buttons: false,
    thumbnailsPosition: 'right',
    thumbnailPointer: true,
    thumbnailWidth: 290,
    thumbnailHeight: 111,
    autoplay: true,
    fullScreen: true,
    shuffle: true,
    breakpoints: {
      1180: {
        thumbnailsPosition: 'bottom',
        thumbnailWidth: 170,
        thumbnailHeight: 100
      },
      500: {
        thumbnailsPosition: 'bottom',
        thumbnailWidth: 130
      }
    }
});

window.addEventListener('DOMContentLoaded',()=>{
    sliderProTableRespansive()
})

document.querySelector('.navbar-btn').addEventListener('click',()=>{
    setTimeout(() => {
        sliderProTableRespansive()
    }, 1000);
})

function sliderProTableRespansive() {
    if(matchMedia('(width >= 1198px)').matches) {
        document.querySelectorAll('.sliderPro-table .sp-slide').forEach(element=>{
            element.style.width = document.querySelector('.content .margin').clientWidth - 290 +'px'
        })
    }
}

/* sortable-table */
var exampleSortable = document.querySelector('.sortable-table .simple-table tbody')
new Sortable(exampleSortable, {
  animation: 150,
  ghostClass: 'green-background-class'
});

/* swiper-table-one */
new Swiper('.swiper-table-one .mx-0', {
    effect: 'cards',
    grabCursor: true,
});

/* swiper-table-two */
new Swiper('.swiper-table-two', {
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: '.swiper-pagination',
    },
});

/* swiper-table-three */
new Swiper('.swiper-table-three', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
});

/* lettering-table */
$('code').each(function () {
    var $this = $(this);
    $this.text($this.html());
})

var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';

var $form = $('.lettering-table .form-group')
, $simpleTable = $('.lettering-table .simple-table');

var getFormData = function () {
    var data = {
        loop: true,
        in: { callback: ()=>{} },
        out: { callback: ()=>{} }
    };

    $form.find('[data-key="effect"]').each(function () {
        var $this = $(this)
        , key = $this.data('key')
        , type = $this.data('type');

        data[type][key] = $this.val();
    });

    $form.find('[data-key="type"]').each(function () {
        var $this = $(this)
        , key = $this.data('key')
        , type = $this.data('type')
        , val = $this.val();

        data[type].shuffle = (val === 'shuffle');
        data[type].reverse = (val === 'reverse');
        data[type].sync = (val === 'sync');
    });

    return data;
};

$.each(animateClasses.split(' '), function (i, value) {
    var type = '[data-type]'
        , option = '<option value="' + value + '">' + value + '</option>';

    if (/Out/.test(value) || value === 'hinge') {
        type = '[data-type="out"]';
    } else if (/In/.test(value)) {
        type = '[data-type="in"]';
    }

    if (type) {
        $form.find('[data-key="effect"]' + type).append(option);
    }
});

$form.find('[data-key="effect"][data-type="in"]').val('fadeInLeftBig');
$form.find('[data-key="effect"][data-type="out"]').val('hinge');

var $tlt = $simpleTable.find('.tlt')
    .on('start.tlt',  ()=>{})
    .on('inAnimationBegin.tlt',  ()=>{})
    .on('inAnimationEnd.tlt',  ()=>{})
    .on('outAnimationBegin.tlt',  ()=>{})
    .on('outAnimationEnd.tlt',  ()=>{})
    .on('end.tlt',  ()=>{});

$form.on('change', function () {
    var obj = getFormData();
    $tlt.textillate(obj);
}).trigger('change');


/* timeline-table */
$('.timeline-table .timeline-1').Timeline();

document.querySelectorAll('.timeline-table .timeline-item').forEach(element=>{
    element.style.width= document.querySelector('.content .margin').clientWidth + 'px'
})

document.querySelector('.timeline-dots li.slide-active button').click()

document.querySelector('.navbar-btn').addEventListener('click',()=>{
    setTimeout(() => {
        timelineTableRespansive()
    }, 1000);
})

function timelineTableRespansive() {
    if(matchMedia('(width > 1200px)').matches) {
        document.querySelectorAll('.timeline-table .timeline-item').forEach(element =>{
            element.style.width = document.querySelector('.content .margin').clientWidth +'px'
            document.querySelector('.timeline-dots li.slide-active button').click()
        })
    }
}
/* wow-table */
 new WOW().init();

/* music-table */
let playBtnes = document.querySelectorAll('.play-btn')
let musicCover = document.querySelector('.music-vover')
let musicName = document.querySelector('.music-name')
let musics = [
    {
        name: 'music one',
        cover: './img/images3.jpg',
        url: new Audio('./audio/3.mp3')
    },
    {
        name: 'music two',
        cover: './img/images2.jpg',
        url: new Audio('./audio/2.mp3')
    },
    {
        name: 'music three',
        cover: './img/images.jpg',
        url: new Audio('./audio/1.mp3')
    },
]
let NumberOfSongs = musics.length;
let audio = musics[0].url
musicName.innerText = musics[0].name
musicCover.src = musics[0].cover

audio.addEventListener('canplay',()=>{
    for(let i = 0; i <= NumberOfSongs-1; i++){
        document.querySelector(`.music-table tbody tr:nth-child(${i+1}) .total-timer`).textContent = formatTime(musics[i].url.duration)
    }
})

playBtnes.forEach(playBtn=>{
    playBtn.addEventListener('click',(e)=>{
        for(let i = 0; i <= NumberOfSongs; i++){
            if(playBtn == document.querySelector(`.music-table tbody tr:nth-child(${i}) .play-btn`)) {
                currentMusic = i - 1
            }   
        } 
        let musicRange = document.querySelector(`.music-table tbody tr:nth-child(${currentMusic+1}) .music-range`)
        let currentTimer = document.querySelector(`.music-table tbody tr:nth-child(${currentMusic+1}) .current-timer`)
        let audio = musics[currentMusic].url
        musicName.innerText = musics[currentMusic].name
        musicCover.src = musics[currentMusic].cover
 
        e.target.closest('tr').classList.remove('play')
        e.target.closest('tbody').querySelectorAll('tr').forEach(audioRow => {
            if(audioRow.classList.contains('play')) {
                audioRow.querySelector('.play-btn').classList.replace('fa-pause','fa-play')
                audioRow.querySelector('.music-range').value = 0;
                audioRow.querySelector('.music-table .btns i').classList.remove('active')
            }else {
                if(audioRow.querySelector('.play-btn').classList.contains('fa-play')) {
                    audioRow.querySelector('.play-btn').classList.replace('fa-play','fa-pause')
                    audioRow.querySelector('.music-table .btns i').classList.add('active')
                    audio.play()
                    musicCover.style.animationPlayState = 'running'
                }else {
                    audioRow.querySelector('.play-btn').classList.replace('fa-pause','fa-play')
                    audioRow.querySelector('.music-table .btns i').classList.remove('active')
                    audio.pause()
                    musicCover.style.animationPlayState = 'paused'
                }
            }
        }); 
        e.target.closest('tr').classList.add('play')      
            
        audio.addEventListener('canplay',()=>{
            musicRange.max = audio.duration
        })   

        musicRange.addEventListener('input',()=>{  
            audio.currentTime = musicRange.value    
        })    

        audio.addEventListener('timeupdate',()=>{  
            currentTimer.innerText = formatTime(audio.currentTime)  
            
            audio.addEventListener('ended',()=>{
                audio.pause()                                           
                musicRange.value = 0                                                
                musicCover.style.animationPlayState = 'paused'    
                audio.currentTime = 0    
                document.querySelectorAll('.music-table .btns i').forEach(playBtnActiv=>{
                    playBtnActiv.classList.remove('active')  
                }) 
                document.querySelectorAll('.play-btn').forEach(playBtn=>{
                    playBtn.classList.replace('fa-pause','fa-play')
                })      
            })
        
            musicRange.value = audio.currentTime
        })

        for(let i = 0; i <= NumberOfSongs-1; i++){
            if(i == currentMusic) {
                continue;
            }
            musics[i].url.currentTime = 0
            musics[i].url.pause()
            document.querySelector(`.music-table tbody tr:nth-child(${i+1}) .current-timer`).innerText = '0:00' 
        }
    })
})
 
function formatTime(time) {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    return min + ':' + ((sec<10) ? ('0' + sec) : sec);
}

// like
let favIcons = document.querySelectorAll('.favorite')
favIcons.forEach(favIcon=>{
    favIcon.addEventListener('click',(e)=>{
        e.target.classList.toggle('active');
    })
})

// repeat
let repIcons = document.querySelectorAll('.repeat')
repIcons.forEach(repIcon=>{
    repIcon.addEventListener('click',(event)=>{
        for(let i = 0; i <= NumberOfSongs-1; i++){
            let audio = musics[i].url;
            if (audio.loop == true) {
                audio.loop = false
                event.target.classList.toggle('active')
            }
            else {
                audio.loop = true
                event.target.classList.toggle('active')
            }
        }
    })
})

// volume
let volBox = document.querySelector('.volume-box')
let volumeRange = document.querySelector('.volume-range')
let volumeDown = document.querySelector('.volume-down')
let volumeUp = document.querySelector('.volume-up')

volumeDown.addEventListener('click', ()=>{
    volumeRange.value = Number(volumeRange.value) - 20
    for(let i = 0; i <= NumberOfSongs-1; i++){
        let audio = musics[i].url;
        audio.volume = volumeRange.value/100
    }
   
});

volumeUp.addEventListener('click', ()=>{
    volumeRange.value = Number(volumeRange.value) + 20
    for(let i = 0; i <= NumberOfSongs-1; i++){
        let audio = musics[i].url;
        audio.volume = volumeRange.value/100
    }
});

volumeRange.addEventListener('input',()=>{  
    for(let i = 0; i <= NumberOfSongs-1; i++){
        let audio = musics[i].url;
        audio.volume = volumeRange.value/100
    }
})