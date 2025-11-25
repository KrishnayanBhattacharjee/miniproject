const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));


const pets = [
    {
        id: 1,
        name: "Buddy",
        type: "Dog",
        breed: "Golden Retriever",
        age: "2 years",
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 2,
        name: "Luna",
        type: "Cat",
        breed: "Siamese",
        age: "1 year",
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 3,
        name: "Max",
        type: "Dog",
        breed: "Beagle",
        age: "3 years",
        image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 4,
        name: "Bella",
        type: "Cat",
        breed: "Maine Coon",
        age: "4 years",
        image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 5,
        name: "Charlie",
        type: "Dog",
        breed: "Labrador",
        age: "5 months",
        image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 6,
        name: "Milo",
        type: "Cat",
        breed: "Tabby",
        age: "2 years",
        image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
];

function displayPets() {
    const petGrid = document.getElementById('petGrid');
    
    pets.forEach(pet => {
        const petCard = document.createElement('div');
        petCard.className = 'pet-card';
        
        petCard.innerHTML = `
            <div class="pet-image">
                <img src="${pet.image}" alt="${pet.name}">
            </div>
            <div class="pet-info">
                <h3>${pet.name}</h3>
                <p><strong>Type:</strong> ${pet.type}</p>
                <p><strong>Breed:</strong> ${pet.breed}</p>
                <p><strong>Age:</strong> ${pet.age}</p>
                <button class="btn-primary" onclick="adoptPet(${pet.id})">Adopt ${pet.name}</button>
            </div>
        `;
        
        petGrid.appendChild(petCard);
    });
}

function adoptPet(petId) {
    const pet = pets.find(p => p.id === petId);
    alert(`Thank you for your interest in adopting ${pet.name}! We will contact you shortly to discuss the adoption process.`);
}

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    
    alert(`Thank you, ${name}! Your message about "${subject}" has been received. We will respond to ${email} shortly.`);
    
    // Reset form
    this.reset();
});


document.addEventListener('DOMContentLoaded', function() {
    displayPets();
});