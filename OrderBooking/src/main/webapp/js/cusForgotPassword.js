$(document).ready(function(){
	
	
	$("#forgotpasswordBackBtn").click(function(){
		
		$("#cusForgotPassword").hide();
		$("#customerLoginPage").show();
	});
	
	$("#btnCusForgotPassword").click(function(){
	
		var contact = $("#cusForgotPasswordInput").val().trim();
		
		if(contact == null || contact.length == 0){
			
			alert("Please enter the registered mobile number");
			$("#cusForgotPasswordInput").focus();
		}else
			
			$("#forgotpasswordBackBtn").text("Loading");
			$.ajax({
				
				url:"AUTHENTICATEPASS",
				type:"POST",
				data:{
					
					"contactNumber":contact
				},
				success:function(responseData,textStatus){
					$("#forgotpasswordBackBtn").text("submit");
					
					handleCustomerForgotPasswordResponse(responseData);
				},
				error:function(responseData){
					$("#forgotpasswordBackBtn").text("submit");	
					alert("Error contacting back end server");
				}
			});
	});
	
	
	function handleCustomerForgotPasswordResponse(responseData){
		
		var response = jQuery.parseJSON(responseData);
		
		if(response.result){
			
			$("#cusForgotPasswordInput").val("");
			alert("The pass word has been sent to your registered mobile number.");
			
			$("#cusForgotPassword").hide();
			$("#customerLoginPage").show();
		}else{
			
			alert("Entered number is not registered with sdcs.");
		}
	}
});

