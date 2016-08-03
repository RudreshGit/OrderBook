package com.sdcs.courierbooking.service;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sdcs.courierbooking.dao.PaymentDetailsDao;


@Service
public class PayDetailsServiceImpl implements PayDetailsService{

	@Autowired
	PaymentDetailsDao paymentDetailsDao;

	@Override
	public String hotelPaymentDetails(String phonenumber) {
		// TODO Auto-generated method stub
		
		JSONObject listObject = new JSONObject();
		int status=0;
		int count = 0;
		int userId = 0;
		int pending = 0;
		int delivered = 0;
		int accepted= 0;
		double pickedAmount = 0.0;
		double pendingAmount = 0.0;
		double DeliveredAmount = 0.0;
		String name = "0";
		double TotAmount = 0.0;
		int cancelled = 0;
		double cancelledAmount = 0.00;
		double grandTotal = 0.00;
		ResultSet listResponse = paymentDetailsDao.hotelPaymentDetails(phonenumber);
		
		
		if(listResponse != null){
			
			try{
								
				while(listResponse.next()){
									
					
					
					userId = listResponse.getInt("delivery_boy_id");
					
					 name = listResponse .getString("full_name");
					
					 status = listResponse.getInt("status");
					String amount = listResponse.getString("deliveryBoyamount");
					
					double tAmount = Double.parseDouble(amount);
					
					
					if(status == 1){
						++count;
						++pending;
						
						TotAmount = TotAmount + tAmount;
						pendingAmount = pendingAmount +tAmount;
						
					}else if(status == 2){
						++count;
						++accepted;
						TotAmount = TotAmount + tAmount;
						pickedAmount = pickedAmount +tAmount;
					}else if(status == 3){
						++count;
						++delivered;
						TotAmount = TotAmount + tAmount;
						DeliveredAmount = DeliveredAmount + tAmount;
					}else if(status == 4){
						++cancelled;
						cancelledAmount = cancelledAmount + tAmount;
					}
				
				/*	totalAmount = totalAmount + tAmount;*/
					
					
									 
					
				}
				ResultSet set = paymentDetailsDao.getTransferedCouriersList(""+userId);
				
				if(set != null){									
					
					while(set.next()){
						
						status = set.getInt("status");
						/*JSONObject object=new JSONObject(); */
					    if(set.getString("del_boy_id_1").equals(""+userId)){
					    	++count;
					    	Double amount=Double.parseDouble(set.getString("del_boy1_amount"));
					    	grandTotal = grandTotal +amount ;
					    	 if(status == 1){
					    		 ++pending;
					    		 pendingAmount = pendingAmount + amount;		
					    		}else if(status == 2){
					    			++accepted;
					    			pickedAmount = pickedAmount + amount;		
								}else if(status == 3){
									DeliveredAmount = DeliveredAmount + amount;						
								
									++delivered;							
								}					    	 
																									
									
						}
                          if(set.getString("del_boy_id_2").equals(""+userId)){
                        	  ++count;
                        	  Double amount=Double.parseDouble(set.getString("del_boy2_amount"));
  					    	grandTotal = grandTotal +amount ;
  					    
                        	  if(status == 1){
                        		  ++pending;
                        		  pendingAmount = pendingAmount + amount;		
                        		}else if(status == 2){
                        			++accepted ;
                        			pickedAmount = pickedAmount + amount;		
      						}else if(status == 3){
      							DeliveredAmount = DeliveredAmount + amount;							
      							
      							++delivered ;							
      						}	
          
						}
                          if(set.getString("del_boy_id_3").equals(""+userId)){
                        	  ++count ;
                        	  Double amount=Double.parseDouble(set.getString("del_boy3_amount"));
  					    	grandTotal = grandTotal +amount ;
  					    
                        	  if(status == 1){
                        		 ++ pending;
                        		  pendingAmount = pendingAmount + amount;		
      						}else if(status == 2){
      							++accepted;
      							pickedAmount = pickedAmount + amount;		
      						}else if(status == 3){
      							DeliveredAmount = DeliveredAmount + amount;							
      							++delivered;							
      						}	
                        	                      
										
							}
					}
				}
				grandTotal = TotAmount - cancelledAmount;
				listObject.put("status", true);
				listObject.put("userId", userId);
				listObject.put("name",name);
				listObject.put("totalCouriers", count);
				listObject.put("payment", grandTotal);
				listObject.put("pending", pending);
				listObject.put("picked", accepted);
				listObject.put("delivered", delivered);
				listObject.put("pendingAmount", pendingAmount);
				listObject.put("pickedAmount", pickedAmount);
				listObject.put("DeliveredAmount", DeliveredAmount);
		}catch(SQLException e){
			e.printStackTrace();
		}try{
			
			listResponse.close();
		}catch(SQLException e){
			e.printStackTrace();
		}
		}else{
			
			listObject.put("status", false);
			listObject.put("mes", "Could not get the courier details");
		}
		return listObject.toString();
	}

