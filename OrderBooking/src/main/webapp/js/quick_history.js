function getCourierHistory() { 
	$.ajax({
		url : "getCourierHistory",
		type : "POST",
		data : {
			"userId" : localStorage.getItem("userId")
		},
		success : function(responseData, textStatus) {
			
			handleAllBookedCouriersHistory(responseData);
		},
		error : function(responseData) {
			alert("its failure");
			showErrorMsg(SERVER_CONTACT_ERROR);
		}

	});
}

function handleAllBookedCouriersHistory(responseData) {
	
	var allCouriersJsona = jQuery.parseJSON(responseData);

	if (allCouriersJsona.status) { // We got some courier history
		$("#noHistoryFound").hide();
		$("#tblHistory").show();
		//console.log(allCouriersJsona.couriers);
		var courierHistoryJsonArray= allCouriersJsona.couriers;
		if (courierHistoryJsonArray != undefined && courierHistoryJsonArray != null)
			parseCouriersJsonArraya(allCouriersJsona);
	} else { // We did not get any result for filter criteria
		$("#noHistoryFound").show();
		$("#tblHistory").hide();
	}
}



/**
 * This method parses offices json array and populates the data in table
 */
function parseCouriersJsonArraya(allCouriersJsona) {
	
	$("#tblHistory tbody").empty();
	var strOfficesTablBodyStart = '<tbody>';
	var strOfficesTablBodyEnd = '</tbody>';
	
	// Add offices table header
	$("#tblHistory").append(strOfficesTablBodyStart);
	var courierHistoryJsonArraya= allCouriersJsona.couriers;
	// Adding each booked courier to the table 
	$.each(courierHistoryJsonArraya, function (index, value) {
		
		var strTableRowStart = '<tr>';
		var courierContent = value["courier_content"].trim();
		var senderAddress = value["sender_name"].trim() + ", Address: " + value["sender_address"] + ", Pin Code: " + value["sender_pincode"]
							+ ", Phone: " + value["sender_phone"] + ", Email: " + value["sender_email"];
		var receiverAddress = value["receiver_name"].trim() + ", Address: " + value["receiver_address"] + ", Pin Code: " + value["receiver_pincode"]
							+ ", Phone: " + value["receiver_phone"] + ", Email: " + value["receiver_email"];
		
		var officeAddress = value["office_name"] + ", Address: " + value["office_address"];
		
		var status = value["delivery_taken"];
		
		var dateOfBooking = value["date_of_booking"].trim();
		
		if(status == "1"){
			status = "Transaction in-progress";
		} else if(status == "0") {
			status = "Not yet dispatched";
		} else {
			status = "Delivered ";
			
		}
		
		//var d = new Date(dateOfBooking);	
		//d.setFullYear(dateOfBooking);
		
		var strColumnOne = '<td > '+courierContent+' </td>';
		var strColumnSix = '<td> '+dateOfBooking+' </td>';
		var strColumnTwo = '<td> '+senderAddress+' </td>';
		var strColumnThree = '<td> '+receiverAddress+' </td>';
		var strColumnFour = '<td> '+officeAddress+' </td>';
		var strColumnFive = '<td> '+status+' </td>';
		var strTableRowEnd = '</tr>';
		
		// Appending row to table body
		$("#tblHistory").append(strTableRowStart + strColumnOne + strColumnSix +strColumnTwo + strColumnThree + strColumnFour + strColumnFive + strTableRowEnd);
		
	});
	
	// Append body end at the end of the table
	$("#tblHistory").append(strOfficesTablBodyEnd);
}


