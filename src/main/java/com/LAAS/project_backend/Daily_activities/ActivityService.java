package com.LAAS.project_backend.Daily_activities;



import com.LAAS.project_backend.Daily_activities.Activity;
import com.LAAS.project_backend.Daily_activities.ActivityRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ActivityService {

    private final ActivityRepository repository;

    public ActivityService(ActivityRepository repository) {
        this.repository = repository;
    }

    public Activity createActivity(Activity activity) {
        return repository.save(activity);
    }

    public List<Activity> getActivitiesByUser(Integer userId) {
        return repository.findByUserId(userId);
    }

    public Optional<Activity> getActivityById(Integer id) {
        return repository.findById(id);
    }

    public Activity updateActivity(Activity activity) {
        return repository.save(activity);
    }

    public void deleteActivity(Integer id) {
        repository.deleteById(id);
    }
}

