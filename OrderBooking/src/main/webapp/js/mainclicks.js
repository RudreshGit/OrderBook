$(document).ready(function(){
	hidealldivsinadmin();
	hideProfileUpdateDivs();
	$("#failAlert").hide();
	$("#successAlert").hide();
	$("#restaurantRegistration").show();
	$("#ccrangeselection").hide();
	
	hideallmaindivs();	
	$("#idforpayment").hide();
	var Id = localStorage.getItem("customer_userid");
	if(Id != 0 && Id!= null){
$("#afterNav").show();
$("#bookingpages").show();
	}else{
		$("#initialNav").show();
		$("#bookingpages").show();
		$("#customerBooking").show();
	
	}
	$("#export").click(function(){
		 var date = $("#couriersOnDateInput").val().trim();
		 var statuss="1";
		 if(date == null || date.length == 0){
		  
		  alert("Please enter the date");
		  $("#couriersOnDateInput").focus();
		 }else{
		 exportClicked(date,statuss);
		 }
		});
	
	
	$("#exportrangewise").click(function(){
		 var date = $("#admindatecouriers").val().trim();
		 var statuss="2";
		 if(date == null || date.length == 0){
		  
		  alert("Please enter the start date");
		  $("#admindatecouriers").focus();
		 }else{
		 exportClicked(date,statuss);
		 }
	});
	//this is for showing popular 
	 $("#popularcourierbookid").click(function(){
	  hideallmaindivs();
	  $("#courier_page").show();
	  });

	 $("#addmoneyidselected").click(function(){
	 $("#makepaymentfirstdiv").hide();
	  $("#makepaymentseconddiv").show();
	  });
	
	$("#firstPageContent").show();
	$("#firstPage").click(function(){
		hideallmaindivs();
		$("#firstPageContent").show();
		
		var Id = localStorage.getItem("customer_userid");
		if(Id != 0 && Id!= null){
			
			$("#cusLoginBooking").tab('show');
			
		}else{ 
			$("#customerBookingpages").tab('show');
			}
		
		
		 $("#bookDelBoyClear").tab('show');
					});
	$("#btncourierbookinglinks").click(function(){
		hideallmaindivs();
		$("#courier_page").show();
		 $("#secondPage").tab('show');
		 $("#bookDelBoyClear").tab('show');
		var Id = localStorage.getItem("customer_userid");
		
		if(Id != 0 && Id!= null){
			
			$("#cusLoginBooking").tab('show');
		}else{
		 $("#customerBookingpages").tab('show');
		}
		});
	$("#secondPage").click(function(){
		hideallmaindivs();
		$("#courier_page").show();
		 $("#customerLogin").tab('show');
					});
	
	$("#fifthpage").click(function(){
		hideallmaindivs();
		$("#direct_customer_payment").show();
		
	});
	$("#btnContactUs").click(function(){
		hideallmaindivs();
		$("#contact").show();
		 $("#customerLogin").tab('show');
		 $("#bookDelBoyClear").tab('show');
				});
	
	$("#btnOurService").click(function(){
		hideallmaindivs();
		$("#services").show();
					});

	$("#btnprivacyPolicy").click(function(){
		hideallmaindivs();
		$("#privacyPolicy").show();
					});
	
	$("#foodPage").click(function(){
		
		hideallmaindivs();
		$("#sdcssectiondiv").hide();
		$("#foodPageDiv").show();
	});
	$("#makePayment").click(function(){
		hideallmaindivs();
		$("#makePaymentDiv").show();
	});
	
	$("#btndisclaimerPolicy").click(function(){
		hideallmaindivs();
		$("#disclaimerPolicy").show();
					});
	
	
	$("#cccuscareexport").click(function(){
		$("#ccrangeselection").show();//this is for selecting rangewise in customer care tab
	});
	$("#btncancellationPolicy").click(function(){
		hideallmaindivs();
		$("#cancellationPolicy").show();
					});
	$("#btnshippingPolicy").click(function(){
		hideallmaindivs();
		$("#shippingPolicy").show();
					});
	$("#btnSiteMap").click(function(){
		hideallmaindivs();
		$("#flowChart").show();
					});
	$("#btnConditions").click(function(){
		hideallmaindivs();
		$("#terms").show();
					});
	$("#fourthPage").click(function(){
		hideallmaindivs();
		$("#admin").show();
					});
	$("#btngivelinkrestaurant").click(function(){
		hideallmaindivs();
		
		$("#thirdPage").tab('show');
		$("#bookDelBoyClear").tab('show');
		$("#restaurant-delivery-boy-booking").show();
		});

	$("#thirdPage").click(function(){
		hideallmaindivs();
		$("#restaurant-delivery-boy-booking").show();
					});
	
	$("#btnAboutUs").click(function(){
		hideallmaindivs();
		
		$("#aboutUs").show();
					});
	
	$("#uploadImage").click(function(){
		hideallmaindivs();
		
		$("#imageUploadingABCDDiv").show();
		
	});
	$("#deliveryboyid").click(function(){
		hidealldivsinadmin();
		$("#delBoyRegistration").show();
	});
	$("#hotelregid").click(function(){
		hidealldivsinadmin();
		$("#restaurantRegistration").show();
	});
	
	$("#hotelbookingid").click(function(){
		hidealldivsinadmin();
		$("#adminhotelbooking").show();
	});
	$("#courierbookingid").click(function(){
		hidealldivsinadmin();
		$("#adminCourierBooking").show();
	});
	
	$(".trackingid").click(function(){
		hidealldivsinadmin();
		$("#delBoyLocation").show();
	});
	
	$(".hotelcourierlistid").click(function(){
		hidealldivsinadmin();
		$("#bookedCouriers").show();
	});
	$(".courierlistid").click(function(){
		hidealldivsinadmin();
		$("#bookedCouriers").show();
	});
	
	
	$(".deliveryboyssearchid").click(function(){
		hidealldivsinadmin();
		$("#deliveryBoysSearch").show();
	});
	$(".restaurantsearchid").click(function(){
		hidealldivsinadmin();
		$("#restaurantsSearch").show();
	});
	
	$("#hotelenquiryid").click(function(){
		hidealldivsinadmin();
		$("#hotelEnquiry").show();
	});
	$("#deliveryboyenquiryid").click(function(){
		hidealldivsinadmin();
		$("#deliveryboyEnquiry").show();
	});
	$("#paymentid").click(function(){
		hidealldivsinadmin();
		$("#payadDiv").show();
		$("#navtabdivinpaymentadmin").show();
	});
	
	$("#deliveryboyprofileid").click(function(){
		hidealldivsinadmin();
		$("#delBoyProfile").show();
	});
	$("#restaurantprofileid").click(function(){
		hidealldivsinadmin();
		$("#restaurantProfile").show();
	});
	$("#bookingupdateid").click(function(){
		hidealldivsinadmin();
		$("#bookingUpdate").show();
	});
	
	$("#courierlistondateid").click(function(){
		hidealldivsinadmin();
		$("#couriersOnDate").show();
		$("#couriersOnDateInputDiv").show();
		$("#couriersOnDateInput").show();
	});
	$(".sdcsmoneyid").click(function(){//sdcs money show div
		hidealldivsinadmin();
		$("#sdcsMoneyDetailsAdmin").show();
	});
$("#sdcsofrs").click(function(){
	hidealldivsinadmin();
	$("#sdcsoffer").show();
});

$("#sdcscustomercareid").click(function(){
	hidealldivsinadmin();
	$("#customercaresection").show();
});

$("#customerLogin").click(function(){
	clearAllInputs();
	
});

$("#customerRegistration").click(function(){
	clearAllInputs();
});

$("#customerBookingpages").click(function(){
	clearAllInputs();
});

$("#customertracking").click(function(){
	clearAllInputs();
});

$("#cusCancellation").click(function(){
	clearAllInputs();
});
$("#cusLoginBooking").click(function(){
	clearAllInputs();
});
$("#cusFreshBookingList").click(function(){
	clearAllInputs();
});

$("#cusHistoryList").click(function(){
	clearAllInputs();
});
$("#customerCancellation").click(function(){
	clearAllInputs();
});
$("#cusSdcsMoney").click(function(){
	clearAllInputs();
});

$("#senderProfileDetails").click(function(){
	hideProfileUpdateDivs();
	$("#senderProfileDetailsDiv").show();
});

$("#Receiverdetailss").click(function(){
	hideProfileUpdateDivs();
	$("#ReceiverdetailssDiv").show();
});

$("#Bookingdetls").click(function(){
	hideProfileUpdateDivs();
	$("#BookingdetlsDiv").show();
});

$("#deliveryboyd").click(function(){
	hideProfileUpdateDivs();
	$("#deliveryboydDiv").show();
});

$("#custmerfeedback").click(function(){
	hideProfileUpdateDivs();
	$("#customerfeedbackeditsection").show();
});

$("#bookDelBoyClear").click(function(){
	
	clearDelboyBookingInputs();
});

$("#historyList").click(function(){
	
	clearDelboyBookingInputs();
});
$("#paymentDetails").click(function(){
	
	clearDelboyBookingInputs();
});
$("#restaurantLogout").click(function(){
	
	clearDelboyBookingInputs();
});

});

