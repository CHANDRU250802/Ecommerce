function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const selectedVariant = document.getElementById('variantFilter').value.toLowerCase(); 

    const products = document.querySelectorAll('.showOrHideCard');

    if (!searchTerm && (!selectedVariant || selectedVariant === 'all')) {
        alert('Please enter a search term or select a product variant.');
        return; 
    }

    products.forEach(product => {
        const productName = product.querySelector('.card-title').textContent.toLowerCase();
        const productVariant = product.querySelector('.card-text').textContent.toLowerCase(); 

        console.log(`Product Name: ${productName}, Product Variant: ${productVariant}`);

       
        const matchesSearch = !searchTerm || productName.includes(searchTerm);
        const matchesVariant = !selectedVariant || selectedVariant === 'all' || productVariant.includes(selectedVariant);

        
        if (matchesSearch && matchesVariant) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const variantFilter = document.getElementById('variantFilter');

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
        filterProducts();
    });
});
