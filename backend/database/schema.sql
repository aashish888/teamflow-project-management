CREATE TABLE projects (
    id BIGSERIAL PRIMARY KEY,
    project_name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    start_date DATE,
    end_date DATE,
    project_status VARCHAR(50)
);

CREATE TABLE team_members (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    role VARCHAR(255),
    department VARCHAR(255)
);

CREATE TABLE tasks (
    id BIGSERIAL PRIMARY KEY,
    task_title VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    priority VARCHAR(50),
    status VARCHAR(50),
    due_date DATE,
    assigned_member_id BIGINT,
    project_id BIGINT,
    CONSTRAINT fk_task_team_member
        FOREIGN KEY (assigned_member_id)
        REFERENCES team_members(id),
    CONSTRAINT fk_task_project
        FOREIGN KEY (project_id)
        REFERENCES projects(id)
);