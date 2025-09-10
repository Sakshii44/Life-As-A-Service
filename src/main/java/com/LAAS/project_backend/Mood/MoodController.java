package com.LAAS.project_backend.Mood;

import com.LAAS.project_backend.User.User;
import com.LAAS.project_backend.User.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/moods")
public class MoodController {

    private final MoodService moodService;
    private final UserRepository userRepository;

    public MoodController(MoodService moodService, UserRepository userRepository) {
        this.moodService = moodService;
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<MoodRecordingResponse> getAllMoods() {
        return moodService.getAllMoods().stream()
                .map(moodService::mapToResponse)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public MoodRecordingResponse getMoodById(@PathVariable Integer id) {
        return moodService.getMoodById(id)
                .map(moodService::mapToResponse)
                .orElseThrow(() -> new RuntimeException("Mood not found with id: " + id));
    }

    @GetMapping("/user")
    public List<MoodRecordingResponse> getMoodsByUserId(@AuthenticationPrincipal User user) {
        Long userId = getUserIdFromEmail(user.getUsername());
        return moodService.getMoodsByUserId(userId).stream()
                .map(moodService::mapToResponse)
                .collect(Collectors.toList());
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public MoodRecordingResponse createMood(@Valid @RequestBody MoodRecordingRequest request,
                                            @AuthenticationPrincipal User user) {
        request.setUserId(getUserIdFromEmail(user.getUsername()));
        Mood mood = new Mood(
                request.getUserId(),
                request.getMoodScore(),
                request.getVideoUrl(),
                request.getAudioTranscript(),
                request.getAiAnalysis()
        );
        return moodService.mapToResponse(moodService.saveMood(mood));
    }

    @PutMapping("/{id}")
    public MoodRecordingResponse updateMood(@PathVariable Integer id, @Valid @RequestBody MoodRecordingRequest request) {
        Mood existingMood = moodService.getMoodById(id)
                .orElseThrow(() -> new RuntimeException("Mood not found with id: " + id));

        existingMood.setMoodScore(request.getMoodScore());
        existingMood.setVideoUrl(request.getVideoUrl());
        existingMood.setAudioTranscript(request.getAudioTranscript());
        existingMood.setAiAnalysis(request.getAiAnalysis());

        return moodService.mapToResponse(moodService.updateMood(existingMood));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteMood(@PathVariable Integer id) {
        moodService.deleteMood(id);
    }

    private Long getUserIdFromEmail(String email) {
        return userRepository.findByEmail(email)
                .map(User::getId)
                .orElseThrow(() -> new RuntimeException("User not found with email: " + email));
    }
}