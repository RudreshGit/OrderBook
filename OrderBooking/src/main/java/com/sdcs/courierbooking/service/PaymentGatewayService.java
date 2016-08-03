package com.sdcs.courierbooking.service;

import java.math.BigInteger;

import org.json.JSONObject;

import com.sdcs.courierbooking.model.SdcsEbsCancel;
import com.sdcs.courierbooking.model.SdcsPaymentDetails;

public interface PaymentGatewayService {

	public JSONObject savePaymentTransactionDetails(SdcsPaymentDetails sdcsPaymentDetails);

	public String cancelOrder(SdcsEbsCancel sdcsEbsCancel);
	public String cancelupdatestatus(String status,String transactionType,String amount,String transactionId,String tracking ,String payment);

	public String cancelWebOrder(BigInteger bookingId);

	public String updateResponse(String trnsId, String payId, String amount,
			String date, String mode, String refNo, String type, String status,
			BigInteger bookingId);

	public String updateReason(String bookingId, String reason);

	public Object saveSdcsMoneyDetails(SdcsPaymentDetails sdcsWebPayment);

	public String addCancelMoneyToSdcs(BigInteger bookingId, double canAmount, String userId);
}
