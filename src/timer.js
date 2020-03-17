const getId = ((i = 1) => () => (i += 1))();
export const Timer = ({ onStop }) => {
  const name = "timer_controls_" + getId();
  const idStart = name + "_start";
  const idEnd = name + "_end";
  return (
    <section class="timer">
      <div class="radio-buttons radio-buttons--timer">
        <input type="radio" id={idStart} name={name} />
        <label for={idStart} class="timer__button">
          Start
        </label>
        <input type="radio" id={idEnd} name={name} />
        <label for={idEnd} class="timer__button">
          Stop
        </label>
      </div>
      <output />
    </section>
  );
};
