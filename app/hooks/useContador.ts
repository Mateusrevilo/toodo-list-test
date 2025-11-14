"use client";

import { useMemo } from "react";
import { Tarefa } from "../types/Tarefa";

export function useContadorDeTarefas(tarefas: Tarefa[] = []) {
  const totalDeTarefas = useMemo(() => tarefas.length, [tarefas]);

  return totalDeTarefas;
}
