package com.sdcs.courierbooking.service;

import org.json.JSONObject;

import com.sdcs.courierbooking.model.RestaurantRegistration;
import com.sdcs.courierbooking.model.SdcsDeliveryBoy;
import com.sdcs.courierbooking.model.SdcsUser;


public interface UserService {

	public String registerUser(SdcsUser sdcsUser);
	 
	 public String authenticateUser(String strUsername, String strPassword);
	 
	 public String registerDeliveryBoy(SdcsDeliveryBoy sdcsDeliveryBoy);
	 
	 public String authenticateDeliveryBoy(String strUsername, String strPassword,double langitude,double lattitude,String registrationid);
	 
	 public String sendForgotPassword(String strcontact);
	 
	 public String userSuggestion(int inSelctionOne,int inSelctionTwo,String strmessage,String strEmail);
	 
	 public String authenticateAdmin(String strUsername, String strPassword);
	 
	 public String authenticateAdminDetails(String strAdminDate);
	  
	  public String adminBulk(String strBulkAdminDAta);

	  public String adminBookedDetails(String strAdminDate,Integer intStatusOfOption);
	 
	  public String bulkCouriers(String strBulkName, String strBulkMobile,String strBulkEmail);
	  
	  public String deliveryBoyLogin(Integer HtHorNml);
	  
	  public String toGetOfficeDetails(String office_id);
	  
      public String foodPickUpUserRegister(SdcsUser sdcsUser);
	  
	  public JSONObject foodPickUpSelectPackage(SdcsUser sdcsUser,String strTrackingId,boolean oneMonth, boolean threeMonth, boolean sixMonth, boolean oneYear);

	public String deliveryBoyBooking(String contactNumber,String drestorantName, Double lat,
			Double longitude);

	public String deliveryBoyBookingss(String logoutTime);
	public String deliveryBoyBookings(String logoutTime,Double lon,Double latti);

	public String couriersUpdateToDeliveryBoy(Double longitude, Double latitude);

	public JSONObject christmasSales(String selectedItem,String senderName,String senderPhone,
			String recieverName,String recieverAddress,String recieverPhone,String pincode,String surpriceNametoController,String surpriceDatetoController,String surpriceTimetoController,String photo,String totalAmount,String cod);

	public String christmasSaleAdminDetails(String strAdminDate);

	public String adminDeliveryBoyBooking(String restaurantId);

	public String registerRestaurant(RestaurantRegistration restaurantRegistration);

	public String restaurantLogin(String contactNumber, String password);

	public String cakeShowBooking(String name, String adress, String contact,String deliveryBoyId,String userId);

	public String restaurantBooking(int status,String bookingId,String deliveryBoyId);

	public String cakeShowAddress(String status, String deliveryBoyId);

	public String cakeShowBookingAdmin(String date);

	public String  restauantLiveList(double lat,double lon);

	public String updateLocationofDeliveryBoy(Double longitude,
			   Double latitude,  String phoneNumber);

	public String updatedistance(String distance, String deliveryBoy_Id,
			int bookingId, int status);

	
	public String updatedelBoyBooking(String rnumber,String content,String type,String userId, String name, String contact,String address,String defaultAmount,String status,String codAmount,double latitude,double longitude);
	public String updateImage(String image,int bookingId, String delBoyId);

	public String freshBookingList(String restaurantId,String bookingId);

	public String recieverAddress(String recieverName, String recieverAddress,
			String recieverContact, String bookingId);

	public String paymentUpdate(String restaurantId);

	public String cancelDelBoy(String restaurantId, String bookingId);

	public String restauantAcceptedCourier(String bookingId, String deliveryBoyId,String transfer,String no_of_del_boys);

	public String restauantPickedList(String deliveryBoyId);

	public String restaurantdistanceUpdate(String distance,String bookingId,
			String deliveryBoyId, String status);

	public String showDelBoyLocation(String userId);

	public String adminCourierBooking(String customerName,
			String customerAddres, String customerPhone, String customerAmount,
			double customerLatitude, double customerLongitude);

	public String validateOtp(String otp, String bookingId, String deliveryBoyId);

	public String restauantDeliveredList(String deliveryBoyId,String date);

	public String delBoyDeliveredLists(String deliveryBoyId);
	public String delBoyDeliveredList(String deliveryBoyId);
	

	
	
}
