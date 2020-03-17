export const TaskForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <h2>New Task</h2>
      <p class="input-group">
        <label for="task_summary">Summary</label>
        <input id="task_summary" name="summary" type="text" value="" />
      </p>
      <button type="submit">Add</button>
    </form>
  );
};
