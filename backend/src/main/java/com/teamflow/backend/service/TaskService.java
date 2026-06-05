package com.teamflow.backend.service;

import com.teamflow.backend.dto.TaskRequest;
import com.teamflow.backend.dto.TaskResponse;
import com.teamflow.backend.entity.Project;
import com.teamflow.backend.entity.Task;
import com.teamflow.backend.entity.TeamMember;
import com.teamflow.backend.exception.ResourceNotFoundException;
import com.teamflow.backend.repository.ProjectRepository;
import com.teamflow.backend.repository.TaskRepository;
import com.teamflow.backend.repository.TeamMemberRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TaskService {

    private final TaskRepository taskRepository;
    private final ProjectRepository projectRepository;
    private final TeamMemberRepository teamMemberRepository;

    public TaskService(TaskRepository taskRepository,
                       ProjectRepository projectRepository,
                       TeamMemberRepository teamMemberRepository) {
        this.taskRepository = taskRepository;
        this.projectRepository = projectRepository;
        this.teamMemberRepository = teamMemberRepository;
    }

    public TaskResponse createTask(TaskRequest request) {
        Project project = projectRepository.findById(request.getProjectId())
                .orElseThrow(() -> new ResourceNotFoundException("Project not found with id: " + request.getProjectId()));

        TeamMember teamMember = teamMemberRepository.findById(request.getAssignedTeamMemberId())
                .orElseThrow(() -> new ResourceNotFoundException("Team member not found with id: " + request.getAssignedTeamMemberId()));

        Task task = new Task();
        task.setTaskTitle(request.getTaskTitle());
        task.setDescription(request.getDescription());
        task.setAssignedUserName(request.getAssignedUserName());
        task.setPriority(request.getPriority());
        task.setStatus(request.getStatus());
        task.setDueDate(request.getDueDate());
        task.setProject(project);
        task.setAssignedTeamMember(teamMember);

        Task savedTask = taskRepository.save(task);
        return mapToResponse(savedTask);
    }

    public List<TaskResponse> getAllTasks() {
        return taskRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public TaskResponse getTaskById(Long id) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not found with id: " + id));

        return mapToResponse(task);
    }

    public TaskResponse updateTask(Long id, TaskRequest request) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not found with id: " + id));

        Project project = projectRepository.findById(request.getProjectId())
                .orElseThrow(() -> new ResourceNotFoundException("Project not found with id: " + request.getProjectId()));

        TeamMember teamMember = teamMemberRepository.findById(request.getAssignedTeamMemberId())
                .orElseThrow(() -> new ResourceNotFoundException("Team member not found with id: " + request.getAssignedTeamMemberId()));

        task.setTaskTitle(request.getTaskTitle());
        task.setDescription(request.getDescription());
        task.setAssignedUserName(request.getAssignedUserName());
        task.setPriority(request.getPriority());
        task.setStatus(request.getStatus());
        task.setDueDate(request.getDueDate());
        task.setProject(project);
        task.setAssignedTeamMember(teamMember);

        Task updatedTask = taskRepository.save(task);
        return mapToResponse(updatedTask);
    }

    public void deleteTask(Long id) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not found with id: " + id));

        taskRepository.delete(task);
    }

    private TaskResponse mapToResponse(Task task) {
        return new TaskResponse(
                task.getId(),
                task.getTaskTitle(),
                task.getDescription(),
                task.getAssignedUserName(),
                task.getPriority(),
                task.getStatus(),
                task.getDueDate(),
                task.getAssignedTeamMember().getId(),
                task.getAssignedTeamMember().getName(),
                task.getProject().getId(),
                task.getProject().getProjectName()
        );
    }
}