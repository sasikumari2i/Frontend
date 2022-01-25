var i = 0;
for (i = 1; i <= 10; i++) {
    document.getElementById('hr-line').innerHTML += "<hr><div></div>";
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "270px";
    document.getElementById("add-main").style.marginLeft = "270px";
    document.getElementById("demo").style.marginLeft = "270px";
    document.getElementById("nav-btn").style.display = "none";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("add-main").style.marginLeft = "8px";
    document.getElementById("demo").style.marginLeft = "8px";
    document.getElementById("nav-btn").style.display = "block";
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
    console.log(closeList);

})
