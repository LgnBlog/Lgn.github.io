    
$(function(){
	
	/*##########侧面导航栏############*/
	$(document).ready(function(){
		 $("#log #loga").click(function(){
		 	$("#sidebar").css("top",0);
		 	/*mask.fadeOut();*/
		 	$(".mask").fadeIn();
		 })
		 
		 $(".mask").click(function(){
		 	var sidebar =$("#sidebar");
		 	sidebar.css("top",-sidebar.height());
		 	$(".mask").fadeOut();
		 })
  });

})
	