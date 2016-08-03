/**
 * 
 */
package com.sdcs.courierbooking.utils;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;


/**
 * @author SDCS
 * This class sends an sms to the specified number
 */
public class SdcsSMSComponent {
	
	/*private static String SMS_GATEWAY_IP_ADDRESS = "http://203.212.70.200/smpp/sendsms?";
	private static String SMS_GATEWAY_USERNAME = "mengharaj";
	private static String SMS_GATEWAY_PASSWORD = "mengharaj2014";
	private static String SMS_GATEWAY_FROM = "MNGRAJ";
	@SuppressWarnings("unused")
	private static String SMS_GATEWAY_UDH = "";
	private static String SMS_GATEWAY_DLR_MASK = "19";
	@SuppressWarnings("unused")
	private static String SMS_GATEWAY_DLR_URL = "";
*/	
	
	private static String SMS_GATEWAY_IP_ADDRESS = "http://203.212.70.200/smpp/sendsms?";
	private static String SMS_GATEWAY_USERNAME = "SDCSME";
	private static String SMS_GATEWAY_PASSWORD = "SDCSME2015";
	private static String SMS_GATEWAY_FROM = "SDCSME";
	@SuppressWarnings("unused")
	private static String SMS_GATEWAY_UDH = "";
	private static String SMS_GATEWAY_DLR_MASK = "19";
	@SuppressWarnings("unused")
	private static String SMS_GATEWAY_DLR_URL = "";

	
	/**
	 * This method sends SMS to specified mobile number
	 * @return
	 */
	public static boolean sendSms(String toPhoneNumber, String strSmsText) {
		boolean smsSent = false;
		String strSmsHttpApi = 	SMS_GATEWAY_IP_ADDRESS 
								+ "username=" + SMS_GATEWAY_USERNAME
								+ "&password=" + SMS_GATEWAY_PASSWORD
								+ "&to=" + toPhoneNumber.trim()
								+ "&from=" + SMS_GATEWAY_FROM
								+ "&udh="
								+ "&text=" + strSmsText.trim()
								+ "&dlr-mask=" + SMS_GATEWAY_DLR_MASK
								+ "&dlr-url";
		
		// Executing API using java
		try {
			URL objUrl = new URL(strSmsHttpApi);
			
			HttpURLConnection objConnection = (HttpURLConnection) objUrl.openConnection();
			
			objConnection.getResponseCode();
			
			
			BufferedReader in = new BufferedReader(new InputStreamReader(objConnection.getInputStream()));
			String inputLine;
			StringBuffer response = new StringBuffer();
	 
			while ((inputLine = in.readLine()) != null) {
				response.append(inputLine);
			}
			in.close();
	 
			//print result
			
			if(response != null && response.toString().trim().equals("Sent.")) {
				smsSent = true;
			}
			
		} catch (MalformedURLException e) {
			smsSent = false;
			 e.printStackTrace();
		} catch (IOException e) {
			smsSent = false;
			 e.printStackTrace();
		}
		return smsSent;
	}
	
}
// A valid SMS http API
//http://203.212.70.200/smpp/sendsms?
//	username=mengharaj
//	&password=mengharaj2014
//	&to=7736474047
//	&from=MNGRAJ
//	&udh=
//	&text=Dear%20Patron%20-%20We%20are%20glad%20to%20receive%20your%20order.%20Kindly%20bring%20the%20order%20form%20while%20coming%20to%20collect%20the%20ornament.Menghraj%20and%20Bros.Ph:%20080-41463840
//	&dlr-mask=19
//	&dlr-url
