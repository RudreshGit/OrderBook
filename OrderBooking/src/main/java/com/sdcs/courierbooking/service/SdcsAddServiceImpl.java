package com.sdcs.courierbooking.service;

import java.math.BigInteger;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sdcs.courierbooking.dao.SdcsAddDao;
import com.sdcs.courierbooking.utils.SdcsEmailComponent;



@Service
public class SdcsAddServiceImpl implements SdcsAddService{

	@Autowired
	SdcsAddDao sdcsAddDao;
	
	@Override
	public String sendadd(String header, String desc) {
		// TODO Auto-generated method stub
		
		JSONObject object = new JSONObject();
		
		
		
		ResultSet set = sdcsAddDao.getSdcsAddEmailIds();
		
		
		try{			
						
			if( set != null){				
				
				while(set.next()){
					
					
					String name = set.getString("registration_name");
					
				String text = "<h4>Dear </h4>"	
						+"<h3>"+name+"</h3>"
					+"<br>"

					+"<table style='background-color:#87CEFA'>"
					/*+"<img src='img/sdcs_logo.png' width='100px;'alt='SDCS'>"*/
					+"<tr>"

					+"<td>"

					+"<h2>"+header+"</h2>"
					+"</td>"
					+"<tr>"


					+"<tr>"

					+"<td>"

					+"<h3>"+desc+"</h3>"
					+"</td>"
					+"<tr>"


					+"</table>"
					
					+"<br>"

					+"Thank you<br>"
					
					 +"SDCS Team  <br>"
					 +"info@sdcs.me";
				     
					try{					
					SdcsEmailComponent.sendMail(set.getString("registration_email"),
							header,text,BigInteger.ZERO);
					}catch(Exception e){
						
					}
					
					
				}
								
				object.put("result", true);
			}else{
				object.put("result",false);
			}
			
		}catch(SQLException e){
			e.printStackTrace();
			object.put("result",false);
		}
		
	return object.toString();
		
	}

}
