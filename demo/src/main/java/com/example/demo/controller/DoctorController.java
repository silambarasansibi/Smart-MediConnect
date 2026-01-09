package com.example.demo.controller;

import com.example.demo.model.Doctor;
import com.example.demo.service.DoctorService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
public class DoctorController {

    private final DoctorService service;

    public DoctorController(DoctorService service) {
        this.service = service;
    }

    @GetMapping("/doctors/{hospitalId}")
    public List<Doctor> doctors(@PathVariable Long hospitalId) {
        return service.getDoctors(hospitalId);
    }
}
