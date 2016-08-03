/**
 * This java script file contains scripts used for quick booking function
 */

var officeId = 0;
var encryptedPaymentRequestParams = "";
var encryptedBillingDetails = "";
var encryptedShippingDetails = "";

$(document).ready(function() {
	
	$("#quickBookingStep1").addClass("active");
	hideAllBookingContentAreas();
	$("#quickBookingStep1Content").show();
	
	$("#quickBookingContainer").hide();
	
	$('#chkDeliverIn4Hours').change(function() {
        if($(this).is(":checked")) {
        	uncheckAllOptionsInCourierDetails();
        	$(this).prop("checked",true);
        } else {
        	
        }
    });
	
	$('#chkConfedentialDelivery').change(function() {
        if($(this).is(":checked")) {
        	uncheckAllOptionsInCourierDetails();
        	$(this).prop("checked",true);
        } else {
        	
        }
    });
	
	$('#chkDeliverIn24Hours').change(function() {
        if($(this).is(":checked")) {
        	uncheckAllOptionsInCourierDetails();
        	$(this).prop("checked",true);
        } else {
        	
        }
    });
	
	
//
//    /**
//     * Quick booking click event on tabs
//     */
//    $("#quickBookingStep1 a").click(function (e) {
//    	removeActivePropertyForAllTabs();
//    	$(this).addClass("active");
//    	hideAllBookingContentAreas();
//    	$("#quickBookingStep1Content").show();
//    	$("#txtBookingSearchPinCode").focus();
//    	e.preventDefault()
//    	$(this).tab('show')
//    });
//    
//    $("#quickBookingStep2 a").click(function (e) {
//    	if(officeId != 0) {
//    		removeActivePropertyForAllTabs();
//        	$(this).addClass("active");
//        	hideAllBookingContentAreas();
//        	$("#quickBookingStep2Content").show();
//        	$("#txtBookingReceiverName").focus();
//        	e.preventDefault()
//        	$(this).tab('show')	
//    	}
//    });
//    
//    $("#quickBookingStep3 a").click(function (e) {
//    	if(officeId != 0) {
//    		removeActivePropertyForAllTabs();
//        	$(this).addClass("active");
//        	hideAllBookingContentAreas();
//        	$("#quickBookingStep3Content").show();
//        	$("#txtCourierContent").focus();
//        	$('#chkTermsAndConditions').prop('checked',true);
//        	e.preventDefault()
//        	$(this).tab('show')	
//    	}
//    });
//    
//    $("#quickBookingStep4 a").click(function (e) {
//    	if(officeId != 0) {
//    		removeActivePropertyForAllTabs();
//    	  	$(this).addClass("active");
//    	  	hideAllBookingContentAreas();
//        	$("#quickBookingStep4Content").show();
//        	e.preventDefault()
//        	$(this).tab('show')	
//    	}
//    });
//    
    /**
     * Called when user clicks on Search button
     */
    $("#btnSearchOffices").click(function(){
    	searchOffices();
    });
    
    
});

/**
 * Uncheck all the check boxes as user clicks on them and highlight only the clicked one
 */
function uncheckAllOptionsInCourierDetails() {
	$('#chkDeliverIn4Hours').prop("checked",false);
	$('#chkConfedentialDelivery').prop("checked",false);
	$('#chkDeliverIn24Hours').prop("checked",false);
}




/**
 * This method is called when user clicks on search button
 */
function searchOffices() {
	var strPinCode = $("#txtBookingSearchPinCode").val().trim();
	var strAreaName = $("#txtBookingSearchAreaName").val().trim();
	var strCityName = $("#txtBookingSearchCityName").val().trim();
	
	// Validating if user entered atleast one search criteria
	if(strPinCode.length !=0 || strAreaName.length != 0 ||strCityName.length != 0) {
		getAllOffices(strPinCode, strAreaName, strCityName)
	} 
}

/**
 * This method removes active class property for all tabs
 */
function removeActivePropertyForAllTabs() {
	$("#quickBookingStep1").removeClass("active");
	$("#quickBookingStep2").removeClass("active");
	$("#quickBookingStep3").removeClass("active");
	$("#quickBookingStep4").removeClass("active");
}

