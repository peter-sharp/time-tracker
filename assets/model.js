import store from './store.js';

import uuid from '/web_modules/uuid/dist/esm-browser/v4.js';

export default function model(key) {
    const state = store(key) || {};
    const observers = [];

    function observe(cb) {
        observers.push(cb);
    }

    function update() {
        store(key, state);
        observers.forEach(function triggerObserver(cb) {
            cb(state);
        })
    }

    function addTask({ summary }) {
        state.tasks = [
          ...state.tasks,
          {
            summary,
            id: uuid()
          }
        ];
        update();
    }

    function deleteTask(id) {
        state.tasks = state.tasks.filter(task => task.id != id);
        update();
    }
    
    const handlers = {
        addTask,
        deleteTask
    }

    function emit(event, data) {
        if(event in handlers) handlers[event](data);
    }
    return {
      observe,
      update,
      emit
    };
}