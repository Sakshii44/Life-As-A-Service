package com.LAAS.project_backend.Health;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/health")
public class HealthController {
    private final HealthService service;

    public HealthController(HealthService service) {
        this.service = service;
    }

    @GetMapping
    public List<Health> getAll() {
        return service.getAllHealthMetrics();
    }

    @PostMapping
    public Health create(@RequestBody Health health) {
        return service.saveHealthMetric(health);
    }

    @PutMapping("/{id}")
    public Health update(@PathVariable Long id, @RequestBody Health health) {
        return service.updateHealthMetric(id, health);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.deleteHealthMetric(id);
    }
}
