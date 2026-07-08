/**
 * DecodeLabs Project 1 - Interactive Functionality
 * State management, interactive elements, and micro-animations.
 */

document.addEventListener('DOMContentLoaded', () => {
    /* --- 1. Mobile Navigation Toggle --- */
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.getElementById('nav-list');

    if (navToggle && navList) {
        navToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
        });

        // Close menu when clicking outside
        document.addEventListener('click', (event) => {
            if (!event.target.closest('.main-nav') && navList.classList.contains('active')) {
                navList.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Close menu when a link is clicked
        navList.addEventListener('click', (event) => {
            if(event.target.tagName === 'A') {
                navList.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    /* --- 2. Interactive "Save" Bookmarks --- */
    const saveButtons = document.querySelectorAll('.icon-btn-small');
    saveButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent jump if inside anchor
            this.classList.toggle('saved');
            
            // Simple visual feedback
            if (this.classList.contains('saved')) {
                this.style.color = 'var(--clr-primary-mocha)';
                this.style.transform = 'scale(1.2)';
                setTimeout(() => this.style.transform = 'scale(1)', 200);
            } else {
                this.style.color = ''; // reset
                this.style.transform = 'scale(0.8)';
                setTimeout(() => this.style.transform = 'scale(1)', 200);
            }
        });
    });

    /* --- 3. Smooth Scrolling for Anchor Links --- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    /* --- 4. "Learn More" Button Interaction --- */
    const learnMoreBtn = document.querySelector('.btn-primary');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', () => {
            const exploreSection = document.getElementById('explore');
            if (exploreSection) {
                exploreSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    /* --- 5. Mobile Bottom Navigation Active State --- */
    const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
    bottomNavItems.forEach(item => {
        item.addEventListener('click', function() {
            bottomNavItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    /* --- 6. Search Button Mock Interaction --- */
    const searchBtn = document.querySelector('.header-actions .icon-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const searchTerm = prompt('Search for digital craftsmanship topics:');
            if (searchTerm) {
                alert(`Searching for "${searchTerm}"... (This is a frontend demo!)`);
            }
        });
    }
});
