<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>

<head>
<meta name="google-site-verification"
	content="j9F0snlbHU-hQOg-iNh9Z6zZQMoRIpsA3NX2wJOx1t8" />
<link rel="stylesheet" type="text/css" href="css/common.css" />
<!-- Bootstrap -->
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">

<script type="text/javascript"
	src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
<script type="text/javascript"
	src="http://maps.google.com/maps/api/js?sensor=false"></script>

<script type="text/javascript" src="js/jquery-1.11.3.min.js"></script>

<script type="text/javascript" src="js/main.js"></script>
<script type="text/javascript" src="js/bookingpage_styling.js"></script>

<script type="text/javascript" src="js/common.js"></script>
<script type="text/javascript" src="js/mainpage.js"></script>
<script type="text/javascript" src="js/admin.js"></script>
<script type="text/javascript" src="js/companyInfo.js"></script>
<script type="text/javascript" src="js/restaurantInfo.js"></script>
<script type="text/javascript" src="js/delBoyReg.js"></script>
<script type="text/javascript" src="js/courierBooking.js"></script>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/ripple.js"></script>

<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

<script src="http://maps.googleapis.com/maps/api/js">
	
</script>


<meta http-equiv="content-type" content="text/html; charset=utf-8" />


<!-- Bootstrap -->
<script type="text/javascript" src="js/bootstrap.js"></script>
<link style="width:25px;height:25px;" rel="shortcut icon"
	href="img/sdcs_logo.png" type="image/png" />
<title>SDCS 24/7 Courier Services</title>
<style>
@
viewport {
	zoom: 1.0;
	width: extend-to-zoom;
}

@
-ms-viewport {
	width: extend-to-zoom;
	zoom: 1.0;
}
</style>
<meta name="viewport" content="width=device-width,initial-scale=1">
</head>

