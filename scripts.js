// Function to reveal the main page
function revealMainPage() {
  document.getElementById("landing-page").classList.add("hidden");
  document.getElementById("main-page").classList.remove("hidden");
}

// Function to navigate home (to the main page)
function goHome() {
  document.getElementById("main-page").classList.add("hidden");
  document.getElementById("landing-page").classList.remove("hidden");
}

// Function to toggle sections
function toggleSection(sectionId) {
  const sections = document.querySelectorAll("section");
  sections.forEach(section => {
      section.classList.add("hidden");
  });
  document.getElementById(sectionId).classList.remove("hidden");
}

// Countdown timer
const countdownDate = new Date("February 1, 2025").getTime();
const timerElement = document.getElementById("timer");

setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the countdown is over, write some text
  if (distance < 0) {
      clearInterval();
      timerElement.innerHTML = "Time's up!";
  }
}, 1000);

// Chat functionality
function sendMessage() {
  const input = document.getElementById("message-input");
  const message = input.value;

  if (message.trim() !== "") {
      const messagesContainer = document.getElementById("messages");
      const newMessage = document.createElement("div");
      newMessage.textContent = message;
      messagesContainer.appendChild(newMessage);
      input.value = ""; // Clear input field

      // Display notification for new message
      const notification = document.getElementById("notification");
      notification.classList.remove("hidden");
      notification.textContent = "New message received!";
      
      // Hide notification after 2 seconds
      setTimeout(() => {
          notification.classList.add("hidden");
      }, 2000);
  }
}

// Open WhatsApp chat
function openWhatsApp() {
  const phoneNumber = "9531976493"; // Your WhatsApp number
  const message = "Hi there! Let's chat.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
