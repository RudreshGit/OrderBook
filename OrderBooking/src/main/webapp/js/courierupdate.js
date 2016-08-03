$(document).ready(function(){
	$("#courierUpdateDetailsDiv").hide();
	$("#btncourierupdatesubmit").click(function(){
		servercalltogetdetails();
	});
	
	$("#btncourierupdate").click(function(){
		servercalltoupdatecourier();
	});
});

function servercalltogetdetails(){
	var bookingid=$("#bookingidupdates").val().trim();
	if(bookingid==null || bookingid.length==0){
		alert("Please enter Booking Id");
	}else{
		localStorage.setItem("detailsID",bookingid);	
				
		$("#bookingidupdate").val("");
		$("#contentupdates").val("");
		$("#sendernameupdate").val("");
		$("#sendercontactupdate").val("");
		$("#senderaddressupdate").val("");
		$("#paytypeupdate").val("");
		$("#codamountupdate").val("");
		$("#latupdate").val("");
		$("#longupdate").val("");
		$("#recievernameupdate").val("");
		$("#recieveraddressupdate").val("");
		$("#recievercontactupdate").val("");
		$("#deliveryboyidupdate").val("");
		$("#statusupdate").val("");		
		$("#distanceupdate").val("");
		$("#paystatusupdate").val("");
		$("#otpupdate").val("");
		$("#couriertypaupdates").val("");
		$("#typeupdatess").val("");
		$("#deliveryboypayupdates").val("");		
		$("#extradistanceupdate").val("");
		$("#totalamountupdate").val("");
		$("#weightupdate").val("");
		$("#scheduletimeupdate").val("");
		$("#restaurantpaymentupdate").val("");
		$("#paymenttypedeliveryboyupdates").val("");		
		$("#paymenttimefordboyupdate").val("");
		$("#deliveryboyamountupdate").val("");
		$("#courierUpdateDetailsDiv").hide();
		
		$("#editcusname").val("");
		$("#editcusphone").val("");
		$("#editcalldetails").val("");
		$("#editdecription").val("");
				
		$("#btncourierupdatesubmit").text("Loading..");
		$.ajax({
			url:"courierupdatesdetails",
			type:"POST",
			data:{
				"bookingid":bookingid
			},
			success:function(responseData,statusUpdate){
				$("#btncourierupdatesubmit").text("submit");
				handleallsettingdata(responseData);
			},
			error:function(responseData){
				$("#btncourierupdatesubmit").text("submit");
				alert("Error contacting Backend server");
			}
		});		
		
	}
}

