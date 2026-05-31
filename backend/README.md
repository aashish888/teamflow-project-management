# TeamFlow Backend

TeamFlow Backend is a Project and Task Management REST API built using Java, Spring Boot, and PostgreSQL.

## Tech Stack

- Java
- Spring Boot
- Spring Web
- Spring Data JPA
- PostgreSQL
- Bean Validation
- Maven

## Features

- Project Management APIs
- Task Management APIs
- Team Member APIs
- Layered Architecture
    - Controller Layer
    - Service Layer
    - Repository Layer
    - DTO Layer
    - Entity Layer
    - Exception Handling
- Input Validation
- PostgreSQL Database Relationships
- Proper HTTP Status Codes

## Database Configuration

Database name:

```text
teamflow_db





spring.datasource.url=jdbc:postgresql://localhost:5432/teamflow_db
spring.datasource.username=
spring.datasource.password=


CREATE DATABASE teamflow_db;
______________________________________________________
Run the Spring Boot application from IntelliJ:

Run BackendApplication.java

____________________________
For Windows:
mvnw.cmd spring-boot:run

_______________
Base URL:
http://localhost:8080

_________
API Endpoints
Project APIs

POST   /api/projects
GET    /api/projects
GET    /api/projects/{id}
PUT    /api/projects/{id}
DELETE /api/projects/{id}

___________________________

Team Member APIs

POST   /api/team-members
GET    /api/team-members
GET    /api/team-members/{id}
PUT    /api/team-members/{id}
DELETE /api/team-members/{id}

________________________________

Task APIs

POST   /api/tasks
GET    /api/tasks
GET    /api/tasks/{id}
PUT    /api/tasks/{id}
DELETE /api/tasks/{id}

______________________

Sample Project Request:
{
  "projectName": "TeamFlow Backend",
  "description": "Project and task management backend API",
  "startDate": "2026-06-01",
  "endDate": "2026-07-01",
  "projectStatus": "ACTIVE"
}


__________________

Sample Team Member Request

{
  "name": "Aashi Patil",
  "email": "aashi@example.com",
  "role": "Backend Developer",
  "department": "Engineering"
}

______________________

Sample Task Request

{
  "taskTitle": "Create backend CRUD APIs",
  "description": "Build APIs for project, task, and team member management",
  "priority": "HIGH",
  "status": "TODO",
  "dueDate": "2026-06-10",
  "assignedTeamMemberId": 1,
  "projectId": 1
}

_____________________

ENUM VALUES_

Project Status:

PLANNING, ACTIVE, ON_HOLD, COMPLETED, CANCELLED


_____________________

Task Priority:

LOW, MEDIUM, HIGH, URGENT

____________________

Task Status:

TODO, IN_PROGRESS, COMPLETED, BLOCKED
________________________________________________________________________

Testing
APIs were tested using Postman.


************************************************************************
 add/update 




CORS mention 

- CORS enabled for frontend at http://localhost:3000
API integration note add 
Frontend can connect to the backend using base URL: http://localhost:8080/api
Database tables section add 
## Database Tables

- projects
- tasks
- team_members
Postman collection section 
## Postman Collection

Postman collection is available inside the `postman` folder.


