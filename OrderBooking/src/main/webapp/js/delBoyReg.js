$(document).ready(function(){
	
	$("#btndeliveryBoyRegistration").click(function(){
		
		delBoyRegistrationClicked();
	});
	
});

function delBoyRegistrationClicked(){
	
	var name = $("#delBOyRegistrationName").val().trim();
	
	var addressa = $("#delBOyRegistrationAddress").val().trim();
	var pincode = $("#delBoyRegistrationPincode").val().trim();
	var contact = $("#delBoyRegistrationContactNumber").val().trim();
	var email = $("#delBoyRegistrationEmailId").val().trim();
	var availTime = $("#delBoyRegistrationAvailableTime").val().trim();
	var password = $("#delBoyRegistrationPassword").val().trim();
	var dlNo = $("#restaurantRegistrationDlNo").val().trim();
	//this is the extra added code 
	var areaname=$("#restaurantRegistrationdarea").val().trim();
	var scootertype=$("#delBoyRegistrationscootertype").val().trim();
	var scooternumber=$("#delBoyRegistrationscooternumber").val().trim();
	
	
	/*var geocoder = new google.maps.Geocoder();
	var address = addressa;
*/
	/*geocoder.geocode( { 'address': address}, function(results, status) {

	  if (status == google.maps.GeocoderStatus.OK) {
	    var latitude = results[0].geometry.location.lat();
	    var longitude = results[0].geometry.location.lng();
	    
	  }*/
	
	if(name != null && name.length == 0){
		alert("Please delivery boy name.");
		$("#delBOyRegistrationName").focus();
		
	}else if(addressa != null && addressa.length == 0){
		alert("Please delivery boy address.");
		$("#delBOyRegistrationAddress").focus();
		
	}else if(pincode != null && pincode.length == 0){
		alert("Please pincode.");
		$("#delBoyRegistrationContactNumber").focus();
		
	}else if(contact != null && contact.length == 0){
		alert("Please delivery boy contact number.");
		$("#btndelBoyRegistration").focus();
		
	}else if(email != null && email.length == 0){
		alert("Please delivery boy email id.");
		$("#delBoyRegistrationEmailId").focus();
		
	}else if(availTime != null && availTime.length == 0){
		alert("Please delivery boy available time.");
		$("#delBoyRegistrationAvailableTime").focus();
		
	}else if(password != null && password.length == 0){
		alert("Please delivery boy password.");
		$("#delBoyRegistrationPassword").focus();
		
	}else if(dlNo != null && dlNo.length == 0){
		alert("Please enter drivimg licence number.");
		$("#restaurantRegistrationDlNo").focus();
	}else if(areaname != null && areaname.length == 0){
		alert("Please delivery boy available time.");
		$("#restaurantRegistrationdarea").focus();
		
	}else if(scootertype != null && scootertype.length == 0){
		alert("Please delivery boy password.");
		$("#delBoyRegistrationscootertype").focus();
		
	}else if(scooternumber != null && scooternumber.length == 0){
		alert("Please enter drivimg licence number.");
		$("#delBoyRegistrationscooternumber").focus();
		
	}else{
		$("#btndeliveryBoyRegistration").text("Loading");	
		$.ajax({
			url:"registerDeliveryBoy",
			type : "POST",
			data:{
				
		"fullName":name,
		"address":addressa,
		"pincode":pincode,
		"mobileNumber":contact,
		"emailAddress":email,
		"drivingLicence" : dlNo,
		"lat":"0.00",
		"lon":"0.00",
		"availTime":availTime,
		"accessKey":password,
		"area":areaname,
		"scootertype":scootertype,
      "scooternumber":scooternumber	
      },
		success: function(responseData, textStatus) {
			$("#btndeliveryBoyRegistration").text("submit");
			handleDelBoyRegistration(responseData);
		},
			error:function(responseData) {
				$("#btndeliveryBoyRegistration").text("submit");
					alert("Error contacting server");
			}
		});
	}
}


function handleDelBoyRegistration(responseData){
	
	var registerResponse = jQuery.parseJSON(responseData);
	
	var status = registerResponse.result;
	     if(status){
		$("#delBOyRegistrationName").val("");		
		$("#delBOyRegistrationAddress").val("");
		$("#delBoyRegistrationPincode").val("");
		$("#delBoyRegistrationContactNumber").val("");
		$("#delBoyRegistrationEmailId").val("");
		$("#delBoyRegistrationlatitude").val("");
		$("#delBoyRegistrationlongitude").val("");
		$("#delBoyRegistrationAvailableTime").val("");
		$("#delBoyRegistrationPassword").val("");
		$("#delBoyRegistrationConfirmPassword").val("");
		$("#restaurantRegistrationDlNo").val("");
		$("#delBoyRegistrationscooternumber").val("");
		var mes = registerResponse.message;
		var id= registerResponse.user_id;
		alert(mes+" "+"The delivery boy id is"+" "+id);
	}else{
		var mes = registerResponse.message;
		alert(mes);
	}
}