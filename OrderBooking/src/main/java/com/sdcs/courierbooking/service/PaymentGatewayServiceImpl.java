/**
 * 
 */
package com.sdcs.courierbooking.service;

import java.io.IOException;
import java.math.BigInteger;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.android.gcm.server.Constants;
import com.google.android.gcm.server.Message;
import com.google.android.gcm.server.MulticastResult;
import com.google.android.gcm.server.Result;
import com.google.android.gcm.server.Sender;
import com.sdcs.courierbooking.dao.PaymentGatewayDao;
import com.sdcs.courierbooking.model.SdcsEbsCancel;
import com.sdcs.courierbooking.model.SdcsPaymentDetails;
import com.sdcs.courierbooking.utils.SdcsEmailComponent;
import com.sdcs.courierbooking.utils.SdcsPaymentGatewayConstants;
import com.sdcs.courierbooking.utils.SdcsSMSComponent;
/**
 * @author Dell
 *
 */

@Service
public class PaymentGatewayServiceImpl implements PaymentGatewayService {
	static final String MESSAGE_KEY = "message";

	@Autowired
	PaymentGatewayDao paymentGatewayDao;
	
	ResultSet bookingDetails;	
	
	
	@Override
	public JSONObject savePaymentTransactionDetails(SdcsPaymentDetails sdcsPaymentDetails) {
		
		
		JSONObject transactionJsonObject = new JSONObject();		
				
				
		String schedule="";
			long starrack=	paymentGatewayDao.savePaymentDetails(sdcsPaymentDetails);
				if(starrack>0){
					transactionJsonObject.put("transaction_saved", true);
				transactionJsonObject.put("Transaction_number", starrack);	
				transactionJsonObject.put("tracking_number", sdcsPaymentDetails.bookingId);	
			transactionJsonObject.put("For_invoice","Please check in your mail inbox for invoice");
			ResultSet starchsa=paymentGatewayDao.getdetailsofbookingid(sdcsPaymentDetails.bookingId);
			
			if(starchsa != null){
				try {
					while(starchsa.next()){
						sdcsPaymentDetails.billingName=starchsa.getString("restaurant_name");
						sdcsPaymentDetails.billingAddress=starchsa.getString("restaurant_address");
						sdcsPaymentDetails.billingPhone=starchsa.getString("restaurant_contact");
						sdcsPaymentDetails.deliveryPhone=starchsa.getString("reciever_contact");
						sdcsPaymentDetails.deliveryAddress=starchsa.getString("reciever_address");
						sdcsPaymentDetails.deliveryName=starchsa.getString("reciever_name");
						schedule=starchsa.getString("schedula_time");					
					}
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			String otpsending=starrack+sdcsPaymentDetails.bookingId+"";
			
			
			String sender = sdcsPaymentDetails.billingName.replace(" ", "");
			
				/*  = "You%20are%20successfully%20registered%20to%20"+otpsending+ "%20Pick%20My%20Carrier%20Service.Our%20deliveryboy%20will%20contact%20you%20for%20the%20further%20details%20";
			*/	  String strSmsText= "%20A%20courier%20has%20been%20booked%20to%20"+sender+".%20The%20tracking%20number%20is"+sdcsPaymentDetails.bookingId+".%20The%20OTP%20is"+otpsending+".%20Please%20provide%20this%20to%20delivery%20boy%20on%20the%20arrival%20of%20the%20consignment.";  
			
			
				  SdcsSMSComponent.sendSms(sdcsPaymentDetails.deliveryPhone, strSmsText);		
				 /* String strSmsTexts= "%20A%20courier%20has%20been%20booked%20to%20"+sdcsPaymentDetails.billingPhone+".%20The%20tracking%20number%20is"+sdcsPaymentDetails.bookingId+".%20The%20OTP%20is"+otpsending+".%20Please%20provide%20this%20to%20delivery%20boy%20on%20the%20arrival%20of%20the%20consignment.";*/  
					
					
					String customerMsg = "%20Thank%20you%20for%20Placing%20your%20order%20in%20SDCS.%20Our%20delivery%20boy%20will%20come%20to%20your%20place%20and%20collect%20the%20consignment%20your%20tracking%20Id%20is%20"+sdcsPaymentDetails.bookingId+".%20";
					
					String strSmsTexta = "A%20new%20delivery%20boy%20booking%20is%20done%20from%20"+sender+".%20Reference%20id%20is%20"+sdcsPaymentDetails.bookingId+".Contact%20number%20is%20"+sdcsPaymentDetails.billingPhone+".";
					/*
					String adminMsg = "%20A%20New%20Courier%20Has%20been%20Booked%20in%20the%20Name%20"+sdcsPaymentDetails.billingName+"%20From%20the%20Pincode%20"+sdcsPaymentDetails.billingAddress+sdcsPaymentDetails.billingPhone+"%20To%20PinCode%20"+sdcsPaymentDetails.deliveryAddress+".%20DT%20is%20HandToHand.%20The%20Tracking%20is%20"+sdcsPaymentDetails.bookingId+".%20";
					*/try{
					SdcsSMSComponent.sendSms("9535337626",strSmsTexta);
					SdcsSMSComponent.sendSms("7411791422",strSmsTexta);
					SdcsSMSComponent.sendSms("9916168585",strSmsTexta);
					
					}catch(Exception e){
				
			}
			SdcsSMSComponent.sendSms(sdcsPaymentDetails.billingPhone, customerMsg);
			Date date = new Date();
		     String dateInFormatedDate = date.toString();
				String inVoiceDate = "";
				String inVoiceTime = "";				
					
						inVoiceDate = dateInFormatedDate;
						inVoiceTime = dateInFormatedDate;
			
						
						
						
	        String mailSubject = "SDCS New Courier Booking Invoice Details";
						
			String mailBody = 
			 "<b><i>Dear "+sdcsPaymentDetails.billingName+",</i></b>"
		  	 +"<br>"
		  	 +"<br>"
		 	 +"<b><i> Thank you for choosing SDCS to deliver your valued parcel &bull;&bull;&bull;</i></b>"
			 +"<br>"
			 +"<br>"
			 +"Just a quick update of your recent activity on SDCS&bull;&bull;&bull; your booking has confirmed, to keep an eye on you valued parcel, please refer the following tracking number <b> "+sdcsPaymentDetails.merchantRefNo+" </b> to follow its journey&bull;&bull;&bull;"
			 +"<br>"
			 +"<br>"
			 +"To track your valued parcel, please follow the URL:- http://sdcs.me"
			 +"<br>"
			 +"<h1><a href='http://sdcs.me/trackBooking?trackingNumber="+sdcsPaymentDetails.merchantRefNo+"'>Click Here to trace your valued parcel</a></h1>"
			 +"<br>  <br>"
			 +"<h3>Below is your SDCS Booking Acknowledgement</h3>"
				+"<table style='width:100%'>"
					+"<tr>"
						+"<th colspan='3' style='font-size:20px;background-color: #ffff00;border: 1px solid black;border-collapse: collapse;padding: 5px;text-align: center;'><b>SDCS Invoice</b></th>"
					+"</tr>"
				
					+"<tr>"
						+"<th colspan='3' style='font-size:20px;background-color: #ffff00;border: 1px solid black;border-collapse: collapse; padding: 5px;text-align: center; '><b>Thank you for using SDCS</b></th>"
					+"</tr>"
					
					 +"<tr>"
							 +"<td style='background-color:#ffff00;font-size:16px;text-align:center;border: 1px solid black;border-collapse: collapse;padding: 5px;'>Booking Details</td>"
							 +"<td style='background-color:#F5F5F5;font-size:16px;text-align:center;border: 1px solid black;border-collapse: collapse;padding: 5px;'>Tracking Number: <br><p>"+sdcsPaymentDetails.merchantRefNo+"</p></td>"
							 +"<td style='background-color:#ffff00;font-size:16px;text-align:center;border: 1px solid black;border-collapse: collapse;padding: 5px;'>Payment ID: "+ sdcsPaymentDetails.paymentId+"</td>"
					 +"</tr>"
							

					
					 +"<tr>"
						 +"<td colspan='2' style='font-size:20px;background-color:#33ccff;border: 1px solid black;border-collapse: collapse;padding: 5px;text-align: right;'>Total Amount:</td>"
						 +"<td style='font-size:20px;background-color:#33ccff;border: 1px solid black;border-collapse: collapse;padding: 5px;text-align: center;'><p>" +sdcsPaymentDetails.amount+"</p></td>"
					 +"</tr>"
						
						
						
					    
					 +"<tr style='hight:50px'>"
						 +"<td style='font-size:16px;background-color:#f5f5f5;border: 1px solid black;border-collapse: collapse;padding: 5px;text-align: center;'>Amount Paid:<br><p>" +sdcsPaymentDetails.amount+"</p></br></td>"
						 +"<td style='font-size:16px;background-color:#f5f5f5;border: 1px solid black;border-collapse: collapse;padding: 5px;text-align: center;'>Date:<p>"+inVoiceDate+"</p></br>Time:<p>"+inVoiceTime+"</p></td>"
						 +"<td style='font-size:16px;background-color:#f5f5f5;border: 1px solid black;border-collapse: collapse;padding: 5px;text-align: center;'>Invoice#:<p>"+starrack+"</p></td>"
					 +"</tr>"
					
					 +"<tr>"
						+"<td  style='font-size:16px;background-color:#f5f5f5;border: 1px solid black;border-collapse: collapse;padding: 5px;text-align: left;'>From Address:<p>"+sdcsPaymentDetails.billingAddress+" </p></td>"
					 +"<td style='font-size:16px;background-color:#f5f5f5;border:1px solid black;boder-collapse:collapse;text-align: left;padding: 5px;'>Delivery OTP :<p>"+otpsending +"</p></td>"
						+"</tr>"
					
						
				+"</table>"
			 +"Thanks  <br>"
			 +"SDCS Team  <br>"
			 +"info@sdcs.me";

	/*	BigInteger	sum =new BigInteger(sdcsPaymentDetails.merchantRefNo);
*/
			SdcsEmailComponent.sendMail(sdcsPaymentDetails.billingEmail, mailSubject, mailBody,BigInteger.ZERO);
			
			String adminMailHeader = "New booked courier details";
		String adminMailBody = 
"A new courier booking has been done from"
+"<br>"
+"<h3>Booking details</h3>"
+"<br>"
+"<h1>Tracking Number : "+sdcsPaymentDetails.merchantRefNo+"<h1>"
+"<p>Sender Name:"+sdcsPaymentDetails.billingName+"</p>"
+"<br>"
+"<p>Sender Address:"+sdcsPaymentDetails.billingAddress+"</p>"
+"<br>"
+"<p>Sender Contact:"+sdcsPaymentDetails.billingPhone+"</p>"
+"<br>"
+"<p>Sender Email:"+sdcsPaymentDetails.billingEmail+"</p>"
+"<br>"
+"<p>Reciever Name:"+sdcsPaymentDetails.deliveryName+"</p>"
+"<br>"
+"<p>Reciever Address:"+sdcsPaymentDetails.deliveryAddress+"</p>"
+"<br>"
+"<p>Reciever Contact:"+sdcsPaymentDetails.deliveryPhone+"</p>"
+"<br>"
+"<p>Total Amount:"+sdcsPaymentDetails.amount+"</p>"
+"<br>"
+"<p>Tracking Id:"+sdcsPaymentDetails.merchantRefNo+"</p>"
		+"<br>"
		+"<p>Schedule Time: "+schedule+"</p>";
			
		SdcsEmailComponent.sendMail("bndsuresh12@gmail.com", adminMailHeader, adminMailBody, BigInteger.ZERO);
		SdcsEmailComponent.sendMail("manjunathdl@gmail.com", adminMailHeader, adminMailBody, BigInteger.ZERO);
		SdcsEmailComponent.sendMail("chandusc128@gmail.com", adminMailHeader, adminMailBody, BigInteger.ZERO);
					try {
		           sendNotifications(sdcsPaymentDetails.billingAddress);
	} catch (IOException e) {
		System.out.println("Exception in while sending notification");
	}
				} else {
				transactionJsonObject.put("transaction_saved", false);
			}
		
		return transactionJsonObject;
		
		
	}
	private void sendNotifications(String message) throws IOException {
		ArrayList<String> list = new ArrayList<String>();
		
		ResultSet registartionset = paymentGatewayDao.sendNotification();
		if (registartionset != null) {
			try {
				while (registartionset.next()) {
					try {
						list.add("" + registartionset.getString("registration"));
					} catch (SQLException e) {
						// TODO Auto-generated catch block
						System.out.println("SQL try catch Exception in while sending notification");
						e.printStackTrace();
					}

				}
			} catch (SQLException e1) {
				// TODO Auto-generated catch block
				System.out.println("SQL Exception in while sending notification");
				e1.printStackTrace();
			}
			MulticastResult result = null;

			
			String str="";
			Sender sender = new Sender("AIzaSyCkA9YE-58KSsJqhscHOfpSDLIe12gx0dc");
			Message message1 = new Message.Builder().timeToLive(30).delayWhileIdle(true).addData(MESSAGE_KEY, message)
					.build();

			try {
				result = sender.send(message1, list, 5); // where devices is the
														// list of multiple
															// device AppId's
				for (Result r : result.getResults()) {
					if (r.getMessageId() != null) {
						str = "successfully sent";
					} else {
						str = "failure to sent";
						String error = r.getErrorCodeName();
						if (error.equals(Constants.ERROR_NOT_REGISTERED)) {
							System.out.println("ERROR NOT REGISTERED");
						}
					}
				}
				System.out.println(""+str);
			} catch (IOException e) {
				e.printStackTrace();
				System.out.println("Exception in while sending notification in sender class");
			}
		}
		

	}
	@Override
	public String cancelOrder(SdcsEbsCancel sdcsEbsCancel) {
		// TODO Auto-generated method stub
		
		JSONObject cancelObject = new JSONObject();
		
		SdcsEbsCancel cancelSet = paymentGatewayDao.cancelOrder(sdcsEbsCancel);
		
		if(cancelSet != null){
			cancelObject.put("result", true);
			cancelObject.put("paymentId", sdcsEbsCancel.getPaymentId());
			String reasoncheck=sdcsEbsCancel.getReason();
			if(reasoncheck.equals("1") || reasoncheck.equals("2")){
				cancelObject.put("retornAmount", sdcsEbsCancel.getAmount());
			}else{
				String amount=sdcsEbsCancel.getAmount();
				Double amountdoble=Double.parseDouble(amount);
				amount=""+(amountdoble-(amountdoble*0.05));
				cancelObject.put("retornAmount",amount);
			}			
			cancelObject.put("otpCancellation", sdcsEbsCancel.getPaymentId());
			String strSmsText = "%20Dear%20"+"CancellationOTP"+",%20Your%20registered%20password%20is%20"+sdcsEbsCancel.getPaymentId()+".%20Thanking%20you%20SDCS.";
			SdcsSMSComponent.sendSms(sdcsEbsCancel.getphonenumber(), strSmsText);		
		}else{
			cancelObject.put("result", false);
			cancelObject.put("message", "Please enter correct booking id and try again OR your order has been cancelled already.");
		}
				
			System.out.println(cancelObject);	
		return cancelObject.toString();
	}
	@Override
	public String cancelupdatestatus(String status, String transactionType, String amount, String transactionId,String tracking, String paymentid) {
		// TODO Auto-generated method stub
       JSONObject cancelsuccessObject = new JSONObject();
		
       Boolean successset = paymentGatewayDao.cancelssucess(status,transactionType,amount,transactionId,tracking,paymentid);
	if(successset){
		cancelsuccessObject.put("status",true);
		cancelsuccessObject.put("msgs","Your amount will be refunded within three days!..");
	}else{
		cancelsuccessObject.put("status",false);
	}
		return cancelsuccessObject.toString();
	}

	

		    
//	};
//	emailThread.start();
//	
//	
//
//	
//}
	
	
	@Override
	 public  String cancelWebOrder(BigInteger bookingId) {
	  // TODO Auto-generated method stub
	  
	  
	  
	JSONObject webCancelObject = new JSONObject();
	  
	  ResultSet cancelSet = paymentGatewayDao.webCancelOrder(bookingId);
	  
	  try{
	  
	  if(cancelSet != null){
	   
	   
	   
	   webCancelObject.put("result", true);
	   webCancelObject.put("payId",cancelSet.getString("paymentId"));
	   
	    
	  }else{
	   webCancelObject.put("result", false);
	   webCancelObject.put("message", "Please enter correct booking id and try again OR your your order has been cancelled already.");
	  }
	    
	  }catch(SQLException e){
	   e.printStackTrace();
	  }
	  return webCancelObject.toString();
	 }
	
	
	 @Override
	 public String updateResponse(String trnsId, String payId, String amount, String date, String mode, String refNo,
	   String type, String status,BigInteger bookingId) {
	  // TODO Auto-generated method stub
	  
	  JSONObject updtObject = new JSONObject();
	  
	  long updatedResponse = paymentGatewayDao.updateResponse(trnsId, payId, amount, date, mode, refNo,
	    type, status,bookingId);
	  
	  if(updatedResponse > 0){
	   
	   updtObject.put("result", true);
	   updtObject.put("message","Cancelled Succesfully.Rs."+amount+"will be returned to your account soon.");
	   
	  }else{
	   updtObject.put("result", false);
	   updtObject.put("message", "Sorry could not cancel.");
	  }
	  
	  return updtObject.toString();
	 }
	
	 
	 
	 
	 @Override
	  public String updateReason(String bookingId, String reason) {
	   // TODO Auto-generated method stub
	   
	   JSONObject object = new JSONObject();
	   
	   ResultSet update = paymentGatewayDao.updateReason(bookingId,reason);
	   
	   
	   try{
	   if(update != null && update.next()){
	    
	    object.put("result", true);
	    object.put("accountId",SdcsPaymentGatewayConstants.ACCOUNT_ID);
	    object.put("SecretKey",SdcsPaymentGatewayConstants.SECRET_KEY);
	    object.put("amount",update.getString("returned_amount"));
	    object.put("paymentId",update.getString("paymentId"));
	    
	    
	   }else{
	    object.put("result", false);
	    
	   }
	   }catch(SQLException e){
	    e.printStackTrace();
	   }
	   
	   return object.toString();
	  }
	@Override
	public String saveSdcsMoneyDetails(SdcsPaymentDetails sdcsWebPayment) {
		// TODO Auto-generated method stub
		
		JSONObject object = new JSONObject();
		
		ResultSet inserted = paymentGatewayDao.saveSdcsMoneyDetails(sdcsWebPayment);
		
		try{
		if (inserted != null && inserted.next()){
			object.put("result",true);
			object.put("balance",inserted.getDouble("sdcs_money"));
			
			String cusSmsText = "%20Dear%20customer,you%20have%20successfully%20added%20Rs."+sdcsWebPayment.amount+"%20to%20your%20account.The%20current%20available%20balance%20is%20Rs."+inserted.getDouble("sdcs_money")+".Thanks%20SDCS.";
			
			SdcsSMSComponent.sendSms(sdcsWebPayment.billingPhone, cusSmsText);
			
			String adSmsText = ""+sdcsWebPayment.billingName+"%20has%20added%20Rs."+sdcsWebPayment.amount+"%20to%20his%20account%20"+sdcsWebPayment.merchantRefNo+".The%20current%20available%20balance%20is%20Rs."+inserted.getDouble("sdcs_money")+"";
			
			SdcsSMSComponent.sendSms("7411791422", adSmsText);
			SdcsSMSComponent.sendSms("9916168585", adSmsText);
			
			
			
			
			String sdcs_money_email = 
					"<h2 style='color:green;'>SDCS money addition confirmation</h2>"

					+"<h4>Dear "+sdcsWebPayment.billingName+",</h4>"

					+"<p>Just a quick update on the last activity you did on sdcs.me</p>"


					+"<table style='background-color:#00CCFF'>"
					+"<tr>"

					+"<td>"

					+"<h4>Yor account has been successfuly added with Rs."+sdcsWebPayment.amount+".</h4>"
					+"</td>"

					+"</tr>"

					+"<tr>"
					+"<td>"
					+"<p>The currently available balance is</p>"
					+"</td>"
					+"</tr>"
					+"<tr>"
					+"<td style='color:green'>"
					+"<h2>Rs."+inserted.getDouble("sdcs_money")+"</h2>"
					+"<td>"
					+"</tr>"
					+"<table>";
			SdcsEmailComponent.sendMail(sdcsWebPayment.billingEmail, "SDCS money update",sdcs_money_email,BigInteger.ZERO);
		
			
			String adminEmail="<h2 style='color:green;'>SDCS money addition Information</h2>"

+"<h4>Dear Admin,</h4>"

+"<p>SDCS money added by "+sdcsWebPayment.billingName+"</p>"


+"<table style='background-color:#00CCFF'>"
+"<tr>"

+"<td>"

+"<h4>"+sdcsWebPayment.billingName+"'s account has been successfully added with "+sdcsWebPayment.amount+".The register id is "+sdcsWebPayment.merchantRefNo+"</h4>"
+"</td>"

+"</tr>"

+"<tr>"
+"<td>"
+"<p>The currently available balance is</p>"
+"</td>"
+"</tr>"
+"<tr>"
+"<td style='color:green'>"

+"<h2>Rs."+inserted.getDouble("sdcs_money")+"</h2>"
+"<td>"
+"</tr>"
+"<table>";
			
			SdcsEmailComponent.sendMail("manjunathdl@gmail.com","SDCS money update",adminEmail,BigInteger.ZERO);
			SdcsEmailComponent.sendMail("bndsuresh12@gmail.com","SDCS money update",adminEmail,BigInteger.ZERO);
			SdcsEmailComponent.sendMail("chandusc128@gmail.com","SDCS money update",adminEmail,BigInteger.ZERO);
		}else{
			object.put("result",false);
			
		}
		
		}catch(SQLException e){
			
			e.printStackTrace();
		}
		
		return object.toString();
	}
	
		 @Override
	 public String addCancelMoneyToSdcs(BigInteger bookingId, double canAmount,String userId) {
	  // TODO Auto-generated method stub
	  
	  JSONObject object = new JSONObject();
	  
	 ResultSet set = paymentGatewayDao.addCancelMoneyToSdcs(bookingId,canAmount,userId);
	  
	 try{
	  if(set != null && set.next()){
	   
	   object.put("result", true);
	   object.put("balance", set.getDouble("sdcs_money"));
	   
	  }else{
	   
	   object.put("result", false);
	  }
	 }catch(SQLException e){
	  
	  e.printStackTrace();
	 }
	  return object.toString();
	 }
	}