/**
 * This method hides all content areas of booking steps
 */
function hideAllBookingContentAreas() {
	$("#quickBookingStep1Content").hide();
	$("#quickBookingStep2Content").hide();
	$("#quickBookingStep3Content").hide();
	$("#quickBookingStep4Content").hide();
}

/**
 * Called when user clicks on Quick Booking button 
 */
function btnQuickBookClicked() {
	removeActivePropertyForAllTabs();
	$(this).addClass("active");
	hideAllBookingContentAreas();
	$("#quickBookingStep1 a").tab('show')
}

/**
 * This method gets all available offices based on the filtered company
 * @param strPinCode
 * @param strAreaName
 * @param strCityName
 */
function getAllOffices(strPinCode, strAreaName, strCityName) {
	$("#btnSearchOffices").button("loading");
	$.ajax({
		url: "getOffices",
		type: "POST",
		data: {
			"pinCode" : strPinCode,
			"areaName" : strAreaName,
			"cityName" : strCityName
		},
		success: function(responseData, textStatus) {
			handleAllOfficesData(responseData);  
	    },
	    error : function(responseData) {
	    	$("#btnSearchOffices").button("reset");
	    	showErrorMsg(SERVER_CONTACT_ERROR);
	    }
			
	});
}

/**
 * This method is called when all offices response is received from server
 */
function handleAllOfficesData(allOfficesResponseData) {
	$("#btnSearchOffices").button("reset");
	
	$("#tblOffices").empty();
	
	var allOfficesJsonData = jQuery.parseJSON(allOfficesResponseData);
	
	if(allOfficesJsonData.result_available) { // We got some offices
		$("#noOffices").hide();
		$("#tblOffices").show();
		var officesJsonArray = allOfficesJsonData.offices;
		if(officesJsonArray != undefined && officesJsonArray != null)
			parseOfficesJsonArray(officesJsonArray);
		
	} else { // We did not get any result for filter criteria
		$("#noOffices").show();
		$("#tblOffices").hide();
	}
	
}

/**
 * This method parses offices json array and populates the data in table
 */
function parseOfficesJsonArray(officesJsonArray) {
	
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
	$("#tblOffices").append(strOfficesTblHeader + strOfficesTablBodyStart);
	
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
								+ '<button class="btn btn-success quickBooking" onclick="quickBookingBtnClicked('+value["office_id"]+');"> Book </button>' 
							+'</td>';
		
		var strTableRowEnd = '</tr>';
		
		// Appending row to table body
		$("#tblOffices").append(strTableRowStart + strColumnOne + strColumnTwo + strColumnThree + strColumnFour + strColumnFive + strColumnSix + strColumnSeven + strTableRowEnd);
		
	});
	
	// Append body end at the end of the table
	$("#tblOffices").append(strOfficesTablBodyEnd);
}

/**
 * This method is called when user clicks on Quick Button in offices table
 */
function quickBookingBtnClicked(courierOfficeId) {
	//var strOfficeName = $(this).attr("data-office-name");
	//var strOfficeAddress = $(this).attr("data-office-address");
	removeActivePropertyForAllTabs();
	$("#quickBookingStep2 a").addClass("active");
	hideAllBookingContentAreas();
	$("#quickBookingStep2Content").show();
	$("#quickBookingStep2 a").tab('show')
	officeId = courierOfficeId;
}

/**
 * This method is called when user clicks on Previous button in Step 2
 */
function quickBookingStep2PreviousBtnClicked() {
	removeActivePropertyForAllTabs();
	$("#quickBookingStep1 a").addClass("active");
	hideAllBookingContentAreas();
	$("#quickBookingStep1Content").show();
	$("#quickBookingStep1 a").tab('show')
	getAllOffices("126585", "Brigade Road", " MG Road"); // Showing previous tab
}

/**
 * This method is called when user clicks on Next button in Step 2
 */
