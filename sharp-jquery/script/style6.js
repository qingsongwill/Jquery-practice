$(function(){
	$('.submit').click(function(){
		alert("wfewfe");
		$('#resText').load("http://gank.io/api/data/Android/10/1",callBack);
	});

	var callBack = function(){
		$("#resText").css("background","red");
	}
})