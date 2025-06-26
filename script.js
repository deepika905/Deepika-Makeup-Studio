// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const nav = document.getElementById('nav');

mobileMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileMenu.innerHTML = nav.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (this.getAttribute('href') === '#') return;
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });
});

// Admin Panel Toggle
const adminLoginBtn = document.getElementById('admin-login-btn');
const adminPanel = document.getElementById('admin-panel');
const closeAdmin = document.getElementById('close-admin');

adminLoginBtn.addEventListener('click', () => {
    adminPanel.classList.add('active');
});

closeAdmin.addEventListener('click', () => {
    adminPanel.classList.remove('active');
});

// Tab Switching in Admin Panel
const tabs = document.querySelectorAll('.admin-tabs button');
const tabContents = document.querySelectorAll('.admin-tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and contents
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding content
        tab.classList.add('active');
        const tabId = tab.getAttribute('data-tab') + '-tab';
        document.getElementById(tabId).classList.add('active');
    });
});

// Form Submission Handling
document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your booking request! We will contact you shortly to confirm your appointment.');
    this.reset();
});

// Gallery Data - This would come from a database in a real implementation
let galleryData = [
    // Format: { before: 'url', after: 'url', caption: 'text' }
];

// Function to render gallery items
function renderGallery() {
    const galleryContainer = document.getElementById('before-after-gallery');
    const adminGalleryGrid = document.getElementById('admin-gallery-grid');
    
    // Clear existing items
    galleryContainer.innerHTML = '';
    adminGalleryGrid.innerHTML = '';
    
    if (galleryData.length === 0) {
        adminGalleryGrid.innerHTML = '<p>No before/after pairs uploaded yet.</p>';
        galleryContainer.innerHTML = '<p style="text-align:center;">No before/after images available yet.</p>';
        return;
    }
    
    // Render each before/after pair
    galleryData.forEach((item, index) => {
        // For main gallery
        const pairContainer = document.createElement('div');
        pairContainer.className = 'before-after-pair';
        
        if (item.caption) {
            const caption = document.createElement('h4');
            caption.textContent = item.caption;
            pairContainer.appendChild(caption);
        }
        
        const imagesContainer = document.createElement('div');
        imagesContainer.className = 'before-after-images';
        
        const beforeItem = createGalleryItem(item.before, 'Before');
        const afterItem = createGalleryItem(item.after, 'After');
        
        imagesContainer.appendChild(beforeItem);
        imagesContainer.appendChild(afterItem);
        pairContainer.appendChild(imagesContainer);
        galleryContainer.appendChild(pairContainer);
        
        // For admin gallery
        const adminItem = document.createElement('div');
        adminItem.className = 'gallery-item-admin';
        adminItem.innerHTML = `
            <img src="${item.before}" alt="Before Image">
            <button class="delete-btn" data-index="${index}">&times;</button>
        `;
        adminGalleryGrid.appendChild(adminItem);
    });
}

// Function to create a gallery item
function createGalleryItem(imageSrc, caption) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.innerHTML = `
        <img src="${imageSrc}" alt="${caption}">
        <div class="gallery-overlay">
            <span>${caption}</span>
        </div>
    `;
    return item;
}

// Handle gallery form submission
document.getElementById('gallery-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const beforeFile = document.getElementById('before-image').files[0];
    const afterFile = document.getElementById('after-image').files[0];
    const caption = document.getElementById('gallery-caption').value;
    
    if (!beforeFile || !afterFile) {
        alert('Please select both before and after images!');
        return;
    }
    
    // Create promises for both file reads
    const readFile = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.onerror = (e) => reject(e);
            reader.readAsDataURL(file);
        });
    };
    
    // Read both files
    Promise.all([readFile(beforeFile), readFile(afterFile)])
        .then(([beforeSrc, afterSrc]) => {
            // Add to gallery data
            galleryData.push({
                before: beforeSrc,
                after: afterSrc,
                caption: caption
            });
            
            // Re-render gallery
            renderGallery();
            
            // Reset form
            e.target.reset();
            alert('Before & After pair added successfully!');
        })
        .catch(error => {
            console.error('Error reading files:', error);
            alert('Error uploading images. Please try again.');
        });
});

// Handle delete button clicks
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        if (confirm('Are you sure you want to delete this before/after pair?')) {
            const index = parseInt(e.target.getAttribute('data-index'));
            galleryData.splice(index, 1);
            renderGallery();
        }
    }
});

// Background Image Management
document.getElementById('update-service-bg').addEventListener('click', function() {
    const file = document.getElementById('service-bg-image').files[0];
    const service = document.getElementById('service-select').value;
    
    if (!file) {
        alert('Please select an image first!');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        // In a real implementation, this would save to a database
        alert(`Background for ${service} service updated successfully!`);
        document.getElementById('service-bg-preview').style.backgroundImage = `url(${e.target.result})`;
    };
    reader.readAsDataURL(file);
});

document.getElementById('update-testimonials-bg').addEventListener('click', function() {
    const file = document.getElementById('testimonials-bg-image').files[0];
    
    if (!file) {
        alert('Please select an image first!');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        // In a real implementation, this would save to a database
        alert('Testimonials background updated successfully!');
        document.getElementById('testimonials-bg-preview').style.backgroundImage = `url(${e.target.result})`;
    };
    reader.readAsDataURL(file);
});

document.getElementById('update-section-bg').addEventListener('click', function() {
    const file = document.getElementById('section-bg-image').files[0];
    const section = document.getElementById('section-select').value;
    
    if (!file) {
        alert('Please select an image first!');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        // In a real implementation, this would save to a database
        alert(`${section} section background updated successfully!`);
        document.getElementById('section-bg-preview').style.backgroundImage = `url(${e.target.result})`;
    };
    reader.readAsDataURL(file);
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderGallery();
});