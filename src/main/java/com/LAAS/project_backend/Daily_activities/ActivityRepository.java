package com.LAAS.project_backend.Daily_activities;


import com.LAAS.project_backend.Daily_activities.Activity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ActivityRepository extends JpaRepository<Activity, Integer> {
    List<Activity> findByUserId(Integer userId);
    List<Activity> findByUserIdAndActivityType(Integer userId, Activity.ActivityType activityType);
}

