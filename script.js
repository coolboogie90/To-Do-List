let todos = [];
let command;
let todo;
let deletedTodo;
let isDone = false;

while (!isDone) {
    command = prompt('Enter a command: new, list, delete, quit \n --> new: add a todo \n --> list: see all the current todos \n --> delete: remove a specific todo from the list \n --> quit: exit the programm');

    switch (command) {
        case 'new':
            todo = prompt("Add a new task to the list: ");
            todos.push(todo);
            console.log(`Added "${todo}" to the list.`);
            alert(`Successfully added "${todo}".`);
            break;
        case 'list':
            if (todos.length === 0) {
                alert("The list is empty.")
            } else {
                console.log('*****TODO LIST*****');
                for (let i = 0; i < todos.length; i++) {
                    console.log(`${i + 1}. ${todos[i]}`);
                }; 
                alert(todos.join('\n'));
            };
            break;
        case 'delete':
            const index = parseInt(prompt("Enter the number of the todo you want to delete: "));
            if (index >= 1 && index <= todos.length) {
                deletedTodo = todos.splice(index - 1, 1);
                console.log(`Deleted "${deletedTodo}" from the to-do list.`)
                alert(`Successfully removed "${deletedTodo}".`);
            } else {
                alert("Invalid index");
            }
            break;
        case 'quit':
            isDone = true;
            break;
        default:
            alert("Enter a valid command: ");
    }
}
