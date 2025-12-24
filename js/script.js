document.addEventListener('DOMContentLoaded', function () {

    // --- EmailJS Initialization & Form Handling ---
    // Initialize EmailJS ONLY if the library is loaded (check specific to prevent errors on pages without it)
    if (typeof emailjs !== 'undefined') {
        emailjs.init("c_WO9UYO4DcQ0eqOm");

        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function (event) {
                event.preventDefault();

                const templateParams = {
                    from_name: document.getElementById('name').value,
                    from_email: document.getElementById('email').value,
                    message: document.getElementById('message').value,
                    to_email: 'conde86labs@gmail.com'
                };

                // Show loading state (optional improvement)
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerText;
                submitBtn.innerText = 'Enviando...';
                submitBtn.disabled = true;

                emailjs.send('service_i7q3zej', 'template_41ga1uj', templateParams)
                    .then(function (response) {
                        console.log('SUCCESS!', response.status, response.text);
                        document.getElementById('successMessage').style.display = 'block';
                        contactForm.reset();
                    }, function (error) {
                        console.log('FAILED...', error);
                        alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.');
                    })
                    .finally(() => {
                        submitBtn.innerText = originalText;
                        submitBtn.disabled = false;
                    });
            });
        }
    }

    // --- Smooth Scrolling for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                return;
            }
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Cookie Consent Logic ---
    const cookieBox = document.querySelector(".wrapper");
    if (cookieBox) {
        const acceptBtn = cookieBox.querySelector("button");

        acceptBtn.onclick = () => {
            // Set cookie for 30 days
            document.cookie = "CookieBy=Conde86Labs; max-age=" + 60 * 60 * 24 * 30 + "; path=/";

            if (document.cookie) {
                cookieBox.classList.remove("show"); // Hide it by removing the show class
            } else {
                alert("Cookie não pode ser definido! Por favor, desbloqueie este site das configurações de cookie do seu navegador.");
            }
        }

        let checkCookie = document.cookie.indexOf("CookieBy=Conde86Labs");
        // If cookie is NOT set, show the box
        if (checkCookie == -1) {
            cookieBox.classList.add("show");
        }
        // If cookie IS set, do nothing (it remains hidden by default CSS)
    }
});
