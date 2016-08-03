package com.sdcs.courierbooking.service;

import java.math.BigInteger;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sdcs.courierbooking.dao.QuickCancellationDao;



/**
 * 
 * @author Dell
 * Providing implementation for all quick cancellation functions
 */
@Service
public class QuickCancellationServiceImpl implements QuickCancellationService {

	@Autowired
	public QuickCancellationDao quickCancellationDao;

	/**
	 * Cancellation of booked courier
	 * true on successful cancellation otherwise false
	 */
	@Override
	public JSONObject cancelCourier(String bookingTrackingNumber) {
		// Cancellation status json object
		JSONObject cancellationJsonObject = new JSONObject();
		boolean cancelCourierStatus = quickCancellationDao.cancelCourier(bookingTrackingNumber);
		if(cancelCourierStatus) {
			
			cancellationJsonObject.put("cancellation_status", true);
			cancellationJsonObject.put("dispatched_already", false);
		} else {
			cancellationJsonObject.put("cancellation_status", false);
			cancellationJsonObject.put("dispatched_already", true);
		}
		return cancellationJsonObject;
	}

	
	/**
	 * getting all undispatched couriers
	 * to cancel
	 */
	
	@Override
	public JSONObject getAllUndispatchedCouriers(BigInteger userId) {
		JSONObject getCouriersJsonObject = new JSONObject();
		ResultSet Courierlists = quickCancellationDao.getAllUndispatchedCouriers(userId);
		if(Courierlists != null) {
			JSONArray courierslist = new JSONArray();
			try {
				while(Courierlists.next()) {
					JSONObject listOfCouriers = new JSONObject();
					listOfCouriers.put("booking_id", new BigInteger(Integer.valueOf(Courierlists.getInt("booking_id")).toString()));
					listOfCouriers.put("date_of_booking", Courierlists.getTimestamp("date_of_booking"));
					listOfCouriers.put("courier_content", Courierlists.getString("courier_content"));
					courierslist.put(listOfCouriers);
				}
				getCouriersJsonObject.put("status", true);
				getCouriersJsonObject.put("couriers", courierslist);
				Courierlists.close();
			} catch (SQLException e) {
				getCouriersJsonObject.put("status", false);
				}
			
		} else {
			getCouriersJsonObject.put("status", false);
		}
		return getCouriersJsonObject;

		
		// TODO Auto-generated method stub
		
	}
	

	
}
