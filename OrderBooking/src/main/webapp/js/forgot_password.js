
 $(document).ready(function() {
	$("#forgotPasswordInput").val("");
	$("#btnforgotPassworword").click(function(){		
		newPassword();
	});
	
});
function newPassword(){
	
	var strEmail=$("#forgotPasswordInput").val().trim();
	if(strEmail != null && strEmail.length != 0) {
		$("#btnforgotPassworword").button("loading");
		$.ajax({
			url: "forgotPassword",
			type: "POST",
			data: {
				"email" : strEmail
			},
			success: function(responseData, textStatus) {
				$("#btnforgotPassworword").button("reset");
				handleForgotPasswordData(responseData);  
		    },
		    error : function(responseData) {
		    	$("#btnforgotPassworword").button("reset");
		    	showErrorMsg(SERVER_CONTACT_ERROR);
		    }
		});
	} 
	
}

/**
 * This method is called when forgot password response is received from server
 */
function handleForgotPasswordData(forgotPwdResponseData) {
	var forgotPasswordData = jQuery.parseJSON(forgotPwdResponseData);
	$("#forgotPasswordModal").hide();
	$("#forgotPasswordInput").val("");
	$("#btnCloseForgotPwdModel").trigger("click");
	if(forgotPasswordData.status) { // 
		$("#successMsgContainer").show().delay(5000).fadeOut();
		$("#promptMsg").text(FORGOT_PWD_SENT + " " + forgotPasswordData.email);
	} else { // Invalid login credentials
		showErrorMsg(FAILED_FORGOT_PWD);
	}
}

