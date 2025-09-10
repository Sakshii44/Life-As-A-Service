package com.LAAS.project_backend.Goals;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GoalService {

    private final GoalRepository goalRepository;

    public Goal createGoal(GoalDTO dto) {
        Goal goal = Goal.builder()
                .title(dto.getTitle())
                .description(dto.getDescription())
                .category(dto.getCategory())
                .current(dto.getCurrent())
                .target(dto.getTarget())
                .progress(dto.getTarget() > 0 ? (dto.getCurrent() * 100 / dto.getTarget()) : 0)
                .deadline(dto.getDeadline())
                .priority(dto.getPriority())
                .status(GoalStatus.ACTIVE)
                .build();
        return goalRepository.save(goal);
    }

    public List<Goal> getAllGoals() {
        return goalRepository.findAll();
    }

    public Goal updateProgress(Long goalId, int newCurrent) {
        Goal goal = goalRepository.findById(goalId).orElseThrow();
        goal.setCurrent(newCurrent);
        goal.setProgress(goal.getTarget() > 0 ? (newCurrent * 100 / goal.getTarget()) : 0);
        if (goal.getProgress() >= 100) {
            goal.setStatus(GoalStatus.COMPLETED);
        }
        return goalRepository.save(goal);
    }

    public GoalStatsDTO getStats() {
        List<Goal> goals = goalRepository.findAll();
        long total = goals.size();
        long active = goals.stream().filter(g -> g.getStatus() == GoalStatus.ACTIVE).count();
        long completed = goals.stream().filter(g -> g.getStatus() == GoalStatus.COMPLETED).count();
        int avgProgress = total > 0 ? (int) goals.stream().mapToInt(Goal::getProgress).average().orElse(0) : 0;

        return GoalStatsDTO.builder()
                .totalGoals(total)
                .activeGoals(active)
                .completedGoals(completed)
                .averageProgress(avgProgress)
                .build();
    }
}
