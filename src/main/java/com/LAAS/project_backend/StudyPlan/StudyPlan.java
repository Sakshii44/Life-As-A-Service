package com.LAAS.project_backend.StudyPlan;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "study_plans")
public class StudyPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "user_id", nullable = false)
    private Integer userId;

    @Column(nullable = false, length = 100)
    private String subject;

    @Column(name = "study_goal")
    private String studyGoal;

    @Column(name = "plan_details")
    private String planDetails;

    @Column(name = "progress_percentage", columnDefinition = "INT DEFAULT 0")
    private Integer progressPercentage = 0;

    @Column(name = "created_at", updatable = false, insertable = false,
            columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime createdAt;

    @Column(name = "target_date")
    private LocalDate targetDate;

    // ✅ New fields
    @Column(name = "priority", length = 20)
    private String priority;  // e.g. HIGH, MEDIUM, LOW

    @Column(name = "level", length = 20)
    private String level;     // e.g. BEGINNER, INTERMEDIATE, ADVANCED

    @Column(name = "progress", columnDefinition = "INT DEFAULT 0")
    private Integer progress = 0; // independent from progressPercentage
}
