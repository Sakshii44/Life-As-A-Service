package com.LAAS.project_backend.Goals;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GoalStatsDTO {
    private long totalGoals;
    private long activeGoals;
    private long completedGoals;
    private int averageProgress;
}
