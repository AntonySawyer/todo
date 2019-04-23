import * as int from '../interfaces';

export default function reducer(state: int.ITask[] = [], action: int.IAction) {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.payload];
        break;
        case 'DELETE_TASK':
            return [...state.filter(el => el.id !== action.payload)];
        break;
        case 'COMPLETE_TASK':
            const target = [...state].findIndex(el => el.id === action.payload);
            [...state][target].isDone = ![...state][target].isDone;
            return [...state];
        break;
        case 'SORT_COMPLETED':
            return [...state.sort(el => el.isDone === true ? -1 : 1)];
        break;
        case 'SORT_BY_DATE':
            return [...state.sort((a,b) => {
                const firstDateArr:string[] = a.creationDate.toString().split('.');
                const secondDateArr:string[] = b.creationDate.toString().split('.');
                const firstDate = new Date(Number(firstDateArr[1]), Number(firstDateArr[0]), Number(firstDateArr[2]));
                const secondDate = new Date(Number(secondDateArr[1]), Number(secondDateArr[0]), Number(secondDateArr[2]));
                return firstDate.valueOf() >= secondDate.valueOf() ? 1 : -1;
            })];
        break;
        case 'DELETE_MARKED':
            return [...state.filter(el => el.isDone !== true)];
        break;
        default:
            return [...state];
    }
}