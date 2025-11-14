"use client"
import { useState } from "react"
import type { Tarefa } from "../../types/Tarefa"
import styles from "./FormTask.module.css"

type Props = {
    aoEnviar: (tarefa: Tarefa) => void
    onUpdateStatus?: (id: number, status: "concluida" | "não concluida") => void

}



const FormTask = ({ aoEnviar,  }: Props) => {

    const [task, setTask] = useState("");
    const [status, setStatus] = useState<"concluida" | "não concluida">("não concluida")
   






    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (task.trim() === '') return;
        
        aoEnviar({ task, status });
        setTask("");
    }


    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
                <label htmlFor="Tarefa" className={styles.label}>
                    Tarefa:
                </label>
                <input 
                    id="Tarefa" 
                    type="text" 
                    value={task} 
                    placeholder="Adicione uma Tarefa" 
                    onChange={(e) => setTask(e.target.value)}
                    className={styles.input}
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="status" className={styles.label}>
                    Status:
                </label>
                <select 
                    id="status" 
                    value={status} 
                    onChange={(e) => setStatus(e.target.value as "concluida" | "não concluida")}
                    className={styles.select}
                >
                    <option value="concluida">Concluído</option>
                    <option value="não concluida">Não Concluído</option>
                </select>
            </div>

            <div>
                <button 
                    type="submit"
                    className={styles.button}
                >
                    Adicionar
                </button>
            </div>
        </form>
    )


}

export default FormTask