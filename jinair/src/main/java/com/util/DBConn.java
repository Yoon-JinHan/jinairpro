package com.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

//single ton
public class DBConn {
	private DBConn() {}
	
	private static Connection connection=null;
	
	public static Connection getConnection() {
		if(connection ==null) {
			//Ex02.java
			String className = "oracle.jdbc.driver.OracleDriver";
			String url = "jdbc:oracle:thin:@localhost:1521:xe";
			String user = "jinair";
			String password="project";
			
			try {
				Class.forName(className);
				connection = DriverManager.getConnection(url, user, password);
			} catch (ClassNotFoundException e) {
				e.printStackTrace();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return connection;
	}
	
	public static Connection getConnection(String url, String user, String password) {
		if(connection ==null) {
			//Ex02.java
			String className = "oracle.jdbc.driver.OracleDriver";
			
			try {
				Class.forName(className);
				connection = DriverManager.getConnection(url, user, password);
			} catch (ClassNotFoundException e) {
				e.printStackTrace();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return connection;
	}
	
	public static Connection getConnection(String serverName, int port, String sid, String user, String password) {
		if(connection ==null) {
			//Ex02.java
			String className = "oracle.jdbc.driver.OracleDriver";
			String url = String.format("jdbc:oracle:thin:@%s:%d:xe",serverName, port, sid);
			try {
				Class.forName(className);
				connection = DriverManager.getConnection(url, user, password);
			} catch (ClassNotFoundException e) {
				e.printStackTrace();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return connection;
	}
	
	public static void close() {
		try {
			if (connection != null && !connection.isClosed()) {
				connection.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		connection=null;
	}
}
