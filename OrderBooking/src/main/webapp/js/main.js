var totalSantaAmount="";
var name = "";
var userId = "";
$(document).ready(function() {
	$("#trackingDetailsTableContainer").hide();
	$("#afterPaymentTextDiv").hide();
	 $('[data-toggle="tooltip"]').tooltip();
	  userId = localStorage.getItem("userId");
	  
	  if(userId !="0" && userId != null){
	 name = localStorage.getItem("name");		
		$("#restaurantLogedInName").text(name);
	  }
		
		$("#privacyPolicy").click(function(){
			hideAllDiv();
			$("#privacypolicyDiv").show();
		});
		
		$("#disclaimerPolicy").click(function(){
			hideAllDiv();
			$("#disclaimerPolicyDiv").show();
		});
		
		$("#cancellationPolicy").click(function(){
			hideAllDiv();
			$("#cancellationPolicyDiv").show();
		});
		
		$("#shippingPolicy").click(function(){
			hideAllDiv();
			$("#shippingPolicyDiv").show();
		});
	 
	hideAllDiv();	
	$("#images11").hide();
	$("#hoverDivsanta1").show();
	$("#images12").hide();
	$("#hoverDivsanta2").show();
	$("#images41").hide();
	$("#hoverDivsanta41").show();	
	$("#images21").hide();
	$("#hoverDivsanta21").show();	
	$("#images22").hide();
	$("#hoverDivsanta22").show();
	$("#images42").hide();
	$("#hoverDivsanta42").show();	
	$("#images31").hide();
	$("#hoverDivsanta31").show();
	$("#images32").hide();
	$("#hoverDivsanta32").show();
	$("#images51").hide();
	$("#hoverDivsanta51").show();	
	$(".christmasPyamentgateway").hide();
	$("#bottomImages").show();
	

	$("#btnHome").click(function(){		
		hideAllDiv();
		$(".container").show();
		$("#bottomImages").show();
	});
	$("#NavSantaclass").click(function(){		
		hideAllDiv();
		$(".container").show();
		$("#bottomImages").show();
	});
	$("#backtocart").click(function(){			
		hideAllDiv();
		$(".container").show();
		$("#bottomImages").show();
	});
	$("#backtoSender").click(function(){		
		$(".christmasPyamentgateway").hide();
	$("#santadetailsdiv").show();
	});
	$("#logout").click(function(){
	logoutClicked();	
	});
	$("#buyOne").click(function(){
		selectedSantaItem="COMBO CAKES";
	    totalSantaAmount=500;
		$(".container").hide();
		hideAllDiv();		
		$(".mainDivTwo").show();
		$(".christmasPyamentgateway").hide();
		$("#santadetailsdiv").show();
	});
	$("#buyTwo").click(function(){
		selectedSantaItem="Coconut Cup CAKES";
	    totalSantaAmount=700;
		$(".container").hide();
		hideAllDiv();
		$(".mainDivTwo").show();
		$(".christmasPyamentgateway").hide();
		$("#santadetailsdiv").show();
	});
	$("#buyThree").click(function(){
		selectedSantaItem="Surprice Candles";
	    totalSantaAmount=500;
		$(".container").hide();
		hideAllDiv();
		$(".mainDivTwo").show();
		$(".christmasPyamentgateway").hide();
		$("#santadetailsdiv").show();
	});
	$("#buyFour").click(function(){
		selectedSantaItem="Yummy Chocolates";
	    totalSantaAmount=500;
		$(".container").hide();
		hideAllDiv();
		$(".mainDivTwo").show();
		$(".christmasPyamentgateway").hide();
		$("#santadetailsdiv").show();
	});
	$("#buyFive").click(function(){
		selectedSantaItem="SANTA'S";
	    totalSantaAmount=1900;
		$(".container").hide();
		hideAllDiv();
		$(".mainDivTwo").show();
		$(".christmasPyamentgateway").hide();
		$("#santadetailsdiv").show();
	});
	$("#buySix").click(function(){
		selectedSantaItem="Christmas-eve-cakes";
	    totalSantaAmount=750;
		$(".container").hide();
		hideAllDiv();
		$(".mainDivTwo").show();
		$(".christmasPyamentgateway").hide();
		$("#santadetailsdiv").show();
	});
	$("#buySeven").click(function(){
		selectedSantaItem="CHOCOCHIP";
	    totalSantaAmount=700;
		$(".container").hide();
		hideAllDiv();
		$(".mainDivTwo").show();
		$(".christmasPyamentgateway").hide();
		$("#santadetailsdiv").show();
	});
	$("#buyEight").click(function(){
		selectedSantaItem="Vanillatutti Fruit";
	    totalSantaAmount=600;
		$(".container").hide();
		hideAllDiv();
		$(".mainDivTwo").show();
		$(".christmasPyamentgateway").hide();
		$("#santadetailsdiv").show();
	});
	$("#buyNine").click(function(){
		selectedSantaItem="Choco Creame";
	    totalSantaAmount=600;
		$(".container").hide();
		hideAllDiv();
		$(".mainDivTwo").show();
		$(".christmasPyamentgateway").hide();
		$("#santadetailsdiv").show();
	});
	
	$("#btnBooking").click(function(){
		$(".container").hide();
		hideAllDiv();
		$(".mainDivOne").show();
		
	});
	$("#contactUsClicked").click(function(){
		$(".container").hide();
		hideAllDiv();
		$(".ContactUs").show();
	});
	
	
	$("#sdcsAdmin").click(function() {
		
		var id = localStorage.getItem("admin_id");
		if(id == null){
			
		$(".container").hide();
		hideAllDiv();
		$("#adminLoginContainerDiv").show();
		}else{
			hideAllDiv();
			adminSignUpClicked();
			var currentDate = getCurrentDate();
			$("#adminInput").val(currentDate);
			hideNavDivs();
			hideDateDivs();
			$("#tblAllCouriers").show();
			$("#courierBookedList").show();
			$("#bottomOptionsP").hide();

		}
	});
	
	$("#ourServices").click(function(){
		hideAllDiv();
		
		$("#ourServicesDiv").show();
		
	});
	
	$("#sugestUsClicked").click(function(){
		$(".container").hide();
		hideAllDiv();
		$(".mainDivSuggestUs").show();
	});
	$("#btnTracking").click(function(){
		$(".container").hide();
		hideAllDiv();
		$(".trackingClass").show();
	});
	$("#btnCancellation").click(function(){
		$(".container").hide();
		hideAllDiv();
		$(".cancellationClass").show();
	});
	$("#btnDeliveryBoyBooking").click(function(){
		/*$(".container").hide();*/
		
		var userId = localStorage.getItem("userId");
		
		if(userId  == "0"){
		
		hideAllDiv();
		$("#restaurantLoginDiv").show();
		
		}else{
			hideAllDiv();
			$("#hotelBookingInformaations").show();
			$("#restaurantDeliveryBoyBooking").show();
			$("#btnSubmitCustomerBooking").show();
			name = localStorage.getItem("name");;
			
			$("#restaurantLogedInName").text(name);
			/*$("#DeliveryBoyBookedHistoryTblDIv").hide();
			$("#tblFreshBookingHistory").hide();*/
		}
	});
	$("#btnContactUs").click(function(){
		$(".container").hide();
		hideAllDiv();
		$(".mainDivFour").show();
	});
	
	
	$("#restaurantLogin").click(function(){
		
		hideAllDiv();
		var userId = localStorage.getItem("userId");
		
		alert(userId);
		
		if(userId != null){
			$("#adminLoginContainerDiv").hide();
			$("#hotelBookingInformaations").show();
			$("#restaurantDeliveryBoyBooking").show();
			
		}else
		
		$("#restaurantLoginDiv").show();
		
		
	});
	
	$("#btnRestaurantSubmit").click(function(){
		
		
		btnRestaurantSubmitclicked();
		
	});
	
	$("#hotelHistory").click(function(){
		
		$("#DeliveryBoyAbsHistoryTblDIv").show();
		$("#btnSubmitCustomerBooking").hide();
		$("#tblFreshBookingHistory").hide();
		$("#restaurantDeliveryBoyBooking").hide();
		absHotelHistorySubmitClicked();
	});
	
	
	$("#hotelFreshBookings").click(function(){
		$("#DeliveryBoyBookedHistoryTblDIv").hide();
		$("#tblFreshBookingHistory").show();
		$("#btnSubmitCustomerBooking").hide();
		$("#restaurantDeliveryBoyBooking").hide();
		freshBookingListClicked();
		
	});
	
$("#hotelCouriersPayment").click(function(){
	
	hideAllDiv();
	$("#DeliveryBoyBookedHistoryTblDIv").hide();
	$("#couriersAllPayment").show();
	$("#tblCouriersPayment").show();
	$("#btnSubmitCustomerBooking").hide();

		hotelPaymentDetails();
		
	});

$("#btnPayNow").click(function(){
	$("#frmTransaction").submit();
});
	
	
	$("#btnSubmitCustomerBooking").click(function(){
		
		customerInfo();
		
	});
	
});




