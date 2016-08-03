$(document).ready(function(){
	
	$("#btnSearchRestaurant").click(function(){
		
		var name = $("#selectresSearch").val();
		
		getRestaurantList(name);
		
	});
	
	$("#btnDelBoyOnSearch").click(function(){
		
		
		var name = $("#selectDelBoyRegion").val();
		var vehicle = $("#selectDelBoyVehicle").val();
		getTheList(name,vehicle);
	});
});

function getTheList(name,vehicle){
	
	
	$.ajax({
		
		url:"searchList",
			type:"POST",
			data:{
				
				"name":name,
				"vehicle":vehicle
			},
			success:function(responseData,textStatus){
				
				handleSearchListResponse(responseData);
			},
			
			error:function(responseData){
				
				alert("Error contacting server.Please try again later.");
			}
		
		
	});
	
}

function handleSearchListResponse(responseData){
	
	var response = jQuery.parseJSON(responseData);
	
	if(response.result){
		
		$("#tbldelboyListOnSearch tbody").empty();
		var strTotalTablBodyStart = '<tbody>';
		var strTotalTablBodyEnd = '</tbody>';

		// Add offices table header
		$("#tbldelboyListOnSearch").append(strTotalTablBodyStart);
		var courierHistoryJsonArraya = response.listArray;

		// Adding each booked courier to the table 
		$.each(courierHistoryJsonArraya, function(index, value) {

			var strTableRowStart = '<tr style="color:#000000;">';
			var name = value["name"];
			var address = value["address"];
			var contact = value["contact"];
			var region = value["region"];
			var vehicle = value["vehicle"];
			var avail = value["avail"];
			
			
			
			var strColumnOne = '<td>' + name + '</a></td>';
			var strColumnTwo = '<td> ' + address + ' </td>';
			var strColumnThree = '<td> ' + contact + ' </td>';
			var strColumnFour = '<td> ' + region + ' </td>';
			var strColumnFive = '<td> ' + vehicle + ' </td>';
			var strColumnSix = '<td> ' + avail + ' </td>';
			
			var strTableRowEnd = '</tr>';
			// Appending row to table body
			$("#tbldelboyListOnSearch").append(
					strTableRowStart + strColumnOne + strColumnTwo + strColumnThree
							+ strColumnFour + strColumnFive + strColumnSix + strTableRowEnd);

		});

		// Append body end at the end of the table
		$("#tbldelboyListOnSearch").append(strTotalTablBodyEnd);

		
		
	}else{
		
		alert("Sorry there are no delivery boys in that region");
	}
}


function getRestaurantList(name){
	
$.ajax({
		
		url:"searchResList",
			type:"POST",
			data:{
				
				"name":name
			},
			success:function(responseData,textStatus){
				
				handleSearchResListResponse(responseData);
			},
			
			error:function(responseData){
				
				alert("Error contacting server.Please try again later.");
			}
		
		
	});
	
	
}


function handleSearchResListResponse(responseData){
	
var response = jQuery.parseJSON(responseData);
	
	if(response.result){
		
		$("#tblrestaurantSearchList tbody").empty();
		var strTotalTablBodyStart = '<tbody>';
		var strTotalTablBodyEnd = '</tbody>';

		// Add offices table header
		$("#tblrestaurantSearchList").append(strTotalTablBodyStart);
		var courierHistoryJsonArraya = response.listArray;

		// Adding each booked courier to the table 
		$.each(courierHistoryJsonArraya, function(index, value) {

			var strTableRowStart = '<tr style="color:#000000;">';
			var name = value["name"];
			var address = value["address"];
			var contact = value["contact"];
			var region = value["region"];
			
			
			
			
			var strColumnOne = '<td>' + name + '</a></td>';
			var strColumnTwo = '<td> ' + address + ' </td>';
			var strColumnThree = '<td> ' + contact + ' </td>';
			var strColumnFour = '<td> ' + region + ' </td>';
						
			var strTableRowEnd = '</tr>';
			// Appending row to table body
			$("#tblrestaurantSearchList").append(
					strTableRowStart + strColumnOne + strColumnTwo + strColumnThree
							+ strColumnFour  + strTableRowEnd);

		});

		// Append body end at the end of the table
		$("#tblrestaurantSearchList").append(strTotalTablBodyEnd);

		
		
	}else{
		
		alert("There are no restaurants registered in that region.");
	}

}
