package com.sdcs.courierbooking.service;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sdcs.courierbooking.dao.QuickEstimationDao;



/**
 * 
 * @author Dell
 * Providing implementation for all quick estimation functions
 */
@Service
public class QuickEstimationServiceImpl implements QuickEstimationService {

 @Autowired
 public QuickEstimationDao quickEstimationDao;

 /**
  * This method returns estimated price for user delivery options
  * @return estimated price details
  */
 @Override
 public JSONObject estimate(boolean oneDay, boolean fourHour,boolean Airport, float kilo, float grams,float length,float width,float height, String strEstimationFor) {
	 double totalVolumInGrams= ((float)((length*width*height)/5000))*1000;
	  // Calculating totalGrams from kilo and grams
	  double totalGramsw= (float) ((float) kilo + grams * 0.001) * 1000;
	  double totalGrams = 0;
	     if(totalVolumInGrams > totalGramsw){      totalGrams = totalVolumInGrams;
	     System.out.println("volumetric weight is high"+" "+totalGrams);
     }else{
      totalGrams = totalGramsw;
      System.out.println("weight is high"+" "+totalGrams);
     }
  
  // Json object that will contain calculated price details
  JSONObject estimatedDetailsJson = new JSONObject();
  
  // Getting price details from data base
  ResultSet priceDetailsResultSet = quickEstimationDao.getAllPriceDetails();
  
  // Weightage more than 10 kilo grams
  boolean isMoreThanTenKiloGrams = false; 
  
  try {
   if(priceDetailsResultSet != null && priceDetailsResultSet.next()) {
    estimatedDetailsJson.put("estimation_status", true);
    
    double estimatedPrice = 0;
    if(strEstimationFor.equals("booking")) {
     estimatedPrice = priceDetailsResultSet.getDouble("base_price"); 
     /*if(isDeliveryInOneDay) {
      estimatedPrice += priceDetailsResultSet.getDouble("price_for_delivering_in_one_day");
     }
     }
    else{
     if(isDeliveryInOneDay) {
      estimatedPrice += priceDetailsResultSet.getDouble("price_for_delivering_in_one_day");
     }
     }*/
         
    
    if(fourHour) {
     estimatedPrice += priceDetailsResultSet.getDouble("price_for_delivering_in_four_days");
    }
    if(oneDay) {
     estimatedPrice += priceDetailsResultSet.getDouble("price_for_delivering_hand_to_hand");
    }
    /*if(isDeliveryInConfidential) {
     estimatedPrice += priceDetailsResultSet.getDouble("price_for_confidentiali_delivery");
    }
*/    if(Airport) {
     estimatedPrice += priceDetailsResultSet.getDouble("price_for_Airport_delivery");
    }
    
    
     
    // Calculate money based on the weightage entered
    double startValue = 500;
    if(totalGrams <= 500) {
     estimatedPrice += priceDetailsResultSet.getDouble("price_for_below_500_grams");
    }
    int t=1;
    for(int i=0; i<t;i++){
    if(totalGrams > startValue && totalGrams <= 10000) {
     estimatedPrice += 50;
     startValue += 500;
     t +=1;
    }
    }
    if(totalGrams >10000){
     isMoreThanTenKiloGrams = true;
    /* else if(totalGrams >= 3000 && totalGrams <= 10000) {
     estimatedPrice += priceDetailsResultSet.getDouble("price_between_3000_to_below_10000_grams");
    } else if(totalGrams > 10000) {
     isMoreThanTenKiloGrams = true; // Please contact SDCS when it goes more than 10 kilo grams
    }*/
    }
    estimatedDetailsJson.put("more_than_10_kilo_grams", isMoreThanTenKiloGrams);
    estimatedDetailsJson.put("estimated_amount", estimatedPrice);
    priceDetailsResultSet.close();
   }else{
    estimatedDetailsJson.put("more_than_10_kilo_grams", isMoreThanTenKiloGrams);
    estimatedDetailsJson.put("estimation_status", false);
    estimatedDetailsJson.put("estimated_amount", 0);
    
   }} }catch (JSONException e) {
   estimatedDetailsJson.put("more_than_10_kilo_grams", isMoreThanTenKiloGrams);
   estimatedDetailsJson.put("estimation_status", false);
   estimatedDetailsJson.put("estimated_amount", 0);
  } catch (SQLException e) {
   estimatedDetailsJson.put("more_than_10_kilo_grams", isMoreThanTenKiloGrams);
   estimatedDetailsJson.put("estimation_status", false);
   estimatedDetailsJson.put("estimated_amount", 0);
  }
    return estimatedDetailsJson;
 }

}
