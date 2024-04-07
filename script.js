window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollTopBtn").style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Add JavaScript to toggle "About Me" section
// document.addEventListener('DOMContentLoaded', function () {
//     const aboutSection = document.querySelector('.aboutInfo');
//     const toggleButton = document.getElementById('toggleInfo');
//     let isOpen = true;

//     toggleButton.addEventListener('click', function () {
//         if (isOpen) {
//             aboutSection.classList.remove('open');
//             aboutSection.classList.add('closed');
//             isOpen = false;
//             toggleButton.innerText = 'Show Info';
//         } else {
//             aboutSection.classList.remove('closed');
//             aboutSection.classList.add('open');
//             isOpen = true;
//             toggleButton.innerText = 'Hide Info';
//         }
//     });
// });

//Add JavaScript to show and hide the "About Me" section
document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector(".aboutInfo");
  const showInfoButton = document.getElementById("showInfo");
  const hideInfoButton = document.getElementById("hideInfo");

  showInfoButton.addEventListener("click", function () {
    aboutSection.style.display = "block";
    showInfoButton.style.display = "none";
    hideInfoButton.style.display = "block";
  });

  hideInfoButton.addEventListener("click", function () {
    aboutSection.style.display = "none";
    showInfoButton.style.display = "block";
    hideInfoButton.style.display = "none";
  });
});

// Add JavaScript to show/hide contact form
// document.addEventListener('DOMContentLoaded', function () {
//     const contactSection = document.querySelector('.contact');
//     const showFormButton = document.getElementById('showForm');
//     const contactForm = document.getElementById('contactForm');

//     showFormButton.addEventListener('click', function () {
//         contactForm.style.display = 'block';
//         contactForm.classList.add('form-visible');
//     });

//     const sendMessageButton = document.getElementById('sendMessage');
//     sendMessageButton.addEventListener('click', function () {

//         alert('Message sent!');
//     });
// });

// Add JavaScript to trigger the portfolio text animation on page load
document.addEventListener("DOMContentLoaded", function () {
  // Select the portfolio section titles
  const portfolioTitles = document.querySelectorAll(
    ".about h2, .projects h2, .contact h2"
  );

  // Trigger the animation by adding a class
  portfolioTitles.forEach((title) => {
    title.classList.add("animate-on-load");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const projectTitle = document.getElementsById("heading");
  const text = "Projects"; // Your desired text here
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      projectTitle.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100); // Typing speed in milliseconds
    }
  }

  typeWriter();
});
