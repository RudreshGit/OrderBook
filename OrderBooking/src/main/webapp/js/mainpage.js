var r = true;
var strCheck = false;
var codPayment = false;
var onlinePayment = false;
var senderName = "";
var senderPhone = "";
var recieverName = "";
var recieverPhone = "";
var recieverAddress = "";
var recieverPincode = "";
var needPicWithSanta =  "";
var surpriceGift ="";
var surpriceName = "0";
var surpriceDate = "0";
var surpriceTime = "0";
var totalAmount= "0";
var photo = "";
var cod="";


$(document).ready(function() {
	
	$("#surprisefrndDiv").hide();
	
	$('#chkSurpriceLovedOnes').change(function() {
        if($(this).is(":checked")) {
        	$("#surprisefrndDiv").show(1000);
        } else {
        	$("#surprisefrndDiv").hide(1000);
        }
    });
	
	
});


function bookCancelation(){
	var strTrackingNumber = $("#txtCanceltracking").val().trim();
	 $("#trackingDetailsHeadera").text("");		
	var firstTwoletter = strTrackingNumber.substring(0, 2);
	if(strTrackingNumber ==null && strTrackingNumber.lenght==0){
		 $("#trackingDetailsHeadera").text("Please enter Tracking Number");		
	}else if(firstTwoletter != "RB" && firstTwoletter != "XT"){
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
	     	alert(SERVER_CONTACT_ERROR);
	    }
			
	});
}else{
	 $("#trackingDetailsHeadera").text("Sorry! This type of booking calcelation not available.Please cantact our admin(9535337626) to cancle..");
}
	

}


function handleQuickCancellationResponseData(responseData) {
	var cancellationJsonData = jQuery.parseJSON(responseData);
	if(cancellationJsonData.cancellation_status) {
		 $("#txtCanceltracking").val("");
		 $("#trackingDetailsHeadera").text("Cancelation of Booking will be done successfully!..");
		alert("Cancelation of Booking will be done successfully!..");
		/*$("#successMsgContainer").show().delay(5000).fadeOut();
		$("#promptMsg").text(CANCELLATION_DONE);*/
	} else if(cancellationJsonData.dispatched_already){
		 $("#trackingDetailsHeadera").text(DISPATCHED_ALREADY);			
		alert(DISPATCHED_ALREADY);
	} else {
		 $("#trackingDetailsHeadera").text(NO_TRACKING_NUMBER);
		alert(NO_TRACKING_NUMBER);
	}
}

function validateTrackingFormFields() {
	$("#trackingDetailsTableContainer").hide();
	$("#trackingDetailsHeader").text(" ");
	var strTrackingNumber = $("#txtTrackingNumber").val().trim();
	var firstTwoletter = strTrackingNumber.substring(0, 2);
	if(strTrackingNumber == null || strTrackingNumber.length == 0) {
		alert(EMPTY_TRACKING_NUMBER);
	/*} else if(isNaN(strTrackingNumber)) {
		alert(INVALID_TRACKING_NUMBER);*/
	} else if(firstTwoletter != "RB" && firstTwoletter != "XT"){
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
		    	alert(SERVER_CONTACT_ERROR);
		    }
				
		});
	}else{	
		$("#trackingDetailsHeader").text("Sorry!..Tracking is not available for this type of Booking...");
		
		
	}
}

/**
 * This method is called when tracking response is received from server
 */
function handleQuickTrackingResponseData(responseData) {
		var trackingJsonData = jQuery.parseJSON(responseData);
	$("#trackingDetailsHeader").show();
	if(trackingJsonData.tracking_status) {
		
			$("#trackingDetailsTableContainer").show();
			$("#trackingDetailsHeader").text("Currently your courier is at the following address:");
			$("#trackingsenderAddress").text( trackingJsonData.sender_address);
			$("#trackingrecieverAddress").text( trackingJsonData.receiver_address);
			/*$("#trackingCourierCurrentposition").text( trackingJsonData.current_position_address);
*/			var detailsdeliveryboy = "";
		    var currentPossition=trackingJsonData.current_position_address;
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
		$("#txtTrackingNumber").val("");
		$("#trackingDetailsTableContainer").hide();
		$("#trackingDetailsHeader").text("Sorry! tracking number not found.");
		clearValues();
	}
}

