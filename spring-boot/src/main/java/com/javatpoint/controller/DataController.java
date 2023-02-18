package com.javatpoint.controller;
import com.javatpoint.model.Data;
import com.javatpoint.repository.DataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class DataController {

    @Autowired
    private DataRepository dataRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/data")
    public ResponseEntity<String> saveData(@RequestBody Data data) {
        dataRepository.save(data);
        return ResponseEntity.ok("Data saved successfully!");
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/data")
    public ResponseEntity<List<Data>> getData() {
        List<Data> dataList = dataRepository.findAll();
        return ResponseEntity.ok(dataList);
    }
}
