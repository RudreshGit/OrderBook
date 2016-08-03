$(document).ready(function(){
	
	$("#cusComplHistory").hide();
	$("#cusHistoryList").click(function(){
		
		absCusHistorySubmitClicked();
	});
	
	
});

function absCusHistorySubmitClicked(){
		
	var userId = localStorage.getItem("customer_userid");
	$("#cusHistoryList").text("Loading..");
	
	
	$.ajax({

		url : "deliveredList11",
		type : "POST",
		data : {
			"deliveryBoyId" : userId
		},
		success : function(responseData, textStatus) {
			$("#cusHistoryList").text("History");
			handleCusAbstractHistoryList(responseData);
			
			
		},
		error : function(responseData) {
			$("#cusHistoryList").text("History");
			alert("Sorry could not find any courier history.due to internal error.");
		}
	});
}

function handleCusAbstractHistoryList(responseData){
	
	var deliveryBoyDetails = jQuery.parseJSON(responseData);
	if (deliveryBoyDetails.result) { // We got some courier history
		
		//console.log(allCouriersJsona.couriers);
		var deliveryBoyJsonArray = deliveryBoyDetails.all_couriers;
		
		
		
		if (deliveryBoyJsonArray != undefined
				&& deliveryBoyJsonArray != null)
			
			parseCusabsHistoryJsonArrayAbcd(deliveryBoyDetails);
	} else { // We did not get any result for filter criteria
				alert("Could not find any coriers");
		}
	
}

function parseCusabsHistoryJsonArrayAbcd(deliveryBoyDetails){
	$("#cusAbsHistory").show();
	$("#cusComplHistory").hide();
	$("#tblAbsHistory tbody").empty();
	var strBulkTotalTablBodyStart = '<tbody>';
	var strBulkTotalTablBodyEnd = '</tbody>';

	// Add offices table header
	$("#tblAbsHistory").append(strBulkTotalTablBodyStart);
	var deliveryBoyHistoryJsonArraya = deliveryBoyDetails.all_couriers;

	// Adding each booked courier to the table 
	$.each(deliveryBoyHistoryJsonArraya, function(index, value) {
		var strTableRowStart = '<tr style="color:#000000;">';

		var time = value["time_of_booking"];

		var totalCouriers = value["number_of_couriers"];
		
		var TotalAmount = value["amount"];
		
		var status = value["payedstatus"];
		
		var distace = value["distance"];
		
		/*var content = value["content"];
		
		var vehicle_needed = value["vehicle_needed"];
		
		var deliveryboys_needed = value["deliveryboys_needed"];*/
				
		
		if(totalCouriers == "0"){
			$("#cusAbsHistory").hide();
			$("#cusComplHistory").hide();
			alert("You dont have any history as of now");
			
		}else{
		
		
		var strColumnOne = '<td title="Click here for details."><a onclick="completeHotelHistorySubmitClickedAbcd('
			+ time + ');"> ' + time + ' </td>';
		var strColumnTwo = '<td> ' + totalCouriers + ' </td>';
		var strColumnThree = '<td> ' + TotalAmount + ' </td>';
		var strColumnFour = '<td> ' + status + ' </td>';
		/*var strColumnFive = '<td> ' + content + ' </td>';
		var strColumnSix = '<td> ' + vehicle_needed + ' </td>';
		var strColumnSeven = '<td> ' + deliveryboys_needed + ' </td>';*/
		
		var strTableRowEnd = '</tr>';

		$("#tblAbsHistory").append(
				strTableRowStart + strColumnOne +strColumnTwo+strColumnThree+strColumnFour + strTableRowEnd);
	
		}
		});
	
	// Append body end at the end of the table
	$("#tblAbsHistory").append(strBulkTotalTablBodyEnd);
}

function completeHotelHistorySubmitClickedAbcd(time){
	
	$("#cusComplHistory").show();
	$("#cusAbsHistory").hide();
	/*var historyInput = $("#hotelHistoryInput").val().trim();*/
	var userId = localStorage.getItem("customer_userid");
			
		$.ajax({

			url : "deliveryBoyBookingAdmin",
			type : "POST",
			data : {
				/*"deliveryBoyDate" : historyInput,*/
				"restaurantId"  :  userId
			},
			success : function(responseData, textStatus) {
				
				handleCusBookingCompleteHistory(responseData);
				
				
			},
			error : function(responseData) {
				
				alert("Sorry could not found any couriers.");
				
			}
		});
}




function handleCusBookingCompleteHistory(responseData){
	
var deliveryBoyDetails = jQuery.parseJSON(responseData);
	

	if (deliveryBoyDetails.status) { // We got some courier history
		
		//console.log(allCouriersJsona.couriers);
		var deliveryBoyJsonArray = deliveryBoyDetails.deliveryBoy_booking;
		
		
		
		if (deliveryBoyJsonArray != undefined
				&& deliveryBoyJsonArray != null)
			parseCusBookingHistoryComoleteJsonArray(deliveryBoyDetails);
	} else { // We did not get any result for filter criteria
				$("#tblDeliveryBoyCompleteHistory").hide();
		}
	
	
}

function parseCusBookingHistoryComoleteJsonArray(deliveryBoyDetails){
	
	$("#cusAbsHistory").hide();
	$("#cusComplHistory").show();
	
	$("#tblCusComplHistory tbody").empty();
	var strBulkTotalTablBodyStart = '<tbody>';
	var strBulkTotalTablBodyEnd = '</tbody>';

	// Add offices table header
	$("#tblCusComplHistory").append(strBulkTotalTablBodyStart);
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

		$("#tblCusComplHistory").append(
				strTableRowStart +strColumnTwo +strColumnThree+ strColumnSeven+strColumnEight + strTableRowEnd);
	});

	// Append body end at the end of the table
	$("#tblCusComplHistory").append(strBulkTotalTablBodyEnd);
}

function btnHistoryBackBtnClicked(){
	$("#cusAbsHistory").show();
	$("#cusComplHistory").hide();
}