package com.LAAS.project_backend.StudyPlan;

import com.LAAS.project_backend.StudyPlan.StudyPlan;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudyPlanRepository extends JpaRepository<StudyPlan, Integer> {
    List<StudyPlan> findByUserId(Integer userId);
}
