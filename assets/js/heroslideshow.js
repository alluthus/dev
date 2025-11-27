// Automatic image slideshow for main-hero with crossfade
document.addEventListener('DOMContentLoaded', function() {
    const heroElement = document.querySelector('.hero.main-hero');
    
    if (!heroElement) return;
    
    const images = [
        '/assets/images/publicity/alluthus_photo_1.png',
        '/assets/images/publicity/alluthus_photo_2.png',
        '/assets/images/publicity/alluthus_photo_3.png',
        '/assets/images/publicity/alluthus_photo_4.png'
    ];
    
    let currentIndex = 0;
    
    function changeImage() {
        const nextIndex = (currentIndex + 1) % images.length;
        
        // Set next image on the before pseudo-element using inline style
        const beforeStyle = document.createElement('style');
        beforeStyle.textContent = `.hero.main-hero::before { background-image: url('${images[nextIndex]}'); }`;
        document.head.appendChild(beforeStyle);
        
        // Trigger fade-in
        heroElement.classList.add('fade-in');
        
        setTimeout(() => {
            // After fade completes, swap the main background
            heroElement.style.backgroundImage = `url('${images[nextIndex]}')`;
            
            // Remove fade-in class and cleanup
            heroElement.classList.remove('fade-in');
            document.head.removeChild(beforeStyle);
            
            currentIndex = nextIndex;
        }, 1000); // Wait for fade transition
    }
    
    // Change image every 5 seconds
    setInterval(changeImage, 5000);
});