function quickBookingStep2NextBtnClicked() {
	
	var strReceiverName = $("#txtBookingReceiverName").val().trim();
	var strReceiverAddress = $("#txtBookingReceiverAddress").val().trim();
	var strReceiverLandmark = $("#txtBookingReceiverLandmark").val().trim();
	var strReceiverPinCode = $("#txtBookingReceiverPinCode").val().trim();
	var strReceiverPhone = $("#txtBookingReceiverPhoneNumber").val().trim();
	var strReceiverEmail = $("#txtBookingReceiverEmail").val().trim();
	
	var strSenderName = $("#txtBookingSenderName").val().trim();
	var strSenderAddress = $("#txtBookingSenderAddress").val().trim();
	var strSenderLandmark = $("#txtBookingSenderLandmark").val().trim();
	var strSenderPinCode = $("#txtBookingSenderPinCode").val().trim();
	var strSenderPhone = $("#txtBookingSenderPhoneNumber").val().trim();
	var strSenderEmail = $("#txtBookingSenderEmail").val().trim();

	if(strReceiverName == null || strReceiverName.length == 0) {
		showErrorMsg(EMPTY_RECEIVER_NAME);
		$("#txtBookingReceiverName").focus();
	} else if(strReceiverAddress == null || strReceiverAddress.length == 0) {
		showErrorMsg(EMPTY_RECEIVER_ADDRESS);
		$("#txtBookingReceiverAddress").focus();
	} else if(strReceiverLandmark == null || strReceiverLandmark.length == 0) {
		showErrorMsg(EMPTY_RECEIVER_LANDMARK);
		$("#txtBookingReceiverLandmark").focus();
	} else if(strReceiverPinCode == null || strReceiverPinCode.length != 6) {
		showErrorMsg(INVALID_RECEIVER_PINCODE);
		$("#txtBookingReceiverPinCode").focus();
	} else if(strReceiverPhone == null || strReceiverPhone.length == 0) {
		showErrorMsg(EMPTY_RECEIVER_PHONE);
		$("#txtBookingReceiverPhoneNumber").focus();
	} else if(strReceiverEmail == null || strReceiverEmail.length == 0) {
		showErrorMsg(EMPTY_RECEIVER_EMAIL);
		$("#txtBookingReceiverEmail").focus();
	}
	
	else if(strSenderName == null || strSenderName.length == 0) {
		showErrorMsg(EMPTY_SENDER_NAME);
		$("#txtBookingSenderName").focus();
	} else if(strSenderAddress == null || strSenderAddress.length == 0) {
		showErrorMsg(EMPTY_SENDER_ADDRESS);
		$("#txtBookingSenderAddress").focus();
	} else if(strSenderLandmark == null || strSenderLandmark.length == 0) {
		showErrorMsg(EMPTY_SENDER_LANDMARK);
		$("#txtBookingSenderLandmark").focus();
	} else if(strSenderPinCode == null || strSenderPinCode.length != 6) {
		showErrorMsg(INVALID_SENDER_PINCODE);
		$("#txtBookingSenderPinCode").focus();
	} else if(strSenderPhone == null || strSenderPhone.length == 0) {
		showErrorMsg(EMPTY_SENDER_PHONE);
		$("#txtBookingSenderPhoneNumber").focus();
	} else if(strSenderEmail == null || strSenderEmail.length == 0) {
		showErrorMsg(EMPTY_SENDER_EMAIL);
		$("#txtBookingSenderEmail").focus();
	}
	
	else if( !isValidEmailAddress( strReceiverEmail ) ) { 
		showErrorMsg(INVALID_RECEIVER_EMAIL);
		$("#txtBookingReceiverEmail").focus();
	} else if( !isValidEmailAddress( strSenderEmail ) ) {
		showErrorMsg(INVALID_SENDER_EMAIL);
		$("#txtBookingSenderEmail").focus();
	}
	
	else {
		// Clear all the values in step 4 (text fields)
		$("#txtCourierContent").val("");
		$("#txtBookingKiloGrams").val("");
		$("#txtBookingGrams").val("");
		
		
		var currentCourierOption = localStorage.getItem("courierOption");
		if(currentCourierOption == "handToHandCourier") {
			$("#txtBookingTotalAmount").val("200");
		} else {
			$("#txtBookingTotalAmount").val("100");
		}
		
    	removeActivePropertyForAllTabs();
    	$("#quickBookingStep3 a").addClass("active");
    	hideAllBookingContentAreas();
    	$("#quickBookingStep3Content").show();
    	$("#quickBookingStep3 a").tab('show')    	
	}
	
}

