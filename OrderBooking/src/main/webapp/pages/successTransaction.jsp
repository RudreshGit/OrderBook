<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page import="java.util.*, java.text.*"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">

<link rel="stylesheet" type="text/css" href="css/common.css" />

<!-- Bootstrap -->
<link rel="stylesheet" type="text/css" href="css/bootstrap.css">

<script type="text/javascript" src="js/jquery-1.11.3.min.js"></script>

<script type="text/javascript" src="js/transaction.js"></script>

<title>SDCS</title>

</head>
<body class="appBody">
	<%
		if ((String) session.getAttribute("transaction_details") != null) {
	%>
	<script type="text/javascript">
		handleSucceededTransaction("<%=(String) session.getAttribute("transaction_details")%>"); 
	</script>
	<%
		} 
	%>
	
	<div id="successTransaction" align="center" style="color: #4F8A10; margin-top: 20px;">
	
		<h4 style="color:#000000;"id="successMsg"></h4>
	
	</div>
	
	<div id="failedTransaction" align="center" style="color: #D8000C;  margin-top: 20px;">
	
		<h4 style="color:#000000;" id="failedMsg"><%=session.getAttribute("transaction_details")%></h4>
	
	</div>
	
	<div align="center">
		  <a href="http://sdcs.me" type="button" class="btn btn-info">Go To Booking Page</a> 
	 <!-- <a href="http://192.168.0.10:8088/OrderBooking" type="button" class="btn btn-info">Go To Booking Page</a> -->  
	<!--  <a href="http://manjunathdl.com" type="button" class="btn btn-info">Go To Booking Page</a> --> 
	</div>
	
</body>
</html>