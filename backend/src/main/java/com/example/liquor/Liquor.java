package com.example.liquor;

import java.math.BigDecimal;

public class Liquor {
    private int id;
    private String name;
    private String containerType;
    private BigDecimal abv;
    private int quantity;

    public Liquor(){
    }

    public Liquor(int a, String b, String c, BigDecimal d, int e){

        id=a;
        name=b;
        containerType=c;
        abv=d;
        quantity=e;

    }

    public int getId(){
        return id;
    }

    public String getName(){
        return name;
    }

    public String getContainerType(){
        return containerType;
    }

    public BigDecimal getAbv(){
        return abv;
    }

    public int getQuantity(){
        return quantity;
    }


}
