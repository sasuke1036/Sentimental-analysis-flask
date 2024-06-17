function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active'); // Toggle active class for sidebar slide animation
  
    // Update button color based on sidebar state
    var menuToggle = document.querySelector('.menu-toggle');
    if (sidebar.classList.contains('active')) {
      menuToggle.style.color = 'black'; // Black color when sidebar is active
    } else {
      menuToggle.style.color = 'white'; // White color when sidebar is inactive (default)
    }
  }
  function clearPrediction() {
    var predictionElement = document.getElementById("prediction");
  predictionElement.classList.add("fade-out"); // Add fade-out class

  setTimeout(function() {
    predictionElement.classList.remove("fade-out"); // Remove after animation
    predictionElement.innerHTML = ""; // Clear content after fade-out
  }, 300); 
  }
  function showLoading() {
    var loadingSymbol = document.getElementById("loadingSymbol");
    loadingSymbol.style.display = "inline-block";
    setTimeout(function() {
      loadingSymbol.style.display = "none";
      // Add logic for submitting form and loading prediction here
      alert("Loading prediction...");
    }, 30000); // Simulating 20 seconds of loading time
  }