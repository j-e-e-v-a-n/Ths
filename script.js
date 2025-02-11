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
var countDownDate = new Date("May 8, 2024 16:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML =   hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "⚠ RESULT HAS BEEN PUBLISHED ⚠";
  }
}, 1000);



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
