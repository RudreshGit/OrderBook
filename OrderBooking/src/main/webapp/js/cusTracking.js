$(document).ready(function(){
 $("#trackingTblDiv").hide();
 
 
 
 $("#btnCusTracking").click(function(){  
  var trackingid = $("#trackingInput").val().trim();
  
  if(trackingid == null || trackingid.length == 0){
   
   alert("Please enter the tracking number.");
   $("#trackingInput").focus();
  }else{
  
  $("#btnCusTracking").text("Loading...");
  $.ajax({

   url : "courier_tracking",
   type : "POST",
   data : {
    "trackingid" : trackingid
   },
   success : function(responseData,textStatus){
    $("#btnCusTracking").text("Track");
    handleTracking(responseData);
    },
   error : function(responseData) {
    $("#btnCusTracking").text("Track");
    alert("Sorry Coluldn't Track your courier.Please Try Again Later");
   }
  });
  
  }
 });
});



/*function handleTracking(responseData){
	
	
var trackingHistory = jQuery.parseJSON(responseData);
	

	if (trackingHistory.status){ // We got some courier history
		
		//console.log(allCouriersJsona.couriers);
		var deliveryBoyJsonArray = trackingHistory.details;
		
		if (deliveryBoyJsonArray != undefined && deliveryBoyJsonArray != null){
			parseTrackingJsonArray(trackingHistory);
		}	
		
	} else { // We did not get any result for filter criteria
				$("#trackingTblDiv").hide();
				alert("Sorry!..Details not found for this booking id");
		}
			
		
		
	}
*/

function handleTracking(responseData){
	
	var trackingHistory = jQuery.parseJSON(responseData);
	
	if (trackingHistory.status){
	
		$("#trackingTblDiv").show();
		
	/*$("#trackingDiv").hide();*/
	$("#tblCusTracking").show();
	
	$("#tblCusTracking tbody").empty();
	var strBulkTotalTablBodyStart = '<tbody>';
	var strBulkTotalTablBodyEnd = '</tbody>';

	// Add offices table header
	$("#tblCusTracking").append(strBulkTotalTablBodyStart);
	var deliveryBoyHistoryJsonArraya = trackingHistory.details;

	// Adding each booked courier to the table 
	$.each(deliveryBoyHistoryJsonArraya, function(index, value) {
		var strTableRowStart = '<tr style="color:#000000;">';

		var sender = value["sender"];

		var reciever = value["reciver"];
		
		var delBoy = value["delivery"];
		
		var status = value["status"];
		
		var vehicle = value["vehicle"];
		
		var delBoys = value["delBoys"];
		
		
		/*var courierStatus = "";
		 if(status == 0 || status == 2){
			 
			 courierStatus = "pending";
		 }else if(status = 3){
			 
			 courierStatus = "delivered";
		 }else if(status = 4){
			 
			 courierStatus = "cancelled";
		 }*/
		
	

		var stat = "0";
		
		if(status==0){
			stat = "pending";
		}else if(status==1){
			stat = "accepted";
		}else if(status==2){
			stat = "picked";
		}else if(status==3){
			stat="delivered";
		}else if(status==4){
			stat="cancelled";
		}
		
		var strColumnTwo = '<td> ' + sender + ' </td>';
		var strColumnThree = '<td> ' + reciever + ' </td>';
		var strColumnSeven = '<td> ' + delBoy + ' </td>';
		var strColumnNine = '<td> ' + vehicle + ' </td>';
		var strColumnTen= '<td> ' + delBoys + ' </td>';
		var strColumnEight = '<td> ' + stat + ' </td>';
		
		
		var strTableRowEnd = '</tr>';

		$("#tblCusTracking").append(
				strTableRowStart +strColumnTwo +strColumnThree+ strColumnSeven+strColumnNine+strColumnTen+strColumnEight+ strTableRowEnd);
	});

	// Append body end at the end of the table
	$("#tblCusTracking").append(strBulkTotalTablBodyEnd);
}else{
	$("#trackingTblDiv").hide();
	alert("Could not find any courier on the booking id.");
	
	}
}
