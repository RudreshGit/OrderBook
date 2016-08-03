/**
 * Scripts used for quick cancellation function
 */

$(document).ready(function() {
	$("#btnCancel").click(function(){
		validateCancellationFormFields();
	});
});

/**
 * This method shows a confirmation dialog to cancel the courier
 * @returns {Boolean}
 */
function showConfirmation(){
	var strTrackingNumber = $("#txtCancellationTrackingNumber").val().trim();
    var retVal = confirm("Are you sure to cancel?");
    if( retVal == true ){
    	$("#btnCancel").button("loading");
    	$.ajax({
			url: "cancellation",
			type: "POST",
			data: {
				"trackingNumber" : strTrackingNumber
			},
			success: function(responseData, textStatus) {
				handleQuickCancellationResponseData(responseData);
		    },
		    error : function(responseData) {
		    	$("#btnCancel").button("reset");
		    	showErrorMsg(SERVER_CONTACT_ERROR);
		    }
				
		});
    }
    else{
       return false;
    }
 }

/**
 * This method is called when user clicks on Cancel button
 * Cancellation form field is validated
 */
function validateCancellationFormFields() {
	var strTrackingNumber = $("#txtCancellationTrackingNumber").val().trim();

	if(strTrackingNumber == null || strTrackingNumber.length == 0) {
		showErrorMsg(EMPTY_TRACKING_NUMBER);
	} else if(isNaN(strTrackingNumber)) {
		showErrorMsg(INVALID_TRACKING_NUMBER);
	} else {
		showConfirmation(); 
	}
}

/**
 * This method is called when cancellation response is received from server
 */
function handleQuickCancellationResponseData(responseData) {
	$("#btnCancel").button("reset");
	var cancellationJsonData = jQuery.parseJSON(responseData);
	if(cancellationJsonData.cancellation_status) {
		$("#successMsgContainer").show().delay(5000).fadeOut();
		$("#promptMsg").text(CANCELLATION_DONE);
	} else if(cancellationJsonData.dispatched_already){
		showErrorMsg(DISPATCHED_ALREADY);
	} else {
		showErrorMsg(NO_TRACKING_NUMBER);
	}
}