function hideAllDiv(){
	$("#bottomImages").hide();
	$(".cancellationClass").hide();
	$(".trackingClass").hide();
	$(".mainDivSuggestUs").hide();
	$(".ContactUs").hide();
	$(".mainDivOne").hide();
	$(".mainDivTwo").hide();
	$(".mainDivThree").hide();
	$(".mainDivFour").hide();
	$("#adminLoginContainerDiv").hide();
	$("#tblSdcsAdmin").hide();
	$("#restaurantLoginDiv").hide();
	$("#hotelBookingInformaations").hide();
	$("#DeliveryBoyBookedHistoryTblDIv").hide();
	$("#restaurantDeliveryBoyBooking").hide();
	$("#succesBookingMsgDiv").hide();
	$("#failureMsgDeliveryBoyHistory").hide();
	$("#tblFreshBookingHistory").hide();
	$("#courierBooking").hide();
	$("#DeliveryBoyBookedFrehBookingTblDIv").hide();
	$("#couriersAllPayment").hide();
	$("#restaurantLoged123Name").hide();
	$("#adminLoginContainerDiv").hide();
	$("#aboutUsDivContainer").hide();
	$("#windowTermAndConditions").hide();
	$("#allCompanyPolicies").hide();
	$("#contactUsInfo").hide();
	$("#flowChartDiv").hide();
	$("#DeliveryBoyBookedAbsFrehBookingTblDIv").hide();
	$("#DeliveryBoyAbsHistoryTblDIv").hide();
	$("#DeliveryBoyCompleteHistoryTblDIv").hide();
	$("#privacypolicyDiv").hide();
	$("#disclaimerPolicyDiv").hide();
	$("#cancellationPolicyDiv").hide();
	$("#shippingPolicyDiv").hide();
	$("#ourServicesDiv").hide();
	$("#customerRegistration").hide();
	$("#customerBooking").hide();
	$("#delBoyRegistration").hide();
	$("#courierBookingDiv").hide();
	$("#customerLogin").hide();
	$("#customerbookingformContainerDiv").hide();
}


