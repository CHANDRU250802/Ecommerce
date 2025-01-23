$(document).ready(function() {
    let isValid = true;
    console.log(isValid);

    $('#sellerFormSubmitBtn').on('click', function(e){
        e.preventDefault();
        
        if($('#companyName').val() === "" ){
            $('#companyName').addClass('is-invalid');
            $('#companyNameHelp').text('Company Name cannot be empty');
            $('#companyNameHelp').removeClass('text-muted').addClass('text-danger');
            $('html, body').animate({
                scrollTop:$('#companyName')
            }, 500);
            //isValid = false;
        }else{
            $('#companyName').removeClass('is-invalid').addClass('is-valid');
            $('#companyNameHelp').text('Company Name is valid');
            $('#companyNameHelp').removeClass('text-muted').removeClass('text-danger').addClass('text-success');
           //isValid = true;
        }

        if($('#gst').val() === ""){
            $('#gst').addClass('is-invalid');
            $('#GSTHelp').text('GST cannot be empty');
            $('#GSTHelp').removeClass('text-muted').addClass('text-danger');
            $('html, body').animate({
                scrollTop:$('#gst')
            }, 500);
            //isValid = false;
        }else{
            $('#gst').removeClass('is-invalid').addClass('is-valid');
            $('#GSTHelp').text('GST is valid');
            $('#GSTHelp').removeClass('text-muted').removeClass('text-danger').addClass('text-success');
            //isValid = true;
        }

        if($('#firstName').val() === "") {
            $('#firstName').addClass('is-invalid');
            $('#firstNameHelp').text('firstName cannot be empty');
            $('#firstNameHelp').removeClass('text-muted').addClass('text-danger');
            $('html, body').animate({
                scrollTop:$('#firstName')
            }, 500);
            //isValid = false;
        } else {
            $('#firstName').removeClass('is-invalid').addClass('is-valid');
            $('#firstNameHelp').text('firstName is valid');
            $('#firstNameHelp').removeClass('text-muted').removeClass('text-danger').addClass('text-success');
            //isValid = true;
        }

        if($('#lastName').val() === "") {
            $('#lastName').addClass('is-invalid');
            $('#lastNameHelp').text('lastName cannot be empty');
            $('#lastNameHelp').removeClass('text-muted').addClass('text-danger');
            $('html, body').animate({
                scrollTop:$('#lasttName')
            }, 500);
            //isValid = false;
        } else {
            $('#lastName').removeClass('is-invalid').addClass('is-valid');
            $('#lastNameHelp').text('lastName is valid');
            $('#lastNameHelp').removeClass('text-muted').removeClass('text-danger').addClass('text-success');
            //isValid = true;
        }

        if($('#email').val() === "") {
            $('#email').addClass('is-invalid');
            $('#emailHelp').text('email cannot be empty');
            $('#emailHelp').removeClass('text-muted').addClass('text-danger');
            $('html, body').animate({
                scrollTop:$('#email')
            }, 500);
            //isValid = false;
        } else {
            $('#email').removeClass('is-invalid').addClass('is-valid');
            $('#emailHelp').text('email is valid');
            $('#emailHelp').removeClass('text-muted').removeClass('text-danger').addClass('text-success');
            //isValid = true;
        }

        if($('#phone').val() === "") {
            $('#phone').addClass('is-invalid');
            $('#phoneHelp').text('phone no cannot be empty');
            $('#phoneHelp').removeClass('text-muted').addClass('text-danger');
            $('html, body').animate({
                scrollTop:$('#email')
            }, 500);
            //isValid = false;
        } else {
            $('#phone').removeClass('is-invalid').addClass('is-valid');
            $('#phoneHelp').text('phone is valid');
            $('#phoneHelp').removeClass('text-muted').removeClass('text-danger').addClass('text-success');
            //
        }
        
          if ($('#state').val() === "") {
            $('#state').addClass('is-invalid');
            //isValid = false;
        } else {
            $('#state').removeClass('is-invalid').addClass('is-valid');
        }

        if ($('#city').val() === "") {
            $('#city').addClass('is-invalid');
           // isValid = false;
        } else {
            $('#city').removeClass('is-invalid').addClass('is-valid');
        }

        if ($('#street').val().trim() === "") {
            $('#street').addClass('is-invalid');
            isValid = false;
        } else {
            $('#street').removeClass('is-invalid').addClass('is-valid');
        }

        if ($('#flat').val().trim() === "") {
            $('#flat').addClass('is-invalid');
           // isValid = false;
        } else {
            $('#flat').removeClass('is-invalid').addClass('is-valid');
        }

        if ($('#pin').val().trim() === "" || !/^\d{6}$/.test($('#pin').val().trim())) {
            $('#pin').addClass('is-invalid');
           // isValid = false;
        } else {
            $('#pin').removeClass('is-invalid').addClass('is-valid');
        }

        if ($('#category').val() === "") {
            $('#category').addClass('is-invalid');
            //isValid = false;
        } else {
            $('#category').removeClass('is-invalid').addClass('is-valid');
        }

        //if (!isValid || $('.is-invalid').length > 0) {
           // alert('Please review the fields.');
        //} else {
            submitForm();
        //}
    });

    $('#companyName').on('input', function(e){
        let name = $(this).val().toUpperCase();
        $(this).val(name);
     });   

    $('#phone').on('input', function () {
        var phone = $(this).val();
        phone = phone.replace(/\D/g, '')
        if (phone.length > 10) {
            phone = phone.substring(0, 10);
            $(this).val(phone);
        }
        else if (phone.length < 10 ){
            $(this).val(phone);
            ('#phone').removeClass('is-valid').addClass('is-invalid');
            $('#phoneHelp').text('Enter a valid phone number');
            $('#phoneHelp').removeClass('text-muted').removeClass('text-success').addClass('text-danger');
        }else{
            $(this).val(phone);
            ('#phone').removeClass('is-invalid').addClass('is-valid');
            $('#phoneHelp').text('Phone no validated');
            $('#phoneHelp').removeClass('text-muted').removeClass('text-danger').addClass('text-success');
        }
        
    
    });

    function submitForm(){
        //if(isValid){
          //  var companyName = $('#companyName').val();
           // console.log(companyName);
           // alert("The seller's company name is : " + companyName);
        //}else{
          //  return;
       // }

       if($('.is-invalid').length > 0){
            alert('Please review the fields.');
           return;
       }else{
        var companyName = $('#companyName').val();
        var GST = $('#gst').val();
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var phone = $('#phone').val();
        var email = $('#email').val();
        var country = $('#country').val();
        var state = $('#state').val();
        var city = $('#city').val();
        var street = $('#street').val();
        var flat = $('#flat').val();
        var pin = $('#pin').val();
        var category = $('#category').val();
        console.log(companyName);
        alert("The seller's company name is : " + companyName + "\n The seller's GST name is : " + GST + 
            "\n The seller's First and Last name is : "  + firstName + " " + lastName +  " \n The seller's Phone number is : " + phone + "\n The seller's Email is : " + email + "\n The seller's country is : " + country + "\n The seller's state is : " + state + "\n The seller's city is :" + city + "\n The seller's street is :" + street + "\n The seller's flat is :" + flat + "\n The seller's pin is :" + pin + "\n The seller's category is :" + category);
       }

    }
    
});
