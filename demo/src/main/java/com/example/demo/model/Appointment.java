package com.example.demo.model;

import jakarta.persistence.*;

@Entity
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String patientEmail;

    @ManyToOne
    private Hospital hospital;

    @ManyToOne
    private Doctor doctor;

    private String time;

    // getters and setters
}