function btnRestaurantSubmitclicked(){
	
	var restaurantNumber = $("#restaurantUserName").val().trim();
	var restaurantPassword = $("#restaurantPassword").val().trim();
	
	
	if(restaurantNumber == null || restaurantNumber.length == 0){
		
		alert("Please Enter The Contact Number");
		$("#restaurantUserName").focus();
	}else if(restaurantPassword == null || restaurantPassword.length == 0){
		
		alert("Please Enter The Password");
		$("#restaurantPassword").focus();
	}else
		
		$("#btnRestaurantSubmit").button("loading");
	$("#privacyPolicy").text("loading");
		$.ajax({

			url : "restaurantLogin",
			type : "POST",
			data : {
				"contactNumber" : restaurantNumber,
				"Password" : restaurantPassword
				
			},
			success : function(responseData, textStatus) {
				$("#privacyPolicy").text("submit");
				handleRestaurantLogin(responseData);
				
				
			},
			error : function(responseData) {
				$("#privacyPolicy").text("submit");
				alert("failure");
				$("#btnRestaurantSubmit").button("reset");
				
				showErrorMsg(SERVER_CONTACT_ERROR);
			}
		});

}



function handleRestaurantLogin(loginRestaurantresponseData){
	
	var restaurantLoginDetails = jQuery.parseJSON(loginRestaurantresponseData);
	$("#btnRestaurantSubmit").button("reset");

	if (restaurantLoginDetails.result) { // We got some courier history
		hideAllDiv();
		$("#restaurantUserName").val("");
		$("#restaurantPassword").val("");
		$("#btnSubmitCustomerBooking").show();
		localStorage.setItem("userId",restaurantLoginDetails.user_id+"");
		localStorage.setItem("name",restaurantLoginDetails.full_name);
		localStorage.setItem("phone",restaurantLoginDetails.mobile);
		localStorage.setItem("address",restaurantLoginDetails.address);
		localStorage.setItem("lat",restaurantLoginDetails.lat);
		localStorage.setItem("long",restaurantLoginDetails.long);
		
		
		 name = localStorage.getItem("name");;
		
		$("#restaurantLogedInName").text(name);
		
		
		$("#hotelBookingInformaations").show();
		$("#restaurantDeliveryBoyBooking").show();
	} else { // We did not get any result for filter criteria
		alert("Sorry Could Not Login.Please Check The Contact Number And Password.");
	}

}


