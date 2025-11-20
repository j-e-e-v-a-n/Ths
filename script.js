document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.fa-bars');
  const navMenu = document.querySelector('.nav-items .menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navMenu.classList.remove('show'));
    });
  }

  const swiperHost = document.querySelector('.swiper');
  if (swiperHost && typeof Swiper !== 'undefined') {
    // eslint-disable-next-line no-new
    new Swiper('.swiper', {
      loop: true,
      speed: 1200,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false
      },
      slidesPerView: 1,
      effect: 'slide'
    });
  }

  const eventsData = [
    // {
    //   title: 'School Anniversary',
    //   date: '11 February 2025',
    //   location: 'Auditorium',
    //   description: 'Community gathering, project expo and cultural showcase.'
    // },
    // {
    //   title: 'Admissions Help Desk',
    //   date: 'Weekdays',
    //   location: 'Admin Block',
    //   description: 'Guided assistance for new applicants between 10 AM and 3 PM.'
    // },
    {
      title: 'Robotics Lab Demo',
      date: 'First Saturday Monthly',
      location: 'School Innovation Lab',
      description: 'Hands-on sessions featuring student prototypes and maker builds.'
    }
  ];

  const eventsContainer = document.getElementById('events-container');
  if (eventsContainer) {
    eventsContainer.innerHTML = '';
    eventsData.forEach(event => {
      const wrapper = document.createElement('div');
      wrapper.classList.add('event');
      wrapper.innerHTML = `
        <h2>${event.title}</h2>
        <p>Date: ${event.date}</p>
        <p>Location: ${event.location}</p>
        <p>${event.description}</p>
      `;
      eventsContainer.appendChild(wrapper);
    });
  }

  const releaseDate = new Date('May 9, 2025 10:00:00').getTime();
  const statusText = document.getElementById('status-text');
  const demoElement = document.getElementById('demo');
  const descriptionElement = document.getElementById('description');
  const primaryButton = document.getElementById('primary-button');
  const secondaryButton = document.getElementById('secondary-button');

  const showCountdown = (days, hours, minutes, seconds) => {
    if (!statusText || !demoElement || !descriptionElement || !primaryButton) return;

    statusText.textContent = 'THSLC Results will be available in';
    let countdownText = '';
    if (days > 0) countdownText += `${days}d `;
    countdownText += `${hours}h ${minutes}m ${seconds}s`;
    demoElement.textContent = countdownText;
    descriptionElement.textContent = 'Results will be published on this site:';
    primaryButton.textContent = 'Check Status';
    if (secondaryButton) secondaryButton.textContent = 'Reminder Alert';
  };

  const showResultsAvailable = () => {
    if (!statusText || !demoElement || !descriptionElement || !primaryButton) return;

    statusText.textContent = 'THSLC Results Now Available!';
    demoElement.textContent = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    descriptionElement.textContent = 'The THSLC results have been published. Access them using the links below:';
    primaryButton.textContent = 'View Results';
    if (secondaryButton) secondaryButton.textContent = 'Download Certificate';
  };

  const updateCountdown = () => {
    const now = Date.now();
    const timeRemaining = releaseDate - now;

    if (timeRemaining <= 0) {
      showResultsAvailable();
      return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    showCountdown(days, hours, minutes, seconds);
  };

  if (statusText && demoElement && descriptionElement && primaryButton) {
    updateCountdown();
    const countdownTimer = setInterval(updateCountdown, 1000);
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        updateCountdown();
      }
    });
    window.addEventListener('beforeunload', () => clearInterval(countdownTimer));
  }

  if (secondaryButton) {
    secondaryButton.addEventListener('click', () => {
      secondaryButton.classList.add('pulse');
      setTimeout(() => secondaryButton.classList.remove('pulse'), 800);
      alert('Got it! We will remind you as soon as the results go live.');
    });
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', event => {
      event.preventDefault();
      const firstName = document.getElementById('FirstName').value;
      const lastName = document.getElementById('LastName').value;
      const email = document.getElementById('Email').value;
      const phoneNumber = document.getElementById('PhoneNumber').value;
      const message = document.getElementById('Message').value;

      const fieldMap = {
        'entry.566466427': firstName,
        'entry.1904256212': lastName,
        'entry.360813075': email,
        'entry.959535505': phoneNumber,
        'entry.1842983877': message
      };

      Object.entries(fieldMap).forEach(([name, value]) => {
        const input = document.querySelector(`input[name=\"${name}\"]`);
        if (input) input.value = value;
      });

      const submitBtn = document.getElementById('submitBtn');
      submitBtn.textContent = 'Message Sent';
      submitBtn.classList.add('disabled-btn');
      submitBtn.disabled = true;

      document.getElementById('google-form').submit();
    });
  }
});

function myFunction() {
  const popup = document.getElementById('myPopup');
  if (popup) {
    popup.classList.toggle('show');
  }
}

window.addEventListener('load', () => {
  if (window.AOS) {
    AOS.init({
      once: true,
      duration: 800,
      easing: 'ease-out-quad'
    });
  }
});

