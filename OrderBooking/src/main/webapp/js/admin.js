
var lat = "";
var lon = "";
var map;
$(document).ready(function() {
	$("#btnAdminSignIn").click(function() {
		validateAdminSignInFormFields();
		hideDateDivs();		
		$("#btnAdminCourierBookingClicked").click(function(){
			
			adminCourierBookingClicked();
		});
		
	}); 
	
	$("#btnPayNow").click(function(){
		$("#frmTransaction").submit();
	});
	
	$("#adminLogout").click(function(){
		$(".container").hide();
		hideAllDiv();
		$("#adminLoginContainerDiv").show();
		localStorage.setItem("admin_id",null);
	});
});

// this method gets called when click on sign in button
function validateAdminSignInFormFields() {
	var strUsername = $("#txtAdminLoginUsername").val().trim();
	var strPassword = $("#txtAdminLoginPassword").val().trim();

	if (strUsername == null || strUsername.length == 0) {
		showErrorMsg(EMPTY_USER_NAME);
		$("#txtAdminLoginUsername").focus();
	} else if (strPassword == null || strPassword.length == 0) {
		showErrorMsg(EMPTY_PASSWORD);
		$("#txtAdminLoginPassword").focus();
	} else {
		$.ajax({
			url : "adminlogin",
			type : "POST",
			data : {
				"username" : strUsername,
				"password" : strPassword
			},
			success : function(responseData, textStatus) {
				
				handleAdminSignInData(responseData);
				
			},
			error : function(responseData) {
				
			}

		});
	}

	
}

//this method executed when after the ajax reply
function handleAdminSignInData(responseAdminData) {
	var signInAdminData = jQuery.parseJSON(responseAdminData);
	if (signInAdminData.result) {
				
		$("#txtAdminLoginUsername").val("");
		$("#txtAdminLoginPassword").val("");
		adminSignUpClicked();
		var currentDate = getCurrentDate();
		$("#adminInput").val(currentDate);
		hideNavDivs();
		hideDateDivs();
		$("#tblAllCouriers").show();
		$("#courierBookedList").show();
		$("#bottomOptionsP").hide();
		
		var id = signInAdminData.user_id;
		localStorage.setItem("admin_id",id);
	} else {
		showErrorMsg(signInAdminData.message);
	}
}

function adminSignUpClicked() {
	$("#adminLoginContainerDiv").hide();
	$("#BulkOrderList").hide();
	$("#tblSdcsAdmin").show();

}

/* this function will be called when user clicks on submit button in Admin
 * 
 */
function dateSubmitClicked() {
	var strAdminDate = $("#adminInput").val().trim();
	if (strAdminDate == null || strAdminDate.length == 0) {
		showErrorMsg("please select the DATE");
	} else {
			$.ajax({

			url : "adminDate",
			type : "GET",
			data : {
				"strDate" : strAdminDate
			},
			success : function(responseData, textStatus) {
				handleAdminDetailsInData(responseData);
			},
			error : function(responseData) {
				showErrorMsg(SERVER_CONTACT_ERROR);
			}
		});
	}
}

function getCurrentDate() {
	var d = new Date();

	var month = d.getMonth() + 1;
	var day = d.getDate();

	var output = d.getFullYear() + '-' + (('' + month).length < 2 ? '0' : '')
			+ month + '-' + (('' + day).length < 2 ? '0' : '') + day;

	var currentDate = (('' + day).length < 2 ? '0' : '') + day
			+ '-' + (('' + month).length < 2 ? '0' : '') + month + '-'
			+ d.getFullYear();
	return output;
}

function handleAdminDetailsInData(adminDetailsResponce) {

	var allCouriersCalculationsJsona = jQuery.parseJSON(adminDetailsResponce);
	
	if (allCouriersCalculationsJsona.status) { // We got some courier history
		$("#noHistoryFound").hide();
		$("#tblAdminBookedCouriers").show();
		//console.log(allCouriersJsona.couriers);
		var courierTotalJsonArray = allCouriersCalculationsJsona.couriersCalculations;
		if (courierTotalJsonArray != undefined && courierTotalJsonArray != null)
			parseCouriersJsonArraya(allCouriersCalculationsJsona);
	} else { // We did not get any result for filter criteria
		$("#noHistoryFound").show();
		$("#tblAdminBookedCouriers").hide();
	}
}