function clearValues() {
	
	$("#trackingAddress").text("");
	$("#trackingPinCode").text("");
	$("#trackingAreaName").text("");
	$("#trackingPhone").text("");
}
function dBookingClicked() {	
	var dphoneNumber = $("#dBookingPoneNumber").val().trim();
	var drestorantName =$("#dBookingRestorentName").val().trim();
	if(dphoneNumber == null || dphoneNumber.lenght==0){
		alert("Please Enter phoneNumber!..");		
		}else if(dphoneNumber == null || dphoneNumber.lenght==0){
			alert("Please Enter restorantName!..");
		}else{					
				$.ajax({
				url : "deliveryBoyBooking",
				type : "POST",
				data : {
					"dphoneNumber" : dphoneNumber,
					"drestorantName" : drestorantName,
					"lat" :12.03255 ,
					"long" : 72.0215
				},
				success : function(responseData, textStatus) {
					handleDbookingReponse(responseData);
				},
				error : function(responseData) {
					alert("Error Contacting Back end Server!...");

				}
			});
			
			}	
}
function handleDbookingReponse(responseData) {
	var bulkJsonData = jQuery.parseJSON(responseData);
	if (bulkJsonData.result) {
	alert("Thank you for Booking!...Your Tracking Number Is :"+bulkJsonData.trackingNumber+"");
	$("#dBookingPoneNumber").val("");
	$("#dBookingRestorentName").val("");	
	hideAllDiv();
	$(".container").show();
	$("#bottomImages").show();
	}
}
function selection1() {
	var inSelctionOne = document.getElementById("select1").selectedIndex;
	var inSelctionTwo = document.getElementById("select2").selectedIndex;

	var strmessage = $("#toSaveAllComments").val().trim();
	var strEmail = $("#emailSuggestion").val().trim();
	if (strEmail == null || strEmail.length == 0) {
		alert("Please enter the email id");
		$("#emailSuggestion").focus();
	} else if (strmessage == null || strmessage.length == 0) {
		alert("Please enter your Suggestion");
		$("#toSaveAllComments").focus();
	} else {
		$.ajax({
			url : "suggestUs",
			type : "POST",
			data : {
				"selectionOne" : inSelctionOne,
				"selectionTwo" : inSelctionTwo,
				"message" : strmessage,
				"email" : strEmail
			},
			success : function(responseData, textStatus) {
				handleSuggestUsReponse(responseData);
			},
			error : function(responseData) {
				alert("Error Contacting Back end Server!...");

			}
		});
	}
}

function handleSuggestUsReponse(responseData) {
	var bulkJsonData = jQuery.parseJSON(responseData);
	if (bulkJsonData.status) {
	alert("Thank you for suggesting Us!...");
	$("#SuggestUsContainer").hide();	
	$("#toSaveAllComments").val("");
	$("#emailSuggestion").val("");
	$(".mainDivOne").show();}
}





function btnChristmas_COD_IsClicked(){
	
	codPayment=true;
	
	codBtnClicked();
}

function btnChristmas_ONLINE_IsClicked(){
	
	onlinePayment=true;
	
	codBtnClicked();
	
}


function btnChristmasSubmitIsClicked(){
	
	$("#santapayment").text("");
	
	$("#santapaymentTwo").text("");
	
	 senderName = $("#inputChristmasSenderName").val().trim();
    senderPhone = $("#inputChristmasSenderPhone").val().trim();
	 recieverName = $("#inputChristmasRecieverName").val().trim();
	 recieverPhone = $("#inputChristmasRecieverContactNumber").val().trim();
	 recieverAddress = $("#inputChristmasRecieverAddress").val().trim();
	 recieverPincode = $("#inputChristmasRecieverPincode").val().trim();
	 needPicWithSanta =  $('#chkBtnTakeAPic').prop('checked');
	 surpriceGift = $('#chkSurpriceLovedOnes').prop('checked');
	
	
	if(needPicWithSanta == true && surpriceGift == true){
		totalAmount=150+totalSantaAmount;
		 photo = "Photo Needed";
	}else if(needPicWithSanta){
		totalAmount=100+totalSantaAmount;
		photo = "Photo Needed";
	}else if(surpriceGift){
		totalAmount=50+totalSantaAmount;
	}else{
		totalAmount=totalSantaAmount;
		 photo = "Photo Needed";
	}

	if(surpriceGift){
		
	 surpriceName = $("#surpriceBookingName").val().trim();
	 surpriceDate = $("#surpriceBookingDate").val().trim();
	 surpriceTime =  $("#surpriceBookingTime").val().trim();
	}
	
	if(senderName == null || senderName.length == 0) {
		alert("Please Enter Sender Name.");
		$("#inputChristmasSenderName").focus();
	} else if(senderPhone == null || senderPhone.length == 0) {
		alert("Please Enter Sender Phone Number.");
		$("#inputChristmasSenderPhone").focus();
	}else if(recieverName == null || recieverName.length == 0) {
		alert("Please Enter Sender Phone Number.");
		$("#inputChristmasSenderName").focus();
	} else if(recieverPhone == null || recieverPhone.length == 0) {
		alert("Please Enter Reciever Phone Number.");
		$("#inputChristmasSenderPhone").focus();
	}else if(recieverAddress == null || recieverAddress.length == 0) {
		alert("Please Enter Reciever Address.");
		$("#inputChristmasRecieverAddress").focus();
	} else if(recieverPincode == null || recieverPincode.length == 0) {
		alert("Please Enter Reciever Pincode.");
		$("#inputChristmasRecieverPincode").focus();
	
	}else{

		$("#santadetailsdiv").hide();
		$(".christmasPyamentgateway").show();
		$("#paymentONLINE").show();
		$("#paymentCOD").show();
		$("#backtoSender").show();

}
	}