function exportClicked(date,statuss){
	 
	$("#exportrangewise").text("Loading!..");
	 $("#export").text("Loading!..");
	 $.ajax({
	  url:"exportExcel",
	  type:"POST",
	  data:{
	   "status":statuss,
	   "date":date
	  },
	  success:function(responseData,textStatus){
		  $("#exportrangewise").text("Export");
		  $("#export").text("Export");
	   handleExportREsponse(responseData);
	  },
	  error:function(responseData){
		  $("#exportrangewise").text("Export");
		  $("#export").text("Export");
	   alert("Sorry!..Error contacting backend server");
	  }
	 });
	 
	}

	/*function successMessage(message){
	 
	 $("#successAlert").show().delay(10000).hide(0);
	$("#successAlert").text(message);
	}

	function errorMessage(message){
	 
	$("#failAlert").show().delay(10000).hide(0);
	$("#failAlert").text(message);
	}
	*/

	function handleExportREsponse(responseData){	 
	 var response = jQuery.parseJSON(responseData);	 
	 if(response.status){
	  alert("The file exported to D drive.Please check.");
	 }else{
	  alert("Sorry!, No couriers found on this date.");
	 }
	}
function hideProfileUpdateDivs(){
	$("#customerfeedbackeditsection").hide();
	$("#senderProfileDetailsDiv").hide();
	$("#ReceiverdetailssDiv").hide();
	$("#BookingdetlsDiv").hide();
	$("#deliveryboydDiv").hide();
	
}


