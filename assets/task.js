import {
  html
} from '/web_modules/htm/preact/standalone.module.js';
import { Timer } from './timer.js';

export const Task = ({ id, summary, done, onToggleDone, onDelete }) => {
  return html`
    <li class="task" id=${id}>
      <input
        type="checkbox"
        name="done"
        checked=${done}
        onchange=${ev => onToggleDone(ev.target.checked)}
      />
      <p>${summary}</p>
      <${Timer} />
      <button class="button" onclick=${onDelete}>
        ${"×"}
      </button>
    </li>
  `;
};
