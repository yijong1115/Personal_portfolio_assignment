const sidebar = document.getElementById('sidebar');
    const menuIcon = document.getElementById('menu-icon');
    const closeSidebar = document.getElementById('close-sidebar');

    menuIcon.addEventListener('click', () => {
      sidebar.style.right = '0';
    });

    closeSidebar.addEventListener('click', () => {
      sidebar.style.right = '-100%';
    });

// Close sidebar when clicking outside of it
document.addEventListener('click', (event) => {
  if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
    sidebar.style.right = '-100%';
  }
});

//Projects
let nextDom = document.getElementById('next');
let backDom = document.getElementById('back');
let carouselDon = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function(){
  showSlider('next');

}
backDom.onclick = function(){
  showSlider('back');
}
let timeRunning = 3000;
let runTimeOut
function showSlider(type){
  let itemSlider = document.querySelectorAll('.carousel .list .item');
  let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

  if(type === 'next'){
    listItemDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
    carouselDon.classList.add('next');
  }else{
    let positionLastItem = itemSlider.length - 1;
    listItemDom.prepend(itemSlider[positionLastItem]);
    thumbnailDom.prepend(itemThumbnail[positionLastItem]);
    carouselDon.classList.add('back');
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() =>{
    carouselDon.classList.remove('next');
    carouselDon.classList.remove('back');
  }, timeRunning)

}