<body class="appBody" style="font-family: 'Merriweather', serif;">
	<div
		style="display: inline; margin-top: -45px; margin-left: 50px; float: left; display: inline;">
		<h4>
			For Quick Booking Call Us:
			<marquee scrollamount="5" width="450px;" style="margin-top: -50px;">
				<span>9535337626 - 9343057755 - 8151965401 - 9538651838 </span>
			</marquee>
		</h4>

	</div>
	<div
		style="display: inline; margin-bottom: -30px; margin-top: -35px; margin-right: 50px; float: right;">
		<a href="#" id="btnAboutUs">About Us</a> | <a href="#"
			id="ourServices">Our Services</a> | <a href="#" id="contactUsClicked">Contact
			Us</a> | <a href="#" id="sugestUsClicked">Suggest Us</a> | <a
			class="supportFunctions" href="#"
			style="text-decoratio n: none; color: #0000FF;" id="sdcsAdmin">Admin</a>
	</div>

	<nav style="margin-top: 50px; width: 100%; margin-left: 0px;">
		<ul>
			<li><div style="float: left; margin-left: 30px;">
					<img id="imgLeftLogo" alt="SDCS"
						style="width: 55px; height: 55px; margin-bottom: -20px; margin-top: -10px;"
						src="img/sdcs_logo.png">
				</div>
				<div
					style="float: right; font-size: 22px; color: #ff9900; margin-top: 10px; margin-bottom: -20px; text-shadow: black 0.1em 0.1em 0.2em;">SDCS</div>
			</li>
			<li style="margin-left: 20px; margin-right: -50px;"><a href="#"
				id="btnHome">HOME</a></li>
			<li style="margin-left: 20px; margin-right: -30px;"><a href="#"
				id="btnBooking">24 X 7 COURIER BOOKING </a></li>
			<li><a href="#" id="NavSantaclass" style="margin-right: -30px;">SANTA
					CLAUS BOOKING </a></li>
			<li><a href="#" id="btnDeliveryBoyBooking"
				style="margin-right: -30px;">DELIVERY BOY BOOKING</a></li>
			<li><a href="#" id="btnTracking" style="margin-right: -30px;">TRACKING</a></li>
			<li><a href="#" id="btnCancellation"
				style="margin-right: -10px;">QUICK CANCELATION</a></li>
		</ul>
	</nav>





	<form name="frmTransaction" id="frmTransaction" method="post"
		action="https://secure.ebs.in/pg/ma/payment/request">
		<input id="account_id" type="hidden" name="account_id"> <input
			id="address" type="hidden" name="address"> <input id="amount"
			type="hidden" name="amount"> <input id="channel"
			type="hidden" name="channel"> <input id="city" type="hidden"
			name="city"> <input id="country" type="hidden" name="country">
		<input id="currency" type="hidden" name="currency"> <input
			id="description" type="hidden" name="description"> <input
			id="email" type="hidden" name="email"> <input id="mode"
			type="hidden" name="mode"> <input id="name" type="hidden"
			name="name"> <input id="page_id" type="hidden" name="page_id">
		<input id="phone" type="hidden" name="phone"> <input
			id="postal_code" type="hidden" name="postal_code"> <input
			id="reference_no" type="hidden" name="reference_no"> <input
			id="return_url" type="hidden" name="return_url"> <input
			id="state" type="hidden" name="state"> <input
			id="secure_hash" type="hidden" name="secure_hash">

	</form>
	<h4 id="paymentTransactionStatus" style="display: none;"></h4>
	<h4 id="paymentTransactionNumber" style="display: none;"></h4>
	<h4 id="trackingNumber" style="display: none;"></h4>







	<!-- Restaurant Login Starts -->
	<div id="restaurantLoginDiv" align="center">
		<h3 style="color: navy; margin-top: 100px;">Restaurant Login</h3>
		<input type="tel" placeholder="Enter User Name"
			id="restaurantUserName" data-toggle="tooltip" data-placement="top"
			title="Enter Registered User Name" style="height: 35px;" /><br>
		<input type="password" placeholder="Enter Password"
			id="restaurantPassword" data-toggle="tooltip" data-placement="top"
			title="Enter Password" style="height: 35px;" /><br>
		<button id="btnRestaurantSubmit">Login</button>
	</div>

	<!-- Restaurant Login Ends -->

	<!-- Contact Us container ends here -->
	<!-- suggestUs Div Container Starts here -->
	<div class="mainDivSuggestUs">
		<div style="margin-top: 15px; margin-left: 250px;">
			<p style="padding-left: 150px; font-size: 20px; color: #FF5A00;">Feedback:Tell
				us what you think.</p>
			<p style="padding-left: 170px; margin-top: -5px; color: #0000FF;">(Suggestions/Ideas/Features/Improvements)</p>
			<table style="color: #000000;">
				<tr>
					<td style="font-size: 15px; color: #000080;"><label>Email
							Id<a style="color: red">*</a><a style="margin-left: 155px;">
								:</a><input type="email" placeholder="Email Id" id="emailSuggestion"
							style="margin-left: 16px; height: 30px;">
					</label></td>
				<tr>
			</table>
			<table style="color: #000000;">
				<tr>
					<td style="font-size: 15px; color: #000080;">How relavent our
						service to you :</td>
					<td style="padding-left: 20px;"><select id="select1">
							<option>Relevant</option>
							<option>Neutral</option>
							<option>Irrelevant</option>

					</select></td>
				<tr>
				<tr style="margin-top: 35px; color: #000080;">
					<td style="font-size: 15px;">Is our service satisfying you :</td>
					<td style="padding-left: 20px;"><select id="select2">
							<option>Satisfied</option>
							<option>Normal</option>
							<option>Unsatisfied</option>

					</select></td>
				<tr>
			</table>
			<p style="font-size: 15px; color: #000080;">
				Message<font style="color: red;">*</font>:
			</p>
			<textarea placeholder="Comments"
				style="width: 350px; height: 80px; box-align: center;"
				id="toSaveAllComments"></textarea>
			<br>
			<button type="submit" class="btnExample"
				Style="margin-left: 30px; text-shadow: 0px 0px 3px #000; color: white; font-weight: bold;"
				onclick="selection1();" id="suggestSubmitClicked">Submit</button>
		</div>
		<!-- Sugget us container ends here -->


	</div>
	<!-- Admin Login container starts here -->

	<div id="adminLoginContainerDiv" style="margin-top: 100px;"
		align="center">
		<h3 style="color: navy;">Admin Login Form</h3>

		<input id="txtAdminLoginUsername" type="text" placeholder="User Name"
			style="height: 35px;"><br> <input
			id="txtAdminLoginPassword" type="password" placeholder="password"
			style="height: 35px;"><br>
		<button id="btnAdminSignIn" class="btn btn-success">Submit</button>


	</div>


	<!-- tabble History -->

	<!-- <div id="DeliveryBoyBookedHistoryTblDIv" >
 
 <div id="hotelHistoryInputDiv">
					<label style="color: black;margin-top:50px;margin-left:100px;">Date<font style="color: red;">*</font>:
						<input type="date" id="hotelHistoryInput" placeholder="date" style="height:35px;">
						<button class="btn btn-info" onclick="dateHotelHistorySubmitClicked()"
							id="btnHotelHistoryInputSubmit" type="submit"
							style="margin-left: 10px; margin-top: -10px;">Submit</button></label>
				</div>
 
 
 
 <p style="color: red;margin-left:100px;">Delivery Boy Booking Details:</p>
						<table id="tblDeliveryBoyBookingHistory" border="1"
							style="text-align: center; width: 80%;margin-left:100px;" class = "CSSTableGenerator">
							<thead style="background-color: #00CCFF">
								<tr>
									<th style="padding-left:50px;height:35px;">Time</th>
									<th style="padding-left:50px;height:35px;">Order Id</th>
									<th style="padding-left:50px;height:35px;">Reciever Name</th>
									<th style="padding-left:50px;height:35px;">Reciever Contact Number</th>
									<th style="padding-left:50px;height:35px;">Dlivery Boy Id</th>
									<th style="padding-left:50px;height:35px;">Distance</th>
									<th style="padding-left:50px;height:35px;">Amount</th>
									<th style="padding-left:50px;height:35px;">status</th>
								</tr>
							</thead>
						</table>
 
 
 </div>
 -->
	<!--History ends here  -->


	<!-- tabble History -->

	<div id="DeliveryBoyAbsHistoryTblDIv">

		<button onclick="restaurantBackBtn()" style="margin-left: 100px;">back</button>

		<p style="color: red; margin-left: 100px;">Delivery Boy Booking
			Details:</p>
		<table id="tblDeliveryBoyAbsHistory" border="1"
			style="text-align: center; width: 80%; margin-left: 100px;"
			class="CSSTableGenerator">
			<thead style="background-color: #00CCFF">
				<tr>
					<th style="padding-left: 50px; height: 35px;">Date</th>
					<th style="padding-left: 50px; height: 35px;">Total Couriers</th>
					<th style="padding-left: 50px; height: 35px;">Total Amount</th>
					<th style="padding-left: 50px; height: 35px;">Pay Status</th>
					<th style="padding-left: 50px; height: 35px;">Total Extra
						Distance</th>
				</tr>
			</thead>
		</table>


	</div>

	<!--History ends here  -->

	<!-- table complete history starts  -->


	<div id="DeliveryBoyCompleteHistoryTblDIv">


		<p style="color: red; margin-left: 100px;">Delivery Boy Booking
			Details:</p>
		<table id="tblDeliveryBoyCompleteHistory" border="1"
			style="text-align: center; width: 80%; margin-left: 100px;"
			class="CSSTableGenerator">
			<thead style="background-color: #00CCFF">
				<tr>
					<th style="padding-left: 50px; height: 35px;">Booking Id</th>
					<th style="padding-left: 50px; height: 35px;">Status</th>
					<th style="padding-left: 50px; height: 35px;">Amount</th>
					<th style="padding-left: 50px; height: 35px;">Distance</th>
				</tr>
			</thead>
		</table>


	</div>




	<!-- table complete history ends  -->
	<!-- Fresh booking Div starts here -->

	<div id="DeliveryBoyBookedFrehBookingTblDIv" class="CSSTableGenerator">




		<p style="color: red; margin-left: 100px;">Delivery Fresh Booking
			Details:</p>
		<table id="tblDeliveryBoyBookingFreshBooking" border="1"
			style="text-align: center; width: 80%; margin-left: 100px;">
			<thead style="background-color: #00CCFF">
				<tr>
					<th style="padding-left: 50px; height: 35px;">Order Id</th>
					<th style="padding-left: 50px; height: 35px;">Receiver Name</th>
					<th style="padding-left: 50px; height: 35px;">Receiver Contact
						Number</th>
					<th style="padding-left: 50px; height: 35px;">Delivery Boy Id</th>
					<th style="padding-left: 50px; height: 35px;">status</th>
				</tr>
			</thead>
		</table>


	</div>


	<!-- Fresh booking Div ends here -->


	<!--absFresh booking div starts here  -->

	<div id="DeliveryBoyBookedAbsFrehBookingTblDIv">


		<button onclick="restaurantBackBtn()" style="margin-left: 100px;">back</button>

		<p style="color: red; margin-left: 100px;">Delivery Fresh Booking
			Details:</p>
		<table id="tblDeliveryBoyBookingAbsFreshBooking" border="1"
			style="text-align: center; width: 80%; margin-left: 100px;"
			class="CSSTableGenerator2">
			<thead style="background-color: #00CCFF">
				<tr>
					<th style="padding-left: 50px; height: 35px;">Order Id</th>
					<th style="padding-left: 50px; height: 35px;">status</th>
				</tr>
			</thead>
		</table>


	</div>

	<!--absFresh booking div starts here  -->


	<!-- payment starts -->
	<div id="couriersAllPayment" class="tab-pane fade in active">
		<p style="color: red; margin-left: 100px;">Outstanding Amount
			Details:</p>
		<table border="1"
			style="text-align: center; width: 80%; margin-left: 100px;"
			id="tblCouriersPayment">

			<thead style="background-color: #00CCFF; height: 35px;">
				<tr>
					<th>Restaurant Name</th>
					<th>Total Couriers</th>
					<th>Total Amount</th>

				</tr>
			</thead>


		</table>

		<form name="frmTransaction" id="frmTransaction" method="post"
			action="https://secure.ebs.in/pg/ma/payment/request">
			<input id="account_id" type="hidden" name="account_id"> <input
				id="address" type="hidden" name="address"> <input
				id="amount" type="hidden" name="amount"> <input id="channel"
				type="hidden" name="channel"> <input id="city" type="hidden"
				name="city"> <input id="country" type="hidden"
				name="country"> <input id="currency" type="hidden"
				name="currency"> <input id="description" type="hidden"
				name="description"> <input id="email" type="hidden"
				name="email"> <input id="mode" type="hidden" name="mode">
			<input id="name" type="hidden" name="name"> <input
				id="page_id" type="hidden" name="page_id"> <input id="phone"
				type="hidden" name="phone"> <input id="postal_code"
				type="hidden" name="postal_code"> <input id="reference_no"
				type="hidden" name="reference_no"> <input id="return_url"
				type="hidden" name="return_url"> <input id="state"
				type="hidden" name="state"> <input id="secure_hash"
				type="hidden" name="secure_hash">

		</form>
		<input id="btnPayNow" class="btn btn-success" type="submit"
			value="Pay Now" id="textModal">
		<h4 id="paymentTransactionStatus" style="display: none;"></h4>
		<h4 id="paymentTransactionNumber" style="display: none;"></h4>
		<h4 id="trackingNumber" style="display: none;"></h4>




	</div>






	<!-- payment ends -->

	<!--Hotel delivery booking Div starts here  -->


	<div id="restaurantDeliveryBoyBooking" align="center">

		<div id="hotelBookingInformaations" align="right">

			<a href="#" id="hotelHistory">History</a> <a href="#"
				id="hotelFreshBookings">Fresh bookings</a> <a href="#"
				id="hotelCouriersPayment">Payment</a> <a href="#" id="logout">logout</a>

		</div>

		<div
			style="width: 90%; height: 400px; background-color: #ff9900; margin-top: 50px;"
			align="center">
			<p id="restaurantLogedInName"
				style="font-size: 100px; padding-top: 100px;"></p>
			<!--  
  <input type="checkBox" id="codPayment">COD Payment
  <input type="checkBox" id="onlinePayment">Online Payment
   -->
			<button class="btn btn-success" id="btnSubmitCustomerBooking"
				style="margin-top: 100px;">Book a Delivery Boy</button>
			<br>

		</div>


		<!-- Hotel delivery booking Div Ends here  -->




		<!-- Admin table starts here -->
		<div id="tblSdcsAdmin"
			style="padding-left: 10px; padding-right: 10px;">


			<div id="deliveryBoyAdminBookingList">
				<label style="color: black; margin-top: 50px;">Date<font
					style="color: red;">*</font>: <input type="date"
					id="deliveryBoyBookingInput" placeholder="date">
					<button class="btn btn-info"
						onclick="deliveryBoyDateBookingClicked()"
						id="btnAdmindeliveryBoyBookingInputSubmit" type="submit"
						style="margin-left: 10px; margin-top: -10px;">Submit</button></label>
			</div>


				<ul class="nav nav-tabs">
					<li class="active"><a data-toggle="tab" href="#tblAllCouriers"
						onclick="couriersClicked()">Booked Couriers</a></li>
						
						 <li><a data-toggle="tab" href="#restaurantRegistration"
						onclick="btnRestaurantRegistrationClickced()">Hotels Registration</a></li>
						
						<li><a data-toggle="tab" href="#delBoyRegistration"
						onclick="btndelBoyRegistrationClicked()">Delivery Boy Registration</a></li>
						
						<li><a data-toggle="tab" href="#delBoyMap"
						onclick="btnDelBoyTRackingClicked()">Delivery Boy's Location</a></li>
						
						<li><a data-toggle="tab" href="#adminCourierBooking"
						onclick="btnAdminCourierBooking()">Courier Booking</a></li>
						
						<li><a data-toggle="tab" href="#allCourier"
						onclick="btnAdminAllCouriersList()">Booked Couriers</a></li>
						
						<li><a data-toggle="tab" href="#allRestaurants"
						onclick="btnAdminAllRestaurantsList()">Restaurants List</a></li>
				</ul> 

			
			</div>




			<a id="adminLogout" style="float: right;">Logout</a>
			<div id="restaurantRegistration" class="tab-pane fade in active"
				align="center">
				<h4 style="color: navy">Hotel Registration</h4>
				<br> <input type="text" placeholder="Restaurant Name"
					style="height: 35px;" data-toggle="tooltip" data-placement="top"
					title="Enter Restaurant Name" id="restaurantRegistrationName" /><br>
				<textarea placeholder="Address" id="restaurantRegistrationAddress"
					data-toggle="tooltip" data-placement="top"
					title="Enter Restaurant Address"></textarea>
				<br> <input type="number" style="height: 35px;"
					placeholder="Pincode" id="restaurantRegistrationPincode"
					data-toggle="tooltip" data-placement="top"
					title="Enter Restaurant Pincode" /><br> <input type="number"
					style="height: 35px;" placeholder="Contact Number"
					id="restaurantRegistrationContactNumber" data-toggle="tooltip"
					data-placement="top" title="Enter Restaurant Contact Number" /><br>
				<input type="email" style="height: 35px;" placeholder="Email Id"
					id="restaurantRegistrationEmailId" data-toggle="tooltip"
					data-placement="top" title="Enter Restaurant Email Id" /><br>
				<input type="tel" style="height: 35px;" placeholder="Enter latitude"
					id="restaurantRegistrationlatitude" data-toggle="tooltip"
					data-placement="top" title="Enter Latitude" /><br> <input
					type="tel" style="height: 35px;" placeholder="Enter longitude"
					id="restaurantRegistrationlongitude" data-toggle="tooltip"
					data-placement="top" title="Enter longitude" /><br> <input
					type="number" style="height: 35px;"
					placeholder="Enter Default Amount"
					id="restaurantRegistrationAmount" data-toggle="tooltip"
					data-placement="top" title="Enter Default Amount" /><br> <input
					type="number" style="height: 35px;"
					placeholder="Enter Amount for Extra Km"
					id="restaurantRegistrationExtraAmount" data-toggle="tooltip"
					data-placement="top" title="Enter Amount For Extra Km" /><br>
				<input type="password" style="height: 35px;"
					placeholder="Enter Password" id="restaurantRegistrationPassword"
					data-toggle="tooltip" data-placement="top" title="Enter Password" /><br>
				<input type="password" style="height: 35px;"
					placeholder="Confirm Password"
					id="restaurantRegistrationConfirmPassword" data-toggle="tooltip"
					data-placement="top" title="Confirm Password" /><br>
				<button id="btnHotelRegistration" class="btn btn-info"
					onclick="btnHotelRegistrationClicked();">Submit</button>


			</div>


			<div id="delBoyRegistration" align="center">

				<h4 style="color: navy; margin-left: 40px;">Delivery Boy
					Registration</h4>
				<br> <input type="text" placeholder="Delivery Boy Name"
					style="height: 35px;" data-toggle="tooltip" data-placement="top"
					title="Enter Name" id="delBOyRegistrationName" /><br>
				<textarea placeholder="Address" id="delBOyRegistrationAddress"
					data-toggle="tooltip" data-placement="top" title="Enter Address"></textarea>
				<br> <input type="number" style="height: 35px;"
					placeholder="Pincode" id="delBoyRegistrationPincode"
					data-toggle="tooltip" data-placement="top" title="Enter Pincode" /><br>
				<input type="number" style="height: 35px;"
					placeholder="Contact Number" id="delBoyRegistrationContactNumber"
					data-toggle="tooltip" data-placement="top"
					title="Enter Contact Number" /><br> <input type="email"
					style="height: 35px;" placeholder="Email Id"
					id="delBoyRegistrationEmailId" data-toggle="tooltip"
					data-placement="top" title="Enter Email Id" /><br> <input
					type="tel" style="height: 35px;" placeholder="DL number"
					id="restaurantRegistrationDlNo" data-toggle="tooltip"
					data-placement="top" title="Enter Driving licence number" /><br>
				<input type="tel" style="height: 35px;" placeholder="Enter latitude"
					id="delBoyRegistrationlatitude" data-toggle="tooltip"
					data-placement="top" title="Enter Latitude" /><br> <input
					type="tel" style="height: 35px;" placeholder="Enter longitude"
					id="delBoyRegistrationlongitude" data-toggle="tooltip"
					data-placement="top" title="Enter longitude" /><br> <input
					type="tel" style="height: 35px;" placeholder="Enter Available Time"
					id="delBoyRegistrationAvailableTime" data-toggle="tooltip"
					data-placement="top" title="Enter Available Time1" /><br> <input
					type="password" style="height: 35px;" placeholder="Enter Password"
					id="delBoyRegistrationPassword" data-toggle="tooltip"
					data-placement="top" title="Enter Password" /><br> <input
					type="password" style="height: 35px;"
					placeholder="Confirm Password"
					id="delBoyRegistrationConfirmPassword" data-toggle="tooltip"
					data-placement="top" title="Confirm Password" /><br>
				<button id="btndeliveryBoyRegistration" class="btn btn-info">Submit</button>
				<p style="color: red;">
					Note:<span style="color: blue;">All the fields are
						mandatory.</span>
				</p>

			</div>

			<div id="delBoyMap" class="tab-pane fade" align="center">

				<div id="googleMap" style="width: 100%; height: 380px;"></div>

			</div>




			<div id="adminCourierBooking" align=center>

				<h3 style="color: navy">Courier Booking</h3>

				<input type="text" placeholder="Customer Name" style="height: 35px;"
					data-toggle="tooltip" data-placement="top"
					title="Enter Customer Name" id="adminCourierBookingName" /><br>
				<textarea placeholder="Customer Address" data-toggle="tooltip"
					data-placement="top" title="Enter Customer Address"
					id="adminCourierBookingAddres"></textarea>
				<br> <input type="tel" placeholder="Customer Phone"
					style="height: 35px;" data-toggle="tooltip" data-placement="top"
					title="Enter Customer Phone" id="adminCourierBookingPhone" /><br>
				<input type="number" min="0" placeholder="Amount"
					style="height: 35px;" data-toggle="tooltip" data-placement="top"
					title="Enter Courier Cost" id="adminCourierBookingAmount" /><br>
				<input type="number" placeholder="Customer Latitude"
					style="height: 35px;" data-toggle="tooltip" data-placement="top"
					title="Enter Customer Latitude" id="adminCourierBookingLatitude" /><br>
				<input type="number" placeholder="Customer Longitude"
					style="height: 35px;" data-toggle="tooltip" data-placement="top"
					title="Enter Customer Longitude" id="adminCourierBookingLongitude" /><br>
				<button class="btn btn-success" id="btnAdminCourierBookingClicked">Submit</button>




			</div>

			<div id="allCourier" class="tab-pane fade in active">
				<p style="color: red; margin-left: 100px;">All Booked Courier
					Details:</p>
				<table border="1"
					style="text-align: center; width: 80%; margin-left: 100px;"
					id="tblAllBookedCouriers">

					<thead style="background-color: #00CCFF; height: 35px;">
						<tr>
							<th>Restaurant Name</th>
							<th>Total Couriers</th>
							<th>Extra Distance Traveled</th>
							<th>Pending</th>
							<th>Cancelled</th>
							<th>Delivered</th>
							<th>Total Amount</th>

						</tr>
					</thead>


				</table>
			</div>

			<div id="allRestaurants" class="tab-pane fade" align="center">
				<p style="color: red;" align="justify">All Registered
					Restaurants Details:</p>
				<!-- <input id="adminDelBoyBooking" style="height:35px;margin-left:650px;" placeholder="Restaurant Id">
			<button class="btn btn-success" id="btndelBookClicked">BOOK</button><br>
			 -->
				<table border="1" style="min-width: 60%;"
					id="tblAllRegisteredRestaurants">

					<thead style="background-color: #00CCFF; height: 35px;">
						<tr>

							<th style="height: 35px; text-align: center;">Restaurant Id</th>
							<th style="height: 35px; text-align: center;">Name</th>
							<th style="height: 35px; text-align: center;">Address</th>
							<th style="height: 35px; text-align: center;">Contact Number</th>
							<th style="height: 35px; text-align: center;">Latitude</th>
							<th style="height: 35px; text-align: center;">Longitude</th>
						</tr>
					</thead>


				</table>
			</div>

			<!-- <div class="CSSTableGenerator" >
                <table >
                    <tr>
                        <td>
                            Title 1
                        </td>
                        <td >
                            Title 2
                        </td>
                        <td>
                            Title 3
                        </td>
                    </tr>
                    <tr>
                        <td >
                            Row 1
                        </td>
                        <td>
                            Row 1
                        </td>
                        <td>
                            Row 1
                        </td>
                    </tr>
                    <tr>
                        <td >
                            Row 2
                        </td>
                        <td>
                            Row 2
                        </td>
                        <td>
                            Row 2
                        </td>
                    </tr>
                    <tr>
                        <td >
                            Row 2
                        </td>
                        <td>
                            Row 2
                        </td>
                        <td>
                            Row 2
                        </td>
                    </tr>
                    <tr>
                        <td >
                            Row 3
                        </td>
                        <td>
                            Row 3
                        </td>
                        <td>
                            Row 3
                        </td>
                    </tr>
                </table>
            </div>
 -->




		</div>




		<!-- Admin table ends here -->





		<div id="succesBookingMsgDiv"
			style="height: 200px; width: 80%; background-color: #ff9900; border: 1px solid black; margin-left: 120px;">

			<p id="succesBookingMsg"
				style="color: navy; font-size: 40px; margin-top: 100px; margin-left: 100px;"></p>
			<button onclick="btnBackDelBoyBooking();"
				style="height: 40px; width: 100px; margin-left: 500px;">Back</button>

		</div>

		<!--This div is to show the failure msg of deliveryboy booking  -->

		<div id="failureMsgDeliveryBoyHistory">

			<p id="failureMsgDelBoy"></p>

		</div>


		<!--Hotel delivery booking Div Ends here  -->

		<div id="restaurantLoged123Name">
			<p>You have loged in as :</p>
			<p id="restaurantLogedInName"></p>

		</div>

		<!-- About Us container starts here -->
		<div id="aboutUsDivContainer"
			style="overflow: auto; max-height: 300px; padding-left: 10px;">

			<p style="font-size: 15px; color: #00CCFF">About Us:</p>
			<table>
				<tbody>
					<tr>
						<td style="color: #FF5A00; font-size: 14px;">Vision:
						<td>
					</tr>
					<tr>
						<td style="font-size: 13px; color: #000000;">SDCS has a dream
							to become India's most preferred 24/7 Single day delivery service
							with comprehensive global reach.
						<td>
					</tr>
					<tr>
						<td style="font-size: 13px; color: #000000;">To stay well
							ahead of the others and be the Courier with a vision. Opt for
							value addition in all aspects of services.
						<td>
					</tr>

					<tr>
						<td style="color: #FF5A00; font-size: 14px;">Mission:
						<td>
					</tr>

					<tr>
						<td style="font-size: 13px; color: #000000;">SDCS is working
							hard to come out as the leading 24/7 Single day Express &amp;
							Cargo Distribution Company in India by 2015-16.
						<td>
					</tr>
					<tr>
						<td style="font-size: 13px; color: #000000;">To achieve this
							mission, the company has adopted and taken the following key
							initiatives.
						<td>
					</tr>

					<tr>
						<td style="color: #FF5A00; font-size: 14px;">Quality Policy:


						
						<td>
					</tr>

					<tr>
						<td style="font-size: 13px; color: #000000;">We at The SDCS
							are working hard and are committed to satisfy the expectations of
							our customers through timely and safe delivery
						<td>
					</tr>
					<tr>
						<td style="font-size: 13px; color: #000000;">of their
							consignments.
						<td>
					</tr>

					<tr>
						<td style="font-size: 13px; color: #000000;">We achieve this
							quality through inter communication, team work and continuous
							refinement of our services.
						<td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- About Us container ends here -->

		<!-- Modal to show terms and conditions-->
		<div id="windowTermAndConditions">


			<!-- Modal content-->
			<h4 class="modal-title">Terms &amp; Conditions</h4>


			<table style="text-align: left;">
				<tr>
					<td style="color: #FF5A00; font-size: 14px;">Restricted &amp;
						Banned Items
					<td>
				<tr>
				<tr>
					<td style="font-size: 13px; padding-left: 5px;">
						<ul style="text-align: left;">
							<li>Liquid, semi-liquid and gases</li>
							<li>Currency</li>
							<li>Indian Postal Articles and all items that infringe the
								Indian Postal Act of 1898</li>
							<li>Precious and semi-precious stones, gems, jewellery and
								equivalent items</li>
							<li>Perishables, Radioactive or magnetic material</li>
							<li>Negotiable Instruments (Bearer Form)</li>
							<li>Pornographic material, Sodexho pass</li>
							<li>Firearms, explosives and military equipment, Flammable
								Items</li>
							<li>Machinery parts containing oil, grease, fuel or
								batteries</li>
							<li>All restricted items as per guidelines of IATA</li>
						</ul>
					<td>
				<tr>
				<tr>
					<td style="color: #FF5A00; font-size: 14px;">Dangerous Goods
					<td>
				<tr>
				<tr>
					<td style="font-size: 14px; font-style: bold;">As laid out by
						IATA in the Dangerous Goods Regulations the following goods are
						categorised as dangerous:
					<td>
				<tr>
				<tr>
					<td style="font-size: 13px; padding-left: 5px;">
						<ul>
							<li>Class 1: Explosives</li>
							<li>Class 2: Gases</li>
							<li>Class 3: Flammable Liquids</li>
							<li>Class 4: Flammable Solids</li>
							<li>Class 5: Oxidizers and Organic Peroxides</li>
							<li>Class 6: Toxic &amp; Infectious Substances</li>
							<li>Class 7: Radioactive Material</li>
							<li>Class 8: Corrosives</li>
							<li>Class 9: Empty Cylinders</li>
							<li>Class 10: Miscellaneous e.g. Magnets - a danger to
								airplane equipment</li>
							<li>Class 11: Lithium Batteries</li>
						</ul>
					<td>
				<tr>
			</table>
		</div>


		<!-- Company polies div starts here -->
		<div id="allCompanyPolicies">
			<h4 style="color: orange">Disclaimer Policy</h4>

			<p>The information contained in this website is for general
				information purposes only. The information is provided by Translink
				and while we endeavour to keep the information up to date and
				correct, we make no representations or warranties of any kind,
				express or implied, about the completeness, accuracy, reliability,
				suitability or availability with respect to the website or the
				information, products, services, or related graphics contained on
				the website for any purpose. Any reliance you place on such
				information is therefore strictly at your own risk.</p>

			<p>In no event will we be liable for any loss or damage including
				without limitation, indirect or consequential loss or damage, or any
				loss or damage whatsoever arising from loss of data or profits arise
				out of, or in connection with, the use of this website.</p>

			<p>Through this website you are able to link to other websites
				which are not under the control of Translink. We have no control
				over the nature, content and availability of those sites. The
				inclusion of any links does not necessarily imply a recommendation
				or endorse the views expressed within them.</p>

			<p>Every effort is made to keep the website up and running
				smoothly. However, Translink takes no responsibility for, and will
				not be liable for, the website being temporarily unavailable due to
				technical issues beyond our control.</p>
			<br>

			<h4 style="color: orange">Cancellation Policy</h4>
			<p>Translink Express believes in helping its customers as far as
				possible, and has therefore a liberal cancellation policy.</p>

			<ul>
				<li>Cancellation request will not be entertained if the orders
					have been processed and payment made.</li>
				<li>There is no cancellation of orders placed under the Same
					Day Delivery category.</li>
				<li>No cancellations are entertained for those products that
					the Translink team has provided under special offers and come on
					special occasions like Pongal, Diwali, Valentine’s Day etc. These
					are limited occasion offers and therefore cancellations are not
					possible.</li>
				<li>In case of receipt of damaged or defective non durable
					items like mobile phones, tablets etc, please report the same to
					our Customer Service team. The request will, however, be
					entertained once Translink has checked and determined the same at
					our own end. This should be reported within 24 hours of receipt of
					the products.</li>
				<li>In case you feel that the product received is not as shown
					on the site or as per your expectations, you must bring it to the
					notice of our customer Service within 24 hours of receiving the
					product. The Customer Service Team after looking into your
					complaint will take an appropriate decision.</li>
				<li>In case of complaints regarding products with warranty,
					please refer the issue to Translink Express.</li>

			</ul>

			<h4 style="color: orange">Shipping and Delivery Policy</h4>

			<p>Translink has clear guidelines for shipping all your orders to
				where you are. While we deliver to almost all parts of the country,
				sometimes we are limited by the delivery limitations of our courier
				partners. To know which all cities and towns we deliver to please
				contact our Helpline Number.</p>

			<p>But no worries, if we don’t ship to your city, speak to your
				friends/relatives living in any of the listed cities nearest to you
				and get your product delivered there. You can pick up your latest
				TRANSLINK from them once it is delivered.</p>

			<p>We do not process orders on National and Public Holidays. We
				know that getting the product that you purchased as quickly as
				possible is important – that'��s why we are committed to
				delivering the product to you accurately, in good condition and
				within the promised time.</p>


		</div>

		<div id="contactUsInfo"
			style="overflow: auto; max-height: 300px; padding-left: 10px;">
			<p style="font-size: 15px; color: #00CCFF">Our Address:</p>
			<div style="padding-left: 10px; color: #000000;">
				#216, 14th Block, <br> 2nd Stage, Nagarbhavi, <br>
				Bangalore-560 072, <br> Contact Number: 8971936059,<br>080-23280758<br>sdcs.info24@gmail.com
			</div>
		</div>

		<!-- Company polies div ends  here -->


		<!--Flow chart div starts here -->
		<div id="flowChartDiv">
			<h4>Process Flow Diagram</h4>

			<img src=img/flow_chart.png alt="Process Flow" />

			<!--Flow chart div ends here  -->
		</div>


		<p id="bottomOptionsP" style="position: fixed; bottom: 0; right: 0;">
			policies:<a id="privacyPolicy">Privacy Policy</a> | <a
				id="disclaimerPolicy">Disclaimer Policy</a> | <a
				id="cancellationPolicy">Cancellation and Refund Policy</a> | <a
				id="shippingPolicy">Shipping and Delivery Policy</a> | <a href="#"
				id="btnSiteMap">Site Map</a> | <a href="#" id="btnConditions">Terms
				and Conditions</a>
		</p>

		<div id="privacypolicyDiv">

			<h4>Privacy Policy</h4>
			<p>We respect your privacy, so you can rest assured we will never
				share or disclose your personal information. At SDCS, we are
				committed to ensuring that privacy is protected for users of our
				websites in relation to personal information.</p>

			<p>The information we collect is used to market our products and
				improve the services we offer via our website content, and to
				contact you with updates to such services and products.</p>

			<p>This privacy policy applies to SDCS, Ireland which may hold
				personal information on their website. SDCS reserve the right to
				change its privacy policy at any time with or without prior notice.</p>

			<p>By viewing and using the information provided on our websites,
				in relation to SDCS, you will be deemed to agree to this privacy
				policy.</p>

			<p>SDCS understands that privacy is im portant to you, and is
				committed to complying with the relevant privacy legislation.</p>

			<h4>What personal information does SDCS collect?</h4>

			<p>If you subscribe to our website, the personal in formation we
				will collect from you generally includes your name, business and
				email address and contact numbers. WE do not collect personal
				information that we do not need. Our website does not use persistent
				cookies.</p>

			<h4>How does SDCS use personal information?</h4>
			<p>We need to collect information so that we can provide our
				products and services and conduct our business. SDCS does not sell,
				rent or trade your personal information to third parties except if
				required by law or permitted under the relevant privacy legislation.</p>

			<h4>Security</h4>
			<p>SDCS takes reasonable steps to ensure the security of your
				personal information. We frequently update our anti-virus software
				to protect our systems from computers viruses. Further, all SDCS
				employees are required, as a condition of employment, to treat
				personal information held by SDCS as confidential. However, you
				should be aware that the internet is not a secure environment. We
				cannot protect personal information before it reaches us.</p>

			<h4>Access to personal information</h4>

			<p>Under the relevant privacy legislation, you have the right to
				ask us to update or correct your personal information when it is
				inaccurate, incomplete or out of date. If your personal details
				change, or you belive the information we hold about you is
				incorrect, please contact us so that we can update our records.</p>

		</div>




		<div id="disclaimerPolicyDiv">

			<h4>Disclaimer Policy</h4>

			<p>The information contained in this website is for general
				information purposes only. The information is provided by Translink
				and while we endeavour to keep the information up to date and
				correct, we make no representations or warranties of any kind,
				express or implied, about the completeness, accuracy, reliability,
				suitability or availability with respect to the website or the
				information, products, services, or related graphics contained on
				the website for any purpose. Any reliance you place on such
				information is therefore strictly at your own risk.</p>

			<p>In no event will we be liable for any loss or damage including
				without limitation, indirect or consequential loss or damage, or any
				loss or damage whatsoever arising from loss of data or profits arise
				out of, or in connection with, the use of this website.</p>

			<p>Through this website you are able to link to other websites
				which are not under the control of Translink. We have no control
				over the nature, content and availability of those sites. The
				inclusion of any links does not necessarily imply a recommendation
				or endorse the views expressed within them.</p>

			<p>Every effort is made to keep the website up and running
				smoothly. However, Translink takes no responsibility for, and will
				not be liable for, the website being temporarily unavailable due to
				technical issues beyond our control.</p>
			<br>


		</div>

		<div id="cancellationPolicyDiv">

			<h4>Cancellation Policy</h4>
			<p>Translink Express believes in helping its customers as far as
				possible, and has therefore a liberal cancellation policy.</p>

			<ul>
				<li>Cancellation request will not be entertained if the orders
					have been processed and payment made.</li>
				<li>There is no cancellation of orders placed under the Same
					Day Delivery category.</li>
				<li>No cancellations are entertained for those products that
					the Translink team has provided under special offers and come on
					special occasions like Pongal, Diwali, Valentine’s Day etc. These
					are limited occasion offers and therefore cancellations are not
					possible.</li>
				<li>In case of receipt of damaged or defective non durable
					items like mobile phones, tablets etc, please report the same to
					our Customer Service team. The request will, however, be
					entertained once Translink has checked and determined the same at
					our own end. This should be reported within 24 hours of receipt of
					the products.</li>
				<li>In case you feel that the product received is not as shown
					on the site or as per your expectations, you must bring it to the
					notice of our customer Service within 24 hours of receiving the
					product. The Customer Service Team after looking into your
					complaint will take an appropriate decision.</li>
				<li>In case of complaints regarding products with warranty,
					please refer the issue to Translink Express.</li>

			</ul>

		</div>

		<div id="shippingPolicyDiv">

			<h4>Shipping and Delivery Policy</h4>

			<p>Translink has clear guidelines for shipping all your orders to
				where you are. While we deliver to almost all parts of the country,
				sometimes we are limited by the delivery limitations of our courier
				partners. To know which all cities and towns we deliver to please
				contact our Helpline Number.</p>

			<p>But no worries, if we don’t ship to your city, speak to your
				friends/relatives living in any of the listed cities nearest to you
				and get your product delivered there. You can pick up your latest
				TRANSLINK from them once it is delivered.</p>

			<p>We do not process orders on National and Public Holidays. We
				know that getting the product that you purchased as quickly as
				possible is important – that’s why we are committed to
				delivering the product to you accurately, in good condition and
				within the promised time.</p>


		</div>


		<div id="ourServicesDiv">

			<h4>Our Services</h4>
			<br>

			<h4>24*7 SDCS Courier Service</h4>

			<p>In 24*7 SDCS courier service Customers can book the couriers
				from one place to other place within bangalore. In 24*7 SDCS courier
				service we have two options they are:</p>

			<ul>

				<li>4 Hour Couriers</li>
				<li>24 Hour Couriers</li>

			</ul>

			<p>In 4 hour courier service the consignment will be delivered
				within 4 hours from booking.In 24 hours courier the consignment will
				be delivered in one day.</p>

			<h4>Restaurant delivery boy booking</h4>

			<p>In this service restaurants will book the delivery boys for
				food pick up and delivery t the end customer.</p>


		</div>



		<!--SDCS courierbooking div starts here  -->

		<div id="courierBookingDiv">

			<div id="topOptionContainerDiv" align="right">

				<a id="customerLoginLink">Login</a> | <a
					id="customerRegistrationLink">Register</a>
			</div>



		</div>
		<!--SDCS courierbooking div ends here  -->

		<!--Normal courier booking registration starts hers  -->

		<div id="customerRegistration" align="center">
			<h4 style="color: navy">Customer Registration</h4>
			<br> <input type="text" placeholder="Name" style="height: 35px;"
				data-toggle="tooltip" data-placement="top" title="Enter Name"
				id="customerRegistrationName" /><br>
			<textarea placeholder="Address" id="customerRegistrationAddress"
				data-toggle="tooltip" data-placement="top" title="Enter Address"></textarea>
			<br> <input type="number" style="height: 35px;"
				placeholder="Pincode" id="customerRegistrationPincode"
				data-toggle="tooltip" data-placement="top" title="Enter Pincode" /><br>
			<input type="number" style="height: 35px;"
				placeholder="Contact Number" id="customerRegistrationContactNumber"
				data-toggle="tooltip" data-placement="top"
				title="Enter Contact Number" /><br> <input type="email"
				style="height: 35px;" placeholder="Email Id"
				id="customerRegistrationEmailId" data-toggle="tooltip"
				data-placement="top" title="Enter Email Id" /><br> <input
				type="password" style="height: 35px;" placeholder="Enter Password"
				id="customerRegistrationPassword" data-toggle="tooltip"
				data-placement="top" title="Enter Password" /><br> <input
				type="password" style="height: 35px;" placeholder="Confirm Password"
				id="customerRegistrationConfirmPassword" data-toggle="tooltip"
				data-placement="top" title="Confirm Password" /><br>
			<button id="btnCustomerRegistration" class="btn btn-info">Submit</button>
		</div>
		<!--Normal courier booking registration ends hers  -->

		<!--Normal Courier booking Login starts here  -->
		<div id="customerLogin" align="center">
			<h4 style="color: navy">Customer Login</h4>
			<br> <input type="text" placeholder="Name" style="height: 35px;"
				data-toggle="tooltip" data-placement="top" title="Enter Name"
				id="customerLoginName" /><br> <input type="password"
				style="height: 35px;" placeholder="Enter Password"
				id="customerLoginPassword" data-toggle="tooltip"
				data-placement="top" title="Enter Password" /><br>
			<button id="btnCustomerLogin" class="btn btn-info">Submit</button>
		</div>
		<!--Normal Courier booking Login starts here  -->


		<!--Normal booking div starts here  -->

		<div id="customerbookingformContainerDiv" align="center">
			<h3 style="color: navy;">Courier Booking</h3>

			<input id="custbookinSenderName" type="text"
				placeholder="Sender Name" style="height: 35px;"><br>
			<textarea id="customerbookingAdress" placeholder="Sender Adress"
				style="height: 60px;"></textarea>
			<br> <input id="customerBookingPincode" type="number"
				placeholder="pincode" style="height: 35px;"><br> <input
				id="customerbookingcontno" type="number"
				placeholder="Sender Contact No" style="height: 35px;"><br>
			<input id="customerBookingEmail" type="email"
				placeholder="Sender Email id" Style="height: 35px;"><br>
			<input id="custbookingReceiverName" type="number"
				placeholder="Receiver Name" style="height: 35px;"><br>
			<textarea id="custbookingAdrs" placeholder="Receiver Adress"
				style="height: 60px;"></textarea>
			<br> <input id="customerBookingReceiverNo" type="number"
				placeholder="Receiver contact number" style="height: 35px;"><br>
			<input id="custbookinContent" type="text" placeholder="Content"
				style="height: 35px;"><br> <input
				id="custbookingWeight" type="number" placeholder="Weight"
				style="height: 35px;"><br>

			<button class="btn btn-success" id="btncustBooking">Submit</button>

		</div>

		<!--Normal booking div starts here  -->
</body>

</html>
