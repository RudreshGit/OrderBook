
var selectedCourierId = 0;
var selectedOfficeId = 0;

$(document).ready(function(){
	 /**
     * Called when user clicks on Search button in change office 
     */ 
    $("#btnChangeOfficeSearchOffices").click(function(){
    	$("#tblChangeOffices").show();
    	searchChangeOfficeDetails();
    });
});


/**
 * This method is called when user clicks on search button when changing the office
 */
function searchChangeOfficeDetails() {
	var strPinCode = $("#txtChangeOfficeBookingSearchPinCode").val().trim();
	var strAreaName = $("#txtChangeOfficeBookingSearchAreaName").val().trim();
	var strCityName = $("#txtChangeOfficeBookingSearchCityName").val().trim();
	
	// Validating if user entered atleast one search criteria
	if(strPinCode.length !=0 || strAreaName.length != 0 ||strCityName.length != 0) {
		getAllOfficesForChangeOffice(strPinCode, strAreaName, strCityName)
	} 
}

/**
 * Loading booked couriers for the logged in user
 */
function getChangeOfficeCourierHistory() { 
	$("#changeOfficeTableHeader").text("Undispatched couriers:");
	$("#tblChangeOfficeFilterOptions").hide();
	$.ajax({
		url : "getCourierHistory",
		type : "POST",
		data : {
			"userId" : localStorage.getItem("userId")
		},
		success : function(responseData, textStatus) {
			handleChangeOfficeAllBookedCouriersHistory(responseData);
		},
		error : function(responseData) {
			showErrorMsg(SERVER_CONTACT_ERROR);
		}

	});
}

/**
 * Handle controller json response
 * @param responseData
 */
function handleChangeOfficeAllBookedCouriersHistory(responseData) {
	var allCouriersJson = jQuery.parseJSON(responseData);

	if (allCouriersJson.status) { // We got some courier history
		$("#noChangeOfficeMsg").hide();
		$("#tblChangeOfficeHistory").show();
		var couriersJsonArray = allCouriersJson.couriers;
		if (couriersJsonArray != undefined && couriersJsonArray != null)
			parseCouriersJsonArray(couriersJsonArray);

	} else { // We did not get any result for filter criteria
		$("#noChangeOfficeMsg").show();
		$("#noChangeOfficeMsg").text("No couriers available to change.");
		$("#tblChangeOfficeHistory").hide();
	}
}


/**
 * Showing the un dispatched couriers in table
 */
function parseCouriersJsonArray(couriersJsonArray) {
	
	$("#tblChangeOfficeHistory tbody").empty();
	var strOfficesTablBodyStart = '<tbody>';
	var strOfficesTablBodyEnd = '</tbody>';
	
	// Add offices table header
	$("#tblChangeOfficeHistory").append(strOfficesTablBodyStart);
	
	// Adding each booked courier to the table 
	$.each(couriersJsonArray, function (index, value) {
		
		var status = value["delivery_taken"];
		if(status == "0") {
			var strTableRowStart = '<tr >';
			var courierContent = value["courier_content"].trim();
			var senderAddress = value["sender_name"].trim() + ", Address: " + value["sender_address"] + ", Pin Code: " + value["sender_pincode"]
								+ ", Phone: " + value["sender_phone"] + ", Email: " + value["sender_email"];
			var receiverAddress = value["receiver_name"].trim() + ", Address: " + value["receiver_address"] + ", Pin Code: " + value["receiver_pincode"]
								+ ", Phone: " + value["receiver_phone"] + ", Email: " + value["receiver_email"];
			
			var officeAddress = value["office_name"] + ", Address: " + value["office_address"];
			
			
			
			var dateOfBooking = value["date_of_booking"].trim();
			
			var d = new Date(dateOfBooking);	
			//d.setFullYear(dateOfBooking);
			
			var strColumnOne = '<td> '+courierContent+' </td>';
			var strColumnSix = '<td> '+d+' </td>';
			var strColumnTwo = '<td> '+senderAddress+' </td>';
			var strColumnThree = '<td> '+receiverAddress+' </td>';
			var strColumnFour = '<td> '+officeAddress+' </td>';
			var strColumnFive = '<td style="text-align: center;">'
									+ '<button class="btn btn-success" id="delete1" onclick="changeOfficeBtnClicked('+value["booking_id"]+');"> Change Office </button>'
								 +'</td>';
			var strTableRowEnd = '</tr>';
			
			// Appending row to table body
			$("#tblChangeOfficeHistory").append(strTableRowStart + strColumnOne + strColumnSix +strColumnTwo + strColumnThree + strColumnFour + strColumnFive + strTableRowEnd);
        
		}
		
	});
	
	
	// Append body end at the end of the table
	$("#tblChangeOfficeHistory").append(strOfficesTablBodyEnd);
}

/**
 * This method is called when user clicks on Change Office button in courier list table
 */
function changeOfficeBtnClicked(courierId) {
	$("#quickBackToCourier").show();
	selectedCourierId = courierId;
	var lastSavedZipCode = localStorage.getItem("currentZipCode");
	if(lastSavedZipCode != null)
		getAllOfficesForChangeOffice(lastSavedZipCode, "", "");
	else 
		getAllOfficesForChangeOffice("", "", "");
}

