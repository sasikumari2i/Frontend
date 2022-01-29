window.addEventListener('load', () => {

    const form = document.querySelector('#new-myday-task');
    const input = document.querySelector('#new-task-input');
    const submit_btn = document.querySelector('#new-task-submit');
    submit_btn.disabled = true;
    input.addEventListener("change", () => {
        if (document.querySelector("#new-task-input").value === "") {
            submit_btn.disabled = true; //button remains disabled
        } else {
            submit_btn.disabled = false; //button is enabled
        }
    })

    const task_div = document.querySelector("#tasks");
    var mydayArr = [];
    for (var i = 1; i <= 8; i++) {
        const task_add = document.createElement("div");
        task_add.classList.add("center-add-myday");
        task_add.style.padding = "2px 5px 2px 5px";
        task_add.style.marginLeft = "-2px";
        const myday_id = "myday" + i;
        mydayArr[i - 1] = myday_id;
        task_add.id = myday_id;
        task_div.appendChild(task_add);
        task_div.innerHTML += "<hr>";
    }

    let task_insert;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = input.value;
        for (var i = 0; i < mydayArr.length; i++) {
            task_insert = document.getElementById(mydayArr[i]);
            if (task_insert.innerText == "") {
                task_insert.innerText = task;
                task_insert.innerHTML += "<p>Tasks</p>";
                break;
            }
        }
        task_details = document.getElementById('settings-menu')
        task_insert.addEventListener('click', () => {
            setList.classList.add('set-btn');
        })
        input.value = "";
        submit_btn.disabled = true;
    })


    const add_list_input = document.querySelector('#new_list');
    add_list_input.addEventListener('change', () => {
        const left_list = add_list_input.value;
        const new_ul = document.querySelector('#left_ul');
        const new_li = document.createElement('li');
        const new_mat_icon = document.createElement('span');
        new_mat_icon.classList.add('material-icons');
        new_mat_icon.innerText = "list";
        new_ul.appendChild(new_li);
        new_li.appendChild(new_mat_icon);
        const new_task_span = document.createElement('span');
        new_task_span.innerText = left_list;
        new_li.appendChild(new_task_span);
        //console.log(new_ul);
    })

})

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    /* document.getElementById("add-main").style.marginLeft = "270px";*/
    /*document.getElementById("hr-line").style.marginLeft = "270px";*/
    document.getElementById("nav-btn").style.display = "none";
    document.getElementById("menu-btn").style.display = "none";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    /*document.getElementById("add-main").style.marginLeft = "8px";
    document.getElementById("hr-line").style.marginLeft = "8px";*/
    document.getElementById("nav-btn").style.display = "block";
    document.getElementById("menu-btn").style.display = "block";
}

const setBtn = document.getElementById('settings-cta')
setList = document.getElementById('settings-menu')
setBtn.addEventListener('click', () => {
    if (setList.classList.contains('set-btn')) {
        setList.classList.remove('set-btn');
    } else {
        setList.classList.add('set-btn');
    }
})

const closeRight = document.getElementById('settings-cta-closer')
closeList = document.getElementById('settings-menu')
closeRight.addEventListener('click', () => {
    closeList.classList.remove('set-btn');
})

const openImportant = document.getElementById('important-click')
openImportant.addEventListener('click', () => {
    document.getElementById('myday-content').style.display = "none";
    document.getElementById('important-content').style.display = "block";
})

const openMyday = document.getElementById('myday-click')
openMyday.addEventListener('click', () => {
    document.getElementById('myday-content').style.display = "block";
    document.getElementById('important-content').style.display = "none";
})

/*const inputAdd = document.getElementById('add-task-text')
inputAdd.addEventListener('focusin', () => {
    document.getElementById('add-myday-btn').style.display = "flex";
})

const inputFocusOut = document.getElementById('add-task-text')
inputAdd.addEventListener('focusout', () => {
    document.getElementById('add-myday-btn').style.display = "none";
})*/