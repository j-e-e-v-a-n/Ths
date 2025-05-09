// mobile menu

let barsIcn=document.querySelector('.fa-bars')
let Menu = document.querySelector('.nav-items .menu')

barsIcn.addEventListener('click',function(){
    Menu.classList.toggle('show')
})

// achievementts slider



const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
         delay: 3000,
       },
    speed:2000,
  
  });
// upcomming events
document.addEventListener('DOMContentLoaded', function () {
    // Sample data for events
    const eventsData = [
        {
            
            title: 'UPCOMING :  <br> ANNIVERSARY ',
            date: 'February 11, 2025',
            location: 'School auditorium',
            description: 'Visit our school and enjoy the programs.'
        },
       
        // Add more events as needed
    ];

    const eventsContainer = document.getElementById('events-container');

    // Function to create event elements
    function createEventElement(event) {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');

        eventDiv.innerHTML = `
            <h2>${event.title}</h2>
            <p>Date: ${event.date}</p>
            <p>Location: ${event.location}</p>
            <p>${event.description}</p>
        `;

        return eventDiv;
    }

    // Add events to the DOM
    eventsData.forEach(event => {
        const eventElement = createEventElement(event);
        eventsContainer.appendChild(eventElement);
    });
});


 // When the user hovers over div, open the popup
 function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  // Set the date we're counting down ton
  const releaseDate = new Date("May 9, 2025 10:00:00").getTime();
    
  // Elements
  const statusText = document.getElementById("status-text");
  const demoElement = document.getElementById("demo");
  const descriptionElement = document.getElementById("description");
  const primaryButton = document.getElementById("primary-button");
  const secondaryButton = document.getElementById("secondary-button");
  const secondaryLink = document.getElementById("secondary-link");
  
  // Update the countdown every second
  const countdownTimer = setInterval(function() {
    // Get current date and time
    const now = new Date().getTime();
    
    // Find the time remaining
    const timeRemaining = releaseDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    // Display the result - if countdown finished, show results available message
    if (timeRemaining < 0) {
      clearInterval(countdownTimer);
      showResultsAvailable();
    } else {
      showCountdown(days, hours, minutes, seconds);
    }
  }, 1000);
  
  // Function to show countdown
  function showCountdown(days, hours, minutes, seconds) {
    statusText.textContent = "THSLC Results will be available in";
    
    // Format the countdown display
    let countdownText = "";
    if (days > 0) countdownText += `${days}d `;
    countdownText += `${hours}h ${minutes}m ${seconds}s`;
    demoElement.textContent = countdownText;
    
    descriptionElement.textContent = "Results will be published on this site:";
    primaryButton.textContent = "Check Status";
    secondaryButton.textContent = "Reminder Alert";
  }
  
  // Function to show results available
  function showResultsAvailable() {
    statusText.textContent = "THSLC Results Now Available!";
    
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    demoElement.textContent = today.toLocaleDateString('en-US', options);
    
    descriptionElement.textContent = "The Technical High School Leaving Certificate results have been published. You can access them through the link below:";
    primaryButton.textContent = "View Results";
    secondaryButton.textContent = "Download Certificate";
  }
  
  // Check if results should be available on initial load
  if (new Date().getTime() > releaseDate) {
    showResultsAvailable();
  } else {
    // Trigger the countdown immediately
    const now = new Date().getTime();
    const timeRemaining = releaseDate - now;
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    showCountdown(days, hours, minutes, seconds);
  }



document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Stop the form from redirecting

  // Collect form data
  const firstName = document.getElementById('FirstName').value;
  const lastName = document.getElementById('LastName').value;
  const email = document.getElementById('Email').value;
  const phoneNumber = document.getElementById('PhoneNumber').value;
  const message = document.getElementById('Message').value;

  // Set the values of the hidden inputs
  document.querySelector('input[name="entry.566466427"]').value = firstName;
  document.querySelector('input[name="entry.1904256212"]').value = lastName;
  document.querySelector('input[name="entry.360813075"]').value = email;
  document.querySelector('input[name="entry.959535505"]').value = phoneNumber;
  document.querySelector('input[name="entry.1842983877"]').value = message;

  // Change the button text to "Message Sent"
  const submitBtn = document.getElementById('submitBtn');
  submitBtn.textContent = 'Message Sent';
  submitBtn.classList.add('disabled-btn');
  submitBtn.disabled = true;

  // Submit the hidden form (Google Form)
  document.getElementById('google-form').submit();

});


AOS.init();
