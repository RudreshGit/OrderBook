package com.sdcs.courierbooking.utils;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.Message.RecipientType;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

//first from, to, subject, & text values are set

public class SendEmail {
    private String from;
    private String to;
    private String subject;
    private String text;

    public SendEmail(String from, String to, String subject, String text) {
            this.from = from;
            this.to = to;
        this.subject = subject;
            this.text = text;
    }

    // send method is called in the end
    public void send() throws MessagingException {

        Properties props = new Properties();
    props.put("mail.transport.protocol", "smtp");
    props.put("mail.smtp.host", "localhost");
    props.put("mail.smtp.auth", "false");// set to false for no username
    props.put("mail.debug", "false");
    props.put("mail.smtp.port", "25");

    Session session = Session.getDefaultInstance(props);

    InternetAddress fromAddress = null;
    InternetAddress toAddress = null;
    Transport transport = session.getTransport("smtp");
    transport.connect();
    try {
        Message simpleMessage = new MimeMessage(session);
        fromAddress = new InternetAddress(from);
        toAddress = new InternetAddress(to);
        simpleMessage.setFrom(fromAddress);
        simpleMessage.setRecipient(RecipientType.TO, toAddress);
        simpleMessage.setSubject(subject);
        simpleMessage.setText(text);
        transport.sendMessage(simpleMessage,
                simpleMessage.getAllRecipients());
    } catch (MessagingException e) {
        e.printStackTrace();
    } finally {
        transport.close();
    }
     }
 }