/**
 * This method is called when user clicks on Previous button in Step 3 
 */
function quickBookingStep3PreviousBtnClicked() {
	removeActivePropertyForAllTabs();
	$("#quickBookingStep2 a").addClass("active");
	hideAllBookingContentAreas();
	$("#quickBookingStep2Content").show();
	$("#quickBookingStep2 a").tab('show')
}

/**
 * This method is called when user clicks on Quick Payment button in Step 3 
 */
function quickBookingStep3QuickPaymentBtnClicked() {
	var deliverInFourHours =  $('#chkDeliverIn4Hours').prop('checked');
	
	var deliverHandToHand;
	var courierOption = localStorage.getItem("courierOption");
	if(courierOption == "normalCourier") {
		deliverHandToHand = false;
	} else {
		deliverHandToHand = true;
	}
	
	var deliverConfidential = $('#chkConfedentialDelivery').prop('checked');
	
	
	var strContentOfTheCourier = $("#txtCourierContent").val().trim();
	if(strContentOfTheCourier == null || strContentOfTheCourier.length == 0) {
		showErrorMsg(EMPTY_COURIER_CONTENT);
		$("#txtCourierContent").focus();
	} else if($('#chkTermsAndConditions').prop('checked') == false) {
		showErrorMsg(AGREE_TERMS_AND_CONDITIONS);
	} else {
		$("#btnQuickPayment").button("loading");
		$.ajax({
			url: "saveNewBooking",
			type: "POST",
			data: {
				"courierContent":strContentOfTheCourier,
				"deliverInOneDay" : true,
				"deliverInFourHour" : deliverInFourHours,
				"deliverHandToHand" :  deliverHandToHand,
				"deliverConfidential" : deliverConfidential,
				"userId" : localStorage.getItem("userId"),
				"fullName" : localStorage.getItem("fullName"),
				"email" : localStorage.getItem("email"),
				"mobile" : localStorage.getItem("mobile"),
				"officeId" : officeId + "",
				"receiverName" :  $("#txtBookingReceiverName").val().trim(),
				"receiverAddress" : $("#txtBookingReceiverAddress").val().trim(),
				"receiverLandmark" :$("#txtBookingReceiverLandmark").val().trim(),
				"receiverPinCode" : $("#txtBookingReceiverPinCode").val().trim(),
				"receiverPhone" :  $("#txtBookingReceiverPhoneNumber").val().trim(),
				"receiverEmail" : $("#txtBookingReceiverEmail").val().trim(),
				"senderName" : $("#txtBookingSenderName").val().trim(),
				"senderAddress" : $("#txtBookingSenderAddress").val().trim(),
				"senderLandmark" :$("#txtBookingSenderLandmark").val().trim(),
				"senderPinCode" : $("#txtBookingSenderPinCode").val().trim(),
				"senderPhone" :  $("#txtBookingSenderPhoneNumber").val().trim(),
				"senderEmail" : $("#txtBookingSenderEmail").val().trim(),
				"totalAmount" : $("#txtBookingTotalAmount").val().trim()
				/*"totalAmount" : "1"*/
			},
			success: function(responseData, textStatus) {
				handleSaveBookingReponse(responseData);  
		    },
		    error : function(responseData) {
		    	$("#btnQuickPayment").button("reset");
		    	showErrorMsg(SERVER_CONTACT_ERROR);
		    }
				
		});		
	}	
}

/**
 * This method is called when save new booking response is received from server
 */
