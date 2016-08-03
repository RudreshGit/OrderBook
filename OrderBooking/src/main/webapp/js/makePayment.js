var tipsamount="0";
$(document).ready(function(){
	$("#btn_pay_now_direct").hide();
	$("#makePayPayNowDiv").hide();
	
	$("#btnPayNow9").click(function(){
		$("#frmTransaction9").submit();
	});
	$("#btn_pay_now_direct").click(function(){
		$("#frmTransaction9").submit();
	});
	$("#btn_pay_direct_payment").click(function(){
		var bookingId=$("#direct_make_booking_id").val().trim();
		
		
		if(bookingId == null || bookingId.length == 0 || bookingId.length<=2){
			
			alert("Please enter the booking id");
			$("#direct_make_booking_id").focus();
		}else {
			$("#btn_pay_now_direct").hide();
			if(tipsamount=="" || tipsamount==null || tipsamount.length==0  || tipsamount=="enter amount to tips"){
				tipsamount="0";
			}
			$("#btn_pay_direct_payment").text("Loading");
			$.ajax({
				
				url:"makePayment",
				type:"POST",
				data:{
					"tipsdboy":tipsamount,
					"bookingId":bookingId
				},
				success : function(responseData, textStatus){
					$("#btn_pay_direct_payment").text("Make Pyment");
					handleResponseDirectMakePayment(responseData);
				},
				error : function(responseData){
					$("#btn_pay_direct_payment").text("Make Pyament");
					alert("Error contacting back end server");
					
				}
				
			});
			
		}
	});
$("#btnmakePayAmountSubmit").click(function(){
	
	var bookingId=$("#makePayBookingId").val().trim();
	
	
	if(bookingId == null || bookingId.length == 0 || bookingId.length<=2){
		
		alert("Please enter the booking id");
		$("#makePayBookingId").focus();
	}else {
		if(tipsamount=="" || tipsamount==null || tipsamount.length==0  || tipsamount=="enter amount to tips"){
			tipsamount="0";
		}
		$("#btnPayNow9").text("Loading");
		$.ajax({
			
			url:"makePayment",
			type:"POST",
			data:{
				"tipsdboy":tipsamount,
				"bookingId":bookingId
			},
			success : function(responseData, textStatus){
				$("#btnPayNow9").text("Pay Now");
				handleMakePayResponseAdmin(responseData);
			},
			error : function(responseData){
				$("#btnPayNow9").text("Pay Now");
				alert("Error contacting back end server");
				
			}
			
		});
		
	}
	
});
	
});



function handleResponseDirectMakePayment(responseData){		
	var response = jQuery.parseJSON(responseData);	
	if(response.result){	
		$("#btn_pay_now_direct").show();
		$("#channel9").val(response.channel);
		$("#account_id9").val(response.account_id);
		$("#reference_no9").val(response.reference_no);
		$("#amount9").val(response.amount);
		$("#mode9").val(response.mode);
		$("#currency9").val(response.currency);
		$("#description9").val(response.description);
		$("#return_url9").val(response.return_url);
		$("#name9").val(response.name);
		$("#address9").val(response.address);
		$("#city9").val(response.city);
		$("#state9").val(response.state);
		$("#country9").val(response.country);
		$("#postal_code9").val(response.postal_code);
		$("#phone9").val(response.phone);
		$("#email9").val(response.email);
		$("#page_id9").val(response.page_id);
		$("#secure_hash9").val(response.secure_hash);				
		$("#amount_show").text("The amount you have to pay is  "+response.amount+". (Including tips "+tipsamount+"Rs.)");
}else{
	$("#direct_make_booking_id").focus();
	alert("Sorry could not find any couriers on that booking id");	
}
}
function myFunctiontips() {
    var person = prompt("Tips your delivery boy/services", "enter amount to tips");
    if (person != null) {
       tipsamount=person;
    }
}
function handleMakePayResponseAdmin(responseData){		
	var response = jQuery.parseJSON(responseData);	
	if(response.result){				
		$("#channel9").val(response.channel);
		$("#account_id9").val(response.account_id);
		$("#reference_no9").val(response.reference_no);
		$("#amount9").val(response.amount);
		$("#mode9").val(response.mode);
		$("#currency9").val(response.currency);
		$("#description9").val(response.description);
		$("#return_url9").val(response.return_url);
		$("#name9").val(response.name);
		$("#address9").val(response.address);
		$("#city9").val(response.city);
		$("#state9").val(response.state);
		$("#country9").val(response.country);
		$("#postal_code9").val(response.postal_code);
		$("#phone9").val(response.phone);
		$("#email9").val(response.email);
		$("#page_id9").val(response.page_id);
		$("#secure_hash9").val(response.secure_hash);				
		$("#makePayPayNowDiv").show();		
		$("#makePayAmountheader").text(response.amount+". (Including tips "+tipsamount+"Rs.)");
}else{
	$("#makePayBookingId").focus();
	alert("Sorry could not find any couriers on that booking id");	
}
}