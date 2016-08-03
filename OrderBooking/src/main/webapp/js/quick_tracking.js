/**
 * Scripts used for quick tracking function
 */

$(document).ready(function() {
	$("#trackingDetailsHeader").hide();
	$("#btnTracking").click(function(){
		validateTrackingFormFields();
	});
});


/**
 * This method is called when user clicks on Track button
 * Tracking form field is validated
 */
function validateTrackingFormFields() {
	var strTrackingNumber = $("#txtTrackingNumber").val().trim();

	if(strTrackingNumber == null || strTrackingNumber.length == 0) {
		showErrorMsg(EMPTY_TRACKING_NUMBER);
	} else if(isNaN(strTrackingNumber)) {
		showErrorMsg(INVALID_TRACKING_NUMBER);
	} else {
		$("#btnTracking").button("loading");
		$.ajax({
			url: "trackBooking",
			type: "POST",
			data: {
				"trackingNumber" : strTrackingNumber
			},
			success: function(responseData, textStatus) {
				handleQuickTrackingResponseData(responseData);
		    },
		    error : function(responseData) {
		    	$("#trackingDetailsTableContainer").hide();
		    	$("#btnTracking").button("reset");
		    	showErrorMsg(SERVER_CONTACT_ERROR);
		    }
				
		});
	}
}

/**
 * This method is called when tracking response is received from server
 */
function handleQuickTrackingResponseData(responseData) {
	$("#btnTracking").button("reset");
	var trackingJsonData = jQuery.parseJSON(responseData);
	$("#trackingDetailsHeader").show();
	if(trackingJsonData.tracking_status) {
		
			$("#trackingDetailsTableContainer").show();
			$("#trackingDetailsHeader").text("Currently your courier is at the following address:");
			$("#trackingOfficeAddress").text( trackingJsonData.office_address);
			$("#trackingsenderAddress").text( trackingJsonData.sender_address);
			$("#trackingrecieverAddress").text( trackingJsonData.receiver_address);
			$("#trackingCourierCurrentposition").text( trackingJsonData.current_position_address);
			var detailsdeliveryboy = "";
			var status = "";
			if(trackingJsonData.delivery_status == "1"){
				status = "Transaction in-progress";
				detailsdeliveryboy = trackingJsonData.delivery_boy_full_name + ", " +trackingJsonData.delivery_boy_email_address+trackingJsonData.delivery_boy_mobile_number+trackingJsonData.delivery_boy_id;
			} else if(trackingJsonData.delivery_status == "0") {
				status = "Not yet dispatched";
				detailsdeliveryboy = "We will update once courier is dispatched";
			} else {
				status = "Delivered ";
				detailsdeliveryboy = trackingJsonData.delivery_boy_full_name+trackingJsonData.delivery_boy_email_address+trackingJsonData.delivery_boy_mobile_number+trackingJsonData.delivery_boy_id;
				
			}
				
			$("#trackingDeliveryBoyDetails").text(detailsdeliveryboy);
			$("#trackingStatus").text(status);
			$("#trackingEstDeliveryTime").text(trackingJsonData.estimated_Time);
				
		
	} else {
		$("#trackingDetailsTableContainer").hide();
		$("#trackingDetailsHeader").text("Sorry! tracking number not found.");
		clearValues();
	}
}

function clearValues() {
	$("#trackingOffice").text("");
	$("#trackingAddress").text("");
	$("#trackingPinCode").text("");
	$("#trackingAreaName").text("");
	$("#trackingPhone").text("");
}



