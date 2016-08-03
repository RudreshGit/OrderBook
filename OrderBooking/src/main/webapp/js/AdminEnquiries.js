$(document).ready(function(){
	$("#hotelenquiryTwo").hide();
	$("#hotelenquiryOne").show();
	$("#tblHotelEnquiryAllBookedCouriersDEtails").hide();
	$("#tbleenquiryhoteltotalcouriers").hide();
	$("#btnbackEnquiryHotellist").click(function(){
		$("#hotelenquiryTwo").hide();
		$("#hotelenquiryOne").show();
		$("#tblHotelEnquiryAllBookedCouriersDEtails").hide();
		$("#tbleenquiryhoteltotalcouriers").show();

	});
	
	$("#btnhoteldetails").click(function(){
		servercalltogethoteldetails();
	});
	
	$("#btnhoteldetailsd").click(function(){
		servercallforhotelenqurytotaldetails();
	});
	$("#btnHotelEnquirybackhotelCouriersTotal").click(function(){
		servercalltogetenquiryhotelall();
	});
	
});

function servercalltogethoteldetails(){
	var hotelname=$("#adminhotelnamed").val().trim();
	if(hotelname==null || hotelname.length==0){
		alert("Please enter the hotel name");
	}else{
		$("#btnhoteldetails").text("Loading..");
		$.ajax({
			url:"gethoteldetails",
			type:"POST",
			data:{
				"hotelname":hotelname
			},
			success: function(responseData, textStatus){
				$("#btnhoteldetails").text("submit");
			
				handlehoteldetailsdata(responseData);
			},
			error: function(responseData){
				$("#btnhoteldetails").text("submit");
				alert("Error Contacting backend server!..please try again");
			}
		});
	}
}


function handlehoteldetailsdata(responseData){
	
	var getdata=jQuery.parseJSON(responseData);
	if(getdata.result){
		var alldatasinarray=getdata.hoteldetails;
		if(alldatasinarray==null && alldatasinarray==undefined){
			alert("Hotel not found.Please enter registered hotel name properly");
			
		}else{
			
			$("#tblhoteldetails tbody").empty();
			var starttable='<tbody>';
			var endtable='</tbody>';
			
			$("#tblhoteldetails").append(starttable);
			$.each(alldatasinarray, function(index,value){
				var startrow='<tr style="#000000">';
				
				var hotelreistartionid=value["Registration_Id"];
				var hoteldate=value["Date_of_registration"];
				var hotelname=value["Restaurant_name"];
				var hoteladdress=value["Restaurant_address"];
				var hotelcontact=value["contact_number"];
				var hotelemail=value["email"];
				var hotelamount=value["amount"];
				var hoteletramount=value["extraAmount"];
				
				
				var columnone='<td>'+hotelreistartionid+'</td>';
				var columntwo='<td>'+hoteldate+'</td>';
				var columnthree='<td>'+hotelname+'</td>';
				var columnfour='<td>'+hoteladdress+'</td>';
				var columnfive='<td>'+hotelcontact+'</td>';
				var columnsix='<td>'+hotelemail+'</td>';
				var columnseven='<td>'+hotelamount+'</td>';
				var columneight='<td>'+hoteletramount+'</td>';
				
				var rowend='</tr>';
				
				$("#tblhoteldetails").append(startrow+columnone+columntwo+columnthree+
						columnfour+columnfive+columnsix+columnseven+columneight+rowend);
				
			});
			$("#tblhoteldetails").append(endtable);
		}
	}
}

function servercallforhotelenqurytotaldetails(){
	var hotelname=$("#adminhotelnamedd").val().trim();
	var oteldates=$("#adminhoteldates").val().trim();
	if(hotelname==null ||hotelname.length==0){
		alert("Please enter hotel name");
		
	}else if(oteldates==null ||oteldates.length==0){
		alert("Please select date");
	}else{
		$("#btnhoteldetailsd").text("loading..");
		$.ajax({
				url:"enquirygettotalcouriersofhotel",
				type:"POST",
				data:
					{
					"hotelname":hotelname,
					"dates":oteldates
					},
					success:function(responseData,textStatus){
						$("#btnhoteldetailsd").text("submit");
						handleenquiryhoteltotalcouriers(responseData);
					},
					error:function(responseData){
						$("#btnhoteldetailsd").text("submit");
						alert("Error contacting backend server...");
					}
		});
	}
}

