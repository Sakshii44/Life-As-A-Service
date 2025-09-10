package com.LAAS.project_backend.Daily_activities;

import com.LAAS.project_backend.Daily_activities.Activity.ActivityType;

import java.time.LocalDateTime;
public class DailyActivityResponse {
    public Integer id;
    public Integer userId;
    public ActivityType activityType;
    public String description;
    public String voiceTranscript;
    public LocalDateTime timestamp;
    public Integer moodScore;
}
