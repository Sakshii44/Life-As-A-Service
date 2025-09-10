package com.LAAS.project_backend.Health;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Health {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String metric;   // e.g., "Steps", "Water", "Sleep"
    private double current;  // current value (8547 steps, 6 glasses, etc.)
    private double target;   // daily goal (10000 steps, 8 glasses, etc.)
    private String unit;     // steps, glasses, hours
    private double progress; // percentage
    private String status;   // good, normal, low
}
