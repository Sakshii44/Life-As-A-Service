package com.LAAS.project_backend.Daily_activities;

import com.LAAS.project_backend.Daily_activities.Activity;
import com.LAAS.project_backend.Daily_activities.ActivityService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/activities")
public class ActivityController {

    private final ActivityService service;

    public ActivityController(ActivityService service) {
        this.service = service;
    }

    @PostMapping
    public Activity createActivity(@RequestBody Activity activity) {
        return service.createActivity(activity);
    }

    @GetMapping("/user/{userId}")
    public List<Activity> getActivitiesByUser(@PathVariable Integer userId) {
        return service.getActivitiesByUser(userId);
    }

    @GetMapping("/{id}")
    public Optional<Activity> getActivityById(@PathVariable Integer id) {
        return service.getActivityById(id);
    }

    @PutMapping("/{id}")
    public Activity updateActivity(@PathVariable Integer id, @RequestBody Activity updatedActivity) {
        updatedActivity.setId(id);
        return service.updateActivity(updatedActivity);
    }

    @DeleteMapping("/{id}")
    public void deleteActivity(@PathVariable Integer id) {
        service.deleteActivity(id);
    }
}

