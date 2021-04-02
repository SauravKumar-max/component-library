const sideBar = document.querySelector('.sidebar');
const hamburger = document.querySelector('.hamburger');
const crossBtn = document.querySelector('.cross-btn');
const allItems = document.querySelectorAll('.item');
const modalContainer = document.querySelector('.modal-container');
const modalCrossBtn = document.querySelector('.close-cross-btn');
const closeBtn = document.querySelector('.close-btn');
const openModal = document.querySelector('.show-modal');

const activateSidebar = () => {
    sideBar.style.transform = "translateX(0px)";
}

const deactivateSidebar = () => {
    sideBar.style.transform = "translateX(-1800px)";
}

const sidebarTransform = () => {
    let deviceWidth = window.innerWidth;

    if(deviceWidth > 770){
        sideBar.style.transform = "translateX(0px)";
    } else{
        sideBar.style.transform = "translateX(-1800px)";
    }

}


const closeModal = () => {
         modalContainer.classList.remove('modal-container-show');
         modalContainer.classList.add('modal-container');
    
}

const openModalBox = () => {
        modalContainer.classList.remove('modal-container');
        modalContainer.classList.add('modal-container-show');   
}


allItems.forEach(item => item.addEventListener('click', sidebarTransform));
window.addEventListener('resize', sidebarTransform);
crossBtn.addEventListener('click', deactivateSidebar);
hamburger.addEventListener('click', activateSidebar);
closeBtn.addEventListener('click', closeModal);
openModal.addEventListener('click', openModalBox);
modalCrossBtn.addEventListener('click', closeModal)
