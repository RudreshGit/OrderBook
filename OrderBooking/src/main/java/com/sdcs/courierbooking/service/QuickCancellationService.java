package com.sdcs.courierbooking.service;

import java.math.BigInteger;

import org.json.JSONObject;



/**
 * 
 * @author Dell
 * Interface to declare all quick cancellation functions 
 */
public interface QuickCancellationService {

	public JSONObject cancelCourier(String bookingTrackingNumber);

	public JSONObject getAllUndispatchedCouriers(BigInteger bigInteger);
	
}

