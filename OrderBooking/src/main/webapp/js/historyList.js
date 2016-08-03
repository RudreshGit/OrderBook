$(document).ready(function(){
	$("#DeliveryBoyCompleteHistoryTblDIv").hide();
	$("#historyList").click(function(){
		
		$("#idforpayment").hide();
		absHotelHistorySubmitClicked();
	});
	
});

function absHotelHistorySubmitClicked(){
	
	
	$("#DeliveryBoyBookedFrehBookingTblDIv").hide();
	$("#DeliveryBoyAbsHistoryTblDIv").show();	
	$("#DeliveryBoyCompleteHistoryTblDIv").hide();
	$("#tblpaymentDiv").hide();
	var userId = localStorage.getItem("userId");
	$("#historyList").text("loading..");
	$.ajax({

		url : "deliveredList11",
		type : "POST",
		data : {
			"deliveryBoyId" : userId
		},
		success : function(responseData, textStatus) {
			$("#historyList").text("History");
			handleAbstractHistoryList(responseData);
			
			
		},
		error : function(responseData) {
			$("#historyList").text("History");
			alert("Sorry Coluldn't Book Due TO some Internal Error.Please Try Again Later");
		}
	});

	
}

function handleAbstractHistoryList(historyresponseData){
	

	var deliveryBoyDetails = jQuery.parseJSON(historyresponseData);
	if (deliveryBoyDetails.result) { // We got some courier history
		
		//console.log(allCouriersJsona.couriers);
		var deliveryBoyJsonArray = deliveryBoyDetails.all_couriers;
		
		
		
		if (deliveryBoyJsonArray != undefined
				&& deliveryBoyJsonArray != null)
			
			parseabsHistoryJsonArray(deliveryBoyDetails);
	} else { // We did not get any result for filter criteria
				$("#tblDeliveryBoyAbsHistory").hide();
		}
	
}


function parseabsHistoryJsonArray(deliveryBoyDetailsa){
	
	
	$("#tblDeliveryBoyAbsHistory tbody").empty();
	var strBulkTotalTablBodyStart = '<tbody>';
	var strBulkTotalTablBodyEnd = '</tbody>';

	// Add offices table header
	$("#tblDeliveryBoyAbsHistory").append(strBulkTotalTablBodyStart);
	var deliveryBoyHistoryJsonArraya = deliveryBoyDetailsa.all_couriers;

	// Adding each booked courier to the table 
	$.each(deliveryBoyHistoryJsonArraya, function(index, value) {
		var strTableRowStart = '<tr style="color:#000000;">';

		var time = value["time_of_booking"];

		var totalCouriers = value["number_of_couriers"];
		
		var TotalAmount = value["amount"];
		
		var status = value["payedstatus"];
		
		var distace = value["distance"];
				
		
		if(totalCouriers == "0"){
			
			$("#DeliveryBoyAbsHistoryTblDIv").hide();	
			$("#DeliveryBoyCompleteHistoryTblDIv").hide();
			alert("There is no history found");
			
		}
		
		
		var strColumnOne = '<td><a onclick="completeHotelHistorySubmitClickedAbcde('
			+ time + ');">' + time + ' </td>';
		var strColumnTwo = '<td> ' + totalCouriers + ' </td>';
		var strColumnThree = '<td> ' + TotalAmount + ' </td>';
		var strColumnFour = '<td> ' + status + ' </td>';
		var strColumnFive = '<td> ' + distace + ' </td>';
		
		var strTableRowEnd = '</tr>';

		$("#tblDeliveryBoyAbsHistory").append(
				strTableRowStart + strColumnOne + strColumnTwo+strColumnThree+strColumnFour +strColumnFive+ strTableRowEnd);
	});

	// Append body end at the end of the table
	$("#tblDeliveryBoyAbsHistory").append(strBulkTotalTablBodyEnd);

	
}


function completeHotelHistorySubmitClickedAbcde(time){
	
	
	$("#DeliveryBoyAbsHistoryTblDIv").hide();
	
	
	$("#DeliveryBoyCompleteHistoryTblDIv").show();
	/*var historyInput = $("#hotelHistoryInput").val().trim();*/
	var restauRantId = localStorage.getItem("userId");
			
		$.ajax({

			url : "deliveryBoyBookingAdmin",
			type : "POST",
			data : {
				/*"deliveryBoyDate" : historyInput,*/
				"restaurantId"  :  restauRantId
			},
			success : function(responseData, textStatus) {
				
				handleHotelBookingCompleteHistory(responseData);
				
				
			},
			error : function(responseData) {
				
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

function historyBackButtonClicked(){
	absHotelHistorySubmitClicked();
	
}
