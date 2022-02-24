/*----------- Sec5 Filtering ------------*/
let switchLis = document.querySelectorAll(".FI button"),
    imges = document.querySelectorAll(".secFi .row img");
  switchLis.forEach( (b) => {
    b.addEventListener("click", function() {
      switchLis.forEach( (b) => {
      b.classList.remove("active");
      this.classList.add("active");
    })});
    b.addEventListener("click", function() {
      imges.forEach( (img) => {
      img.classList.add("firstDivOpacity");
    })
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
      el.classList.remove("firstDivOpacity");
    })
  });
  })

/*-------------------------------------- */

/*------------------- LAST EDIT -----------------------*/
// let checkBox = document.querySelector(".toggler"),
//     menue = document.querySelector(".menu"),
//     menuLis = document.querySelectorAll("#d2 ul li a");

// menuLis.forEach( (a) => {
//   a.addEventListener("click", function () {
//       menue.classList.toggle("MenueDisplay");
//     })
// })
/*---------------------------------------------------*/











