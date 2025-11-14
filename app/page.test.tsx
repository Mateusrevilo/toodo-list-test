
import { render, screen } from "@testing-library/react";
import Page from "./page";

describe("Page - Server Component", () => {
  it("deve renderizar o heading corretamente", async () => {
    const PageComponent = await Page();
    render(PageComponent);
    
    expect(screen.getByRole("heading", { name: /Lista de Tarefas/i })).toBeInTheDocument();
  });

  it("deve carregar e renderizar tarefas iniciais", async () => {
    const PageComponent = await Page();
    render(PageComponent);
    
    // Verificar se as tarefas mockadas foram carregadas
    expect(screen.getByText("Tarefa exemplo 1")).toBeInTheDocument();
    expect(screen.getByText("Tarefa exemplo 2")).toBeInTheDocument();
    expect(screen.getByText(/Total de Tarefas: 2/i)).toBeInTheDocument();
  });
});
