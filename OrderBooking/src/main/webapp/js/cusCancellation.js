$(document).ready(function(){		
	$("#otpDiv").hide();
	 $("#btnAddToSdcsMoney").hide();
	$("#btnCancellationSubmitDiv").hide();
	
	/*$("#btnCancellationSubmit").click(function(){
		$("#frmCancellation").submit();
	});*/
	
	$("#cusCancellation").click(function(){
		
		$("#otpDiv").hide();
		$("#cancellationDiv").show();
	});
	
	$("#btnCancellation").click(function(){
		
	
		var bookingId = $("#cancellationInput").val().trim();
		
		localStorage.setItem("booking_id",bookingId);
		
		if(bookingId == null || bookingId.length==0){
			alert("Please enter the booking id");
			$("#cancellationInput").focus();
		}else
			$("#btnCancellation").text("Loading");
			
			$.ajax({
				url:"webCancellation",
				type:"POST",
				data :{
					
					"bookingId" :bookingId
					
				},
                success : function(responseData, textStatus) {
                	$("#btnCancellation").text("submit");
				handleCancellation(responseData);
				
				
                },
				
				error : function(responseData , textStatus){
					$("#btnCancellation").text("submit");
					alert("Sorry could not cancel due to some internal error.Please try again later");
				}
                
                
				
			});
		
	});
	
	$("#btnOtpSubmit").click(function(){
		
		btnOtpClicked();
	});
	
	
});

function handleCancellation(responseData){
	
	var cancellation = jQuery.parseJSON(responseData);
	
	if(cancellation.result){
		$("#cancellationDiv").hide();
		$("#otpDiv").show();
		var otp = cancellation.payId;
		
		localStorage.setItem("otp",otp);
		
		
	}else
		
		alert("please provide valid details.");
		
}


function btnOtpClicked(){
	
	var reason = $("#selectReason").val();
	var enteredotp = $("#otpInput").val().trim();
	var bookingId = localStorage.getItem("booking_id");
	var otp = localStorage.getItem("otp");
	if(reason == null || reason.length == 0){
		
		alert("Please select a reason for cancellation.");
	}else if(enteredotp == null || enteredotp.length==0 ){
		alert("Please select OTP you got to the Registered phone number.");
		$("#otpInput").focus();
	}else if(otp != enteredotp){
		
		alert("Sorry the otp entered din't match.Please provide valid OTP.");
		$("#otpInput").focus();
	}
	$("#btnOtpSubmit").text("Loading...");
	
	$.ajax({
		url:"cancelWebOrder",
		type:"POST",
		data :{
			
			"bookingId" :bookingId,
			"reason":reason
			
		},
        success : function(responseData, textStatus) {
        	$("#btnOtpSubmit").text("submit");
		
		handleCancellationRes(responseData);
		
		
        },
		
		error : function(responseData , textStatus){
			
			alert("Sorry could not cancel due to some internal error.Please try again later");
		}
        
        
		
	});
}

function handleCancellationRes(responseData){
	
	var can = jQuery.parseJSON(responseData);
	
	if(can.result){
		
		$("#cancelAccountId").val(can.accountId);
		$("#cancelSecretId").val(can.SecretKey);
		$("#cancelAmount").val(can.amount);
		$("#cnacelPaymentId").val(can.paymentId);
		
		localStorage.setItem("cancelAccount",can.accountId);
		localStorage.setItem("cancelsecreatKey",can.SecretKey);
		localStorage.setItem("cancelAmount",can.amount);
		localStorage.setItem("cancelPayId",can.paymentId);
		 var userId = localStorage.getItem("customer_userid");
		   
		   if(userId != null && userId != "0"){
		    
		    
		    $("#btnAddToSdcsMoney").show();
		   }
		$("#otpDiv").hide();
		$("#btnCancellationSubmitDiv").show();
		
		
	}else{
		
		alert("Sorry could not cancel please try again later.");
	}
}

function btnCancellationBackClicked(){
	
	$("#cancellation").show();
	$("#btnCancellationSubmitDiv").hide();
	
}

function btnCancellationDivOtpClicked(){
	
	$("#otpDiv").hide();
	$("#cancellationDiv").show();
}

function btnAmntAddToSdcsMoney(){
	 
	 
	 var bookingId = localStorage.getItem("booking_id");
	 var canAmount = localStorage.getItem("cancelAmount");
	 
	 if(bookingId == null || bookingId.length == 0){
	  alert("Sorry could not cancel.Please try again later.");
	 }else if(canAmount == null || canAmount.length == 0){
	  alert("Sorry could not cancel.Please try again later.");
	 }else{
	  
	   var userId = localStorage.getItem("customer_userid");
	 $.ajax({
	  url:"addAmountToSdcsMoney",
	  type:"POST",
	  data:{
	   
	   "bookingId" : bookingId,
	   "canAmount" : canAmount,
	   "userId" : userId
	  },
	  success:function(responseData,textStatus){
	   
	   handlesdcsMoneyAdditionResponse(responseData);
	  },
	  error:function(responseData){
	   
	   alert("Error contacting back end server");
	  }
	  
	 });
	 }
	}

	function handlesdcsMoneyAdditionResponse(responseData){
	 
	 var response = jQuery.parseJSON(responseData);
	 
	 if(response.result){
	  
	   $("#cusWelcomeName").text("Welcome"+" "+response.balance);
	   
	   alert("Your cancellation amount has been added to sdcs money.");
	   
	  
	   $("#btnCancellationSubmitDiv").hide();
	   $("#cancellationDiv").show();
	 }
	}