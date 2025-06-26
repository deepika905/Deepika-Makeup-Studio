// Updated services data with Indian women images and new pricing
const servicesData = [
    {
        name: "Royal Bridal Package",
        description: "Complete bridal makeup with traditional jewelry styling, mehndi application, and 2 trial sessions. Includes hair styling and saree draping.",
        price: "₹35,000 - ₹50,000",
        imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Engagement Glam",
        description: "Soft romantic makeup with contemporary hairstyling. Includes false lashes and HD makeup for photography.",
        price: "₹12,000 - ₹18,000",
        imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Party Makeover",
        description: "Glamorous makeup for parties and special occasions with bold eyes or lips and perfect contouring. Includes hair styling.",
        price: "₹7,000 - ₹12,000",
        imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Professional Photoshoot",
        description: "Makeup designed specifically for photography with HD finish and long-lasting products. Includes hair styling.",
        price: "₹15,000 - ₹25,000",
        imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Traditional Hairstyling",
        description: "Traditional Indian hairstyles including braids, buns, and gajra decoration. Includes hair accessories.",
        price: "₹5,000 - ₹12,000",
        imageUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Saree Draping Masterclass",
        description: "Professional saree draping in various styles including Bengali, Gujarati, and modern fusion drapes.",
        price: "₹3,000 - ₹8,000",
        imageUrl: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
];

// Sample data for gallery
const galleryData = [
    {
        imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        title: "Bridal Makeup"
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        title: "Engagement Look"
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        title: "Party Makeup"
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        title: "Photoshoot Look"
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        title: "Traditional Hairstyle"
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        title: "Saree Draping"
    }
];

// Sample data for testimonials
const testimonialsData = [
    {
        name: "Priya Sharma",
        role: "Bride",
        text: "Deepika did an amazing job on my wedding makeup! She understood exactly what I wanted and made me look stunning without making me feel like I was wearing too much makeup. All my guests complimented my look!",
        imageUrl: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        name: "Anjali Patel",
        role: "Engagement Client",
        text: "I was so nervous about my engagement makeup, but Deepika made me feel so comfortable. The makeup lasted all night and looked perfect in all the photos. Highly recommend!",
        imageUrl: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
        name: "Neha Gupta",
        role: "Party Client",
        text: "I've been going to Deepika for all my special events for the past 3 years. She always knows how to enhance my features and create a look that's perfect for the occasion.",
        imageUrl: "https://randomuser.me/api/portraits/women/33.jpg"
    }
];

// Current hero data
let heroData = {
    imageUrl: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Enhance Your Natural Beauty",
    text: "Professional makeup services for weddings, parties, and special occasions. Let us make you look and feel your best!"
};

// DOM Elements
const mobileMenuBtn = document.getElementById('mobile-menu');
const nav = document.getElementById('nav');
const servicesContainer = document.getElementById('services-container');
const galleryContainer = document.getElementById('gallery-container');
const testimonialsContainer = document.getElementById('testimonials-container');
const adminAccessBtn = document.getElementById('admin-access');
const adminPanel = document.getElementById('admin-panel');
const closeAdminBtn = document.getElementById('close-admin');
const adminLogin = document.getElementById('admin-login');
const loginForm = document.getElementById('login-form');
const adminTabs = document.querySelectorAll('.admin-btn');
const adminTabContents = document.querySelectorAll('.admin-tab-content');
const addServiceForm = document.getElementById('add-service-form');
const currentServicesContainer = document.getElementById('current-services');
const addGalleryForm = document.getElementById('add-gallery-form');
const currentGalleryContainer = document.getElementById('current-gallery-items');
const addTestimonialForm = document.getElementById('add-testimonial-form');
const currentTestimonialsContainer = document.getElementById('current-testimonials');
const changeHeroForm = document.getElementById('change-hero-form');
const heroPreview = document.getElementById('hero-preview');
const heroSection = document.querySelector('.hero');
const heroTitle = document.querySelector('.hero h1');
const heroText = document.querySelector('.hero p');

// Image upload elements
const galleryImageUpload = document.getElementById('gallery-image-upload');
const galleryImagePreview = document.getElementById('gallery-image-preview');
const serviceImageUpload = document.getElementById('service-image-upload');
const serviceImagePreview = document.getElementById('service-image-preview');
const testimonialImageUpload = document.getElementById('testimonial-image-upload');
const testimonialImagePreview = document.getElementById('testimonial-image-preview');
const heroImageUpload = document.getElementById('hero-image-upload');
const heroImagePreview = document.getElementById('hero-image-preview');

// Admin credentials (in a real app, this would be server-side)
const adminCredentials = {
    username: "admin",
    password: "deepika123"
};

// Check if admin is logged in
let isAdminLoggedIn = false;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Load services
    renderServices();
    
    // Load gallery
    renderGallery();
    
    // Load testimonials
    renderTestimonials();
    
    // Load hero preview
    renderHeroPreview();
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        mobileMenuBtn.innerHTML = nav.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Admin access button
    adminAccessBtn.addEventListener('click', function() {
        if (isAdminLoggedIn) {
            adminPanel.classList.add('active');
        } else {
            adminLogin.style.display = 'block';
        }
    });
    
    // Close admin panel
    closeAdminBtn.addEventListener('click', function() {
        adminPanel.classList.remove('active');
    });
    
    // Admin login form
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === adminCredentials.username && password === adminCredentials.password) {
            isAdminLoggedIn = true;
            adminLogin.style.display = 'none';
            adminAccessBtn.style.display = 'flex';
            alert('Login successful! Click the admin button to access the panel.');
        } else {
            alert('Invalid credentials. Please try again.');
        }
    });
    
    // Admin tab switching
    adminTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            adminTabs.forEach(t => t.classList.remove('active'));
            adminTabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to current tab and content
            this.classList.add('active');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
    
    // Image upload handlers
    galleryImageUpload.addEventListener('change', function(e) {
        handleImageUpload(e, galleryImagePreview);
    });
    
    serviceImageUpload.addEventListener('change', function(e) {
        handleImageUpload(e, serviceImagePreview);
    });
    
    testimonialImageUpload.addEventListener('change', function(e) {
        handleImageUpload(e, testimonialImagePreview);
    });
    
    heroImageUpload.addEventListener('change', function(e) {
        handleImageUpload(e, heroImagePreview);
    });
    
    // Add new service
    addServiceForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const serviceImage = serviceImagePreview.querySelector('img')?.src;
        if (!serviceImage) {
            alert('Please upload a service image');
            return;
        }
        
        const newService = {
            name: document.getElementById('service-name').value,
            description: document.getElementById('service-description').value,
            price: document.getElementById('service-price').value,
            imageUrl: serviceImage
        };
        
        servicesData.push(newService);
        renderServices();
        renderCurrentServices();
        this.reset();
        serviceImagePreview.innerHTML = '';
        alert('Service added successfully!');
    });
    
    // Add new gallery item
    addGalleryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const galleryImages = Array.from(galleryImagePreview.querySelectorAll('img')).map(img => img.src);
        if (galleryImages.length === 0) {
            alert('Please upload at least one image');
            return;
        }
        
        galleryImages.forEach(imageUrl => {
            const newGalleryItem = {
                imageUrl: imageUrl,
                title: document.getElementById('gallery-title').value || 'Makeup Look'
            };
            galleryData.push(newGalleryItem);
        });
        
        renderGallery();
        renderCurrentGalleryItems();
        this.reset();
        galleryImagePreview.innerHTML = '';
        alert('Gallery items added successfully!');
    });
    
    // Add new testimonial
    addTestimonialForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const testimonialImage = testimonialImagePreview.querySelector('img')?.src;
        
        const newTestimonial = {
            name: document.getElementById('testimonial-name').value,
            role: document.getElementById('testimonial-role').value || 'Client',
            text: document.getElementById('testimonial-text').value,
            imageUrl: testimonialImage || 'https://randomuser.me/api/portraits/women/1.jpg'
        };
        
        testimonialsData.push(newTestimonial);
        renderTestimonials();
        renderCurrentTestimonials();
        this.reset();
        testimonialImagePreview.innerHTML = '';
        alert('Testimonial added successfully!');
    });
    
    // Change hero section
    changeHeroForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const heroImage = heroImagePreview.querySelector('img')?.src;
        if (!heroImage) {
            alert('Please upload a hero image');
            return;
        }
        
        heroData = {
            imageUrl: heroImage,
            title: document.getElementById('hero-title').value,
            text: document.getElementById('hero-text').value
        };
        
        updateHeroSection();
        renderHeroPreview();
        this.reset();
        heroImagePreview.innerHTML = '';
        alert('Hero section updated successfully!');
    });
    
    // Render current services in admin panel
    renderCurrentServices();
    
    // Render current gallery items in admin panel
    renderCurrentGalleryItems();
    
    // Render current testimonials in admin panel
    renderCurrentTestimonials();
});

