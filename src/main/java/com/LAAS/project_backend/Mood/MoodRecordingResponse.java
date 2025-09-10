package com.LAAS.project_backend.Mood;

import java.time.LocalDateTime;

public record MoodRecordingResponse(
        Integer id,
        Long userId,
        Integer moodScore,
        String videoUrl,
        String audioTranscript,
        String aiAnalysis,
        LocalDateTime recordedAt
) {}