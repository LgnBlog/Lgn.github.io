    
$(function(){
	var i = 0;
	var timer;//轮播
    $("#igs").hover(function(){$(".but").show();},function(){$(".but").hide();});//鼠标放到图片上轮播按钮显示
    
	$(".ig").eq(0).show().siblings().hide();//siblings()找到$(".ig").eq(0)的兄弟元素
	
    ShowTime();
	$(".tab").hover(function(){
     i=$(this).index();//获取当前鼠标放到的索引
     Show();
     clearInterval(timer);//清除轮播
	},function(){
		ShowTime();
	})

	$(".but1").click(function(){
		clearInterval(timer);
		if(i==0){
			i=6;
		}
		i--;
		Show();
		ShowTime()
	})

	$(".but2").click(function(){
		clearInterval(timer);
		if(i==5){
			i=-1;
		}
		i++;
		Show();
		ShowTime()
	})

	function Show(){
	 $(".ig").eq(i).fadeIn(300).siblings().fadeOut(300);
     $(".tab").eq(i).addClass("bg").siblings().removeClass("bg");
	}

	function ShowTime(){
	  timer = setInterval(function(){//函数表示每隔多久执行一次
      i++;
      if(i==6){
    	i = 0;
    }

     Show();

	},2000);
	}

})
	