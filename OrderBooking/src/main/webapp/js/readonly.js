$(document).ready(function() {
	$("#btnreadonlysumbmit").click(function() {
		servercallreadonly();
	});
});

function servercallreadonly(){
	var numbers = $("#deptsnumberreadonly").val().trim();
	var date = $("#datereadonly").val().trim();
	
	if (date == null || date.length == 0) {
		alert("Enter Date");
		$("#datereadonly").focus();
	}else if (date == null || date.length == 0) {
		alert("Enter Date");
		$("#datereadonly").focus();
	}else{
		$.ajax({
			url : "readonly",
			type : "POST",
			data : {
				"date" : date,
				"deptnum" : numbers
				

			},
			success : function(responseData, textStatus) {

				handlereadonly(responseData);

			},
			error : function(responseData) {
				alert("Error contatcing backend server");
			}

		});

		
	}

	
	
}

function handlereadonly(responseData){
	
	var dDetails = jQuery.parseJSON(responseData);
	if (dDetails.result) { // We got some courier history
		
		//console.log(allCouriersJsona.couriers);
		var deJsonArray = dDetails.all_dates;
		
		
		
		if (deJsonArray != undefined
				&& deJsonArray != null)
			
			parseCusabsHistoryJsonArrayAbcdsd(dDetails);
	} else { // We did not get any result for filter criteria
				alert("No History Found!");
		}
	
}

function parseCusabsHistoryJsonArrayAbcdsd(dDetails){
	$("#readonlytale tbody").empty();
	var strBulkTotalTablBodyStart = '<tbody>';
	var strBulkTotalTablBodyEnd = '</tbody>';

	// Add offices table header
	$("#readonlytale").append(strBulkTotalTablBodyStart);
	var deliveryBoyHistoryJsonArraya = dDetails.all_dates;

	// Adding each booked courier to the table 
	$.each(deliveryBoyHistoryJsonArraya, function(index, value) {
		var strTableRowStart = '<tr style="color:#000000;">';

		var stime = value["s_time"];

		var etime = value["e_time"];
		
		var preferences = value["preferences"];
		
		var descendednum = value["descend_number"];
		
		var descend = value["descend"];
				
var fbac = value["f_back"];
		
		var details = value["details"];
		
		var strColumnOne = '<td>'+stime+' </td>';
		var strColumnTwo = '<td> ' + etime + ' </td>';
		var strColumnThree = '<td> ' + preferences + ' </td>';
		var strColumnFour = '<td> ' + descendednum + ' </td>';
		var strColumnFive = '<td> ' + descend + ' </td>';
		var strColumnSix = '<td> ' + fbac + ' </td>';
		var strColumnSeven = '<td> ' + details + ' </td>';
	
		var strTableRowEnd = '</tr>';

		$("#readonlytale").append(
				strTableRowStart + strColumnOne + strColumnTwo+strColumnThree+strColumnFour +strColumnFive+strColumnSix+ strColumnSeven+strTableRowEnd);
	});

	// Append body end at the end of the table
	$("#readonlytale").append(strBulkTotalTablBodyEnd);
}
