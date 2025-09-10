package com.LAAS.project_backend.Diet;


import com.LAAS.project_backend.Diet.MealDTO;
import com.LAAS.project_backend.Diet.DailyNutritionDTO;
import com.LAAS.project_backend.Diet.Meal;
import com.LAAS.project_backend.Diet.MealService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/diet")
@RequiredArgsConstructor
public class MealController {

    private final MealService mealService;

    @PostMapping("/add")
    public Meal addMeal(@RequestHeader("userId") Long userId, @RequestBody MealDTO mealDTO) {
        return mealService.addMeal(userId, mealDTO);
    }

    @GetMapping("/today")
    public List<Meal> getTodaysMeals(@RequestHeader("userId") Long userId) {
        return mealService.getTodaysMeals(userId);
    }

    @GetMapping("/daily-nutrition")
    public DailyNutritionDTO getDailyNutrition(
            @RequestHeader("userId") Long userId,
            @RequestParam int caloriesGoal,
            @RequestParam int proteinGoal,
            @RequestParam int carbsGoal,
            @RequestParam int fatGoal
    ) {
        return mealService.getDailyNutrition(userId, caloriesGoal, proteinGoal, carbsGoal, fatGoal);
    }
}

