// Testimonials Carousel
document.addEventListener('DOMContentLoaded', function() {
    const testimonialsSlider = document.querySelector('.testimonials-slider');
    
    if (testimonialsSlider) {
        let isDown = false;
        let startX;
        let scrollLeft;
        
        testimonialsSlider.addEventListener('mousedown', (e) => {
            isDown = true;
            testimonialsSlider.classList.add('active');
            startX = e.pageX - testimonialsSlider.offsetLeft;
            scrollLeft = testimonialsSlider.scrollLeft;
        });
        
        testimonialsSlider.addEventListener('mouseleave', () => {
            isDown = false;
            testimonialsSlider.classList.remove('active');
        });
        
        testimonialsSlider.addEventListener('mouseup', () => {
            isDown = false;
            testimonialsSlider.classList.remove('active');
        });
        
        testimonialsSlider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - testimonialsSlider.offsetLeft;
            const walk = (x - startX) * 2;
            testimonialsSlider.scrollLeft = scrollLeft - walk;
        });
        
        // Touch events for mobile
        testimonialsSlider.addEventListener('touchstart', (e) => {
            isDown = true;
            testimonialsSlider.classList.add('active');
            startX = e.touches[0].pageX - testimonialsSlider.offsetLeft;
            scrollLeft = testimonialsSlider.scrollLeft;
        });
        
        testimonialsSlider.addEventListener('touchend', () => {
            isDown = false;
            testimonialsSlider.classList.remove('active');
        });
        
        testimonialsSlider.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.touches[0].pageX - testimonialsSlider.offsetLeft;
            const walk = (x - startX) * 2;
            testimonialsSlider.scrollLeft = scrollLeft - walk;
        });
    }
    
    // Auto-scroll for testimonials
    function autoScrollTestimonials() {
        const slider = document.querySelector('.testimonials-slider');
        if (!slider) return;
        
        const firstItem = slider.querySelector('.testimonial-item');
        if (!firstItem) return;
        
        const itemWidth = firstItem.offsetWidth;
        const scrollAmount = itemWidth;
        
        setInterval(() => {
            slider.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
            
            // Check if we've reached the end
            if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - 100) {
                setTimeout(() => {
                    slider.scrollTo({
                        left: 0,
                        behavior: 'smooth'
                    });
                }, 2000);
            }
        }, 5000);
    }
    
    autoScrollTestimonials();
});