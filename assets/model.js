import store from './store.js';

import uuid from '/web_modules/uuid/dist/esm-browser/v4.js';

export default function model(key) {
    const state = store(key) || {};
    state.tasks = state.tasks || [];

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

    function addTask({ summary, done = false }) {
        state.tasks = [
          ...state.tasks,
          {
            done,
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
    
    function updateTask(updates) {
        let taskIndex = state.tasks.findIndex(findById(updates.id));
        const tasks = [...state.tasks];
        tasks[taskIndex] = Object.assign({}, tasks[taskIndex], updates);
        state.tasks = tasks;
        update();
    }

    function findById(id) {
        return function hasId(x) {
            return x.id == id;
        }
    }

    const handlers = {
      addTask,
      deleteTask,
      updateTask
    };

    function emit(event, data) {
        if(event in handlers) handlers[event](data);
    }
    return {
      observe,
      update,
      emit
    };
}