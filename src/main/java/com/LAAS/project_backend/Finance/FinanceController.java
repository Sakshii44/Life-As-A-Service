package com.LAAS.project_backend.Finance;

import com.LAAS.project_backend.Finance.BudgetCategoryDTO;
import com.LAAS.project_backend.Finance.TransactionDTO;
import com.LAAS.project_backend.Finance.BudgetCategory;
import com.LAAS.project_backend.Finance.Transaction;
import com.LAAS.project_backend.Finance.BudgetCategoryService;
import com.LAAS.project_backend.Finance.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/finance")
@RequiredArgsConstructor
public class FinanceController {

    private final TransactionService transactionService;
    private final BudgetCategoryService budgetCategoryService;

    @PostMapping("/transaction")
    public Transaction addTransaction(@RequestBody TransactionDTO dto) {
        return transactionService.addTransaction(dto);
    }

    @GetMapping("/transactions")
    public List<Transaction> getRecentTransactions(@RequestParam(defaultValue = "7") int days) {
        return transactionService.getRecentTransactions(days);
    }

    @GetMapping("/budget")
    public List<BudgetCategory> getBudgetCategories() {
        return budgetCategoryService.getAllCategories();
    }

    @PostMapping("/budget")
    public BudgetCategory addBudgetCategory(@RequestBody BudgetCategoryDTO dto) {
        return budgetCategoryService.addCategory(dto);
    }
}