// Handle image upload and preview
function handleImageUpload(event, previewContainer) {
    previewContainer.innerHTML = '';
    const files = event.target.files;
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (!file.type.match('image.*')) continue;
        
        const reader = new FileReader();
        reader.onload = function(e) {
            const previewItem = document.createElement('div');
            previewItem.className = 'image-preview-item';
            previewItem.innerHTML = `
                <img src="${e.target.result}" alt="Preview">
                <button class="remove-image" onclick="this.parentElement.remove()">&times;</button>
            `;
            previewContainer.appendChild(previewItem);
        }
        reader.readAsDataURL(file);
    }
}

// Render services on the page
function renderServices() {
    servicesContainer.innerHTML = '';
    
    servicesData.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
            <div class="service-img" style="background-image: url('${service.imageUrl}')"></div>
            <div class="service-content">
                <h3>${service.name}</h3>
                <p>${service.description}</p>
                <p class="service-price">${service.price}</p>
            </div>
        `;
        servicesContainer.appendChild(serviceCard);
    });
}

// Render gallery on the page
function renderGallery() {
    galleryContainer.innerHTML = '';
    
    galleryData.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.title}">
            <div class="gallery-overlay">
                <h4>${item.title}</h4>
            </div>
        `;
        galleryContainer.appendChild(galleryItem);
    });
}

