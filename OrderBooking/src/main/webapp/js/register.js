$(document).ready(function(){
	
	
	$("#btnLogin").click(function(){
		
		var userId = $("#lcontact").val();
		var password = $("#lpassword").val();
		
		$.ajax({
			
			url:"login",
			type:"POST",
			data:{
				
				"contact":userId,
				"password":password
			},
			success:function(responseData,textStatus){
				
				handleLoginStatus(responseData);
			},
			error:function(responseData){alert("Error contacting back end server");}
			
		});
	})
	
	
	$("#btnRegister").click(function(){
		
		var name = $("#name").val().trim();
		var contact = $("#contact").val().trim();
		var password = $("#password").val().trim();
		
		alert(password);
		$.ajax({
			
			url:"register",
			type:"POST",
			data:{
				
				"name":name,
				"contact":contact,
				"2":password
			},
			success:function(responseData,textStatus){
				
				handleRegisterResponse(responseData);
			},
			error:function(responseData){
				
				alert("Error contacting server");
			}
		
			
		})
	});
	
});


function handleRegisterResponse(responseData){
	
	var response = jQuery.parseJSON(responseData);
	
	if(response.result){
		
	$("#loginDiv").show();
	$("#registratioDiv").hide();
	
	alert("Registered successfully");
	}
}

function handleLoginStatus(responseData){
	
	var response = jQuery.parseJSON(responseData);
		if(response.result){
		alert("Login successfull");
	}else{
		
		alert("Please provide valid details");
	}
}

