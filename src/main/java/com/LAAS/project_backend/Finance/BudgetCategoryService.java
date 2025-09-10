package com.LAAS.project_backend.Finance;

import com.LAAS.project_backend.Finance.BudgetCategoryDTO;
import com.LAAS.project_backend.Finance.BudgetCategory;
import com.LAAS.project_backend.Finance.BudgetCategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BudgetCategoryService {

    private final BudgetCategoryRepository budgetCategoryRepository;

    public List<BudgetCategory> getAllCategories() {
        return budgetCategoryRepository.findAll();
    }

    public BudgetCategory addCategory(BudgetCategoryDTO dto) {
        BudgetCategory category = BudgetCategory.builder()
                .name(dto.getName())
                .allocated(dto.getAllocated())
                .spent(dto.getSpent() != null ? dto.getSpent() : 0.0)
                .build();
        return budgetCategoryRepository.save(category);
    }
}