// Render testimonials on the page
function renderTestimonials() {
    testimonialsContainer.innerHTML = '';
    
    testimonialsData.forEach(testimonial => {
        const testimonialDiv = document.createElement('div');
        testimonialDiv.className = 'testimonial';
        testimonialDiv.innerHTML = `
            <img src="${testimonial.imageUrl}" alt="${testimonial.name}">
            <p>"${testimonial.text}"</p>
            <h4>${testimonial.name} <span>• ${testimonial.role}</span></h4>
        `;
        testimonialsContainer.appendChild(testimonialDiv);
    });
}

// Update hero section
function updateHeroSection() {
    heroSection.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${heroData.imageUrl}')`;
    heroTitle.textContent = heroData.title;
    heroText.textContent = heroData.text;
}

// Render hero preview in admin panel
function renderHeroPreview() {
    heroPreview.innerHTML = `
        <div style="background-image: url('${heroData.imageUrl}'); height: 200px; background-size: cover; background-position: center; margin-bottom: 15px;"></div>
        <p><strong>Title:</strong> ${heroData.title}</p>
        <p><strong>Text:</strong> ${heroData.text}</p>
    `;
}

// Render current services in admin panel
function renderCurrentServices() {
    currentServicesContainer.innerHTML = '';
    
    servicesData.forEach((service, index) => {
        const serviceDiv = document.createElement('div');
        serviceDiv.className = 'current-service';
        serviceDiv.innerHTML = `
            <div style="display: flex; margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #eee;">
                <div style="width: 80px; height: 80px; background-image: url('${service.imageUrl}'); background-size: cover; background-position: center; margin-right: 15px;"></div>
                <div>
                    <h4>${service.name}</h4>
                    <p>${service.price}</p>
                    <button class="admin-btn-primary" onclick="editService(${index})" style="padding: 5px 10px; font-size: 12px; margin-right: 5px;">Edit</button>
                    <button class="admin-btn-primary" onclick="deleteService(${index})" style="padding: 5px 10px; font-size: 12px;">Delete</button>
                </div>
            </div>
        `;
        currentServicesContainer.appendChild(serviceDiv);
    });
}

