$(document).ready(function(){
	
	
	$("#sdcsPayOtpDiv").hide();
	
	$("#btnbackotpDiv").click(function(){
		
		$("#sdcsPayOtpDiv").hide();
		$("#sdcsMoneyPayOption").show();
		$("#payNowDiv").show();
	});
	
	$("#sdcsMoneyAccountDetailss").click(function(){
		
	var userId = localStorage.getItem("customer_userid");
	var bookingId = localStorage.getItem("cus_bookingId");
	
	$.ajax({
		
		url:"sdcsMoneyTransaction",
		type:"POST",
		data:{
			
			"userId":userId,
			"bookingId":bookingId
		},
		success:function(responseData,textStatus){
			
			handleSdcsMoneyTransaction(responseData);
		},
		error:function(responseData){
			
			alert("Error contacting back end server");
		}
		
	});
		
	});
	
	$("#btnSdcsOtpSubmit").click(function(){
		
		var otp = $("#sdcsMoneyOtp").val().trim();
		var userId = localStorage.getItem("customer_userid");
		var bookingId = localStorage.getItem("cus_bookingId");
		var amount = localStorage.getItem("courier_amount");
		var cur_balance = localStorage.getItem("current_balance");
		
		if(otp == null || otp.length== 0){
			
			alert("Please enter the otp You got to your registered mobile number");
			$("#sdcsMoneyOtp").focus();
		}else{
			
			$("#btnSdcsOtpSubmit").text("Loading...");
			
			$.ajax({
				
				url:"sdcsMoneyPayUpdate",
				type:"POST",
				data:{
					
					"otp":otp,
					"userId":userId,
					"bookingId":bookingId,
					"amount":amount
				},
				
				success:function(responseData,textStatus){
					
					handleSdcsMoneyPayUpdate(responseData);
				},
				error:function(responseData){
					
					alert("Error contacting back end server");
					$("#btnSdcsOtpSubmit").text("Submit");
				}
				
			});
		}
	});
	
	$("#btnSdcsPayAmnt").click(function(){
		
		var cur_balance = localStorage.getItem("current_balance");
		var amount = localStorage.getItem("courier_amount");
		
		
		var balance = cur_balance - amount;
		
	
if(balance < 0){
			
			alert("Your current balance is low to make this transaction.Please add money and try again");
			
			$("#sdcsMoneyOtp").focus();
		}else{
		
		$.ajax({
			url:"sdcsMoneyOtp",
			type:"POST",
			data:{
				
				"otp":Math.floor((Math.random() * 999999) + 111111),
				"bookingId":localStorage.getItem("cus_bookingId")
			},
			success:function(responseData,textStatus){
				
				handlePayThroughSdcsMoneyResponse(responseData);
			},
			error:function(responseData){
				
				alert("Error contacting back end server");
			}
		});
		}
	});
$("#btnTransactionBackClicked").click(function(){
		
		$("#sdcsAmountInputDiv").show();
		$("#sdcsMoneyAccountDetails").hide();
		
	});
});

function handlePayThroughSdcsMoneyResponse(responseData){
	
	var response = jQuery.parseJSON(responseData);
	
	if(response.result){
		
		$("#payNowDiv").hide();
		
		$("#sdcsMoneyPayOption").hide();
		
		$("#sdcsPayOtpDiv").show();
		
		$("#amountToBePaid").text("Please enter the otp you just got to your registered mobile number to pay Rs."+localStorage.getItem("courier_amount")+"")
	}
}


function handleSdcsMoneyPayUpdate(responseData){
	
	var response = jQuery.parseJSON(responseData);
	
	if(response.result){
		
		$("#sdcsMoneyOtp").val("");
		$("#btnSdcsOtpSubmit").text("Submit");
		
		alert("Courier booked successfully.The tracking number is "+response.bookingId+"");
		$("#sdcsPayOtpDiv").hide();
		$("#customerBooking").show();
		
		$("#pickUpArea").val("");
		$("#destinationArea").val("");
		$("#sdcsMoneyAcountBalance").text("Your SDCS Money Balance is"+" "+response.balance);
		localStorage.setItem("current_balance",response.balance);
		
	}else{
		
		alert("Payment did not go through.Please enter valid otp.");
		$("#btnSdcsOtpSubmit").text("Submit");
	}
}


function handleSdcsMoneyTransaction(responseData){
	
	var response = jQuery.parseJSON(responseData);
	

	if(response.result){
		$("#sdcsMoneyAccountDetails").show();
		$("#sdcsAmountInputDiv").hide();
		$("#tblAccountDetails tbody").empty();
		var strBulkTotalTablBodyStart = '<tbody>';
		var strBulkTotalTablBodyEnd = '</tbody>';

		// Add offices table header
		$("#tblAccountDetails").append(strBulkTotalTablBodyStart);
		var deliveryBoyHistoryJsonArraya = response.transaction;

		// Adding each booked courier to the table 
		$.each(deliveryBoyHistoryJsonArraya, function(index, value) {
			var strTableRowStart = '<tr style="color:#000000;">';

			var receiverDetails = value["receiverDetails"];

			var bookingId = value["bookingId"];
			
			var content = value["content"];
			
			var total_amount = value["total_amount"];
			
			var sdcs_money = value["sdcs_money"];
			
			var time_of_booking = value["time_of_booking"];
			
			
			var strColumnOne = '<td> ' + receiverDetails + ' </td>';
			var strColumnTwo = '<td> ' + bookingId + ' </td>';
			var strColumnThree = '<td> ' + content + ' </td>';
			var strColumnFour = '<td> ' + total_amount + ' </td>';
	
			var strColumnSix = '<td> ' + time_of_booking + ' </td>';
			var strTableRowEnd = '</tr>';

			$("#tblAccountDetails").append(
					strTableRowStart +strColumnTwo+strColumnSix+ strColumnThree+strColumnOne+strColumnFour+strTableRowEnd);
	$("#accountDetailsHeader").text("The total balance left in your account is Rs."+sdcs_money+"");
		
		});

		// Append body end at the end of the table
		$("#tblAccountDetails").append(strBulkTotalTablBodyEnd);
		
	}
}