	@Override
	public String updateResponse(String payType,String payUserId) {
		// TODO Auto-generated method stub
		
		JSONObject object = new JSONObject();
		
		long updateResponse = paymentDetailsDao.updateResponse(payType,payUserId);
		
		if(updateResponse > 0){
			object.put("status", true);
			object.put("payType", payType);
		}
		
		return object.toString();
	}

	@Override
	public String allCouriersLisyPay(String userId,int status) {
		// TODO Auto-generated method stub
		
		JSONObject coureirsList = new JSONObject();
		
		ResultSet courierSet = paymentDetailsDao.allCouriersLisyPay(userId,status);
		
		int count=0;
		if(courierSet != null){
			JSONArray courierArray = new JSONArray();
			try{
				
				while(courierSet.next()){
					
					JSONObject object = new JSONObject();
					++count;
					object.put("time",courierSet.getTimestamp("time_of_booking"));
					object.put("bookingId", courierSet.getInt("booking_Id"));
					object.put("content", courierSet.getString("content"));
					object.put("sendername", courierSet.getString("restaurant_name"));
					object.put("senderPhone", courierSet.getString("restaurant_contact"));
					object.put("recievername", courierSet.getString("reciever_name"));
					object.put("recieverContact", courierSet.getString("reciever_contact"));
					object.put("courierAmount", courierSet.getString("deliveryBoyamount"));
					object.put("ExtraDistanceTravelled", courierSet.getDouble("extra_distance"));
					object.put("status",courierSet.getInt("status"));					
					courierArray.put(object);
				}
			
				ResultSet seta = paymentDetailsDao.getEnquirydetails(userId,status);
				if(seta != null){
					
					while(seta.next()){																								
						
						JSONObject pickedObject = new JSONObject();
						
						if(seta.getString("del_boy_id_1").equals(userId)){
							++count;				 						
							pickedObject.put("bookingId", ""+seta.getInt("booking_Id"));	
							pickedObject.put("time", seta.getString("time_of_booking"));						
							pickedObject.put("content", seta.getString("content"));
						
							pickedObject.put("sendername", seta.getString("restaurant_name"));
							pickedObject.put("senderPhone", seta.getString("restaurant_contact")+","+seta.getString("restaurant_address"));
							pickedObject.put("recievername",seta.getString("reciever_name"));
							pickedObject.put("recieverContact",seta.getString("reciever_address")+","+seta.getString("reciever_contact")+""+seta.getString("location1"));
							pickedObject.put("status", seta.getInt("status"));
							pickedObject.put("courierAmount",
									seta.getString("del_boy1_amount"));
							pickedObject.put("ExtraDistanceTravelled",
									seta.getString("del_boy1_distance"));							
							courierArray.put(pickedObject);
					}											
						
						if(seta.getString("del_boy_id_2").equals(userId)){
							++count;
							pickedObject.put("bookingId", ""+seta.getInt("booking_Id"));	
							pickedObject.put("time", seta.getString("time_of_booking"));						
							pickedObject.put("content", seta.getString("content"));
							
							pickedObject.put("sendername", seta.getString("restaurant_name"));
							pickedObject.put("senderPhone", seta.getString("restaurant_contact")+","+seta.getString("restaurant_address")+""+seta.getString("location1"));
							pickedObject.put("recievername",seta.getString("reciever_name"));
							pickedObject.put("recieverContact",seta.getString("reciever_address")+","+seta.getString("reciever_contact")+""+seta.getString("location2"));
							pickedObject.put("status", seta.getInt("status"));
							pickedObject.put("courierAmount",
									seta.getString("del_boy2_amount"));
							pickedObject.put("ExtraDistanceTravelled",
									seta.getString("del_boy2_distance"));							
							courierArray.put(pickedObject);
														
					}
               if(seta.getString("del_boy_id_3").equals(userId)){
            	   ++count;
            	   pickedObject.put("bookingId", ""+seta.getInt("booking_Id"));	
					pickedObject.put("time", seta.getString("time_of_booking"));						
					pickedObject.put("content", seta.getString("content"));					
					pickedObject.put("sendername", seta.getString("restaurant_name"));
					pickedObject.put("senderPhone", seta.getString("restaurant_contact")+","+seta.getString("restaurant_address")+""+seta.getString("location2"));
					pickedObject.put("recievername",seta.getString("reciever_name"));
					pickedObject.put("recieverContact",seta.getString("reciever_address")+","+seta.getString("reciever_contact"));
					pickedObject.put("status", seta.getInt("status"));
					pickedObject.put("courierAmount",
							seta.getString("del_boy3_amount"));
					pickedObject.put("ExtraDistanceTravelled",
							seta.getString("del_boy3_distance"));							
					courierArray.put(pickedObject);
	
					}
				
				}
				}

				
				coureirsList.put("status", true);
				coureirsList.put("courierList",courierArray);
			
		}catch(SQLException e){
			e.printStackTrace();
		}try{
			
			courierSet.close();
		}catch(SQLException e){
			e.printStackTrace();
		}finally{
			
			try{
				courierSet.close();
			}catch(SQLException e){
				e.printStackTrace();
			}
		}
		}else{
			
			coureirsList.put("status", false);
		}
		return coureirsList.toString();
	}

