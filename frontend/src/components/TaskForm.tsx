"use client";

import type { TaskPriority, TaskStatus } from "@/types";

export type TaskFormValues = {
  taskTitle: string;
  description: string;
  priority: TaskPriority;
  status: TaskStatus;
  assignedTeamMemberName: string;
  dueDate: string;
};

type TaskFormProps = {
  onSubmit: (values: TaskFormValues) => void;
};

export function TaskForm({ onSubmit }: TaskFormProps) {
  function handleSubmit(formData: FormData) {
    const values: TaskFormValues = {
      taskTitle: String(formData.get("taskTitle")),
      description: String(formData.get("description")),
      priority: String(formData.get("priority")) as TaskPriority,
      status: String(formData.get("status")) as TaskStatus,
      assignedTeamMemberName: String(formData.get("assignedTeamMemberName")),
      dueDate: String(formData.get("dueDate")),
    };

    onSubmit(values);
  }

  return (
    <form
      action={handleSubmit}
      className="mb-4 grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950 lg:grid-cols-2"
    >
      <input
        name="taskTitle"
        required
        placeholder="Task title"
        className="rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
      />

      <input
        name="assignedTeamMemberName"
        required
        placeholder="Assigned user"
        className="rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
      />

      <textarea
        name="description"
        required
        placeholder="Description"
        className="rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white lg:col-span-2"
      />

      <select
        name="priority"
        defaultValue="MEDIUM"
        className="rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
      >
        <option value="LOW">LOW</option>
        <option value="MEDIUM">MEDIUM</option>
        <option value="HIGH">HIGH</option>
        <option value="URGENT">URGENT</option>
      </select>

      <select
        name="status"
        defaultValue="TODO"
        className="rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
      >
        <option value="TODO">TODO</option>
        <option value="IN_PROGRESS">IN_PROGRESS</option>
        <option value="COMPLETED">COMPLETED</option>
        <option value="BLOCKED">BLOCKED</option>
      </select>

      <input
        name="dueDate"
        type="date"
        required
        className="rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
      />

      <button
        type="submit"
        className="rounded-lg bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-600 dark:hover:bg-cyan-500"
      >
        Add Task
      </button>
    </form>
  );
}
