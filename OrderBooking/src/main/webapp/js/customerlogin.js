$(document).ready(function(){
	$("#afterNav").hide();
	
	 $("#sdcsLoginWelcomeNoteDiv").hide();
	 $("#bookingpage2").hide();
	 $("#cusForgotPassword").hide();
	 var userId = localStorage.getItem("customer_userid");
	 if(userId != null && userId != 0){
		 
	        $("#customerLoginPage").hide();
	        $("#customerLoginBooking").show();
	        $("#initialNav").hide();
	        $("#afterNav").show();
	        $("#sdcsLoginWelcomeNoteDiv").show();
	        $("#cusWelcomeName").text("Welcome"+" "+ localStorage.getItem("cus_login_name"));
	        $("#sdcsMoneyAcountBalance").text("Your SDCS Money Balance is"+" "+localStorage.getItem("current_balance"));
	        
	       /* var name = localStorage.getItem("customer_name");
	        var address = localStorage.getItem("customer_address");
	        var pincode = localStorage.getItem("customer_pincode");
	        var phone = localStorage.getItem("customer_phone");
	        var email = localStorage.getItem("customer_email");
	        
	        $("#custbookinSenderName").val(name);
	        $("#customerbookingAdress").val(address);
	        $("#customerBookingPincode").val(pincode);
	        $("#customerbookingcontno").val(phone);
	        $("#customerBookingEmail").val(email);*/
	       
	        
	 }else{
		 $("#customerLoginBooking").hide();
		 $("#customerLoginPage").show();
		 $("#afterNav").hide();
		 $("#initialNav").show();
		
		 $("#sdcsLoginWelcomeNoteDiv").hide();
	        
	 }
	 
	 $("#forgotPaswordCusLink").click(function(){
		 
		 $("#customerLoginPage").hide();
		 $("#customerLoginBooking").hide();
		$("#cusForgotPassword").show();
	 });
	 
	 $("#btnCustomerLogin").click(function(){
		 $("#custbookinSenderName").val("");
	        $("#customerbookingAdress").val("");
	        $("#customerBookingPincode").val("");
	        $("#customerbookingcontno").val("");
	        $("#customerBookingEmail").val("");
	        $("#custbookingLatitude").val("");
	        $("#custbookingLongitude").val("");
		customerLoginClicked();
	});
	 
	 $("#customerLogout").click(function(){
		
		 localStorage.setItem("customer_userid","0");
		/* $("#customerLoginBooking").hide();*/
		/* $("#customerLoginPage").show();*/
		 $("#afterNav").hide();
		 $("#initialNav").show();
		 $("#customerLoginPage").show();
		 $("#customerLoginBooking").hide();
		 $("#custbookinSenderName").val("");
	        $("#customerbookingAdress").val("");
	        $("#customerBookingPincode").val("");
	        $("#customerbookingcontno").val("");
	        $("#customerBookingEmail").val("");
	        $("#custbookingLatitude").val("");
	        $("#custbookingLongitude").val("");
	        
	        clearAllInputs();
	        $("#sdcsLoginWelcomeNoteDiv").hide();
	 });
	 
});

function customerLoginClicked(){
	
	var userid = $("#customerLoginName").val().trim();
	var password = $("#customerLoginPassword").val().trim();
	
	if(userid == null || userid.length == 0){
		
		alert("Please enter registered phone number.");
		$("#customerLoginName").focus();
	}else if(password == null || password.length == 0){
		alert("Please Enter the password");
		$("#customerLoginPassword").focus();
	}else{
		 $("#btnCustomerLogin").text("Loading..");
		$.ajax({

			url : "customerLogin",
			type : "POST",
			data : {
				/*"deliveryBoyDate" : historyInput,*/
				"userName"  :  userid,
				"password"  :  password
				
			},
			success : function(responseData, textStatus) {
				 $("#btnCustomerLogin").text("submit");
				handleCustomerLoginResponce(responseData);
				
				
			},
			error : function(responseData) {
				alert("Sorry could not login due to some internal error.Please try again.");	
				 $("#btnCustomerLogin").text("Submit");
			}
		});
	}
}

function handleCustomerLoginResponce(responseData){
	var loginResponse = jQuery.parseJSON(responseData);
	
	if(loginResponse.result){
		
		var id=loginResponse.userId;
		
		var name=loginResponse.name;
		var address=loginResponse.address;
		var pincode=loginResponse.pincode;
		var phone=loginResponse.phone;
		var email=loginResponse.email;
		
		
		localStorage.setItem("customer_userid",id);
		localStorage.setItem("current_balance",loginResponse.mymoney);
		
        /*localStorage.setItem("customer_name",name);
        localStorage.setItem("customer_address",address);
        localStorage.setItem("customer_pincode",pincode);
        localStorage.setItem("customer_phone",phone);
        localStorage.setItem("customer_email",email);*/
		$("#sdcsLoginWelcomeNoteDiv").show();
		
        $("#cusWelcomeName").text("Welcome"+" "+name);
        
        localStorage.setItem("cus_login_name",name)
        $("#sdcsMoneyAcountBalance").text("Your SDCS Money Balance is"+" "+loginResponse.mymoney);
        
		$("#customerLoginName").val("");
		$("#customerLoginPassword").val("");
        $("#customerbookingformContainerDiv").show();
        $("#custbookinSenderName").val(loginResponse.name);
        $("#customerbookingAdress").val(loginResponse.address);
        $("#customerBookingPincode").val(loginResponse.pincode);
        $("#customerbookingcontno").val(loginResponse.phone);
        $("#customerBookingEmail").val(loginResponse.email);
        $("#custbookingLatitude").val(loginResponse.lat);
        $("#custbookingLongitude").val(loginResponse.long);
        $("#initialNav").hide();
        $("#afterNav").show();
        
        $("#cusLoginBooking").tab('show');
        
        $("#customerLoginPage").hide();
        $("#customerLoginBooking").show();
        
        /*$("#bookingpage").css("margin-top","200px");*/
        clearAllInputs();
       
	}else{
		var mes = loginResponse.message;
		alert(mes);
		/*$("#customerLoginName").val("");
	*/	$("#customerLoginPassword").val("");
		$("#customerLoginName").focus();
		
		
	}
}




