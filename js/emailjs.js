const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'service_s3oh9so';
        const templateID = 'template_v9fhd3n';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                Swal.fire({
                    icon: 'success',
                    title: 'Enviado!',
                    text: 'Tu consulta ha sido enviada correctamente. Responderemos a la brevedad...Muchas Gracias!'
                });
            }, (err) => {
                btn.value = 'Send Email';
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Hubo un problema al enviar la reserva: ' + JSON.stringify(err)
                });
            });
    });
