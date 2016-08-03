$(document).ready(function(){
	
	$("#paymentDetails").click(function(){
		$("#DeliveryBoyCompleteHistoryTblDIv").hide();
		$("#DeliveryBoyAbsHistoryTblDIv").hide();
		 $("#makepaymentfirstdiv").hide(); 
		$("#tblpaymentDiv").show();
		 $("#btnmakePayAmountSubmit").show();
		  $("#makePayBookingId").show();
		hotelPaymentDetails();
	
			 
	});
	
	$("#btnPayNow1").click(function(){
		$("#frmTransaction1").submit();
	});
	
});

function hotelPaymentDetails(){
	
	var userId = localStorage.getItem("userId");
	$("#paymentDetails").text("Loading...");
	$.ajax({

		url : "paymentStatus",
		type : "POST",
		data : {
			"restaurantId" : userId
						
		},
		success : function(responseData, textStatus) {
			$("#paymentDetails").text("Payment");
			handlePaymentDetails(responseData);
			
			 
		},
		error : function(responseData) {
			
			$("#paymentDetails").text("Payment");
			alert("Sorry could not found any couriers.");
		}
	});
	
}


function handlePaymentDetails(payresponseData){
	
	var paymentDetails = jQuery.parseJSON(payresponseData);
	
	if (paymentDetails.result) {
		$("#idforpayment").show();// We got some courier history
		$("#channel1").val(paymentDetails.channel);
		$("#account_id1").val(paymentDetails.account_id);
		$("#reference_no1").val(paymentDetails.reference_no);
		$("#amount1").val(paymentDetails.amount);
		$("#mode1").val(paymentDetails.mode);
		$("#currency1").val(paymentDetails.currency);
		$("#description1").val(paymentDetails.description);
		$("#return_url1").val(paymentDetails.return_url);
		$("#name1").val(paymentDetails.name);
		$("#address1").val(paymentDetails.address);
		$("#city1").val(paymentDetails.city);
		$("#state1").val(paymentDetails.state);
		$("#country1").val(paymentDetails.country);
		$("#postal_code1").val(paymentDetails.postal_code);
		$("#phone1").val(paymentDetails.phone);
		$("#email1").val(paymentDetails.email);
		$("#page_id1").val(paymentDetails.page_id);
		$("#secure_hash1").val(paymentDetails.secure_hash);
		
		$("#outstandingAmnt").text(paymentDetails.amount);
		/*localStorage.setItem("transactionNumber",paymentDetails.tracking_number);
	*/	
		
		var payCouriersArray = paymentDetails.all_couriers;
				
		
		if (payCouriersArray != undefined
				&& payCouriersArray != null){
			
			
			$("#tblCouriersPayment tbody").empty();
			var strBulkTotalTablBodyStart = '<tbody>';
			var strBulkTotalTablBodyEnd = '</tbody>';

			// Add offices table header
			$("#tblCouriersPayment").append(strBulkTotalTablBodyStart);
			

			
			
			// Adding each booked courier to the table 
			$.each(payCouriersArray , function(index, value) {
				var strTableRowStart = '<tr style="color:#000000;">';

				var name = value["time_of_booking"];
				var number = value["number_of_couriers"];
				var totalAmount = value["amount"];
								
				
				if(totalAmount == "0"){
					
					/*$("#tblpaymentDiv").hide();
					alert("There is no pay history found");*/
				}
				
				var strColumnThree = '<td> ' + name + ' </td>';
				var strColumnFour = '<td> ' + number + ' </td>';
				var strColumnSix = '<td> ' + totalAmount + ' </td>';
				
				var strTableRowEnd = '</tr>';

				$("#tblCouriersPayment").append(
						strTableRowStart + strColumnThree
								+ strColumnFour+ strColumnSix +strTableRowEnd);
			});

			// Append body end at the end of the table
			$("#tblCouriersPayment").append(strBulkTotalTablBodyEnd);


		}

			
		}
			

	
	
}