$(document).ready(function(){
	
	$("#sdcsMoneyPayConfirmationDiv").hide();
	
	$("#sdcsMoneyAccountDetails").hide();
	
	$("#sdcsMoneybtnPayNow").click(function(){
		
		 localStorage.setItem("customer_userid","0");
		
		$("#frmTransaction").submit();
	});
	
	$("#sdcsMoneyAccountDetails").click(function(){
		myAccountLinkClicked();
	});
	
	$("#btnSdcsMoneySubmit").click(function(){
		
		var amnt = $("#sdcsAmountInput").val().trim();
		var id = localStorage.getItem("customer_userid");
		if(amnt == null || amnt.length == 0 || amnt == "0"){		
			alert("Please enter the amount to be added");
			$("#sdcsAmountInput").focus();
		}else if(id == "0" || id == null){
			
			alert("Sorry could not book courier due to some internal error");
			$("#sdcsAmountInput").focus();
		}else
			
			$.ajax({
				
				url:"sdcsAddMoney",
				type:"POST",
				data:{
					
					"amount":amnt,
					"userId":id
				},
				success:function(responseData,textStatus){
					
					handleSdcsAddMoneyResponse(responseData);
				},
				error:function(responseData){
					
					alert("Error contacting back end server");
				}
			});
			
		
	});
	
});

function showalertforlogin(){
	/*if(confirm("Please login for sdcs to add money")==true){*/
		hideallmaindivs();
		$("#courier_page").show();
		 $("#customerLogin").tab('show');
		
	/*}*/
}
function handleSdcsAddMoneyResponse(responseData){
	var response = jQuery.parseJSON(responseData);
	if(response.result){
		
		$("#sdcsMoneychannel").val(response.channel);
		$("#sdcsMoneyaccount_id").val(response.account_id);
		$("#sdcsMoneyreference_no").val(response.reference_no);
		$("#sdcsMoneyamount").val(response.amount);
		$("#sdcsMoneymode").val(response.mode);
		$("#sdcsMoneycurrency").val(response.currency);
		$("#sdcsMoneydescription").val(response.description);
		$("#sdcsMoneyreturn_url").val(response.return_url);
		$("#sdcsMoneyname").val(response.name);
		$("#sdcsMoneyaddress").val(response.address);
		$("#sdcsMoneycity").val(response.city);
		$("#sdcsMoneystate").val(response.state);
		$("#sdcsMoneycountry").val(response.country);
		$("#sdcsMoneypostal_code").val(response.postal_code);
		$("#sdcsMoneyphone").val(response.phone);
		$("#sdcsMoneyemail").val(response.email);
		$("#sdcsMoneypage_id").val(response.page_id);
		$("#sdcsMoneysecure_hash").val(response.secure_hash);
		
		$("#sdcsAmountInputDiv").hide();
		$("#sdcsMoneyPayConfirmationDiv").show();
		
		$("#sdcsAmountHeader").text(        "The amount you have to pay is "+response.amount+"");
	}
	}

/*function myAccountLinkClicked(){
	
	var userId = localStorage.getItem("customer_userid");
	
	$.ajax({
		
		url:"myAccountDetails",
		type:"POST",
		data:{
			
			"userId":userId
		},
		success:function(responseData,textStatus){
			
			handleMyAccountDetailsResponse(responseData);
		},
		error:function(responseData){
			
			alert("Error contacting back end server");
		}
		
	});
	
}

function handleMyAccountDetailsResponse(responseData){
	
	var response = jQuery.parseJSON(responseData);
	
	if(response.result){
		
		alert("abcd");
	}
}*/


function sdcsAddmoneyBackBtnClicked(){
	$("#sdcsMoneyPayConfirmationDiv").hide();
	$("#sdcsAmountInputDiv").show();

	
}