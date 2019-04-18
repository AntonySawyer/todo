import * as int from '../interfaces';

export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('todoListState');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  };

export const saveState = (state: int.ITask[]) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('todoListState', serializedState);
    } catch {
      // ignore write errors
    }
  };
