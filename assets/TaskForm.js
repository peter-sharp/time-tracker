import { html } from '/web_modules/htm/preact/standalone.module.js';
export const TaskForm = ({ onSubmit }) => {
  return (
    html`<form class="stack stack--s1" onSubmit=${onSubmit}>
      <h2>New Task</h2>
      <p class="input-group">
        <label for="task_summary">Summary</label>
        <input id="task_summary" name="summary" type="text" value="" />
      </p>
      <button class="button" type="submit">Add</button>
    </form>`
  );
};
