import TodoApp from "./components/TodoApp";
import { Tarefa } from "./types/Tarefa"

// Simular carregamento de dados no servidor
async function getTarefas(): Promise<Tarefa[]> {
  // Simular Promise.resolve() conforme requisito
  return Promise.resolve([
    { _id: 1, task: "Tarefa exemplo 1", status: "não concluida" },
    { _id: 2, task: "Tarefa exemplo 2", status: "concluida" },
  ]);
}

export default async function Home() {
  const initialTasks = await getTarefas();

  return <TodoApp initialTasks={initialTasks} />;
}
