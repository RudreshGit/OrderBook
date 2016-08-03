/**
 * Scripts used for login function
 */

$(document).ready(function() {
	$("#btnSignIn").click(function(){
		validateSignInFormFields();
	});
});

// for forget password

/**
 * This method is called when user clicks on Sign In button
 * Sign In form fields are validated
 */
function validateSignInFormFields() {
	var strUsername = $("#txtLoginUsername").val().trim();
	var strPassword = $("#txtLoginPassword").val().trim();

	if(strUsername == null || strUsername.length == 0) {
		showErrorMsg(EMPTY_USER_NAME);
		$("#txtLoginUsername").focus();
	} else if(strPassword == null || strPassword.length == 0) {
		showErrorMsg(EMPTY_PASSWORD);
		$("#txtLoginPassword").focus();
	} else {
		$("#btnSignIn").button("loading");
		$.ajax({
			url: "login",
			type: "POST",
			data: {
				"username" : strUsername,
				"password" : strPassword
			},
			success: function(responseData, textStatus) {
				handleSignInData(responseData);  
		    },
		    error : function(responseData) {
		    	$("#btnSignIn").button("reset");
		    	showErrorMsg(SERVER_CONTACT_ERROR);
		    }
				
		});
	}
}

/**
 * This method is called when sign in response is received from server
 */
function handleSignInData(signInResponseData) {
	$("#btnSignIn").button("reset");
	var signInData = jQuery.parseJSON(signInResponseData);
	if(signInData.result) { // Log in successful so hide sign in and sign up options
		
		$("#login").hide();
		$("#signUp").hide();
		$("#logout").show();
		$("#profile").show();
		localStorage.setItem("userId",signInData.user_id+"");
		localStorage.setItem("fullName",signInData.full_name);
		localStorage.setItem("email",signInData.email);
		localStorage.setItem("mobile",signInData.mobile);
		$("#profileName").text(signInData.full_name);
		$("#profileMobileNumber").text(signInData.mobile);
		$("#profileEmail").text(signInData.email);
		
		var pageToBeShownAfterLogin = localStorage.getItem("pageToBeShownAfterLogin");
		
		if(pageToBeShownAfterLogin != undefined && pageToBeShownAfterLogin == "booking") {
			localStorage.setItem("pageToBeShownAfterLogin", "booking");
			quickBookingClicked();
		} else if(pageToBeShownAfterLogin != undefined && pageToBeShownAfterLogin == "cancellation") {
			localStorage.setItem("pageToBeShownAfterLogin", "booking");
			quickCancellationClicked();
		} else if(pageToBeShownAfterLogin != undefined && pageToBeShownAfterLogin == "history") {
			localStorage.setItem("pageToBeShownAfterLogin", "booking");
			quickHistoryClicked();
		} else if(pageToBeShownAfterLogin != undefined && pageToBeShownAfterLogin == "changeOffice") {
			localStorage.setItem("pageToBeShownAfterLogin", "booking");
			quickChangeOfficeClicked();
		} else {
			localStorage.setItem("pageToBeShownAfterLogin", "booking");
			quickBookingClicked();
		}
		
		
	} else { // Invalid login credentials
		showErrorMsg(signInData.message);
	}
}



	

