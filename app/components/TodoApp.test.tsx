/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from "@testing-library/react";
import TodoApp from "./TodoApp";
import { Tarefa } from "../types/Tarefa";

describe("TodoApp", () => {
  const mockTasks: Tarefa[] = [
    { _id: 1, task: "Tarefa 1", status: "não concluida" },
    { _id: 2, task: "Tarefa 2", status: "concluida" },
  ];

  it("deve renderizar o heading e contador", () => {
    render(<TodoApp initialTasks={mockTasks} />);
    
    expect(screen.getByRole("heading", { name: /Lista de Tarefas/i })).toBeInTheDocument();
    expect(screen.getByText(/Total de Tarefas: 2/i)).toBeInTheDocument();
  });

  it("deve renderizar o formulário de nova tarefa", () => {
    render(<TodoApp initialTasks={[]} />);
    
    expect(screen.getByLabelText(/Tarefa/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Status/i)).toBeInTheDocument();
  });

  it("deve renderizar a lista de tarefas", () => {
    render(<TodoApp initialTasks={mockTasks} />);
    
    expect(screen.getByText("Tarefa 1")).toBeInTheDocument();
    expect(screen.getByText("Tarefa 2")).toBeInTheDocument();
  });

  it("deve atualizar o contador quando uma tarefa é adicionada", () => {
    render(<TodoApp initialTasks={[]} />);
    
    const inputText = screen.getByLabelText(/Tarefa/i);
    const submitButton = screen.getByRole('button', { name: /Adicionar/i });

    fireEvent.change(inputText, { target: { value: "Nova Tarefa" } });
    fireEvent.click(submitButton);

    expect(screen.getByText(/Total de Tarefas: 1/i)).toBeInTheDocument();
  });

  it("deve atualizar o contador quando uma tarefa é removida", () => {
    render(<TodoApp initialTasks={mockTasks} />);
    
    expect(screen.getByText(/Total de Tarefas: 2/i)).toBeInTheDocument();
    
    const deleteButtons = screen.getAllByLabelText("Excluir tarefa");
    fireEvent.click(deleteButtons[0]);

    expect(screen.getByText(/Total de Tarefas: 1/i)).toBeInTheDocument();
  });
});

