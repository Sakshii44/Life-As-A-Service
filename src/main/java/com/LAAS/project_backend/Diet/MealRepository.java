package com.LAAS.project_backend.Diet;


import com.LAAS.project_backend.Diet.Meal;
import com.LAAS.project_backend.Diet.MealType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface MealRepository extends JpaRepository<Meal, Long> {
    List<Meal> findByUserIdAndDate(Long userId, LocalDate date);
    List<Meal> findByUserIdAndDateAndMealType(Long userId, LocalDate date, MealType mealType);
}
