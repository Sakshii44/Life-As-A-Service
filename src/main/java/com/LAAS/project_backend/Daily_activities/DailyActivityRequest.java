package com.LAAS.project_backend.Daily_activities;

import com.LAAS.project_backend.Daily_activities.Activity.ActivityType;

public class DailyActivityRequest {
    public Integer userId;
    public ActivityType activityType;
    public String description;
    public String voiceTranscript;
    public Integer moodScore;
}