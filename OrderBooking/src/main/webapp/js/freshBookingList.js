$(document).ready(function(){
	
	$("#DeliveryBoyBookedFrehBookingTblDIv").hide();
	
	$("#freshbookingList").click(function(){
		$("#idforpayment").hide();
		freshBookingListClicked();
	});
	
});


function freshBookingListClicked(){
	
	var userId = localStorage.getItem("userId");
	$("#DeliveryBoyBookedAbsFrehBookingTblDIv").show();
	$("#DeliveryBoyBookedFrehBookingTblDIv").hide();
	$("#freshbookingList").text("loading...");
	$.ajax({
		

		url : "freshDeliveryBoyBooking",
		type : "POST",
		data : {
			"restaurantId" : userId,
			"booking_id" : "0"
					},
		success : function(responseData, textStatus) {
			$("#freshbookingList").text("Fresh Bookings");
			handleFreshBookingList(responseData);
			
			
		},
		error : function(responseData) {
			$("#freshbookingList").text("Fresh Bookings");
			alert("Sorry Coluldn't Book Due TO some Internal Error.Please Try Again Later");
		}
	});

	
}



function handleFreshBookingList(freshBookingResponseData){
	
	var deliveryBoyFreshDetails = jQuery.parseJSON(freshBookingResponseData);
	
	if (deliveryBoyFreshDetails.status) { // We got some courier history
		
		var deliveryBoyFreshArray = deliveryBoyFreshDetails.fresh_booking;
	
		if (deliveryBoyFreshArray != undefined
				&& deliveryBoyFreshArray != null)
			parseHotelBookingFreshDetailsJsonArray(deliveryBoyFreshDetails);
	} else { // We did not get any result for filter criteria
				$("#tblDeliveryBoyBookingAbsFreshBooking").hide();
				alert("sorry could not find any couriers on the day.")
		}

	
}


function parseHotelBookingFreshDetailsJsonArray(deliveryBoyFreshDetailsa){
	
	$("#tblDeliveryBoyBookingAbsFreshBooking tbody").empty();
	var strBulkTotalTablBodyStart = '<tbody >';
	var strBulkTotalTablBodyEnd = '</tbody>';

	// Add offices table header
	$("#tblDeliveryBoyBookingAbsFreshBooking").append(strBulkTotalTablBodyStart);
	var deliveryBoyFreshJsonArraya = deliveryBoyFreshDetailsa.fresh_booking;

	// Adding each booked courier to the table 
	$.each(deliveryBoyFreshJsonArraya, function(index, value) {
		var strTableRowStart = '<tr>';

		var OrderTrackingId = value["booking_Id"];
		
		/*var recieverName = value["full_name"];
		
		var recieverContact = value["mobile_number"];
		
		var DeliveryBoyId = value["delivery_boy_id"];*/
		
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
		
		var strColumnOne = '<td> <a onclick="freshbookingcompleteClicked('
			+ OrderTrackingId + ');">'  + OrderTrackingId + ' </td>';
		/*var strColumnTwo = '<td> ' + recieverName + ' </td>';
		var strColumnThree = '<td> ' + recieverContact + ' </td>';
		var strColumnFour = '<td> ' + DeliveryBoyId + ' </td>';*/
		var strColumnFive = '<td> ' + statustext + ' </td>';
				
		

		var strTableRowEnd = '</tr>';

		$("#tblDeliveryBoyBookingAbsFreshBooking").append(
				strTableRowStart + strColumnOne +strColumnFive + strTableRowEnd);
	});

	// Append body end at the end of the table
	$("#tblDeliveryBoyBookingAbsFreshBooking").append(strBulkTotalTablBodyEnd);

	
}

function freshbookingcompleteClicked(OrderTrackingId){
	$("#cusAbsFreshBooking").hide();
	$("#cusComplFreshBooking").show();
	var userId = localStorage.getItem("userId");
	
	$.ajax({

		url : "freshDeliveryBoyBooking",
		type : "POST",
		data : {
			"restaurantId" : userId,
			"booking_id" :OrderTrackingId
					},
		success : function(responseData, textStatus) {
			
			handleCompleteFreshBookingList(responseData);
		},
		error : function(responseData) {
			
			alert("Sorry Coluldn't Book Due TO some Internal Error.Please Try Again Later");
		}
	});

	
}



function handleCompleteFreshBookingList(freshBookingResponseData){
	
	var deliveryBoyFreshDetails = jQuery.parseJSON(freshBookingResponseData);
	
	if (deliveryBoyFreshDetails.status) { // We got some courier history
				
		$("#DeliveryBoyBookedAbsFrehBookingTblDIv").hide();
		$("#DeliveryBoyBookedFrehBookingTblDIv").show();
		
		var deliveryBoyFreshArray = deliveryBoyFreshDetails.fresh_booking;
	
		if (deliveryBoyFreshArray != undefined
				&& deliveryBoyFreshArray != null)
			parseHotelBookingCompleteFreshDetailsJsonArray(deliveryBoyFreshDetails);
	} else { // We did not get any result for filter criteria
				$("#tblDeliveryBoyBookingFreshBooking").hide();
		}

	
}


function parseHotelBookingCompleteFreshDetailsJsonArray(deliveryBoyFreshDetailsa){
	
	$("#DeliveryBoyBookedFrehBookingTblDIv").show();
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
		
		var receiverDetails = value["reciever_address"]
		
		/*var DeliveryBoyId = value["delivery_boy_id"];*/
		
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
		var strColumnTwo = '<td> ' + receiverDetails + ' </td>';
		var strColumnThree = '<td> ' + recieverName +","+ recieverContact + ' </td>';
		/*var strColumnFour = '<td> ' + DeliveryBoyId + ' </td>';*/
		var strColumnFive = '<td> ' + statustext + ' </td>';
				
		

		var strTableRowEnd = '</tr>';

		$("#tblDeliveryBoyBookingFreshBooking").append(
				strTableRowStart + strColumnOne + strColumnTwo+strColumnThree+strColumnFive + strTableRowEnd);
	});

	// Append body end at the end of the table
	$("#tblDeliveryBoyBookingFreshBooking").append(strBulkTotalTablBodyEnd);

	
}

function freshBookingBackClicked(){
	
	freshBookingListClicked();
}
