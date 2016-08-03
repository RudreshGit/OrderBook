package com.sdcs.courierbooking.service;

import org.json.JSONObject;



/**
 * 
 * @author Dell
 * Interface to declare all quick estimation functions 
 */
public interface QuickEstimationService {

	 public JSONObject estimate(boolean oneDay, boolean fourHour,boolean Airport, float kilo, float grams,float length,float width,float height, String strEstimationFor);
	 
	}