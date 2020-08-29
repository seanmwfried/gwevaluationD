//Rolodex animations
(() => {
  const rolodexItems = document.getElementsByClassName("rolodex__item");

  const intervalTime       = 3000; //Interval timer milliseconds
  const transitionDuration = "1s"; //Transition css property
  let   rolodexIncrementor = 0; //Incrementor is the index of the element moving OUT of view

  setInterval(() => {

    const previousElement = rolodexItems[getPreviousRolodexIndex(rolodexIncrementor)];
    const currentElement = rolodexItems[rolodexIncrementor];
    const nextElement = rolodexItems[getNextRolodexIndex(rolodexIncrementor)];

    //Set previous item back underneath
    //Turn off transitions so it doesn't pass into view and snap back below        
    previousElement.style.transitionDuration = "0s";
    previousElement.style.top = "100%";

    //Move current element up and out of view
    currentElement.style.top = "-100%";

    //Turn on transitions and move next element into view
    nextElement.style.transitionDuration = transitionDuration;
    nextElement.style.top = "0";

    rolodexIncrementor = getNextRolodexIndex(rolodexIncrementor);
  }, intervalTime)

  function getPreviousRolodexIndex (currentIndex) {
    if (currentIndex - 1 < 0) {
      return rolodexItems.length - 1;
    } else {
      return currentIndex - 1;
    }
  }

  function getNextRolodexIndex (currentIndex) {
    if (currentIndex + 1 >= rolodexItems.length) {
      return 0;
    } else {
      return currentIndex + 1;
    }
  }

})();