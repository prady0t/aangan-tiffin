// Welcome Screen Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Set initial state
    document.body.classList.add('welcome-mode');
    
    // Check if user has visited before (optional)
    const hasVisited = localStorage.getItem('aanganVisited');
    if (hasVisited) {
        // User has visited before, skip welcome screen
        enterWebsite();
    }
});

// Function to enter the main website
function enterWebsite() {
    const welcomeOverlay = document.getElementById('welcomeOverlay');
    const body = document.body;
    
    // Fade out welcome screen
    welcomeOverlay.classList.add('fade-out');
    
    // After fade out, hide welcome screen and show website
    setTimeout(() => {
        welcomeOverlay.style.display = 'none';
        body.classList.remove('welcome-mode');
        body.classList.add('website-loaded');
        
        // Mark as visited
        localStorage.setItem('aanganVisited', 'true');
    }, 1000);
}

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Menu Modal Functionality
const modal = document.getElementById('menuModal');
const viewMenuBtns = document.querySelectorAll('.view-menu-btn');
const closeBtn = document.querySelector('.close');
const tabBtns = document.querySelectorAll('.tab-btn');
const menuDays = document.querySelectorAll('.menu-day');

// Menu Data from the PDF pamphlet
const menuData = {
    type1: {
        monday: {
            lunch: [
                'Chhole Rice 🍚',
                'Dahi',
                'Sweet Dish',
                'Papad',
                'Aaloo Jeera Dry Sabji'
            ],
            dinner: [
                '4 Roti 🫓',
                'Rice 🍚',
                'Dahi',
                'Sweet Dish',
                'Dry Aaloo Sabji',
                'Chana Daal Fry'
            ]
        },
        tuesday: {
            lunch: [
                '2 Roti 🫓',
                'Rice 🍚',
                'Aaloo Soyabeen Sabji',
                'Sweet Dish',
                'Dahi'
            ],
            dinner: [
                '4 Roti 🫓',
                'Rice 🍚',
                'Seasonal Sabji',
                'Mix Daal',
                'Sweet Dish',
                'Dahi'
            ]
        },
        wednesday: {
            lunch: [
                '3 Parantha',
                'Paneer Sabji',
                'Jeera Rice 🍚',
                'Sweet Dish'
            ],
            dinner: [
                '<span style="color: green;">(Veg) Rajma, Rice 🍚, 4 Roti 🫓</span>',
                '<span style="color: red;">(Non Veg) Egg Curry (3), Rice 🍚, 4 Roti 🫓</span>',
                'Dahi',
                'Sweet Dish'
            ]
        },
        thursday: {
            lunch: [
                '3 Roti 🫓',
                'Rice 🍚',
                'Daal',
                'Mix Veg Sabji',
                'Bundi Raita',
                'Sweet Dish'
            ],
            dinner: [
                '4 Roti 🫓',
                'Rice 🍚',
                'Kadhi Pakoda',
                'Bhindi Fry',
                'Dahi',
                'Sweet Dish'
            ]
        },
        friday: {
            lunch: [
                '4 Roti 🫓',
                'Rice 🍚',
                'Aaloo Matar',
                'Soya Chaap',
                'Dahi'
            ],
            dinner: [
                'Veg Biryani',
                'Raita',
                'Aachar/Chutney',
                'Special Sweets Dish'
            ]
        },
        saturday: {
            lunch: [
                '3 Parantha',
                'Jeera Rice 🍚',
                'Kala Chana',
                'Aaloo Shimla Mirch Sabji'
            ],
            dinner: [
                '4 Roti 🫓',
                'Rice 🍚',
                '<span style="color: green;">(Veg) Besan Ki Sabji</span>',
                '<span style="color: red;">(Non Veg) Chicken (3 Pc)</span>',
                'Dahi',
                'Sweet Dish'
            ]
        },
        sunday: {
            lunch: ['OFF'],
            dinner: ['OFF']
        }
    },
    type2: {
        monday: {
            lunch: [
                'Chhole - Rice 🍚',
                'Dahi',
                'Sweet Dish'
            ],
            dinner: [
                '4 Roti 🫓',
                'Rice 🍚',
                'Dry Aaloo Sabji',
                'Chana Daal Fry'
            ]
        },
        tuesday: {
            lunch: [
                '2 Roti 🫓',
                'Rice 🍚',
                'Aaloo Soyabeen Sabji',
                'Daal'
            ],
            dinner: [
                '4 Roti 🫓',
                'Rice 🍚',
                'Seasonal Sabji',
                'Mix Daal'
            ]
        },
        wednesday: {
            lunch: [
                '3 Parantha',
                'Paneer Sabji',
                'Jeera Rice 🍚'
            ],
            dinner: [
                '<span style="color: green;">(Veg) Rajma, Rice 🍚, 2 Roti 🫓</span>',
                '<span style="color: red;">(Non Veg) Egg Curry(3), Rice 🍚, 2 Roti 🫓</span>'
            ]
        },
        thursday: {
            lunch: [
                '3 Roti 🫓',
                'Rice 🍚',
                'Daal',
                'Mix Veg',
                'Bundi Raita'
            ],
            dinner: [
                '4 Roti 🫓',
                'Rice 🍚',
                'Kadhi Pakoda',
                'Bhindi Fry'
            ]
        },
        friday: {
            lunch: [
                '4 Roti 🫓',
                'Rice 🍚',
                'Aaloo Matar',
                'Soya Chaap'
            ],
            dinner: [
                'Veg Biryani',
                'Raita',
                'Salad'
            ]
        },
        saturday: {
            lunch: [
                '3 Parantha',
                'Jeera Rice 🍚',
                'Kala Chana'
            ],
            dinner: [
                '4 Roti 🫓',
                'Rice 🍚',
                '<span style="color: green;">(Veg) Besan Ki Sabji</span>',
                '<span style="color: red;">(Non Veg) Chicken (3 Pc)</span>'
            ]
        },
        sunday: {
            lunch: ['OFF'],
            dinner: ['OFF']
        }
    },
    type3: {
        monday: {
            lunch: [
                'Chhole - Rice 🍚',
                'Dahi'
            ],
            dinner: [
                '4 Roti 🫓',
                'Chana Daal Fry',
                'Dry Aaloo Sabji'
            ]
        },
        tuesday: {
            lunch: [
                'Roti (2) 🫓',
                'Rice 🍚',
                'Aaloo Soyabeen Sabji'
            ],
            dinner: [
                '4 Roti 🫓',
                'Mix Daal',
                'Seasonal Sabji'
            ]
        },
        wednesday: {
            lunch: [
                'Parantha (2)',
                'Paneer Sabji'
            ],
            dinner: [
                '<span style="color: green;">(Veg) Rajma, Rice 🍚</span>',
                '<span style="color: red;">(Non Veg) Egg Curry (2), Rice 🍚</span>'
            ]
        },
        thursday: {
            lunch: [
                'Roti (2) 🫓',
                'Daal',
                'Mix Veg Sabji'
            ],
            dinner: [
                '4 Roti 🫓',
                'Kadhi Pakoda',
                'Bhindi Fry'
            ]
        },
        friday: {
            lunch: [
                'Roti (3) 🫓',
                'Aaloo Matar'
            ],
            dinner: [
                'Veg Biryani',
                'Raita',
                'Salad'
            ]
        },
        saturday: {
            lunch: [
                'Parantha(3)',
                'Kala Chana'
            ],
            dinner: [
                '4 Roti 🫓',
                'Rice 🍚',
                '<span style="color: green;">(Veg) Besan Ki Sabji</span>',
                '<span style="color: red;">(Non Veg) Chicken (2 Pc)</span>'
            ]
        },
        sunday: {
            lunch: ['OFF'],
            dinner: ['OFF']
        }
    }
};

