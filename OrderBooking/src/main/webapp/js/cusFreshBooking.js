$(document).ready(function(){
	$("#cusComplFreshBooking").hide();
	$("#cusFreshBookingList").click(function(){
		
		$("#cusComplFreshBooking").hide();
		$("#cusAbsFreshBooking").show();
		
		var userId = localStorage.getItem("customer_userid");
		$("#cusFreshBookingList").text("Loading");
		$.ajax({

			url : "freshDeliveryBoyBooking",
			type : "POST",
			data : {
				"restaurantId" : userId,
				"booking_id" : "0"
						},
			success : function(responseData, textStatus) {
				$("#cusFreshBookingList").text("Fresh Booking");
				
				handlecustomerFreshBookingList(responseData);
				
				
			},
			error : function(responseData) {
				$("#cusFreshBookingList").text("Fresh Booking");
				alert("Sorry could not find any courier on that day.");
			}
		});

		
	});
	
});

function handlecustomerFreshBookingList(responseData){
	
var deliveryBoyFreshDetails = jQuery.parseJSON(responseData);
	
	if (deliveryBoyFreshDetails.status) { // We got some courier history
		
		var deliveryBoyFreshArray = deliveryBoyFreshDetails.fresh_booking;
	
		if (deliveryBoyFreshArray != undefined
				&& deliveryBoyFreshArray != null)
			parseCusBookingFreshDetailsJsonArray(deliveryBoyFreshDetails);
	} else { // We did not get any result for filter criteria
				$("#tblDeliveryBoyBookingAbsFreshBooking").hide();
				alert("sorry could not find any couriers on the day.")
		}
}


function parseCusBookingFreshDetailsJsonArray(deliveryBoyFreshDetails){
	
	
	$("#tblCustomerFreshBooking tbody").empty();
	var strBulkTotalTablBodyStart = '<tbody>';
	var strBulkTotalTablBodyEnd = '</tbody>';

	// Add offices table header
	$("#tblCustomerFreshBooking").append(strBulkTotalTablBodyStart);
	var deliveryBoyFreshJsonArraya = deliveryBoyFreshDetails.fresh_booking;

	// Adding each booked courier to the table 
	$.each(deliveryBoyFreshJsonArraya, function(index, value) {
		var strTableRowStart = '<tr style="color:#000000;">';

		var OrderTrackingId = value["booking_Id"];
		
		/*var recieverName = value["full_name"];
		
		var recieverContact = value["mobile_number"];
		
		var DeliveryBoyId = value["delivery_boy_id"];*/
		
		var status = value["status"];
		
		if(status == 0){
			
			statustext = "Pending";
		}else if(status == 1){
			
			statustext = "Accepted";
		}else if(status == 2){
			
			statustext = "Picked";
		}else if(status == 3){
			
			statustext = "Delivered";
		}
		
		var strColumnOne = '<td title="Click here to view details."> <a href="#" onclick="freshbookingcuscompleteClicked('
			+ OrderTrackingId + ');">'  + OrderTrackingId + ' </td>';
		/*var strColumnTwo = '<td> ' + recieverName + ' </td>';
		var strColumnThree = '<td> ' + recieverContact + ' </td>';
		var strColumnFour = '<td> ' + DeliveryBoyId + ' </td>';*/
		var strColumnFive = '<td> ' + statustext + ' </td>';
				
		

		var strTableRowEnd = '</tr>';

		$("#tblCustomerFreshBooking").append(
				strTableRowStart + strColumnOne +strColumnFive + strTableRowEnd);
	});

	// Append body end at the end of the table
	$("#tblCustomerFreshBooking").append(strBulkTotalTablBodyEnd);

}


function freshbookingcuscompleteClicked(OrderTrackingId){
	
	$("#cusAbsFreshBooking").hide();
	$("#cusComplFreshBooking").show();
	
	var userId = localStorage.getItem("customer_userid");
	
	$.ajax({

		url : "freshDeliveryBoyBooking",
		type : "POST",
		data : {
			"restaurantId" : userId,
			"booking_id" : OrderTrackingId
					},
		success : function(responseData, textStatus) {
			
			handleCompleteCusFreshBookingList(responseData);
		},
		error : function(responseData) {
			
			alert("Sorry Coluldn't Book Due TO some Internal Error.Please Try Again Later");
		}
	});
	
}


function handleCompleteCusFreshBookingList(responseData){
	
	var deliveryBoyFreshDetails = jQuery.parseJSON(responseData);
	
	if (deliveryBoyFreshDetails.status) { // We got some courier history
				
		var deliveryBoyFreshArray = deliveryBoyFreshDetails.fresh_booking;
	
		if (deliveryBoyFreshArray != undefined
				&& deliveryBoyFreshArray != null)
			parseCusBookingCompleteFreshDetailsJsonArray(deliveryBoyFreshDetails);
	} else { // We did not get any result for filter criteria
				$("#tblDeliveryBoyBookingFreshBooking").hide();
		}

}

function parseCusBookingCompleteFreshDetailsJsonArray(deliveryBoyFreshDetails){
	
	$("#tblCusCompletetomerFreshBooking tbody").empty();
	var strBulkTotalTablBodyStart = '<tbody>';
	var strBulkTotalTablBodyEnd = '</tbody>';

	// Add offices table header
	$("#tblCusCompletetomerFreshBooking").append(strBulkTotalTablBodyStart);
	var deliveryBoyFreshJsonArraya = deliveryBoyFreshDetails.fresh_booking;

	// Adding each booked courier to the table 
	$.each(deliveryBoyFreshJsonArraya, function(index, value) {
		var strTableRowStart = '<tr>';

		var OrderTrackingId = value["booking_Id"];
		
		var recieverName = value["full_name"];
		
		var recieverContact = value["reciever_address"];
		
		var DeliveryBoyName = value["full_name"];
		
		var DeliveryBoyPhone = value["mobile_number"];
		
		var status = value["status"];
		
		var content = value["content"];
		
		var vehicle_needed = value["vehicle_needed"];
		
		var deliveryboys_needed = value["deliveryboys_needed"];
		
		if(status == 0){
			
			statustext = "Pending";
		}else if(status == 1){
			
			statustext = "Accepted";
		}else if(status == 2){
			
			statustext = "Picked";
		}else if(status == 3){
			
			statustext = "Delivered";
		}
		
		var strColumnOne = '<td> ' + OrderTrackingId + ' </td>';
		var strColumnThree = '<td> ' + recieverContact + ' </td>';
		var strColumnFour = '<td> ' + DeliveryBoyName + ","+DeliveryBoyPhone + ' </td>';
		var strColumnFive = '<td> ' + statustext + ' </td>';
		var strColumnSix = '<td> ' + content + ' </td>';
		var strColumnSeven = '<td> ' + vehicle_needed + ' </td>';
		var strColumnEight = '<td> ' + deliveryboys_needed + ' </td>';
		

		var strTableRowEnd = '</tr>';

		$("#tblCusCompletetomerFreshBooking").append(
				strTableRowStart + strColumnOne +strColumnSix+strColumnThree+strColumnFour +strColumnFive+strColumnEight+strColumnSeven+ strTableRowEnd);
	});

	// Append body end at the end of the table
	$("#tblCusCompletetomerFreshBooking").append(strBulkTotalTablBodyEnd);
}

function btnBackCustomerFreshBooking(){
	
	$("#cusComplFreshBooking").hide();
	$("#cusAbsFreshBooking").show();
}