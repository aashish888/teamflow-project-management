import type { Task, TeamMember } from "@/types";

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Aashi Patil",
    email: "aashi@example.com",
    role: "Backend Developer",
    department: "Engineering",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    email: "rahul@example.com",
    role: "Frontend Developer",
    department: "Engineering",
  },
  {
    id: 3,
    name: "Sneha Kulkarni",
    email: "sneha@example.com",
    role: "Project Manager",
    department: "Operations",
  },
];

export const tasks: Task[] = [
  {
    id: 1,
    taskTitle: "Create backend CRUD APIs",
    description: "Build APIs for project, task, and team member management",
    priority: "HIGH",
    status: "IN_PROGRESS",
    dueDate: "2026-06-10",
    assignedTeamMemberId: 1,
    assignedTeamMemberName: "Aashi Patil",
    projectId: 1,
    projectName: "TeamFlow Backend",
  },
  {
    id: 2,
    taskTitle: "Design dashboard layout",
    description: "Create responsive dashboard stats and task overview",
    priority: "MEDIUM",
    status: "TODO",
    dueDate: "2026-06-12",
    assignedTeamMemberId: 2,
    assignedTeamMemberName: "Rahul Sharma",
    projectId: 1,
    projectName: "TeamFlow Frontend",
  },
  {
    id: 3,
    taskTitle: "Prepare project documentation",
    description: "Write README and API documentation",
    priority: "LOW",
    status: "COMPLETED",
    dueDate: "2026-06-15",
    assignedTeamMemberId: 3,
    assignedTeamMemberName: "Sneha Kulkarni",
    projectId: 1,
    projectName: "TeamFlow",
  },
];