import { Tarefa } from "@/app/types/Tarefa";
import styles from "./TaskItem.module.css";

type Props = {
  task: Tarefa;
  onDelete: (_id: number) => void;
};

const TaskItem = ({ task, onDelete }: Props) => {
  const isCompleted = task.status === "concluida";

  return (
    <div className={styles.item}>
      <div className={styles.content}>
        <span
          className={isCompleted ? styles.taskTextCompleted : styles.taskText}
        >
          {task.task}
        </span>
        <span
          className={`${styles.badge} ${isCompleted ? styles.badgeCompleted : styles.badgePending}`}
        >
          {isCompleted ? "Concluído" : "Pendente"}
        </span>
      </div>
      <button
        onClick={() => {
          if (task._id) onDelete(task._id);
        }}
        className={styles.deleteButton}
        aria-label="Excluir tarefa"
      >
        ×
      </button>
    </div>
  );
};

export default TaskItem;
