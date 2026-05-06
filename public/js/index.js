// 1. Use the underscore to match your EJS file
let search_overlay = document.querySelector('.search-overlay'); 
let search_bar = document.querySelector('.search-bar');
let btm_input_contanier = document.querySelector('.input-container');
let close_btn = document.querySelector('.close-btn');



search_bar.addEventListener('click', () => {
    if (search_overlay) {
        search_overlay.classList.add('active');
        // Prevent background scrolling
        document.body.style.overflow = 'hidden'; 
    }
});

close_btn.addEventListener('click', () => {
    if(search_overlay.classList.contains('active')) {
        search_overlay.classList.remove('active');
        // Restore background scrolling
        document.body.style.overflow = '';
    }
})