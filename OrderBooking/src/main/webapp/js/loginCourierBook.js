
 var toggletext="0";
$(document).ready(function(){
	$("#loginpayNowDiv").hide();
	$("#inputDate").hide();
	$("#loginBookingPageAfterEstimation").hide();
	$("#loginbtncustomerschedule").click(function(){
		if(toggletext=="0"){
		$("#logininputDate").show();	
		toggletext="1";
		}else if(toggletext=="1"){
			toggletext="0";
			$("#logininputDate").hide();			
				}
	});
	$("#btnPayNowa").click(function(){
		$("#frmTransactiona").submit();
	});
	
	
	$("#loginbtncustBooking").click(function(){
		
		$("#payNowDiv").hide();
		
		$("#loginBookingPageAfterEstimation").show();
		
		
		var userid="0";
		var Id = localStorage.getItem("customer_userid");
		if(Id != 0 && Id!= null){
			userid = Id;
		}else{
			userid = "0";
		}
		var courierType=$("#customerSelect1").val();
		 var courierWeight =$("#courierWeight1").val();
		var pickup = $("#pickUpArea1").val().trim();
		var dest = $("#destinationArea1").val();
	
		var senderName = $("#logincustbookinSenderName").val().trim();
		var senderContact = $("#logincustomerbookingcontno").val().trim();
		var recieverName = $("#logincustbookingReceiverName").val().trim();
		var recieverContact = $("#logincustomerBookingReceiverNo").val().trim();
		var content = $("#logincontentOfCourier").val().trim();
		var email = $("#logincustomerBookingEmail").val().trim();
		var senderPincode = $("#loginsenderPincode").val().trim();
		var geocoder = new google.maps.Geocoder();
		var address = pickup+",Bangalore";
		pickup = pickup + ",bangalore";
		dest = dest + ",bangalore";
		
		geocoder.geocode( { 'address': dest}, function(results, status) {

		  if (status == google.maps.GeocoderStatus.OK) {
		  latitude = results[0].geometry.location.lat();
		   longitude = results[0].geometry.location.lng();
		  
		 
		/*
		 * var courierType=localStorage.getItem("type"); var
		 * courierWeight=localStorage.getItem("content_weight"); var
		 * pickup=localStorage.getItem("pick"); var
		 * dest=localStorage.getItem("dest");
		 */	/*
		 * var latitude=localStorage.getItem("lat"); var
		 * longitude=localStorage.getItem("lon");
		 */var totalamount = localStorage.getItem("courier_amount");
		
		var type = "1";
	var text=false;
		var distance = localStorage.getItem("total_distance");
		var schTime = "0";
		if(toggletext=="0"){
			schTime = "0";
			text=true;
			
		}else{/* $("#inputDate").val("dd/MM/yyyy hh:mm"); */
			var schedulemonth = $("#loginschedulemonth").val();
			var scheduledate = $("#loginscheduledate").val();
			var schedulehour = $("#loginschedulehour").val();
			var scheduleminutes= $("#loginscheduleminute").val();
			if(scheduledate=="00" || schedulehour=="00"){
				text=true;
				alert("please select date and time");
			}else{
			schTime="2016"+"-"+schedulemonth+"-"+ scheduledate+" "+schedulehour+":"+scheduleminutes+":00";
			text=true;
			}
					}
		
		
	if(text==true){
		if(senderName == null || senderName.length == 0){
			alert("Please enter the sender name.");
			$("#logincustbookinSenderName").focus();
		}else if(senderContact == null || senderContact.length == 0){
			
			alert("Please enter sender contact number.");
			$("#logincustomerbookingcontno").focus();
		}else if(recieverName == null || recieverName.length == 0){
			alert("Please enter reciever name.");
			$("#custbookingReceiverName").focus();
			
		}else if(recieverContact == null || recieverContact.length == 0){
			alert("Please enter reciever contact number.");
			$("#logincustomerBookingReceiverNo").focus();
		}else if(content == null || content.length == 0){
			
			alert("Please enter content of the courier.");
			$("#logincontentOfCourier").focus();
		}else if(email == null || email.length == 0){
			
			alert("Please enter email id.");
			$("#logincustomerBookingEmail").focus();
		}else
			$("#loginbtncustomerschedule").text("Loading...");
			$.ajax({
				url : "customerCourierBooking",
				type : "POST",
				data : {
					"name" : senderName,
					"userId" : userid,
					"contact_number" : senderContact,
					"address" : pickup,
					"pincode" : senderPincode,
					"email" : email,
					"lat" : latitude,
					"lon" : longitude,
					"reciver_name" : recieverName,
					"reciver_number" : recieverContact,
					"total_distance" : distance,
					"total_amount_calculated" : totalamount,
					"content" : content,
					"weight" : courierWeight,
					"reciever_address" : dest,
					"courier_type" : courierType,
					"type" : type,
					"scheduletimes" : schTime
					
				},
				success : function(responseData, textStatus) {
					$("#loginbtncustomerschedule").text("submit");
					handleCourierBookingResponseData(responseData);
					
				},
				error : function(responseData) {
					$("#loginbtncustomerschedule").text("submit");
					alert("Error contacting backend server");		
				
				}

			});
		}else{
			alert("Please click again on schedule pick up button to reset time of booking! or schedule pick up");
		}
		  }else{
			  
		  alert("Please enter proper address");
		  }
		});
	});
		
	
});

function handleCourierBookingResponseData(responseData){
	
	var bookingResponse = jQuery.parseJSON(responseData);
	
	if(bookingResponse.result){
		
		$("#channela").val(bookingResponse.channel);
		$("#account_ida").val(bookingResponse.account_id);
		$("#reference_noa").val(bookingResponse.reference_no);
		$("#amounta").val(bookingResponse.amount);
		$("#modea").val(bookingResponse.mode);
		$("#currencya").val(bookingResponse.currency);
		$("#descriptiona").val(bookingResponse.description);
		$("#return_urla").val(bookingResponse.return_url);
		$("#namea").val(bookingResponse.name);
		$("#addressa").val(bookingResponse.address);
		$("#citya").val(bookingResponse.city);
		$("#statea").val(bookingResponse.state);
		$("#countrya").val(bookingResponse.country);
		$("#postal_codea").val(bookingResponse.postal_code);
		$("#phonea").val(bookingResponse.phone);
		$("#emaila").val(bookingResponse.email);
		$("#page_ida").val(bookingResponse.page_id);
		$("#secure_hasha").val(bookingResponse.secure_hash);
				
		
		var refId = bookingResponse.tracking_number;
		/* alert("Your order has been confirmed.Refference Id is"+refId+"."); */
		$("#loginBookingPageAfterEstimation").hide();
		$("#logincustomerLoginBooking").hide();
		$("#loginpayAmount").text("The amount you have to pay is "+bookingResponse.amount+"");
		$("#loginpayNowDiv").show();
		/*$("#payNowDiv").css("margin-top","100px");*/
		
	}else{
		
		alert("Sorry could not book the courier.Please provide all the details.")
	}
}

