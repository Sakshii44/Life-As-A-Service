package com.LAAS.project_backend.Diet;

import com.LAAS.project_backend.Diet.MealDTO;
import com.LAAS.project_backend.Diet.DailyNutritionDTO;
import com.LAAS.project_backend.Diet.Meal;
import com.LAAS.project_backend.Diet.MealType;
import com.LAAS.project_backend.Diet.MealRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MealService {

    private final MealRepository mealRepository;

    public Meal addMeal(Long userId, MealDTO mealDTO) {
        Meal meal = Meal.builder()
                .userId(userId)
                .date(LocalDate.now())
                .mealType(mealDTO.getMealType())
                .items(mealDTO.getItems())
                .calories(mealDTO.getCalories())
                .protein(mealDTO.getProtein())
                .carbs(mealDTO.getCarbs())
                .fat(mealDTO.getFat())
                .timestamp(LocalDateTime.now()) // record current time
                .build();
        return mealRepository.save(meal);
    }

    public List<Meal> getTodaysMeals(Long userId) {
        return mealRepository.findByUserIdAndDate(userId, LocalDate.now());
    }

    public DailyNutritionDTO getDailyNutrition(Long userId, int caloriesGoal, int proteinGoal, int carbsGoal, int fatGoal) {
        List<Meal> meals = mealRepository.findByUserIdAndDate(userId, LocalDate.now());

        int calories = meals.stream().mapToInt(Meal::getCalories).sum();
        int protein = meals.stream().mapToInt(Meal::getProtein).sum();
        int carbs = meals.stream().mapToInt(Meal::getCarbs).sum();
        int fat = meals.stream().mapToInt(Meal::getFat).sum();

        return DailyNutritionDTO.builder()
                .caloriesConsumed(calories)
                .caloriesGoal(caloriesGoal)
                .proteinConsumed(protein)
                .proteinGoal(proteinGoal)
                .carbsConsumed(carbs)
                .carbsGoal(carbsGoal)
                .fatConsumed(fat)
                .fatGoal(fatGoal)
                .build();
    }
}

