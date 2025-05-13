package com.example.liquor;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class App 
{
    public static void main( String[] args )
    {
        //initialize credentials to connect to postgresql dbms.

        String url = "jdbc:postgresql://localhost:5432/liquorstore";
        String user = "app_user";
        String password = System.getenv("DB_PASS"); // password saved on personal device's env variable. to be changed later(?)

        try {

            //load postgresql driver class into the jvm so we can proceed with the connection+query in the next try
            Class.forName("org.postgresql.Driver");
            
        } catch (ClassNotFoundException e) {
            System.err.print("Postgres JDBC driver not FOUND");
            return;
        }

        try (Connection c = DriverManager.getConnection(url, user, password)) {

            System.out.println("works.");
            String query = "SELECT * FROM liquor";


            try(PreparedStatement ps = c.prepareStatement(query); ResultSet rs = ps.executeQuery()){

                while(rs.next()) {

                    int id = rs.getInt("id");

                    System.out.printf("%d, %n", id);
                }
            }

            
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}
