package com.teamflow.backend.dto;

import com.teamflow.backend.entity.ProjectStatus;
import java.time.LocalDate;

public class ProjectResponse {

    private Long id;
    private String projectName;
    private String description;
    private LocalDate startDate;
    private LocalDate endDate;
    private ProjectStatus projectStatus;

    public ProjectResponse(Long id, String projectName, String description, LocalDate startDate, LocalDate endDate, ProjectStatus projectStatus) {
        this.id = id;
        this.projectName = projectName;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.projectStatus = projectStatus;
    }

    public Long getId() {
        return id;
    }

    public String getProjectName() {
        return projectName;
    }

    public String getDescription() {
        return description;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public ProjectStatus getProjectStatus() {
        return projectStatus;
    }
}
