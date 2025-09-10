package com.LAAS.project_backend.StudyPlan;

import com.LAAS.project_backend.StudyPlan.StudyPlan;
import com.LAAS.project_backend.StudyPlan.StudyPlanRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudyPlanService {

    private final StudyPlanRepository studyPlanRepository;

    public StudyPlanService(StudyPlanRepository studyPlanRepository) {
        this.studyPlanRepository = studyPlanRepository;
    }

    public List<StudyPlan> getAllStudyPlans() {
        return studyPlanRepository.findAll();
    }

    public List<StudyPlan> getStudyPlansByUser(Integer userId) {
        return studyPlanRepository.findByUserId(userId);
    }

    public Optional<StudyPlan> getStudyPlanById(Integer id) {
        return studyPlanRepository.findById(id);
    }

    public StudyPlan createStudyPlan(StudyPlan studyPlan) {
        return studyPlanRepository.save(studyPlan);
    }

    public StudyPlan updateStudyPlan(StudyPlan studyPlan) {
        return studyPlanRepository.save(studyPlan);
    }

    public void deleteStudyPlan(Integer id) {
        studyPlanRepository.deleteById(id);
    }
}
