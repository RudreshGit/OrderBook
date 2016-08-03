package com.sdcs.courierbooking.utils;

import java.sql.Driver;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Enumeration;

import javax.servlet.ServletContextEvent;

import org.springframework.context.ApplicationEvent;
import org.springframework.context.ApplicationListener;


@SuppressWarnings("rawtypes")
public class ContextLoaderListener implements ApplicationListener {

	

	public void contextInitialized(ServletContextEvent sce) {
    }

	public void contextDestroyed(ServletContextEvent sce) {
    	// This manually deregisters JDBC driver, which prevents Tomcat 7 from complaining about memory leaks wrto this class
        Enumeration<Driver> drivers = DriverManager.getDrivers();
        while (drivers.hasMoreElements()) {
            Driver driver = drivers.nextElement();
            try {
                DriverManager.deregisterDriver(driver);
                System.out.println("deregistering jdbc driver in contextDestroyed method:" +driver);
            } catch (SQLException e) {
                System.out.println("Error deregistering jdbc driver in contextDestroyed method:" +driver);
            }

        }
    }
	
	@Override
    public void onApplicationEvent(ApplicationEvent event) {
		// This manually deregisters JDBC driver, which prevents Tomcat 7 from complaining about memory leaks wrto this class
//        Enumeration<Driver> drivers = DriverManager.getDrivers();
//        while (drivers.hasMoreElements()) {
//            Driver driver = drivers.nextElement();
//            try {
//                DriverManager.deregisterDriver(driver);
//                System.out.println("deregistering jdbc driver in onApplicationEvent method:" +driver);
//            } catch (SQLException e) {
//                System.out.println("Error deregistering jdbc driver in onApplicationEvent method:" +driver);
//            }
//
//        }
    }
}