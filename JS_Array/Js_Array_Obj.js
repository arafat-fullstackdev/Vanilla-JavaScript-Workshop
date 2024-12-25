const toDoList = {
    title:'To Do List',
    tasks: [
        {id: 1, description:'Buy a Ticket', completed: true},
        {id: 2, description:'Buy a Bike', completed: false},
        {id: 3, description:'Buy a Car', completed: false},
        {id: 4, description:'Buy a Boat', completed: true},
    ],
};

//Accessing properties
todoTitle = toDoList.title;
//task
const allTask = toDoList.tasks[0];
console.log(toDoList);