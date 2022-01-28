window.addEventListener('load', () => {

    const task_div = document.querySelector("#tasks");
    var mydayArr = [];
    for (var i = 1; i <= 10; i++) {
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

    const form = document.querySelector('#new-myday-task');
    const input = document.querySelector('#new-task-input');
    const submit_btn = document.querySelector('#new-task-submit');
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
    })
})

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "270px";
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