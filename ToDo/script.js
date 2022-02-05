/*
 * Close Right Side Navigation
 */
const closeRight = document.getElementById("right_close");
closeRight.addEventListener("click", () => {
  closeList = document.querySelector("#rightnav");
  closeList.style.display = "none";
});

/*
 * Selecting the Task menu from Left side menu.
 */
const task_count_dom = document.querySelector("#tasks_count");
const myday_count_dom = document.querySelector("#myday_count");
const important_count_dom = document.querySelector("#important_count");
const tasks_arr = [];
const completed_arr = [];
const left_menu_panel = document.querySelector("#left_ul");
const tasklists = document.querySelector("#myday_tasks");
const show_completed_task = document.querySelector("#completed_tasks");
left_menu_panel.addEventListener("click", function (e) {
  if (e.target.classList.contains("clicking-class")) {
    tasklists.innerHTML = "";
  }
  if (e.target.classList.contains("clicking-class")) {
    const title = document.getElementById(e.target.id).innerText;
    document.getElementById("title").innerText = title;
    let task_count = taskCounts(title);
    for (let add_task of tasks_arr) {
      if (
        title === add_task.id &&
        !add_task.taskname.classList.contains("completed")
      ) {
        let parent = document.getElementById(add_task.taskname.id);
        let children = parent.children[0];
        children.innerHTML = task_count;
        console.log(children);
        tasklists.appendChild(add_task.taskname);
      } else if (
        title == "Tasks" &&
        !add_task.taskname.classList.contains("completed")
      ) {
        tasklists.appendChild(add_task.taskname);
      }
    }
  }
});

/*
 * To count number of tasks
 */
function taskCounts(title_count) {
  let count = 0;
  for (let task_details of tasks_arr) {
    if (task_details.id === title_count) {
      count++;
    }
  }
  return count;
}

/*
 * Completed tasks
 */
let task_events = document.querySelector("#myday_tasks");
task_events.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("circle") &&
    !e.target.parentNode.classList.contains("strike")
  ) {
    let completed_task_name = document.getElementById(e.target.parentNode.id);
    completed_task_name.classList.add("strike");
    completed_task_name.classList.add("completed");
    const completed_title_id = document.getElementById("title").innerText;
    let task_arr_index = tasks_arr.findIndex(function (selected_task) {
      return selected_task.id === completed_task_name;
    });
    if (task_arr_index === -1) {
      tasks_arr.splice(task_arr_index, 1);
    }
    const completed_task = {
      id: completed_title_id,
      taskname: completed_task_name,
    };
    completed_arr.push(completed_task);
    const display_completed_tasks = document.querySelector("#completed_tasks");
    if (completed_title_id === completed_task.id) {
      display_completed_tasks.appendChild(completed_task_name);
    }
  }
  let count = taskCounts(document.getElementById("title").innerText);
  console.log(count);
});

/*
 * Reinserting Tasks from Completed Task
 */
let completed_task_events = document.querySelector("#completed_tasks");
const comp_title = document.querySelector("#title").innerText;
let reinsert_title_id = "";
completed_task_events.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("circle") &&
    e.target.parentNode.classList.contains("strike")
  ) {
    let reinsert_task_name = document.getElementById(e.target.parentNode.id);
    let current_title = document.getElementById("title").innerText;
    for (let comp of completed_arr) {
      if (
        comp.id === current_title &&
        comp.taskname.id === reinsert_task_name.id
      ) {
        reinsert_title_id = current_title;
        break;
      }
    }
    if (reinsert_title_id != "") {
      reinsert_task_name.classList.remove("strike");
      reinsert_task_name.classList.remove("completed");
      var comp_task_arr_index = completed_arr.findIndex(function (
        selected_tasks
      ) {
        return selected_tasks.id === reinsert_task_name;
      });
      if (comp_task_arr_index === -1)
        completed_arr.splice(comp_task_arr_index, 1);
      const reinsert_task = {
        id: reinsert_title_id,
        taskname: reinsert_task_name,
      };
      tasks_arr.push(reinsert_task);
      const display_reinserted_tasks =
        document.querySelector("#completed_tasks");
      if (reinsert_title_id === reinsert_task.id) {
        display_reinserted_tasks.appendChild(reinsert_task_name);
      }
      if (reinsert_title_id === reinsert_task.id) {
        tasklists.appendChild(reinsert_task_name);
      } else if (title == "Tasks") {
        tasklists.appendChild(reinsert_task_name);
      }
    }
    reinsert_title_id = "";
    let count = taskCounts(document.getElementById("title").innerText);
    console.log(count);
  }
});

