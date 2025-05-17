package com.example.liquor;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController //this is the REST controller.
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000") //React app communicates from this one.
public class LiquorController{
    private final LiquorDAO dao;
    public LiquorController(LiquorDAO a){
        this.dao=a;
    }

    @GetMapping("/inventory")
    public List<Liquor> getInventory(){
        return dao.findAll(); //DAO will automatically try to search for all available mappings of our returned liquors from dbms.
    }

   

}