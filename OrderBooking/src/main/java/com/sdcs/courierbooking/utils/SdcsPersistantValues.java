package com.sdcs.courierbooking.utils;

import com.sdcs.courierbooking.model.SdcsReceiver;
import com.sdcs.courierbooking.model.SdcsSender;

public class SdcsPersistantValues {

	public static String[] persistentValuesArray = new String[5];
	
	public static SdcsSender senderDetails = new SdcsSender();
	
	public static SdcsReceiver receiverDetails = new SdcsReceiver();
	
//	final String strFullName, final String strEmail, final String strMobile, final long trackingNumber, userId
	
	
	public static void setPersistantValues (String strFullName, String strEmail, String strMobile, String trackingNumber, String userId ) {
		persistentValuesArray[0] = strFullName;
		persistentValuesArray[1] = strEmail;
		persistentValuesArray[2] = strMobile;
		persistentValuesArray[3] = trackingNumber;
		persistentValuesArray[4] = userId;
		
	}
	
	
	public static String[] getPersitantValues() {
		return persistentValuesArray;
	}
	
	
	public static void setSdcsSender(SdcsSender sdcsSender) {
		senderDetails = sdcsSender;
	}
	
	public static void setSdcsReceiver(SdcsReceiver sdcsReceiver) {
		receiverDetails = sdcsReceiver;
	}
	
	public static SdcsSender getSenderDetails(){
		return senderDetails;
	}
	
	public static SdcsReceiver getReceiverDetails() {
		return receiverDetails;
	}
}
