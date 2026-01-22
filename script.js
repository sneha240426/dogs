// ================= PET DATA =================
const pets = [
  {
    name: "Buddy",
    type: "dog",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
  },
  {
    name: "Luna",
    type: "cat",
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131"
  },
  {
    name: "Charlie",
    type: "dog",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d"
  },
  {
    name: "Milo",
    type: "cat",
    image: "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91"
  }
];

const petList = document.getElementById("petList");

// ================= DISPLAY PETS =================
function displayPets(list) {
  petList.innerHTML = "";
  list.forEach(pet => {
    const petCard = document.createElement("div");
    petCard.className = "pet";
    petCard.innerHTML = `
      <img src="${pet.image}" alt="${pet.name}">
      <h3>${pet.name}</h3>
      <p>Type: ${pet.type}</p>
    `;
    petList.appendChild(petCard);
  });
}

// ================= FILTER =================
function filterPets(type) {
  if (type === "all") {
    displayPets(pets);
  } else {
    displayPets(pets.filter(pet => pet.type === type));
  }
}

// ================= SCROLL =================
function scrollToAdopt() {
  document.getElementById("adopt").scrollIntoView({ behavior: "smooth" });
}

// ================= FORM VALIDATION =================
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formStatus").textContent =
    "Thank you! We'll get back to you soon 🐾";
  this.reset();
});

// Initial load
displayPets(pets);
