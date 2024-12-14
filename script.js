
// Función para cambiar entre los formularios (Login/Registro)
function toggleForms(formType) {
    const loginForm = document.querySelector('.form-box.login');
    const registerForm = document.querySelector('.form-box.register');

    if (formType === 'login') {
        // Desplazamos el formulario de registro hacia la derecha y el de login hacia la izquierda
        loginForm.style.transform = 'translateX(0)';
        registerForm.style.transform = 'translateX(100%)';
    } else if (formType === 'register') {
        // Desplazamos el formulario de login hacia la izquierda y el de registro hacia la derecha
        loginForm.style.transform = 'translateX(-100%)';
        registerForm.style.transform = 'translateX(0)';
    }
}

// Función de validación
function validateForm(form) {
    const inputs = form.querySelectorAll('input');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value) {
            isValid = false;
            input.classList.add('error');
            // Puedes mostrar un mensaje de error si es necesario
        } else {
            input.classList.remove('error');
        }
    });

    return isValid;
}

// Asignar evento de envío de formularios
document.querySelector('.login form').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm(this)) {
        alert('Login Form Submitted!');
    } else {
        alert('Please fill all fields.');
    }
});

document.querySelector('.register form').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm(this)) {
        alert('Register Form Submitted!');
    } else {
        alert('Please fill all fields.');
    }
});

