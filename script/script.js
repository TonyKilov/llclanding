$(document).ready(function() {

	$("#checkbox").click(function(){


		if($('#checkbox').prop('checked')) {
			$(".button_form").css("opacity","1");
			$(".button_form").prop("disabled", false);
			$(".button_form > input").show(100);	
		} 
		else {
			$(".button_form").css("opacity", "0");
			$(".button_form").prop("disabled",true);
			$(".button_form > input").hide(100);
		  
		}
	});


	$(document).ready(function() {
 
		$('a[href^="#"]').click(function(){
		        var el = $(this).attr('href');
		        $('body').animate({
		            scrollTop: $(el).offset().top}, 1500);
		        return false; 
		});
		    
	});
});