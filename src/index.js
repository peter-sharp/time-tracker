import "./style";
import { Component, render } from "preact";
import { Task } from "./task.js";
import { TaskForm } from "./TaskForm.js";

export default class App extends Component {
  componentDidMount() {}

  onSubmit(ev) {
    ev.preventDefault();
    const summaryField = ev.target.elements.summary;
    this.setState(({ tasks = [] }) => ({
      tasks: [summaryField.value, ...tasks]
    }));
  }

  onDelete(id) {
    this.setState(({ tasks = [] }) => ({
      tasks: tasks.filter((_, i) => i != id)
    }));
  }

  render(props, { tasks = [] }) {
    return (
      <div class="stack">
        <h1>Tasks</h1>
        <TaskForm onSubmit={this.onSubmit.bind(this)} />
        <ul class="list list--unstyled stack">
          {tasks.map((summary, id) => (
            <Task
              id={id}
              summary={summary}
              onDelete={() => {
                this.onDelete(id);
              }}
            />
          ))}
        </ul>
      </div>
    );
  }
}

if (typeof window !== "undefined") {
  render(<App />, document.getElementById("root"));
}
