import { Dispatch } from 'redux';

export interface ITask {
    creationDate: Date,
    id: string,
    isDone: boolean,
    task: string,
    deleteTask: (id: string) => void;
    editTask: (target: {id: string, task: string}) => void;
    markAsDone: (id: string) => void;
};

export interface IAction {
    type: string,
    payload: any
};

export interface IAppProps {
    tasks: ITask[];
    dispatch: Dispatch<any>;
};

export interface IFooter {
    total: number,
    arhive: number,
    filter: (toHide: string) => void
};

export interface IHeader {
    sortCompleted: () => void,
    deleteCompleted: () => void,
    addTask: () => void,
    inputGroup: () => void
}