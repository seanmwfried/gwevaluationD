//Navbar opaque on scroll on xs and sm devices
//Back to top button visible on md and lg devices
(() => {
  //Check for scroll
  document.addEventListener('scroll', CheckScroll);
  document.addEventListener('load', CheckScroll);
  
  function CheckScroll(event) {
    //Check small window
    if(window.innerWidth <= 992){
      const scrollTop = event.target.scrollingElement.scrollTop;
      const header = document.getElementsByTagName("header")[0];

      //Add and removed 'scrolled' class when scrolling for effect
      if ( scrollTop >= 50 && !header.classList.contains("scrolled")) {
        header.classList.add("scrolled");
      } else if ( scrollTop < 50 && header.classList.contains("scrolled")) {
        header.classList.remove("scrolled");
      }
    } else {
      const scrollTop = event.target.scrollingElement.scrollTop;
      const backToTopButton = document.getElementsByClassName("btn-back-to-top")[0];
      //Else use back to top button
      //Add and removed 'scrolled' class when scrolling for effect
      if ( scrollTop >= 50 && !backToTopButton.classList.contains("scrolled")) {
        backToTopButton.classList.add("scrolled");
      } else if ( scrollTop < 50 && backToTopButton.classList.contains("scrolled")) {
        backToTopButton.classList.remove("scrolled");
      }
    }
  }

  
})();
//Mobile menu animations
(() => {
  const openMenuButton = document.getElementsByClassName("nav__mobile-menu-button")[0];
  const closeMenuButton = document.getElementsByClassName("mobile-menu__close-button")[0];

  openMenuButton.addEventListener('click', (event) => {
    const menu = document.getElementsByClassName("mobile-menu")[0];
    menu.classList.add("opened");
  })

  closeMenuButton.addEventListener('click', (event) => {
    const menu = document.getElementsByClassName("mobile-menu")[0];
    menu.classList.remove("opened");
  })
})();