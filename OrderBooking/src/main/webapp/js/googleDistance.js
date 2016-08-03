var courierType = "0";

var pickUpArea = "0";
var destArea = "0";
var latitude = "0";
var longitude = "0";
var weight = "0";
var vehicleType = "0";
var deliveryBoyNeeded = "0";
$(document)
		.ready(
				function() {

					$("#btnGoogleDistance")
							.click(
									function() {

										var courierType = $("#customerSelect")
												.val();
										var weight = $("#courierWeight").val();
										var pickArea = $("#pickUpArea").val()
												.trim();
										var dropArea = $("#destinationArea")
												.val().trim();
										vehicleType = $("#vehType").val()
												.trim();
										deliveryBoyNeeded = $("#deliveryboys")
												.val().trim();

										pickUpArea = pickArea + ",bangalore";
										destArea = dropArea + ",bangalore";

										var service = new google.maps.DistanceMatrixService();
										service
												.getDistanceMatrix(
														{
															origins : [ pickUpArea ],
															destinations : [ destArea ],
															travelMode : google.maps.TravelMode.DRIVING,
															unitSystem : google.maps.UnitSystem.METRIC,
															avoidHighways : false,
															avoidTolls : false
														},
														function(response,
																status) {
															if (status == google.maps.DistanceMatrixStatus.OK
																	&& response.rows[0].elements[0].status != "ZERO_RESULTS") {
																var distance = response.rows[0].elements[0].distance.text;
																/*
																 * duration =
																 * response.rows[0].elements[0].duration.text;
																 */

															} else {
																alert("Unable to find the distance via road.");
															}

															if (weight == null
																	|| weight.length == 0) {

																alert("Please enter the weight of the courier");

																$("#courierWeight1")
																		.focus();

															} else if (pickArea == null
																	|| pickArea.length == 0) {

																alert("Please enter the pick up area");
																$("#pickUpArea")
																		.focus();
															} else if (dropArea == null
																	|| dropArea.lemgth == 0) {

																alert("Please enter the destination area");
																$(
																		"#destinationArea")
																		.focus();
															} else if (distance == null
																	|| distance.length == 0) {

																alert("Could not calculate distance for this pick up and delivery. Please provide proper area names.");
																$("#pickUpArea")
																		.focus();
															} else if (weight > 10) {

																alert("Please contact our support team for packages weighing more than 10 Kgs.");

															} else if (vehicleType == null
																	|| vehicleType.length == 0
																	|| vehicleType == "00") {

																alert("please select vehicle type.");
																$("#vehType")
																		.focus();

															} else if ((deliveryBoyNeeded == null
																	|| deliveryBoyNeeded.length == 0
																	|| deliveryBoyNeeded == "--select delivery boys--")&& (vehicleType !="Auto")) {
																alert("please select number of delivery boys needed.");
																$("#deliveryboys")
																		.focus();
															} else {
																localStorage
																		.setItem(
																				"total_distance",
																				distance);
																$("#btnGoogleDistance").text("Loading...");

																$.ajax({
																			url : "PriceEstimation",
																			type : "POST",
																			data : {
																				"typeofcouiers" : courierType,
																				"weight" : weight,
																				"totalDistance" : distance,
																				"vehicaletype" : vehicleType,
																				"deliveryboys" : deliveryBoyNeeded
																			},
																			success : function(
																					responseData,
																					textStatus) {

																				handleCalculatedDistance(responseData);
																				$("#btnGoogleDistance").text("Estimate");
																			},
																			error : function(
																					
																					responseData) {
																				$("#btnGoogleDistance").text("Estimate");
																			}

																		});

															}

														});

									});
					$("#btnGoogleDistance1")
							.click(
									function() {

										var courierType = $("#customerSelect1")
												.val();
										var weight = $("#courierWeight1").val();
										var pickArea = $("#pickUpArea1").val()
												.trim();
										var dropArea = $("#destinationArea1")
												.val().trim();

										vehicleType = $("#vehType").val()
										.trim();
								deliveryBoyNeeded = $("#deliveryboys")
										.val().trim();

										
										pickUpArea = pickArea + ",bangalore";
										destArea = dropArea + ",bangalore";

										var service = new google.maps.DistanceMatrixService();
										service
												.getDistanceMatrix(
														{
															origins : [ pickUpArea ],
															destinations : [ destArea ],
															travelMode : google.maps.TravelMode.DRIVING,
															unitSystem : google.maps.UnitSystem.METRIC,
															avoidHighways : false,
															avoidTolls : false
														},
														function(response,
																status) {
															if (status == google.maps.DistanceMatrixStatus.OK
																	&& response.rows[0].elements[0].status != "ZERO_RESULTS") {
																var distance = response.rows[0].elements[0].distance.text;
																/*
																 * duration =
																 * response.rows[0].elements[0].duration.text;
																 */

															} else {
																alert("Unable to find the distance via road.");
															}

															if (weight == null
																	|| weight.length == 0) {

																alert("Please enter the weight of the courier");

																$(
																		"#courierWeight1")
																		.focus();

															} else if (pickArea == null
																	|| pickArea.length == 0) {

																alert("Please enter the pick up area");
																$("#pickUpArea")
																		.focus();
															} else if (dropArea == null
																	|| dropArea.length == 0) {

																alert("Please enter the destination area");
																$(
																		"#destinationArea")
																		.focus();
															} else if (distance == null
																	|| distance.length == 0) {

																alert("Could not calculate distance for this pick up and delivery. Please provide proper area name.");
																$("#pickUpArea")
																		.focus();
															} else if (weight > 10) {

																alert("Please contact our support team for packages weighing more than 10 Kgs.");
															}else if (vehicleType == null
																	|| vehicleType.length == 0
																	|| vehicleType == "00") {

																alert("please select vehicle type.");
																$("#vehType")
																		.focus();

															} else if (deliveryBoyNeeded == null
																	|| deliveryBoyNeeded.length == 0
																	|| deliveryBoyNeeded == "00") {
																alert("please select number of delivery boys needed.");
																$("#delboyneed")
																		.focus();
															}

															else {

																localStorage
																		.setItem(
																				"total_distance",
																				distance);

																
															
																		$.ajax({
																			url : "PriceEstimation",
																			type : "POST",
																			data : {
																				"typeofcouiers" : courierType,
																				"weight" : weight,
																				"totalDistance" : distance,
																				"vehicaletype" : vehicleType,
																				"deliveryboys" : deliveryBoyNeeded
																			},
																			success : function(
																					responseData,
																					textStatus) {
																				$("#btnGoogleDistance").text("Estimate");
																				handleLoginCalculatedDistance(responseData);

																			},
																			error : function(
																					responseData) {
																				$("#btnGoogleDistance").text("Estimate");
																			}

																		});

															}

														});
									});
				});
