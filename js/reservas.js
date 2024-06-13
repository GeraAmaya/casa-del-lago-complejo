document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('reservation-form');
    const checkInInput = document.getElementById('check-in');
    const checkOutInput = document.getElementById('check-out');
    const adultsInput = document.getElementById('adults');
    const childrenInput = document.getElementById('children');
    const totalAmountSpan = document.getElementById('total-amount');
    const priceInfoP = document.getElementById('price-info');
  
    const pricePerNightPerPerson = 10000; // Precio por noche por persona
  
    // Verificación de autenticación al enviar el formulario
    form.addEventListener('submit', (event) => {
        event.preventDefault();
  
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            Swal.fire('Error', 'Debe iniciar sesión para realizar una reserva.', 'error');
            return;
        }
  
        const checkInDate = new Date(checkInInput.value);
        const checkOutDate = new Date(checkOutInput.value);
        const adults = parseInt(adultsInput.value);
        const children = parseInt(childrenInput.value);
  
        if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime())) {
            Swal.fire('Error', 'Por favor ingrese fechas válidas.', 'error');
            return;
        }
  
        if (checkOutDate <= checkInDate) {
            Swal.fire('Error', 'La fecha de salida debe ser posterior a la fecha de entrada.', 'error');
            return;
        }
  
        const totalPersons = adults + children;
  
        if (totalPersons > 6) {
            Swal.fire('Error', 'El número total de personas no puede exceder 6.', 'error');
            return;
        }
  
        const diffTime = Math.abs(checkOutDate - checkInDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
        const totalPrice = totalPersons * diffDays * pricePerNightPerPerson;
  
        totalAmountSpan.textContent = `$${totalPrice.toLocaleString()}`;
        Swal.fire('Éxito', `Total a pagar: $${totalPrice.toLocaleString()}`, 'success');
    });
  
    // Actualizar precio por noche y persona en tiempo real
    adultsInput.addEventListener('input', updatePriceInfo);
    childrenInput.addEventListener('input', updatePriceInfo);
  
    function updatePriceInfo() {
        const adults = parseInt(adultsInput.value) || 0;
        const children = parseInt(childrenInput.value) || 0;
        const totalPersons = adults + children;
  
        priceInfoP.textContent = `Precio por noche y por persona: $10,000 - Total personas: ${totalPersons}`;
        updateTotalAmount();
    }
  
    // Función para calcular y actualizar el total a pagar
    function updateTotalAmount() {
        const checkInDate = new Date(checkInInput.value);
        const checkOutDate = new Date(checkOutInput.value);
        const numAdults = parseInt(adultsInput.value) || 0;
        const numChildren = parseInt(childrenInput.value) || 0;
  
        if (!isNaN(checkInDate.getTime()) && !isNaN(checkOutDate.getTime())) {
            const numNights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
            const totalAmount = (numAdults + numChildren) * pricePerNightPerPerson * numNights;
            totalAmountSpan.textContent = `$${totalAmount.toLocaleString()}`;
        } else {
            totalAmountSpan.textContent = '$0';
        }
    }
  
    // Event listeners para los inputs del formulario
    checkInInput.addEventListener('change', updateTotalAmount);
    checkOutInput.addEventListener('change', updateTotalAmount);
    adultsInput.addEventListener('input', updateTotalAmount);
    childrenInput.addEventListener('input', updateTotalAmount);
  
    // Llamamos a la función al cargar la página para mostrar el total inicial
    updateTotalAmount();
});
