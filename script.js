document.addEventListener("DOMContentLoaded", () => {
    // Current year
    const currentYearEl = document.getElementById("current-year");
    if(currentYearEl) currentYearEl.textContent = new Date().getFullYear();

    // Navbar scroll effect
    const header = document.getElementById("main-header");
    
    // Scrollspy & Navbar background
    const sections = ["about", "skills", "projects", "contact"];
    const navLinks = document.querySelectorAll(".nav-link");
    
    const handleScroll = () => {
        // Navbar background
        if (window.scrollY > 50) {
            header.classList.add("bg-fondo/80", "backdrop-blur-md", "border-b", "border-borde");
            header.classList.remove("bg-transparent");
        } else {
            header.classList.remove("bg-fondo/80", "backdrop-blur-md", "border-b", "border-borde");
            header.classList.add("bg-transparent");
        }

        // Scrollspy
        let current = "";
        for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                // If section is reasonably visible in viewport
                if (rect.top <= 150 && rect.bottom >= 150) {
                    current = section;
                    break;
                }
            }
        }

        navLinks.forEach(link => {
            const target = link.getAttribute("data-target");
            if (target === current) {
                link.classList.add("text-primario");
                link.classList.remove("text-apagado-primer-plano", "hover:text-primer-plano");
            } else {
                link.classList.remove("text-primario");
                link.classList.add("text-apagado-primer-plano", "hover:text-primer-plano");
            }
        });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });
        
        // Close mobile menu on link click
        const mobileLinks = document.querySelectorAll(".nav-link-mobile");
        mobileLinks.forEach(link => {
            link.addEventListener("click", () => {
                mobileMenu.classList.add("hidden");
            });
        });
    }

    // Contact Form Handling
    const form = document.getElementById("contact-form");
    const submitBtn = document.getElementById("submit-btn");
    const btnText = document.getElementById("btn-text");
    const btnIcon = document.getElementById("btn-icon");

    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            
            // Loading state
            submitBtn.disabled = true;
            btnText.textContent = "Enviando...";
            btnIcon.classList.add("hidden");

            const data = new FormData(form);

            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Success state
                    btnText.textContent = "Mensaje enviado";
                    form.reset();
                    
                    setTimeout(() => {
                        submitBtn.disabled = false;
                        btnText.textContent = "Enviar mensaje";
                        btnIcon.classList.remove("hidden");
                    }, 5000);
                } else {
                    // Error state
                    btnText.textContent = "Error, intenta de nuevo";
                    setTimeout(() => {
                        submitBtn.disabled = false;
                        btnText.textContent = "Enviar mensaje";
                        btnIcon.classList.remove("hidden");
                    }, 3000);
                }
            } catch (error) {
                btnText.textContent = "Error, intenta de nuevo";
                setTimeout(() => {
                    submitBtn.disabled = false;
                    btnText.textContent = "Enviar mensaje";
                    btnIcon.classList.remove("hidden");
                }, 3000);
            }
        });
    }
});
