$(document).ready(function(){
	
$("#btnRestaurantSubmit").click(function(){	
		btnRestaurantSubmitclicked();
		
	});

userId = localStorage.getItem("userId");

if(userId !="0" && userId != null){
	$("#restaurantsLoginDiv").hide();
	$("#restaurantBookingNavDiv").show();
	name = localStorage.getItem("name");
	 $("#restaurantName").text(name);
	 $("#ourContactDetails").text("For Quick Booking Please Contact 9535337626")
}else{
	
	$("#restaurantsLoginDiv").show();
	$("#restaurantBookingNavDiv").hide();
}


$("#restaurantLogout").click(function(){
	
	localStorage.setItem("userId","0");
	localStorage.setItem("name","0");
	localStorage.setItem("phone","0");
	localStorage.setItem("address","0");
	localStorage.setItem("lat","0");
	localStorage.setItem("long","0");
	$("#restaurantsLoginDiv").show();
	$("#restaurantBookingNavDiv").hide();
});

});

function btnRestaurantSubmitclicked(){
	
	var restaurantNumber = $("#restaurantUserName").val().trim();
	var restaurantPassword = $("#restaurantPassword").val().trim();
	
	
	if(restaurantNumber == null || restaurantNumber.length == 0){
		
		alert("Please Enter The Contact Number");
		$("#restaurantUserName").focus();
	}else if(restaurantPassword == null || restaurantPassword.length == 0){
		
		alert("Please Enter The Password");
		$("#restaurantPassword").focus();
	}else{
		$("#btnRestaurantSubmit").text("Loading..");
		/*$("#btnRestaurantSubmit").button("loading");*/
		$.ajax({

			url : "restaurantLogin",
			type : "POST",
			data : {
				"contactNumber" : restaurantNumber,
				"Password" : restaurantPassword
				
			},
			success : function(responseData, textStatus) {
				$("#btnRestaurantSubmit").text("Submit");
				
				handleRestaurantLogin(responseData);
				
				
			},
			error : function(responseData) {
				$("#btnRestaurantSubmit").text("Submit");
				
				alert("failure");
				/*$("#btnRestaurantSubmit").button("reset");*/
				
				showErrorMsg(SERVER_CONTACT_ERROR);
			}
		});

}
}


function handleRestaurantLogin(loginRestaurantresponseData){
	
	var restaurantLoginDetails = jQuery.parseJSON(loginRestaurantresponseData);
	/*$("#btnRestaurantSubmit").button("reset");*/

	if (restaurantLoginDetails.result) { // We got some courier history
		$("#restaurantUserName").val("");
		$("#restaurantPassword").val("");
		$("#restaurantsLoginDiv").hide();
		$("#restaurantBookingNavDiv").show();
		$("#bookDelBoyClear").tab('show');
		localStorage.setItem("userId",restaurantLoginDetails.user_id+"");
		localStorage.setItem("name",restaurantLoginDetails.full_name);
		localStorage.setItem("phone",restaurantLoginDetails.mobile);
		localStorage.setItem("address",restaurantLoginDetails.address);
		localStorage.setItem("lat",restaurantLoginDetails.lat);
		localStorage.setItem("long",restaurantLoginDetails.long);
		localStorage.setItem("amount",restaurantLoginDetails.amount);
		
		$("#idforpayment").hide();
		 name = localStorage.getItem("name");
		 $("#restaurantName").text(name);
		 $("#ourContactDetails").text("For Quick Booking Please Contact 9535337626")
		 
		 
	} else { // We did not get any result for filter criteria
		alert("Sorry Could Not Login.Please Check The Contact Number And Password.");
	}

}