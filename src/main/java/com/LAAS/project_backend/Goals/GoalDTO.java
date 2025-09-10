package com.LAAS.project_backend.Goals;

import lombok.*;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GoalDTO {
    private String title;
    private String description;
    private String category;
    private int current;
    private int target;
    private LocalDate deadline;
    private GoalPriority priority;
}
