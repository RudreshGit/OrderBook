package com.sdcs.courierbooking.service;

import java.math.BigInteger;
import java.math.RoundingMode;
import java.security.NoSuchAlgorithmException;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import com.google.android.gcm.server.Constants;
import com.google.android.gcm.server.Message;
import com.google.android.gcm.server.MulticastResult;
import com.google.android.gcm.server.Result;
import com.google.android.gcm.server.Sender;

import java.io.IOException;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sdcs.courierbooking.dao.UserDao;
import com.sdcs.courierbooking.model.RestaurantRegistration;
import com.sdcs.courierbooking.model.SdcsDeliveryBoy;
import com.sdcs.courierbooking.model.SdcsDeliveryboyBooking;
import com.sdcs.courierbooking.model.SdcsUser;
import com.sdcs.courierbooking.utils.SdcsEmailComponent;
import com.sdcs.courierbooking.utils.SdcsHashProvider;
import com.sdcs.courierbooking.utils.SdcsPaymentGatewayConstants;
import com.sdcs.courierbooking.utils.SdcsPersistantValues;
import com.sdcs.courierbooking.utils.SdcsSMSComponent;

@Service
public class UserServiceImpl implements UserService {
	static final String MESSAGE_KEY = "message";
	@Autowired
	public UserDao userDao;

	/**
	 * This method sends data to DAO to save details in database
	 * 
	 * @param sdcsUser
	 * @return Json string for newly created user
	 */
	@Override
	public String registerUser(SdcsUser sdcsUser) {

		SdcsUser newUser = userDao.registerUser(sdcsUser);

		JSONObject registrationJsonObject = new JSONObject();

		if (newUser == null) {
			registrationJsonObject.put("result", false);
			registrationJsonObject
					.put("message",
							"Email Id already exists. Please choose different email address and try again!");
		} else {
			registrationJsonObject.put("result", true);
			registrationJsonObject.put("message", "Welcome to SDCS ");
			registrationJsonObject.put("user_id", sdcsUser.getUserId());
			registrationJsonObject.put("full_name", sdcsUser.getStrFullname());
			registrationJsonObject.put("email", sdcsUser.getStrEmail());
			registrationJsonObject.put("mobile", sdcsUser.getStrMobile());
			
			String strEmail = sdcsUser.getStrEmail();
			String strname = sdcsUser.getStrFullname();
			String strMobile = sdcsUser.getStrMobile();
			String mailBody = "<b>Dear "+strname+",</b>"
					+ "<br>"
					+ "<b><i> Thank you for choosing SDCS.</i></b>"
					+ "Thanks" + "<br>" + "SDCS Team" + "<br>"
					+ "info@sdcs.me";
			SdcsEmailComponent.sendMail(strEmail,
					"Welcome To SDCS", mailBody, BigInteger.ZERO);
			
			String strSmsText = "%20Welcome%20to%20SDCS%20"+strname+".%20Thank%20you%20for%20Choosing%20SDCS.%20";
			SdcsSMSComponent.sendSms(strMobile, strSmsText);
		}
		return registrationJsonObject.toString();
	}

	/**
	 * This method sends data to DAO to validate login details in database
	 * 
	 * @param sdcsUser
	 * @return Json string for authenticated user
	 */
	@Override
	public String authenticateUser(String strUsername, String strPassword) {

		SdcsUser sdcsUser = userDao.authenticateUser(strUsername, strPassword);
		JSONObject sdcsUserJson = new JSONObject();

		if (sdcsUser == null) {
			sdcsUserJson.put("result", false);
			sdcsUserJson
					.put("message",
							"Incorrect login details. Please try again.If you are new to SDCS please SignUp.");
		} else {
			sdcsUserJson.put("result", true);
			sdcsUserJson.put("message", "Welcome to SDCS...");
			sdcsUserJson.put("user_id", sdcsUser.getUserId());
			sdcsUserJson.put("full_name", sdcsUser.getStrFullname());
			sdcsUserJson.put("email", sdcsUser.getStrEmail());
			sdcsUserJson.put("mobile", sdcsUser.getStrMobile());
			sdcsUserJson.put("last_login", sdcsUser.getStrLastLogin());
			sdcsUserJson.put("isAdmin", false);
		}
		return sdcsUserJson.toString();
	}

	/**
	 * This method sends data to DAO to save details in database
	 * 
	 * @param sdcsUser
	 * @return Json string for newly created user
	 */
	@Override
	public String registerDeliveryBoy(SdcsDeliveryBoy sdcsDeliveryBoy) {

		SdcsDeliveryBoy newDeliveryBoy = userDao
				.registerDeliveryBoy(sdcsDeliveryBoy);

		JSONObject registrationJsonObject = new JSONObject();

		if (newDeliveryBoy == null) {
			registrationJsonObject.put("result", false);
			registrationJsonObject
					.put("message",
							"The mobile number is already registered with SDCS. Please register with different mobile number.");
		} else {
			try{
				String strEmail = sdcsDeliveryBoy.getEmailAddress();
				String strname = sdcsDeliveryBoy.getFullName();
				
				String mailBody = "<b>Dear "+strname+",</b>"
						+ "<br>"
						+ "<b><i> Thank you for being a part of SDCS.</i></b>"	
						+"<br>"
						+"<b> Your password is:"+sdcsDeliveryBoy.getAccessKey()+"<b>"
						+"<br>"
						+ "Thanks" + "<br>" + "SDCS Team" + "<br>"
						+ "info@sdcs.me";
				SdcsEmailComponent.sendMail(strEmail,
						"Welcome To SDCS", mailBody, BigInteger.ZERO);
				}catch(Exception e){
					
				}
			registrationJsonObject.put("result", true);
			registrationJsonObject.put("message",
					"Congratulations! registered successfully!");
			registrationJsonObject.put("user_id",
					newDeliveryBoy.getDeliveryBoyId());
			registrationJsonObject.put("full_name",
					newDeliveryBoy.getFullName());
			registrationJsonObject.put("email",
					newDeliveryBoy.getEmailAddress());
			registrationJsonObject.put("mobile",
					newDeliveryBoy.getMobileNumber());
			registrationJsonObject.put("driving_license_number",
					newDeliveryBoy.getDrivingLicenseNumber());
		}
		return registrationJsonObject.toString();
	}

	/**
	 * This method sends data to DAO to validate login details in database
	 * 
	 * @param sdcsUser
	 * @return Json string for authenticated user
	 */
	@Override
	public String authenticateDeliveryBoy(String strUsername, String strPassword,double langitude,double lattitude,String registrationid) {

		SdcsDeliveryBoy sdcsDeliveryBoy = userDao.authenticateDeliveryBoy(
				strUsername, strPassword,langitude,lattitude,registrationid);
		JSONObject sdcsUserJson = new JSONObject();

		if (sdcsDeliveryBoy == null) {
			sdcsUserJson.put("result", false);
			sdcsUserJson.put("message",
					"Incorrect login details. Please try again.");
		} else {
			sdcsUserJson.put("result", true);
			sdcsUserJson.put("message", "Login successful...!");
			sdcsUserJson.put("delivery_boy_id",sdcsDeliveryBoy.getDeliveryBoyId());
			sdcsUserJson.put("full_name", sdcsDeliveryBoy.getFullName().trim());
			sdcsUserJson.put("email", sdcsDeliveryBoy.getEmailAddress().trim());
			sdcsUserJson
					.put("mobile", sdcsDeliveryBoy.getMobileNumber().trim());
		/*	sdcsUserJson
			.put("loginId", sdcsDeliveryBoy.getloginId().trim());*/
		}
		return sdcsUserJson.toString();
	}

	@Override
	public String sendForgotPassword(String strcontact) {

		JSONObject responseJson = new JSONObject();
		ResultSet previousPass = userDao.getPassword(strcontact);
		try {
			if( previousPass != null && previousPass.next()) {
				String name = previousPass.getString("full_name");
				String strEmail = previousPass.getString("email_address");
				String passwordGot = previousPass.getString("access_key");
				
				
				String mailBody = "<b>Dear Customer,</b>"
						+ "<br>"
						+ "<b><i> Thank you for choosing SDCS.</i></b>"
						+ "<p> You have requested us for your forgot password and below are your credentials,</b>"
						+ "<br>" + "<p> Username: " + strcontact + "</p> <br>"
						+ "<p> Password: " + passwordGot + "</p> <br>"
						+ "Thanks" + "<br>" + "SDCS Team" + "<br>"
						+ "info@sdcs.me";			
				;
						
				SdcsEmailComponent.sendMail(strEmail,
						"SDCS - Password Recovery", mailBody, BigInteger.ZERO);
				
				String strSmsText = "%20Dear%20"+name+",%20Your%20registered%20password%20is%20"+passwordGot+".%20Thanking%20you%20SDCS.";
				
				SdcsSMSComponent.sendSms(strcontact, strSmsText);
				
				
				responseJson.put("status", true);
				responseJson.put("phone", strcontact);
				previousPass.close();
			}
		} catch (SQLException e) {
			responseJson.put("status", false);
		}

		return responseJson.toString();
		// TODO Auto-generated method stub

	}

	@Override
	public String userSuggestion(int inSelctionOne, int inSelctionTwo,
			String strmessage, String strEmail) {
		JSONObject responseJsonSuggest = new JSONObject();
		long resultofSuggest = userDao.saveSuggests(inSelctionOne,
				inSelctionTwo, strmessage, strEmail);
		if (resultofSuggest > 0) {
			responseJsonSuggest.put("status", true);
			responseJsonSuggest.put("message", "it is working");

		} else {
			responseJsonSuggest.put("status", false);
			responseJsonSuggest.put("message", "it is not working");
		}

		return responseJsonSuggest.toString();
		// TODO Auto-generated method stub

	}

	@Override
	public String authenticateAdmin(String strUsername, String strPassword) {

		SdcsUser sdcsUser = userDao.authenticateAdmin(strUsername, strPassword);
		JSONObject sdcsAdminJson = new JSONObject();

		if (sdcsUser == null) {
			sdcsAdminJson.put("result", false);
			sdcsAdminJson.put("message",
					"Incorrect login details. Please try again.");
		} else {
			sdcsAdminJson.put("result", true);
			sdcsAdminJson.put("message", "Welcome to SDCS...");
			sdcsAdminJson.put("user_id", sdcsUser.getUserId());
			sdcsAdminJson.put("full_name", sdcsUser.getStrFullname());
			sdcsAdminJson.put("email", sdcsUser.getStrEmail());
			sdcsAdminJson.put("mobile", sdcsUser.getStrMobile());
			sdcsAdminJson.put("type", sdcsUser.getStradmintype());
			sdcsAdminJson.put("isAdmin", true);

		}
		return sdcsAdminJson.toString();

	}

