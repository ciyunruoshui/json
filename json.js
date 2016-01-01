$(function(){
	$("#button1").bind("click",function(){
		var $this=$(this);
		$.getJSON("sport.json",function(data){
			//$this.attr("disabled","true");
			$.each(data, function (index,sport) {
                $("ul").append("<li>" + sport["name"]+"："+sport["info"]+ "</li>");
		});
	});
});
})