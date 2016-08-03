$(document).ready(function(){
	
	$("#sdcsTransactionDetailsAdmin").hide();
	$("#sdcsMoneyDtls").click(function(){
		
		callsdcsmneydetailsfromserver();
	});
});

function callsdcsmneydetailsfromserver(){
	$("#sdcsTransactionDetailsabsAdmin").show();
	
	$.ajax({
		
		url:"sdcsMoneyAdmin",
		type:"POST",
		data:{
			
			
		},
		success:function(responseData,textStatus){
			
			handleSdcsAdminDetails(responseData);
		},
		error:function(responseData){
			
			alert("Error contacting back end server");
		}
	});
}
function updatesdcsmoneyofuserfromadmin(){
	var userid=$("#useridmoneyupdate").val().trim();
	var amountToupdate=$("#amountmoneyupdate").val().trim();
	if(userid==null || userid.length<=0){
		alert("Please enter the userId to update");
		$("#useridmoneyupdate").focus();
	}else if(amountToupdate==null || amountToupdate.length<=0){
		alert("Please enetr the amount to update");
		$("#amountmoneyupdate").focus();
	}else{
		$("#udatemoneysdcs").text("Loading...");
		$.ajax({
			url:"updatesdcsmoneyfromadmin",
			type:"POST",
			data:{
				"userId":userid,
				"amounts":amountToupdate
			},
			success:function(responseData,textStatus){
				$("#udatemoneysdcs").text("Update");
				handleallupdatedstatus(responseData);
			},
			error:function(responseData){
				$("#udatemoneysdcs").text("Update");
				alert("Sorry!, Error contacting back end server");
			}
		});
		
	}
}
function handleallupdatedstatus(responseData){
	var response=jQuery.parseJSON(responseData);
	if(response.result){
		alert("Updated successfully");
		$("#useridmoneyupdate").val("");
		$("#amountmoneyupdate").val("");
		callsdcsmneydetailsfromserver();
	}else{
		alert("Not Updated, please check the data you provided");
		}
}
function handleSdcsAdminDetails(responseData){
	
	var response = jQuery.parseJSON(responseData);
	
	if(response.result){
		
		$("#tblsdcsMoneyDetails tbody").empty();
		var strTotalTablBodyStart = '<tbody>';
		var strTotalTablBodyEnd = '</tbody>';

		// Add offices table header
		$("#tblsdcsMoneyDetails").append(strTotalTablBodyStart);
		var courierHistoryJsonArraya = response.details;

		// Adding each booked courier to the table 
		$.each(courierHistoryJsonArraya, function(index, value) {

			var strTableRowStart = '<tr style="color:#000000;">';
			var id = value["id"];
			var cus_details = value["cus_details"];
			var cus_phone=value["phone_number"];
			var balance = value["balance"];
			var allstrings=cus_details+"(phone-"+cus_phone+")(id-"+id+")"+balance+"Rs";
            var detaisl='<option value='+allstrings+'></option>';
            $("#datalist1").append(detaisl);
			var ba = Math.round(balance); 

			var strColumnOne = '<td>' + id + '</td>';
			var strColumnTwo = '<td> ' + cus_details +', '+cus_phone+ ' </td>';
			var strColumnThree = '<td> ' + ba + ' </td>';
			

			var strTableRowEnd = '</tr>';
			// Appending row to table body
			$("#tblsdcsMoneyDetails").append(
					strTableRowStart + strColumnOne + strColumnTwo + strColumnThree
							+ strTableRowEnd);

		});

		// Append body end at the end of the table
		$("#tblsdcsMoneyDetails").append(strTotalTablBodyEnd);

	}
}

/*function sdcsMoneyTransactionAdmin(id){
	
	
	var userId = localStorage.getItem("customer_userid");
	var bookingId = localStorage.getItem("cus_bookingId");
	
	$.ajax({
		
		url:"sdcsMoneyTransaction",
		type:"POST",
		data:{
			
			"userId":id,
			"bookingId":bookingId
		},
		success:function(responseData,textStatus){
			
			handleSdcsMoneyTransactionAdmin(responseData);
		},
		error:function(responseData){
			
			alert("Error contacting back end server");
		}
		
	});
}



function handleSdcsMoneyTransactionAdmin(responseData){
	
	var response = jQuery.parseJSON(responseData);
	

	if(response.result){
		$("#sdcsTransactionDetailsabsAdmin").hide();
		$("#sdcsTransactionDetailsAdmin").show();
		$("#tblSdcsMoneyTransactionAdmin tbody").empty();
		var strBulkTotalTablBodyStart = '<tbody>';
		var strBulkTotalTablBodyEnd = '</tbody>';

		// Add offices table header
		$("#tblSdcsMoneyTransactionAdmin").append(strBulkTotalTablBodyStart);
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

			$("#tblSdcsMoneyTransactionAdmin").append(
					strTableRowStart +strColumnTwo+strColumnSix+ strColumnThree+strColumnOne+strColumnFour+strTableRowEnd);
		
		});

		// Append body end at the end of the table
		$("#tblSdcsMoneyTransactionAdmin").append(strBulkTotalTablBodyEnd);
		
	}
}

function admnTransactionBackBtnClicked(){
	$("#sdcsTransactionDetailsAdmin").hide();
	$("#sdcsTransactionDetailsabsAdmin").show();
	
	
}*/