function parseCouriersJsonArraya(allCouriersCalculationsJsona) {

	$("#tblAdminBookedCouriers tbody").empty();
	var strTotalTablBodyStart = '<tbody>';
	var strTotalTablBodyEnd = '</tbody>';

	// Add offices table header
	$("#tblAdminBookedCouriers").append(strTotalTablBodyStart);
	var courierHistoryJsonArraya = allCouriersCalculationsJsona.couriersCalculations;

	// Adding each booked courier to the table 
	$.each(courierHistoryJsonArraya, function(index, value) {

		var strTableRowStart = '<tr style="color:#000000;">';
		var discription = value["discription"].trim();
		var onedayNoCouriers = value["deliver_in_one_day"];
		var onedayNoCouriersAmount = value["oneDayCourierAmount"];

		var fourHourNoCouriers = value["deliver_in_four_hour"];

		var fourHourNoCouriersAmount = value["fourHourCourierAmount"];

		var metrocityNoCouriers = value["confidential_delivery"];

		var metrocityNoCouriersAmount = value["ConfidentialCourierAmount"];

		var handToHandNoCouriers = value["deliver_hand_to_hand"];

		var handToHandNoCouriersAmount = value["HtoHCourierAmount"];

		var airportNoCouriers = value["price_for_Airport_delivery"];

		var airportNoCouriersAmount = value["airportCourierAmount"];

		var totalNoCouriers = value["totalCourier"];

		var totalNoCouriersAmount = value["totalAmount"];

		var strColumnOne = '<td><a onclick="discriptionDetailsClicked('
				+ value["discriptiona"] + ');">' + discription + '</a></td>';
		var strColumnTwo = '<td> ' + onedayNoCouriers + ' </td>';
		var strColumnThree = '<td> ' + onedayNoCouriersAmount + ' </td>';
		var strColumnFour = '<td> ' + fourHourNoCouriers + ' </td>';
		var strColumnFive = '<td> ' + fourHourNoCouriersAmount + ' </td>';
		var strColumnSix = '<td> ' + metrocityNoCouriers + ' </td>';
		var strColumnSeven = '<td > ' + metrocityNoCouriersAmount + ' </td>';
		var strColumnEight = '<td> ' + handToHandNoCouriers + ' </td>';
		var strColumnNine = '<td> ' + handToHandNoCouriersAmount + ' </td>';
		var strColumnTen = '<td> ' + airportNoCouriers + ' </td>';
		var strColumnEleven = '<td> ' + airportNoCouriersAmount + ' </td>';
		var strColumnTwelve = '<td> ' + totalNoCouriers + ' </td>';
		var strColumnThirteen = '<td> ' + totalNoCouriersAmount + ' </td>';

		var strTableRowEnd = '</tr>';
		// Appending row to table body
		$("#tblAdminBookedCouriers").append(
				strTableRowStart + strColumnOne + strColumnTwo + strColumnThree
						+ strColumnFour + strColumnFive + strColumnSix
						+ strColumnSeven + strColumnEight + strColumnNine
						+ strColumnTen + strColumnEleven + strColumnTwelve
						+ strColumnThirteen + strTableRowEnd);

	});

	// Append body end at the end of the table
	$("#tblAdminBookedCouriers").append(strTotalTablBodyEnd);

}

function discriptionDetailsClicked(statusOfOption) {
	var intStatusOfOption = statusOfOption;
	var strAdminDate = $("#adminInput").val().trim();
	if (strAdminDate == null || strAdminDate.length == 0) {
		showErrorMsg("please select the DATE");
	} else {

		$.ajax({

			url : "adminSelection",
			type : "GET",
			data : {
				"strDate" : strAdminDate,
				"intStatusOfOption" : intStatusOfOption
			},
			success : function(responseData, textStatus) {
				parseAdminBookedCouriersJsonArraya(responseData);
			},
			error : function(responseData) {
					showErrorMsg(SERVER_CONTACT_ERROR);
			}
		});
	}

}
/*
 * this button is for going back to total calculation and couriers
 */
function dateBackClicked() {
	hideAllDiv();
	$("#tblSdcsAdmin").show();
	$("#tblAdminBookedCouriers").show();

}

function parseAdminBookedCouriersJsonArraya(allCourierAdminDetailsJsona) {
	hideAllDiv();
	$("#tblSdcsAdmin").show();
	$("#tblAdminBookedCouriers").hide();
	$("#tblAllBookedCouriersDetails").show();
	var allBookedCouriersCalculationsJsona = jQuery
			.parseJSON(allCourierAdminDetailsJsona);
	$("#btnAdminInputSubmit").button("reset");
	if (allBookedCouriersCalculationsJsona.status) { // We got some courier history
		$("#noHistoryFound").hide();
		$("#tblAllBookedCouriers").show();
	} else {
		$("#noHistoryFound").show();
		alert("failed to get");
	}
	//console.log(allCouriersJsona.couriers);
	var courierBookedDetailsJsonArray = allBookedCouriersCalculationsJsona.booked_couriers;
	if (courierBookedDetailsJsonArray == undefined
			&& courierBookedDetailsJsonArray == null) {
		$("#noHistoryFound").show();
		$("#tblAllBookedCouriers").show();

	}// We did not get any result for filter criteria

	$("#tblAllBookedCouriers tbody").empty();
	var strAdminDetailTableBodyStart = '<tbody>';
	var strAdminDetailTableBodyEnd = '</tbody>';

	// Add offices table header
	$("#tblAllBookedCouriers").append(strAdminDetailTableBodyStart);
	var courierAdminDetailJsonArraya = allBookedCouriersCalculationsJsona.booked_couriers;

	// Adding each booked courier to the table 
	$.each(courierAdminDetailJsonArraya, function(index, value) {

		var strTableRowStart = '<tr style="color:#000000;">';
		var bookingId = value["booking_id"];
		var dateOfBooking = value["date_of_booking"];
		var courierContent = value["courier_content"];
		var receiverAddress = value["receiver_name"] + ", Address: "
				+ value["receiver_address"] + ", Pin Code: "
				+ value["receiver_pincode"] + ", Phone: "
				+ value["receiver_phone"] + ", Email: "
				+ value["receiver_email"];

		var officeAddress = value["office_id"] + ", Address: "
				+ value["office_name"] + ", Address: "
				+ value["office_address"];

		var deliverInOneDay = value["deliver_in_one_day"];
		var deliverInFourHour = value["deliver_in_four_hour"];
		var deliverInHandToHand = value["deliver_hand_to_hand"];
		var deliverInConfidential = value["confidential_delivery"];
		var deliverInAirport = value["price_for_Airport_delivery"];

		var courierOption = "";
		if (deliverInOneDay == 1) {
			courierOption = "one Day Courier";
		} else if (deliverInFourHour == 1) {
			courierOption = "Casual Four Hour";
		} else if (deliverInHandToHand == 1) {
			courierOption = "Hand to Hand";
		} else if (deliverInConfidential == 1) {
			courierOption = "Metro City Delivery";
		} else if (deliverInAirport == 1) {
			courierOption = "Airport Delivery";
		} else {
			courierOption = "No courier options selected";
		}

		var totalAmount = value["total_amount"];

		//var d = new Date(dateOfBooking);	
		//d.setFullYear(dateOfBooking);

		var strColumnOne = '<td > ' + bookingId + ' </td>';
		var strColumnTwo = '<td> ' + dateOfBooking + ' </td>';
		var strColumnThree = '<td> ' + courierContent + ' </td>';
		var strColumnFour = '<td> ' + receiverAddress + ' </td>';
		var strColumnFive = '<td> ' + officeAddress + ' </td>';
		var strColumnSeven = '<td> ' + courierOption + ' </td>';
		var strColumnEight = '<td> ' + totalAmount + ' </td>';
		var strTableRowEnd = '</tr>';

		// Appending row to table body
		$("#tblAllBookedCouriers").append(
				strTableRowStart + strColumnThree + strColumnOne + strColumnTwo
						+ strColumnThree + strColumnFour + strColumnFive
						+ strColumnSeven + strColumnEight
						+ strAdminDetailTableBodyEnd);

	});

	// Append body end at the end of the table
	$("#tblAllBookedCouriers").append(strAdminDetailTableBodyEnd);

}

