const burger = document.querySelector('.menu-burger');
const menuMobile = document.querySelector('.menu-main');
const scroll = document.querySelector('html,body');
const select = document.querySelector('.menu-login');
if (burger) {
    burger.addEventListener("click", function(e) {
        burger.classList.toggle('_activeBtn');
        menuMobile.classList.toggle('_active');
        scroll.classList.toggle('_lock');
    })
}

function Links() {
    burger.classList.remove('_activeBtn');
    menuMobile.classList.remove('_active');
    scroll.classList.remove('_lock');
}

const link = document.querySelector(".link");
link.addEventListener("click", () => {
    Links()
});

const link1 = document.querySelector(".link1");
link1.addEventListener("click", () => {
    Links()
});

const link2 = document.querySelector(".link2");
link2.addEventListener("click", () => {
    Links()
});

const link3 = document.querySelector(".link3");
link3.addEventListener("click", () => {
    Links()
});

window.onscroll = function() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 100) {
        document.getElementById('upbutton').style.display = 'block';
    } else {
        document.getElementById('upbutton').style.display = 'none';
    }
  }