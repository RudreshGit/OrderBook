$(document).ready(function(){
	
	$("#btndelBookClicked").click(function(){
		
		
		
	});
});




	function freshBookingListClicked(){
		
		hideAllDiv();
		
		$("#DeliveryBoyBookedAbsFrehBookingTblDIv").show();
		
		freshBookingClicked();
	}

	function freshBookingClicked(){
		
		var userId = localStorage.getItem("userId");
		
		$.ajax({

			url : "freshDeliveryBoyBooking",
			type : "POST",
			data : {
				"restaurantId" : userId
						},
			success : function(responseData, textStatus) {
				
				handleFreshBookingList(responseData);
				
				
			},
			error : function(responseData) {
					
				alert("Sorry Coluldn't Book Due TO some Internal Error.Please Try Again Later");
			}
		});

		
	}



	function handleFreshBookingList(freshBookingResponseData){
		
		var deliveryBoyFreshDetails = jQuery.parseJSON(freshBookingResponseData);
		
		if (deliveryBoyFreshDetails.status) { // We got some courier history
					
			var deliveryBoyFreshArray = deliveryBoyFreshDetails.fresh_booking;
		
			if (deliveryBoyFreshArray != undefined
					&& deliveryBoyFreshArray != null)
				parseHotelBookingFreshDetailsJsonArray(deliveryBoyFreshDetails);
		} else { // We did not get any result for filter criteria
					$("#tblDeliveryBoyBookingAbsFreshBooking").hide();
					alert("sorry could not find any couriers on the day.")
			}

		
	}


	function parseHotelBookingFreshDetailsJsonArray(deliveryBoyFreshDetailsa){
		
		$("#tblDeliveryBoyBookingAbsFreshBooking tbody").empty();
		var strBulkTotalTablBodyStart = '<tbody>';
		var strBulkTotalTablBodyEnd = '</tbody>';

		// Add offices table header
		$("#tblDeliveryBoyBookingAbsFreshBooking").append(strBulkTotalTablBodyStart);
		var deliveryBoyFreshJsonArraya = deliveryBoyFreshDetailsa.fresh_booking;

		// Adding each booked courier to the table 
		$.each(deliveryBoyFreshJsonArraya, function(index, value) {
			var strTableRowStart = '<tr>';

			var OrderTrackingId = value["booking_Id"];
			
			/*var recieverName = value["full_name"];
			
			var recieverContact = value["mobile_number"];
			
			var DeliveryBoyId = value["delivery_boy_id"];*/
			
			var status = value["status"];
			
			if(status == 0){
				
				statustext = "Not yet Accepted";
			}else if(status == 1){
				
				statustext = "Accepted";
			}else if(status == 2){
				
				statustext = "Picked";
			}else if(status == 3){
				
				statustext = "Delivered";
			}
			
			var strColumnOne = '<td> <a onclick="freshbookingcompleteClicked('
				+ value["booking_Ida"] + ');">'  + OrderTrackingId + ' </td>';
			/*var strColumnTwo = '<td> ' + recieverName + ' </td>';
			var strColumnThree = '<td> ' + recieverContact + ' </td>';
			var strColumnFour = '<td> ' + DeliveryBoyId + ' </td>';*/
			var strColumnFive = '<td> ' + statustext + ' </td>';
					
			

			var strTableRowEnd = '</tr>';

			$("#tblDeliveryBoyBookingAbsFreshBooking").append(
					strTableRowStart + strColumnOne +strColumnFive + strTableRowEnd);
		});

		// Append body end at the end of the table
		$("#tblDeliveryBoyBookingAbsFreshBooking").append(strBulkTotalTablBodyEnd);

		
	}

	
	

	function absHotelHistorySubmitClicked(){
		
		var userId = localStorage.getItem("userId");
		
		$.ajax({

			url : "deliveredList11",
			type : "POST",
			data : {
				"deliveryBoyId" : userId
			},
			success : function(responseData, textStatus) {
				
				handleAbstractHistoryList(responseData);
				
				
			},
			error : function(responseData) {
				
				alert("Sorry Coluldn't Book Due TO some Internal Error.Please Try Again Later");
			}
		});

		
}

	function handleAbstractHistoryList(historyresponseData){
		

		var deliveryBoyDetails = jQuery.parseJSON(historyresponseData);
		if (deliveryBoyDetails.result) { // We got some courier history
			
			//console.log(allCouriersJsona.couriers);
			var deliveryBoyJsonArray = deliveryBoyDetails.all_couriers;
			
			
			
			if (deliveryBoyJsonArray != undefined
					&& deliveryBoyJsonArray != null)
				
				parseabsHistoryJsonArray(deliveryBoyDetails);
		} else { // We did not get any result for filter criteria
					$("#tblDeliveryBoyAbsHistory").hide();
			}
		
	}


	function parseabsHistoryJsonArray(deliveryBoyDetailsa){
		
		
		$("#tblDeliveryBoyAbsHistory tbody").empty();
		var strBulkTotalTablBodyStart = '<tbody>';
		var strBulkTotalTablBodyEnd = '</tbody>';

		// Add offices table header
		$("#tblDeliveryBoyAbsHistory").append(strBulkTotalTablBodyStart);
		var deliveryBoyHistoryJsonArraya = deliveryBoyDetailsa.all_couriers;

		// Adding each booked courier to the table 
		$.each(deliveryBoyHistoryJsonArraya, function(index, value) {
			var strTableRowStart = '<tr style="color:#000000;">';

			var time = value["time_of_booking"];

			var totalCouriers = value["number_of_couriers"];
			
			var TotalAmount = value["amount"];
			
			var status = value["payedstatus"];
			
			var distace = value["distance"];
					
			
			
			var strColumnOne = '<td><a onclick="completeHotelHistorySubmitClicked('
				+ value["booking_Ida"] + ');"> ' + time + ' </td>';
			var strColumnTwo = '<td> ' + totalCouriers + ' </td>';
			var strColumnThree = '<td> ' + TotalAmount + ' </td>';
			var strColumnFour = '<td> ' + status + ' </td>';
			var strColumnFive = '<td> ' + distace + ' </td>';
			
			var strTableRowEnd = '</tr>';

			$("#tblDeliveryBoyAbsHistory").append(
					strTableRowStart + strColumnOne + strColumnTwo+strColumnThree+strColumnFour +strColumnFive+ strTableRowEnd);
		});

		// Append body end at the end of the table
		$("#tblDeliveryBoyAbsHistory").append(strBulkTotalTablBodyEnd);

		
	}

	function btnAdminAllRestaurantsList(){
		$.ajax({

			url : "restaurantList",
			type : "POST",
			data : {
				"abcd" : "1"
			},
			success : function(responseData, textStatus) {
				
				handleRestaurantResponceAbc(responseData);
				
				
			},
			error : function(responseData) {
				
				alert("Sorry Couldn't get the list of restaurants.");
			}
		});

		
	}
	
	function handleRestaurantResponceAbc(responseData){
		var restaurants = jQuery.parseJSON(responseData);
		
		if(restaurants.result){
			
			$("#tblAllRegisteredRestaurants tbody").empty();
			var strBulkTotalTablBodyStart = '<tbody>';
			var strBulkTotalTablBodyEnd = '</tbody>';
			var resrtaurantArray = restaurants.restaurant_list;
			
			// Adding each booked courier to the table 
			$.each(resrtaurantArray, function(index, value) {
				var strTableRowStart = '<tr style="color:#000000;">';

				var restaurantId = value["restaurantId"];

				var restaurantName = value["restaurantName"];
				
				var restaurantAddress = value["restaurant_address"];
				
				var restaurantContact = value["restaurant_contact"];
				
				var resLat = value["lat"];
				
				var resLon = value["lon"];
				
				/*var serNo = value["size"];*/
				
				var strColumnOne = '<td>' + restaurantId + ' </td>';
				var strColumnTwo = '<td> ' + restaurantName + ' </td>';
				var strColumnThree = '<td> ' + restaurantAddress + ' </td>';
				var strColumnFour = '<td> ' + restaurantContact + ' </td>';
				var strColumnFive = '<td> ' + resLat + ' </td>';
				var strColumnSix = '<td> ' + resLon + ' </td>';
				
				/*var strColumnFIve = '<td>' + serNo +'<td>';*/
				
				var strTableRowEnd = '</tr>';

				$("#tblAllRegisteredRestaurants").append(
						strTableRowStart + strColumnOne + strColumnTwo+strColumnThree+strColumnFour+strColumnFive+strColumnSix + strTableRowEnd);
			});

			// Append body end at the end of the table
			$("#tblAllRegisteredRestaurants").append(strBulkTotalTablBodyEnd);

		}
		
	}