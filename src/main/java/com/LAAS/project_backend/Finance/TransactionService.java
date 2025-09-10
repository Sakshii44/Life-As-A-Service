package com.LAAS.project_backend.Finance;

import com.LAAS.project_backend.Finance.TransactionDTO;
import com.LAAS.project_backend.Finance.Transaction;
import com.LAAS.project_backend.Finance.TransactionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TransactionService {

    private final TransactionRepository transactionRepository;

    public Transaction addTransaction(TransactionDTO dto) {
        Transaction transaction = Transaction.builder()
                .description(dto.getDescription())
                .amount(dto.getAmount())
                .type(dto.getType())
                .category(dto.getCategory())
                .date(dto.getDate() != null ? dto.getDate() : LocalDateTime.now())
                .build();
        return transactionRepository.save(transaction);
    }

    public List<Transaction> getRecentTransactions(int days) {
        LocalDateTime start = LocalDateTime.now().minusDays(days);
        LocalDateTime end = LocalDateTime.now();
        return transactionRepository.findByDateBetween(start, end);
    }
}
