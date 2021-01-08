let mobileMenu = () => {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.navigation');

    hamburger.addEventListener('click', () => {
        if (hamburger.className === "hamburger active") {
            hamburger.className = "hamburger";
            mobileNav.className = "navigation";
        } else {
            hamburger.className = "hamburger active";
            mobileNav.className = "navigation active";
        }
        
    });
    
}
mobileMenu();