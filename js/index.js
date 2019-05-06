// Your code goes here

// scroll effect (pop up appears when you scroll to bottom of the page)
window.addEventListener("scroll", ()=> {
  // console.log("Scrolled!");
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;

  // console.log(scrollable);

  if(Math.ceil(scrolled) === scrollable) {
    alert("You've reached the bottom!")
  }
});



const popUp = document.querySelector("adventure");