	@Override
	public String authenticateAdminDetails(String strAdminDate) {
		JSONObject sdcsAdminDetailsJson = new JSONObject();
		ResultSet resultsetAdmin = userDao
				.authenticateAdminDetails(strAdminDate);
		if (resultsetAdmin != null) {
			double oneDayCourier = 0;
			double oneDayCourierAmount = 0;
			double HtoHCourier = 0;
			double HtoHCourierAmount = 0;
			double fourHourCourier = 0;
			double fourHourCourierAmount = 0;
			double ConfidentialCourier = 0;
			double ConfidentialCourierAmount = 0;
			double airportCourier = 0;
			double airportCourierAmount = 0;
			double totalAmount = 0;
			double totalCourier = 0;
			double undispatchedoneDayCourier = 0;
			double undispatchedoneDayCourierAmount = 0;
			double undispatchedHtoHCourier = 0;
			double undispatchedHtoHCourierAmount = 0;
			double undispatchedfourHourCourier = 0;
			double undispatchedfourHourCourierAmount = 0;
			double undispatchedConfidentialCourier = 0;
			double undispatchedConfidentialCourierAmount = 0;
			double undispatchedairportCourier = 0;
			double undispatchedairportCourierAmount = 0;
			double undispatchedtotalAmount = 0;
			double undispatchedtotalCourier = 0;
			double dispatchedoneDayCourier = 0;
			double dispatchedoneDayCourierAmount = 0;
			double dispatchedHtoHCourier = 0;
			double dispatchedHtoHCourierAmount = 0;
			double dispatchedfourHourCourier = 0;
			double dispatchedfourHourCourierAmount = 0;
			double dispatchedConfidentialCourier = 0;
			double dispatchedConfidentialCourierAmount = 0;
			double dispatchedairportCourier = 0;
			double dispatchedairportCourierAmount = 0;
			double dispatchedtotalAmount = 0;
			double dispatchedtotalCourier = 0;
			double deliveredoneDayCourier = 0;
			double deliveredoneDayCourierAmount = 0;
			double deliveredHtoHCourier = 0;
			double deliveredHtoHCourierAmount = 0;
			double deliveredfourHourCourier = 0;
			double deliveredfourHourCourierAmount = 0;
			double deliveredConfidentialCourier = 0;
			double deliveredConfidentialCourierAmount = 0;
			double deliveredairportCourier = 0;
			double deliveredairportCourierAmount = 0;
			double deliveredtotalAmount = 0;
			double deliveredtotalCourier = 0;

			try {
				while (resultsetAdmin.next()) {
					if (resultsetAdmin.getByte("deliver_in_one_day") == 1) {
						oneDayCourier += 1;
						oneDayCourierAmount += resultsetAdmin
								.getDouble("total_amount");
						if (resultsetAdmin.getInt("delivery_taken") == 1) {
							dispatchedoneDayCourier += 1;
							dispatchedoneDayCourierAmount += resultsetAdmin
									.getDouble("total_amount");
						} else if (resultsetAdmin.getInt("delivery_taken") == 0) {
							undispatchedoneDayCourier += 1;
							undispatchedoneDayCourierAmount += resultsetAdmin
									.getDouble("total_amount");
						} else {
							deliveredoneDayCourier += 1;
							deliveredoneDayCourierAmount += resultsetAdmin
									.getDouble("total_amount");
						}
					} else if (resultsetAdmin.getByte("deliver_in_four_hour") == 1) {
						fourHourCourier += 1;
						fourHourCourierAmount += resultsetAdmin
								.getDouble("total_amount");
						if (resultsetAdmin.getInt("delivery_taken") == 1) {
							dispatchedfourHourCourier += 1;
							dispatchedfourHourCourierAmount += resultsetAdmin
									.getDouble("total_amount");
						} else if (resultsetAdmin.getInt("delivery_taken") == 0) {
							undispatchedfourHourCourier += 1;
							undispatchedfourHourCourierAmount += resultsetAdmin
									.getDouble("total_amount");
						} else {
							deliveredfourHourCourier += 1;
							deliveredfourHourCourierAmount += resultsetAdmin
									.getDouble("total_amount");
						}

					} else if (resultsetAdmin.getByte("confidential_delivery") == 1) {
						ConfidentialCourier += 1;
						ConfidentialCourierAmount += resultsetAdmin
								.getDouble("total_amount");
						if (resultsetAdmin.getInt("delivery_taken") == 1) {
							dispatchedConfidentialCourier += 1;
							dispatchedConfidentialCourierAmount += resultsetAdmin
									.getDouble("total_amount");
						} else if (resultsetAdmin.getInt("delivery_taken") == 0) {
							undispatchedConfidentialCourier += 1;
							undispatchedConfidentialCourierAmount += resultsetAdmin
									.getDouble("total_amount");
						} else {
							deliveredConfidentialCourier += 1;
							deliveredConfidentialCourierAmount += resultsetAdmin
									.getDouble("total_amount");
						}

					} else if (resultsetAdmin
							.getByte("price_for_Airport_delivery") == 1) {
						airportCourier += 1;
						airportCourierAmount += resultsetAdmin
								.getDouble("total_amount");
						if (resultsetAdmin.getInt("delivery_taken") == 1) {
							dispatchedairportCourier += 1;
							dispatchedairportCourierAmount += resultsetAdmin
									.getDouble("total_amount");
						} else if (resultsetAdmin.getInt("delivery_taken") == 0) {
							undispatchedairportCourier += 1;
							undispatchedairportCourierAmount += resultsetAdmin
									.getDouble("total_amount");
						} else {
							deliveredairportCourier += 1;
							deliveredairportCourierAmount += resultsetAdmin
									.getDouble("total_amount");
						}

					} else if (resultsetAdmin.getByte("deliver_hand_to_hand") == 1) {
						HtoHCourier += 1;
						HtoHCourierAmount += resultsetAdmin
								.getDouble("total_amount");
						if (resultsetAdmin.getInt("delivery_taken") == 1) {
							dispatchedHtoHCourier += 1;
							dispatchedHtoHCourierAmount += resultsetAdmin
									.getDouble("total_amount");
						} else if (resultsetAdmin.getInt("delivery_taken") == 0) {
							undispatchedHtoHCourier += 1;
							undispatchedHtoHCourierAmount += resultsetAdmin
									.getDouble("total_amount");
						} else {
							deliveredHtoHCourier += 1;
							deliveredHtoHCourierAmount += resultsetAdmin
									.getDouble("total_amount");
						}

					}
					totalCourier += 1;
					totalAmount += resultsetAdmin.getDouble("total_amount");
					if (resultsetAdmin.getInt("delivery_taken") == 1) {
						dispatchedtotalCourier += 1;
						dispatchedtotalAmount += resultsetAdmin
								.getDouble("total_amount");
					} else if (resultsetAdmin.getInt("delivery_taken") == 0) {
						undispatchedtotalCourier += 1;
						undispatchedtotalAmount += resultsetAdmin
								.getDouble("total_amount");
					} else {
						deliveredtotalCourier += 1;
						deliveredtotalAmount += resultsetAdmin
								.getDouble("total_amount");
					}

				}
				resultsetAdmin.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
			JSONArray bookedhistories = new JSONArray();

			JSONObject history = new JSONObject();
			history.put("deliver_in_one_day", Double.valueOf(oneDayCourier)
					.toString());
			history.put("deliver_in_four_hour", Double.valueOf(fourHourCourier)
					.toString());
			history.put("confidential_delivery",
					Double.valueOf(ConfidentialCourier).toString());
			history.put("price_for_Airport_delivery",
					Double.valueOf(airportCourier).toString());
			history.put("deliver_hand_to_hand", Double.valueOf(HtoHCourier)
					.toString());
			history.put("oneDayCourierAmount",
					Double.valueOf(oneDayCourierAmount).toString());
			history.put("HtoHCourierAmount", Double.valueOf(HtoHCourierAmount)
					.toString());
			history.put("fourHourCourierAmount",
					Double.valueOf(fourHourCourierAmount).toString());
			history.put("ConfidentialCourierAmount",
					Double.valueOf(ConfidentialCourierAmount).toString());
			history.put("airportCourierAmount",
					Double.valueOf(airportCourierAmount).toString());
			history.put("totalAmount", Double.valueOf(totalAmount).toString());
			history.put("totalCourier", Double.valueOf(totalCourier).toString());
			history.put("discription", "Booked Couriers");
			history.put("discriptiona", "4");
			bookedhistories.put(history);

			JSONObject historya = new JSONObject();
			historya.put("deliver_in_one_day",
					Double.valueOf(dispatchedoneDayCourier).toString());
			historya.put("deliver_in_four_hour",
					Double.valueOf(dispatchedfourHourCourier).toString());
			historya.put("confidential_delivery",
					Double.valueOf(dispatchedConfidentialCourier).toString());
			historya.put("price_for_Airport_delivery",
					Double.valueOf(dispatchedairportCourier).toString());
			historya.put("deliver_hand_to_hand",
					Double.valueOf(dispatchedHtoHCourier).toString());
			historya.put("oneDayCourierAmount",
					Double.valueOf(dispatchedoneDayCourierAmount).toString());
			historya.put("HtoHCourierAmount",
					Double.valueOf(dispatchedHtoHCourierAmount).toString());
			historya.put("fourHourCourierAmount",
					Double.valueOf(dispatchedfourHourCourierAmount).toString());
			historya.put("ConfidentialCourierAmount",
					Double.valueOf(dispatchedConfidentialCourierAmount)
							.toString());
			historya.put("airportCourierAmount",
					Double.valueOf(dispatchedairportCourierAmount).toString());
			historya.put("totalAmount", Double.valueOf(dispatchedtotalAmount)
					.toString());
			historya.put("totalCourier", Double.valueOf(dispatchedtotalCourier)
					.toString());
			historya.put("discription", "Inprogress Couriers");
			historya.put("discriptiona", "0");
			bookedhistories.put(historya);

			JSONObject historyb = new JSONObject();
			historyb.put("deliver_in_one_day",
					Double.valueOf(undispatchedoneDayCourier).toString());
			historyb.put("deliver_in_four_hour",
					Double.valueOf(undispatchedfourHourCourier).toString());
			historyb.put("confidential_delivery",
					Double.valueOf(undispatchedConfidentialCourier).toString());
			historyb.put("price_for_Airport_delivery",
					Double.valueOf(undispatchedairportCourier).toString());
			historyb.put("deliver_hand_to_hand",
					Double.valueOf(undispatchedHtoHCourier).toString());
			historyb.put("oneDayCourierAmount",
					Double.valueOf(undispatchedoneDayCourierAmount).toString());
			historyb.put("HtoHCourierAmount",
					Double.valueOf(undispatchedHtoHCourierAmount).toString());
			historyb.put("fourHourCourierAmount",
					Double.valueOf(undispatchedfourHourCourierAmount)
							.toString());
			historyb.put("ConfidentialCourierAmount",
					Double.valueOf(undispatchedConfidentialCourierAmount)
							.toString());
			historyb.put("airportCourierAmount",
					Double.valueOf(undispatchedairportCourierAmount).toString());
			historyb.put("totalAmount", Double.valueOf(undispatchedtotalAmount)
					.toString());
			historyb.put("totalCourier",
					Double.valueOf(undispatchedtotalCourier).toString());
			historyb.put("discription", "Undispatched Couriers");
			historyb.put("discriptiona", "1");
			bookedhistories.put(historyb);

			JSONObject historyc = new JSONObject();
			historyc.put("deliver_in_one_day",
					Double.valueOf(deliveredoneDayCourier).toString());
			historyc.put("deliver_in_four_hour",
					Double.valueOf(deliveredfourHourCourier).toString());
			historyc.put("confidential_delivery",
					Double.valueOf(deliveredConfidentialCourier).toString());
			historyc.put("price_for_Airport_delivery",
					Double.valueOf(deliveredairportCourier).toString());
			historyc.put("deliver_hand_to_hand",
					Double.valueOf(deliveredHtoHCourier).toString());
			historyc.put("oneDayCourierAmount",
					Double.valueOf(deliveredoneDayCourierAmount).toString());
			historyc.put("HtoHCourierAmount",
					Double.valueOf(deliveredHtoHCourierAmount).toString());
			historyc.put("fourHourCourierAmount",
					Double.valueOf(deliveredfourHourCourierAmount).toString());
			historyc.put("ConfidentialCourierAmount",
					Double.valueOf(deliveredConfidentialCourierAmount)
							.toString());
			historyc.put("airportCourierAmount",
					Double.valueOf(deliveredairportCourierAmount).toString());
			historyc.put("totalAmount", Double.valueOf(deliveredtotalAmount)
					.toString());
			historyc.put("totalCourier", Double.valueOf(deliveredtotalCourier)
					.toString());
			historyc.put("discription", "Delivered Couriers");
			historyc.put("discriptiona", "2");
			bookedhistories.put(historyc);

			sdcsAdminDetailsJson.put("couriersCalculations", bookedhistories);
			sdcsAdminDetailsJson.put("status", true);

			// TODO Auto-generated method stub

		} else {
			sdcsAdminDetailsJson.put("status", false);
		}
		return sdcsAdminDetailsJson.toString();
	}

	@Override
	public String adminBookedDetails(String strAdminDate,
			Integer intStatusOfOption) {
		ResultSet resultsetAdminBookedDetails = userDao.adminBookedDetails(
				strAdminDate, intStatusOfOption);
		// TODO Auto-generated method stub
		JSONObject historyJsonBookedDetails = new JSONObject();
		if (resultsetAdminBookedDetails != null) {
			JSONArray histories = new JSONArray();
			try {
				while (resultsetAdminBookedDetails.next()) {
					JSONObject bookedHistory = new JSONObject();
					bookedHistory.put(
							"booking_id",
							new BigInteger(Integer.valueOf(
									resultsetAdminBookedDetails
											.getInt("booking_id")).toString()));
					bookedHistory.put("date_of_booking",
							resultsetAdminBookedDetails
									.getTimestamp("date_of_booking"));
					bookedHistory.put("courier_content",
							resultsetAdminBookedDetails
									.getString("courier_content"));
					bookedHistory.put("receiver_name",
							resultsetAdminBookedDetails
									.getString("receiver_name"));
					bookedHistory.put("receiver_address",
							resultsetAdminBookedDetails
									.getString("receiver_address"));
					bookedHistory.put("receiver_landmark",
							resultsetAdminBookedDetails
									.getString("receiver_landmark"));
					bookedHistory.put("receiver_pincode",
							resultsetAdminBookedDetails
									.getString("receiver_pincode"));
					bookedHistory.put("receiver_phone",
							resultsetAdminBookedDetails
									.getString("receiver_phone"));
					bookedHistory.put("receiver_email",
							resultsetAdminBookedDetails
									.getString("receiver_mail"));
					bookedHistory.put(
							"office_id",
							new BigInteger(Integer.valueOf(
									resultsetAdminBookedDetails
											.getInt("office_id")).toString()));
					bookedHistory.put("office_name",
							resultsetAdminBookedDetails
									.getString("office_name"));
					bookedHistory.put("office_address",
							resultsetAdminBookedDetails
									.getString("office_address"));
					bookedHistory.put("total_amount",
							resultsetAdminBookedDetails.getInt("total_amount"));
					bookedHistory.put("deliver_in_one_day",
							resultsetAdminBookedDetails
									.getInt("deliver_in_one_day"));
					bookedHistory.put("deliver_in_four_hour",
							resultsetAdminBookedDetails
									.getInt("deliver_in_four_hour"));
					bookedHistory.put("deliver_hand_to_hand",
							resultsetAdminBookedDetails
									.getInt("deliver_hand_to_hand"));
					bookedHistory.put("confidential_delivery",
							resultsetAdminBookedDetails
									.getInt("confidential_delivery"));
					bookedHistory.put("price_for_Airport_delivery",
							resultsetAdminBookedDetails
									.getInt("price_for_Airport_delivery"));

					histories.put(bookedHistory);
				}
				historyJsonBookedDetails.put("status", true);
				historyJsonBookedDetails.put("booked_couriers", histories);
				resultsetAdminBookedDetails.close();
			} catch (SQLException e) {
				historyJsonBookedDetails.put("status", false);

				try {
					resultsetAdminBookedDetails.close();
				} catch (SQLException sqlEx) {
					System.out.println("Exception in QuickHistoryServerImpl");
				}

			} finally {
				try {
					resultsetAdminBookedDetails.close();
				} catch (SQLException e) {
					System.out.println("Exception in QuickHistoryServerImpl");
				}
			}

		} else {
			historyJsonBookedDetails.put("status", false);
		}
		return historyJsonBookedDetails.toString();

	}

	@Override
	public String bulkCouriers(String strBulkName, String strBulkMobile,
			String strBulkEmail) {
		JSONObject responseJsonBulk = new JSONObject();
		long resultofBulk = userDao.bulkCouriers(strBulkName, strBulkMobile,
				strBulkEmail);
		if (resultofBulk > 0) {

			String mailBody = "<b>Dear "+strBulkName+",</b>" + "<br>"
					+ "<b><i> Thank you for choosing SDCS.</i></b>"
					+ "<p> we will get back to you soon.</b>" + "<br>"
					+ "Thanks" + "<br>" + "SDCS Team" + "<br>" + "info@sdcs.me";
			
			SdcsEmailComponent.sendMail(strBulkEmail,
					"SDCS - Bulk Orders", mailBody, BigInteger.ZERO);
 			String strSmsText = "%20Welcome%20to%20SDCS%20"+strBulkName+".%20Thank%20you%20for%20Choosing%20SDCS.%20";
			SdcsSMSComponent.sendSms(strBulkMobile, strSmsText);
			responseJsonBulk.put("status", true);
			responseJsonBulk.put("strname", strBulkName);
			responseJsonBulk.put("strMobile", strBulkMobile);
			responseJsonBulk.put("strEmail", strBulkEmail);
		} else {
			responseJsonBulk.put("status", false);

		}

		return responseJsonBulk.toString();
		// TODO Auto-generated method stub

	}

	@Override
	public String adminBulk(String strBulkAdminDAta) {
		JSONObject sdcsBulkDetailsJson = new JSONObject();
		ResultSet resultsetDeliveryBoyAdmin = userDao.adminBulkOrder(strBulkAdminDAta);
		// TODO Auto-generated method stub
		if (resultsetDeliveryBoyAdmin != null) {

			JSONArray bulkorderList = new JSONArray();
			{
				try {
					while (resultsetDeliveryBoyAdmin.next()) {
						JSONObject bulkdHistory = new JSONObject();
						bulkdHistory.put("date_of_request",
								resultsetDeliveryBoyAdmin.getTimestamp("date_of_request"));
						bulkdHistory.put("bulk_name",
								resultsetDeliveryBoyAdmin.getString("bulk_name"));
						bulkdHistory.put("bulk_number",
								resultsetDeliveryBoyAdmin.getString("bulk_number"));
						bulkdHistory.put("bulk_email",
								resultsetDeliveryBoyAdmin.getString("bulk_email"));

						bulkorderList.put(bulkdHistory);

					}
					sdcsBulkDetailsJson.put("status", true);
					sdcsBulkDetailsJson.put("bulk_couriers", bulkorderList);
					resultsetDeliveryBoyAdmin.close();
				} catch (SQLException e) {
					sdcsBulkDetailsJson.put("status", false);

					try {
						resultsetDeliveryBoyAdmin.close();
					} catch (SQLException sqlEx) {
						System.out.println("Exception in QuickHistoryServerImpl");
					}

				} finally {
					try {
						resultsetDeliveryBoyAdmin.close();
					} catch (SQLException e) {
						System.out
								.println("Exception in QuickHistoryServerImpl");
					}
				}

			}

		} else {
			sdcsBulkDetailsJson.put("status", false);
		}
		return sdcsBulkDetailsJson.toString();
	}

	/*
	 * this method is is called to get couriers boy current positions(tracking)
	 * for handToHand or nearest offices for the normal courier options in
	 * mobile applications
	 */
	@Override
	public String deliveryBoyLogin(Integer HtHorNml) {
		JSONObject deliveryTracking = new JSONObject();
		ResultSet resultsettracking = userDao.deliveryBoyLogin(HtHorNml);
		JSONArray trackingArray = new JSONArray();
		if (resultsettracking != null)
			try {
				while (resultsettracking.next()) {
					JSONObject tracking = new JSONObject();
					if (HtHorNml == 2) {
						tracking.put("user_id",
								resultsettracking.getInt("user_id"));
					} else {
						tracking.put("user_id",
								resultsettracking.getInt("office_id"));
					}
					tracking.put("latitude",
							resultsettracking.getDouble("latitude"));
					tracking.put("longitude",
							resultsettracking.getDouble("longitude"));
					trackingArray.put(tracking);
				}
				deliveryTracking.put("status", true);
				deliveryTracking.put("tracking", trackingArray);
				resultsettracking.close();
			} catch (SQLException e) {
				deliveryTracking.put("status", false);

				try {
					resultsettracking.close();
				} catch (SQLException sqlEx) {
					System.out.println("Exception in QuickHistoryServerImpl");
				}

			} finally {
				try {
					resultsettracking.close();
				} catch (SQLException e) {
					System.out.println("Exception in QuickHistoryServerImpl");
				}
			}

		else {
			deliveryTracking.put("status", false);
		}
		return deliveryTracking.toString();
	}

	/*
	 * this method gets the office details
	 * 
	 * for the selected office id in normal courier in mobile application
	 */
	@Override
	public String toGetOfficeDetails(String office_id) {

		// Executing query to get all offices based on filter strings
		ResultSet officesResultSet = userDao.toGetOfficeDetails(office_id);

		// Object to contain search results
		JSONObject foundOfficesRootJson = new JSONObject();
		JSONArray officesJsonArray = new JSONArray(); // Array to contain each
														// office json object
		// Iterating result set
		if (officesResultSet != null) {
			try {
				while (officesResultSet.next()) {
					JSONObject office = new JSONObject();
					office.put("office_name",
							officesResultSet.getString("office_name"));
					office.put("office_address",
							officesResultSet.getString("office_address"));
					office.put("office_contact_details", officesResultSet
							.getString("office_contact_details"));
					office.put("office_available_time",
							officesResultSet.getString("office_available_time"));
					office.put("office_area_name",
							officesResultSet.getString("office_area_name"));
					officesJsonArray.put(office);
				}
				officesResultSet.close();
				foundOfficesRootJson.put("result", true);
				foundOfficesRootJson.put("offices", officesJsonArray);
			} catch (SQLException e) {
				foundOfficesRootJson.put("result", false);
				foundOfficesRootJson.put("offices", officesJsonArray);
				if (officesResultSet != null) {
					try {
						officesResultSet.close();
					} catch (SQLException e1) {
						System.out.println("Exception in BookingServiceImpl");
					}
				}

			}
		} else {
			foundOfficesRootJson.put("result", false);
			foundOfficesRootJson.put("offices", officesJsonArray);
		}
		System.out.println("office details in serviceImpl");
		return foundOfficesRootJson.toString();
	}

	@Override
	public String foodPickUpUserRegister(SdcsUser sdcsUser) {
		long newUser = userDao.foodPickUpUserRegister(sdcsUser);

		JSONObject registrationJsonObject = new JSONObject();

		if (newUser<=0) {
			registrationJsonObject.put("result", false);
			registrationJsonObject
					.put("message",
							"Username already exists. Please choose different email address and try again!");
		} else {
			String foodTrackingId=""+newUser;
			registrationJsonObject.put("result", true);
			registrationJsonObject.put("message",
					"Congratulations! registered successfully");
			registrationJsonObject.put("tracking_id", foodTrackingId);
			/*
			 * registrationJsonObject.put("user_id", sdcsUser.getUserId());
			 * registrationJsonObject.put("full_name",
			 * sdcsUser.getStrFullname()); registrationJsonObject.put("email",
			 * sdcsUser.getStrEmail()); registrationJsonObject.put("mobile",
			 * sdcsUser.getStrMobile());
			 * registrationJsonObject.put("homeAddress",
			 * sdcsUser.getStrHomeAddress());
			 * registrationJsonObject.put("officeAddress",
			 * sdcsUser.getStrOfficeAddress()); String
			 * abcd=sdcsUser.getStrOfficeAddress();
			 * System.out.println("SERVICE"+" "+abcd);
			 * 
			 * 
			 */
			
			/*String strName =  sdcsUser.getStrFullname();
			String strEmail =  sdcsUser.getStrEmail();
			String mailBody = "<b>Dear "+strName+",</b>" + "<br>"
					+ "<b><i> You have Succesfully Registered With SDCS Pick My Carrier.</i></b>"+ "<br>" 
					+ "Thanks" + "<br>" + "SDCS Team" + "<br>" + "info@sdcs.me";
			
			SdcsEmailComponent.sendMail(strEmail,
					"SDCS - Bulk Orders", mailBody, BigInteger.ZERO);

			
			String strMobile = sdcsUser.getStrMobile();
			String strSmsText = "Dear%20Patron%20-%20We%20are%20glad%20to%20receive%20your%20order.%20Kindly%20bring%20the%20order%20form%20while%20coming%20to%20collect%20the%20ornament.Menghraj%20and%20Bros.Ph:%20080-41463840";
			SdcsSMSComponent.sendSms(strMobile, strSmsText);
*/
		}
		return registrationJsonObject.toString();
	}

	@Override
	public JSONObject foodPickUpSelectPackage(SdcsUser sdcsUser,String strTrackingId,boolean oneMonth,
			boolean threeMonth, boolean sixMonth, boolean oneYear) {

		JSONObject estimatedDetailsJson = new JSONObject();
		String priceOfPackage = "0.0";

		ResultSet foodPickUpPackage = userDao.foodPikUpPackage();
		try {
			if (foodPickUpPackage != null && foodPickUpPackage.next()) {
				estimatedDetailsJson.put("Package_selected", true);
				
				if (oneMonth) {
					priceOfPackage = foodPickUpPackage.getString("one_month");
				}
				if (threeMonth) {
					priceOfPackage = foodPickUpPackage.getString("three_months");
				}
				if (sixMonth) {
					priceOfPackage = foodPickUpPackage.getString("six_months");
				}
				if (oneYear) {
					priceOfPackage = foodPickUpPackage.getString("one_year");
				}

				estimatedDetailsJson.put("estimation_status", true);
				estimatedDetailsJson.put("estimated_amount", priceOfPackage);
      			foodPickUpPackage.close();
				System.out.println("service" + " " + priceOfPackage);

			}

		} catch (SQLException e) {
			estimatedDetailsJson.put("estimation_status", false);
			estimatedDetailsJson.put("estimated_amount", 0);
		}
		
		/*SdcsUser sdcsUser= new SdcsUser();
		String strName =  sdcsUser.getStrFullname();
		String strEmail =  sdcsUser.getStrEmail();
		*/
		Date date = new Date();
		String strName =  sdcsUser.getStrFullname();
		String strEmail =  sdcsUser.getStrEmail();
		String strMobile =  sdcsUser.getStrMobile();
		String strHomeaddrss =  sdcsUser.getStrHomeAddress();
		
		
		String referenceNo = "00"+strTrackingId + date.getTime();
		
		estimatedDetailsJson.put("account_id", SdcsPaymentGatewayConstants.ACCOUNT_ID);
		estimatedDetailsJson.put("address", strHomeaddrss);
		estimatedDetailsJson.put("amount", priceOfPackage);
		//couriersObject.put("amount", "13.0");
		estimatedDetailsJson.put("channel", SdcsPaymentGatewayConstants.CHANNEL);
		estimatedDetailsJson.put("city", "Bangalore");
		estimatedDetailsJson.put("country", SdcsPaymentGatewayConstants.COUNTRY);
		estimatedDetailsJson.put("currency", SdcsPaymentGatewayConstants.CURRENCY);
		estimatedDetailsJson.put("description", "Make payment for new courier");
		estimatedDetailsJson.put("email", strEmail);
		estimatedDetailsJson.put("mode", SdcsPaymentGatewayConstants.MODE);
		estimatedDetailsJson.put("name", strName);
		estimatedDetailsJson.put("page_id", "2197");
		estimatedDetailsJson.put("phone", strMobile);
		estimatedDetailsJson.put("postal_code", "000000");
		estimatedDetailsJson.put("reference_no", referenceNo);
		estimatedDetailsJson.put("return_url", SdcsPaymentGatewayConstants.RETURN_URL);
		estimatedDetailsJson.put("state", "Karnataka");

		
		String md5HashData = SdcsPaymentGatewayConstants.SECRET_KEY
							+ "|" + SdcsPaymentGatewayConstants.ACCOUNT_ID
							+ "|" + strHomeaddrss
							+ "|" + priceOfPackage 
							//+ "|" + "13.0" 
							+ "|" + SdcsPaymentGatewayConstants.CHANNEL
							+ "|" + "Bangalore"
							+ "|" + SdcsPaymentGatewayConstants.COUNTRY
							+ "|" + SdcsPaymentGatewayConstants.CURRENCY
							+ "|" + "Make payment for new courier"
							+ "|" + strEmail
							+ "|" + SdcsPaymentGatewayConstants.MODE
							+ "|" + strName
							+ "|" + "2197"
							+ "|" + strMobile
							+ "|" + "000000"
							+ "|" + referenceNo
							+ "|" + SdcsPaymentGatewayConstants.RETURN_URL
							+ "|" + "Karnataka";
		
		String UserId="ff";
		
		System.out.println("Values Before Hashing:" + md5HashData);
		
		SdcsPersistantValues.setPersistantValues(strName, strEmail, strMobile, strTrackingId+"", UserId);
	
		estimatedDetailsJson.put("hash_values", md5HashData);
							
		String hasedValue;
		try {
			hasedValue = SdcsHashProvider.generateMd5Hash(md5HashData);
			estimatedDetailsJson.put("secure_hash", hasedValue);
			System.out.println("Values After Hashing:" + hasedValue);
		} catch (NoSuchAlgorithmException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return estimatedDetailsJson;

	}

	@Override
	public String deliveryBoyBooking(String contactNumber,String drestorantName, Double lat,
			Double longitude) {
		
		String newCOurier = userDao.foodPickUpUserRegister(contactNumber,drestorantName,lat,longitude);

		JSONObject newCourierJsonObject = new JSONObject();

		if (newCOurier == null) {
			newCourierJsonObject.put("result", false);
			
			
		} else {
			
			
			String strSmsText = "M/S%20"+drestorantName+"%20your%20delivery%20boy%20booking%20has%20been%20confirmed%20&%20your%20reference%20number%20is%20"+newCOurier+".Our%20delivery%20boy%20will%20pick%20the%20consignment%20shortly.Thank%20you.";
			SdcsSMSComponent.sendSms(contactNumber, strSmsText);
			String strSmsTexta = "A%20new%20delivery%20boy%20booking%20is%20done%20from%20"+drestorantName+".%20Reference%20id%20is%20"+newCOurier+".Contact%20number%20is%20"+contactNumber+".";
			SdcsSMSComponent.sendSms("9535337626", strSmsTexta);
			SdcsSMSComponent.sendSms("9916168585", strSmsTexta);
			newCourierJsonObject.put("trackingNumber", newCOurier);
			newCourierJsonObject.put("result", true);
			
			DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
			Date date = new Date();
			
			
			String body="<div>"

+"<h4 style='color:navy'>Dear Admin.,</h4><br>"

+"<p Style='color:orange'>New Delivery Boy Booking from the following Details</p><br>"

+"<table style='border:1px solid blue;border-collapse: collapse;'>"
+"<tr style='color:red;border:1px solid blue'>"

+"<th style='border:1px solid blue'>"
+"Time"
+"</th>"
+"<th style='border:1px solid blue'>"
+"Order Id"
+"</th>"
+"<th style='border:1px solid blue'>"
+"Restaurant name"
+"</th>"
+"<th style='border:1px solid blue'>"
+"Contact Number"
+"</th>"
+"</tr>"

+"<tr>"

+"<td style='border:1px solid blue;color:blue;'>"+dateFormat.format(date)+"</td>"
+"<td style='border:1px solid blue;color:blue;'>"+newCOurier+"</td>"
+"<td style='border:1px solid blue;color:blue;'>"+drestorantName+"</td>"
+"<td style='border:1px solid blue;color:blue;'>"+contactNumber+"</td>"

+"</tr>"
+"</table><br>"
+"<p>Thank you</p>"
+"</div>";
			
			SdcsEmailComponent.sendMail("sdcs2me@gmail.com", "DELIVERY BOY BOOKING", body, BigInteger.ZERO);
			
		// TODO Auto-generated method stub
		
	}

	
	return newCourierJsonObject.toString();

}

	@Override
	public String deliveryBoyBookingss(String logoutTime) {
		
		
		boolean deliveryBoyLogoutTime= userDao.foodPickUpUserRegisterss(logoutTime);
		JSONObject logoutTimeObject = new JSONObject();

		if (deliveryBoyLogoutTime == false) {
			logoutTimeObject.put("result", false);
			
		} else {
			
			logoutTimeObject.put("result", true);
		}
		return logoutTimeObject.toString();
		
	}
	@Override
	public String deliveryBoyBookings(String logoutTime,Double lon,Double latti) {
		
		
		boolean deliveryBoyLogoutTime= userDao.foodPickUpUserRegisters(logoutTime,lon,latti);
		JSONObject logoutTimeObject = new JSONObject();

		if (deliveryBoyLogoutTime == false) {
			logoutTimeObject.put("result", false);
			
		} else {
			
			logoutTimeObject.put("result", true);
		}
		return logoutTimeObject.toString();
		
	}
	@Override
	public String couriersUpdateToDeliveryBoy(Double longitude, Double latitude) {
		
		ResultSet courierUpdates= userDao.couriersUpdateToDeliveryBoy( longitude,  latitude);
		JSONObject logoutTimeObject = new JSONObject();
		JSONArray bookedCouriers = new JSONArray();
        if(courierUpdates != null){
        	try {
				while (courierUpdates.next()) {
					JSONObject office = new JSONObject();
					office.put("contact_number", courierUpdates.getString("contact_number"));
					office.put("id", courierUpdates.getInt("id"));
					office.put("lat", courierUpdates.getDouble("lat"));
					office.put("longitude", courierUpdates.getDouble("longitude"));
					office.put("distance_in_km",courierUpdates.getString("distance_in_km"));
					bookedCouriers.put(office);
				}
				courierUpdates.close();
				
				logoutTimeObject.put("Couriers", bookedCouriers);
			} catch (SQLException e) {
				
				logoutTimeObject.put("Couriers", bookedCouriers);
				if(courierUpdates != null) {
					try {
						courierUpdates.close();
					} catch (SQLException e1) {
						System.out.println("Exception in BookingServiceImpl");
					}	
				}
			
				}
        	
        }else {
        	return null;
        }
		
		return logoutTimeObject.toString();
	
	}	
	
	
	@Override
	public JSONObject christmasSales(String selectedItem,String senderName,String senderPhone,
			String recieverName,String recieverAddress,String recieverPhone,String pincode,String surpriceNametoController,String surpriceDatetoController,String surpriceTimetoController,String photo,String totalAmount,String cod) {
		// TODO Auto-generated method stub
		
		String online="online_payment";
		String cash="cod_payment";
		
		JSONObject responceJson = new JSONObject();
		String response = userDao.christmasSales( selectedItem,senderName,  senderPhone,
				 recieverName,  recieverAddress,  recieverPhone,pincode,surpriceNametoController,surpriceDatetoController,surpriceTimetoController,photo,totalAmount,cod);
		if(response != null){
			responceJson.put("tracking_number",response);
			responceJson.put("totalamount",totalAmount);
			responceJson.put("cod",cod);
			responceJson.put("status",true);
			
			if(cod != cash){
			Date date = new Date();
			String strHomeaddrss =  recieverAddress;
			
			
			String referenceNo = "00"+response+ date.getTime();
			
			responceJson.put("account_id", SdcsPaymentGatewayConstants.ACCOUNT_ID);
			responceJson.put("address", recieverAddress);
			responceJson.put("amount", totalAmount);
			//couriersObject.put("amount", "13.0");
			responceJson.put("channel", SdcsPaymentGatewayConstants.CHANNEL);
			responceJson.put("city", "Bangalore");
			responceJson.put("country", SdcsPaymentGatewayConstants.COUNTRY);
			responceJson.put("currency", SdcsPaymentGatewayConstants.CURRENCY);
			responceJson.put("description", "Make payment for new courier");
			responceJson.put("email","sdcs.info24@gmail.com");
			responceJson.put("mode", SdcsPaymentGatewayConstants.MODE);
			responceJson.put("name", senderName);
			responceJson.put("page_id", "2197");
			responceJson.put("phone", senderPhone);
			responceJson.put("postal_code", "000000");
			responceJson.put("reference_no", referenceNo);
			responceJson.put("return_url", SdcsPaymentGatewayConstants.RETURN_URL);
			responceJson.put("state", "Karnataka");

			
			String md5HashData = SdcsPaymentGatewayConstants.SECRET_KEY
								+ "|" + SdcsPaymentGatewayConstants.ACCOUNT_ID
								+ "|" + strHomeaddrss
								+ "|" + totalAmount 
								//+ "|" + "13.0" 
								+ "|" + SdcsPaymentGatewayConstants.CHANNEL
								+ "|" + "Bangalore"
								+ "|" + SdcsPaymentGatewayConstants.COUNTRY
								+ "|" + SdcsPaymentGatewayConstants.CURRENCY
								+ "|" + "Make payment for new courier"
								+ "|" + "sdcs.info24@gmail.com"
								+ "|" + SdcsPaymentGatewayConstants.MODE
								+ "|" + senderName
								+ "|" + "2197"
								+ "|" + senderPhone
								+ "|" + "000000"
								+ "|" + referenceNo
								+ "|" + SdcsPaymentGatewayConstants.RETURN_URL
								+ "|" + "Karnataka";
			
			
			System.out.println("Values Before Hashing:" + md5HashData);
			
			SdcsPersistantValues.setPersistantValues(senderName,"sdcs.info24@gmail.com", senderPhone,response+"", "SANTA");
		
			responceJson.put("hash_values", md5HashData);
								
			String hasedValue;
			try {
				hasedValue = SdcsHashProvider.generateMd5Hash(md5HashData);
				responceJson.put("secure_hash", hasedValue);
				
			} catch (NoSuchAlgorithmException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			}if(cod != online){
				

				String strSmsText = "Dear%20"+ senderName +",your%20santaclause%20booking%20has%20been%20confirmed%20and%20your%20reference%20number%20is%20"+response+".%20Your%20order%20will%20be%20delivered%20soon.Thank%20you.%20";
				SdcsSMSComponent.sendSms(senderPhone, strSmsText);
				String strSmsTexta = "A%20new%20santaclause%20booking%20done%20done%20from%20"+senderName+".%20Reference%20id%20is%20"+response+".Contact%20number%20is%20"+senderPhone+"";
				SdcsSMSComponent.sendSms("9535337626", strSmsTexta);
				
				
				DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
				Date date = new Date();
				
				String body ="<div>"

+"<h4 style='color:navy'>Dear admin.,<h4><br><br>"

+"<p>A new Santa claus booking from the following details</p>"
+"<table style='border:1px solid blue;border-collapse: collapse;'>"
+"<tr style='border:1px solid blue'>"
+"<th style='border:1px solid blue;color:red;'>"
+"Date"
+"</th>"
+"<th style='border:1px solid blue;color:red;'>"
+"Item"
+"</th>"
+"<th style='border:1px solid blue;color:red;'>"
+"Oreder Id"
+"</th>"
+"<th style='border:1px solid blue;color:red;'>"
+"Sender Name"
+"</th>"
+"<th style='border:1px solid blue;color:red;'>"
+"Sender Contact Number"
+"</th>"
+"<th style='border:1px solid blue;color:red;'>"
+"Reciever Name"
+"</th>"
+"<th style='border:1px solid blue;color:red;'>"
+"Reciever Address"
+"</th>"
+"<th style='border:1px solid blue;color:red;'>"
+"Reciever Contact Number"
+"</th>"
+"</th>"
+"<th style='border:1px solid blue;color:red;'>"
+"Surprice Delivery Name"
+"</th>"
+"</th>"
+"<th style='border:1px solid blue;color:red;'>"
+"Surprice Delivery Date"
+"</th>"
+"</th>"
+"<th style='border:1px solid blue;color:red;'>"
+"Surprice Delivery time"
+"</th>"
+"</th>"
+"<th style='border:1px solid blue;color:red;'>"
+"Photo"
+"</th>"
+"</th>"
+"<th style='border:1px solid blue;color:red;'>"
+"Payment Mode"
+"</th>"
+"</th>"
+"<th style='border:1px solid blue;color:red;'>"
+"Total Amount"
+"</th>"


+"</tr>"
+"<tr>"
+"<td style='border:1px solid blue;color:blue;'>"+dateFormat.format(date)+"</td>"
+"<td style='border:1px solid blue;color:blue;'>"+selectedItem+"</td>"
+"<td style='border:1px solid blue;color:blue;'>"+response+"</td>"
+"<td style='border:1px solid blue;color:blue;'>"+senderName+"</td>"
+"<td style='border:1px solid blue;color:blue;'>"+senderPhone+"</td>"
+"<td style='border:1px solid blue;color:blue;'>"+recieverName+"</td>"
+"<td style='border:1px solid blue;color:blue;'>"+recieverAddress+" "+pincode+"</td>"
+"<td style='border:1px solid blue;color:blue;'>"+recieverPhone+"</td>"
+"<td style='border:1px solid blue;color:blue;'>"+surpriceNametoController+"</td>"
+"<td style='border:1px solid blue;color:blue;'>"+surpriceDatetoController+"</td>"
+"<td style='border:1px solid blue;color:blue;'>"+surpriceTimetoController+"</td>"
+"<td style='border:1px solid blue;color:blue;'>"+photo+"</td>"
+"<td style='border:1px solid blue;color:blue;'>"+cod+"</td>"
+"<td style='border:1px solid blue;color:blue;'>"+totalAmount+"</td>"
+"</tr>"



+"</table>"
+"<br>"

+"<p>Thank you.</p>"
+"</div>";
				
				
				
				SdcsEmailComponent.sendMail("sdcs2me@gmail.com", "SANTA CLAUS BOOKING", body, BigInteger.ZERO);
			}
			
			
		}else{
			responceJson.put("status",false);
		}
		
		
		return responceJson;
	}

	@Override
	public String christmasSaleAdminDetails(String strAdminDate) {
		// TODO Auto-generated method stub
		
		JSONObject sdcschristmasSaleDetailsJson = new JSONObject();
		ResultSet resultsetChristmasSale = userDao.christmasSaleAdminDetails(strAdminDate);
		// TODO Auto-generated method stub
		if (resultsetChristmasSale != null) {

			JSONArray christmasSaleList = new JSONArray();
			{
				try {
					while (resultsetChristmasSale.next()) {
						JSONObject christmasSaleHistory = new JSONObject();
						christmasSaleHistory.put("date_of_booking",
								resultsetChristmasSale.getTimestamp("date_of_booking"));
						christmasSaleHistory.put("selectedItem",
								resultsetChristmasSale.getString("selectedItem"));
						christmasSaleHistory.put("tracking_Id",
								resultsetChristmasSale.getString("tracking_Id"));
						christmasSaleHistory.put("sender_name",
								resultsetChristmasSale.getString("sender_name"));
						christmasSaleHistory.put("sender_phone",
								resultsetChristmasSale.getString("sender_phone"));
						christmasSaleHistory.put("reciever_name",
								resultsetChristmasSale.getString("reciever_name"));
						christmasSaleHistory.put("reciever_address",
								resultsetChristmasSale.getString("reciever_address"));
						christmasSaleHistory.put("reciever_phone",
								resultsetChristmasSale.getString("reciever_phone"));
						christmasSaleHistory.put("pincode",
								resultsetChristmasSale.getString("pincode"));
						christmasSaleHistory.put("surprice_gift_name",
								resultsetChristmasSale.getString("surprice_gift_name"));
						christmasSaleHistory.put("surprice_gift_date",
								resultsetChristmasSale.getString("surprice_gift_date"));
						christmasSaleHistory.put("surprice_gift_time",
								resultsetChristmasSale.getString("surprice_gift_time"));
						christmasSaleHistory.put("photo",
								resultsetChristmasSale.getString("photo"));
						christmasSaleHistory.put("payment_option",
								resultsetChristmasSale.getString("payment_option"));
						christmasSaleHistory.put("total_amount",
								resultsetChristmasSale.getString("total_amount"));

						christmasSaleList.put(christmasSaleHistory);

					}
					sdcschristmasSaleDetailsJson.put("status", true);
					sdcschristmasSaleDetailsJson.put("christmasSale_details", christmasSaleList);
					
					System.out.println(sdcschristmasSaleDetailsJson);
					resultsetChristmasSale.close();
				} catch (SQLException e) {
					sdcschristmasSaleDetailsJson.put("status", false);

					try {
						resultsetChristmasSale.close();
					} catch (SQLException sqlEx) {
						System.out.println("Exception in QuickHistoryServerImpl");
					}

				} finally {
					try {
						resultsetChristmasSale.close();
					} catch (SQLException e) {
						e.printStackTrace();
					}
				}

			}

		} else {
			sdcschristmasSaleDetailsJson.put("status", false);
		}
		return sdcschristmasSaleDetailsJson.toString();
		
	}

	@Override
	public String adminDeliveryBoyBooking(String restaurantId) {
		
		
		
		JSONObject sdcsDeliveryBoyBookDetailsJson = new JSONObject();
		ResultSet resultsetDeliveryBoyAdmin = userDao.adminDeliveryBoyBooking(restaurantId);
		// TODO Auto-generated method stub
		if (resultsetDeliveryBoyAdmin != null) {

			JSONArray DeliveryBoyList = new JSONArray();
			{
				try {
					while (resultsetDeliveryBoyAdmin.next()) {
						JSONObject deliveryBoyBookinghistory = new JSONObject();
						
						deliveryBoyBookinghistory.put("booking_Id",
								resultsetDeliveryBoyAdmin.getInt("booking_Id"));
						deliveryBoyBookinghistory.put("time_of_booking",
								resultsetDeliveryBoyAdmin.getTimestamp("time_of_booking"));
						deliveryBoyBookinghistory.put("reciever_name",
								resultsetDeliveryBoyAdmin.getString("reciever_name"));
						deliveryBoyBookinghistory.put("reciever_contact",
								resultsetDeliveryBoyAdmin.getString("reciever_contact"));
						deliveryBoyBookinghistory.put("delivery_boy_id",
								resultsetDeliveryBoyAdmin.getString("delivery_boy_id"));
						deliveryBoyBookinghistory.put("distance",
								resultsetDeliveryBoyAdmin.getString("distance"));
						deliveryBoyBookinghistory.put("amount",
								resultsetDeliveryBoyAdmin.getString("total_amount"));
						deliveryBoyBookinghistory.put("statusa","1");

						DeliveryBoyList.put(deliveryBoyBookinghistory);

					}
					sdcsDeliveryBoyBookDetailsJson.put("status", true);
					sdcsDeliveryBoyBookDetailsJson.put("deliveryBoy_booking",DeliveryBoyList);
					resultsetDeliveryBoyAdmin.close();
				} catch (SQLException e) {
					sdcsDeliveryBoyBookDetailsJson.put("status", false);

					try {
						resultsetDeliveryBoyAdmin.close();
					} catch (SQLException sqlEx) {
						System.out.println("Exception in QuickHistoryServerImpl");
					}

				} finally {
					try {
						resultsetDeliveryBoyAdmin.close();
					} catch (SQLException e) {
						System.out
								.println("Exception in QuickHistoryServerImpl");
					}
				}

			}

		} else {
			sdcsDeliveryBoyBookDetailsJson.put("status", false);
			
		}
		return sdcsDeliveryBoyBookDetailsJson.toString();

	}

	@Override
	public String registerRestaurant(RestaurantRegistration restaurantRegistration) {
		
		JSONObject register = new JSONObject();
		
		RestaurantRegistration registration_of_hotels = userDao.registerHotels(restaurantRegistration);
		
		if(registration_of_hotels != null){
			try{
			String strEmail = restaurantRegistration.getEmailId();
			String strname = restaurantRegistration.getName();
			
			String mailBody = "<b>Dear "+strname+",</b>"
					+ "<br>"
					+ "<b><i> Thank you for being a part of SDCS.</i></b>"	
					+"<br>"
					+"<b> Your password is:"+restaurantRegistration.getPassword()+"<b>"
					+"<br>"
					+ "Thanks" + "<br>" + "SDCS Team" + "<br>"
					+ "info@sdcs.me";
			SdcsEmailComponent.sendMail(strEmail,
					"Welcome To SDCS", mailBody, BigInteger.ZERO);
			}catch(Exception e){
				
			}
			register.put("result", true);
			register.put("RegisterId", restaurantRegistration.getUserId());
			register.put("type", "1");
		}else{
			register.put("result", false);
		}
		
		return register.toString();
	}

	@Override
	public String restaurantLogin(String contactNumber, String password) {
		// TODO Auto-generated method stub
		
		JSONObject authenticate = new JSONObject();
		
		SdcsDeliveryboyBooking authenticateRestaurant = userDao.restaurantLogin(contactNumber,password);
		
		if(authenticateRestaurant!=null){
			
			authenticate.put("result", true);
			authenticate.put("user_id", authenticateRestaurant.getUserId());
			authenticate.put("full_name", authenticateRestaurant.getFullname());
			authenticate.put("mobile", authenticateRestaurant.getMobile());
			authenticate.put("address", authenticateRestaurant.getStrHomeAddress());
			authenticate.put("amount", authenticateRestaurant.getAmount());
			authenticate.put("extraAmount", authenticateRestaurant.getAmount());
			/*authenticate.put("fourHourAmount", authenticateRestaurant.getAmount());
			authenticate.put("twentyFOurhourAmount", authenticateRestaurant.getAmount());
			authenticate.put("abExtraAmount", authenticateRestaurant.getAmount());
		*/	authenticate.put("email", authenticateRestaurant.getFourHourAmount());
			authenticate.put("lat", authenticateRestaurant.getLat());
			authenticate.put("long", authenticateRestaurant.getLon());
			authenticate.put("type", "1");
			
		}
		
		return authenticate.toString();
			
				
}

	@Override
	public String cakeShowBooking(String name, String adress, String contact,String deliveryBoyId,String userId) {
		
		
	JSONObject cakeBooking = new JSONObject();
	
	long cakeShowBooking = userDao.cakeShowBooking(name,adress,contact,deliveryBoyId,userId);
	
	if(cakeShowBooking > 0){
		cakeBooking.put("result", true);
		
		cakeBooking.put("tracking_Id", cakeShowBooking);
	}
		
	
	String strSmsText = "Dear%20"+ name +",your%20santaclause%20booking%20has%20been%20confirmed%20and%20your%20reference%20number%20is%20"+cakeShowBooking+".%20Your%20order%20will%20be%20delivered%20soon.Thank%20you.%20";
	SdcsSMSComponent.sendSms(contact, strSmsText);
	
		return cakeBooking.toString();
	}

	//this is for tracking delivery boy for every fifteen minutes
	 @Override
	 public String updateLocationofDeliveryBoy(Double longitude,
	   Double latitude, String phoneNumber) {
	  JSONObject updateResponseJson = new JSONObject();
	  
	  long statusResponse=userDao.updateLocationofDeliveryBoy(longitude,latitude,phoneNumber);
	  if(statusResponse>0){
	   updateResponseJson.put("status",true);
	   updateResponseJson.put("lat",latitude);
	   updateResponseJson.put("lon",longitude);
	  }else
	   updateResponseJson.put("status",false);
	  
	  // TODO Auto-generated method stub
	  return updateResponseJson.toString();
	 }
	
	@Override
	public String restaurantBooking(int status,String bookingId,String deliveryBoyId) {
		
		JSONObject cakeBookingUpdate = new JSONObject();
		
		boolean updateStatus = userDao.restaurantBooking(status,bookingId,deliveryBoyId);
		
		
			
		
		
		if(updateStatus == true){
			cakeBookingUpdate.put("result", true);
			
		}
		
		return cakeBookingUpdate.toString();
	}

	@Override
	public String cakeShowAddress(String status, String deliveryBoyId) {
		
		JSONObject cakeBookingDetailsTODeliveryBoy = new JSONObject();
		
		ResultSet sdcsCakeSale = userDao.cakeShowAddress(status,deliveryBoyId);
		
		
		
		if(sdcsCakeSale != null){
			
			JSONArray address = new JSONArray();
			
			try {
				while (sdcsCakeSale.next()){
					JSONObject bookingAddress= new JSONObject();
					bookingAddress.put("id",
							sdcsCakeSale.getString("id"));
					bookingAddress.put("Name",
							sdcsCakeSale.getString("name"));
					bookingAddress.put("address",
							sdcsCakeSale.getString("address"));
					bookingAddress.put("contact_number",
							sdcsCakeSale.getString("contact_number"));
					
					address.put(bookingAddress);

				}
				cakeBookingDetailsTODeliveryBoy.put("status", true);
				cakeBookingDetailsTODeliveryBoy.put("christmasSale_details", address);
				
				
				sdcsCakeSale.close();
			} catch (SQLException e) {
				cakeBookingDetailsTODeliveryBoy.put("status", false);

				try {
					sdcsCakeSale.close();
				} catch (SQLException sqlEx) {
					System.out.println("Exception in QuickHistoryServerImpl");
				}

			} finally {
				try {
					sdcsCakeSale.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}

		}

	 else {
		cakeBookingDetailsTODeliveryBoy.put("status", false);
	}
	return cakeBookingDetailsTODeliveryBoy.toString();
	
}

	@Override
	public String cakeShowBookingAdmin(String date) {
		
		JSONObject sdcsCakeShow = new JSONObject();
		ResultSet resultsetcake = userDao.cakeShowBookingAdmin(date);
		// TODO Auto-generated method stub
		if (resultsetcake != null) {

			JSONArray cakeSaleList = new JSONArray();
			{
				try {
					while (resultsetcake.next()) {
						JSONObject cakeSaleHistory = new JSONObject();
						cakeSaleHistory.put("time_of_booking",
								resultsetcake.getTimestamp("time_of_booking"));
						cakeSaleHistory.put("id",
								resultsetcake.getInt("id"));
						cakeSaleHistory.put("name",
								resultsetcake.getString("name"));
						cakeSaleHistory.put("address",
								resultsetcake.getString("address"));
						cakeSaleHistory.put("contact_number",
								resultsetcake.getString("contact_number"));
						cakeSaleHistory.put("delivery_boy_id",
								resultsetcake.getString("delivery_boy_id"));
						cakeSaleHistory.put("status",
								resultsetcake.getInt("status"));
						cakeSaleHistory.put("distance",
								resultsetcake.getInt("distance"));
						
						cakeSaleList.put(cakeSaleHistory);
						
						

					}
					sdcsCakeShow.put("status", true);
					sdcsCakeShow.put("all_bookings", cakeSaleList);
					resultsetcake.close();
				} catch (SQLException e) {
					sdcsCakeShow.put("status", false);

					try {
						resultsetcake.close();
					} catch (SQLException sqlEx) {
						System.out.println("Exception in QuickHistoryServerImpl");
					}

				} finally {
					try {
						resultsetcake.close();
					} catch (SQLException e) {
						System.out
								.println("Exception in QuickHistoryServerImpl");
					}
				}

			}

		} else {
			sdcsCakeShow.put("status", false);
		}
		return sdcsCakeShow.toString();
	}

	@Override
	public String restauantLiveList(double lat,double lon) {
	
		JSONObject sdcsCakeShow = new JSONObject();
		ResultSet resultsetCakeSaleAdmin = userDao.restauantLiveList(lat,lon);
		// TODO Auto-generated method stub
		if (resultsetCakeSaleAdmin != null) {

			JSONArray cakeSaleList = new JSONArray();
			{
				try {
					while (resultsetCakeSaleAdmin.next()) {
						JSONObject cakeSaleHistory = new JSONObject();
						
						
						
						if(resultsetCakeSaleAdmin.getInt("transfer_staus") == 1){
						cakeSaleHistory.put("time_of_booking",
								resultsetCakeSaleAdmin.getString("delboy_time"));
						cakeSaleHistory.put("distance",
								"transfer");
						cakeSaleHistory.put("schedula_time",
								resultsetCakeSaleAdmin.getString("delboy_time"));
						cakeSaleHistory.put("restaurant_address",
								resultsetCakeSaleAdmin.getString("location"));
						cakeSaleHistory.put("transfer",
								"Transfering");
						}else{
							
							cakeSaleHistory.put("time_of_booking",
									resultsetCakeSaleAdmin.getTimestamp("time_of_booking"));
							cakeSaleHistory.put("distance",
									resultsetCakeSaleAdmin.getString("distance"));
							cakeSaleHistory.put("schedula_time",
									resultsetCakeSaleAdmin.getString("schedula_time"));
							cakeSaleHistory.put("restaurant_address",
									resultsetCakeSaleAdmin.getString("restaurant_address"));
							cakeSaleHistory.put("transfer",
									"Transfer");
						}
						
						
						if(resultsetCakeSaleAdmin.getInt("type") == 1){
							
							cakeSaleHistory.put("transfer",
									"No transfer");
						}
						
						cakeSaleHistory.put("id",
								resultsetCakeSaleAdmin.getInt("booking_Id"));
						cakeSaleHistory.put("restorant_id",
								resultsetCakeSaleAdmin.getString("restorant_id"));
						cakeSaleHistory.put("restaurant_name",
								resultsetCakeSaleAdmin.getString("restaurant_name"));
						cakeSaleHistory.put("restaurant_contact",
								resultsetCakeSaleAdmin.getString("restaurant_contact"));
						
						cakeSaleHistory.put("reciever_name",
								resultsetCakeSaleAdmin.getString("reciever_name"));
						cakeSaleHistory.put("reciever_address",
								resultsetCakeSaleAdmin.getString("reciever_address"));
						cakeSaleHistory.put("reciever_contact",
								resultsetCakeSaleAdmin.getString("reciever_contact"));
						cakeSaleHistory.put("content",
								resultsetCakeSaleAdmin.getString("content"));
						cakeSaleHistory.put("deliveryboys_needed",
								resultsetCakeSaleAdmin.getString("deliveryboys_needed"));
						cakeSaleHistory.put("vehicle_needed",
								resultsetCakeSaleAdmin.getString("vehicle_needed"));
						cakeSaleHistory.put("no_of_del_boys",
								resultsetCakeSaleAdmin.getInt("no_of_del_boys"));
						
							String statuscheck=	resultsetCakeSaleAdmin.getString("pay_type");
							if(statuscheck.equals("4hours") || statuscheck.equals("24hours") ){
								String statuschecka=resultsetCakeSaleAdmin.getString("courier_type");
								if(statuschecka.equals("4hours")){
									cakeSaleHistory.put("booking_type","4 Hours");
									cakeSaleHistory.put("amount",
											"75+km*2 ");
									
								
								}else if(statuschecka.equals("24hours")){
									cakeSaleHistory.put("booking_type",
											"24 Hours");
									cakeSaleHistory.put("amount",
											"50+km*2 ");
								
								}
								
							}else{
								cakeSaleHistory.put("booking_type",
										statuscheck);
								cakeSaleHistory.put("amount",
										"30+above 5km*5 ");
							
							
							}
						
							cakeSaleList.put(cakeSaleHistory);

					}
					sdcsCakeShow.put("status", true);
					sdcsCakeShow.put("Live_Couriers", cakeSaleList);
					resultsetCakeSaleAdmin.close();
				} catch (SQLException e) {
					sdcsCakeShow.put("status",false);

					try {
						resultsetCakeSaleAdmin.close();
					} catch (SQLException sqlEx) {
						System.out.println("Exception in QuickHistoryServerImpl");
					}

				} finally {
					try {
						resultsetCakeSaleAdmin.close();
					} catch (SQLException e) {
						System.out
								.println("Exception in QuickHistoryServerImpl");
					}
				}

			}

		} else {
			sdcsCakeShow.put("status", false);
		}
		return sdcsCakeShow.toString();
	}

	@Override
	public String  updatedistance(String distance, String deliveryBoy_Id,
			int bookingId, int status) {
		
		JSONObject distanceJson = new JSONObject();
		
		boolean saveDistance = userDao.updatedistance(distance,deliveryBoy_Id,bookingId,status);
		
		if(saveDistance == true){
			
			distanceJson.put("result", true);
		}
		
		return distanceJson.toString();
	}
	@Override
	 public String updatedelBoyBooking(String rnumber,String content,String type,String userId, String name, String contact,String address,String defaultAmount,String status,String codAmount,double latitude,double longitude) {
	  
	  JSONObject delBoyBooking = new JSONObject();
	  
	  long insertBooking = userDao.updatedelBoyBooking(rnumber,content,type,userId,name,contact,address,defaultAmount,status,codAmount,latitude,longitude);		
		if(insertBooking > 0){
			
			delBoyBooking.put("status", true);
			delBoyBooking.put("tracking_id", insertBooking);
			

			String strSmsText = "%20The%20delivery%20boy%20booking%20has%20been%20confirmed.The%20consignment%20will%20be%20picked%20soon.The%20order%20id%20is%20"+insertBooking+".Thank%20you%20for%20using%20SDCS.ME.%20";
			SdcsSMSComponent.sendSms(contact, strSmsText);
			String strSmsTexta = "A%20new%20delivery%20boy%20booking%20is%20done%20from%20"+name+".%20Reference%20id%20is%20"+insertBooking+".Contact%20number%20is%20"+contact+".";
			SdcsSMSComponent.sendSms("9535337626", strSmsTexta);
			SdcsSMSComponent.sendSms("7411791422", strSmsTexta);
			SdcsSMSComponent.sendSms("9916168585", strSmsTexta);
			
			SdcsEmailComponent.sendMail("chandusc128@gmail.com", "Delivery Boy Booking confirmation", "A new order from "+name+" with booking id"+insertBooking+".  Pick up Address is from "+address+" and contactNumber is "+contact,BigInteger.ZERO);
			
			
			try {
		           sendNotifications(address);
	} catch (IOException e) {
		System.out.println("Exception in while sending notification");
	}
			
		}else{
			delBoyBooking.put("status", false);
		}
		
		
		
		return delBoyBooking.toString();
	}
	
	private void sendNotifications(String message) throws IOException {
		ArrayList<String> list = new ArrayList<String>();
		
		ResultSet registartionset = userDao.sendNotification();
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
	public String updateImage(String image,int bookingId, String delBoyId
			) {
		
    JSONObject imageUpdate = new JSONObject();
		
    
		boolean saveImage = userDao.updateImage(image,bookingId,delBoyId);
		
		if(saveImage == true){
			
			imageUpdate.put("result", true);
		}
		
		return imageUpdate.toString();
	}

	@Override
	public String freshBookingList(String restaurantId,String bookingId) {
		// TODO Auto-generated method stub
		
		JSONObject freshListJson = new JSONObject();
		ResultSet resultsetfreshList = userDao.freshBookingList(restaurantId,bookingId);
		// TODO Auto-generated method stub
		if (resultsetfreshList != null) {

			JSONArray freshListArray = new JSONArray();
			{
				try {
					while (resultsetfreshList.next()) {
						JSONObject freshListJsonObject = new JSONObject();
						freshListJsonObject.put("booking_Id",
								resultsetfreshList.getString("booking_Id"));
						freshListJsonObject.put("time_of_booking",
								resultsetfreshList.getTimestamp("time_of_booking"));	
						freshListJsonObject.put("status",
								resultsetfreshList.getInt("status")).toString();
						freshListJsonObject.put("reciever_address",resultsetfreshList.getString("reciever_name")+","+
								resultsetfreshList.getString("reciever_contact")+","+resultsetfreshList.getString("reciever_address"));
					freshListJsonObject.put("full_name",
								resultsetfreshList.getString("full_name"));
						freshListJsonObject.put("mobile_number",
								resultsetfreshList.getString("mobile_number"));
						freshListJsonObject.put("content",
								resultsetfreshList.getString("content"));
						freshListJsonObject.put("vehicle_needed",
								resultsetfreshList.getString("vehicle_needed"));
						freshListJsonObject.put("deliveryboys_needed",
								resultsetfreshList.getString("deliveryboys_needed"));
						freshListArray.put(freshListJsonObject);
						

					}
					freshListJson.put("status", true);
					freshListJson.put("fresh_booking", freshListArray);
					resultsetfreshList.close();
				} catch (SQLException e) {
					freshListJson.put("status", false);

					try {
						resultsetfreshList.close();
					} catch (SQLException sqlEx) {
						System.out.println("Exception in QuickHistoryServerImpl");
					}

				} finally {
					try {
						resultsetfreshList.close();
					} catch (SQLException e) {
						System.out
								.println("Exception in QuickHistoryServerImpl");
					}
				}

			}

		} else {
			freshListJson.put("status", false);
			
		}
		return freshListJson.toString();
	}

	@Override
	public String recieverAddress(String recieverName, String recieverAddress,
			String recieverContact, String bookingId) {
		
JSONObject recieverAddressJson = new JSONObject();
		
		ResultSet updateRecieverAddress = userDao.recieverAddress(recieverName,recieverAddress,recieverContact,bookingId);
		
		if(updateRecieverAddress != null){
			
			recieverAddressJson.put("result", true);
		}else{
			
			recieverAddressJson.put("result", false);
		}
		
		return recieverAddressJson.toString();

	}

	/*@Override
	public String paymentUpdate(String restaurantId) {
		// TODO Auto-generated method stub
		
		JSONObject deliveredList = new JSONObject();
		
		ResultSet updatePaymentDetails = userDao.paymentUpdate(restaurantId);
		
		
		Timestamp name = null;
		
		String name2 = "0" ;
		
		int number = 0;
			
		
	    double damount=0.00;
	    double totalamount=0.00;
	    double tamount1=0.00;
	    
	    String address="0";
	    
	    
	    String lastbookingid="";
	    
	    String rest_name = "";
	    
	    String phone="0";
	    int trackingId=0 ; 
	     
	    
	 	    String date = "";
if(updatePaymentDetails!=null){
			try {
				
				
				JSONArray couriersArray = new JSONArray();
				while (updatePaymentDetails.next()) {
					
					
											
						JSONObject couriersObject = new JSONObject();
						
						name = updatePaymentDetails.getTimestamp("time_of_booking");
						String amounta = updatePaymentDetails.getString("total_amount");
						
						 address = updatePaymentDetails.getString("restaurant_address");
						
						 phone = updatePaymentDetails.getString("restaurant_contact");
						
						 trackingId = updatePaymentDetails.getInt("booking_id");
						 lastbookingid=""+trackingId;
						 rest_name = updatePaymentDetails.getString("restaurant_name");
						 
						damount=Double.parseDouble(amounta);
						extraDistance = updatePaymentDetails.getDouble("extra_distance");
					
						String DATE_FORMAT = "yyyy/MM/dd";
					    SimpleDateFormat sdf = new SimpleDateFormat(DATE_FORMAT);
					
					    date = sdf.format(name);
					    
						if(date.equals(name2)){
											
							tamount1=damount+tamount1;
								
							number = number + 1;								
						}else if(name2 != "0"){
							
												
							couriersObject.put("time_of_booking",name2);
							
							couriersObject.put("number_of_couriers",number);												
						
							couriersObject.put("amount",totalamount);
							couriersObject.put("tracking_number",lastbookingid);
							
						couriersArray.put(couriersObject);
							totalamount+=tamount1;
							tamount1=damount;
						
							
							
												number = 1;
												
												name2 = date;
											

							
						}else
						{
							
							
							tamount1=damount;
						
							
                            						
												number = 1;
												
												name2 = date;
											

							}

					
				}
				JSONObject couriersObject = new JSONObject();
				
				couriersObject.put("time_of_booking",rest_name);
						
				couriersObject.put("number_of_couriers",number);					
							
				couriersObject.put("amount",tamount1);
				
								couriersArray.put(couriersObject);
				totalamount+=tamount1;
				String referenceNumber=""+trackingId;
				deliveredList.put("result", true);
				deliveredList.put("all_couriers",couriersArray);
                Date date1= new Date();
                String referenceNo = "00"+trackingId + date1.getTime();
        		
                deliveredList.put("account_id", SdcsPaymentGatewayConstants.ACCOUNT_ID);
                deliveredList.put("address", address);
                deliveredList.put("amount", totalamount);
        		//newBookingJsonData.put("amount", "13.0");
                deliveredList.put("channel", SdcsPaymentGatewayConstants.CHANNEL);
                deliveredList.put("city", lastbookingid);
                deliveredList.put("country", SdcsPaymentGatewayConstants.COUNTRY);
                deliveredList.put("currency", SdcsPaymentGatewayConstants.CURRENCY);
                deliveredList.put("description", "Make payment for new courier");
                deliveredList.put("email", "manjunathdl@gmail.com");
                deliveredList.put("mode", SdcsPaymentGatewayConstants.MODE);
                deliveredList.put("name", rest_name);
                deliveredList.put("page_id", "2197");
                deliveredList.put("phone", phone);
                deliveredList.put("postal_code", "560072");
                deliveredList.put("reference_no", referenceNo);
                deliveredList.put("return_url", SdcsPaymentGatewayConstants.RETURN_URL);
                deliveredList.put("state", "Karnataka");

        		
        		String md5HashData = SdcsPaymentGatewayConstants.SECRET_KEY
        							+ "|" + SdcsPaymentGatewayConstants.ACCOUNT_ID
        							+ "|" + address
        							+ "|" + totalamount 
        							//+ "|" + "13.0" 
        							+ "|" + SdcsPaymentGatewayConstants.CHANNEL
        							+ "|" + lastbookingid
        							+ "|" + SdcsPaymentGatewayConstants.COUNTRY
        							+ "|" + SdcsPaymentGatewayConstants.CURRENCY
        							+ "|" + "Make payment for new courier"
        							+ "|" + "manjunathdl@gmail.com"
        							+ "|" + SdcsPaymentGatewayConstants.MODE
        							+ "|" + rest_name
        							+ "|" + "2197"
        							+ "|" + phone
        							+ "|" + "560072"
        							+ "|" + referenceNo
        							+ "|" + SdcsPaymentGatewayConstants.RETURN_URL
        							+ "|" + "Karnataka";
        		
        		String UserId="ff";
        		
        		System.out.println("Values Before Hashing:" + md5HashData);
        		
        		SdcsPersistantValues.setPersistantValues(rest_name, "manjunathdl@gmail.com", phone, trackingId+"", UserId);
        	
        		deliveredList.put("hash_values", md5HashData);
        							
        		String hasedValue;
        		try {
        			hasedValue = SdcsHashProvider.generateMd5Hash(md5HashData);
        			deliveredList.put("secure_hash", hasedValue);
        			System.out.println("Values After Hashing:" + hasedValue);
        		} catch (NoSuchAlgorithmException e) {
        			// TODO Auto-generated catch block
        			e.printStackTrace();
        		}
				String referenceNo = "00"+ trackingId+ date1.getTime();
				
				deliveredList.put("account_id", SdcsPaymentGatewayConstants.ACCOUNT_ID);
				deliveredList.put("address",address );
				//deliveredList.put("amount", ""+tamount);
				couriersObject.put("amount", "130.0");
				deliveredList.put("channel", SdcsPaymentGatewayConstants.CHANNEL);
				deliveredList.put("city","bangalore");
				deliveredList.put("country", SdcsPaymentGatewayConstants.COUNTRY);
				deliveredList.put("currency", SdcsPaymentGatewayConstants.CURRENCY);
				deliveredList.put("description", "Make payment for new courier");
				deliveredList.put("email", "manjunathdl@gmail.com");
				deliveredList.put("mode", SdcsPaymentGatewayConstants.MODE);
				deliveredList.put("name", rest_name);
				deliveredList.put("page_id", "2197");
				deliveredList.put("phone", phone);
				deliveredList.put("postal_code", "560072");
				deliveredList.put("reference_no", referenceNo);
				deliveredList.put("return_url", SdcsPaymentGatewayConstants.RETURN_URL);
				deliveredList.put("state", "temple");

				
				String md5HashData = SdcsPaymentGatewayConstants.SECRET_KEY
									+ "|" + SdcsPaymentGatewayConstants.ACCOUNT_ID
									+ "|" + address
									+ "|" + "130.0"
									+ "|" + SdcsPaymentGatewayConstants.CHANNEL
									+ "|" + "temple"
									+ "|" + SdcsPaymentGatewayConstants.COUNTRY
									+ "|" + SdcsPaymentGatewayConstants.CURRENCY
									+ "|" + "Make payment for new courier"
									+ "|" + "manjunathdl@gmail.com"
									+ "|" + SdcsPaymentGatewayConstants.MODE
									+ "|" + rest_name
									+ "|" + "2197"
									+ "|" + phone
									+ "|" + "560072"
									+ "|" + referenceNo
									+ "|" + SdcsPaymentGatewayConstants.RETURN_URL
									+ "|" + "temple";

				
				SdcsPersistantValues.setPersistantValues(rest_name,"sdcs.info24@gmail.com", phone,trackingId+"", "Courier");
			
				deliveredList.put("hash_values", md5HashData);
									
				String hasedValue;
				try {
					hasedValue = SdcsHashProvider.generateMd5Hash(md5HashData);
					deliveredList.put("secure_hash", hasedValue);
					
				} catch (NoSuchAlgorithmException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
		
					System.out.println(md5HashData);
					
					
					DecimalFormat df = new DecimalFormat("#.##");
					df.setRoundingMode(RoundingMode.HALF_UP);
					String  tamount2 = df.format(totalamount); // 0.91239

				deliveredList.put("total_Amount",tamount2);
				deliveredList.put("refferenceId",referenceNumber);
				
				
				
			} catch (SQLException e) {
				deliveredList.put("result", false);

				try {
					updatePaymentDetails.close();
				} catch (SQLException sqlEx) {
					System.out.println("Exception in QuickHistoryServerImpl");
					
					
				}

			} finally {
				try {
					updatePaymentDetails.close();
				} catch (SQLException e) {
					System.out.println("Exception in QuickHistoryServerImpl");
				}
			}

		

	} else {
		deliveredList.put("result", false);
	}

	
	
	return deliveredList.toString();
}
*/
	@Override
	public String paymentUpdate(String restaurantId) {
		// TODO Auto-generated method stub
		
		JSONObject deliveredList = new JSONObject();
		
		ResultSet updatePaymentDetails = userDao.paymentUpdate(restaurantId);
		
		
		Timestamp name = null;
		
		String name2 = "0" ;
		
		int number = 0;
			
		
	    double damount=0.00;
	    double totalamount=0.00;
	    double tamount1=0.00;
	    
	    String address="0";
	    
	    
	    String lastbookingid="";
	    
	    String rest_name = "";
	    
	    String phone="0";
	    int trackingId=0 ; 
	     
	    
	 	    String date = "";
if(updatePaymentDetails!=null){
			try {
				
				
				JSONArray couriersArray = new JSONArray();
				while (updatePaymentDetails.next()) {
					
					
											
						JSONObject couriersObject = new JSONObject();
						
						name = updatePaymentDetails.getTimestamp("time_of_booking");
						String amounta = updatePaymentDetails.getString("total_amount");
						
						 address = updatePaymentDetails.getString("restaurant_address");
						
						 phone = updatePaymentDetails.getString("restaurant_contact");
						
						 trackingId = updatePaymentDetails.getInt("booking_id");
						 lastbookingid=""+trackingId;
						 rest_name = updatePaymentDetails.getString("restaurant_name");
						 
						damount=Double.parseDouble(amounta);
					/*	extraDistance = updatePaymentDetails.getDouble("extra_distance");
					
					*/	String DATE_FORMAT = "yyyy/MM/dd";
					    SimpleDateFormat sdf = new SimpleDateFormat(DATE_FORMAT);
					
					    date = sdf.format(name);
					    
						if(date.equals(name2)){
											
							tamount1=damount+tamount1;
								
							number = number + 1;								
						}else if(name2 != "0"){
							
												
							couriersObject.put("time_of_booking",name2);
							
							couriersObject.put("number_of_couriers",number);												
						
							couriersObject.put("amount",totalamount);
							couriersObject.put("tracking_number",lastbookingid);
							
						couriersArray.put(couriersObject);
							totalamount+=tamount1;
							tamount1=damount;
						
							
							
												number = 1;
												
												name2 = date;
											

							
						}else
						{
							
							
							tamount1=damount;
						
							
                            						
												number = 1;
												
												name2 = date;
											

							}

					
				}
				JSONObject couriersObject = new JSONObject();
				
				couriersObject.put("time_of_booking",rest_name);
						
				couriersObject.put("number_of_couriers",number);					
							
				
				  double roundOff1 = Math.round(tamount1 * 100.0) / 100.0;
				
				couriersObject.put("amount",roundOff1);
				
								couriersArray.put(couriersObject);
				totalamount+=tamount1;
				String referenceNumber=""+trackingId;
				deliveredList.put("result", true);
				deliveredList.put("all_couriers",couriersArray);
                Date date1= new Date();
                String referenceNo = "00"+trackingId + date1.getTime();
        		
                deliveredList.put("account_id", SdcsPaymentGatewayConstants.ACCOUNT_ID);
                deliveredList.put("address", address);
                double roundOff = Math.round(totalamount * 100.0) / 100.0;
                deliveredList.put("amount",roundOff);
        		//newBookingJsonData.put("amount", "13.0");
                deliveredList.put("channel", SdcsPaymentGatewayConstants.CHANNEL);
                deliveredList.put("city", lastbookingid);
                deliveredList.put("country", SdcsPaymentGatewayConstants.COUNTRY);
                deliveredList.put("currency", SdcsPaymentGatewayConstants.CURRENCY);
                deliveredList.put("description", "Make payment for new courier");
                deliveredList.put("email", "manjunathdl@gmail.com");
                deliveredList.put("mode", SdcsPaymentGatewayConstants.MODE);
                deliveredList.put("name", rest_name);
                deliveredList.put("page_id", "2197");
                deliveredList.put("phone", phone);
                deliveredList.put("postal_code", "560072");
                deliveredList.put("reference_no", referenceNo);
                deliveredList.put("return_url", SdcsPaymentGatewayConstants.RETURN_URL);
                deliveredList.put("state", "Karnataka");

        		
        		String md5HashData = SdcsPaymentGatewayConstants.SECRET_KEY
        							+ "|" + SdcsPaymentGatewayConstants.ACCOUNT_ID
        							+ "|" + address
        							+ "|" + roundOff 
        							//+ "|" + "13.0" 
        							+ "|" + SdcsPaymentGatewayConstants.CHANNEL
        							+ "|" + lastbookingid
        							+ "|" + SdcsPaymentGatewayConstants.COUNTRY
        							+ "|" + SdcsPaymentGatewayConstants.CURRENCY
        							+ "|" + "Make payment for new courier"
        							+ "|" + "manjunathdl@gmail.com"
        							+ "|" + SdcsPaymentGatewayConstants.MODE
        							+ "|" + rest_name
        							+ "|" + "2197"
        							+ "|" + phone
        							+ "|" + "560072"
        							+ "|" + referenceNo
        							+ "|" + SdcsPaymentGatewayConstants.RETURN_URL
        							+ "|" + "Karnataka";
        		
        		String UserId="ff";
        		
        		System.out.println("Values Before Hashing:" + md5HashData);
        		
        		SdcsPersistantValues.setPersistantValues(rest_name, "manjunathdl@gmail.com", phone, trackingId+"", UserId);
        	
        		deliveredList.put("hash_values", md5HashData);
        							
        		String hasedValue;
        		try {
        			hasedValue = SdcsHashProvider.generateMd5Hash(md5HashData);
        			deliveredList.put("secure_hash", hasedValue);
        			System.out.println("Values After Hashing:" + hasedValue);
        		} catch (NoSuchAlgorithmException e) {
        			// TODO Auto-generated catch block
        			e.printStackTrace();
        		}
				/*String referenceNo = "00"+ trackingId+ date1.getTime();
				
				deliveredList.put("account_id", SdcsPaymentGatewayConstants.ACCOUNT_ID);
				deliveredList.put("address",address );
				//deliveredList.put("amount", ""+tamount);
				couriersObject.put("amount", "130.0");
				deliveredList.put("channel", SdcsPaymentGatewayConstants.CHANNEL);
				deliveredList.put("city","bangalore");
				deliveredList.put("country", SdcsPaymentGatewayConstants.COUNTRY);
				deliveredList.put("currency", SdcsPaymentGatewayConstants.CURRENCY);
				deliveredList.put("description", "Make payment for new courier");
				deliveredList.put("email", "manjunathdl@gmail.com");
				deliveredList.put("mode", SdcsPaymentGatewayConstants.MODE);
				deliveredList.put("name", rest_name);
				deliveredList.put("page_id", "2197");
				deliveredList.put("phone", phone);
				deliveredList.put("postal_code", "560072");
				deliveredList.put("reference_no", referenceNo);
				deliveredList.put("return_url", SdcsPaymentGatewayConstants.RETURN_URL);
				deliveredList.put("state", "temple");

				
				String md5HashData = SdcsPaymentGatewayConstants.SECRET_KEY
									+ "|" + SdcsPaymentGatewayConstants.ACCOUNT_ID
									+ "|" + address
									+ "|" + "130.0"
									+ "|" + SdcsPaymentGatewayConstants.CHANNEL
									+ "|" + "temple"
									+ "|" + SdcsPaymentGatewayConstants.COUNTRY
									+ "|" + SdcsPaymentGatewayConstants.CURRENCY
									+ "|" + "Make payment for new courier"
									+ "|" + "manjunathdl@gmail.com"
									+ "|" + SdcsPaymentGatewayConstants.MODE
									+ "|" + rest_name
									+ "|" + "2197"
									+ "|" + phone
									+ "|" + "560072"
									+ "|" + referenceNo
									+ "|" + SdcsPaymentGatewayConstants.RETURN_URL
									+ "|" + "temple";

				
				SdcsPersistantValues.setPersistantValues(rest_name,"sdcs.info24@gmail.com", phone,trackingId+"", "Courier");
			
				deliveredList.put("hash_values", md5HashData);
									
				String hasedValue;
				try {
					hasedValue = SdcsHashProvider.generateMd5Hash(md5HashData);
					deliveredList.put("secure_hash", hasedValue);
					
				} catch (NoSuchAlgorithmException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}*/
		
					System.out.println(md5HashData);
					
					
					DecimalFormat df = new DecimalFormat("#.##");
					df.setRoundingMode(RoundingMode.HALF_UP);
					String  tamount2 = df.format(totalamount); // 0.91239

				deliveredList.put("total_Amount",tamount2);
				deliveredList.put("refferenceId",referenceNumber);
				
				
				
			} catch (SQLException e) {
				deliveredList.put("result", false);

				try {
					updatePaymentDetails.close();
				} catch (SQLException sqlEx) {
					System.out.println("Exception in QuickHistoryServerImpl");
					
					
				}

			} finally {
				try {
					updatePaymentDetails.close();
				} catch (SQLException e) {
					System.out.println("Exception in QuickHistoryServerImpl");
				}
			}

		

	} else {
		deliveredList.put("result", false);
	}

	
	
	return deliveredList.toString();
}

	@Override
	public String cancelDelBoy(String restaurantId, String bookingId) {
		// TODO Auto-generated method stub
		
		JSONObject removed = new  JSONObject();
		
		boolean cancelationResponce = userDao.cancelDelBoy(restaurantId,bookingId);
		
		if(cancelationResponce){
			
			removed.put("result",true);
		}
		
		return removed.toString();
	}

	@Override
	public String restauantAcceptedCourier(String bookingId, String deliveryBoyId,String transfer,String no_of_del_boys) {
		
		
		JSONObject acceptedList = new JSONObject();
		Long resultsetAcceptedList = userDao.restauantAcceptedCourier(bookingId,deliveryBoyId,transfer,no_of_del_boys);
		// TODO Auto-generated method stub
		if (resultsetAcceptedList >0) {
			
					acceptedList.put("status", true);					
				
				} else{
					acceptedList.put("status", false);

					
				} 

			
		return acceptedList.toString();
	}

	@Override
	public String restauantPickedList(String deliveryBoyId) {
		// TODO Auto-generated method stub
		
		
		
		JSONObject pickedList = new JSONObject();
		ResultSet resultsetpickedList = userDao.restauantPickedList(deliveryBoyId);
		// TODO Auto-generated method stub
		if (resultsetpickedList != null) {

			JSONArray pickedArray = new JSONArray();
			{
				try {
					while (resultsetpickedList.next()) {
						
						
						JSONObject pickedObject = new JSONObject();
						pickedObject.put("time_of_booking",
								resultsetpickedList.getTimestamp("time_of_booking"));
						pickedObject.put("id",
								resultsetpickedList.getInt("booking_Id"));
						pickedObject.put("restaurant_name",
								resultsetpickedList.getString("restaurant_name"));
						pickedObject.put("restaurant_address",
								resultsetpickedList.getString("restaurant_address"));
						pickedObject.put("restaurant_contact",
								resultsetpickedList.getString("restaurant_contact"));
						pickedObject.put("reciever_name",
								resultsetpickedList.getString("reciever_name"));
						pickedObject.put("reciever_address",
								resultsetpickedList.getString("reciever_address"));
						pickedObject.put("reciever_contact",
								resultsetpickedList.getString("reciever_contact"));
						pickedObject.put("pay_type",
								resultsetpickedList.getString("pay_type"));
						pickedObject.put("codAmount",
								resultsetpickedList.getString("codAmount"));
							pickedObject.put("distance",
								resultsetpickedList.getString("distance"));
						
					/*	
						if (resultsetpickedList.getDouble("distance") <= 5){
					*/		
						/*	distanceTravelledAmount = resultsetpickedList.getDouble("amount");
						*/	
						/*}else{
							
							double i = resultsetpickedList.getDouble("distance");
							
							for(int t = 0;t < i;t++){
								
								distanceTravelledAmount += 8;
							}
					*/	/*}*/
						
						/*pickedObject.put("amount",
								distanceTravelledAmount);
						System.out.println("distance"+" "+distanceTravelledAmount);
					*/	
						pickedArray.put(pickedObject);

					}
					pickedList.put("status", true);
					pickedList.put("Picked_Couriers", pickedArray);
					resultsetpickedList.close();
					
				} catch (SQLException e) {
					pickedList.put("status", false);

					try {
						resultsetpickedList.close();
					} catch (SQLException sqlEx) {
						System.out.println("Exception in QuickHistoryServerImpl");
					}

				} finally {
					try {
						resultsetpickedList.close();
					} catch (SQLException e) {
						System.out
								.println("Exception in QuickHistoryServerImpl");
					}
				}

			}

		} else {
			pickedList.put("status", false);
		}
		return pickedList.toString();
	}

	@Override
	public String restaurantdistanceUpdate(String distance,String bookingId,
			String deliveryBoyId, String status) {
		
		JSONObject updateDistance = new JSONObject();
		
		boolean responceDistance = userDao.restaurantdistanceUpdate(distance,bookingId,deliveryBoyId,status);
		
		if(responceDistance){
			updateDistance.put("result", true);
		}else{
			
			updateDistance.put("result", false);
			
		}
		
		return updateDistance.toString();
	}

	@Override
	public String showDelBoyLocation(String userId) {
		
		JSONObject delBoyObject = new JSONObject();
		
		ResultSet delBoyMapAdmin = userDao.showDelBoyLocation(userId);
		// TODO Auto-generated method stub
		if (delBoyMapAdmin != null) {

			JSONArray delBoyMapArray = new JSONArray();
			{
				try {
					while (delBoyMapAdmin.next()) {
						
						
						JSONObject delObject = new JSONObject();
						
						delObject.put("lattitude",
								delBoyMapAdmin.getDouble("latitude"));
						delObject.put("longittude",
								delBoyMapAdmin.getDouble("longitude"));
						delObject.put("phoneNumber",
								delBoyMapAdmin.getString("phone"));
						delObject.put("name",
								delBoyMapAdmin.getString("full_name"));
						
						delBoyMapArray.put(delObject);

					}
					delBoyObject.put("status", true);
					delBoyObject.put("responceCordinates", delBoyMapArray);
					
					System.out.println(delBoyObject);
					delBoyMapAdmin.close();
				} catch (SQLException e) {
					delBoyObject.put("status", false);

					try {
						delBoyMapAdmin.close();
					} catch (SQLException sqlEx) {
						System.out.println("Exception in QuickHistoryServerImpl");
					}

				} finally {
					try {
						delBoyMapAdmin.close();
					} catch (SQLException e) {
						System.out
								.println("Exception in QuickHistoryServerImpl");
					}
				}

			}

		} else {
			delBoyObject.put("status", false);
		}
		return delBoyObject.toString();

	

}

	@Override
	public String adminCourierBooking(String customerName,
			String customerAddres, String customerPhone, String customerAmount,
			double customerLatitude, double customerLongitude) {
		
		JSONObject courierBooking = new JSONObject();
		
		boolean inserted = userDao.adminCourierBooking(customerName,customerAddres,customerPhone,customerAmount,customerLatitude,customerLongitude);
		
		if(inserted == true){
			
			courierBooking.put("result",true);
			courierBooking.put("message", "Courier Booked Succesfully.");
			
		}else{
			
			courierBooking.put("result",false);
			courierBooking.put("message", "Sorry Could not book courier");

		}
		
		
		// TODO Auto-generated method stub
		return courierBooking.toString();
	}

	@Override
	public String validateOtp(String otp, String bookingId, String deliveryBoyId) {
		// TODO Auto-generated method stub
		
		JSONObject validateObject = new JSONObject();
		String sendername="";
		String senderphone="";
	
		String recieverphone="";
		ResultSet otpupdated = userDao.validateOtp(otp,bookingId,deliveryBoyId);
		
		if(otpupdated != null){
			
				try {
					while (otpupdated.next()) {
			validateObject.put("result", true);
			sendername=otpupdated.getString("restaurant_name");
			
			senderphone=otpupdated.getString("restaurant_contact");
			
			recieverphone=otpupdated.getString("reciever_contact");
	
			
					}
					String sName = sendername.replace(" ", "");
					String smspattern="%20The%20courier%20with%20the%20booking%20id%20"+bookingId+"%20is%20delivered.%20Thank%20you%20for%20using%20SDCS.";
					SdcsSMSComponent.sendSms(recieverphone, smspattern);
					String smspatterns="%20Dear%20"+sName+"%20your%20courier%20has%20been%20delivered.%20The%20tracking%20number%20is%20"+bookingId+".%20Thank%20you%20for%20using%20SDCS.";
					SdcsSMSComponent.sendSms(senderphone, smspatterns);
					SdcsSMSComponent.sendSms("7411791422", smspatterns);
					SdcsSMSComponent.sendSms("9916168585", smspatterns);
					SdcsSMSComponent.sendSms("9535337626", smspatterns);
					SdcsSMSComponent.sendSms("8151965401", smspatterns);
					otpupdated.close();
					
				} catch (SQLException e) {
					validateObject.put("status", false);

					try {
						otpupdated.close();
					} catch (SQLException sqlEx) {
						System.out.println("Exception in QuickHistoryServerImpl");
					}

				} finally {
					try {
						otpupdated.close();
					} catch (SQLException e) {
						System.out
								.println("Exception in QuickHistoryServerImpl");
					}
				}
				
		}else{
			validateObject.put("result", false);
			
		}
		
		return validateObject.toString();
	}

	@Override
	public String restauantDeliveredList(String deliveryBoyId,String date) {
		// TODO Auto-generated method stub
		
		JSONObject deliveredList = new JSONObject();
		
		ResultSet delivered = userDao.restauantDeliveredList(deliveryBoyId,date);
		
		if (delivered != null) {

		/*	double distanceTravelledAmount = 0;
		*/	
			JSONArray pickedArray = new JSONArray();
			{
				try {
					while (delivered.next()) {
						
						
						JSONObject pickedObject = new JSONObject();
						pickedObject.put("delivered_time",
								delivered.getString("delivered_time"));
						pickedObject.put("id",
								delivered.getInt("booking_Id"));
							pickedObject.put("restaurant_name",
								delivered.getString("restaurant_name"));
						pickedObject.put("restaurant_address",
								delivered.getString("restaurant_address"));
						pickedObject.put("restaurant_contact",
								delivered.getString("restaurant_contact"));
						pickedObject.put("reciever_name",
								delivered.getString("reciever_name"));
						pickedObject.put("reciever_address",
								delivered.getString("reciever_address"));
						pickedObject.put("reciever_contact",
								delivered.getString("reciever_contact"));
						pickedObject.put("time_of_booking",
								delivered.getTimestamp("time_of_booking"));
						pickedObject.put("codAmount",
								delivered.getString("codAmount"));
						pickedObject.put("deliveryBoyamount",
								delivered.getString("deliveryBoyamount"));
						pickedObject.put("distance",
								delivered.getString("distance"));
						pickedObject.put("content",
								delivered.getString("content"));
						pickedObject.put("vehicle_needed",
								delivered.getString("vehicle_needed"));
						pickedObject.put("deliveryboys_needed",
								delivered.getString("deliveryboys_needed"));
						
						
						/*if (delivered.getDouble("distance") <= 5){
							
							distanceTravelledAmount = delivered.getDouble("amount");
							
						}else{
							
							double i = delivered.getDouble("distance");
							
							for(int t = 0;t < i;t++){
								
								distanceTravelledAmount += 8;
							}
						}
						
						pickedObject.put("amount",
								distanceTravelledAmount);
				*/		
						pickedArray.put(pickedObject);

					}
					
					
					ResultSet set = userDao.transferDetails(deliveryBoyId,date);
					
					
					
					if(set != null){
						
						while(set.next()){
							
							
							
							
							JSONObject pickedObject = new JSONObject();
							
							if(set.getString("del_boy_id_1").equals(deliveryBoyId)){
								
							
								pickedObject.put("delivered_time",
										set.getString("delivered_time"));
								pickedObject.put("id",
										set.getInt("booking_id"));
								pickedObject.put("restaurant_name",
											set.getString("restaurant_name"));
								pickedObject.put("restaurant_address",
										set.getString("restaurant_address")+","+set.getString("location1"));
								pickedObject.put("restaurant_contact",
										set.getString("restaurant_contact"));
								pickedObject.put("reciever_name",
										set.getString("reciever_name"));
								pickedObject.put("reciever_address",
										set.getString("reciever_address"));
								pickedObject.put("reciever_contact",
										set.getString("reciever_contact"));
								pickedObject.put("time_of_booking",
										set.getTimestamp("time_of_booking"));
								pickedObject.put("codAmount",
										"0");
								pickedObject.put("deliveryBoyamount",
										set.getString("del_boy1_amount"));
								pickedObject.put("distance",
										set.getString("del_boy1_distance"));
								pickedObject.put("content",
										set.getString("content"));
								pickedObject.put("vehicle_needed",
										set.getString("vehicle_needed"));
								pickedObject.put("deliveryboys_needed",
										set.getString("deliveryboys_needed"));
							
								pickedArray.put(pickedObject);
						}
					
							
							
							if(set.getString("del_boy_id_2").equals(deliveryBoyId)){
								
								
								pickedObject.put("delivered_time",
										set.getString("delivered_time"));
								pickedObject.put("id",
										set.getInt("booking_id"));
								pickedObject.put("restaurant_name",
											set.getString("restaurant_name"));
								pickedObject.put("restaurant_address",
										set.getString("location1")+","+set.getString("location2"));
								pickedObject.put("restaurant_contact",
										set.getString("restaurant_contact"));
								pickedObject.put("reciever_name",
										set.getString("reciever_name"));
								pickedObject.put("reciever_address",
										set.getString("reciever_address"));
								pickedObject.put("reciever_contact",
										set.getString("reciever_contact"));
								pickedObject.put("time_of_booking",
										set.getTimestamp("time_of_booking"));
								pickedObject.put("codAmount",
										"0");
								pickedObject.put("deliveryBoyamount",
										set.getString("del_boy2_amount"));
								pickedObject.put("distance",
										set.getString("del_boy2_distance"));
								pickedObject.put("content",
										set.getString("content"));
								pickedObject.put("vehicle_needed",
										set.getString("vehicle_needed"));
								pickedObject.put("deliveryboys_needed",
										set.getString("deliveryboys_needed"));
							
								pickedArray.put(pickedObject);
						}
if(set.getString("del_boy_id_3").equals(deliveryBoyId)){
								
								
								pickedObject.put("delivered_time",
										set.getString("delivered_time"));
								pickedObject.put("id",
										set.getInt("booking_Id"));
								pickedObject.put("restaurant_name",
											set.getString("restaurant_name"));
								pickedObject.put("restaurant_address",
										set.getString("location1")+","+set.getString("location2"));
								pickedObject.put("restaurant_contact",
										set.getString("restaurant_contact"));
								pickedObject.put("reciever_name",
										set.getString("reciever_name"));
								pickedObject.put("reciever_address",
										set.getString("reciever_address"));
								pickedObject.put("reciever_contact",
										set.getString("reciever_contact"));
								pickedObject.put("time_of_booking",
										set.getTimestamp("time_of_booking"));
								pickedObject.put("codAmount",
										"0");
								pickedObject.put("deliveryBoyamount",
										set.getString("del_boy3_amount"));
								pickedObject.put("distance",
										set.getString("del_boy3_distance"));
								pickedObject.put("content",
										set.getString("content"));
								pickedObject.put("vehicle_needed",
										set.getString("vehicle_needed"));
								pickedObject.put("deliveryboys_needed",
										set.getString("deliveryboys_needed"));
							
								pickedArray.put(pickedObject);
						}
					
					}
					}
					
					
					deliveredList.put("status",true);
					deliveredList.put("Delivered_couriers", pickedArray);
					delivered.close();
					
				} catch (SQLException e) {
					deliveredList.put("status", false);

					try {
						delivered.close();
					} catch (SQLException sqlEx) {
						System.out.println("Exception in QuickHistoryServerImpl");
					}

				} finally {
					try {
						delivered.close();
					} catch (SQLException e) {
						System.out
								.println("Exception in QuickHistoryServerImpl");
					}
				}

			}

		} else {
			deliveredList.put("status", false);
		}

		
		return deliveredList.toString();
	}

	@Override
	public String delBoyDeliveredList(String deliveryBoyId) {
		// TODO Auto-generated method stub
		
		JSONObject deliveredList = new JSONObject();
		
ResultSet deliveredListResultSet = userDao.delBoyDeliveredList(deliveryBoyId);
		
		if (deliveredListResultSet != null) {

	Timestamp name = null;
			
			String name2 = "0" ;
			
			int number = 0;
				
			double extraDistance = 0.00;
		    double damount=0.00;
		    double tamount=0.00;
		    double textradistance=0.00;
		    double tAmount = 0.0;
		    double tKm = 0.0;
		    int tNo = 0;
		    
		 	    String date = "";

		
				try {					
					
					JSONArray couriersArray = new JSONArray();
					while (deliveredListResultSet.next()) {											
												
							JSONObject couriersObject = new JSONObject();
							
							name = deliveredListResultSet.getTimestamp("time_of_booking");
							String amounta = deliveredListResultSet.getString("deliveryBoyamount");
							damount=Double.parseDouble(amounta);
							extraDistance = deliveredListResultSet.getDouble("extra_distance");
						
							String DATE_FORMAT = "yyyy/MM/dd";
						    SimpleDateFormat sdf = new SimpleDateFormat(DATE_FORMAT);
							
						    date = sdf.format(name);
						     
							if(date.equals(name2)){
												
								tamount=damount+tamount;
								textradistance=textradistance+extraDistance;
								
								number = number + 1;								
								
								
									
								
							}else if(name2!=("0")){
								
								
								 
								    	
								
								   				
								couriersObject.put("restaurant_name",name2);
								
								couriersObject.put("number_of_couriers",number);
								
								couriersObject.put("distance",textradistance);
								
								couriersObject.put("amount",tamount);
								
								couriersArray.put(couriersObject);
								
								tamount=damount;
								textradistance=extraDistance;
								
                                						
													number = 1;
													
													name2 = date;
													tAmount = 0.0;
												     tKm = 0.0;
												     tNo = 0;
												    
													ResultSet set = userDao.tranferLogicMoneyAddition(deliveryBoyId,date);
												   
													if(set != null){
														
														
														while(set.next()){
															
															
															if(set.getString("del_boy_id_1").equals(deliveryBoyId)){
																++tNo;
																tAmount = tAmount + Double.parseDouble(set.getString("del_boy1_amount"));
																
																String km = set.getString("del_boy1_distance");
																
																String kmRemove = km.replace(" km", "");
																
																tKm = tKm +Double.parseDouble(kmRemove);
																		
															}
						                                      if(set.getString("del_boy_id_2").equals(deliveryBoyId)){
						                                    	  ++tNo;
																tAmount = tAmount + Double.parseDouble(set.getString("del_boy2_amount"));
						String km = set.getString("del_boy2_distance");
																
																String kmRemove = km.replace(" km", "");
																
																tKm = tKm +Double.parseDouble(kmRemove);
																		
															}
						                                      if(set.getString("del_boy_id_3").equals(deliveryBoyId)){
						                                    	  ++tNo;
						  										tAmount = tAmount + Double.parseDouble(set.getString("del_boy3_amount"));
						String km = set.getString("del_boy3_distance");
																
																String kmRemove = km.replace(" km", "");
																
																tKm = tKm +Double.parseDouble(kmRemove);
						  												
						  									}
														}
													}
													number+=tNo;
													
													textradistance+=tKm;
													
													tamount+=tAmount;
											
											    	  tAmount = 0.0;
													     tKm = 0.0;
													     tNo = 0;  
													
													
							}else
							{
								tAmount = 0.0;
							     tKm = 0.0;
							     tNo = 0;
							    
								ResultSet set = userDao.tranferLogicMoneyAddition(deliveryBoyId,date);
							   
								if(set != null){
									
									
									while(set.next()){
										
										
										if(set.getString("del_boy_id_1").equals(deliveryBoyId)){
											++tNo;
											tAmount = tAmount + Double.parseDouble(set.getString("del_boy1_amount"));
											
											String km = set.getString("del_boy1_distance");
											
											String kmRemove = km.replace(" km", "");
											
											tKm = tKm +Double.parseDouble(kmRemove);
													
										}
	                                      if(set.getString("del_boy_id_2").equals(deliveryBoyId)){
	                                    	  ++tNo;
											tAmount = tAmount + Double.parseDouble(set.getString("del_boy2_amount"));
	String km = set.getString("del_boy2_distance");
											
											String kmRemove = km.replace(" km", "");
											
											tKm = tKm +Double.parseDouble(kmRemove);
													
										}
	                                      if(set.getString("del_boy_id_3").equals(deliveryBoyId)){
	                                    	  ++tNo;
	  										tAmount = tAmount + Double.parseDouble(set.getString("del_boy3_amount"));
	String km = set.getString("del_boy3_distance");
											
											String kmRemove = km.replace(" km", "");
											
											tKm = tKm +Double.parseDouble(kmRemove);
	  												
	  									}
									}
								}
								number+=tNo;
								
								textradistance+=tKm;
								
								tamount+=tAmount;
						
						    	  tAmount = 0.0;
								     tKm = 0.0;
								     tNo = 0;
								tamount=damount;
								textradistance=extraDistance;
								
                                						
													number = 1;
													
													name2 = date;
								}
					}
					
					
					
				
					
					
					
					
					
					
					JSONObject couriersObject = new JSONObject();
					
					couriersObject.put("restaurant_name",date);
					
					couriersObject.put("number_of_couriers",number+tNo);
					
					couriersObject.put("distance",textradistance+tKm);
					
					couriersObject.put("amount",tamount+tAmount);

					
					couriersArray.put(couriersObject);
					
					deliveredList.put("result", true);
					deliveredList.put("Delivered_courierss",couriersArray);
					
					System.out.println(deliveredList);
					
				} catch (SQLException e) {
					deliveredList.put("result", false);

					try {
						deliveredListResultSet.close();
					} catch (SQLException sqlEx) {
						System.out.println("Exception in QuickHistoryServerImpl");
					}

				} finally {
					try {
						deliveredListResultSet.close();
					} catch (SQLException e) {
						System.out.println("Exception in QuickHistoryServerImpl");
					}
				}
		} else {
			deliveredList.put("result", false);
		}

		
		
		return deliveredList.toString();
	}
	
	@Override
	public String delBoyDeliveredLists(String deliveryBoyId) {
		// TODO Auto-generated method stub
		
		JSONObject deliveredList = new JSONObject();
		
ResultSet deliveredListResultSet = userDao.delBoyDeliveredListsAbcd(deliveryBoyId);
		
		if (deliveredListResultSet != null) {

	Timestamp name = null;
			
			String name2 = "0" ;
			
			int number = 0;
				
			double extraDistance = 0.00;
		    double damount=0.00;
		    double tamount=0.00;
		    double textradistance=0.00;
		    
		 	    String date = "";

		
				try {
					
					
					JSONArray couriersArray = new JSONArray();
					while(deliveredListResultSet.next()) {
						
						
												
							JSONObject couriersObject = new JSONObject();
							
							name = deliveredListResultSet.getTimestamp("time_of_booking");
							String amounta = deliveredListResultSet.getString("total_amount");
							damount=Double.parseDouble(amounta);
							extraDistance = deliveredListResultSet.getDouble("extra_distance");
						
							String DATE_FORMAT = "yyyy/MM/dd";
						    SimpleDateFormat sdf = new SimpleDateFormat(DATE_FORMAT);
							
						    date = sdf.format(name);
						    
							if(date.equals(name2)){
												
								tamount=damount+tamount;
								textradistance=textradistance+extraDistance;
								
								number = number + 1;								
								
								
									
								
							}else if(name2 != "0"){
								
													
								couriersObject.put("time_of_booking",name2);
								
								couriersObject.put("number_of_couriers",number);
								couriersObject.put("payedstatus","Delivered");
								
								couriersObject.put("distance",textradistance);
								
								couriersObject.put("amount",tamount);
								
								couriersArray.put(couriersObject);
								
								tamount=damount;
								textradistance=extraDistance;
								
                                						
													number = 1;
													
													name2 = date;
							}else
							{
								
								
								tamount=damount;
								textradistance=extraDistance;
								
                                						
													number = 1;
													
													name2 = date;
												

								}

						
					}
					JSONObject couriersObject = new JSONObject();
					
					double roundOff = Math.round(tamount * 100.0) / 100.0;
					
					couriersObject.put("time_of_booking",date);
					couriersObject.put("payedstatus","Delivered");					
					couriersObject.put("number_of_couriers",number);					
					couriersObject.put("distance",textradistance);					
					couriersObject.put("amount",roundOff);
					/*couriersObject.put("content",deliveredListResultSet.getString("content"));
					couriersObject.put("vehicle_needed",deliveredListResultSet.getString("vehicle_needed"));
					couriersObject.put("deliveryboys_needed",deliveredListResultSet.getString("vehicle_needed"));
*/
					
					couriersArray.put(couriersObject);
					
					deliveredList.put("result", true);
					deliveredList.put("all_couriers",couriersArray);
					
					System.out.println(deliveredList);
				} catch (SQLException e) {
					deliveredList.put("result", false);

					try {
						deliveredListResultSet.close();
					} catch (SQLException sqlEx) {
						System.out.println("Exception in QuickHistoryServerImpl");
					}

				} finally {
					try {
						deliveredListResultSet.close();
					} catch (SQLException e) {
						System.out.println("Exception in QuickHistoryServerImpl");
					}
				}

		

		} else {
			deliveredList.put("result", false);
		}

		
		
		return deliveredList.toString();
	}
	


}