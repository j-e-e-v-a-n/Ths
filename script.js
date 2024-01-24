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
            date: 'February 2, 2024',
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


AOS.init();
