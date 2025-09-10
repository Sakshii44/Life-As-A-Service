package com.LAAS.project_backend.Diet;

import com.LAAS.project_backend.Diet.MealType;
import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MealDTO {
    private MealType mealType;
    private List<String> items;
    private int calories;
    private int protein;
    private int carbs;
    private int fat;
}
