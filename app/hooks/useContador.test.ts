import { renderHook } from "@testing-library/react"
import { useContadorDeTarefas } from "./useContador"
import { Tarefa } from "../types/Tarefa"

describe("useContadorDeTarefas", () => {
    it("deve retornar 0 quando não há tarefas", () => {
        const { result } = renderHook(() => useContadorDeTarefas([]));
        expect(result.current).toBe(0);
    });

    it("deve retornar o número correto de tarefas", () => {
        const tarefas: Tarefa[] = [
            { _id: 1, task: "Tarefa 1", status: "não concluida" },
            { _id: 2, task: "Tarefa 2", status: "concluida" },
            { _id: 3, task: "Tarefa 3", status: "não concluida" },
        ];
        const { result } = renderHook(() => useContadorDeTarefas(tarefas));
        expect(result.current).toBe(3);
    });

    it("deve retornar 1 quando há apenas uma tarefa", () => {
        const tarefas: Tarefa[] = [
            { _id: 1, task: "Tarefa única", status: "não concluida" },
        ];
        const { result } = renderHook(() => useContadorDeTarefas(tarefas));
        expect(result.current).toBe(1);
    });
})