const show_submit_btn = document.querySelector("#new-task-input");
document.addEventListener("click", (e) => {
  if (e.target.id == "new-task-input") {
    document
      .querySelector("#submit_task_show")
      .classList.add("submit-task-display");
  } else {
    document
      .querySelector("#submit_task_show")
      .classList.remove("submit-task-display");
  }
});

/*
 * Adding Tasks
 */
const step_map = new Map();
const myday_form = document.querySelector("#new-myday-task");
const input = document.querySelector("#new-task-input");
myday_form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title_id = document.getElementById("title").innerText;
  const todo_task = input.value;
  if (input.value) {
    const task_elem = document.createElement("div");
    task_elem.innerHTML =
      "<i class='material-icons-outlined circle'>radio_button_unchecked</i>";
    task_elem.innerHTML += todo_task;
    task_elem.innerHTML +=
      "<i class='material-icons-outlined important-icon'>star_outlined</i>";
    task_elem.innerHTML += "<hr>";
    task_elem.classList.add("tasks");
    task_elem.classList.add("tasks-hover");
    task_elem.id = todo_task;
    step_map.set(todo_task, []);
    const task = {
      id: title_id,
      taskname: task_elem,
    };
    tasks_arr.push(task);
    for (let total_counts of tasks_arr) {
      if (title == total_counts.id) {
        count++;
      }
    }
    input.value = "";
    let display_tasklists = document.querySelector("#myday_tasks");
    for (let per of tasks_arr) {
      if (document.getElementById("title").innerText == per.id) {
        display_tasklists.appendChild(per.taskname);
      }
    }
  }
  let count = taskCounts(document.getElementById("title").innerText);
  console.log(count);
  setTimeout(console.log('Hi'),5000);
  console.log("hello");
  setTimeout(console.log('Hello'),10000);
});

/*
 * Open Left Side Navigation
 */
const openLeft = document.querySelector("#nav-btn");
openLeft.addEventListener("click", () => {
  document.getElementById("mySidenav").style.width = "265px";
  document.getElementById("main").style.marginLeft = "265px";
  document.getElementById("nav-btn").style.display = "none";
});

/*
 * Close Left Side Navigation
 */
const closeLeft = document.querySelector("#close_left");
closeLeft.addEventListener("click", () => {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("nav-btn").style.display = "block";
});

/*
 * Adding Title to Right Side details bar
 */
const task_details = document.querySelector("#rightnav");
let added_step_tasks = document.querySelector("#step_task");
tasklists.addEventListener("click", (e) => {
  let task_id = e.target.id;
  if (e.target.classList.contains("tasks")) {
    task_details.classList.add("submit-task-display");
    right_container.innerText = task_id;
    added_step_tasks.innerHTML = "";
    let st = step_map.get(right_container.innerText);
    for (var i = 0; i < st.length; i++) {
      var step_list = document.createElement("li");
      step_list.innerText = st[i];
      added_step_tasks.appendChild(step_list);
      step_task_input.value = "";
    }
  }
});

/*
 * Adding sub tasks to tasks
 */
const right_container = document.querySelector("#right_task_name");
const step_task_input = document.querySelector("#step_task_input");
step_task_input.addEventListener("keyup", (e) => {
  if (e.keyCode == 13 && step_task_input.value) {
    const sub_task = step_task_input.value;
    step_map.get(right_container.innerText).push(sub_task);
    let display_step_tasks = step_map.get(right_container.innerText);
    step_task_input.value = "";
    var step_list_append = document.createElement("li");
    step_list_append.innerText = sub_task;
    added_step_tasks.appendChild(step_list_append);
    step_task_input.value = "";
  }
});

/*
 * Adding new Lists to left side panel
 */
const add_list_input = document.querySelector("#new_list");
add_list_input.addEventListener("change", () => {
  const left_list = add_list_input.value;
  const new_ul = document.querySelector("#left_ul");
  const new_li = document.createElement("li");
  const new_list_class = document.createElement("div");
  const new_mat_icon = document.createElement("i");
  new_mat_icon.classList.add("material-icons-outlined");
  new_mat_icon.innerHTML = "list";
  new_list_class.id = add_list_input;
  new_list_class.classList.add("clicking-class");
  new_list_class.innerText = left_list;
  span_elem = document.createElement("span");
  span_elem.classList.add("count");
  new_li.appendChild(span_elem);
  new_li.appendChild(new_mat_icon);
  new_li.appendChild(new_list_class);
  new_ul.appendChild(new_li);
  add_list_input.value = "";
});
