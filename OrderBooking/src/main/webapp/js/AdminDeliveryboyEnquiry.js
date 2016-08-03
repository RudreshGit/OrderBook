$(document).ready(function(){
	$("#deliveryboyenquiryTwo").hide();
	$("#deliveryboyenquiryOne").show();
	$("#tbldeliveryboyEnquiryAllBookedCouriersDEtails").hide();
	$("#tbleenquirydeliveryboytotalcouriers").hide();
	$("#btnbackEnquirydeliveryboylist").click(function(){
		$("#deliveryboyenquiryTwo").hide();
		$("#deliveryboyenquiryOne").show();
		$("#tbldeliveryboyEnquiryAllBookedCouriersDEtails").hide();
		$("#tbleenquirydeliveryboytotalcouriers").show();

	});
	
	$("#btndeliveryboydetails").click(function(){
		servercalltogetdeliveryboydetails();
	});
	
	$("#btndeliveryboydetailsd").click(function(){
		servercallfordeliveryboyenqurytotaldetails();
	});
	$("#btndeliveryboyEnquirybackhotelCouriersTotal").click(function(){
		servercalltogetenquirydeliveryboyall();
	});
	
});

function servercalltogetdeliveryboydetails(){
	var deliveryboyname=$("#admindeliveryboynamed").val().trim();
	if(deliveryboyname==null || deliveryboyname.length==0){
		alert("Please enter the deliveryboy name");
	}else{
		$("#btndeliveryboydetails").text("loading...")
		$.ajax({
			url:"getdeliveryboydetails",
			type:"POST",
			data:{
				"deliveryboyphonenumber":deliveryboyname
			},
			success: function(responseData, textStatus){
				$("#btndeliveryboydetails").text("submit");
				handledeliveryboydetailsdata(responseData);
			},
			error: function(responseData){
				$("#btndeliveryboydetails").text("submit");
				alert("Error Contacting backend server!..please try again");
			}
		});
	}
}


function handledeliveryboydetailsdata(responseData){
	
	var getdata=jQuery.parseJSON(responseData);
	if(getdata.result){
		var alldatasinarray=getdata.deliveryboydetails;
		if(alldatasinarray==null && alldatasinarray==undefined){
			alert("deliveryboy not found.Please enter registered deliveryboy name properly");
			
		}else{
			
			$("#tbldeliveryboydetails tbody").empty();
			var starttable='<tbody>';
			var endtable='</tbody>';
			
			$("#tbldeliveryboydetails").append(starttable);
			$.each(alldatasinarray, function(index,value){
				var startrow='<tr style="#000000">';
				
				var hotelreistartionid=value["delivery_boy_id"];
				var hoteldate=value["driving_license_number"];
				var hotelname=value["full_name"];
				var hoteladdress=value["address"];
				var hotelcontact=value["mobile_number"];
				var hotelemail=value["email_address"];
				var hotelamount=value["account_status"];
				var hoteletramount=value["avail_time"];
				
				var hotelarea=value["area"];
				var hotelschootertype=value["schootertype"];
				var hotelschooternumber=value["schooternumber"];
					
				
				var columnone='<td>'+hotelreistartionid+'</td>';
				var columntwo='<td>'+hoteldate+'</td>';
				var columnthree='<td>'+hotelname+'</td>';
				var columnfour='<td>'+hoteladdress+'</td>';
				var columnfive='<td>'+hotelcontact+'</td>';
				var columnsix='<td>'+hotelemail+'</td>';
				var columnseven='<td>'+hotelamount+'</td>';
				var columneight='<td>'+hoteletramount+'</td>';
				var columnnine='<td>'+hotelarea+'</td>';
				var columnten='<td>'+hotelschootertype+'</td>';
				var columnelven='<td>'+hotelschooternumber+'</td>';
			
				var rowend='</tr>';
				
				$("#tbldeliveryboydetails").append(startrow+columnone+columntwo+columnthree+
						columnfour+columnfive+columnsix+columnseven+columneight+columnnine+columnten+columnelven+rowend);
				
			});
			$("#tbldeliveryboydetails").append(endtable);
		}
	}
}

function servercallfordeliveryboyenqurytotaldetails(){
	var hotelname=$("#admindeliveryboynamedd").val().trim();
	var oteldates=$("#admindeliveryboydates").val().trim();
	if(hotelname==null ||hotelname.length==0){
		alert("Please enter deliveryboy name");
		
	}else if(oteldates==null ||oteldates.length==0){
		alert("Please select date");
	}else{
		
				$("#btndeliveryboydetailsd").text("loading..");
		$.ajax({
				url:"enquirygettotalcouriersofdeliveryboy",
				type:"POST",
				data:
					{
					"hotelphonenumber":hotelname,
					"dates":oteldates
					},
					success:function(responseData,textStatus){
						$("#btndeliveryboydetailsd").text("submit");
						handleenquirydeliveryboytotalcouriers(responseData);
					},
					error:function(responseData){
						$("#btndeliveryboydetailsd").text("submit");
						alert("Error contacting backend server...");
					}
		});
	}
}

