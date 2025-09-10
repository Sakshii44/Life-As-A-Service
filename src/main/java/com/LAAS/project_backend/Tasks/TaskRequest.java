package com.LAAS.project_backend.Tasks;


import com.LAAS.project_backend.Tasks.Task.Priority;

import java.time.LocalDateTime;

public class TaskRequest {
    public Integer userId;
    public String title;
    public String description;
    public Boolean completed;
    public Priority priority;
    public LocalDateTime dueDate;
}

