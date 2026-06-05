
import type { Project, Task, TeamMember } from "@/types";

const API_BASE_URL = "http://localhost:8080/api";

type TaskPayload = {
  taskTitle: string;
  description: string;
  priority: Task["priority"];
  status: Task["status"];
  dueDate: string;
   assignedUserName?: string;
  assignedTeamMemberId: number;
  projectId: number;
};

type TeamMemberPayload = {
  name: string;
  email: string;
  role: string;
  department: string;
};

async function request<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${url}`, {
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error("API request failed");
  }

  return response.json() as Promise<T>;
}

export const api = {
      getProjects: () => request<Project[]>("/projects"),
  getTasks: () => request<Task[]>("/tasks"),
   

  createTask: (payload: TaskPayload) =>
    request<Task>("/tasks", {
      method: "POST",
      body: JSON.stringify(payload),
    }),

  updateTask: (id: number, payload: TaskPayload) =>
    request<Task>(`/tasks/${id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    }),

  deleteTask: async (id: number) => {
    await fetch(`${API_BASE_URL}/tasks/${id}`, {
      method: "DELETE",
    });
  },

  getTeamMembers: () => request<TeamMember[]>("/team-members"),
  

  createTeamMember: (payload: TeamMemberPayload) =>
    request<TeamMember>("/team-members", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
};