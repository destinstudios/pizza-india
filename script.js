

// MOBILE NAVIGATION


const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");


menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");


  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "×" : "☰";
});


document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-expanded", "false");
  });
});




// MENU FILTERS


const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".food-card");
const searchInput = document.getElementById("menuSearch");


let activeCategory = "all";


function filterMenu() {
  const searchValue = searchInput.value.toLowerCase().trim();


  cards.forEach(card => {
    const category = card.dataset.category;
    const name = card.dataset.name;


    const categoryMatch =
      activeCategory === "all" ||
      category === activeCategory;


    const searchMatch =
      name.includes(searchValue);


    card.classList.toggle(
      "hidden",
      !(categoryMatch && searchMatch)
    );
  });
}


filters.forEach(button => {
  button.addEventListener("click", () => {


    filters.forEach(btn => {
      btn.classList.remove("active");
    });


    button.classList.add("active");


    activeCategory = button.dataset.filter;


    filterMenu();
  });
});


searchInput.addEventListener("input", filterMenu);




// WHATSAPP ORDER


const phoneNumber = "919506431067";


document.querySelectorAll(".add-order").forEach(button => {


  button.addEventListener("click", () => {


    const item = button.dataset.item;


    const message =
      `Hello Pizza India! 🍕\n\nI am interested in ordering:\n${item}\n\nPlease confirm availability and ordering details.`;


    const whatsappURL =
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;


    window.open(whatsappURL, "_blank", "noopener");


  });


});




// FOOTER YEAR


document.getElementById("year").textContent =
  new Date().getFullYear();




// SCROLL REVEAL ANIMATION


const observer = new IntersectionObserver(
  (entries) => {


    entries.forEach(entry => {


      if (entry.isIntersecting) {


        entry.target.classList.add("visible");


        observer.unobserve(entry.target);


      }


    });


  },
  {
    threshold: 0.12
  }
);


document.querySelectorAll(".reveal").forEach(element => {
  observer.observe(element);
});




// SMOOTH MENU INTERACTION


document.querySelectorAll(".add-order").forEach(button => {


  button.addEventListener("mouseenter", () => {
    button.style.color = "#11633e";
  });


  button.addEventListener("mouseleave", () => {
    button.style.color = "";
  });


});