function dateBulkSubmitClicked() {
	var strAdminDate = $("#BulkInput").val().trim();
	if (strAdminDate == null || strAdminDate.length == 0) {
		showErrorMsg("please select the DATE");
	} else {
			$.ajax({

			url : "bulkDate",
			type : "GET",
			data : {
				"strDate" : strAdminDate
			},
			success : function(responseData, textStatus) {
				handleBulkDetailsInData(responseData);
			},
			error : function(responseData) {
				showErrorMsg(SERVER_CONTACT_ERROR);
			}
		});
	}
}

function handleBulkDetailsInData(bulkCourierData) {
	var bulkCouriersDetails = jQuery.parseJSON(bulkCourierData);
	$("#btnAdminInputSubmit").button("reset");

	if (bulkCouriersDetails.status) { // We got some courier history
		$("#noHistoryFound").hide();
		$("#tblBulkCouriers").show();
		//console.log(allCouriersJsona.couriers);
		var courierBulkOrdersJsonArray = bulkCouriersDetails.bulk_couriers;
		if (courierBulkOrdersJsonArray != undefined
				&& courierBulkOrdersJsonArray != null)
			parseBulkCouriersJsonArray(bulkCouriersDetails);
	} else { // We did not get any result for filter criteria
		$("#noHistoryFound").show();
		$("#tblBulkCouriers").hide();
	}
}

function parseBulkCouriersJsonArray(bulkCouriersDetailsa) {
	$("#tblBulkCouriers tbody").empty();
	var strBulkTotalTablBodyStart = '<tbody>';
	var strBulkTotalTablBodyEnd = '</tbody>';

	// Add offices table header
	$("#tblBulkCouriers").append(strBulkTotalTablBodyStart);
	var bulkCourierHistoryJsonArraya = bulkCouriersDetailsa.bulk_couriers;

	// Adding each booked courier to the table 
	$.each(bulkCourierHistoryJsonArraya, function(index, value) {
		var strTableRowStart = '<tr style="color:#000000;">';

		var bulkOrderDate = value["date_of_request"];

		var bulkCustomerName = value["bulk_name"];

		var bulkCustomerNumber = value["bulk_number"];

		var bulkCustomerEmail = value["bulk_email"];

		var strColumnOne = '<td> ' + bulkOrderDate + ' </td>';
		var strColumnTwo = '<td> ' + bulkCustomerName + ' </td>';
		var strColumnThree = '<td> ' + bulkCustomerNumber + ' </td>';
		var strColumnFour = '<td> ' + bulkCustomerEmail + ' </td>';

		var strTableRowEnd = '</tr>';

		$("#tblBulkCouriers").append(
				strTableRowStart + strColumnOne + strColumnTwo + strColumnThree
						+ strColumnFour + strBulkTotalTablBodyEnd);
	});

	// Append body end at the end of the table
	$("#tblBulkCouriers").append(strBulkTotalTablBodyEnd);

}



function couriersClicked(){
	hideNavDivs();
	hideDateDivs();
	$("#tblAllCouriers").show();
	$("#courierBookedList").show();
}

function BulkClicked(){
	hideNavDivs();
	hideDateDivs();
	$("#bulkOrdersContainer").show();
	$("#BulkOrderList").show();
}

function ChristmasClicked(){
	hideNavDivs();
	hideDateDivs();
	$("#christmasSaleContainer").show();
	$("#christmasSaleList").show();
}


function deliveryBoyBookingClicked(){
	
	hideNavDivs();
	hideDateDivs();
	$("#deliveryBoyBookingContainer").show();
	$("#deliveryBoyAdminBookingList").show();
}

function btnAdminCourierBooking(){
	
	hideNavDivs();
	hideDateDivs();
	$("#adminCourierBooking").show();
	
	
}

function btnAdminAllRestaurantsList(){
	hideNavDivs();
	$("#adminCourierBooking").hide();
	$("#allRestaurants").show();
	
	hideDateDivs();
	
}

function btndelBoyRegistrationClicked(){
	
	hideNavDivs();
	hideDateDivs();
	$("#delBoyRegistration").show();
}


function btnAdminAllCouriersList(){
	
	hideNavDivs();
	hideDateDivs();
	$("#allCourier").show();
	
	adminAllBookedCourierList();
	
}


function btnRestaurantRegistrationClickced(){
	hideNavDivs();
	hideDateDivs();
	$("#restaurantRegistration").show();
	
}

function btnDelBoyTRackingClicked(){
	
	hideNavDivs();
	hideDateDivs();
	$("#delBoyMap").show();
	
		
	deliveryBoyTrackingClicked();


}

