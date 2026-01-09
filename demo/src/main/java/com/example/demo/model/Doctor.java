package com.example.demo.model;

import jakarta.persistence.*;

@Entity
public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String specialization;
    private String time;

    @ManyToOne
    private Hospital hospital;

    // getters and setters
}
