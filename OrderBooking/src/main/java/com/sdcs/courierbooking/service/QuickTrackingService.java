package com.sdcs.courierbooking.service;

import org.json.JSONObject;



/**
 * 
 * @author Dell
 * Interface to declare all quick tracking functions 
 */
public interface QuickTrackingService {

	public JSONObject getTrackingDetails(String bookingTrackingNumber);
	
}

