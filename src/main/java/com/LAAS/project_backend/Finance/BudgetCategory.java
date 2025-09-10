package com.LAAS.project_backend.Finance;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "budget_categories")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BudgetCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private Double allocated;

    private Double spent;
}
