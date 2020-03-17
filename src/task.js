import { Timer } from "./timer.js";

export const Task = ({ id, summary, onDelete }) => {
  return (
    <li class="task" id={id}>
      <p>{summary}</p>
      <Timer />
      <button class="task__close-button" onClick={onDelete}>
        &times;
      </button>
    </li>
  );
};
