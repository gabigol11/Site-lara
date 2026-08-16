function mostrarMensagem() {
  alert("Você clicou no botão! 🚀");
}

// JavaScript incorporado do HTML

        // Initialize AOS
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
        
        // Mobile Menu Toggle
        const menuToggle = document.getElementById('menuToggle');
        const nav = document.getElementById('nav');
        
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            
            const spans = menuToggle.querySelectorAll('span');
            spans[0].classList.toggle('rotate-45');
            spans[1].classList.toggle('opacity-0');
            spans[2].classList.toggle('-rotate-45');
            
            if (nav.classList.contains('active')) {
                spans[0].style.transform = 'translateY(6px) rotate(45deg)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'translateY(-6px) rotate(-45deg)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Page Navigation
        const pages = document.querySelectorAll('.page');
        const navLinks = document.querySelectorAll('.nav-link');
        const pageLinks = document.querySelectorAll('[data-page]');
        
        function navigateTo(pageId) {
            pages.forEach(page => {
                page.classList.remove('active');
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-page') === pageId) {
                    link.classList.add('active');
                }
            });
            
            document.getElementById(pageId).classList.add('active');
            
            // Close mobile menu if open
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
            
            // Scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        
        pageLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const pageId = link.getAttribute('data-page');
                navigateTo(pageId);
                
                // Handle filter if present
                const filter = link.getAttribute('data-filter');
                if (filter) {
                    setTimeout(() => {
                        filterProducts(filter);
                        
                        // Find and activate the corresponding filter button
                        const filterBtns = document.querySelectorAll('.filter-btn');
                        filterBtns.forEach(btn => {
                            btn.classList.remove('active');
                            if (btn.getAttribute('data-filter') === filter) {
                                btn.classList.add('active');
                            }
                        });
                    }, 100);
                }
            });
        });
        
        // Product Filtering
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        function filterProducts(category) {
            const products = document.querySelectorAll('.product-card');
            
            products.forEach(product => {
                if (category === 'all' || product.getAttribute('data-category') === category) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        }
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.getAttribute('data-filter');
                
                filterButtons.forEach(btn => {
                    btn.classList.remove('active');
                });
                
                button.classList.add('active');
                filterProducts(category);
            });
        });
        
        // Add to Cart Animation
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                this.innerHTML = '<i class="fas fa-check"></i> Adicionado';
                this.style.backgroundColor = '#4CAF50';
                
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-shopping-cart"></i> Adicionar ao Carrinho';
                    this.style.backgroundColor = '';
                }, 2000);
            });
        });
    

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'95920c6663e9ef86',t:'MTc1MTUwMDI1OC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();

