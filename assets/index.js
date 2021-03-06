import { html, Component, render } from '/web_modules/htm/preact/standalone.module.js';
import { Task } from './task.js';
import { TaskForm } from './TaskForm.js';
import makeModel from './model.js';

export default class App extends Component {
  componentDidMount() {}

  onSubmit(ev) {
    ev.preventDefault();
    const summaryField = ev.target.elements.summary;
    this.props.emit('addTask', {
      summary: summaryField.value
    });
  }

  onDelete(id) {
    this.props.emit('deleteTask', id);
  }

  onToggleDone(id, done) {
    this.props.emit('updateTask', { id, done });
  }

  render({ tasks }) {
    return html`
      <div class="stack wrapper">
        <h1>Tasks</h1>
        <${TaskForm} className="wrapper__inside" onSubmit=${this.onSubmit.bind(this)}/>
        <ul class="wrapper__inside list list--unstyled stack">
          ${tasks.map(
            ({ summary, done = false, id }) =>
              html`
                <${Task}
                  id=${id}
                  summary=${summary}
                  done=${done}
                  onDelete=${() => {
                    this.onDelete(id);
                  }}
                  onToggleDone=${(done) => {
                    this.onToggleDone(id, done);
                  }}
                />
              `
          )}
        </ul>
      </div>
    `;
  }
}

const model = makeModel('time-tracker');

if (typeof window !== 'undefined') {

  function renderApp(state) {
    render(html`<${App} ...${state} emit=${model.emit}/>`, document.getElementById('root'));
  }
  model.observe(renderApp);
  model.update();
}
