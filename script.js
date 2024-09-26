document.getElementById("manageButton").addEventListener("click", function () {
  this.classList.toggle("active");
  document.getElementById("featuresButton").classList.remove("active");
});

document
  .getElementById("featuresButton")
  .addEventListener("click", function () {
    this.classList.toggle("active");
    document.getElementById("manageButton").classList.remove("active");
  });

// tab switch section
const tabs = document.querySelectorAll(".tab");
const images = document.querySelectorAll(".tab-image");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs and images
    tabs.forEach((tab) => tab.classList.remove("active"));
    images.forEach((img) => img.classList.remove("active-image"));

    // Add active class to the clicked tab and corresponding image
    tab.classList.add("active");
    const tabId = tab.getAttribute("data-tab");
    document.getElementById(`tab${tabId}`).classList.add("active-image");
  });
});




// owl causorel
$(function () {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 2,
    margin: 10,
    loop: false,
    nav: true,
    dots: false,
    navText: [$('.am-next'), $('.am-prev')],


    responsive: {
           0: {
               items: 1,
               autoHeight: true
           },
           900: {
               items: 2
           }
       }
  });
});












// video player section

document.getElementById('customOverlay').addEventListener('click', function() {
  var video = document.getElementById('myVideo');
  video.play();  // Start the video
  this.style.display = 'none';  // Hide the overlay
});



const hamburger = document.getElementById('hamburger');
const mobile_menu = document.querySelector('.header-left nav');

hamburger.addEventListener('click', function() {
  mobile_menu.classList.toggle('active');
});

