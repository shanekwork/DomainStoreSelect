$(document).ready(function(){
//	function getUrl(){
//	var first = "http://shop1.supportsolutions.ie/login.aspx?Email=";
//	var name = $(".name").value;
//	var second = "&amp;Password=";
//	var pass = $(".password").value;
//	var newUrl = first + name + second + pass;
//	window.location.href = newUrl;
//	}
//http://shop1.supportsolutions.ie/login.aspx?
	

		//$("#select").change(function(){
		//	var action = $(this).val == "shop3";
		//	$("#log").attr("action", "http://shop1.supportsolutions.ie/login.aspx?");
		//})


		$('form').submit(function(){
 			var formAction = $("#select").val();
  		$("#log").attr("action", "http://" + formAction + ".supportsolutions.ie/login.aspx?");
		}); 

		
})