function hidealldivsinadmin(){
	$("#sdcsoffer").hide();
	$("#restaurantRegistration").hide();
	$("#delBoyRegistration").hide();
	$("#adminhotelbooking").hide();
	$("#adminCourierBooking").hide();
	$("#delBoyLocation").hide();
	$("#bookedCouriers").hide();
	$("#bookedCouriers").hide();
	$("#deliveryBoysSearch").hide();
	$("#restaurantsSearch").hide();
	$("#hotelEnquiry").hide();
	$("#deliveryboyEnquiry").hide();
	$("#payadDiv").hide();
	$("#delBoyProfile").hide();
	$("#restaurantProfile").hide();
	$("#bookingUpdate").hide();
	$("#couriersOnDate").hide();
	$("#sdcsMoneyDetailsAdmin").hide();
	$("#customercaresection").hide();
	
}
function hideallmaindivs(){
	$("#firstPageContent").hide();
	$("#courier_page").hide();
	$("#contact").hide();
	$("#services").hide();
	$("#privacyPolicy").hide();
	$("#direct_customer_payment").hide();
	$("#disclaimerPolicy").hide();
	$("#cancellationPolicy").hide();
	$("#restaurant-delivery-boy-booking").hide();
	$("#shippingPolicy").hide();
	$("#flowChart").hide();
	$("#terms").hide();
	$("#admin").hide();
	$("#aboutUs").hide();
	$("#makePaymentDiv").hide();
	$("#UploadImagePage").hide();
	$("#foodPageDiv").hide();
	$("#sdcssectiondiv").show();
	$("#direct_customer_payment").hide();
}

function paymentDetailsBackBtnClicked(){
	$("#payNowDiv").hide();
	$("#bookingPageAfterEstimation").show();
	$("#sdcsMoneyPayOption").hide();

	
}


function clearAllInputs(){
	
	$("#customerRegistrationName").val("");
	$("#customerRegistrationContactNumber").val("");
	$("#customerRegistrationEmailId").val("");
	$("#customerRegistrationPassword").val("");
	$("#customerRegistrationConfirmPassword").val("");
	$("#customerLoginPassword").val("");
	$("#cusForgotPasswordInput").val("");
	$("#sdcsAmountInput").val("");
	$("#pickUpArea").val("");
	$("#destinationArea").val("");
	$("#custbookinSenderName").val("");
	$("#customerbookingcontno").val("");
	$("#custbookingReceiverName").val("");
	$("#customerBookingReceiverNo").val("");
	$("#customerBookingEmail").val("");
	$("#senderPincode").val("");
	$("#sdcsMoneyOtp").val("");
	$("#trackingInput").val("");
	$("#cancellationInput").val("");
	

}

function clearDelboyBookingInputs(){
	
	$("#restaurantUserName").val("");
	$("#restaurantPassword").val("");
	$("#codamounts").val("");
	$("#restarurantreiverphone").val("");
	$("#codcontent").val("");
	
}

/*function successMessage(message){
	
	$("#successAlert").show().delay(10000).hide(0);
$("#successAlert").text(message);
}

function errorMessage(message){
	
$("#failAlert").show().delay(10000).hide(0);
$("#failAlert").text(message);
}
*/