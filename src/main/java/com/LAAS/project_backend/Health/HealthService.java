package com.LAAS.project_backend.Health;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class HealthService {
    private final HealthRepository repo;

    public HealthService(HealthRepository repo) {
        this.repo = repo;
    }

    public List<Health> getAllHealthMetrics() {
        return repo.findAll();
    }

    public Health saveHealthMetric(Health health) {
        // Auto-calc progress %
        if (health.getTarget() > 0) {
            double progress = (health.getCurrent() / health.getTarget()) * 100;
            health.setProgress(Math.min(progress, 100));
        }
        return repo.save(health);
    }

    public Health updateHealthMetric(Long id, Health updated) {
        return repo.findById(id).map(existing -> {
            existing.setMetric(updated.getMetric());
            existing.setCurrent(updated.getCurrent());
            existing.setTarget(updated.getTarget());
            existing.setUnit(updated.getUnit());
            existing.setStatus(updated.getStatus());

            // Recalculate progress
            if (existing.getTarget() > 0) {
                double progress = (existing.getCurrent() / existing.getTarget()) * 100;
                existing.setProgress(Math.min(progress, 100));
            }
            return repo.save(existing);
        }).orElseThrow(() -> new RuntimeException("Health metric not found"));
    }

    public void deleteHealthMetric(Long id) {
        repo.deleteById(id);
    }
}
