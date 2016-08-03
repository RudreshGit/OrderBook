$(document).ready(function() {
	
	
    // Handle click on logout option
    $("#goToBooking").click(function() {
    	window.history.go(-3);
    });
    
    var transactionDetails = localStorage.getItem("transactionDetails");
    var transactionJsonData = jQuery.parseJSON(transactionDetails);
    console.log(transactionJsonData);
    if(transactionJsonData != null) {
		if(transactionJsonData.transaction_saved) {
			$("#successTransaction").show();
			$("#failedTransaction").hide();
			$("#successMsg").text("Thank You. Your courier booking and payment are successfully done." +"Payment transaction reference is: " + transactionJsonData.refrence_number + " and courier tracking number is: " + transactionJsonData.tracking_number);
			
		} else {
			$("#successTransaction").hide();
			$("#failedTransaction").show();
			$("#failedMsg").text("Sorry, we could not process your payment and booking details. Please try again later.");
		}
		localStorage.setItem("transactionDetails",null);
	}
    
});

/**
 * This method is called when transaction is done successfully
 */
function handleSucceededTransaction(transactionDetails) {
	localStorage.setItem("transactionDetails",transactionDetails);
}