function btnCakeShowSalesClickced(){
	
	hideNavDivs();
	hideDateDivs();
	$("#btncakeSaleBookingInputSubmit").button("reset");
	$("#cakeShowSalesDivContainer").show();
	$("#cakeSaleBookingList").show();
}

function hideNavDivs(){
	
	$("#tblAllCouriers").hide();
	$("#deiveryBoyPayment").hide();
	$("#deiveryBoyPayment").hide();
	$("#tblAllBookedCouriersDetails").hide();
	$("#bulkOrdersContainer").hide();
	$("#christmasSaleContainer").hide();
	$("#deliveryBoyBookingContainer").hide();
	$("#restaurantRegistration").hide();
	$("#cakeShowSalesDivContainer").hide();
	$("#allCourier").hide();
	$("#adminCourierBooking").hide();
	$("#delBoyRegistration").hide();
}

function hideDateDivs(){
	$("#BulkOrderList").hide();
	$("#courierBookedList").hide();
	$("#christmasSaleList").hide();
	$("#deliveryBoyAdminBookingList").hide();
	$("#cakeSaleBookingList").hide();
	$("#allCourier").hide();
	$("#adminCourierBooking").hide();
	$("#tblAllCouriers").hide();
	$("#delBoyMap").hide();
}




function dateChristmasSaleSubmitClicked(){
	
	var christmasDate=$("#christmasSaleInput").val();
	
	if(christmasDate == null || christmasDate.length == 0){
		
		alert("Please Enter The Date");
	}else
		$.ajax({

		url : "christmasSaleAdminList",
		type : "GET",
		data : {
			"christmasDate" : christmasDate
		},
		success : function(responseData, textStatus) {
			handleChristmasList(responseData);
		},
		error : function(responseData) {
			showErrorMsg(SERVER_CONTACT_ERROR);
		}
	});
}
	
	function handleChristmasList(christmasSaleresponseData){
		var christmasCouriersDetails = jQuery.parseJSON(christmasSaleresponseData);
		
		if (christmasCouriersDetails.status) { // We got some courier history
			
			$("#tblChristmasSaleCouriers").show();
			//console.log(allCouriersJsona.couriers);
			var courierChristmasSaleJsonArray = christmasCouriersDetails.christmasSale_details;
			
			alert(courierChristmasSaleJsonArray);
			if (courierChristmasSaleJsonArray != undefined
					&& courierChristmasSaleJsonArray != null)
				parseChristmasCourierJsonArray(christmasCouriersDetails);
		} else { // We did not get any result for filter criteria
			
			$("#tblChristmasSaleCouriers").hide();
		}
	}

	function parseChristmasCourierJsonArray(christmasCouriersDetailsa) {
		$("#tblChristmasSaleCouriers tbody").empty();
		var strChristmasSaleTblBodyStart = '<tbody>';
		var strChristmasSaleTblBodyEnd = '</tbody>';

		// Add offices table header
		$("#tblChristmasSaleCouriers").append(strChristmasSaleTblBodyStart);
		var christmasSaleHistoryJsonArraya = christmasCouriersDetailsa.christmasSale_details;

		// Adding each booked courier to the table 
		$.each(christmasSaleHistoryJsonArraya, function(index, value) {
			var strTableRowStart = '<tr style="color:#000000;">';

			var christmasOrderDate = value["date_of_booking"];

			var christmasOrderItem = value["selectedItem"];
			
			var christmasOrderId = value["tracking_Id"];
			
			var christmasSenderName = value["sender_name"];
			
			var christmasSenderPhone = value["sender_phone"];
			
			var christmasRecieverName = value["reciever_name"];
			
			var christmasRecieverAddress = value["reciever_address"];			
			
			var christmasRecieverPhone = value["reciever_phone"];
			
			var christmasRecieverPincode = value["pincode"];
			
			var surpriceGiftRecieverName = value["surprice_gift_name"];
			
			var surpriceGiftRecievingDate = value["surprice_gift_date"];
			
			var surpriceGiftRecievingTime = value["surprice_gift_time"];
			
			var photo = value["photo"];
			
			var christmasBookingPaymentOption = value["payment_option"];
			
			var christmasBookingTotalAmount = value["total_amount"];

			

			var strColumnOne = '<td> ' + christmasOrderDate + ' </td>';
			var strColumnTwo = '<td> ' + christmasOrderItem + ' </td>';
			var strColumnThree = '<td> ' + christmasOrderId + ' </td>';
			var strColumnFour = '<td> ' + christmasSenderName + ' </td>';
			var strColumnFive = '<td> ' + christmasSenderPhone + ' </td>';
			var strColumnSix = '<td> ' + christmasRecieverName + ' </td>';
			var strColumnSeven = '<td> ' + christmasRecieverAddress + +christmasRecieverPincode +' </td>';
			var strColumnEight = '<td> ' + christmasRecieverPhone + ' </td>';
			var strColumnNine = '<td> ' + surpriceGiftRecieverName + ' </td>';
			var strColumnTen = '<td> ' + surpriceGiftRecievingDate + ' </td>';
			var strColumnEleven = '<td> ' + surpriceGiftRecievingTime + ' </td>';
			var strColumnTwelve = '<td> ' + photo + ' </td>';
			var strColumnThirteen = '<td> ' + christmasBookingPaymentOption + ' </td>';
			var strColumnFourteen = '<td> ' + christmasBookingTotalAmount + ' </td>';

			var strTableRowEnd = '</tr>';

			$("#tblChristmasSaleCouriers").append(
					strTableRowStart + strColumnOne + strColumnTwo + strColumnThree
							+ strColumnFour + strColumnFive+ strColumnSix 
							+ strColumnSeven+ strColumnEight+ strColumnNine+ strColumnTen
							+ strColumnEleven+ strColumnTwelve+ strColumnThirteen+ strColumnFourteen+ strTableRowEnd);
		});

		// Append body end at the end of the table
		$("#tblChristmasSaleCouriers").append(strChristmasSaleTblBodyEnd);

	}
	
	
	
	
	function deliveryBoyDateBookingClicked(){
		
		var deliveryBoyBookingDate=$("#deliveryBoyBookingInput").val();
		
		if(deliveryBoyBookingDate == null || deliveryBoyBookingDate.length == 0){
			
			alert("Please Enter The Date");
		}else 
			$.ajax({

			url : "deliveryBoyBookingAdmin",
			type : "GET",
			data : {
				"deliveryBoyDate" : deliveryBoyBookingDate
			},
			success : function(responseData, textStatus) {
				alert("success");
				handleDeliveryBoyResponce(responseData);
				
				
			},
			error : function(responseData) {
				alert("success");
				showErrorMsg(SERVER_CONTACT_ERROR);
			}
		});
	}


	
	function handleDeliveryBoyResponce(deliveryBoyresponseData){
		
		
		var deliveryBoyDetails = jQuery.parseJSON(deliveryBoyresponseData);
	
		if (deliveryBoyDetails.status) { // We got some courier history
			$("#noHistoryFound").hide();
			$("#tblDeliveryBoyBooking").show();
			//console.log(allCouriersJsona.couriers);
			var deliveryBoyJsonArray = deliveryBoyDetails.deliveryBoy_booking;
			
			
			if (deliveryBoyJsonArray != undefined
					&& deliveryBoyJsonArray != null)
				parseDeliveryBoyJsonArray(deliveryBoyDetails);
		} else { // We did not get any result for filter criteria
			$("#noHistoryFound").show();
			$("#tblDeliveryBoyBooking").hide();
		}
		
	}
	
	
	function parseDeliveryBoyJsonArray(deliveryBoyDetailsa){
		
		$("#tblDeliveryBoyBooking tbody").empty();
		var strBulkTotalTablBodyStart = '<tbody>';
		var strBulkTotalTablBodyEnd = '</tbody>';

		// Add offices table header
		$("#tblDeliveryBoyBooking").append(strBulkTotalTablBodyStart);
		var deliveryBoyHistoryJsonArraya = deliveryBoyDetailsa.deliveryBoy_booking;

		
		alert(deliveryBoyHistoryJsonArraya);
		
		// Adding each booked courier to the table 
		$.each(deliveryBoyHistoryJsonArraya, function(index, value) {
			var strTableRowStart = '<tr style="color:#000000;">';

			var OrderTrackingId = value["tracking_Id"];

			var Date = value["time_of_booking"];

			var RestaurantName = value["restaurant_name"];

			var RestaurantPhone = value["contact_number"];
			
			var DeliveryBoyId = value["Delivery_boy_id"];
			
			var DeliveryBoyAmount = value["amount"];
			

			var strColumnOne = '<td> ' + Date + ' </td>';
			var strColumnTwo = '<td> ' + OrderTrackingId + ' </td>';
			var strColumnThree = '<td> ' + RestaurantName + ' </td>';
			var strColumnFour = '<td> ' + RestaurantPhone + ' </td>';
			var strColumnFive = '<td> ' + DeliveryBoyId + ' </td>';
			var strColumnSix = '<td> ' + DeliveryBoyAmount + ' </td>';
			
			

			var strTableRowEnd = '</tr>';

			$("#tblDeliveryBoyBooking").append(
					strTableRowStart + strColumnOne + strColumnTwo + strColumnThree
							+ strColumnFour+ strColumnFive+ strColumnSix + strTableRowEnd);
		});

		// Append body end at the end of the table
		$("#tblDeliveryBoyBooking").append(strBulkTotalTablBodyEnd);


	}
	
	function btnHotelRegistrationClicked(){
		
		var reistrationName = $("#restaurantRegistrationName").val();
		alert(reistrationName);
		var reistrationAddress = $("#restaurantRegistrationAddress").val();
		var reistrationPincode = $("#restaurantRegistrationPincode").val();
		var reistrationContactNumber = $("#restaurantRegistrationContactNumber").val();
		var reistrationEmailId = $("#restaurantRegistrationEmailId").val();
		var reistrationlat = $("#restaurantRegistrationlatitude").val();
		var reistrationlong = $("#restaurantRegistrationlongitude").val();
		var registerAmount = $("#restaurantRegistrationAmount").val();
		var reistrationPassword = $("#restaurantRegistrationPassword").val();
		var reistrationConfirmPassword = $("#restaurantRegistrationConfirmPassword").val();
		var registrationExtraAmount = $("#restaurantRegistrationExtraAmount").val();
		   
				
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
		}else if(reistrationlat == null || reistrationlat.length == 0){
			
			alert("Please Enter Restaurant Latitude");
			
			$("#restaurantRegistrationlatitude").focus();
		}else if(reistrationlong == null || reistrationlong.length == 0){
			
			alert("Please Enter Restaurant Longitude");
			
			$("#restaurantRegistrationlongitude").focus();
		}else if(reistrationPassword == null || reistrationPassword.length == 0){
			
			alert("Please Enter Restaurant Password");
			
			$("#restaurantRegistrationPassword").focus();
		}else if(registerAmount == null || registerAmount.length == 0){
			
			alert("Please Enter Restaurant's Default Amount");
			
			$("#restaurantRegistrationAmount").focus();
		}else if(registrationExtraAmount == null || registrationExtraAmount.length == 0){
			
			alert("Please Enter Restaurant's Default Amount For Extra Km Travelled");
			
			$("#restaurantRegistrationExtraAmount").focus();
		}else if(reistrationConfirmPassword == null || reistrationConfirmPassword.length == 0){
			
			alert("Please Enter Restaurant Password Again");
			
			$("#restaurantRegistrationConfirmPassword").focus();
		}
		
		if(reistrationPassword != reistrationConfirmPassword){
			alert("Password Not Matching");
			
			$("#restaurantRegistrationConfirmPassword").val("");
			$("#restaurantRegistrationConfirmPassword").focus();
			
		}else
			$.ajax({

				url : "RestaurantRegistration",
				type : "POST",
				data : {
					"reistrationName" : reistrationName,
					"reistrationAddress" : reistrationAddress,
					"pincode" :reistrationPincode,
					"reistrationContactNumber" : reistrationContactNumber,
					"emailId":reistrationEmailId,
					"reistrationPassword" : reistrationPassword,
					"amount" : registerAmount,
					"extraAmount" : registrationExtraAmount,
					"lat" : reistrationlat,
					"long" : reistrationlong
				},
				success : function(responseData, textStatus) {
					
					handleDeliveryBoyResponce(responseData);
					
					
				},
				error : function(responseData) {
					
					
					
					showErrorMsg(SERVER_CONTACT_ERROR);
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
			alert("Sorry Could Not Register.");
		}
		
	}
	
	
	function cakeSaleBookingClicked(){
		
		
		var cakeSaleDate = $("#cakeSaleBookingInput").val().trim();
		
		if(cakeSaleDate == null || cakeSaleDate.length == 0){
			
			alert("Please Enter Date");
			$("#cakeSaleBookingInput").focus();
		}else 
			$.ajax({

			url : "cakeShowBookingInfoToAdmin",
			type : "POST",
			data : {
				"Date" : cakeSaleDate
			},
			success : function(responseData, textStatus) {
				alert("success");
				handlecakeShowAdminResponce(responseData);
				
				
			},
			error : function(responseData) {
				alert("failure");
				showErrorMsg(SERVER_CONTACT_ERROR);
			}
		});
	}

	
	function handlecakeShowAdminResponce(cakeShowresponseData){
		
		
		var cakeSaleDetails = jQuery.parseJSON(cakeShowresponseData);
		
		if (cakeSaleDetails.status) { // We got some courier history
			$("#noHistoryFound").hide();
			$("#tblCakeShowSales").show();
			//console.log(allCouriersJsona.couriers);
			var allBookings = cakeSaleDetails.all_bookings;
			
			
			if (allBookings != undefined
					&& allBookings != null)
				parseCakeSaleAdminJsonJsonArray(cakeSaleDetails);
		} else { // We did not get any result for filter criteria
			$("#noHistoryFound").show();
			$("#tblDeliveryBoyBooking").hide();
		}
		
	}
	
	
	function parseCakeSaleAdminJsonJsonArray(cakeSaleDetailsa){
		
		$("#tblCakeShowSales tbody").empty();
		var strBulkTotalTablBodyStart = '<tbody>';
		var strBulkTotalTablBodyEnd = '</tbody>';

		// Add offices table header
		$("#tblCakeShowSales").append(strBulkTotalTablBodyStart);
		var cakeSaleJsonArraya = cakeSaleDetailsa.all_bookings;

		
		
		// Adding each booked courier to the table 
		$.each(cakeSaleJsonArraya, function(index, value) {
			var strTableRowStart = '<tr style="color:#000000;">';

			var Date = value["time_of_booking"];

			var OrderTrackingId = value["id"];

			var Name = value["name"];

			var address = value["address"]
			
			var RestaurantPhone = value["contact_number"];
			
			var DeliveryBoyId = value["delivery_boy_id"];
			
			var status = value["status"];
			
			var distance = value["distance"];

			var cakeBookingStatus = "";
			var pay = "";
			
			if(status == 0){
			
				cakeBookingStatus = "Not Yet Accepted";
			}else if(status == 1){
				
				cakeBookingStatus = "Accepted by "+DeliveryBoyId+"";
			}else if(status == 2){
				cakeBookingStatus = "Delivered";
				
			}
			
			if(distance <= 5 && distance > 0 && status == 2){
				pay = 25;
			}else{
				
				pay = 0;
			}
			
			t=distance;
			for(i=0;i<t;i++){
				pay = pay + 5;
			}
		
			
			var strColumnOne = '<td> ' + Date + ' </td>';
			var strColumnTwo = '<td> ' + OrderTrackingId + ' </td>';
			var strColumnThree = '<td> ' + Name + ' </td>';
			var strColumnFour = '<td> ' + address + ' </td>';
			var strColumnFive = '<td> ' + RestaurantPhone + ' </td>';
			var strColumnSix = '<td> ' + DeliveryBoyId + ' </td>';
			var strColumnSeven = '<td> ' + cakeBookingStatus + ' </td>';
			var strColumnEight = '<td> ' + distance + ' </td>';
			var strColumnnine = '<td> ' +"Rs."+pay + ' </td>';

			var strTableRowEnd = '</tr>';

			$("#tblCakeShowSales").append(
					strTableRowStart + strColumnOne + strColumnTwo + strColumnThree
							+ strColumnFour+ strColumnFive+ strColumnSix +strColumnSeven + strColumnEight +strColumnnine +strTableRowEnd);
		});

		// Append body end at the end of the table
		$("#tblCakeShowSales").append(strBulkTotalTablBodyEnd);


	}

function deliveryBoyTrackingClicked(){
	
	$.ajax({

		url : "showDelBoyMap",
		type : "POST",
		data : {
			"userId" : "0"
						
		},
		success : function(responseData, textStatus) {
			
			handleDeliveryBoyTracking(responseData);
			
			
		},
		error : function(responseData) {
			
			
			alert("sorry could not show the map");
		}
	});
}

function handleDeliveryBoyTracking(dBoyresponseData){
	
	
	var deliveryBoyLocation = jQuery.parseJSON(dBoyresponseData);
	
	
	if (deliveryBoyLocation.status) { // We got some courier history
		
		
		var cordinateArray = deliveryBoyLocation.responceCordinates;
				
		
		if (cordinateArray != undefined
				&& cordinateArray != null)
			parseCordinatesJsonJsonArray(deliveryBoyLocation);
		
			}else { // We did not get any result for filter criteria
		$("#noHistoryFound").show();
		$("#tblDeliveryBoyBooking").hide();
	
	
}
	
}
	

function parseCordinatesJsonJsonArray(deliveryBoyLocationa){
	
	var cordinateArray = deliveryBoyLocationa.responceCordinates;
		
	/*alert(cordinateArray);
*/
	
	    var latlng = new google.maps.LatLng(12.9599, 77.5083);
	    var myOptions = {
	        zoom: 9,
	        center: latlng,
	        mapTypeId: google.maps.MapTypeId.ROADMAP,
	        mapTypeControl: false
	    };
	   map = new google.maps.Map(document.getElementById("googleMap"),myOptions);
	    /*var infowindow = new google.maps.InfoWindow(), marker,i;
	     map = new google.maps.Map($('#googleMap')[0], options);
*/var phonea,infoWindow;
	$.each(cordinateArray , function(index , value) {
		lat = value["lattitude"];

		 lon = value["longittude"];
		 
		 /*id = value["id"];*/
		 
		 phonea = ""+value["phoneNumber"];
		/* var latLng = new google.maps.LatLng(lat, lon);
         var marker = new google.maps.Marker({
             position: latLng,
             map: map
         });
	});
	*/	  marker = new google.maps.Marker({
	            position: new google.maps.LatLng(lat, lon),
	            map: map,
	            title:phonea
	        });
	/*infoWindow = new google.maps.InfoWindow({
        content: phonea
    });*/
	marker.set('location', phonea);
	 google.maps.event.addListener(marker, 'click', function () {
		 var area = this.get('location');  
         infoWindow.open(map, marker);
     });
	      /*  google.maps.event.addListener(marker, 'click', (function(marker, index) {
	            return function() {
	                infowindow.setContent(phone);
	                infowindow.open(map, index);
	            }
	        })(marker, index));
		*/ 
		/*var phone = value["phoneNumber"];*/
	
		 
		 
		/*	var myCenter=new google.maps.LatLng(lat,lon);
			
			var mapProp = {
					  center:myCenter,
					  zoom:15,
					  mapTypeId:google.maps.MapTypeId.ROADMAP
					  };
			
			var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
			
			var i = "";
			
			var marker=new google.maps.Marker({
				  position:myCenter,
				  });

			var mapProp = {
					  center:myCenter,
					  zoom:15,
					  mapTypeId:google.maps.MapTypeId.ROADMAP
					  };
			
			
			marker.setMap(map);
			google.maps.event.addDomListener(window, 'load', initialize);

*/		 
	 });
	
	
	
}



function adminCourierBookingClicked(){
	
	var customerName = $("#adminCourierBookingName").val().trim();
	var customerAddress = $("#adminCourierBookingAddres").val().trim();
	var customerPhone = $("#adminCourierBookingPhone").val().trim();
	var customerAmount = $("#adminCourierBookingAmount").val().trim();
	var customerLatitude = $("#adminCourierBookingLatitude").val().trim();
	var customerLongitude = $("#adminCourierBookingLongitude").val().trim();
	
	if(customerName == null || customerName.length == 0){
		
		alert("Please Enter Customer Name.");
		$("#adminCourierBookingName").focus();
	}else if(customerAddress == null || customerAddress.length == 0){
		
		alert("Please Enter Customer Address.");
		$("#adminCourierBookingAddres").focus();
	}else if(customerPhone == null || customerPhone.length == 0){
		
		alert("Please Enter Customer Phone number.");
		$("#adminCourierBookingPhone").focus();
	}else if(customerAmount == null || customerAmount.length == 0){
		
		alert("Please Enter Courier Amount.");
		$("#adminCourierBookingAmount").focus();
	}else if(customerLatitude == null || customerLatitude.length == 0){
		
		alert("Please Enter Latitude.");
		$("#adminCourierBookingLatitude").focus();
	}else if(customerLongitude == null || customerLongitude.length == 0){
		
		alert("Please Enter Longitude.");
		$("#adminCourierBookingLongitude").focus();
	}else{
		$("#btnAdminCourierBookingClicked").text("Loading...");
		$.ajax({

			url : "adminCourierBooking",
			type : "POST",
			data : {
				"customerName" : customerName,
				"customerAddres" : customerAddress,
				"customerPhone" : customerPhone,
				"customerAmount" : customerAmount,
				"customerLatitude" : customerLatitude,
				"customerLongitude" : customerLongitude
							
			},
			success : function(responseData, textStatus) {
				$("#btnAdminCourierBookingClicked").text("Submit");
				handleAdminCourierBooking(responseData);
				
				
			},
			error : function(responseData) {
				$("#btnAdminCourierBookingClicked").text("Submit");
				
				alert("sorry could not book the courier due to some internal error.Please try again later.");
			}
		});
	}
	}
	
	
function handleAdminCourierBooking(responseData){
	
	var adminCourierBooking = jQuery.parseJSON(responseData);
	
	if(adminCourierBooking.result){
		
		$("#adminCourierBookingName").val("");
		$("#adminCourierBookingAddres").val("");
		$("#adminCourierBookingPhone").val("");
		$("#adminCourierBookingAmount").val("");
		$("#adminCourierBookingLatitude").val("");
		$("#adminCourierBookingLongitude").val("");
		
		
		
	}
	
}


function adminAllBookedCourierList(){
	
	var userId = localStorage.getItem("userId");
	
	$.ajax({

		url : "adminCourierDetails",
		type : "POST",
		data : {
			"userId" : userId
						
		},
		success : function(responseData, textStatus) {
			
			handleAbsCouriers(responseData);
			
			
		},
		error : function(responseData) {
			
			
			alert("sorry could not book the courier due to some internal error.Please try again later.");
		}
	});

	
}
	


function handleAbsCouriers(absResponce){
	
	
var absCouriersDetails = jQuery.parseJSON(absResponce);
	
	
	if (absCouriersDetails.result) { // We got some courier history
		
		
		var allCouriersArray = absCouriersDetails.all_couriers;
				
		
		if (allCouriersArray != undefined
				&& allCouriersArray != null)
			parseAllCouriersJsonJsonArray(absCouriersDetails);
		
			}else { // We did not get any result for filter criteria
		$("#noHistoryFound").show();
		$("#tblDeliveryBoyBooking").hide();
	
			}
	
}

function parseAllCouriersJsonJsonArray(absCouriersDetailsa){
	
	
	$("#tblAllBookedCouriers tbody").empty();
	var strBulkTotalTablBodyStart = '<tbody>';
	var strBulkTotalTablBodyEnd = '</tbody>';

	// Add offices table header
	$("#tblAllBookedCouriers").append(strBulkTotalTablBodyStart);
	var allCouriersJsonArraya = absCouriersDetailsa.all_couriers;

	
	
	// Adding each booked courier to the table 
	$.each(allCouriersJsonArraya , function(index, value) {
		var strTableRowStart = '<tr style="color:#000000;">';

		var name = value["restaurant_name"];
		var number = value["numberOfCouriers"];
		var extra = value["extraDistance"];
		var pending = value["pending_couriers"];
		var cancelled = value["cancelled_couriers"];
		var delivered = value["delivered_couriers"];
		var total_extra_amount = value["total_extra_amount"];
		
		
		
		
		var strColumnThree = '<td>' + name + '</td>';
		var strColumnFour = '<td> ' + number + ' </td>';
		var strColumnFive = '<td> ' + extra + ' </td>';
		var strColumnSix = '<td><a href="#" onclick="discriptionDetailsClickeds('
			+ value["restaurant_name"] + ');">' + pending + '</a></td>';
		var strColumnSeven = '<td> ' + cancelled + ' </td>';
		var strColumnEight = '<td> ' + delivered + ' </td>';
		var strColumnnine = '<td> ' + total_extra_amount +' </td>';

		var strTableRowEnd = '</tr>';

		$("#tblAllBookedCouriers").append(
				strTableRowStart + strColumnThree
						+ strColumnFour+ strColumnFive+ strColumnSix +strColumnSeven + strColumnEight +strColumnnine +strTableRowEnd);
	});

	// Append body end at the end of the table
	$("#tblAllBookedCouriers").append(strBulkTotalTablBodyEnd);


}

function discriptionDetailsClickeds( checkstatus){
	var chajhdb=checkstatus;
	alert(chajhdb+"");
}

function hotelPaymentDetails(){
	
	var userId = localStorage.getItem("userId");
	
	$.ajax({

		url : "paymentStatus",
		type : "POST",
		data : {
			"restaurantId" : userId
						
		},
		success : function(responseData, textStatus) {
			
			handlePaymentDetails(responseData);
			
			 
		},
		error : function(responseData) {
			
			
			alert("Sorry could not foind any couriers.");
		}
	});
	
}


function handlePaymentDetails(payresponseData){
	
	var paymentDetails = jQuery.parseJSON(payresponseData);
	
	if (paymentDetails.result) { // We got some courier history
		$("#channel").val(paymentDetails.channel);
		$("#account_id").val(paymentDetails.account_id);
		$("#reference_no").val(paymentDetails.reference_no);
		$("#amount").val(paymentDetails.amount);
		$("#mode").val(paymentDetails.mode);
		$("#currency").val(paymentDetails.currency);
		$("#description").val(paymentDetails.description);
		$("#return_url").val(paymentDetails.return_url);
		$("#name").val(paymentDetails.name);
		$("#address").val(paymentDetails.address);
		$("#city").val(paymentDetails.city);
		$("#state").val(paymentDetails.state);
		$("#country").val(paymentDetails.country);
		$("#postal_code").val(paymentDetails.postal_code);
		$("#phone").val(paymentDetails.phone);
		$("#email").val(paymentDetails.email);
		$("#page_id").val(paymentDetails.page_id);
		$("#secure_hash").val(paymentDetails.secure_hash);
		
		/*localStorage.setItem("transactionNumber",paymentDetails.tracking_number);
	*/	
		
		var payCouriersArray = paymentDetails.all_couriers;
				
		
		if (payCouriersArray != undefined
				&& payCouriersArray != null){
			
			
			$("#tblCouriersPayment tbody").empty();
			var strBulkTotalTablBodyStart = '<tbody>';
			var strBulkTotalTablBodyEnd = '</tbody>';

			// Add offices table header
			$("#tblCouriersPayment").append(strBulkTotalTablBodyStart);
			

			
			
			// Adding each booked courier to the table 
			$.each(payCouriersArray , function(index, value) {
				var strTableRowStart = '<tr style="color:#000000;">';

				var name = value["time_of_booking"];
				var number = value["number_of_couriers"];
				var totalAmount = value["amount"];
								
				
				
				
				var strColumnThree = '<td> ' + name + ' </td>';
				var strColumnFour = '<td> ' + number + ' </td>';
				var strColumnSix = '<td> ' + totalAmount + ' </td>';
				
				var strTableRowEnd = '</tr>';

				$("#tblCouriersPayment").append(
						strTableRowStart + strColumnThree
								+ strColumnFour+ strColumnSix +strTableRowEnd);
			});

			// Append body end at the end of the table
			$("#tblCouriersPayment").append(strBulkTotalTablBodyEnd);


		}

			
		}
			

	
	
}
