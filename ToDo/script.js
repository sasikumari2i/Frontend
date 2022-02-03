/*
 * Open Left Side Navigation 
 */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("nav-btn").style.display = "none";
    //document.getElementById("menu-btn").style.display = "none";
}

/*
 * Close Left Side Navigation 
 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("nav-btn").style.display = "block";
    //document.getElementById("menu-btn").style.display = "block";
}

/*
 * Close Right Side Navigation 
 */
const closeRight = document.getElementById('right_close')
closeRight.addEventListener('click', () => {
    closeList = document.getElementById('rightnav');
    closeList.style.display = "none";
})


window.addEventListener('load' ,() => {

let count;
const task_count_dom = document.querySelector('#tasks_count');
const myday_count_dom = document.querySelector('#myday_count');
const important_count_dom = document.querySelector('#important_count');
let total_myday_count = 0;
let total_important_count = 0;
const tasks_arr = [];
const completed_tasks_arr = [];
const left_menu_panel = document.querySelector('#left_ul');
const tasklists = document.querySelector('#myday_tasks');
left_menu_panel.addEventListener('click', function(e) {
    if (e.target.classList.contains("clicking-class")) {
        tasklists.innerHTML = "";
    }
    if (e.target.classList.contains("clicking-class")) {
        const title = document.getElementById(e.target.id).innerText;
        document.getElementById('title').innerText = title;
        for(let per of tasks_arr) {
            if(title === per.id) {
                tasklists.appendChild(per.taskname);
            } else if (title == "Tasks") {
                tasklists.appendChild(per.taskname);
            }
        }
    }
});

/*
 * Completed tasks adding strike
 */
const completed_arr = [];
let task_events = document.querySelector('#myday_tasks');
task_events.addEventListener('click', (e) => {
    if (e.target.classList.contains("circle") && !e.target.parentNode.classList.contains("strike")) {
        var completed_task_name = document.getElementById(e.target.parentNode.id);
        completed_task_name.classList.add('strike');
        const completed_title_id = document.getElementById('title').innerText;
        var index = tasks_arr.findIndex(function(o){
            return o.id === completed_task_name;
       })
       if (index === -1) tasks_arr.splice(index, 1);
        const completed_task = {
            id : completed_title_id,
            taskname : completed_task_name
        }
        completed_arr.push(completed_task);
        const display_completed_tasks = document.querySelector('#completed_tasks');
        if(completed_title_id === completed_task.id) {
            display_completed_tasks.appendChild(completed_task_name);
        }
    }
})

/*
 * Reinserting Tasks from Completed Task
 */
let completed_task_events = document.querySelector('#completed_tasks');
completed_task_events.addEventListener('click', (e) => {
    if (e.target.classList.contains("circle") && e.target.parentNode.classList.contains("strike")) {
        var reinsert_task_name = document.getElementById(e.target.parentNode.id);
        reinsert_task_name.classList.remove('strike');
        const reinsert_title_id = document.getElementById('title').innerText;
        var index = completed_arr.findIndex(function(o){
            return o.id === reinsert_task_name;
       })
       if (index === -1) completed_arr.splice(index, 1);
        const reinsert_task = {
            id : reinsert_title_id,
            taskname : reinsert_task_name
        }
        tasks_arr.push(reinsert_task);
        const display_reinserted_tasks = document.querySelector('#completed_tasks');
        if(reinsert_title_id === reinsert_task.id) {
            display_reinserted_tasks.appendChild(reinsert_task_name);
        }
    }
});


const show_submit_btn = document.querySelector('#new-task-input');
document.addEventListener('click' , (e) => {
    if(e.target.id == "new-task-input") {
        document.querySelector('#submit_task_show').classList.add('submit-task-display');
    } else {
        document.querySelector('#submit_task_show').classList.remove('submit-task-display');
    }
})

/*
 * Adding Tasks
 */
const step_map = new Map();
const myday_form = document.querySelector('#new-myday-task');
const input = document.querySelector('#new-task-input');
myday_form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title_id = document.getElementById('title').innerText;  
    const todo_task = input.value;
    const task_elem = document.createElement('div');
    task_elem.innerHTML = "<i class='material-icons-outlined circle'>radio_button_unchecked</i>"
    task_elem.innerHTML += todo_task;
    task_elem.innerHTML += "<i class='material-icons-outlined important-icon'>star_outlined</i>"
    task_elem.innerHTML += "<hr>";
    task_elem.classList.add('tasks');
    task_elem.id = todo_task;
    step_map.set(todo_task, []);
    const task = {
        id : title_id,
        taskname : task_elem
    }
    tasks_arr.push(task);
    for(let total_counts of tasks_arr) {
        if(title == total_counts.id) {
            count++;
        }
    }
    input.value ="";
    let display_tasklists = document.querySelector('#myday_tasks');
    for(let per of tasks_arr) {
        if(document.getElementById('title').innerText == per.id) {
            display_tasklists.appendChild(per.taskname);
        }
    }
})

/*
 * Adding sub tasks to tasks
 */
const right_container = document.querySelector('#right_task_name');
const step_task_input = document.querySelector('#step_task_input');
step_task_input.addEventListener('change', () => {
    const sub_task = step_task_input.value;
    step_map.get(right_container.innerText).push(sub_task);
    step_task_input.value = "";
})

/*
 * Adding Title to Right Side details bar
 */
const task_details = document.querySelector('#rightnav');
let added_step_tasks = document.querySelector('#step_task');
//let right_menu_display = document.getElementsByClassName('tasks');
tasklists.addEventListener('click', (e) => {
    let task_id = e.target.id;
    if (e.target.classList.contains("tasks")) {
        task_details.style.display = "block";
        right_container.innerText = task_id;
        added_step_tasks.innerHTML = "";
        var st = step_map.get(right_container.innerText);
        for (var i = 0; i < st.length; i++) {
            var step_list = document.createElement('li');
            //step_list.classList.add('sub-task');
            step_list.innerText = st[i];
            added_step_tasks.appendChild(step_list);
            step_task_input.value = "";
        }
    }
})



/*
 * Adding new Lists to left side panel
 */
const add_list_input = document.querySelector('#new_list');
add_list_input.addEventListener('change', () => {
    const left_list = add_list_input.value;
    const new_ul = document.querySelector('#left_ul');
    const new_li = document.createElement('li');
    const new_list_class = document.createElement('div');
    const new_mat_icon = document.createElement('span');
    new_mat_icon.classList.add('material-icons-outlined');
    new_list_class.id = add_list_input;
    new_list_class.classList.add('clicking-class');
    new_list_class.innerText = left_list;
    new_li.appendChild(new_list_class);
    new_mat_icon.innerText = "list";
    new_li.appendChild(new_mat_icon);
    new_ul.appendChild(new_li);
    add_list_input.value = "";
})
});