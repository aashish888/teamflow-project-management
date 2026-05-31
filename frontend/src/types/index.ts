export type TaskStatus = "TODO" | "IN_PROGRESS" | "COMPLETED" | "BLOCKED";

export type TaskPriority = "LOW" | "MEDIUM" | "HIGH" | "URGENT";

export type ProjectStatus =
  | "PLANNING"
  | "ACTIVE"
  | "ON_HOLD"
  | "COMPLETED"
  | "CANCELLED";

export type TeamMember = {
  id: number;
  name: string;
  email: string;
  role: string;
  department: string;
};

export type Task = {
  id: number;
  taskTitle: string;
  description: string;
  priority: TaskPriority;
  status: TaskStatus;
  dueDate: string;
  assignedTeamMemberId: number;
  assignedTeamMemberName: string;
  projectId: number;
  projectName: string;
};




export type Project = {
  id: number;
  projectName: string;
  description: string;
  startDate: string;
  endDate: string;
  projectStatus: ProjectStatus;
};