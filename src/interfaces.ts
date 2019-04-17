import { Dispatch } from 'redux';

export interface ITask {
    id: string,
    isDone: boolean,
    task: string,
    dispatch?: Dispatch<any>;
    fillInput?: (str: string) => void;
}

export interface IAction {
    type: string,
    payload: any
}

export interface IAppProps {
    tasks: ITask[];
    dispatch: Dispatch<any>;
  };