// Render current gallery items in admin panel
function renderCurrentGalleryItems() {
    currentGalleryContainer.innerHTML = '';
    
    galleryData.forEach((item, index) => {
        const galleryDiv = document.createElement('div');
        galleryDiv.className = 'current-gallery-item';
        galleryDiv.innerHTML = `
            <div style="display: flex; margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #eee;">
                <div style="width: 80px; height: 80px; background-image: url('${item.imageUrl}'); background-size: cover; background-position: center; margin-right: 15px;"></div>
                <div>
                    <h4>${item.title}</h4>
                    <button class="admin-btn-primary" onclick="editGalleryItem(${index})" style="padding: 5px 10px; font-size: 12px; margin-right: 5px;">Edit</button>
                    <button class="admin-btn-primary" onclick="deleteGalleryItem(${index})" style="padding: 5px 10px; font-size: 12px;">Delete</button>
                </div>
            </div>
        `;
        currentGalleryContainer.appendChild(galleryDiv);
    });
}

// Render current testimonials in admin panel
function renderCurrentTestimonials() {
    currentTestimonialsContainer.innerHTML = '';
    
    testimonialsData.forEach((testimonial, index) => {
        const testimonialDiv = document.createElement('div');
        testimonialDiv.className = 'current-testimonial';
        testimonialDiv.innerHTML = `
            <div style="display: flex; margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #eee;">
                <div style="width: 80px; height: 80px; background-image: url('${testimonial.imageUrl}'); background-size: cover; background-position: center; margin-right: 15px;"></div>
                <div>
                    <h4>${testimonial.name} (${testimonial.role})</h4>
                    <p style="font-style: italic; margin: 5px 0;">"${testimonial.text.substring(0, 50)}..."</p>
                    <button class="admin-btn-primary" onclick="editTestimonial(${index})" style="padding: 5px 10px; font-size: 12px; margin-right: 5px;">Edit</button>
                    <button class="admin-btn-primary" onclick="deleteTestimonial(${index})" style="padding: 5px 10px; font-size: 12px;">Delete</button>
                </div>
            </div>
        `;
        currentTestimonialsContainer.appendChild(testimonialDiv);
    });
}

// Edit service
window.editService = function(index) {
    const service = servicesData[index];
    const newName = prompt('Edit Service Name:', service.name);
    if (newName !== null) {
        const newDescription = prompt('Edit Description:', service.description);
        const newPrice = prompt('Edit Price:', service.price);
        
        if (newDescription !== null && newPrice !== null) {
            servicesData[index] = {
                ...service,
                name: newName,
                description: newDescription,
                price: newPrice
            };
            renderServices();
            renderCurrentServices();
        }
    }
};

// Edit gallery item
window.editGalleryItem = function(index) {
    const item = galleryData[index];
    const newTitle = prompt('Edit Title:', item.title);
    if (newTitle !== null) {
        galleryData[index] = {
            ...item,
            title: newTitle
        };
        renderGallery();
        renderCurrentGalleryItems();
    }
};

// Edit testimonial
window.editTestimonial = function(index) {
    const testimonial = testimonialsData[index];
    const newName = prompt('Edit Client Name:', testimonial.name);
    if (newName !== null) {
        const newRole = prompt('Edit Client Role:', testimonial.role);
        const newText = prompt('Edit Testimonial Text:', testimonial.text);
        
        if (newRole !== null && newText !== null) {
            testimonialsData[index] = {
                ...testimonial,
                name: newName,
                role: newRole,
                text: newText
            };
            renderTestimonials();
            renderCurrentTestimonials();
        }
    }
};

// Delete service
window.deleteService = function(index) {
    if (confirm('Are you sure you want to delete this service?')) {
        servicesData.splice(index, 1);
        renderServices();
        renderCurrentServices();
    }
};

// Delete gallery item
window.deleteGalleryItem = function(index) {
    if (confirm('Are you sure you want to delete this gallery item?')) {
        galleryData.splice(index, 1);
        renderGallery();
        renderCurrentGalleryItems();
    }
};

// Delete testimonial
window.deleteTestimonial = function(index) {
    if (confirm('Are you sure you want to delete this testimonial?')) {
        testimonialsData.splice(index, 1);
        renderTestimonials();
        renderCurrentTestimonials();
    }
};
