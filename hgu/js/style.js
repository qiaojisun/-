$(function(){
	$(document).ready(function(){
		var $tab_li = $('#tab_hotnew ul li');
		$tab_li.hover(function(){
			$(this).addClass('selected').siblings().removeClass('selected');
			var index = $tab_li.index(this);
			$('div.tab_box_hotnew > div').eq(index).show().siblings().hide();
		});	
	});
	$(document).ready(function(){
		var $tab_li = $('#tab_trends ul li');
		$tab_li.hover(function(){
			$(this).addClass('selected').siblings().removeClass('selected');
			var index = $tab_li.index(this);
			$('div.tab_box_trends > div').eq(index).show().siblings().hide();
		});	
	});
	
	$(function(){
		var mark=1;
		$(".media .fadin").hover(function(){
			if(mark==1){//把他展开
				$(this).children('.layel').slideDown();
				mark=2;
			}else if(mark==2){//收缩
				$(this).children('.layel').slideUp();
				mark=1;
			}
		});
	});

});
//nav
$(function(){
	$('.nav_title a').hover(
		function() {
			$('.nav_menu').show();
			$(this).addClass('lanse').removeClass('color3').addClass('color1');
			$('.nav_menu div').eq($(this).index()).find('ul li a').removeClass('color2').addClass('color1');
			$('.nav_menu div').eq($(this).index()).addClass('lanse1');
		},
		function() {
			$(this).removeClass('lanse').removeClass('color1').addClass('color3');
			$('.nav_menu div').eq($(this).index()).find('ul li a').removeClass('color1').addClass('color2');
			$('.nav_menu div').eq($(this).index()).removeClass('lanse1');
		}
	);
	$('.nav_bar').hover(
		function() {
		},
		function() {
			$('.nav_menu').hide();
		}
	);
	$('.menu').hover(
		function() {
			$(this).addClass('lanse1');
			$(this).find('ul li a').removeClass('color2').addClass('color1');
			$('.nav_title a').eq($(this).index()).addClass('lanse').removeClass('color3').addClass('color1');
		},
		function() {
			$(this).removeClass('lanse1');
			$(this).find('ul li a').removeClass('color1').addClass('color2');
			$('.nav_title a').eq($(this).index()).removeClass('lanse').removeClass('color1').addClass('color3');
		}
	);
	
	
	
//	banner
jQuery(".slideBox_banner").slide({mainCell:".bd ul",effect:"leftLoop",autoPlay:true,delayTime:800,interTime:5000});
});

function test1 () {
	var tempStr = document.getElementById('test').value;
	if (tempStr === "请输入关键字") {
		document.getElementById('test').value = "";
	}
}

function test2 () {
	var tempStr = document.getElementById('test').value;
	if (tempStr === "") {
		document.getElementById('test').value = "请输入关键字";
	}
}

