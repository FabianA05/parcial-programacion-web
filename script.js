document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('remember').checked;
        
        console.log('Datos del formulario:');
        console.log('---------------------');
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Remember me:', rememberMe ? 'Marcado' : 'No marcado');
        console.log('---------------------');
        
        
    });
});