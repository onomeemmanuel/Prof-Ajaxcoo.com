// Profile image
const profilePic = document.getElementById("profile-pic");
const img = document.createElement("img");
img.src = "images/profile/profi6.jpeg";
img.alt = "Prof Ajaxco Profile Picture";
profilePic.appendChild(img);

// Navigation links
const navItems = [
  { name: "About", link: "#about" },
  { name: "Services", link: "#projects" },
  { name: "Gallery", link: "#gallery" },
  { name: "Connect", link: "#links" },
  { name: "Contact", link: "#contact" }
];
const navLinks = document.getElementById("nav-links");
navItems.forEach(item => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.textContent = item.name;
  a.href = item.link;
  li.appendChild(a);
  navLinks.appendChild(li);
});

// Typing animation for hero title
const heroTitle = document.getElementById("hero-title");
const heroText = "Hello, I'm Prof Ajaxco!";
let index = 0;

function typeWriter() {
  if (index < heroText.length) {
    heroTitle.innerHTML = heroText.substring(0, index + 1) + '<span class="typing"></span>';
    index++;
    setTimeout(typeWriter, 100);
  } else {
    heroTitle.innerHTML = heroText;
  }
}

// Start typing animation after a delay
setTimeout(typeWriter, 1000);

// Hero tagline
document.getElementById("hero-tagline").textContent = "Accountancy Student | A1 Certificate in Graphic Design & Forex";

// Projects (Fee Categories)
const projects = [
  {
    title: "Administrative Fee",
    img: "images/projects/image11.jpeg",
    description: "Processing administrative fees for various school services"
  },
  {
    title: "LAN Fee Payment",
    img: "images/projects/image 12.jpeg",
    description: "Assistance with Local Area Network fee payments"
  },
  {
    title: "Student ID Card Fee",
    img: "images/projects/image10.jpeg",
    description: "Student identification card processing fees"
  },
  {
    title: "Course Registration",
    img: "images/projects/image10.jpeg",
    description: "Help with course registration and fee management"
  }
];
const projectGrid = document.getElementById("project-grid");
projects.forEach(proj => {
  const card = document.createElement("div");
  card.className = "card fade-in";
  card.innerHTML = `
    <img src="${proj.img}" alt="${proj.title}">
    <h3>${proj.title}</h3>
    <p>${proj.description}</p>
  `;
  projectGrid.appendChild(card);
});

// Gallery
const galleryImages = [
  { src: "images/Gallery/profi6.jpeg", alt: "Professional Portrait" },
  { src: "images/Gallery/profi5.jpeg", alt: "Creative Work" },
  { src: "images/Gallery/image20.jpeg", alt: "Campus Life" },
  { src: "images/Gallery/image7.jpeg", alt: "Design Project" },
  { src: "images/Gallery/image21.jpeg", alt: "Event Photography" },
  { src: "images/Gallery/image7.jpeg", alt: "Additional Work" }
];
const galleryGrid = document.getElementById("gallery-grid");
galleryImages.forEach(img => {
  const card = document.createElement("div");
  card.className = "card fade-in";
  card.innerHTML = `
    <img src="${img.src}" alt="${img.alt}">
    <p>${img.alt}</p>
  `;
  galleryGrid.appendChild(card);
});

// Links (Social Media)
const links = [
  {
    title: "WhatsApp",
    img: "https://i.pinimg.com/736x/e6/85/55/e685555d3879dd2407d668086ee7208a.jpg",
    link: "https://wa.me/message/ZTV2WRLL2B7YP1",
    description: "Chat with me on WhatsApp"
  },
  {
    title: "Facebook",
    img: "https://i.pinimg.com/1200x/f2/27/d3/f227d34c79c0a69e6e411ba37f7c8468.jpg",
    link: "https://www.facebook.com/share/17ruUS4tpL/",
    description: "Connect with me on Facebook"
  },
  {
    title: "TikTok",
    img: "https://i.pinimg.com/736x/7a/51/c7/7a51c73a80a48c70d1549745eeb6ff22.jpg",
    link: "https://www.tiktok.com/@profajaxcoo?_r=1&_t=ZS-93icFMizDKa",
    description: "Follow me on TikTok"
  },
  {
    title: "Instagram",
    img: "https://i.pinimg.com/1200x/ed/6c/9d/ed6c9d08f2994693188db9a5cfa6cca0.jpg",
    link: "https://www.instagram.com/profajaxcoo?igsh=OXM4OHB6OTczMWQ3",
    description: "Follow me on Instagram"
  },
  {
    title: "Twitter/X",
    img: "https://i.pinimg.com/736x/97/ca/17/97ca177bc71bb163154b585e8764d092.jpg",
    description: "Follow me on Twitter/X",
    link: "https://x.com/Profajaxcoo?s=09"
  },
  {
    title: "YouTube",
    img: "https://i.pinimg.com/736x/d4/88/a5/d488a592b03e8c836f734998dff4834a.jpg",
    link: "https://youtube.com/@profajaxcoo?si=G67rpPDYnd5ur4E7",
    description: "Subscribe to my YouTube channel"
  },
  {
    title: "WhatsApp Channel",
    img: "https://i.pinimg.com/736x/e6/85/55/e685555d3879dd2407d668086ee7208a.jpg",
    link: "https://whatsapp.com/channel/0029Vb7GjCh1t90jlpKNUq2q",
    description: "Join my WhatsApp Channel"
  },
  {
    title: "Facebook Page",
    img: "https://i.pinimg.com/1200x/f2/27/d3/f227d34c79c0a69e6e411ba37f7c8468.jpg",
    link: "https://www.facebook.com/share/17ruUS4tpL/",
    description: "My Facebook Page"
  }
];
const linksGrid = document.getElementById("links-grid");
links.forEach(item => {
  const card = document.createElement("div");
  card.className = "card fade-in";
  card.innerHTML = `
    <img src="${item.img}" alt="${item.title}">
    <h3>${item.title}</h3>
    <p>${item.description}</p>
    <a href="${item.link}" target="_blank">Visit</a>
  `;
  linksGrid.appendChild(card);
});

// Scroll reveal animation
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simple validation
  if (name && email && message) {
    // Here you would typically send the data to a server
    alert(`Thank you ${name}! Your message has been sent. I'll get back to you soon.`);

    // Clear form
    contactForm.reset();
  } else {
    alert('Please fill in all fields.');
  }
});

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
  // Add parallax effect to header
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('header');
    header.style.transform = `translateY(${scrolled * 0.5}px)`;
  });

  // Add hover effects to cards
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
});

