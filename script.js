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
            
            title: 'UPCOMMING :  <br> ARTS DAY ',
            date: 'November 22, 2023',
            location: 'School Auditorium',
            description: 'Visit our school and learn about our programs.'
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



AOS.init();