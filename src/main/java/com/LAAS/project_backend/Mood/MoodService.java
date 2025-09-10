package com.LAAS.project_backend.Mood;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class MoodService {

    private final MoodRepository moodRepository;

    public MoodService(MoodRepository moodRepository) {
        this.moodRepository = moodRepository;
    }

    public List<Mood> getAllMoods() {
        return moodRepository.findAll();
    }

    public Optional<Mood> getMoodById(Integer id) {
        return moodRepository.findById(id);
    }

    public List<Mood> getMoodsByUserId(Long userId) {
        return moodRepository.findByUserIdOrderByRecordedAtDesc(userId);
    }

    @Transactional
    public Mood saveMood(@Valid @NotNull Mood mood) {
        validateMood(mood);
        return moodRepository.save(mood);
    }

    @Transactional
    public Mood updateMood(@Valid @NotNull Mood mood) {
        validateMood(mood);
        return moodRepository.save(mood);
    }

    @Transactional
    public void deleteMood(Integer id) {
        if (!moodRepository.existsById(id)) {
            throw new RuntimeException("Mood not found with id: " + id);
        }
        moodRepository.deleteById(id);
    }

    public MoodRecordingResponse mapToResponse(Mood mood) {
        return new MoodRecordingResponse(
                mood.getId(),
                mood.getUserId(),
                mood.getMoodScore(),
                mood.getVideoUrl(),
                mood.getAudioTranscript(),
                mood.getAiAnalysis(),
                mood.getRecordedAt().toLocalDateTime()
        );
    }

    private void validateMood(Mood mood) {
        if (mood.getMoodScore() < 1 || mood.getMoodScore() > 10) {
            throw new IllegalArgumentException("Mood score must be between 1 and 10");
        }
        if (mood.getUserId() == null) {
            throw new IllegalArgumentException("User ID is required");
        }
    }
}
