// JavaScript for Love Story Project
function revealMainPage() {
  document.getElementById('landing-page').classList.add('hidden');
  document.getElementById('main-page').classList.remove('hidden');
}

function goHome() {
  document.getElementById('main-page').classList.add('hidden');
  document.getElementById('landing-page').classList.remove('hidden');
}

function toggleSection(section) {
  const sections = ['story', 'gallery', 'countdown', 'chat'];
  sections.forEach((sec) => {
      document.getElementById(sec).classList.add('hidden');
  });
  document.getElementById(section).classList.remove('hidden');

  // Start the countdown timer if the countdown section is displayed
  if (section === 'countdown') {
      startCountdown();
  }
}

function startCountdown() {
  const endDate = new Date('2024-10-15T00:00:00'); // Set your date here
  const timerElement = document.getElementById('timer');

  setInterval(() => {
      const now = new Date();
      const timeRemaining = endDate - now;

      if (timeRemaining <= 0) {
          timerElement.textContent = "It's time!";
          return;
      }

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}

function sendMessage() {
  const input = document.getElementById('message-input');
  const message = input.value.trim();
  if (message) {
      const messagesContainer = document.getElementById('messages');
      const newMessage = document.createElement('div');
      newMessage.textContent = message;
      newMessage.classList.add('message');
      messagesContainer.appendChild(newMessage);
      input.value = '';

      // Simulate a real-time response
      setTimeout(() => {
          const responseMessage = `You: ${message}`;
          const botMessage = document.createElement('div');
          botMessage.textContent = responseMessage;
          botMessage.classList.add('bot-message');
          messagesContainer.appendChild(botMessage);

          // Show notification
          const notification = document.getElementById('notification');
          notification.classList.remove('hidden');
          notification.textContent = 'New message received!';
          setTimeout(() => {
              notification.classList.add('hidden');
          }, 3000);
      }, 1000); // Simulate a 1-second delay for the response
  }
}