// Open modal when View Menu button is clicked
viewMenuBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const plan = btn.getAttribute('data-plan');
        const modalTitle = document.getElementById('modalTitle');
        
        // Set modal title based on plan
        if (plan === 'type1') {
            modalTitle.textContent = 'TYPE 1 - Premium Plan Weekly Menu';
        } else if (plan === 'type2') {
            modalTitle.textContent = 'TYPE 2 - Balanced Plan Weekly Menu';
        } else if (plan === 'type3') {
            modalTitle.textContent = 'TYPE 3 - Basic Plan Weekly Menu';
        }
        
        // Populate menu data
        populateMenuData(plan);
        
        // Show modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// Close modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Tab functionality
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const day = btn.getAttribute('data-day');
        
        // Remove active class from all tabs and days
        tabBtns.forEach(tab => tab.classList.remove('active'));
        menuDays.forEach(dayEl => dayEl.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding day
        btn.classList.add('active');
        document.getElementById(day).classList.add('active');
    });
});

// Function to populate menu data based on plan
function populateMenuData(plan) {
    // Get the selected plan type
    const planType = plan;
    
    if (menuData[planType]) {
        Object.keys(menuData[planType]).forEach(day => {
            const lunchList = document.getElementById(`${day}-lunch`);
            const dinnerList = document.getElementById(`${day}-dinner`);
            
            if (lunchList && dinnerList) {
                // Clear existing content
                lunchList.innerHTML = '';
                dinnerList.innerHTML = '';
                
                // Populate lunch
                menuData[planType][day].lunch.forEach(item => {
                    const li = document.createElement('li');
                    li.innerHTML = item;
                    lunchList.appendChild(li);
                });
                
                // Populate dinner
                menuData[planType][day].dinner.forEach(item => {
                    const li = document.createElement('li');
                    li.innerHTML = item;
                    dinnerList.appendChild(li);
                });
            }
        });
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Email functionality for contact form
function sendEmail() {
    // Get form values
    const name = document.getElementById('customerName').value;
    const phone = document.getElementById('customerPhone').value;
    const email = document.getElementById('customerEmail').value;
    const plan = document.getElementById('selectedPlan').value;
    const requirements = document.getElementById('requirements').value;
    
    // Validate required fields
    if (!name || !phone || !email || !plan) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Create email body with all the information
    const emailBody = `Hello,

I would like to book a tiffin service with आँगन.

Customer Details:
- Name: ${name}
- Phone: ${phone}
- Email: ${email}
- Selected Plan: ${plan}
- Additional Requirements: ${requirements || 'None'}

Please contact me to confirm my tiffin service booking.

Thank you!`;
    
    // Create mailto link
    const mailtoLink = `mailto:arihantvv.av21@gmail.com?subject=आँगन Tiffin Service Booking - ${name}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Email client opened! Please send the email to complete your booking.');
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animatedElements = document.querySelectorAll('.about-card, .pricing-card, .contact-item');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Pricing card hover effects
const pricingCards = document.querySelectorAll('.pricing-card');
pricingCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});