	@Override
	public String getHotelPayList(String hotelName) {
		// TODO Auto-generated method stub
		
		JSONObject couriersObject = new JSONObject();
		
		ResultSet response = paymentDetailsDao.getHotelPayList(hotelName);
		
		String name = "0";
		String contact = "0";
		String id = "";
		int totalCouriers = 0;
		int accepted = 0;
		int delivered = 0;
		int picked = 0;
		int cancelled = 0;
		double totalPay = 0.00;
		double acceptedAmount = 0.00;
		double pickedAmount = 0.00;
		double deliveredAmount = 0.0;
		double cancelledAmount = 0.00;
		double tPay = 0;
		int booked = 0;
		double bookedAmount = 0.0;
		if(response != null  ){
			
			try{
			
				while(response.next()){
		/*	couriersObject.put("userId",response.getInt("user_id"));
			couriersObject.put("hotelName",response.getString("Restaurant_name"));
			couriersObject.put("hotelName",response.getString("Restaurant_name"));
			couriersObject.put("hotelName",response.getString("Restaurant_name"));
			couriersObject.put("hotelName",response.getString("Restaurant_name"));
*/					name = 	response.getString("Restaurant_name");
                    id = response.getString("user_id");
                    contact = response.getString("contact_number");
                    int stats = response.getInt("status");
                String  pay = response.getString("total_amount");
     
                totalPay = Double.parseDouble(pay);
                
                
                  
                  if(stats == 1){
                	  ++accepted;
                	  acceptedAmount = acceptedAmount + totalPay;
                  }else if(stats == 2){
                	  ++picked;
                	  pickedAmount = pickedAmount + totalPay;
                  }else if(stats == 3){
                	  ++delivered;
                	  deliveredAmount = deliveredAmount +totalPay;
                  }else if(stats == 4){
                	  ++cancelled; 
                	  cancelledAmount = cancelledAmount+totalPay;
                  }else if(stats == 0){
                	  ++booked;
                	  bookedAmount = bookedAmount + totalPay;
                  };
					
                ++ totalCouriers;
					tPay = tPay + totalPay;
		}
				couriersObject.put("status",true);
				couriersObject.put("name", name);
				couriersObject.put("contact", contact);
				couriersObject.put("id",id);
				couriersObject.put("tPay",tPay);
				couriersObject.put("accepted",accepted);
				couriersObject.put("picked", picked);
				couriersObject.put("delivered", delivered);
				couriersObject.put("cancelled",cancelled);
				couriersObject.put("totalCouriers", totalCouriers);
				couriersObject.put("acceptedAmount", acceptedAmount);
				couriersObject.put("pickedAmount", pickedAmount);
				couriersObject.put("deliveredAmount", deliveredAmount);
				couriersObject.put("cancelledAmount", cancelledAmount);
				couriersObject.put("booked", booked);
				couriersObject.put("bookedAmount", bookedAmount);
				
				
			
		}catch(SQLException e){
			e.printStackTrace();
		}
		
		}
		return couriersObject.toString();
	}

	@Override
	public String getAllBookings(String userId, int status) {
		// TODO Auto-generated method stub
		
		JSONObject bookingsObject = new JSONObject();
		
		ResultSet bookingsSet = paymentDetailsDao.getAllBookings(userId,status);
		
		if(bookingsSet != null){
			
			try{
				
				JSONArray bookingArray = new JSONArray();
				while(bookingsSet.next()){
					
					JSONObject object = new JSONObject();
					
					object.put("time",bookingsSet.getTimestamp("time_of_booking"));
					object.put("bookingId", bookingsSet.getInt("booking_Id"));
					object.put("content", bookingsSet.getString("content"));
					object.put("sendername", bookingsSet.getString("restaurant_name"));
					object.put("senderPhone", bookingsSet.getString("restaurant_contact"));
					object.put("recievername", bookingsSet.getString("reciever_name"));
					object.put("recieverContact", bookingsSet.getString("reciever_contact"));
					object.put("courierAmount", bookingsSet.getString("total_amount"));
					object.put("ExtraDistanceTravelled", bookingsSet.getDouble("extra_distance"));
					object.put("status",bookingsSet.getInt("status"));					
					bookingArray.put(object);
					
				}
				
				
				bookingsObject.put("status", true);
				bookingsObject.put("courierList",bookingArray);
			}catch(SQLException e){
				e.printStackTrace();
			}try{
				
				bookingsSet.close();
			}catch(SQLException e){
				e.printStackTrace();
			}finally{
				
				try{
					bookingsSet.close();
				}catch(SQLException e){
					e.printStackTrace();
				}
			}
			}else{
				
				bookingsObject.put("status", false);
			}
			return bookingsObject.toString();

	}

	@Override
	public String updateHotelPayment(String userId) {
		// TODO Auto-generated method stub
		
		
		JSONObject updateObject = new JSONObject();
		
		long response = paymentDetailsDao.updateHotelPayment(userId);
		
		if(response > 0){
			
			updateObject.put("status", true);
		}else{
			updateObject.put("status", false);
		}
		
		return updateObject.toString();
	}
	
	
	
	
}
