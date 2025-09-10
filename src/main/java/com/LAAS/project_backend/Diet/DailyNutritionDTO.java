package com.LAAS.project_backend.Diet;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DailyNutritionDTO {
    private int caloriesConsumed;
    private int caloriesGoal;
    private int proteinConsumed;
    private int proteinGoal;
    private int carbsConsumed;
    private int carbsGoal;
    private int fatConsumed;
    private int fatGoal;
}
