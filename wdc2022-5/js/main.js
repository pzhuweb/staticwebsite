//导航栏
let floatDiv=document.querySelector('.fixed');
window.addEventListener('scroll',()=>{
  let top=document.documentElement.scrollTop;
  if(top>640){
    floatDiv.classList.add('show');
  }
  else{
    floatDiv.classList.remove('show');
  }
})

$(document).ready(function() {
	$(".img2-item").eq(0).removeClass("fr").addClass("fl");
	$('.ph_p5Con_box2 .fl ul').eq(0).show();
	$('.ph_p5Con_box2 .fr ul').eq(0).show();
	$(".ph_p5Con_box .qhly").eq(0).show();
    /*nav*/
	var $ph00=$(".ph_nav_ul li.navmon");
	var $ph01=$(".ph_nav_box");
    $ph00.mouseover(function(){
		var index=$ph00.index(this);
		$ph01.eq(index).show();
        $(".ph_nav").css("height","154px");
    });
	$ph00.mouseout(function(){
		$ph01.hide();
        $(".ph_nav").css("height","77px");
    })
	var spanqh1=$('.ph_p5Con_box2 .fl .ph_tit4 span');
	spanqh1.each(function(index, element) {
        $(this).hover(function(){
			var index1=spanqh1.index(this);
			spanqh1.removeClass("active").eq(index1).addClass("active");
			$('.ph_p5Con_box2 .fl ul').hide().eq(index1).show();
		})
    });
	var spanqh2=$('.ph_p5Con_box2 .fr .ph_tit4 span');
	spanqh2.each(function(index, element) {
        $(this).hover(function(){
			var index2=spanqh2.index(this);
			spanqh2.removeClass("active").eq(index2).addClass("active");
			$('.ph_p5Con_box2 .fr ul').hide().eq(index2).show();
		})
    });

	 var mySwiperP0 = new Swiper('.ph_img1 .swiper-container',{
        //pagination: '.pagination1',
        loop:true,
        //grabCursor: true,
        //paginationClickable: true,
		autoplay:4000
    });
	$(".prev0").click(function(){
	    mySwiperP0.swipePrev();
	});
	$(".next0").click(function(){
	    mySwiperP0.swipeNext();
	});
    /*p3Con*/
    /*var mySwiperP1 = new Swiper('.ph_pic4 .swiper-container',{
        pagination: '.pagination1',
        loop:true,
        grabCursor: true,
        paginationClickable: true,
		autoplay:4000
    });*/
   
    var previewSwiper = new Swiper('.preview .swiper-container', {
        slidesPerView: 3,
		loop:true,
		autoplay:4000,
        onSlideClick: function() {
            //viewSwiper.swipeTo(previewSwiper.clickedSlideIndex)
        }
    })
    $('.preview .arrow-left').on('click', function(e) {
        e.preventDefault()
          previewSwiper.swipePrev()
    })
    $('.preview .arrow-right').on('click', function(e) {
        e.preventDefault()        
        previewSwiper.swipeNext()
    })
    
    
    
    function updateNavPosition() {
        $('.preview .active-nav').removeClass('active-nav')
        var activeNav = $('.preview .swiper-slide').eq(viewSwiper.activeIndex).addClass('active-nav')
        if (!activeNav.hasClass('swiper-slide-visible')) {
            if (activeNav.index() > previewSwiper.activeIndex) {
                var thumbsPerNav = Math.floor(previewSwiper.width / activeNav.width()) - 1
                previewSwiper.swipeTo(activeNav.index() - thumbsPerNav)
            } else {
                previewSwiper.swipeTo(activeNav.index())
            }
        }
    }
    /*p5Con*/
    var mySwiperP2 = new Swiper('.ph_pic6 .swiper-container',{
        loop:true,
        grabCursor: true,
        autoplay : 3000,
        paginationClickable: true
    });
    var mySwiperP3 = new Swiper('.ph_pic7 .swiper-container',{
        paginationClickable: true,
        loop:true,
        autoplay : 3000,
        speed:300,
        slidesPerView: 4
    })
    $('.prev2').on('click', function(e){
        e.preventDefault()
        mySwiperP3.swipePrev()
    })
    $('.next2').on('click', function(e){
        e.preventDefault()
        mySwiperP3.swipeNext()
    })
	$.ajax({
		type: "get",
		url: "https://messageboard.peopletech.cn/newIndex_stat.jsonp",
		cache: false,
		dataType: "jsonp",
		jsonp: "callback",
		jsonpCallback: "IndexStat",
		success: function(data) {
			//console.log(data);
			var answersNum = data['answersNum'];
			var yearAnswersNum = data['yearAnswersNum'];
			var totalAnswersNum = data['totalAnswersNum'];
			
			var threadsNum = data['threadsNum'];
			var yearThreadsNum = data['yearThreadsNum'];
			var totalThreadsNum = data['totalThreadsNum'];			
			$("#totalAnswersNum").html(answersNum);
			$("#totalThreadsNum").html(threadsNum);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			console.log(XMLHttpRequest.status);
			console.log(XMLHttpRequest.readyState);
			console.log(textStatus);
			$(".Leader_switch_ly span").remove();
		}
	});

    var showcase = $("#showcase")

    showcase.Cloud9Carousel({
        yPos: 42,
        yRadius: 48,
        mirrorOptions: {
            gap: 22,
            height: 0.2
        },
        autoPlay: 3000,
        autoPlayDelay: 1500,
        buttonLeft: $(".nav-arrow > .left"),
        buttonRight: $(".nav-arrow > .right"),
        autoPlay: true,
        bringToFront: true,
        onRendered: showcaseUpdated,
        onLoaded: function () {
            showcase.css('visibility', 'visible')
            showcase.css('display', 'none')
            showcase.fadeIn(1500)
        }
    })

    function showcaseUpdated(showcase) {
        var title = $('#item-title').html(
            $(showcase.nearestItem()).attr('alt')
        )

        var c = Math.cos((showcase.floatIndex() % 1) * 2 * Math.PI)
        title.css('opacity', 0.5 + (0.5 * c))
    }
    /*weixin*/
    $('.close1').on('click', function(){
        $('.wx_box1').hide();
    });
    $('.close2').on('click', function(){
        $('.wx_box2').hide();
    });
    $(document).scroll(function(){
		var bkTop=$(this).scrollTop();
		if(bkTop > 600){
			$(".topb").show()
			$(".weixin").show()
		}
		else{
			$(".topb").hide()	
			$(".weixin").hide()
		}			
	})	
	$(".topb").click(function(){
        $('html , body').animate({scrollTop: 0},500);
    });
	var pageCount;//共几页
	var pageNum = 8;//单页条数
	var currentpage=1;	
	var lengthH;
	var cshu=$(".dsbk .item");
	pageCount=Math.ceil(cshu.length/pageNum);
	$(".huan").on('click', function(e) {
        e.preventDefault()
        fanKui();
    })	
	fanKui()
	function fanKui() {
		//console.log(currentpage)
		cshu.hide();
		var num =(currentpage-1)*pageNum;
		var num1=currentpage*pageNum;
		for(var i=num;i<num1;i++){
			cshu.eq(i).show();
		}
		if(currentpage==pageCount){
			currentpage=1;
		}else{
			currentpage++;
		}		
	}
	var index1 =-1;
	var sc01lh=$(".sc01 .swiper-slide li").length-1;
	cshu.each(function(index, element){			
	   $(this).click(function(){
		$(".tp01 .fanye").show()
		index1=cshu.index(this);
		$(".tp01").fadeIn();
		$("#nr01").html($(this).html())
		if(index1==0){
			$(".tp01 .fanye span.pv").hide()
		}else if(index1==sc01lh){
			$(".tp01 .fanye span.nt").hide()
		}
		else{
			$(".tp01 .fanye span.nt").show()
			$(".tp01 .fanye span.pv").show()
		}
	   });
	});
	$(".tp01 .fanye span.pv").click(function(){
		if(index1 > 0){
			$("#nr01").html(cshu.eq(index1-1).html())
			index1=index1-1;
			if(index1==0){
				$(".tp01 .fanye span.pv").hide()
			}
			if(index1 < sc01lh){
				$(".tp01 .fanye span.nt").show()
			}
		}
	})
	$(".tp01 .fanye span.nt").click(function(){
		if(index1 >= 0){
			$("#nr01").html(cshu.eq(index1+1).html())			
			index1=index1+1;
			$(".tp01 .fanye span.pv").show()
			if(index1 == sc01lh){
				$(".tp01 .fanye span.nt").hide()
			}
		}
	})
	$(".close").click(function(){
		$(".tp01").fadeOut()
	});
});
// 日历
var month_olypic = [31,29,31,30,31,30,31,31,30,31,30,31];//闰年每个月份的天数
var month_normal = [31,28,31,30,31,30,31,31,30,31,30,31];
var month_name =["1","2","3","4","5","6","7","8","9","10","11","12"];
//获取以上各个部分的id
var holder = document.getElementById("days");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var ctitle = document.getElementById("calendar-title");
var cyear = document.getElementById("calendar-year");
//获取当天的年月日
var my_date = new Date();
var my_year = my_date.getFullYear();//获取年份
var my_month = my_date.getMonth(); //获取月份，一月份的下标为0
var my_day = my_date.getDate();//获取当前日期

