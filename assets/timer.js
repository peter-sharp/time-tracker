import { html } from '/web_modules/htm/preact/standalone.module.js';
const getId = ((i = 1) => () => (i += 1))();
export const Timer = ({ onStop, onStart }) => {
  const name = 'timer_controls_' + getId();
  const idStart = name + '_start';
  const idEnd = name + '_end';
  return (
    html`<section class="timer">
      <div class="radio-buttons radio-buttons--timer">
        <input type="radio" id=${idStart} name=${name} onclick=${onStart}/>
        <label for=${idStart} class="timer__button">
          Start
        </label>
        <input type="radio" id=${idEnd} name=${name} onclick=${onStop}/>
        <label for=${idEnd} class="timer__button">
          Stop
        </label>
      </div>
      <output />
    </section>`
  );
};
