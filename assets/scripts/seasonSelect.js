$(document).ready(function(){
	$("#s1").css('font-weight', 'bold');
	$("#s2").css('font-weight', 'normal')
	$("#s3").css('font-weight', 'normal')	
	$(".s1").show();
	$(".s2").hide();
	$(".s3").hide();
	$("#s1").click(function(){
		$("#s1").css('font-weight', 'bold');
		$("#s2").css('font-weight', 'normal')
		$("#s3").css('font-weight', 'normal')	
		$(".s1").show();
		$(".s2").hide();
		$(".s3").hide();
	});
	$("#s2").click(function(){
		$("#s1").css('font-weight', 'normal');
		$("#s2").css('font-weight', 'bold')
		$("#s3").css('font-weight', 'normal')	
		$(".s1").hide();
		$(".s2").show();
		$(".s3").hide();
	});
	$("#s3").click(function(){
		$("#s1").css('font-weight', 'normal');
		$("#s2").css('font-weight', 'normal')
		$("#s3").css('font-weight', 'bold')	
		$(".s1").hide();
		$(".s2").hide();
		$(".s3").show();
	});
});
