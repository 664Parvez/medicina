// Responsive Navbar
let bar = document.querySelector('#hamber_icon');
bar.addEventListener('click', function() {
    let sideBar = document.querySelector('.responsive_menu');
    sideBar.style.marginLeft = '0px';
})
let cross = document.querySelector('.close_icon');
cross.addEventListener('click', function(e) {
    let sideBar = document.querySelector('.responsive_menu');
    sideBar.style.marginLeft = '100%';

    e.preventDefault();
})

const dropdownone = document.querySelector ('.res_drop_menu_one')
const dropdowntwo = document.querySelector ('.res_drop_menu_two')
const dropdownthree = document.querySelector ('.res_drop_menu_three')
const dropdownfour = document.querySelector ('.res_drop_menu_four')

dropdownone.addEventListener ("click", (e) => {
    const subNavOne = document.querySelector('.drop_item_one')
    subNavOne.style.display = "block"
    
    e.preventDefault()
})

dropdowntwo.addEventListener ("click", (e) => {
    const subNavTwo = document.querySelector('.drop_item_two')
    subNavTwo.style.display = "block"
    
    e.preventDefault()
})

dropdownthree.addEventListener ("click", (e) => {
    const subNavThree = document.querySelector('.drop_item_three')
    subNavThree.style.display = "block"
    
    e.preventDefault()
})

dropdownthree.addEventListener ("click", (e) => {
    const subNavThree = document.querySelector('.drop_item_four')
    subNavThree.style.display = "block"
    
    e.preventDefault()
})