//根据年月获取当月第一天是周几
function dayStart(month,year){
    var tmpDate = new Date(year, month, 1);
    return (tmpDate.getDay());
}
//根据年份判断某月有多少天(11,2018),表示2018年12月
function daysMonth(month, year){
    var tmp1 = year % 4;
    var tmp2 = year % 100;
    var tmp3 = year % 400;

    if((tmp1 == 0 && tmp2 != 0) || (tmp3 == 0)){
        return (month_olypic[month]);//闰年
    }else{
        return (month_normal[month]);//非闰年
    }
}
var showYear = 0
var showMonth = 0
//js实现str插入li+class,不要忘了用innerhtml进行插入
function refreshDate(){
    var str = "";
    //计算当月的天数和每月第一天都是周几，day_month和day_year都从上面获得
    var totalDay = daysMonth(my_month,my_year);
    var firstDay = dayStart(my_month, my_year);
    //添加每个月的空白部分
    for(var i = 0; i < firstDay; i++){
        str += "<li>"+"</li>";
    }

    //从一号开始添加知道totalDay，并为pre，next和当天添加样式
    var myclass;
    for(var i = 1; i <= totalDay; i++){
        //三种情况年份小，年分相等月份小，年月相等，天数小
        //点击pre和next之后，my_month和my_year会发生变化，将其与现在的直接获取的再进行比较
        //i与my_day进行比较,pre和next变化时，my_day是不变的
        // console.log(my_year+" "+my_month+" "+my_day);
        // console.log(my_date.getFullYear()+" "+my_date.getMonth()+" "+my_date.getDay());
        
        var dateStr = my_year + '-' + (my_month + 1) + '-' + i
        if((my_year < my_date.getFullYear())||(my_year == my_date.getFullYear() && my_month < my_date.getMonth()) || (my_year == my_date.getFullYear() && my_month == my_date.getMonth() && i < my_day)){
          myclass = " class='lightgrey'  onclick='checkIt(" + i + ", event)'";
          
        } else if(my_year == my_date.getFullYear() && my_month == my_date.getMonth() && i == my_day){
         // console.log(my_day, i)
          myclass = "class = 'lightgrey active start-day' onclick='checkIt(" + i + ", event)'";
        }else{
            myclass = "class = 'darkgrey'";
        }
        str += "<li "+myclass+">"+i+"</li>";
    }
    holder.innerHTML = str;
    ctitle.innerHTML = month_name[my_month] + '月'
    showYear = parseInt(my_year)
    showMonth = parseInt(month_name[my_month])
    cyear.innerHTML = my_year;
    setTimeout(function () {
      checkIt(my_day)
      // creatDate(dateStr)
    }, 0);
}
//调用refreshDate()函数，日历才会出现
refreshDate();
//实现onclick向前或向后移动
pre.onclick = function(e){
    e.preventDefault();
    my_month--;
    if(my_month < 0){
        my_year--;
        my_month = 11; //即12月份
    }
    refreshDate();
}