/**
 * This method gets all available offices based on the search criteria
 * @param strPinCode
 * @param strAreaName
 * @param strCityName
 */
function getAllOfficesForChangeOffice(strPinCode, strAreaName, strCityName) {
	$("#tblChangeOfficeFilterOptions").show();
	$("#tblChangeOffices").show();
	$("#changeOfficeTableHeader").text("Offices:");
	$("#tblChangeOfficeHistory").hide(); // Always hide the other table
	$.ajax({
		url: "getOffices",
		type: "POST",
		data: {
			"pinCode" : strPinCode,
			"areaName" : strAreaName,
			"cityName" : strCityName
		},
		success: function(responseData, textStatus) {
			handleAllOfficesChangeOfficeData(responseData);  
	    },
	    error : function(responseData) {
	    	showErrorMsg(SERVER_CONTACT_ERROR);
	    }
			
	});
}


/**
 * This method is called when all offices response is received from server
 */
function handleAllOfficesChangeOfficeData(allOfficesResponseData) {
	
	var allOfficesJsonData = jQuery.parseJSON(allOfficesResponseData);
	
	if(allOfficesJsonData.result_available) { // We got some offices
		$("#noChangeOfficeMsg").hide();
		var officesJsonArray = allOfficesJsonData.offices;
		if(officesJsonArray != undefined && officesJsonArray != null)
			parseOfficesJsonArrayForChangeOffice(officesJsonArray);
		
	} else { // We did not get any result for filter criteria
		$("#noChangeOfficeMsg").show();
		$("#noChangeOfficeMsg").text("No offices.");
	}
	
}

/**
 * This method parses offices json array and populates the data in table
 */
function parseOfficesJsonArrayForChangeOffice(officesJsonArray) {
	
	//$('#tblChangeOfficeHistory tbody').empty();
	
	
	var strOfficesTblHeader = '<thead style="background-color: #07C77C;">' 
								+ '<tr>'
										+'<th style="text-align: center;">Name</th>'
										+'<th style="text-align: center;">Address</th>'
										+'<th style="text-align: center;">Pin Code</th>'
										+'<th style="text-align: center;">Contact</th>'
										+'<th style="text-align: center;">Available Time</th>'
										+'<th style="text-align: center;">Opening Days</th>'
										+'<th style="text-align: center;">Action</th>'
								+'</tr>'
								+'</thead>';
	var strOfficesTablBodyStart = '<tbody>';
	var strOfficesTablBodyEnd = '</tbody>';
	
	// Add offices table header
	$("#tblChangeOffices").append(strOfficesTblHeader + strOfficesTablBodyStart);
	
	// Adding rows to the table based on the locations retreived from server
	$.each(officesJsonArray, function (index, value) {
		
		var strTableRowStart = '<tr>';
			
		var strColumnOne = '<td> '+value["office_name"]+' </td>';
		var strColumnTwo = '<td> '+value["office_address"]+' </td>';
		var strColumnThree = '<td> '+value["office_pincode"]+' </td>';
		var strColumnFour = '<td> '+value["office_contact_details"]+' </td>';
		var strColumnFive = '<td> '+value["office_available_time"]+' </td>';
		var strColumnSix = '<td> '+value["office_opening_days"]+' </td>';
		var strColumnSeven = '<td style="text-align: center;">'
								+ '<button class="btn btn-success" id="textModal" onclick="changeNowBtnClicked('+value["office_id"]+');"> Change Now </button>' 
							+'</td>';
		//$('#tblChangeOfficeHistory tbody').empty();
		
		var strTableRowEnd = '</tr>';
		
		// Appending row to table body
		$("#tblChangeOffices").append(strTableRowStart + strColumnOne + strColumnTwo + strColumnThree + strColumnFour + strColumnFive + strColumnSix + strColumnSeven + strTableRowEnd);
		
	});
	
	// Append body end at the end of the table
	$("#tblChangeOffices").append(strOfficesTablBodyEnd);
}

/**
 * This method is called when user clicks on Select button from the offices table
 * @param officeId
 */
function changeNowBtnClicked(officeId) {
	alert("Dear customer, Are you sure to change the courier office?");
	$('#tblChangeOfficeHistory tbody').empty();
	$("#tblChangeOffices").hide();
	$.ajax({
		url: "changeOffice",
		type: "POST",
		data: {
			"bookingId" : selectedCourierId,
			"officeId" : officeId
		},
		success: function(responseData, textStatus) {
			handleChangeOfficeData(responseData);  
	    },
	    error : function(responseData) {
	    	showErrorMsg(SERVER_CONTACT_ERROR);
	    }
			
	});
} 

function handleChangeOfficeData(changeOfficeData) {
	var changeOfficeJsonData = jQuery.parseJSON(changeOfficeData);
	
	if(changeOfficeJsonData.result) { // We got some offices
		$("#successMsgContainer").show().delay(5000).fadeOut();
		$("#promptMsg").text(OFFICE_CHANGE_SUCCESS);
		getChangeOfficeCourierHistory(); // Reload the table
	} else {
		showErrorMsg(OFFICE_CHANGE_FAILED);
	}
}



	
