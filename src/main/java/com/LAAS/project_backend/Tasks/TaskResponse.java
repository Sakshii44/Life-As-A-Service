package com.LAAS.project_backend.Tasks;

import java.time.LocalDateTime;

public class TaskResponse {
    public Integer id;
    public Integer userId;
    public String title;
    public String description;
    public Boolean completed;
    public Task.Priority priority;  // Nested enum reference
    public LocalDateTime dueDate;
    public LocalDateTime createdAt;
    public LocalDateTime updatedAt;
}