next.onclick = function(e){
    e.preventDefault();
    my_month++;
    if(my_month > 11){
        my_month = 0;
        my_year++;
    }
    refreshDate();
}

var activeIndexDate = 0;
var tempDate = null;
function creatDate(data) {
  tempDate = data
  //console.log(data)
  if (data && data[activeIndexDate]) {
   // console.log(data[activeIndexDate])
    document.querySelector('.right-panel .conn').innerHTML = data[activeIndexDate]
  } else {
    document.querySelector('.right-panel .conn').innerHTML = '1945年4月23日-6月11日，中国共产党第七次全国代表大会在延安举行。毛泽东在开幕词中指出，中国面临着两个前途和两种命运的斗争，党的任务是要用全力去争取光明的前途和光明的命运，反对另外一种黑暗的前途和黑暗的命运。在大会上，毛泽东作《论联合政府》的政治报告、关于形势和思想政治问题的报告、关于讨论政治报告的结论和关于选举问题的讲话；朱德作《论解放区战场》的军事报告和关于讨论军事问题的结论；刘少奇作了《关于修改党的章程》的报告和关于讨论组织问题的结论；周恩来作《论统一战线》的重要发言。任弼时、陈云、彭德怀、张闻天、陈毅、叶剑英、杨尚昆、彭真、聂荣臻等也在大会上作了发言。大会通过政治决议案、军事决议案和新的党章。大会系统地总结党24年来领导中国革命的经验，深刻地论述新民主主义的基本理论，指出党的路线是“放手发动群众，壮大人民力量，在我党的领导下，打败日本侵略者，解放全国人民，建立一个新民主主义的中国”。大会总结了武装斗争、统一战线和党的建设的经验，深刻地论述了进行新民主主义革命的“三大法宝”以及党的三大作风——理论和实际相结合、密切联系群众和自我批评。大会通过的新党章规定，以毛泽东思想作为党的一切工作的指针，从而实现了马克思列宁主义基本原理同中国革命实际相结合过程中的第一次历史性飞跃。把毛泽东思想作为党的指导思想并写入党章，是七大的历史性贡献。大会贯彻执行发扬民主、增强团结的方针，对历史上党内的错误，从团结的愿望出发，开展批评与自我批评，对犯错误的同志，采取一分为二的态度，耐心帮助教育，团结他们一道工作。大会选举了新的中央委员会。七大是中国共产党建党以后民主革命时期最重要的一次代表大会，全党在马克思列宁主义、毛泽东思想的基础上达到了空前的团结，为新民主主义革命在全国的胜利奠定了基础。'
    document.querySelector('.syy').style.display = 'none'
    document.querySelector('.xyy').style.display = 'none'
    return
  }
  if (!data[activeIndexDate - 1]) {
    document.querySelector('.syy').style.display = 'none'
  } else {
    document.querySelector('.syy').style.display = 'block'
  }
  if (!data[activeIndexDate + 1]) {
    document.querySelector('.xyy').style.display = 'none'
  } else {
    document.querySelector('.xyy').style.display = 'block'
  }
}

