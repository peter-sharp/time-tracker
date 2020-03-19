import {
  html
} from '/web_modules/htm/preact/standalone.module.js';
import { Timer } from './timer.js';

export const Task = ({ id, summary, onDelete }) => {
  return html`
    <li class="task" id=${id}>
      <p>${summary}</p>
      <${Timer} />
      <button class="button" onclick=${onDelete}>
        ${'×'}
      </button>
    </li>
  `;
};
