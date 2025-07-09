// js/script.js

document.addEventListener('DOMContentLoaded', () => {

    // Select all the elements we want to animate
    const scenes = document.querySelectorAll('.scene');

    // Set up the Intersection Observer
    const observerOptions = {
        root: null, // use the viewport as the root
        rootMargin: '0px',
        threshold: 0.25 // Trigger when 25% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element is intersecting (visible)
            if (entry.isIntersecting) {
                // Add the 'is-visible' class to trigger the animation
                entry.target.classList.add('is-visible');
                
                // We only want the animation to play once, so unobserve the element
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Attach the observer to each scene
    scenes.forEach(scene => {
        observer.observe(scene);
    });

});