function handleenquirydeliveryboytotalcouriers(responseData){
	var getjsonarray=jQuery.parseJSON(responseData);
	
	if(getjsonarray.result){
		$("#tbleenquirydeliveryboytotalcouriers").show();
		var arrayjsondata=getjsonarray.enquiry_deliveryboy_data;
		if(arrayjsondata==null && arrayjsondata==undefined){
			alert("No couriers found!...")
		}else{
			$("#tbleenquirydeliveryboytotalcouriers tbody").empty();
			var tablebodystart='<tbody>';
			var tbodyend='</tbody>';
			$("#tbleenquirydeliveryboytotalcouriers").append(tablebodystart);
			$.each(arrayjsondata, function(index, value){
				var rowstart='<tr Style="color:#000000";>';
				var name = value["mobile_number"];
				var number = value["numberOfCouriers"];
				var extra = value["extraDistance"];
				var pending = value["pending_couriers"];
				var cancelled = value["delivered_couriers"];
				var delivered = value["cancelled_couriers"];
				var total_extra_amount = value["total_extra_amount"];
				
				var userids=value["restaurentId"];
				
				
				var strColumnThree = '<td><a href="# type="submit" onclick="hidedeliveryboytable();">'+name+'</a></td>';
				var strColumnFour = '<td> ' + number + ' </td>';
				var strColumnFive = '<td> ' + extra + ' </td>';
				var strColumnSix = '<td>' + pending + '</td>';
				var strColumnSeven = '<td> ' + cancelled + ' </td>';
				var strColumnEight = '<td> ' + delivered + ' </td>';
				var strColumnnine = '<td> ' + total_extra_amount +' </td>';
				var strColumnTen = '<td> ' + userids +' </td>';
				var strTableRowEnd = '</tr>';

				$("#tbleenquirydeliveryboytotalcouriers").append(
						rowstart + strColumnTen+strColumnThree
								+ strColumnFour+ strColumnFive+ strColumnSix +strColumnSeven + strColumnEight +strColumnnine +strTableRowEnd);

				$("#tbleenquirydeliveryboytotalcouriers").append(tbodyend);
				
			});
			
		}
	}else {
		$("#tbleenquirydeliveryboytotalcouriers").hide();
		alert("NO result Found!..Please check deliveryboy phoneNumber");
	}
	
}

function hidedeliveryboytable(){
	$("#deliveryboyenquiryTwo").show();
	$("#deliveryboyenquiryOne").hide();
	$("#tbldeliveryboyEnquiryAllBookedCouriersDEtails").hide();
	$("#tbleenquirydeliveryboytotalcouriers").hide();

}

function servercalltogetenquirydeliveryboyall(){
	var gettypes=$("#admindeliveryboyEnquiryAllCuorierTypeSelection").val().trim();
	var hotelname=$("#admindeliveryboynamedd").val().trim();
	var oteldates=$("#admindeliveryboydates").val().trim();
	if(hotelname==null ||hotelname.length==0){
		alert("Please enter deliveryboy name");
		
	}else if(oteldates==null ||oteldates.length==0){
		alert("Please select date");
	}else {
		$("#btndeliveryboyEnquirybackhotelCouriersTotal").text("Loading..");
		
		$.ajax({
			url:"getallcouriersofenqurydeliveryboy",
			type:"POST",
			data:{
				"hotelphonenumber":hotelname,
				"dates":oteldates,
				"typesselected":gettypes
			},
			success:function(responseData,textStatus){
				$("#btndeliveryboyEnquirybackhotelCouriersTotal").text("submit");
				
				handleallcourierdetailsofenquirydeliveryboy(responseData);
			},
			error:function(responseData){
				$("#btndeliveryboyEnquirybackhotelCouriersTotal").text("submit");
				alert("Error contacting backend server");
			}
			
		});
	}
	
}

function handleallcourierdetailsofenquirydeliveryboy(responseData){
var jsonparse=jQuery.parseJSON(responseData);
if(jsonparse.result){
	$("#tbldeliveryboyEnquiryAllBookedCouriersDEtails").show();
	var allCouriersArray = jsonparse.couriers_details;				
	
	if (allCouriersArray != undefined
			&& allCouriersArray != null){
		$("#tbldeliveryboyEnquiryAllBookedCouriersDEtails tbody").empty();
		var strBulkTotalTablBodyStart = '<tbody>';
		var strBulkTotalTablBodyEnd = '</tbody>';

		// Add offices table header
		$("#tbldeliveryboyEnquiryAllBookedCouriersDEtails").append(strBulkTotalTablBodyStart);
		
		
		
		// Adding each booked courier to the table 
		$.each(allCouriersArray , function(index, value) {
			var strTableRowStart = '<tr style="color:#000000;">';
            var bookingids=value["bookingid"];
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
			var staus=value["status"];
			
			
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
             var strolumnfourteen='<td>'+bookingids+'</td>';
             var strfifteen ='<td>'+staus+'</td>';
			var strTableRowEnd = '</tr>';

			$("#tbldeliveryboyEnquiryAllBookedCouriersDEtails").append(
					strTableRowStart + strColumnThree+strolumnfourteen
							+ strColumnFour+ strColumnFive+ strColumnSix +strColumnSeven + strColumnEight +strColumnnine +strColumnTen+strColumnEleven+strColumnTwelve+strColumnThirteen+strfifteen+strTableRowEnd);
		});

		// Append body end at the end of the table
		$("#tbldeliveryboyEnquiryAllBookedCouriersDEtails").append(strBulkTotalTablBodyEnd);
	}else{
		alert("No couriers Booked");
	}
}else{
	alert("Not Found any Datas");
	
}
}