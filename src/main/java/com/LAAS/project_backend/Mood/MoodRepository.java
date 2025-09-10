package com.LAAS.project_backend.Mood;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface MoodRepository extends JpaRepository<Mood, Integer> {
    List<Mood> findByUserId(Integer userId);
    List<Mood> findByUserIdOrderByRecordedAtDesc(Long userId);
}