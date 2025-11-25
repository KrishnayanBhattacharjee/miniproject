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
        price: "$250",
        vaccinated: true,
        description: "Buddy is a friendly and energetic Golden Retriever who loves playing fetch and going for long walks.",
        temperament: "Friendly, Energetic, Intelligent",
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        slug: "buddy-golden-retriever"
    },
    {
        id: 2,
        name: "Luna",
        type: "Cat",
        breed: "Siamese",
        age: "1 year",
        price: "$200",
        vaccinated: true,
        description: "Luna is a graceful Siamese cat with beautiful blue eyes. She's affectionate and loves attention.",
        temperament: "Affectionate, Vocal, Intelligent",
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        slug: "luna-siamese"
    },
    {
        id: 3,
        name: "Max",
        type: "Dog",
        breed: "Beagle",
        age: "3 years",
        price: "$180",
        vaccinated: true,
        description: "Max is a curious and friendly Beagle with a great sense of smell. Perfect for an active family.",
        temperament: "Curious, Friendly, Merry",
        image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        slug: "max-beagle"
    },
    {
        id: 4,
        name: "Bella",
        type: "Cat",
        breed: "Maine Coon",
        age: "4 years",
        price: "$300",
        vaccinated: true,
        description: "Bella is a majestic Maine Coon with a gentle personality. She's great with children and other pets.",
        temperament: "Gentle, Friendly, Intelligent",
        image: "https://images.unsplash.com/photo-1743835270077-f0cadfdea2a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhdCUyMGltYWdlfGVufDB8fDB8fHww",
        slug: "bella-maine-coon"
    },
    {
        id: 5,
        name: "Charlie",
        type: "Dog",
        breed: "Labrador",
        age: "5 months",
        price: "$350",
        vaccinated: false,
        description: "Charlie is an adorable Labrador puppy full of energy and love. He's looking for a forever home to grow up in.",
        temperament: "Energetic, Friendly, Playful",
        image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        slug: "charlie-labrador"
    },
    {
        id: 6,
        name: "Milo",
        type: "Cat",
        breed: "Tabby",
        age: "2 years",
        price: "$150",
        vaccinated: true,
        description: "Milo is a handsome tabby cat with a playful spirit. He enjoys chasing toys and lounging in sunny spots.",
        temperament: "Playful, Independent, Affectionate",
        image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        slug: "milo-tabby"
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
                <p><strong>Price:</strong> ${pet.price}</p>
                <p><strong>Vaccinated:</strong> ${pet.vaccinated ? 'Yes' : 'No'}</p>
                <button class="btn-primary" onclick="openAdoptionForm('${pet.name}', '${pet.breed}', ${pet.id})">Adopt ${pet.name}</button>
            </div>
        `;
        
        petGrid.appendChild(petCard);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    displayPets();
    
    const tickerTrack = document.getElementById('ticker-track');
    if (tickerTrack) {
        let tickerContent = '';
        pets.forEach(pet => {
            const messages = [
                `🐾 New Arrival: Meet ${pet.name} the ${pet.breed}!`,
                `❤ ${pet.name} has been waiting for a home!`,
                `🏠 ${pet.name} (${pet.age}) needs a loving family!`
            ];
            const randomMsg = messages[Math.floor(Math.random() * messages.length)];
            tickerContent += `<div class="ticker-item">${randomMsg}</div>`;
        });
        
        tickerTrack.innerHTML = tickerContent + tickerContent;
    }
});

function openAdoptionForm(petName, petBreed, petId) {
    // Create modal backdrop
    const modalBackdrop = document.createElement('div');
    modalBackdrop.className = 'modal-backdrop';
    modalBackdrop.id = 'adoptionModal';
    
    modalBackdrop.innerHTML = `
        <div class="adoption-modal">
            <div class="modal-header">
                <h2>Adopt ${petName}</h2>
                <button class="close-btn" onclick="closeAdoptionForm()">&times;</button>
            </div>
            <div class="modal-body">
                <p class="pet-info-text">You're applying to adopt <strong>${petName}</strong>, a ${petBreed}</p>
                <form id="adoptionForm" class="adoption-form">
                    <div class="form-section">
                        <h3>Personal Information</h3>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="fullName">Full Name *</label>
                                <input type="text" id="fullName" name="fullName" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email Address *</label>
                                <input type="email" id="email" name="email" required>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="phone">Phone Number *</label>
                                <input type="tel" id="phone" name="phone" required>
                            </div>
                            <div class="form-group">
                                <label for="address">Home Address *</label>
                                <input type="text" id="address" name="address" required>
                            </div>
                        </div>
                    </div>

                    <div class="form-section">
                        <h3>Home & Family Information</h3>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="housingType">Housing Type *</label>
                                <select id="housingType" name="housingType" required>
                                    <option value="">Select...</option>
                                    <option value="own">Own Home</option>
                                    <option value="rent">Rent</option>
                                    <option value="apartment">Apartment</option>
                                    <option value="condo">Condo</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="yardSize">Yard Size</label>
                                <select id="yardSize" name="yardSize">
                                    <option value="">Select...</option>
                                    <option value="none">No Yard</option>
                                    <option value="small">Small Yard</option>
                                    <option value="medium">Medium Yard</option>
                                    <option value="large">Large Yard</option>
                                    <option value="fenced">Fenced Yard</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="familyMembers">Number of Family Members *</label>
                                <input type="number" id="familyMembers" name="familyMembers" min="1" required>
                            </div>
                            <div class="form-group">
                                <label for="childrenAges">Children Ages (if any)</label>
                                <input type="text" id="childrenAges" name="childrenAges" placeholder="e.g., 5, 8">
                            </div>
                        </div>
                    </div>

                    <div class="form-section">
                        <h3>Pet Experience</h3>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="previousPets">Have you owned pets before? *</label>
                                <select id="previousPets" name="previousPets" required>
                                    <option value="">Select...</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="currentPets">Current Pets in Home</label>
                                <input type="text" id="currentPets" name="currentPets" placeholder="e.g., 1 dog, 2 cats">
                            </div>
                        </div>
                        <div class="form-group full-width">
                            <label for="petExperience">Tell us about your experience with pets</label>
                            <textarea id="petExperience" name="petExperience" rows="3" placeholder="Describe your experience with pets..."></textarea>
                        </div>
                    </div>

                    <div class="form-section">
                        <h3>Adoption Questions</h3>
                        <div class="form-group full-width">
                            <label for="adoptionReason">Why do you want to adopt ${petName}? *</label>
                            <textarea id="adoptionReason" name="adoptionReason" rows="3" required placeholder="Please explain why you're interested in adopting this pet..."></textarea>
                        </div>
                        <div class="form-group full-width">
                            <label for="dailySchedule">Describe your typical daily schedule *</label>
                            <textarea id="dailySchedule" name="dailySchedule" rows="3" required placeholder="How will the pet fit into your daily routine?"></textarea>
                        </div>
                        <div class="form-group full-width">
                            <label for="vetInfo">Veterinarian Information (if you have one)</label>
                            <input type="text" id="vetInfo" name="vetInfo" placeholder="Vet name and clinic">
                        </div>
                    </div>

                    <div class="form-section">
                        <div class="checkbox-group">
                            <input type="checkbox" id="agreeTerms" name="agreeTerms" required>
                            <label for="agreeTerms">I agree to provide a loving and permanent home for this pet *</label>
                        </div>
                        <div class="checkbox-group">
                            <input type="checkbox" id="agreeHomeCheck" name="agreeHomeCheck" required>
                            <label for="agreeHomeCheck">I agree to a potential home visit if required *</label>
                        </div>
                        <div class="checkbox-group">
                            <input type="checkbox" id="agreeCare" name="agreeCare" required>
                            <label for="agreeCare">I understand and agree to provide proper veterinary care, nutrition, and exercise *</label>
                        </div>
                    </div>

                    <input type="hidden" id="petId" name="petId" value="${petId}">
                    <input type="hidden" id="petName" name="petName" value="${petName}">

                    <div class="form-actions">
                        <button type="button" class="btn-secondary" onclick="closeAdoptionForm()">Cancel</button>
                        <button type="submit" class="btn-primary">Submit Adoption Application</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    document.body.appendChild(modalBackdrop);
    document.body.style.overflow = 'hidden';
    
    // Add form submission handler
    document.getElementById('adoptionForm').addEventListener('submit', handleAdoptionFormSubmit);
}

function closeAdoptionForm() {
    const modal = document.getElementById('adoptionModal');
    if (modal) {
        document.body.removeChild(modal);
        document.body.style.overflow = 'auto';
    }
}

function handleAdoptionFormSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const petName = formData.get('petName');
    
    // Reset the form
    e.target.reset();
    
    // Close the modal
    closeAdoptionForm();
    
    // Show success message
    alert(`Thank you for your adoption application for ${petName}! We will contact you within 24-48 hours to discuss next steps.`);
}

// Contact Form Submission
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
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

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-backdrop')) {
        closeAdoptionForm();
    }
});
