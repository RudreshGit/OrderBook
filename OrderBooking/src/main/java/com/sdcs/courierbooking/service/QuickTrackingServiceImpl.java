package com.sdcs.courierbooking.service;

import java.math.BigInteger;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sdcs.courierbooking.dao.QuickTrackingDao;



/**
 * 
 * @author Dell
 * Providing implementation for all quick tracking functions
 */
@Service
public class QuickTrackingServiceImpl implements QuickTrackingService {

	@Autowired
	public QuickTrackingDao quickTrackingDao;

	/**
	 * Method to get tracking detail of a courier by tracking number
	 */
//	@Override
//	public JSONObject getTrackingDetails(BigInteger bookingTrackingNumber) {
//		
//		// Tracking details json object
//		JSONObject trackingJsonObject = new JSONObject();
//		
//		ResultSet addreesResultSet = quickTrackingDao.getTrackingDetailsById(bookingTrackingNumber);
//		
//		ResultSet officeAddressResultSet = quickTrackingDao.getOfficeAddressByBookingId(bookingTrackingNumber);
//		
//		ResultSet deliveryBoyResultSet = quickTrackingDao.getDeliveryBoyDetailsByBookingId(bookingTrackingNumber);
//		
//		try {
//			if(addreesResultSet != null && addreesResultSet.next() && officeAddressResultSet != null && officeAddressResultSet.next()) {
//				
//				trackingJsonObject.put("tracking_status", true);
//				
//				// Save address details to json object
//				trackingJsonObject.put("receiver_address",addreesResultSet.getString("receiver_address").trim());
//				trackingJsonObject.put("sender_address",addreesResultSet.getString("sender_address").trim());
//				trackingJsonObject.put("current_position_address",addreesResultSet.getString("current_position_address").trim());
//				trackingJsonObject.put("delivery_status",addreesResultSet.getString("delivery_taken"));
//				trackingJsonObject.put("estimated_Time","0");				
//				// Take data from office result set
//				trackingJsonObject.put("office_address",officeAddressResultSet.getString("office_address").trim());
//				
//				if(deliveryBoyResultSet != null && deliveryBoyResultSet.next()) {
//					// Take delivery boy details and assign to json object
//					trackingJsonObject.put("delivery_boy_full_name",deliveryBoyResultSet.getString("full_name").trim());
//					trackingJsonObject.put("delivery_boy_email_address",deliveryBoyResultSet.getString("email_address"));
//					trackingJsonObject.put("delivery_boy_mobile_number",deliveryBoyResultSet.getString("mobile_number"));
//					trackingJsonObject.put("delivery_boy_id",new BigInteger(Integer.valueOf(deliveryBoyResultSet.getInt("delivery_boy_id")).toString()));	
//				} 
//				
//				deliveryBoyResultSet.close();
//				addreesResultSet.close();
//				officeAddressResultSet.close();
//				
//			} else {
//				trackingJsonObject.put("tracking_status", false);
//			}
//		} catch (SQLException e) {
//			trackingJsonObject.put("tracking_status", false);
//		}
//		return trackingJsonObject;
//	}

	
	/**
	 * Method to get tracking detail of a courier by tracking number
	 */
	@Override
	public JSONObject getTrackingDetails(String bookingTrackingNumber) {
		
		// Tracking details json object
		JSONObject trackingJsonObject = new JSONObject();
		
		ResultSet trackingDetialsResultset = quickTrackingDao.getTrackingDetails(bookingTrackingNumber);
		
		try {
			if(trackingDetialsResultset != null && trackingDetialsResultset.next()) {
				
				trackingJsonObject.put("tracking_status", true);
				
				// Save address details to json object
				trackingJsonObject.put("receiver_address",trackingDetialsResultset.getString("receiver_address").trim());
				trackingJsonObject.put("sender_address",trackingDetialsResultset.getString("sender_address").trim());
				trackingJsonObject.put("current_position_address",trackingDetialsResultset.getString("current_position_address").trim());
				trackingJsonObject.put("delivery_status",trackingDetialsResultset.getString("delivery_taken"));
				trackingJsonObject.put("estimated_Time","0");				
				/*trackingJsonObject.put("office_address",trackingDetialsResultset.getString("office_address").trim());
				
			*/	// Take delivery boy details and assign to json object
				trackingJsonObject.put("delivery_boy_full_name",trackingDetialsResultset.getString("full_name").trim());
				trackingJsonObject.put("delivery_boy_email_address",trackingDetialsResultset.getString("email_address"));
				trackingJsonObject.put("delivery_boy_mobile_number",trackingDetialsResultset.getString("mobile_number"));
				trackingJsonObject.put("delivery_boy_id",new BigInteger(Integer.valueOf(trackingDetialsResultset.getInt("delivery_boy_id")).toString()));	
				
				trackingDetialsResultset.close();
				
			} else {
				trackingJsonObject.put("tracking_status", false);
			}
		} catch (SQLException e) {
			trackingJsonObject.put("tracking_status", false);
		}
		return trackingJsonObject;
	}

	
	
}
