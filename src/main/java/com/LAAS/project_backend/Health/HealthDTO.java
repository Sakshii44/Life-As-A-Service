package com.LAAS.project_backend.Health;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class HealthDTO {
    private Long id;
    private String metric;
    private double current;
    private double target;
    private String unit;
    private double progress;
    private String status;
}