function completeHotelHistorySubmitClicked(){
	
	
	hideAllDiv();
	$("#DeliveryBoyCompleteHistoryTblDIv").show();
	/*var historyInput = $("#hotelHistoryInput").val().trim();*/
	var restauRantId = localStorage.getItem("userId");
	$("#disclaimerPolicy").text("Loading");	
		$.ajax({

			url : "deliveryBoyBookingAdmin",
			type : "POST",
			data : {
				/*"deliveryBoyDate" : historyInput,*/
				"restaurantId"  :  restauRantId
			},
			success : function(responseData, textStatus) {
				$("#disclaimerPolicy").text("submit");
				handleHotelBookingCompleteHistory(responseData);
				
				
			},
			error : function(responseData) {
				$("#disclaimerPolicy").text("submit");
				alert("failure");
				
				
				showErrorMsg(SERVER_CONTACT_ERROR);
			}
		});

}


function handleHotelBookingCompleteHistory(responseData){
	

	var deliveryBoyDetails = jQuery.parseJSON(responseData);
	

	if (deliveryBoyDetails.status) { // We got some courier history
		$("#noHistoryFound").hide();
		$("#tblDeliveryBoyCompleteHistory").show();
		//console.log(allCouriersJsona.couriers);
		var deliveryBoyJsonArray = deliveryBoyDetails.deliveryBoy_booking;
		
		
		
		if (deliveryBoyJsonArray != undefined
				&& deliveryBoyJsonArray != null)
			parseHotelBookingHistoryComoleteJsonArray(deliveryBoyDetails);
	} else { // We did not get any result for filter criteria
				$("#tblDeliveryBoyCompleteHistory").hide();
		}
	
}

