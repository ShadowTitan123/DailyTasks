//Welcome 
console.log("Welcome to Daily Tasks");

// Task Class 

class Task {
    constructor(tname,tinfo){
        this.name = tname;  // this keyword assigns the property of obj 
        this.info = tinfo;
    }
}


// UI Class 

class UI {
    static DisplayTask(){
        const Storedtasks = [ {  // Get Data from Localstorage
            name : "Test 1",
            info : "Test info"
        },
        {
            name : "Test 2",
            info : "Test info 2"
        }];

        const tasks = Storedtasks;

        tasks.forEach((task) =>{
            UI.addTask(task);
        })
    }


    static addTask(task){
        const list = document.querySelector('#tasks-list');
        const row = document.createElement('tr');

        row.innerHTML = `<td>${task.name}</td>
        <td>${task.info}</td>
        <td><i class="fas fa-trash text-danger Delete"></i></td>`;

        list.appendChild(row);
    }

    static clearFeilds(){
        const GetForm = document.querySelector('#taskform');
        GetForm.reset();
    }

    static deleteTask(el){
        if(el.classList.contains('delete')){ // checking if the clickec ele has delete class
            el.parentNode.parentNode.remove(); // targetting from <i> to <td> to <tr> ( event propagation )
        }
    }
}



// Store Class 



// Event : Display Task 

document.addEventListener('DOMContentLoaded',  UI.DisplayTask());

//Event : Add a Task 

document.querySelector('#taskform').addEventListener('submit',(e)=>{
    e.preventDefault();
    const taskname = document.querySelector('#title').value;
    let taskinfo = document.querySelector('#info').value; // not using constant here because its optional

    if(taskname != ''){
        if(taskinfo === ''){
            taskinfo = '-';
        }
    //Instantiate Task 
    const task = new Task(taskname,taskinfo);
    console.log(task);

    UI.addTask(task); // Using the same method from UI class to add task
    UI.clearFeilds(); // Method To Clear Feilds
    }
})

// Event : Remove a Task 

document.querySelector('#tasks-list').addEventListener('click', (e)=>{
    console.log(e.target);
    UI.deleteTask(e.target);
})