/**
 * This java script file contains scripts used for quick booking function
 */

var officeId = 0;

$(document).ready(function() {

	$('#chkEstimateDeliverIn24Hours').change(function() {
        if($(this).is(":checked")) {
        	uncheckAllOptions();
        	$(this).prop("checked",true);
        } else {
        	
        }
    });
	
	$('#chkEstimateDeliverIn4Hours').change(function() {
        if($(this).is(":checked")) {
        	uncheckAllOptions();
        	$(this).prop("checked",true);
        } else {
        	
        }
    });
	
	$('#chkEstimateHandToHandDelivery').change(function() {
        if($(this).is(":checked")) {
        	uncheckAllOptions();
        	$(this).prop("checked",true);
        } else {
        	
        }
    });
	
	$('#chkEstimateConfedentialDelivery').change(function() {
        if($(this).is(":checked")) {
        	uncheckAllOptions();
        	$(this).prop("checked",true);
        } else {
        	
        }
    });
	
});

function uncheckAllOptions() {
	$('#chkEstimateDeliverIn24Hours').prop("checked",false);
	$('#chkEstimateDeliverIn4Hours').prop("checked",false);
	$('#chkEstimateHandToHandDelivery').prop("checked",false);
	$('#chkEstimateConfedentialDelivery').prop("checked",false);
}

/**
 * This method calculates the estimated amount
 */
function estimate() {
	
	var deliverInOneDay =  $('#chkEstimateDeliverIn24Hours').prop('checked');
	var deliverInFourDays =  $('#chkEstimateDeliverIn4Hours').prop('checked');
	var deliverHandToHand = $('#chkEstimateHandToHandDelivery').prop('checked');
	var deliverConfidential = $('#chkEstimateConfedentialDelivery').prop('checked');
	
	var atlestOneSelected = false;
	if(deliverInOneDay) {
		atlestOneSelected = true;
	}
	if(deliverInFourDays) {
		atlestOneSelected = true;
	}
	if(deliverHandToHand) {
		atlestOneSelected = true;
	}
	if(deliverConfidential) {
		atlestOneSelected = true;
	}
	
	if(atlestOneSelected == false) {
		showErrorMsg(EMPTY_DELIVERY_OPTIONS);
	} else {
		var kilo = $("#txtEstimationKiloGrams").val().trim();
		var grams = $("#txtEstimationGrams").val().trim();
		
		var atleastOneEntered = false;
		if(kilo.length != 0) {
			atleastOneEntered = true;
		} 
		if(grams.length != 0) {
			atleastOneEntered = true;
		}
		
		if(!atleastOneEntered) {
			showErrorMsg(EMPTY_KILO_GRAMS);
		} else {
			atleastOneEntered = true;
			if(isNaN(kilo)){
				showErrorMsg(INVALID_KILO);
				atleastOneEntered = false;
			} 
			if(isNaN(grams)) {
				showErrorMsg(INVALID_GRAMS);
				atleastOneEntered = false;
			} 
			
			if(kilo.length == 0)
				kilo = "0";
			if(grams.length == 0)
				grams = "0";
			
			if(atleastOneEntered){
				$("#btnEstimateCost").button("loading");
				$.ajax({
					url: "getEstimation",
					type: "POST",
					data: {
						"isDeliveryInOneDay" : deliverInOneDay,
						"isDeliveryInFourDays" : deliverInFourDays,
						"isDeliveryInHandToHand" : deliverHandToHand,
						"isDeliveryInConfidential" : deliverConfidential,
						"kilo" : parseFloat(kilo),
						"grams" : parseFloat(grams),
						"estimationFor": "quickEstimation"
					},
					success: function(responseData, textStatus) {
						handleEstimate(responseData);  
				    },
				    error : function(responseData) {
				    	$("#btnEstimateCost").button("reset");
				    	showErrorMsg(SERVER_CONTACT_ERROR);
				    }
						
				});		
			}
		} 
	}
	
	
		
	
}

/**
 * This method is called when estimation response is received from server
 */
function handleEstimate(estimateResponseData) {
	$("#btnEstimateCost").button("reset");
	var estimationJsonData = jQuery.parseJSON(estimateResponseData);
	if(estimationJsonData.more_than_10_kilo_grams) {
		$("#successMsgContainer").show().delay(10000).fadeOut();
		$("#promptMsg").text(WEIGHTAGE_HIGH);
	} else {
		if(estimationJsonData.estimation_status) { 
			$("#txtEstimatedTotalAmount").val(estimationJsonData.estimated_amount);
		} else { 
			showErrorMsg(ESTIMATE_FAILED);
		}
	}
}










