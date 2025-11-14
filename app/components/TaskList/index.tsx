import { Tarefa } from "@/app/types/Tarefa"
import TaskItem from "../TaskItem"
import styles from "./TaskList.module.css"

type Props = {
    task: Tarefa[]
    onDelete: (id: number) => void
}

const TaskList = ({ task, onDelete }: Props) => {

    return (
        <div className={styles.list}>
            {task.length === 0 ? (
                <div className={styles.emptyState}>
                    <p className={styles.emptyText}>Nenhuma tarefa cadastrada ainda.</p>
                    <p className={styles.emptySubtext}>Adicione uma nova tarefa acima!</p>
                </div>
            ) : (
                task.map(item => (
                    <TaskItem 
                        key={item._id}
                        task={item}
                        onDelete={onDelete}
                    />
                ))
            )}
        </div>
    )
}

export default TaskList