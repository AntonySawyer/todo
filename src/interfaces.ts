import { Dispatch } from 'redux';

export interface ITask {
    creationDate: Date,
    id: string,
    isDone: boolean,
    favorite: boolean,
    color: string,
    task: string,
    deleteTask: (id: string) => void;
    editTask: (target: editTask) => void;
    markAsDone: (id: string) => void;
    changeStar: (id: string) => void;
};

export interface editTask {
    id: string,
    task: string,
    color: string
}

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
    favorite: number,
    filter: (toHide: string) => void,
    sortCompleted: () => void,
    deleteCompleted: () => void,
    sortByDate: () => void
};

export interface IHeader {
    inputGroup: () => void
}