function handleenquiryhoteltotalcouriers(responseData){
	var getjsonarray=jQuery.parseJSON(responseData);
	
	if(getjsonarray.result){
		$("#tbleenquiryhoteltotalcouriers").show();
		var arrayjsondata=getjsonarray.enquiry_hotel_data;
		if(arrayjsondata==null && arrayjsondata==undefined){
			alert("No couriers found!...")
		}else{
			$("#tbleenquiryhoteltotalcouriers tbody").empty();
			var tablebodystart='<tbody>';
			var tbodyend='</tbody>';
			$("#tbleenquiryhoteltotalcouriers").append(tablebodystart);
			$.each(arrayjsondata, function(index, value){
				var rowstart='<tr Style="color:#000000";>';
				var name = value["restaurant_name"];
				var number = value["numberOfCouriers"];
				var extra = value["extraDistance"];
				var pending = value["pending_couriers"];
				var cancelled = value["cancelled_couriers"];
				var delivered = value["delivered_couriers"];
				var total_extra_amount = value["total_extra_amount"];
				
				var userids=value["restaurentId"];
				
				
				var strColumnThree = '<td><a href="# type="submit" onclick="hidetable();">'+name+'</a></td>';
				var strColumnFour = '<td> ' + number + ' </td>';
				var strColumnFive = '<td> ' + extra + ' </td>';
				var strColumnSix = '<td>' + pending + '</td>';
				var strColumnSeven = '<td> ' + cancelled + ' </td>';
				var strColumnEight = '<td> ' + delivered + ' </td>';
				var strColumnnine = '<td> ' + total_extra_amount +' </td>';
				var strColumnTen = '<td> ' + userids +' </td>';
				var strTableRowEnd = '</tr>';

				$("#tbleenquiryhoteltotalcouriers").append(
						rowstart + strColumnTen+strColumnThree
								+ strColumnFour+ strColumnFive+ strColumnSix +strColumnSeven + strColumnEight +strColumnnine +strTableRowEnd);

				$("#tbleenquiryhoteltotalcouriers").append(tbodyend);
				
			});
			
		}
	}else {
		$("#tbleenquiryhoteltotalcouriers").hide();
		alert("NO result Found!..Please check hotel name");
	}
	
}

function hidetable(){
	$("#hotelenquiryTwo").show();
	$("#hotelenquiryOne").hide();
	$("#tblHotelEnquiryAllBookedCouriersDEtails").hide();
	$("#tbleenquiryhoteltotalcouriers").hide();

}

function servercalltogetenquiryhotelall(){
	var gettypes=$("#adminHotelEnquiryAllCuorierTypeSelection").val().trim();
	var hotelname=$("#adminhotelnamedd").val().trim();
	var oteldates=$("#adminhoteldates").val().trim();
	if(hotelname==null ||hotelname.length==0){
		alert("Please enter hotel name");
		
	}else if(oteldates==null ||oteldates.length==0){
		alert("Please select date");
	}else {
		$("#btnHotelEnquirybackhotelCouriersTotal").text("Loading..");
		$.ajax({
			url:"getallcouriersofenquryhotel",
			type:"POST",
			data:{
				"hotelname":hotelname,
				"dates":oteldates,
				"typesselected":gettypes
			},
			success:function(responseData,textStatus){
				$("#btnHotelEnquirybackhotelCouriersTotal").text("submit");
				handleallcourierdetailsofenquiryHotel(responseData);
			},
			error:function(responseData){
				$("#btnHotelEnquirybackhotelCouriersTotal").text("submit");
				alert("Error contacting backend server");
			}
			
		});
	}
	
}

function handleallcourierdetailsofenquiryHotel(responseData){
var jsonparse=jQuery.parseJSON(responseData);
if(jsonparse.result){
	$("#tblHotelEnquiryAllBookedCouriersDEtails").show();
	var allCouriersArray = jsonparse.couriers_details;				
	
	if (allCouriersArray != undefined
			&& allCouriersArray != null){
		$("#tblHotelEnquiryAllBookedCouriersDEtails tbody").empty();
		var strBulkTotalTablBodyStart = '<tbody>';
		var strBulkTotalTablBodyEnd = '</tbody>';

		// Add offices table header
		$("#tblHotelEnquiryAllBookedCouriersDEtails").append(strBulkTotalTablBodyStart);
		
		
		
		// Adding each booked courier to the table 
		$.each(allCouriersArray , function(index, value) {
			var strTableRowStart = '<tr style="color:#000000;">';

			var sender = value["sender"];
			var reciever = value["reciver"];
			var distance = value["distance"];
			var amount = value["total_amount"];
			var content = value["content"];
			var paytype = value["pay_type"];
			var codamount = value["codAmount"];
			var deliveryboy = value["delivery"];
			var timeofbooking = value["time_of_booking"];
			var scheduletime = value["schedula_time"];
			var weight = value["weight"];
			
			
			
			var strColumnThree = '<td>'+timeofbooking+'</a></td>';
			var strColumnFour = '<td> ' + sender + ' </td>';
			var strColumnFive = '<td> ' + reciever + ' </td>';
			var strColumnSix = '<td>' + deliveryboy + '</td>';
			var strColumnSeven = '<td> ' + scheduletime + ' </td>';
			var strColumnEight = '<td> ' + distance + ' </td>';
			var strColumnnine = '<td> ' + content +' </td>';
			var strColumnTen = '<td> ' + paytype +' </td>';
			var strColumnEleven = '<td> ' + codamount +' </td>';
			var strColumnTwelve = '<td> ' + weight +' </td>';
			var strColumnThirteen = '<td> ' + amount +' </td>';

			var strTableRowEnd = '</tr>';

			$("#tblHotelEnquiryAllBookedCouriersDEtails").append(
					strTableRowStart + strColumnThree
							+ strColumnFour+ strColumnFive+ strColumnSix +strColumnSeven + strColumnEight +strColumnnine +strColumnTen+strColumnEleven+strColumnTwelve+strColumnThirteen+strTableRowEnd);
		});

		// Append body end at the end of the table
		$("#tblHotelEnquiryAllBookedCouriersDEtails").append(strBulkTotalTablBodyEnd);
	}else{
		alert("No couriers Booked");
	}
}else{
	alert("Not Found any Datas");
	
}
}