function handleallsettingdata(responseData){
	var strinngsd=jQuery.parseJSON(responseData);
	if(strinngsd.result){
		$("#courierUpdateDetailsDiv").show();
		var responsearray=strinngsd.bookingdetails;
		if(responsearray !=undefined && responsearray != null){
			$.each(responsearray , function(index,value){
				
				$("#couriercont").val(value["content"]);
				$("#senderNames").val(value["restaurant_name"]);
				$("#senderphn").val(value["restaurant_contact"]);
				$("#senderadrs").val(value["restaurant_address"]);
			/*	$("#paytypeupdate").val(value["pay_type"]);
			*/	$("#coda").val(value["codAmount"]);
				$("#senderlat").val(value["lat"]);
				$("#sendrlong").val(value["lon"]);
				$("#Recvrname").val(value["reciever_name"]);
				$("#Recvradres").val(value["reciever_address"]);
				$("#Recvrphn").val(value["reciever_contact"]);
				$("#Delbyid").val(value["delivery_boy_id"]);
				$("#bookingdstats").val(value["status"]);		
				$("#bddistnce").val(value["distance"]);
				$("#Paystatss").val(value["pay_status"]);
				$("#crierOtp").val(value["otp"]);
				$("#couriertyp").val(value["courier_type"]);
				$("#crierUpdateType").val(value["type"]);
				$("#Delbypaysts").val(value["delivery_boy_pay"]);	
				$("#totlAmnt").val(value["total_amount"]);
				$("#weightOfCourier").val(value["weight"]);
				$("#scheduldtime").val(value["schedula_time"]);
				$("#RestaurentPaymentStatus").val(value["restaurant_payment"]);
				$("#paytp").val(value["payment_type"]);		
				$("#timeOfPay").val(value["payment_time"]);
				$("#delamntf").val(value["deliveryBoyamount"]);
				$("#vehTypeAdmins").val(value["vehicle_neededs"]);
				$("#delboyneededAdmins").val(value["deliveryboys_neededs"]);
				var status=""+value["cus_namea"];
				if(status=="NotDone"){
					document.getElementById('custmerfeedback').style.background="#FF0000";
				}else{
					document.getElementById('custmerfeedback').style.background="#FFFFFF";
				}
				$("#editcusname").val(status);
				$("#editcusphone").val(value["cus_phonea"]);
				$("#editcalldetails").val(value["detaisl_cusa"]);
				$("#editdecription").val(value["description_cus_calla"]);
							
				
				localStorage.setItem("sName",value["restaurant_name"]);
				localStorage.setItem("sNum",value["restaurant_contact"]);
				localStorage.setItem("rNum",value["reciever_contact"]);
				
			
			});
		}else{
			alert("No courier found");
		}
	}else{
		alert("No courier found");
	}
	
}


