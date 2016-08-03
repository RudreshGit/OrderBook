$(document).ready(function(){
	
	$("#btnHotelRegistration").click(function(){
		
		btnHotelRegistrationClicked();
		
	});
});

function btnHotelRegistrationClicked(){
	
	var reistrationName = $("#restaurantRegistrationName").val();
	var reistrationAddress = $("#restaurantRegistrationAddress").val();
	var reistrationPincode = $("#restaurantRegistrationPincode").val();
	var reistrationContactNumber = $("#restaurantRegistrationContactNumber").val();
	var reistrationEmailId = $("#restaurantRegistrationEmailId").val();
	/*var reistrationlat = $("#restaurantRegistrationlatitude").val();
	var reistrationlong = $("#restaurantRegistrationlongitude").val();*/
	var registerAmount = $("#restaurantRegistrationAmount").val();
	var reistrationPassword = $("#restaurantRegistrationPassword").val();
	var registrationExtraAmount = $("#restaurantRegistrationExtraAmount").val();
	var area = $("#hotelAreaSelection").val();
	 
	
	var geocoder = new google.maps.Geocoder();
	var address = reistrationAddress;

	geocoder.geocode( { 'address': address}, function(results, status) {

	  if (status == google.maps.GeocoderStatus.OK) {
	    var latitude = results[0].geometry.location.lat();
	    var longitude = results[0].geometry.location.lng();
	    
	  } 

	 			
	if(reistrationName == null || reistrationName.length == 0){
		
		alert("Please Enter Restaurant Name");
		
		$("#restaurantRegistrationName").focus();
	}else if(reistrationAddress == null || reistrationAddress.length == 0){
		
		alert("Please Enter Restaurant Address");
		
		$("#restaurantRegistrationAddress").focus();
	}else if(reistrationPincode == null || reistrationPincode.length == 0){
		
		alert("Please Enter Restaurant Pincode");
		
		$("#restaurantRegistrationPincode").focus();
	}else if(reistrationContactNumber == null || reistrationContactNumber.length == 0){
		
		alert("Please Enter Restaurant Contact Number");
		
		$("#restaurantRegistrationContactNumber").focus();
	}else if(reistrationEmailId == null || reistrationEmailId.length == 0){
		
		alert("Please Enter Restaurant Email Id");
		
		$("#restaurantRegistrationEmailId").focus();
	}/*else if(reistrationlat == null || reistrationlat.length == 0){
		
		alert("Please Enter Restaurant Latitude");
		
		$("#restaurantRegistrationlatitude").focus();
	}else if(reistrationlong == null || reistrationlong.length == 0){
		
		alert("Please Enter Restaurant Longitude");
		
		$("#restaurantRegistrationlongitude").focus();
	}*/else if(reistrationPassword == null || reistrationPassword.length == 0){
		
		alert("Please Enter Restaurant Password");
		
		$("#restaurantRegistrationPassword").focus();
	}else if(registerAmount == null || registerAmount.length == 0){
		
		alert("Please Enter Restaurant's Default Amount");
		
		$("#restaurantRegistrationAmount").focus();
	}else if(registrationExtraAmount == null || registrationExtraAmount.length == 0){
		
		alert("Please Enter Restaurant's Default Amount For Extra Km Travelled");
		
		$("#restaurantRegistrationExtraAmount").focus();
	}else if(area == null || area.length == 0){
		
		alert("Please select the region area of the restaurant");
		
		$("#hotelAreaSelection").focus();
	}
	
	else{
		$("#btnHotelRegistration").text("Loading..");
		$.ajax({

			url : "RestaurantRegistration",
			type : "POST",
			data : {
				"reistrationName" : reistrationName,
				"reistrationAddress" : address,
				"pincode" :reistrationPincode,
				"reistrationContactNumber" : reistrationContactNumber,
				"emailId":reistrationEmailId,
				"reistrationPassword" : reistrationPassword,
				"amount" : registerAmount,
				"extraAmount" : registrationExtraAmount,
				"lat" : latitude,
				"long" : longitude,
				"area" : area
			},
			success : function(responseData, textStatus) {
				$("#btnHotelRegistration").text("Submit");
				
				handleDeliveryBoyResponce(responseData);
				
				
			},
			error : function(responseData) {
				
				$("#btnHotelRegistration").text("Submit");
				
				alert("Error contacting server.Please check your internet connection");
			}
		});
	}
	});
	}

function handleDeliveryBoyResponce(restaurantRegistrationresponseaData){
	
	var RegistrationDetails = jQuery.parseJSON(restaurantRegistrationresponseaData);
	
	if (RegistrationDetails.result) { // We got some courier history
		
		$("#restaurantRegistrationName").val("");
		$("#restaurantRegistrationAddress").val("");
		$("#restaurantRegistrationContactNumber").val("");
		$("#restaurantRegistrationlatitude").val("");
		$("#restaurantRegistrationlongitude").val("");
		$("#restaurantRegistrationAmount").val("");
		$("#restaurantRegistrationPassword").val("");
		$("#restaurantRegistrationConfirmPassword").val("");
		$("#restaurantRegistrationExtraAmount").val("");
		$("#restaurantRegistrationPincode").val("");
		$("#restaurantRegistrationEmailId").val("");
		
		
		var id = RegistrationDetails.RegisterId;
		alert("Registered SuccessFully.The Registration Id is "+id+".");
	} else { // We did not get any result for filter criteria
		alert("Your mobile number is registered already.Please try with different mobile number.");
	}
	
}