function handleCalculatedDistance(responseData) {
	var calDis = jQuery.parseJSON(responseData);

	if (calDis.calculated) {

		var amount = calDis.estimatedTotalAmount;
		var dist = localStorage.getItem("total_distance");

		localStorage.setItem("courier_amount", amount);
		localStorage.setItem("content_weight", weight);
		localStorage.setItem("pick", pickUpArea);
		localStorage.setItem("dest", destArea);
		localStorage.setItem("lat", latitude);
		localStorage.setItem("lon", longitude);
		localStorage.setItem("type", courierType);
		localStorage.setItem("vehicaltype", vehicleType);
		localStorage.setItem("Deliveryboyneeded", deliveryBoyNeeded);

		if (confirm("The total distance is " + dist + ". Courier cost is Rs. "
				+ amount + ". Would you like to proceed for payment?") == true) {

			/*
			 * var weight =$("#courierWeight").val(""); var pickArea =
			 * $("#pickUpArea").val(""); var dropArea =
			 * $("#destinationArea").val("");
			 */
			$("#customerBooking").hide();
			$("#customerLoginBooking").hide();
			$("#bookingPageAfterEstimation").show();

		} else {

		
		}
	} else {
		alert("Not Calculating amount.May be because of too short distance");
	}

}

function handleLoginCalculatedDistance(responseData) {

	var calDis = jQuery.parseJSON(responseData);

	if (calDis.calculated) {

		var amount = calDis.estimatedTotalAmount;
		var dist = localStorage.getItem("total_distance");

		localStorage.setItem("courier_amount", amount);
		localStorage.setItem("content_weight", weight);
		localStorage.setItem("pick", pickUpArea);
		localStorage.setItem("dest", destArea);
		localStorage.setItem("lat", latitude);
		localStorage.setItem("lon", longitude);
		localStorage.setItem("type", courierType);
		localStorage.setItem("vehicaltype", vehicleType);
		localStorage.setItem("Deliveryboyneeded", deliveryBoyNeeded);

		if (confirm("The total distance is " + dist + ". Courier cost is Rs. "
				+ amount + ". Would you like to proceed for payment?") == true) {

			/*
			 * var weight =$("#courierWeight").val(""); var pickArea =
			 * $("#pickUpArea").val(""); var dropArea =
			 * $("#destinationArea").val("");
			 */
			$("#customerBooking").hide();
			$("#customerLoginBooking").hide();
			$("#loginBookingPageAfterEstimation").show();

		} else {

			
		}
	} else {
		alert("Not Calculating amount.May be because of too short distance");
	}

}

function addressDetailsBackBtnClick() {

	$("#bookingPageAfterEstimation").hide();
	$("#customerBooking").show();
	 $("#sdcsMoneyPayOption").hide();

}