function parseHotelBookingHistoryComoleteJsonArray(deliveryBoyDetails){
	
	
	$("#tblDeliveryBoyCompleteHistory tbody").empty();
	var strBulkTotalTablBodyStart = '<tbody>';
	var strBulkTotalTablBodyEnd = '</tbody>';

	// Add offices table header
	$("#tblDeliveryBoyCompleteHistory").append(strBulkTotalTablBodyStart);
	var deliveryBoyHistoryJsonArraya = deliveryBoyDetails.deliveryBoy_booking;

	// Adding each booked courier to the table 
	$.each(deliveryBoyHistoryJsonArraya, function(index, value) {
		var strTableRowStart = '<tr style="color:#000000;">';

		var OrderTrackingId = value["booking_Id"];

		var distance = value["distance"];
		
		var amount = value["amount"];
		
		var status = value["statusa"];
		
		
		var courierStatus = "";
		 if(status == 0 || status == 2){
			 
			 courierStatus = "pending";
		 }else if(status = 3){
			 
			 courierStatus = "delivered";
		 }else if(status = 4){
			 
			 courierStatus = "cancelled";
		 }

		
		
		var strColumnTwo = '<td> ' + OrderTrackingId + ' </td>';
		var strColumnThree = '<td> ' + courierStatus + ' </td>';
		var strColumnSeven = '<td> ' + amount + ' </td>';
		var strColumnEight = '<td> ' + distance + ' </td>';
		
		
		var strTableRowEnd = '</tr>';

		$("#tblDeliveryBoyCompleteHistory").append(
				strTableRowStart +strColumnTwo +strColumnThree+ strColumnSeven +strColumnEight+ strTableRowEnd);
	});

	// Append body end at the end of the table
	$("#tblDeliveryBoyCompleteHistory").append(strBulkTotalTablBodyEnd);

	
}


function customerInfo(){
	
	
	var userId = localStorage.getItem("userId");
	var name = localStorage.getItem("name");
	var phone = localStorage.getItem("phone");
	var address = localStorage.getItem("address");
	var lat = localStorage.getItem("lat");
	var lon = localStorage.getItem("long");
	if(name == null || name.length==0){
		
		alert("Please Enter The Customer Name")
		$("#customerNameHotelBooking").focus();
	}else if(phone == null || phone.length == 0){
		alert("Please Enter The Customer Contact Number")
		$("#customerContactHotelBooking").focus();
	}else
		$("#btnSubmitCustomerBooking").button("loading");
	$.ajax({

		url : "hotelDeliveryBoyBooking",
		type : "POST",
		data : {
			"type" : "0",
			"userId" : userId,
			"name" : name,
			"phone" : phone,
			"address":address,
			"defuaultAmount" : "100",
			"status" : "cod",
			"codAmount" : "100",
			"lat" : lat,
			"long" : lon
		},
		success : function(responseData, textStatus) {
			
			handleHotelBookDeliveryBoy(responseData);
			
			
		},
		error : function(responseData) {
			$("#btnSubmitCustomerBooking").button("reset");
			
			alert("Sorry Coluldn't Book Due TO some Internal Error.Please Try Again Later");
		}
	});

		
		
}


function handleHotelBookDeliveryBoy(bookingresponseData){
	
	
	var deliveryBoyBookingDetails = jQuery.parseJSON(bookingresponseData);
	$("#btnSubmitCustomerBooking").button("reset");

	if (deliveryBoyBookingDetails.status) { // We got some courier history
		var tracking = deliveryBoyBookingDetails.tracking_id;
		hideAllDiv();
		if (confirm("Confirm The Delivery Boy Booking") == true){
		$("#succesBookingMsgDiv").show(1000);
		$("#succesBookingMsg").text("Your Order Has Been Confirmed.Your Order Id Is "+tracking+"");
		}else{hideAllDiv();
		$("#hotelBookingInformaations").show();
		$("#restaurantDeliveryBoyBooking").show();
}}else { // We did not get any result for filter criteria
	
	
	
		$("#noHistoryFound").show();
		$("#tblDeliveryBoyBooking").hide();
		
		
	}

	
}


function btnBackDelBoyBooking(){
	
	hideAllDiv();
	$("#hotelBookingInformaations").show();
	$("#restaurantDeliveryBoyBooking").show();
	
}


