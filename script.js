document.addEventListener('DOMContentLoaded', function() {
    // Produkto nuotraukų galerija
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Pakeisti pagrindinę nuotrauką
            mainImage.src = this.dataset.image;
            
            // Atnaujinti aktyvią miniatiūrą
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Skirtukų funkcionalumas
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Pašalinti aktyvią klasę iš visų mygtukų
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Pridėti aktyvią klasę paspausam mygtukui
            this.classList.add('active');
            
            // Pašalinti aktyvią klasę iš visų turinio blokų
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Aktyvuoti atitinkamą turinio bloką
            const targetPane = document.getElementById(this.dataset.tab);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });
    
    // Mobilios navigacijos toggle
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });
    }
    
    // Dropdown meniu mobiliai versijai
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
        
        if (dropdownToggle && window.innerWidth < 992) {
            dropdownToggle.addEventListener('click', function(e) {
                e.preventDefault();
                dropdown.classList.toggle('show');
            });
        }
    });
    
    // Užklausimai dėl kainos forma
    const priceInquiryBtn = document.querySelector('.btn-primary.btn-lg');
    
    if (priceInquiryBtn) {
        priceInquiryBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Čia galima įdėti modalinio lango atidarymą arba nukreipimą į kontaktų formą
            alert('Užklausa dėl kainos bus įgyvendinta pagal jūsų poreikius');
        });
    }
    
    // Naujienlaiškio forma
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput.value) {
                alert('Ačiū! Jūs sėkmingai užsiprenumeravote naujienlaiškį.');
                emailInput.value = '';
            }
        });
    }
});
