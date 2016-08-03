$(document).ready(function(){
	
	$("#delBoyLocationTracking").click(function(){
		
		deliveryBoyTrackingClicked();
	});
});

function deliveryBoyTrackingClicked(){
	$("#delBoyLocationTracking").text("Loading");
	$.ajax({

		url : "showDelBoyMap",
		type : "POST",
		data : {
		"userId" : "0"
						
		},
		success : function(responseData, textStatus) {
			$("#delBoyLocationTracking").text("Tracking");
			handleDeliveryBoyTracking(responseData);
			
			
		},
		error : function(responseData) {
			
			$("#delBoyLocationTracking").text("Tracking");	
			alert("sorry could not show the map");
		}
	});
}

function handleDeliveryBoyTracking(dBoyresponseData){
	
	
	var deliveryBoyLocation = jQuery.parseJSON(dBoyresponseData);
	
	
	if (deliveryBoyLocation.status) { // We got some courier history
		
		
		var cordinateArray = deliveryBoyLocation.responceCordinates;
				
		
		if (cordinateArray != undefined
				&& cordinateArray != null)
			parseCordinatesJsonJsonArray(deliveryBoyLocation);
		
			}else { // We did not get any result for filter criteria
		$("#noHistoryFound").show();
		$("#tblDeliveryBoyBooking").hide();
	
	
}
	
}
	

function parseCordinatesJsonJsonArray(deliveryBoyLocationa){
	
	var cordinateArray = deliveryBoyLocationa.responceCordinates;
		
	/*alert(cordinateArray);
*/
	
	    var latlng = new google.maps.LatLng(12.9599, 77.5083);
	    var myOptions = {
	        zoom: 9,
	        center: latlng,
	        mapTypeId: google.maps.MapTypeId.ROADMAP,
	        mapTypeControl: false
	    };
	   map = new google.maps.Map(document.getElementById("googleMap"),myOptions);
	    /*var infowindow = new google.maps.InfoWindow(), marker,i;
	     map = new google.maps.Map($('#googleMap')[0], options);
*/var phonea,infoWindow;
	$.each(cordinateArray , function(index , value) {
		lat = value["lattitude"];

		 lon = value["longittude"];
		 
		 /*id = value["id"];*/
		 
		 phonea = value["name"]+","+value["phoneNumber"];
		 
		  
		/* var latLng = new google.maps.LatLng(lat, lon);
         var marker = new google.maps.Marker({
             position: latLng,
             map: map
         });
	});
	*/	  marker = new google.maps.Marker({
	            position: new google.maps.LatLng(lat, lon),
	            map: map,
	            title:phonea
	        });
	/*infoWindow = new google.maps.InfoWindow({
        content: phonea
    });*/
	marker.set('location', phonea);
	 google.maps.event.addListener(marker, 'click', function () {
		 var area = this.get('location');  
         infoWindow.open(map, marker);
     });
	     
	 });
	
	
	
}
