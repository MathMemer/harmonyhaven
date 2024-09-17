// JavaScript to handle loading screen
document.addEventListener("DOMContentLoaded", function() {
  // Select all the links on the page
  const links = document.querySelectorAll("a");
  const loadingScreen = document.getElementById("loading-screen");

  // Add a click event listener to each link
  links.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault(); // Stop the default link behavior
      const href = this.href; // Get the link destination

      // Show the loading screen
      loadingScreen.classList.add("active");

      // Delay navigation to simulate loading effect
      setTimeout(() => {
        window.location.href = href; // Navigate to the new page
      }, 1000); // You can adjust this delay as needed
    });
  });

  // Hide the loading screen when the page finishes loading
  window.addEventListener("load", () => {
    loadingScreen.classList.remove("active");
  });
});