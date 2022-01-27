var i = 0;
for (i = 1; i <= 10; i++) {
    document.getElementById('hr-myday').innerHTML += "<hr><div></div>";
}

var i = 0;
for (i = 1; i <= 10; i++) {
    document.getElementById('hr-important').innerHTML += "<hr><div></div>";
}

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

const inputAdd = document.getElementById('add-task-text')
inputAdd.addEventListener('focusin', () => {
    document.getElementById('add-myday-btn').style.display = "flex";
})

const inputFocusOut = document.getElementById('add-task-text')
inputAdd.addEventListener('focusout', () => {
    document.getElementById('add-myday-btn').style.display = "none";
})