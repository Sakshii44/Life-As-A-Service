package com.LAAS.project_backend.Finance;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BudgetCategoryDTO {
    private String name;
    private Double allocated;
    private Double spent;
}
