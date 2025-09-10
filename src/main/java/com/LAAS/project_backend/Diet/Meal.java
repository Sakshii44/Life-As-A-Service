package com.LAAS.project_backend.Diet;
//package com.laas.backend.domain.diet.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Meal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;

    private LocalDate date;

    @Enumerated(EnumType.STRING)
    private MealType mealType;

    @ElementCollection
    private List<String> items;

    private int calories;
    private int protein;
    private int carbs;
    private int fat;

    private LocalDateTime timestamp; // new field
}


