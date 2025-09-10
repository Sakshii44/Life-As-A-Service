package com.LAAS.project_backend.StudyPlan;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class StudyPlanDTO {
    private String subject;
    private String studyGoal;
    private String planDetails;
    private Integer progressPercentage;
    private String targetDate; // formatted for frontend
}