function handleSaveBookingReponse(newBookingResponseData) {
	$("#btnQuickPayment").button("reset");
	var saveBookingData = jQuery.parseJSON(newBookingResponseData);
	if(saveBookingData.booked_status) {
		$("#channel").val(saveBookingData.channel);
		$("#account_id").val(saveBookingData.account_id);
		$("#reference_no").val(saveBookingData.reference_no);
		$("#amount").val(saveBookingData.amount);
		$("#mode").val(saveBookingData.mode);
		$("#currency").val(saveBookingData.currency);
		$("#description").val(saveBookingData.description);
		$("#return_url").val(saveBookingData.return_url);
		$("#name").val(saveBookingData.name);
		$("#address").val(saveBookingData.address);
		$("#city").val(saveBookingData.city);
		$("#state").val(saveBookingData.state);
		$("#country").val(saveBookingData.country);
		$("#postal_code").val(saveBookingData.postal_code);
		$("#phone").val(saveBookingData.phone);
		$("#email").val(saveBookingData.email);
		/*$("#page_id").val(saveBookingData.email);*/
		$("#secure_hash").val(saveBookingData.secure_hash);
		
		
		
		localStorage.setItem("transactionNumber",saveBookingData.tracking_number);
		$("#step4TotalAmount").text("Total payment to be made to SDCS is - INR: " + $("#txtBookingTotalAmount").val());
    	removeActivePropertyForAllTabs();
	  	$("#quickBookingStep4 a").addClass("active");
	  	hideAllBookingContentAreas();
    	$("#quickBookingStep4Content").show();
    	$("#quickBookingStep4 a").tab('show')
	} else { 
		showErrorMsg(NEW_COURIER_BOOK_FAILED);
	}
}

/**
 * This method calculates the amount to be paid
 */
function calculateAmount() {
	
	var deliverInOneDay =  $('#chkDeliverIn24Hours').prop('checked');
	var deliverInFourHours =  $('#chkDeliverIn4Hours').prop('checked');
	var deliverHandToHand = $('#chkHandToHandDelivery').prop('checked');
	var deliverConfidential = $('#chkConfedentialDelivery').prop('checked');
	
	var currentCourierOption = localStorage.getItem("courierOption");
	if(currentCourierOption == "handToHandCourier") {
		deliverHandToHand = true;
		deliverInFourHours = false;
		deliverInOneDay = false;
		deliverConfidential = false;
	} else {
		deliverHandToHand = false;
	}
	
	var kilo = $("#txtBookingKiloGrams").val().trim();
	var grams = $("#txtBookingGrams").val().trim();
	
	var atleastOneEntered = false;
	if(kilo.length != 0) {
		atleastOneEntered = true;
	} 
	if(grams.length != 0) {
		atleastOneEntered = true;
	}
	
	if(!atleastOneEntered) {
		showErrorMsg(EMPTY_KILO_GRAMS);
	} else {
		atleastOneEntered = true;
		if(isNaN(kilo)){
			showErrorMsg(INVALID_KILO);
			atleastOneEntered = false;
		} 
		if(isNaN(grams)) {
			showErrorMsg(INVALID_GRAMS);
			atleastOneEntered = false;
		} 
		
		if(kilo.length == 0)
			kilo = "0";
		if(grams.length == 0)
			grams = "0";
		
		if(atleastOneEntered){
			$("#btnCalculateTotal").button("loading");
			$.ajax({
				url: "getEstimation",
				type: "POST",
				data: {
					"isDeliveryInOneDay" : deliverInOneDay,
					"isDeliveryInFourDays" : deliverInFourHours,
					"isDeliveryInHandToHand" : deliverHandToHand,
					"isDeliveryInConfidential" : deliverConfidential,
					"kilo" : parseFloat(kilo),
					"grams" : parseFloat(grams),
					"estimationFor": "booking"
				},
				success: function(responseData, textStatus) {
					handleBookingEstimate(responseData);  
			    },
			    error : function(responseData) {
			    	$("#btnCalculateTotal").button("reset");
			    	showErrorMsg(SERVER_CONTACT_ERROR);
			    }
					
			});		
		}
	} 
		
	
}

/**
 * This method is called when estimation response is received from server
 */
function handleBookingEstimate(estimateResponseData) {
	$("#btnCalculateTotal").button("reset");
	var estimationJsonData = jQuery.parseJSON(estimateResponseData);
	if(estimationJsonData.more_than_10_kilo_grams) {
		$("#successMsgContainer").show().delay(10000).fadeOut();
		$("#promptMsg").text(WEIGHTAGE_HIGH);
	} else {
		if(estimationJsonData.estimation_status) {
			$("#txtBookingTotalAmount").val(estimationJsonData.estimated_amount);
		} else { 
			showErrorMsg(COULD_NOT_ESTIMATE);
		}	
	}
}




 








