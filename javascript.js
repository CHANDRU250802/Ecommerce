function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const selectedVariant = document.getElementById('variantFilter').value.toLowerCase();
    const errorMessage = document.getElementById('errorMessage');
    const products = document.querySelectorAll('.showOrHideCard');

    
   
   if (!searchTerm && (!selectedVariant || selectedVariant === 'all')) {
    errorMessage.style.display = 'block';
} else {
    errorMessage.style.display = 'none';
}


products.forEach(product => {
    const productName = product.querySelector('.card-title').textContent.toLowerCase();
    const productVariant = product.querySelector('.card-text').textContent.toLowerCase();

    const matchesSearch = !searchTerm || productName.includes(searchTerm);
    const matchesVariant = !selectedVariant || productVariant.includes(selectedVariant);

    
    product.style.display = (matchesSearch && matchesVariant) ? 'block' : 'none';
});
}

document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const variantFilter = document.getElementById('variantFilter');
    const errorMessage = document.getElementById('errorMessage');

    searchButton.addEventListener('click', function () {
        filterProducts();
    });

    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            filterProducts();
        }
    });

    variantFilter.addEventListener('change', function () {
        const selectedVariant = variantFilter.value.toLowerCase();

        // If 'All Variants' is selected, we should not filter products and clear any errors
        if (selectedVariant === 'all') {
            errorMessage.style.display = 'none';
            filterProducts();
        } else {
            // Otherwise, filter the products based on search term and selected variant
            filterProducts();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slides img').length;
    const slideWidth = 500; // Width of each slide
    let index = 0;

    function runSlider() {
        index++;
        if (index >= slideCount) {
            index = 0;
        }
        slides.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    // Run slider every 2 seconds
    setInterval(runSlider, 2000);
});