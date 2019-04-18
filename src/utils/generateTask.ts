function getID() {
    return (Math.random()*1000).toFixed(4).toString();
}

export default function(taskName: string) {
    if (taskName !== '') {
        return {
            creationDate: new Date().toLocaleString('ru', { day: 'numeric', month: 'numeric', year: 'numeric' }),
            id: getID(),
            isDone: false,
            task: taskName
        }
    }
}
