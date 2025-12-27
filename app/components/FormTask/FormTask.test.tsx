import { render, screen, fireEvent } from "@testing-library/react";
import FormTask from ".";

describe("FormTask - testando inputs e submissão", () => {
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    mockOnSubmit.mockClear();
  });

  it("deve renderizar os elementos corretamente", () => {
    render(<FormTask aoEnviar={mockOnSubmit} />);

    expect(screen.getByLabelText(/Tarefa/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Status/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Adicionar/i }),
    ).toBeInTheDocument();
  });

  it("deve permitir digitar no input de tarefa", () => {
    render(<FormTask aoEnviar={mockOnSubmit} />);
    const inputText = screen.getByLabelText(/Tarefa/i);

    fireEvent.change(inputText, { target: { value: "estudar" } });

    expect(inputText).toHaveValue("estudar");
  });

  it("deve permitir alterar o status", () => {
    render(<FormTask aoEnviar={mockOnSubmit} />);
    const selectStatus = screen.getByLabelText(/Status/i);

    fireEvent.change(selectStatus, { target: { value: "concluida" } });

    expect(selectStatus).toHaveValue("concluida");
  });

  it("deve chamar aoEnviar ao submeter o formulário com dados válidos", () => {
    render(<FormTask aoEnviar={mockOnSubmit} />);
    const inputText = screen.getByLabelText(/Tarefa/i);
    const selectStatus = screen.getByLabelText(/Status/i);
    const submitButton = screen.getByRole("button", { name: /Adicionar/i });

    const testInput = "estudar";
    const testSelect = "concluida";

    fireEvent.change(inputText, { target: { value: testInput } });
    fireEvent.change(selectStatus, { target: { value: testSelect } });
    fireEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledWith({
      task: testInput,
      status: testSelect,
    });
  });

  it("não deve chamar aoEnviar quando o input está vazio", () => {
    render(<FormTask aoEnviar={mockOnSubmit} />);
    const submitButton = screen.getByRole("button", { name: /Adicionar/i });

    fireEvent.click(submitButton);

    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  it("não deve chamar aoEnviar quando o input contém apenas espaços", () => {
    render(<FormTask aoEnviar={mockOnSubmit} />);
    const inputText = screen.getByLabelText(/Tarefa/i);
    const submitButton = screen.getByRole("button", { name: /Adicionar/i });

    fireEvent.change(inputText, { target: { value: "   " } });
    fireEvent.click(submitButton);

    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  it("deve limpar o input após submissão bem-sucedida", () => {
    render(<FormTask aoEnviar={mockOnSubmit} />);
    const inputText = screen.getByLabelText(/Tarefa/i);
    const submitButton = screen.getByRole("button", { name: /Adicionar/i });

    fireEvent.change(inputText, { target: { value: "estudar" } });
    fireEvent.click(submitButton);

    expect(inputText).toHaveValue("");
  });
});
