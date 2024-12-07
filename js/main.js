var toggleBtn = document.querySelector('.toggle_btn')
var toggleBtnIcon = document.querySelector('.toggle_btn i')
var dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    var isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen?
    'fa-solid fa-xmark'
    :'fa-solid fa-bars'
    
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// var signupBtn = document.getElementById('signup-btn')
// signupBtn.addEventListener('click',()=>{
//     window.open('signup.html','_blank','width=600,height=600')
// });