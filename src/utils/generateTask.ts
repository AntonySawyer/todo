function getID() {
    return (Math.random()*1000).toFixed(4).toString();
}

export default function(task: string[]) {
    if (task[0] !== '') {
        return {
            creationDate: new Date().toLocaleString('ru', { day: 'numeric', month: 'numeric', year: 'numeric' }),
            id: getID(),
            isDone: false,
            favorite: false,
            color: task[1],
            task: task[0]
        }
    }
}
