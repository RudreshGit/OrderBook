$(document).ready(function(){
	
	$("#regclear").click(function(){
		$("#customerRegistrationName").val("");
	/*	$("#customerRegistrationAddress").val("");
		$("#customerRegistrationPincode").val("");*/
		$("#customerRegistrationContactNumber").val("");
		$("#customerRegistrationEmailId").val("");
		$("#customerRegistrationPassword").val("");
		$("#customerRegistrationConfirmPassword").val("");
	});
	$("#btnCustomerRegistration").click(function(){
		customerRegistrationClicked();
	});
	});



function customerRegistrationClicked(){
	var name = $("#customerRegistrationName").val().trim();
/*	var address1 = $("#customerRegistrationAddress").val().trim();
	var pincode = $("#customerRegistrationPincode").val().trim();
	*/var contact = $("#customerRegistrationContactNumber").val().trim();
	var email = $("#customerRegistrationEmailId").val().trim();
	var password = $("#customerRegistrationPassword").val().trim();
	var confirmPassword = $("#customerRegistrationConfirmPassword").val().trim();
	
	/*var geocoder = new google.maps.Geocoder();
	var address = address1;

	geocoder.geocode( { 'address': address}, function(results, status) {

	  if (status == google.maps.GeocoderStatus.OK) {
	    var latitude = results[0].geometry.location.lat();
	    var longitude = results[0].geometry.location.lng();
	    
	  } */
	
	
	
	  if(name == null || name.length == 0){  
	alert("Please enter the name");
		  $("#customerRegistrationName").focus();
		/* }else if(address1 == null || address1.length == 0){
		  alert("Please enter the address");
		  $("#customerRegistrationAddress").focus();
		 }else if(pincode == null || pincode.length == 0){
		   alert("Please enter the pincode");
		  $("#customerRegistrationPincode").focus();
		 }else if(pincode.length != 6){		  
		  alert("Pin code must be of 6 digits");
		  $("#customerRegistrationPincode").focus();
	*/	 }else if(contact == null || contact.length == 0){  
		  alert("Please enter your mobile Number");
		  $("#customerRegistrationContactNumber").focus();
		 }else if(contact.length < 10){  
		  alert("Mobile number must be of 10 digits");
		  $("#customerRegistrationContactNumber").focus();
		 }else if(contact.length >10){  
			  alert("Mobile number must be of 10 digits");
			  $("#customerRegistrationContactNumber").focus();
			   
		 }else if(email == null || email.length == 0){
		  
		  alert("Please enter the email Address");
		  $("#customerRegistrationEmailId").focus();
		 }else if(password == null || password.length == 0){
		  
		  alert("Please enter the password");
		  $("#customerRegistrationPassword").focus();
		 }else if(password.length < 4){
		  
		  alert("Password must be atleast 4 digit");
		  $("#customerRegistrationPassword").focus();
		 }else if(confirmPassword == null || confirmPassword.length == 0){
		  
		  alert("Please enter confirm password");
		  $("#customerRegistrationConfirmPassword").focus();
		 }else if(password != confirmPassword){
		
		  alert("Password din't match.");
		  $("#customerRegistrationConfirmPassword").focus();
		 }else{
		$("#btnCustomerRegistration").text("Loading...");
		$.ajax({

			url : "authenticateRegistration",
			type : "POST",
			data : {
				/*"deliveryBoyDate" : historyInput,*/
				"name"  :  name,
				"address"  :  "Not Assigned",
				"pincode"  :  "560072",
				"contact"  :  contact,
				"email"    :  email,
				"lat"      :  "1",
				"lon"      : "1",
				"password" :  password
				
			},
			success : function(responseData, textStatus) {
				$("#btnCustomerRegistration").text("submit");
				handleCustomerCourierBookingCompleteHistory(responseData);
				
				
			},
			error : function(responseData) {
				$("#btnCustomerRegistration").text("submit");
				alert("Failed To Register Due To Some Internal Error.");
							
				
			}
		});

	}
	
}

function handleCustomerCourierBookingCompleteHistory(responseData){
	
	var registerResponce = jQuery.parseJSON(responseData);
	
	if(registerResponce.result){
	$("#customerRegistrationName").val("");
/*	$("#customerRegistrationAddress").val("");
	$("#customerRegistrationPincode").val("");*/
	$("#customerRegistrationContactNumber").val("");
	$("#customerRegistrationEmailId").val("");
	$("#customerRegistrationPassword").val("");
	$("#customerRegistrationConfirmPassword").val("");
	$("#customerLoginName").val(registerResponce.name);
	$("#customerLoginPassword").focus();
	var mes= registerResponce.message;
	var id = registerResponce.user_id;

	alert(mes+""+"The customer id is"+" "+id);
	
	 $("#customerLogin").tab('show');
}else{
	var mes= registerResponce.message;
	alert(mes);
	$("#customerRegistrationContactNumber").val("");
	$("#customerRegistrationContactNumber").focus();
}
	
}

	
