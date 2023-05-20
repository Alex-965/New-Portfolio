const $contactForm = document.querySelector('#js-contact-form');

$contactForm.addEventListener('submit', handleSubmit);

async function handleSubmit(e){
    e.preventDefault();

    const $form = e.target, 
        $fullName = $form.querySelector('#fullName'),
        $email = $form.querySelector('#email'),
        $message = $form.querySelector('#message'),
        response = await fetch('https://api.apispreadsheets.com/data/NjPLs6Dt1RpZ1oFl', {
            method: 'POST',
            body: JSON.stringify({
                data: {
                    fullName: $fullName.value, 
                    email: $email.value,
                    message: $message.value
                }
            })
        })

        if(response.status === 201) Swal.fire(
            'Thx for message!',
            'You send it!',
            'success'
          )
        else Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })

        $form.reset()
}



// https://api.apispreadsheets.com/data/NjPLs6Dt1RpZ1oFl/