package com.LAAS.project_backend.Tasks;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        com.LAAS.project_backend.User.User user = (com.LAAS.project_backend.User.User) auth.getPrincipal();

        task.setUserId(user.getId().intValue()); // ✅ cast Long → Integer
        return taskService.createTask(task);
    }

    @GetMapping("/me")
    public List<Task> getMyTasks() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        com.LAAS.project_backend.User.User user = (com.LAAS.project_backend.User.User) auth.getPrincipal();

        return taskService.getTasksByUser(user.getId().intValue()); // ✅ cast Long → Integer
    }

    @GetMapping("/{id}")
    public Optional<Task> getTaskById(@PathVariable Integer id) {
        return taskService.getTaskById(id);
    }

    @PutMapping("/{id}")
    public Task updateTask(@PathVariable Integer id, @RequestBody Task updatedTask) {
        updatedTask.setId(id);

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        com.LAAS.project_backend.User.User user = (com.LAAS.project_backend.User.User) auth.getPrincipal();

        updatedTask.setUserId(user.getId().intValue()); // ✅ cast Long → Integer
        return taskService.updateTask(updatedTask);
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Integer id) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        com.LAAS.project_backend.User.User user = (com.LAAS.project_backend.User.User) auth.getPrincipal();

        // (Optional: check ownership before deleting)
        taskService.deleteTask(id);
    }
}
