$(document).ready(function() {
  
    const statesIndia = ["Andhra Pradesh", "Karnataka", "Kerala", "Tamil Nadu", "Maharashtra"];
    const citiesTamilNadu = ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"];

    $('#country').change(function() {
        if ($(this).val() === 'India') {
            $('#state').empty().append('<option value="">Select State</option>');
            statesIndia.forEach(state => {
                $('#state').append(`<option value="${state}">${state}</option>`);
            });
        } else {
            $('#state').empty().append('<option value="">Select State</option>');
            $('#city').empty().append('<option value="">Select City</option>');
        }
    });

    $('#state').change(function() {
        if ($(this).val() === 'Tamil Nadu') {
            $('#city').empty().append('<option value="">Select City</option>');
            citiesTamilNadu.forEach(city => {
                $('#city').append(`<option value="${city}">${city}</option>`);
            });
        } else {
            $('#city').empty().append('<option value="">Select City</option>');
        }
    });

    
    $('#sellerForm').submit(function(e) {
        e.preventDefault();

        let isValid = true;
        $('.form-control, .form-select').removeClass('is-invalid');
        $('.error-message').remove();

        function showError(element, message) {
            isValid = false;
            element.addClass('is-invalid');
            element.after(`<div class="error-message text-danger">${message}</div>`);
        }

       
        if (!/^[A-Z ]+$/.test($('#companyName').val())) {
            showError($('#companyName'), 'Company name must be in uppercase.');
        }
        if (!/^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/.test($('#gst').val())) {
            showError($('#gst'), 'Invalid GST format.');
        }
        if (!/^[a-zA-Z]+$/.test($('#firstName').val())) {
            showError($('#firstName'), 'First name must contain only letters.');
        }
        if (!/^[a-zA-Z]+$/.test($('#lastName').val())) {
            showError($('#lastName'), 'Last name must contain only letters.');
        }
        if (!/^[\w.-]+@[\w.-]+\.\w+$/.test($('#email').val())) {
            showError($('#email'), 'Invalid email address.');
        }
        if (!/^[1-9][0-9]{9}$/.test($('#phone').val())) {
            showError($('#phone'), 'Phone number must be 10 digits and cannot start with 0.');
        }
        if (!$('#country').val()) {
            showError($('#country'), 'Country is required.');
        }
        if (!$('#state').val()) {
            showError($('#state'), 'State is required.');
        }
        if (!$('#city').val()) {
            showError($('#city'), 'City is required.');
        }
        if (!$('#street').val()) {
            showError($('#street'), 'Street is required.');
        }
        if (!$('#flat').val()) {
            showError($('#flat'), 'Door/Flat # is required.');
        }
        if (!$('#pin').val()) {
            showError($('#pin'), 'Pin code is required.');
        }
        if (!['Electronics', 'Mobile Accessories', 'Grocery'].includes($('#category').val())) {
            showError($('#category'), 'Please select a valid category.');
        }
        const file = $('#gstCertificate')[0].files[0];
        if (!file || !['application/pdf', 'image/jpeg'].includes(file.type)) {
            showError($('#gstCertificate'), 'Only PDF or JPG files are allowed.');
        }

        
        if (isValid) {
            alert('Seller has been successfully created.');
            $('#sellerForm')[0].reset();
        } else {
            alert('Please correct the errors in the form.');
        }
    });
});
