package com.LAAS.project_backend.StudyPlan;

import com.LAAS.project_backend.StudyPlan.StudyPlan;
import com.LAAS.project_backend.StudyPlan.StudyPlanService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/study-plans")
public class StudyPlanController {

    private final StudyPlanService studyPlanService;

    public StudyPlanController(StudyPlanService studyPlanService) {
        this.studyPlanService = studyPlanService;
    }

    @GetMapping
    public List<StudyPlan> getAllStudyPlans() {
        return studyPlanService.getAllStudyPlans();
    }

    @GetMapping("/user/{userId}")
    public List<StudyPlan> getStudyPlansByUser(@PathVariable Integer userId) {
        return studyPlanService.getStudyPlansByUser(userId);
    }

    @GetMapping("/{id}")
    public StudyPlan getStudyPlanById(@PathVariable Integer id) {
        return studyPlanService.getStudyPlanById(id)
                .orElseThrow(() -> new RuntimeException("Study Plan not found"));
    }

    @PostMapping
    public StudyPlan createStudyPlan(@RequestBody StudyPlan studyPlan) {
        return studyPlanService.createStudyPlan(studyPlan);
    }

    @PutMapping("/{id}")
    public StudyPlan updateStudyPlan(@PathVariable Integer id, @RequestBody StudyPlan updatedStudyPlan) {
        updatedStudyPlan.setId(id);
        return studyPlanService.updateStudyPlan(updatedStudyPlan);
    }

    @DeleteMapping("/{id}")
    public void deleteStudyPlan(@PathVariable Integer id) {
        studyPlanService.deleteStudyPlan(id);
    }
}
