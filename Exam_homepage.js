//Hamburger menü és overlay kezelése
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.getElementById('overlay')
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('show');
        overlay.classList.toggle('show');
    });
    // Ha rájuk kattintanak, zárja be a menüt is!
    overlay.addEventListener('click', function() {
        navLinks.classList.remove('show');
        overlay.classList.remove('show');
    });
});            

//RÓLUNK TARTALMI RÉSZ - DIAVETÍTÉS
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (slides.length === 0) return; // <---Mert a videoSlyde csak egy oldalon létezik, a többin nem!
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//RAGADÓS STICKY-->
//Első sticky
window.onscroll = function() {myFunction()};
const oldalfej = document.getElementById("page-header");
let sticky1 = oldalfej.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky1) {
    oldalfej.classList.add("sticky");
  } else {
    oldalfej.classList.remove("sticky");
  }
}
//második sticky
window.onscroll = function() {myFunction2()};
const oldalfej2 = document.getElementById("page-header2");
let sticky2 = oldalfej2.offsetTop;
function myFunction2() {
  if (window.pageYOffset > sticky2) {
    oldalfej2.classList.add("sticky");
  } else {
    oldalfej2.classList.remove("sticky");
  }
}

//KÍNÁLAT OLDAL Tartalmi rész:
function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Klikk az id="defaultOpen" elemre - nem minden oldalon létezik!
const defaultOpen = document.getElementById("defaultOpen");
if (defaultOpen) {
  defaultOpen.click();
}


//STAR-RATING -->
let ratings = [];
const stars = document.querySelectorAll('#star-rating .star');
const avgRating = document.getElementById('avg-rating');
const ratingCount = document.getElementById('rating-count');

stars.forEach(star => {
  star.addEventListener('mouseover', function() {
    highlightStars(this.dataset.value);
  });
  star.addEventListener('mouseout', function() {
    highlightStars(0);
  });
  star.addEventListener('click', function() {
    const value = parseInt(this.dataset.value);
    ratings.push(value);
    updateAverage();
    highlightStars(0);
    markSelected(value);
  });
});

function highlightStars(count) {
  stars.forEach(star => {
    if (star.dataset.value <= count) {
      star.classList.add('hovered');
    } else {
      star.classList.remove('hovered');
    }
  });
}

function markSelected(count) {
  stars.forEach(star => {
    if (star.dataset.value <= count) {
      star.classList.add('selected');
    } else {
      star.classList.remove('selected');
    }
  });
}

function updateAverage() {
  if (ratings.length === 0) {
    avgRating.textContent = "0";
    ratingCount.textContent = "0";
    return;
  }
  const sum = ratings.reduce((a, b) => a + b, 0);
  const avg = (sum / ratings.length).toFixed(1);
  avgRating.textContent = avg;
  ratingCount.textContent = ratings.length;
}