function servercalltoupdatecourier(){
	var bookingids=$("#bookingidupdates").val().trim();
	var contents=$("#contentupdates").val().trim();
	var sendernames=$("#sendernameupdate").val().trim();
	var sendercontacts=$("#sendercontactupdate").val().trim();
	var senderaddresss=$("#senderaddressupdate").val().trim();
	var paytypes=$("#paytypeupdate").val().trim();
	var codamounts=$("#codamountupdate").val().trim();
	var lats=$("#latupdate").val().trim();
	var longs=$("#longupdate").val().trim();
	var recievernames=$("#recievernameupdate").val().trim();
	var recieveraddresss=$("#recieveraddressupdate").val().trim();
	var recievercontacts=$("#recievercontactupdate").val().trim();
	var deliveryboyids=$("#deliveryboyidupdate").val().trim();
	var statuss=$("#statusupdate").val().trim();
	var distances=$("#distanceupdate").val().trim();
	var paystatuss=$("#paystatusupdate").val().trim();
	var otps=$("#otpupdate").val().trim();
	var couriertypes=$("#couriertypaupdates").val().trim();
	var types=$("#typeupdatess").val().trim();
	var deliveryboypaysatuss=$("#deliveryboypayupdates").val().trim();		
	var extradistances=$("#extradistanceupdate").val().trim();
	var totalamounts=$("#totalamountupdate").val().trim();
	var weights=$("#weightupdate").val().trim();
	var scheduletimes=$("#scheduletimeupdate").val().trim();
	var restaurantpays=$("#restaurantpaymentupdate").val().trim();
	var paymenttypes=$("#paymenttypedeliveryboyupdates").val().trim();		
	var paytimes=$("#paymenttimefordboyupdate").val().trim();
	var dboyamount=$("#deliveryboyamountupdate").val().trim();
	
	if(contents==null || contents.length==0 ){
		alert("Please enter content");
	}else if(sendernames==null || sendernames.length==0 ){
		alert("Please enter sender name");
	}else if(sendercontacts==null || sendercontacts.length==0 ){
		alert("Please enter sender contact");
	}else if(senderaddresss==null || senderaddresss.length==0 ){
		alert("Please enter sender address");
	}else if(paytypes==null || paytypes.length==0 ){
		alert("Please enter paytypes");
	}else if(lats==null || lats.length==0 ){
		alert("Please enter lattittude");
	}else if(longs==null || longs.length==0 ){
		alert("Please enter longittude");
	}else if(recievernames==null || recievernames.length==0 ){
		alert("Please enter reciever name");
	}else if(recieveraddresss==null || recieveraddresss.length==0 ){
		alert("Please enter reciever address");
	}else if(recievercontacts==null || recievercontacts.length==0 ){
		alert("Please enter reciever number");
	}else if(deliveryboyids==null || deliveryboyids.length==0 ){
		alert("Please enter delivery boy phone number");
	}else if(statuss==null || statuss.length==0 ){
		alert("Please enter status");
	}else if(distances==null || distances.length==0 ){
		alert("Please enter distance");
	}else if(paystatuss==null || paystatuss.length==0 ){
		alert("Please enter paystatus");
	}else if(couriertypes==null || couriertypes.length==0 ){
		alert("Please enter courier type");
	}else if(types==null || types.length==0 ){
		alert("Please enter types");
	}else if(deliveryboypaysatuss==null || deliveryboypaysatuss.length==0 ){
		alert("Please enter delivery boy status");
	}else if(extradistances==null || extradistances.length==0 ){
		alert("Please enter extra distance");
	}else if(totalamounts==null || totalamounts.length==0 ){
		alert("Please enter total amount");
	}else if(weights==null || weights.length==0 ){
		alert("Please enter wieght");
	}else if(scheduletimes==null || scheduletimes.length==0 ){
		alert("Please enter schedule time");
	}else if(restaurantpays==null || restaurantpays.length==0 ){
		alert("Please enter restaurant pay");
	}else if(paymenttypes==null || paymenttypes.length==0 ){
		alert("Please enter payment types");
	}else if(paytimes==null || paytimes.length==0 ){
		alert("Please enter pay time");
	}else if(dboyamount==null || dboyamount.length==0 ){
		alert("Please enter delivery boy amount");
	}else {
	
	$("#btncourierupdate").text("Loading...");
	
	$.ajax({
		
		url:"courierupdatesdetailsd",
		type:"GET",
		data:{	
	"bookingid":bookingids,
	"content":contents,
	"sendername":sendernames,
	"sendercontact":sendercontacts,
	"senderaddress":senderaddresss,
	"paytype":paytypes,
	"codamount":codamounts,
	"lat":lats,
	"long":longs,
	"recievername":recievernames,
	"recieveraddress":recieveraddresss,
	"recievercontact":recievercontacts,
	"deliveryboyid":deliveryboyids,
	"status":statuss,		
	"distance":distances,
	"paystatus":paystatuss,
	"otp":otps,
	"couriertype":couriertypes,
	"type":types,
	"deliveryboypaysatus":deliveryboypaysatuss,		
	"extradistance":extradistances,
	"totalamount":totalamounts,
	"weight":weights,
	"scheduletime":scheduletimes,
	"restaurantpay":restaurantpays,
	"paymenttype":paymenttypes,		
	"paytime":paytimes,
	"dboyamount":dboyamount
		},
		success:function(responseData,statusUpdate){
			$("#btncourierupdate").text("submit");
			handleallupdates(responseData);
		},
		error:function(responseData){
			$("#btncourierupdate").text("submit");
			alert("Error contacting Backend server");
		}
	});	
}
}
function handleallupdates(responseData){
	var strinngsd=jQuery.parseJSON(responseData);
	if(strinngsd.result){
		$("#courierUpdateDetailsDiv").hide();
		alert("Successfully updats");
	}else{
		alert("Not! Updated please try again may be because delivery boy number is not registered");
	}
	
	}

