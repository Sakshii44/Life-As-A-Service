package com.LAAS.project_backend.Finance;

import com.LAAS.project_backend.Finance.TransactionType;
import lombok.*;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TransactionDTO {

    private String description;
    private Double amount;
    private TransactionType type;
    private String category;
    private LocalDateTime date;
}
