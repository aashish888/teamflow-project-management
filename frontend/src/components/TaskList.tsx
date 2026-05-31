"use client";

import { useEffect, useMemo, useState } from "react";
import { api } from "@/lib/api";
import { TaskForm, type TaskFormValues } from "@/components/TaskForm";
import type { Task, TaskPriority, TaskStatus } from "@/types";


type TaskListProps = {
  tasks: Task[];
};

export function TaskList({ tasks }: TaskListProps) {
  const [taskItems, setTaskItems] = useState(tasks);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<"ALL" | TaskStatus>("ALL");
  const [priority, setPriority] = useState<"ALL" | TaskPriority>("ALL");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

    useEffect(() => {
    async function loadTasks() {
      try {
        const data = await api.getTasks();
        setTaskItems(data);
      } catch {
        setError("Unable to load tasks from backend.");
      } finally {
        setIsLoading(false);
      }
    }

    loadTasks();
  }, []);

  async function handleAddTask(values: TaskFormValues) {
    const createdTask = await api.createTask({
      taskTitle: values.taskTitle,
      description: values.description,
      priority: values.priority,
      status: values.status,
      dueDate: values.dueDate,
      assignedTeamMemberId: 1,
      projectId: 1,
    });

    setTaskItems((currentTasks) => [createdTask, ...currentTasks]);
    
  }
 async function handleEditTask(taskId: number) {
  const selectedTask = taskItems.find((task) => task.id === taskId);

  if (!selectedTask) {
    return;
  }

  const updatedTask = await api.updateTask(taskId, {
    taskTitle: `${selectedTask.taskTitle} Updated`,
    description: selectedTask.description,
    priority: selectedTask.priority,
    status: "IN_PROGRESS",
    dueDate: selectedTask.dueDate,
    assignedTeamMemberId: selectedTask.assignedTeamMemberId,
    projectId: selectedTask.projectId,
  });

  setTaskItems((currentTasks) =>
    currentTasks.map((task) => (task.id === taskId ? updatedTask : task))
  );
}
  async function handleDeleteTask(taskId: number) {
    await api.deleteTask(taskId);
    setTaskItems((currentTasks) =>
      currentTasks.filter((currentTask) => currentTask.id !== taskId)
    );
  }



  const filteredTasks = useMemo(() => {
    return taskItems.filter((task) => {
      const searchText = search.toLowerCase();
      const matchesSearch =
        task.taskTitle.toLowerCase().includes(searchText) ||
        task.description.toLowerCase().includes(searchText) ||
        task.assignedTeamMemberName.toLowerCase().includes(searchText);

      const matchesStatus = status === "ALL" || task.status === status;
      const matchesPriority = priority === "ALL" || task.priority === priority;

      return matchesSearch && matchesStatus && matchesPriority;
    });
  }, [taskItems, search, status, priority]);




  if (isLoading) {
    return (
      <div className="rounded-2xl bg-white p-6 text-center text-sm text-slate-600 shadow-sm">
        Loading tasks...
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center text-sm text-red-700">
        {error}
      </div>
    );
  }

  

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
      <div className="border-b border-slate-200 p-4">
        <TaskForm onSubmit={handleAddTask} />
      </div>

      <div className="grid gap-4 border-b border-slate-200 p-4 md:grid-cols-[1fr_180px_180px]">
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search tasks"
          className="rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
        />

        <select
          value={status}
          onChange={(event) => setStatus(event.target.value as "ALL" | TaskStatus)}
          className="rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
        >
          <option value="ALL">All Status</option>
          <option value="TODO">TODO</option>
          <option value="IN_PROGRESS">IN_PROGRESS</option>
          <option value="COMPLETED">COMPLETED</option>
          <option value="BLOCKED">BLOCKED</option>
        </select>

        <select
          value={priority}
          onChange={(event) => setPriority(event.target.value as "ALL" | TaskPriority)}
          className="rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
        >
          <option value="ALL">All Priority</option>
          <option value="LOW">LOW</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="HIGH">HIGH</option>
          <option value="URGENT">URGENT</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px] border-collapse text-left text-sm">
          <thead className="bg-slate-950 text-white">
            <tr>
              <th className="px-4 py-3 font-semibold">Task Title</th>
              <th className="px-4 py-3 font-semibold">Description</th>
              <th className="px-4 py-3 font-semibold">Priority</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold">Assigned User</th>
              <th className="px-4 py-3 font-semibold">Due Date</th>
              <th className="px-4 py-3 font-semibold">Actions</th>
            </tr>
          </thead>

          
          <tbody>







            
            {filteredTasks.map((task) => (
              <tr key={task.id} className="border-b border-slate-200 last:border-0">
                <td className="px-4 py-4 font-medium">{task.taskTitle}</td>
                <td className="px-4 py-4 text-slate-600">{task.description}</td>
                <td className="px-4 py-4">{task.priority}</td>
                <td className="px-4 py-4">{task.status}</td>
                <td className="px-4 py-4">{task.assignedTeamMemberName}</td>
                <td className="px-4 py-4">{task.dueDate}</td>
                <td className="flex gap-2 px-4 py-4">
                  <button
                    type="button"
                    onClick={() => handleEditTask(task.id)}
                    className="rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100"
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDeleteTask(task.id)}
                    className="rounded-lg border border-red-200 px-3 py-2 text-xs font-semibold text-red-700 transition hover:bg-red-50"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>




        
      </div>


      {filteredTasks.length === 0 && (
        <div className="p-6 text-center text-sm text-slate-500">
          No tasks found.
        </div>
      )}
    </div>
  );
}