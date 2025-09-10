package com.LAAS.project_backend.Goals;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/goals")
@RequiredArgsConstructor
public class GoalController {

    private final GoalService goalService;

    @PostMapping
    public Goal createGoal(@RequestBody GoalDTO dto) {
        return goalService.createGoal(dto);
    }

    @GetMapping
    public List<Goal> getAllGoals() {
        return goalService.getAllGoals();
    }

    @PutMapping("/{id}/progress")
    public Goal updateProgress(@PathVariable Long id, @RequestParam int current) {
        return goalService.updateProgress(id, current);
    }

    @GetMapping("/stats")
    public GoalStatsDTO getStats() {
        return goalService.getStats();
    }
}
