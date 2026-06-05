package com.teamflow.backend.dto;

import com.teamflow.backend.entity.TaskPriority;
import com.teamflow.backend.entity.TaskStatus;
import java.time.LocalDate;

public class TaskResponse {

    private Long id;
    private String taskTitle;
    private String description;
    private TaskPriority priority;
    private TaskStatus status;
    private LocalDate dueDate;
    private Long assignedTeamMemberId;
    private String assignedTeamMemberName;
    private Long projectId;
    private String projectName;
    private String assignedUserName;
    public TaskResponse(Long id, String taskTitle, String description, String assignedUserName,TaskPriority priority, TaskStatus status,
                        LocalDate dueDate, Long assignedTeamMemberId, String assignedTeamMemberName,
                        Long projectId, String projectName) {
        this.id = id;
        this.taskTitle = taskTitle;
        this.description = description;
        this.assignedUserName = assignedUserName;
        this.priority = priority;
        this.status = status;
        this.dueDate = dueDate;
        this.assignedTeamMemberId = assignedTeamMemberId;
        this.assignedTeamMemberName = assignedTeamMemberName;
        this.projectId = projectId;
        this.projectName = projectName;
    }



    public String getAssignedUserName() {
        return assignedUserName;
    }

    public void setAssignedUserName(String assignedUserName) {
        this.assignedUserName = assignedUserName;
    }
    public Long getId() {
        return id;
    }

    public String getTaskTitle() {
        return taskTitle;
    }

    public String getDescription() {
        return description;
    }

    public TaskPriority getPriority() {
        return priority;
    }

    public TaskStatus getStatus() {
        return status;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }

    public Long getAssignedTeamMemberId() {
        return assignedTeamMemberId;
    }

    public String getAssignedTeamMemberName() {
        return assignedTeamMemberName;
    }

    public Long getProjectId() {
        return projectId;
    }

    public String getProjectName() {
        return projectName;
    }
}