//This method is to show the fresh booking list to the hotels
function freshbookingcompleteClicked(){
	
	hideAllDiv();
	
	$("#DeliveryBoyBookedFrehBookingTblDIv").show();

	
	var userId = localStorage.getItem("userId");
	
	$.ajax({

		url : "freshDeliveryBoyBooking",
		type : "POST",
		data : {
			"restaurantId" : userId
					},
		success : function(responseData, textStatus) {
			
			handleCompleteFreshBookingList(responseData);
		},
		error : function(responseData) {
			$("#btnSubmitCustomerBooking").button("reset");
			
			alert("Sorry Coluldn't Book Due TO some Internal Error.Please Try Again Later");
		}
	});

	
}



function handleCompleteFreshBookingList(freshBookingResponseData){
	
	var deliveryBoyFreshDetails = jQuery.parseJSON(freshBookingResponseData);
	
	if (deliveryBoyFreshDetails.status) { // We got some courier history
				
		var deliveryBoyFreshArray = deliveryBoyFreshDetails.fresh_booking;
	
		if (deliveryBoyFreshArray != undefined
				&& deliveryBoyFreshArray != null)
			parseHotelBookingCompleteFreshDetailsJsonArray(deliveryBoyFreshDetails);
	} else { // We did not get any result for filter criteria
				$("#tblDeliveryBoyBookingFreshBooking").hide();
		}

	
}


function parseHotelBookingCompleteFreshDetailsJsonArray(deliveryBoyFreshDetailsa){
	
	$("#tblDeliveryBoyBookingFreshBooking tbody").empty();
	var strBulkTotalTablBodyStart = '<tbody>';
	var strBulkTotalTablBodyEnd = '</tbody>';

	// Add offices table header
	$("#tblDeliveryBoyBookingFreshBooking").append(strBulkTotalTablBodyStart);
	var deliveryBoyFreshJsonArraya = deliveryBoyFreshDetailsa.fresh_booking;

	// Adding each booked courier to the table 
	$.each(deliveryBoyFreshJsonArraya, function(index, value) {
		var strTableRowStart = '<tr>';

		var OrderTrackingId = value["booking_Id"];
		
		var recieverName = value["full_name"];
		
		var recieverContact = value["mobile_number"];
		
		var DeliveryBoyId = value["delivery_boy_id"];
		
		var status = value["status"];
		
		if(status == 0){
			
			statustext = "Not yet Accepted";
		}else if(status == 1){
			
			statustext = "Accepted";
		}else if(status == 2){
			
			statustext = "Picked";
		}else if(status == 3){
			
			statustext = "Delivered";
		}
		
		var strColumnOne = '<td> ' + OrderTrackingId + ' </td>';
		var strColumnTwo = '<td> ' + recieverName + ' </td>';
		var strColumnThree = '<td> ' + recieverContact + ' </td>';
		var strColumnFour = '<td> ' + DeliveryBoyId + ' </td>';
		var strColumnFive = '<td> ' + statustext + ' </td>';
				
		

		var strTableRowEnd = '</tr>';

		$("#tblDeliveryBoyBookingFreshBooking").append(
				strTableRowStart + strColumnOne + strColumnTwo+strColumnThree+strColumnFour +strColumnFive + strTableRowEnd);
	});

	// Append body end at the end of the table
	$("#tblDeliveryBoyBookingFreshBooking").append(strBulkTotalTablBodyEnd);

	
}

function logoutClicked(){
	
	hideAllDiv();
	
	localStorage.setItem("userId","0");
	localStorage.setItem("name","0");
	localStorage.setItem("phone","0");
	localStorage.setItem("address","0");
	localStorage.setItem("lat","0");
	localStorage.setItem("long","0");
	$("#restaurantLoginDiv").show();
	
}

function restaurantBackBtn(){
	
	hideAllDiv();
	$("#hotelBookingInformaations").show();
	$("#restaurantDeliveryBoyBooking").show();
	$("#btnSubmitCustomerBooking").show();
	name = localStorage.getItem("name");;
	
	$("#restaurantLogedInName").text(name);

}



