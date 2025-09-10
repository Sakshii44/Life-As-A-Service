package com.LAAS.project_backend.Mood;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "moods")
public class Mood {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull(message = "User ID is required")
    @Column(nullable = false)
    private Long userId;

    @NotNull(message = "Mood score is required")
    @Min(value = 1, message = "Mood score must be at least 1")
    @Max(value = 10, message = "Mood score cannot exceed 10")
    @Column(nullable = false)
    private Integer moodScore;

    private String videoUrl;

    @Column(columnDefinition = "TEXT")
    private String audioTranscript;

    @Column(columnDefinition = "TEXT")
    private String aiAnalysis;

    @Column(nullable = false, updatable = false)
    private java.sql.Timestamp recordedAt;

    @PrePersist
    protected void onCreate() {
        this.recordedAt = new java.sql.Timestamp(System.currentTimeMillis());
    }


    // Constructor
    public Mood() {}

    public Mood(Long userId, Integer moodScore, String videoUrl, String audioTranscript, String aiAnalysis) {
        this.userId = userId;
        this.moodScore = moodScore;
        this.videoUrl = videoUrl;
        this.audioTranscript = audioTranscript;
        this.aiAnalysis = aiAnalysis;
    }
}
