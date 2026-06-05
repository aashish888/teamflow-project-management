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
  const [editingTask, setEditingTask] = useState<Task | null>(null);

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

    setTaskItems((currentTasks) => [
  {
    ...createdTask,
    assignedTeamMemberName: values.assignedTeamMemberName,
  },
  ...currentTasks,
]);
    
  }
 function handleStartEdit(task: Task) {
  setEditingTask(task);
}

async function handleUpdateTask(values: TaskFormValues) {
  if (!editingTask) {
    return;
  }

  const updatedTask = await api.updateTask(editingTask.id, {
    taskTitle: values.taskTitle,
    description: values.description,
    priority: values.priority,
    status: values.status,
    dueDate: values.dueDate,
    assignedTeamMemberId: editingTask.assignedTeamMemberId,
    projectId: editingTask.projectId,
  });

  setTaskItems((currentTasks) =>
    currentTasks.map((task) => (task.id === editingTask.id
  ? {
      ...updatedTask,
      assignedTeamMemberName: values.assignedTeamMemberName,
    }
  : task))
  );

  setEditingTask(null);
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
      <div className="rounded-2xl bg-white p-6 text-center text-sm text-slate-600 shadow-sm dark:bg-slate-900 dark:text-slate-300">
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
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm dark:bg-slate-900">
      <div className="border-b border-slate-200 p-4 dark:border-slate-800">
        <TaskForm
  onSubmit={editingTask ? handleUpdateTask : handleAddTask}
  initialValues={
    editingTask
      ? {
          taskTitle: editingTask.taskTitle,
          description: editingTask.description,
          priority: editingTask.priority,
          status: editingTask.status,
          assignedTeamMemberName: editingTask.assignedTeamMemberName,
          dueDate: editingTask.dueDate,
        }
      : undefined
  }
  submitLabel={editingTask ? "Update Task" : "Add Task"}
  onCancel={editingTask ? () => setEditingTask(null) : undefined}
/>
      </div>

      <div className="grid gap-4 border-b border-slate-200 p-4 dark:border-slate-800 md:grid-cols-[1fr_180px_180px]">
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search tasks"
          className="rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
        />

        <select
          value={status}
          onChange={(event) => setStatus(event.target.value as "ALL" | TaskStatus)}
          className="rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
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
          className="rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
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
              <tr key={task.id} className="border-b border-slate-200 last:border-0 dark:border-slate-800">
                <td className="px-4 py-4 font-medium">{task.taskTitle}</td>
                <td className="px-4 py-4 text-slate-600 dark:text-slate-300">{task.description}</td>
                <td className="px-4 py-4">{task.priority}</td>
                <td className="px-4 py-4">{task.status}</td>
                <td className="px-4 py-4">{task.assignedTeamMemberName}</td>
                <td className="px-4 py-4">{task.dueDate}</td>
                <td className="flex gap-2 px-4 py-4">
                  <button
                    type="button"
                 onClick={() => handleStartEdit(task)}
                    className="rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDeleteTask(task.id)}
                    className="rounded-lg border border-red-200 px-3 py-2 text-xs font-semibold text-red-700 transition hover:bg-red-50 dark:border-red-900 dark:text-red-300 dark:hover:bg-red-950"
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
        <div className="p-6 text-center text-sm text-slate-500 dark:text-slate-400">
          No tasks found.
        </div>
      )}
    </div>
  );
}
