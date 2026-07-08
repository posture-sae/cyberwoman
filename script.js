document.addEventListener("DOMContentLoaded", function() {
    const reveals = document.querySelectorAll(".reveal");

    function reveal() {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add("active");
            }
        });
    }

    // Trigger on scroll
    window.addEventListener("scroll", reveal);
    
    // Trigger on load for initial elements
    reveal();
});
