// js/dashboard.js
document.addEventListener("DOMContentLoaded", () => {
    const email = localStorage.getItem("email");
    if (!email) {
      window.location.href = "login.html";
    } else {
      document.getElementById("userEmail").textContent = email;
    }
  });
  
  function logout() {
    localStorage.clear();
    window.location.href = "login.html";
  }
  