function codBtnClicked(){
	$("#btnBookChristmasGift").button("loading");
	$("#santapayment").text("Saving your data to serever. Please waite it will take few minutes");
	if(onlinePayment == true){
		 cod="online_payment";
	}else{
		 cod="cod_payment";
	}
	var totalamountt=totalAmount+"";
		$.ajax({
		url : "christmasSale",
		type : "POST",
		data : {
			"selectedItem": selectedSantaItem,
			"senderName" : senderName,
			"senderPhone" : senderPhone,
			"recieverName" : recieverName,
			"recieverAddress" : recieverAddress,
			"recieverPhone" : recieverPhone,
			"pincode" : recieverPincode,
			"surpriceName" : surpriceName,
			"surpriceDate" : surpriceDate,
			"surpriceTime" : surpriceTime,
			"photo": photo,
			"totalAmount" : totalamountt,
			"cod":cod
			
		},
		success : function(responseData, textStatus) {
			handleChristmasGiftResponce(responseData);
		},
		error : function(responseData) {
				showErrorMsg(SERVER_CONTACT_ERROR);

		}
	});
}


function handleChristmasGiftResponce(christmasresponseData) {
var christMasResponce = jQuery.parseJSON(christmasresponseData);
if (christMasResponce.status) {
	$("#btnBookChristmasGift").button("reset");
    $("#inputChristmasSenderName").val("");
	$("#inputChristmasSenderPhone").val("");
	$("#inputChristmasRecieverName").val("");		
	$("#inputChristmasRecieverContactNumber").val("");
	$("#inputChristmasRecieverAddress").val("");
	$("#inputChristmasRecieverPincode").val("");
	
	/*$(".christmasPyamentgateway").hide();
	$("#santaImages").hide();
	
	$("#afterPaymentTextDiv").show();
    $("#christmasTraccking").text(christMasResponce.tracking_number);	*/
	/*$("#christmasAmount").text(christMasResponce.totalamount);*/	
	if(christMasResponce.cod != "cod_payment" && christMasResponce.cod =="online_payment"){
		$("#paymentONLINE").hide();
		$("#paymentCOD").hide();
		$("#backtoSender").hide();
		$("#santapayment").text("Thank you for Booking Santa!.... And your tracking Number is:"+christMasResponce.tracking_number+"");
	$("#santapaymentTwo").text("And it is connecting to payment please waite...");
		
		$("#channel").val(christMasResponce.channel);
	$("#account_id").val(christMasResponce.account_id);
	$("#reference_no").val(christMasResponce.reference_no);
	$("#amount").val(christMasResponce.amount);
	$("#mode").val(christMasResponce.mode);
	$("#currency").val(christMasResponce.currency);
	$("#description").val(christMasResponce.description);
	$("#return_url").val(christMasResponce.return_url);
	$("#name").val(christMasResponce.name);
	$("#address").val(christMasResponce.address);
	$("#city").val(christMasResponce.city);
	$("#state").val(christMasResponce.state);
	$("#country").val(christMasResponce.country);
	$("#postal_code").val(christMasResponce.postal_code);
	$("#phone").val(christMasResponce.phone);
	$("#email").val(christMasResponce.email);
	$("#page_id").val(christMasResponce.page_id);
	$("#secure_hash").val(christMasResponce.secure_hash);
	var hashValues = christMasResponce.hash_values;
	localStorage.setItem("transactionNumber","8888");
	setInterval( function(){
		toCallPaymentGateway();
		}, 8000 );
	}
	else {	
		$("#paymentONLINE").hide();
		$("#paymentCOD").hide();
		$("#backtoSender").hide();
		$("#santapayment").text("Thank you for Booking Santa!.... And your tracking Number is:"+christMasResponce.tracking_number);
		$("#santapaymentTwo").text("And please press Home button to go main page...");
		
	}}else{
	alert("Failed to save your data, Plese try again once");
}
	
	
}