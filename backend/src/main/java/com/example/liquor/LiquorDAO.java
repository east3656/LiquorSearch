package com.example.liquor;
import java.sql.ResultSet;
import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository; //if you are reading this we are only testing the backend interacts properly through a mapping to the html page.

@Repository //spring  will only auto-scan @Component/@Repository classes under our application’s root package, i.e. where it is located.
public class LiquorDAO {

    private final JdbcTemplate jdbc;

    public LiquorDAO(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    private static final RowMapper<Liquor> MAPPER = (ResultSet rs, int rowNum) ->
    new Liquor(
      rs.getInt("id"),
      rs.getString("name"),
      rs.getString("container_type"),
      rs.getBigDecimal("abv"),
      rs.getInt("quantity")
    );

    public List<Liquor> findAll() {
        return jdbc.query(
        "SELECT id,name,container_type,abv,quantity FROM liquor",
        MAPPER
        );
    }

}
