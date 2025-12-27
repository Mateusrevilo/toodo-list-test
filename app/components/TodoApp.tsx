"use client";
import { useState } from "react";
import FormTask from "./FormTask";
import TaskList from "./TaskList";
import { useContadorDeTarefas } from "../hooks/useContador";
import { Tarefa } from "../types/Tarefa";
import styles from "./TodoApp.module.css";

type Props = {
  initialTasks?: Tarefa[];
};

export default function TodoApp({ initialTasks = [] }: Props) {
  const [tasks, setTasks] = useState<Tarefa[]>(initialTasks);
  const totalDeTarefas = useContadorDeTarefas(tasks);

  const addTask = (dados: Tarefa) => {
    // Simular adição local
    const newTask: Tarefa = {
      ...dados,
      _id: Date.now(), // ID temporário
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const handleDelete = (_id: number) => {
    setTasks((prev) => prev.filter((task) => task._id !== _id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Lista de Tarefas</h1>
        <p className={styles.counter}>
          Total de Tarefas:{" "}
          <span className={styles.counterNumber}>{totalDeTarefas}</span>
        </p>
      </div>
      <FormTask aoEnviar={addTask} />
      <TaskList onDelete={handleDelete} task={tasks} />
    </div>
  );
}
