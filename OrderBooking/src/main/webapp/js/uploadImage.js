$(document).ready(function(){
	
	
	
	$("#uplodImagePage").click(function(){
		hideallmaindivs();
		$("#UploadImagePage").show();
	});
	
	$("#showImage").click(function(){
		
		$.ajax({
			
			url:"showImage",
			type:"POST",
			data:{
				
				id:"22"
			},
			success:function(responseData,textStatus){
				
				handleImageShowResponse(responseData);
			},
			error:function(responseData){
				
				alert("Error contacting back end server");
			}
			
		});
		
	});
	
	$("#btnimgUpldSbmt").click(function(){
		
		
		
		
		var img = $("#inptimg").val();
		
		
		
		
		var imgvar = new Image();
        imgvar.src = img;
                   
         var canvas = document.createElement("canvas");
         canvas.width = this.width;
         canvas.height = this.height;
     
         var ctx = canvas.getContext("2d");
         var dataURL = canvas.toDataURL("image/png");
      var base64Image = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
		
		
		if(img == null || img.length == 0){
			
			alert("Please upload an image");
			$("#inptimg").focus();
		}else{
			
			
			$.ajax({
				
				url:"uploadImage",
				type:"POST",
				data:{
					
					"img":base64Image
				},
				
				success:function(responseData,textStatus){
					
					handleimgUpdateResponse(responseData);
				},
				error:function(responseData){
					
					alert("Error contacting back ed server");
				}
				
			});
		}
        
	});
	
});


function handleimgUpdateResponse(responseData){
	
	var response = jQuery.parseJSON(responseData);
	if(response.result){
		
		alert("Updated successfully");
	}else{
		
		alert("Sorry could not updated properly");
	}
	 
}

function handleImageShowResponse(responseData){
	
	var response = jQuery.parseJSON(responseData);
	if(response.result){
		
		

		var abcd = convertCanvasToImage(response.img);
		
		
		var image = convertCanvasToImage(abcd)
		$("output").src(image);
   /* var output = document.getElementById('output');
    output.src = response.img;*/
	
}else{
	
	alert("could not get image");
}
}


/*function convertCanvasToImage(canvas) {
	var image = new Image();
	image.src = canvas.toDataURL("image/png");
	return image;
}

function convertImageToCanvas(image) {
	var canvas = document.createElement("canvas");
	canvas.width = image.width;
	canvas.height = image.height;
	canvas.getContext("2d").drawImage(image, 0, 0);

	return canvas;
}*/


function convertCanvasToImage(canvas) {
	var image = new Image();
	image.src = canvas.toDataURL("image/png");
	return image;
}