function makeservercalltoupdate(){
	var bookingids=$("#bookingidupdates").val().trim();
	var cusname=$("#editcusname").val().trim();
	var cusphone=$("#editcusphone").val().trim();
	var cusdetails=$("#editcalldetails").val().trim();
	var cusdecription=$("#editdecription").val().trim();
	if(cusdecription==null || cusdecription.length==0 ){
		alert("Please enter description");
	}else if(cusdecription.length<50){
		alert("Please enter Minimum 50 letters in description");
	}else{
      $("#idcusdetailsupdatebtn").text("Loading...");
	$.ajax({
		url:"cusdetailseditupdate",
		type:"POST",
		data:{	
	"bookingid":bookingids,
	"name":cusname,
	"cusphones":cusphone,
	"cusdetailsa":cusdetails,
	"cusdescriptionsa":cusdecription
		},
		success:function(responseData,statusUpdate){
			$("#idcusdetailsupdatebtn").text("Update");
			handleallupdates(responseData);
		},
		error:function(responseData){
			$("#idcusdetailsupdatebtn").text("Update");
			alert("Error contacting Backend server");
		}
	});	
	}
}
function handleallupdates(responseData){
	var strinngsd=jQuery.parseJSON(responseData);
	if(strinngsd.result){
		$("#customerfeedbackeditsection").hide();
		alert("Successfully updated");
	}else{
		alert("Not Updated please try again");
	}
	
}



//this is for cstomercare section
function ccmakeservercalltosubmit(){
	$("#ccrangeselection").hide();
	var cusname=$("#cceditcusname").val().trim();
	var cusphone=$("#cceditcusphone").val().trim();
	var cusdetails=$("#cceditcalldetails").val().trim();
	var cusdecription=$("#cceditdecription").val().trim();
	if(cusname==null || cusname.length==0){
		alert("Please enter name");
	}else if(cusphone==null || cusphone.length==0){
		alert("Please enter phone number");
	}else if(cusdetails==null || cusdetails.length==0){
		alert("Please enter details");
	}else if(cusdecription==null || cusdecription.length==0){
		alert("Please enter description");
	}else if(cusdecription.length<50){
		alert("Please enter Minimum 50 letters in description");
	
	}else{
      $("#ccidcusdetailsupdatebtn").text("Loading...");
	$.ajax({
		url:"cccusdetailseditupdate",
		type:"POST",
		data:{		
	"name":cusname,
	"cusphones":cusphone,
	"cusdetailsa":cusdetails,
	"cusdescriptionsa":cusdecription
		},
		success:function(responseData,statusUpdate){
			$("#ccidcusdetailsupdatebtn").text("Submit");
			handleallupdates(responseData);
		},
		error:function(responseData){
			$("#ccidcusdetailsupdatebtn").text("Submit");
			alert("Error contacting Backend server");
		}
	});	
	}
}
function handleallupdates(responseData){
	var strinngsd=jQuery.parseJSON(responseData);
	if(strinngsd.result){
		$("#cceditcusname").val("");
		$("#cceditcusphone").val("");
		$("#cceditcalldetails").val("");
		$("#cceditdecription").val("");
		alert("Successfully submitted");
	}else{
		alert("Not Updated please try again");
	}
	
}

//this is for exploring cc
function exportxlservercall(){
	var startdate=$("#ccstartdate").val().trim();
	var enddate=$("#ccenddate").val().trim();
	if(startdate==null || startdate.length==0 ){
		alert("Please select starting date");
	}else if(enddate==null || enddate.length==0){
		alert("Please select ending date");
	}else{	
      $("#ccexportxl").text("Loading...");
	$.ajax({
		url:"ccexport",
		type:"POST",
		data:{		
	"startdatee":startdate,
	"enddatse":enddate

		},
		success:function(responseData,statusUpdate){
			$("#ccexportxl").text("Export Now");
			cchandleallupdates(responseData);
		},
		error:function(responseData){
			$("#ccexportxl").text("Export Now");
			alert("Error contacting Backend server");
		}
	});	
	}
}
function cchandleallupdates(responseData){
	var strinngsd=jQuery.parseJSON(responseData);
	if(strinngsd.status){		
		alert("Successfully saved to D drive.");
	}else{
		alert("Not Updated please try again");
	}
	
}