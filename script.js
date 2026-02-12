// Profile image
const profilePic = document.getElementById("profile-pic");
const img = document.createElement("img");
img.src = "images/profile/profi6.jpeg"; // replace with your image file
img.alt = "My Profile Picture";
profilePic.appendChild(img);

// Navigation links
const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Gallery", link: "#gallery" },
  { name: "Links", link: "#links" },
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

// Hero section
document.getElementById("hero-title").textContent = "Hello, I'm  Prof-Ajaxcoo,welcome to my web.";
document.getElementById("hero-tagline").textContent = "A1 certificate in graphic-Design and Forex";

// About section
document.getElementById("about-text").textContent =
  "I process Admission,Yellow file, refernce letter,Bussines engagement.";

// Projects
const projects = [
  { title: "Administrative-fee", img: "images/projects/image11.jpeg"},
  { title: "lan-fee payment", img: "images/projects/image 12.jpeg" },
  { title: "student-id card fee", img: "images/projects/image10.jpeg" },
  { title: "student-id card fee", img: "images/projects/image10.jpeg"},
];
const projectGrid = document.getElementById("project-grid");
projects.forEach(proj => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${proj.img}" alt="${proj.title}">
    <h3>${proj.title}</h3>
  `;
  projectGrid.appendChild(card);
});

// Gallery
const galleryImages = [
  { src: "images/Gallery/profi6.jpeg", alt: "Project Screenshot" },
  { src: "images/Gallery/profi5.jpeg", alt: "Design Mockup" },
  { src: "images/Gallery/image20.jpeg", alt: "Photography Shot" },
  { src:"images/Gallery/image7.jpeg", alt: "Artwork Piece" },
  { src:"images/Gallery/image21.jpeg", alt: "Event Photo" },
];
const galleryGrid = document.getElementById("gallery-grid");
galleryImages.forEach(img => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${img.src}" alt="${img.alt}">
    <p>${img.alt}</p>
  `;
  galleryGrid.appendChild(card);
});

// Links (WhatsApp, LinkedIn, GitHub)
const links = [
  {
    title: "WhatsApp",
    img: "https://i.pinimg.com/736x/e6/85/55/e685555d3879dd2407d668086ee7208a.jpg",
    link: "https://wa.me/message/ZTV2WRLL2B7YP1",
    description: "Chat with me on WhatsApp"
  },
  {
    title: "facebook",
    img: "https://i.pinimg.com/1200x/f2/27/d3/f227d34c79c0a69e6e411ba37f7c8468.jpg",
    link: "https://www.facebook.com/share/17ruUS4tpL/",
    description: "Connect with me on Facebook"
  },
  {
    title: "Tiktok",
    img: "https://i.pinimg.com/736x/7a/51/c7/7a51c73a80a48c70d1549745eeb6ff22.jpg",
    link: "https://www.tiktok.com/@profajaxcoo?_r=1&_t=ZS-93icFMizDKa",
    description: "follow me on Tiktok"
  },
  {
	title: "Instagram",
	img: "https://i.pinimg.com/1200x/ed/6c/9d/ed6c9d08f2994693188db9a5cfa6cca0.jpg",
	link: "https://www.instagram.com/profajaxcoo?igsh=OXM4OHB6OTczMWQ3",
	description: "Follow me on Instagram"
  },
  {
	title:"twitter/x",
	img:"https://i.pinimg.com/736x/97/ca/17/97ca177bc71bb163154b585e8764d092.jpg",
	description:"Follow me on Twitter/X",
	link:"https://x.com/Profajaxcoo?s=09"
 },
 {
	title:"Youtube",
	img:"https://i.pinimg.com/736x/d4/88/a5/d488a592b03e8c836f734998dff4834a.jpg",
	link:"https://youtube.com/@profajaxcoo?si=G67rpPDYnd5ur4E7",
	description:"Subscribe to my YouTube channel"
 },
 {
	title:"Whatsapp-Channel",
    img: "https://i.pinimg.com/736x/e6/85/55/e685555d3879dd2407d668086ee7208a.jpg",
	link:"PROF AJAXCOO MEDIA 🌟  https://whatsapp.com/channel/0029Vb7GjCh1t90jlpKNUq2q",
	description:"Join my WhatsApp Channel for updates and exclusive content",
 },
 {
	title:"facebook-page",
    img: "https://i.pinimg.com/1200x/f2/27/d3/f227d34c79c0a69e6e411ba37f7c8468.jpg",
	link:"https://www.facebook.com/share/17ruUS4tpL/",
	description:"My Facebook Page for news and updates"
 }
];
const linksGrid = document.getElementById("links-grid");
links.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${item.img}" alt="${item.title}">
    <h3>${item.title}</h3>
    <p>${item.description}</p>
    <a href="${item.link}" target="_blank">Open</a>
  `;
  linksGrid.appendChild(card);
});
