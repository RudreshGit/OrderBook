$(document).ready(function(){
	
$("#restaurantProfileUpdateDiv").hide();
	$("#btnrestaurantNameDivSubmit").click(function(){
		
		
		btnrestaurantNameDivSubmitClicked();
		
	});
	
	$("#btnRestaurnatProfileUpdateSubmit").click(function(){
		
		btnRestaurnatProfileUpdateSubmitClicked();
	});
	
});

function btnrestaurantNameDivSubmitClicked(){
	
	
	var name = $("#restaurantProfileName").val().trim();
	
	localStorage.setItem("resProfileName",name);
	if(name == null || restaurantProfileName.length == 0){
		
		
		alert("Please enter the restaurant name");
		$("#restaurantProfileName").focus();
	}else{
		$("#btnrestaurantNameDivSubmit").text("Loading...");
		$.ajax({
			
			url:"reastaurantProfileInput",
			type:"POST",
			data:{
				
				"resName":name
			},
			success:function(responseData,textStatus){
				$("#btnrestaurantNameDivSubmit").text("Submit");
				
				handleRestaurantProfileDetails(responseData);
			},
			
			error:function(responseData){
				$("#btnrestaurantNameDivSubmit").text("Submit");
				
				alert("Sorry error contacting back end server");
			}
			
		});
		
	}
	
	
}


function handleRestaurantProfileDetails(responseData){
	
	var response = jQuery.parseJSON(responseData);
	
	if(response.result){
		var names=localStorage.getItem("resProfileName",name);
		$("#restaurantProfileUpdateDiv").show();
		$("#restaurantContactNumber").val(response.contact);
		$("#restaurantAddress").val(response.address);
		$("#restaurantPincode").val(response.pincode);
		$("#restaurantEmail").val(response.email);
		$("#restaurantDefaultAmount").val(response.amount);
		$("#restaurantKmAmount").val(response.extraAmount);
		$("#restaurantnameupdate").val(names);
						
	}else{
		
		alert("sorry could not find any restaurants in that name.");
	}
}

function btnRestaurnatProfileUpdateSubmitClicked(){
	
	
	var contact=$("#restaurantContactNumber").val();
	var address=$("#restaurantAddress").val();
	var pincode=$("#restaurantPincode").val();
	var email=$("#restaurantEmail").val();
	var amount=$("#restaurantDefaultAmount").val();
	var kmAmount=$("#restaurantKmAmount").val();
	var restaurantname=$("#restaurantnameupdate").val().trim();
	
	if(contact == null || contact.length == 0){
		
		alert("Please enter the restaurant contact number").
		$("#restaurantContactNumber").focus();
	}else if(address == null || address.length == 0){
		
		alert("Please enter the Restaurant address");
		$("#restaurantAddress").focus();
	}else if(pincode == null || pincode.length == 0){
		
		alert("Please enter the pincode");
		$("#restaurantPincode").focus();
	}else if(email == null || email.length == 0){
		alert("Please enter the email");
		$("#restaurantEmail").focus();
	}else if(amount == null || amount.lenght == 0){
		alert("Please enter the amount");
		$("#restaurantDefaultAmount").focus();
	}else if(kmAmount == null || kmAmount.length == 0){
		
		alert("Please enter the amount per km");
		$("#restaurantKmAmount").focus();
	}else
		
	/*	var name = localStorage.getItem("resProfileName");
	*/	$("#btnRestaurnatProfileUpdateSubmit").text("Loading..");
		$.ajax({
			
			url:"updateRestProfile",
			type:"POST",
			data:{
				
				"contact":contact,
				"address":address,
				"pincode":pincode,
				"email":email,
				"amount":amount,
				"kmAmount":kmAmount,
				"name" : restaurantname
				
			},
			
			success:function(responseData,textStatus){
				$("#btnRestaurnatProfileUpdateSubmit").text("Submit");
				
				handleResProfileUpdate(responseData);
			},
			error:function(responseData){
				$("#btnRestaurnatProfileUpdateSubmit").text("Submit");
				
				alert("Error contacting back end server");
			}
		});

}

function handleResProfileUpdate(responseData){
	
	var response = jQuery.parseJSON(responseData);
	
	if(response.result){
		
		alert("The details has been uploaded");
		
		$("#restaurantContactNumber").val("");
		$("#restaurantAddress").val("");
		$("#restaurantPincode").val("");
		$("#restaurantEmail").val("");
		$("#restaurantDefaultAmount").val("");
		$("#restaurantKmAmount").val("");
		$("#restaurantnameupdate").val("");

	}else{
		
		alert("sorry could not updated.Please check the restaurant name");
	}
}