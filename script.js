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
