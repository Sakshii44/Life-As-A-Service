package com.LAAS.project_backend.Mood;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

public class MoodRecordingRequest {
    private Long userId; // Removed @NotNull

    @NotNull(message = "Mood score is required")
    @Min(value = 1, message = "Mood score must be at least 1")
    @Max(value = 10, message = "Mood score cannot exceed 10")
    private Integer moodScore;

    private String videoUrl;

    private String audioTranscript;

    private String aiAnalysis;

    // Constructor
    public MoodRecordingRequest(Long userId, Integer moodScore, String videoUrl, String audioTranscript, String aiAnalysis) {
        this.userId = userId;
        this.moodScore = moodScore;
        this.videoUrl = videoUrl;
        this.audioTranscript = audioTranscript;
        this.aiAnalysis = aiAnalysis;
    }

    // Getters and Setters
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Integer getMoodScore() {
        return moodScore;
    }

    public void setMoodScore(Integer moodScore) {
        this.moodScore = moodScore;
    }

    public String getVideoUrl() {
        return videoUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
    }

    public String getAudioTranscript() {
        return audioTranscript;
    }

    public void setAudioTranscript(String audioTranscript) {
        this.audioTranscript = audioTranscript;
    }

    public String getAiAnalysis() {
        return aiAnalysis;
    }

    public void setAiAnalysis(String aiAnalysis) {
        this.aiAnalysis = aiAnalysis;
    }
}