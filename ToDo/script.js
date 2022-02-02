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

/*
 * Open Important center content on left Navigation bar click 
 */
/*const openImportant = document.getElementById('important-click')
openImportant.addEventListener('click', () => {
    document.getElementById('myday-content').style.display = "none";
    document.getElementById('important-content').style.display = "block";
})*/

/*
 * Open Myday center content on left Navigation bar click
 */
/*const openMyday = document.getElementById('myday-click')
openMyday.addEventListener('click', () => {
    document.getElementById('myday-content').style.display = "block";
    document.getElementById('important-content').style.display = "none";
})*/


window.addEventListener('load' ,() => {

const task_count_dom = document.querySelector('#tasks_count');
const myday_count_dom = document.querySelector('#myday_count');
const important_count_dom = document.querySelector('#important_count');
let total_myday_count = 0;
let total_important_count = 0;
const tasks_arr = [];



document.addEventListener('click', function(e) {
    const tasklists = document.querySelector('#myday_tasks');
    if (e.target.classList.contains("clicking-class")) {
        tasklists.innerHTML = "";
    }
    
    if(0 != tasks_arr.length) {
        task_count_dom.innerHTML = tasks_arr.length;
        if(0 != total_myday_count) {
            myday_count_dom.innerHTML = total_myday_count; 
        }
        if(0 != total_important_count) {
            important_count_dom.innerHTML = total_important_count; 
        }
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
 * Adding Tasks
 */
//const mydayTaskArray = [];
//const importantTaskArray = [];
const step_map = new Map();
const myday_form = document.querySelector('#new-myday-task');
const input = document.querySelector('#new-task-input');
myday_form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title_id = document.getElementById('title').innerText;  
    const todo_task = input.value;
    const task_elem = document.createElement('div')
    task_elem.innerHTML = "<i class='material-icons-outlined'>circle</i>"
    task_elem.innerHTML += todo_task;
    task_elem.innerHTML += "<i class='material-icons-outlined'>star</i>"
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
    console.log(task);
})


//const step_task_input = document.querySelector('#step_task_input');
//var added_step_tasks = document.querySelector('#step_task');
//const important_form = document.querySelector('#new-important-task');
const right_container = document.querySelector('#right_task_name');
const step_task_input = document.querySelector('#step_task_input');
step_task_input.addEventListener('change', () => {
    const sub_task = step_task_input.value;
    //step_map.get(right_container.innerText).push(sub_task);
    step_map.get(right_container.innerText).push(sub_task);
    //console.log(s);
    //var step_list = document.createElement('li');
    //step_list.innerText = sub_task;
    //added_step_tasks.appendChild(step_list);
    step_task_input.value = "";
})

/*
 * Adding Title to Right Side details bar
 */
const task_details = document.querySelector('#rightnav');
let added_step_tasks = document.querySelector('#step_task');
document.addEventListener('click', function(e) {
    let task_id = e.target.id;
    if (e.target.classList.contains("tasks")) {
        task_details.style.display = "block";
        right_container.innerText = task_id;
        added_step_tasks.innerHTML = "";
        var st = step_map.get(right_container.innerText);
        for (var i = 0; i < st.length; i++) {
            var step_list = document.createElement('li');
            step_list.innerText = st[i];
            added_step_tasks.appendChild(step_list);
            step_task_input.value = "";
        }
    }
})

    
    //const tasklists = document.querySelector('#myday_tasks');
          /*  task_details.style.display = "block";
            right_container.innerText = task_id;
            step_task_input.addEventListener('change', () => {
            const sub_task = step_task_input.value;
            step_map.set(task_id, []);
            step_map.get(task_id).push(sub_task);
            var step_list = document.createElement('li');
            step_list.innerText = sub_task;
            added_step_tasks.appendChild(step_list);
            //step_map.get(task_id).push(sub_task);
            //console.log(step_map.get(task_id));
            //console.log(sub_task);
            step_task_input.value = "";
        });
    }
});*/

/*
 * Adding step tasks to a task
 */
//step_list.innerText = sub_task;
//added_step_tasks.appendChild(step_list);
/*var st = step_map.get(right_container.innerText);
for (var i = 0; i < st.length; i++) {
    var step_list = document.createElement('li');
    step_list.innerText = st[i];
    added_step_tasks.appendChild(step_list);
    step_task_input.value = "";
}*/

/*Myday click function*/
//const myday_head = document.getElementById("myday_click");
//myday_head.addEventListener("click", clickMethod) //=> //{
//const main_heading = document.getElementById('main');
//let myday_title = myday_head.innerText;
//document.getElementById('title').innerText = myday_title;
//})


/*
 * Adding HR tags and Id
 */
/*const task_div = document.querySelector("#tasks");
const task_imp = document.querySelector("#important_tasks");
let mydayArr = [];
for (i = 1; i <= 9; i++) {
    document.getElementById('hr-important').innerHTML += "<hr><div></div>";
    const task_add = document.createElement("div");
    task_add.classList.add("center-add-myday");
    task_add.style.padding = "2px 5px 2px 5px";
    task_add.style.marginLeft = "-2px";
    const myday_id = "myday" + i;
    mydayArr[i - 1] = myday_id;
    task_add.id = myday_id;
    task_add.innerHTML += "<hr>";
    task_div.appendChild(task_add);
}




/*
 * Adding new Lists to left side panel
 */
const add_list_input = document.querySelector('#new_list');
add_list_input.addEventListener('change', () => {
    const left_list = add_list_input.value;
    const new_ul = document.querySelector('#left_ul');
    const new_li = document.createElement('li');
    const new_mat_icon = document.createElement('span');
    new_mat_icon.classList.add('material-icons-outlined');
    const new_list_class = document.createElement('div');
    new_list_class.id = add_list_input;
    new_list_class.classList.add('clicking-class');
    new_list_class.innerText = left_list;
    new_li.appendChild(new_list_class);
    new_mat_icon.innerText = "list";
    new_ul.appendChild(new_li);
    new_li.appendChild(new_mat_icon);
    //const new_task_span = document.createElement('span');
    //new_li.appendChild(new_task_span);
    add_list_input.value = "";
})


/*
 * Adding tasks to Myday
 */
/*const step_map = new Map();
const myday_form = document.querySelector('#new-myday-task');
const right_container = document.querySelector('#right_task_name');
const input = document.querySelector('#new-task-input');
let task_insert;
myday_form.addEventListener('submit', (e) => {
    e.preventDefault();
    const myday_task = input.value;
    step_map.set(myday_task, []);
    for (var i = 0; i < mydayArr.length; i++) {
        task_insert = document.getElementById(mydayArr[i]);
        if (task_insert.innerText == "") {
            task_insert.innerText += myday_task;
            task_insert.innerHTML += "<p>Tasks</p>";
            break;
        }
    }
    input.value = "";
    task_details = document.querySelector('#rightnav');
    task_insert.addEventListener('click', () => {
        task_details.style.display = "block";
        right_container.innerText = myday_task;
        added_step_tasks.innerHTML = "";
        var st = step_map.get(right_container.innerText);
        for (var i = 0; i < st.length; i++) {
            var step_list = document.createElement('li');
            step_list.innerText = st[i];
            added_step_tasks.appendChild(step_list);
            step_task_input.value = "";
        }
    })
})

/*
 * Adding step task to Myday
 */
/*const step_task_input = document.querySelector('#step_task_input');
var added_step_tasks = document.querySelector('#step_task');
const important_form = document.querySelector('#new-important-task');
step_task_input.addEventListener('change', () => {
    const sub_task = step_task_input.value;
    step_map.get(right_container.innerText).push(sub_task);
    var step_list = document.createElement('li');
    step_list.innerText = sub_task;
    added_step_tasks.appendChild(step_list);
    step_task_input.value = "";
})///////////////////////////////////////////
const submit_btn = document.querySelector('#new-task-submit');
submit_btn.disabled = true;
input.addEventListener("change", () => {
    if (document.querySelector("#new-task-input").value === "") {
        submit_btn.disabled = true; //button remains disabled
    } else {
        submit_btn.disabled = false; //button is enabled
    }
})


//right_container = document.querySelector('#right_task_name');
//const step_map = new Map();
//const myday_form = document.querySelector('#new-myday-task');
//const input = document.querySelector('#new-task-input');
//const task_div = document.querySelector("#tasks");
//const task_imp = document.querySelector("#important_tasks");
//let mydayArr = [];
/*for (i = 1; i <= 9; i++) {
    document.getElementById('hr-important').innerHTML += "<hr><div></div>";
    const task_add = document.createElement("div");
    task_add.classList.add("center-add-myday");
    task_add.style.padding = "2px 5px 2px 5px";
    task_add.style.marginLeft = "-2px";
    const myday_id = "myday" + i;
    mydayArr[i - 1] = myday_id;
    task_add.id = myday_id;
    task_add.innerHTML += "<hr>";
    task_div.appendChild(task_add);
}*/


/*let task_insert;
myday_form.addEventListener('submit', (e) => {
    e.preventDefault();
    const myday_task = input.value;
    step_map.set(myday_task, []);
    for (var i = 0; i < mydayArr.length; i++) {
        task_insert = document.getElementById(mydayArr[i]);
        if (task_insert.innerText == "") {
            task_insert.innerText += myday_task;
            task_insert.innerHTML += "<p>Tasks</p>";
            break;
        }
    }
    input.value = "";
    task_details = document.querySelector('#rightnav');
    task_insert.addEventListener('click', () => {
        task_details.style.display = "block";
        right_container.innerText = myday_task;
        added_step_tasks.innerHTML = "";
        var st = step_map.get(right_container.innerText);
        for (var i = 0; i < st.length; i++) {
            var step_list = document.createElement('li');
            step_list.innerText = st[i];
            added_step_tasks.appendChild(step_list);
            step_task_input.value = "";
        }
    })
})

let task_important;
important_form.addEventListener('submit', (e) => {
    e.preventDefault();
    const important_task = input.value;
    step_map.set(important_task, []);
    for (var i = 0; i < mydayArr.length; i++) {
        task_insert = document.getElementById(mydayArr[i]);
        if (task_insert.innerText == "") {
            task_insert.innerText += important_task;
            task_insert.innerHTML += "<p>Tasks</p>";
            break;
        }
    }
    input.value = "";
    task_details = document.querySelector('#rightnav');
    task_insert.addEventListener('click', () => {
        task_details.style.display = "block";
        right_container.innerText = important_task;
        added_step_tasks.innerHTML = "";
        var st = step_map.get(right_container.innerText);
        for (var i = 0; i < st.length; i++) {
            var step_list = document.createElement('li');
            step_list.innerText = st[i];
            added_step_tasks.appendChild(step_list);
            step_task_input.value = "";
        }
    })
})
*/

/*const add_list_input = document.querySelector('#new_list');
add_list_input.addEventListener('change', () => {
    const left_list = add_list_input.value;
    const new_ul = document.querySelector('#left_ul');
    const new_li = document.createElement('li');
    const new_mat_icon = document.createElement('span');
    new_mat_icon.classList.add('material-icons-outlined');
    new_mat_icon.innerText = "list";
    new_ul.appendChild(new_li);
    new_li.appendChild(new_mat_icon);
    const new_task_span = document.createElement('span');
    new_task_span.innerText = left_list;
    new_li.appendChild(new_task_span);
    add_list_input.value = "";
})*/



/*const setBtn = document.getElementById('settings-cta')
setList = document.getElementById('settings-menu')
setBtn.addEventListener('click', () => {
    if (setList.classList.contains('set-btn')) {
                        setList.classList.remove('set-btn');
    } else {
                        setList.classList.add('set-btn');
    }
})*/

/*const inputAdd = document.getElementById('add-task-text')

inputAdd.addEventListener('focusin', () => {
    document.getElementById('add-myday-btn').style.display = "flex";
})
    
const inputFocusOut = document.getElementById('add-task-text')
inputAdd.addEventListener('focusout', () => {
    document.getElementById('add-myday-btn').style.display = "none";
})*/


});