function syy () {
  activeIndexDate--
  creatDate(tempDate)
}

function xyy() {
  activeIndexDate++
  creatDate(tempDate)
}

function checkIt(day, event) {
  activeIndexDate = 0
  /*document.querySelectorAll('.lightgrey').forEach(element => {
    element.classList.remove('active')
  });*/
  var ltsh=$('.lightgrey');
  for(var i=0;i<ltsh.length;i++){
	  ltsh.eq(i).removeClass('active');
  }
  
  if (event && event.target) $(event.target).addClass('active')
  else {
    if (document.querySelector('.start-day')) {
		$('.start-day').addClass('active')
      //document.querySelector('.start-day').classList.add('active')
    }
    
  }
  var dateStr = showMonth + '-' + day
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      // dataS[dateStr]
      try {
        creatDate(JSON.parse(this.responseText))
      } catch (error) {
        creatDate()
      }
      
      // console.log(this.responseText);
    }
  });

  xhr.open("GET", '/img/MAIN/2021/03/120809/data/' + dateStr + '.json');
  xhr.send();
  
}


var swiperhszg = null
$(function () {
  // 切换组件
  new tabIt(document.querySelectorAll('.tab-bar-box .tab-bar-item'), document.querySelectorAll('.tab-panel ul'));
  new tabIt(document.querySelectorAll('.ph_p5Con_box .colomn'), document.querySelectorAll('.ph_p5Con_box .qhly'));
  new Swiper('.bookshelf .swiper-container', {
    loop: true,
    slidesPerView: 4 // grabCursor: true,
    // paginationClickable: true

  });
  swiperhszg = new Swiper('.swiper-container-hszg',{
    //loop: true,
    slidesPerView: 5
  })
})
// 红色展馆轮播图
function leftClick(params) {
  swiperhszg.swipePrev()
}
function rightClick(params) {
  swiperhszg.swipeNext()
}
//媒体荟萃
			$(function () {
				var mySwipermt = new Swiper('.swiper-meiti', {
					pagination: '.paginationnt',
					autoplay: 4000,
					loop: true,
					grabCursor: true,
					slidesPerView: 1,
					paginationClickable: true
				})
				var meiti = $(".swiper-meiti .swiper-slide div");
				var num = 1;
				meiti.each(function (index, element) {
					var ind = meiti.index(this);
					if (num == 10) {
						num = 1;
					}
					$(this).addClass("a" + num);
					num++;
				});
			})
