const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener('click', () => {
    container.classList.add("active")
})

loginBtn.addEventListener('click', () => {
    container.classList.remove("active")
})

// Симуляція бази даних у вигляді масиву об'єктів користувачів
var users = [
    { name: "John Doe", email: "john@example.com", password: "johnspassword" },
    { name: "Jane Doe", email: "jane@example.com", password: "janespassword" }
];

// Функція для реєстрації нового користувача
function handleRegister() {
    var name = document.getElementById('reg-name').value;
    var email = document.getElementById('reg-email').value;
    var password = document.getElementById('reg-password').value;

    // Перевірка, чи користувач з такою електронною поштою вже існує
    var existingUser = users.find(function(user) {
        return user.email === email;
    });

    if (existingUser) {
        alert('Користувач з такою електронною поштою вже існує.');
        return;
    }

    // Додавання нового користувача до "бази даних"
    users.push({ name: name, email: email, password: password });

    alert('Реєстрація успішна!');
    console.log(users)
    resetRegistrationForm();
}

// Функція для входу користувача
function handleLogin() {
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;

    // Пошук користувача за електронною поштою і перевірка пароля
    var foundUser = users.find(function(user) {
        return user.email === email && user.password === password;
    });

    if (foundUser) {
        alert('Вхід успішний!');
        resetLoginForm();
    } else {
        alert('Вхід не вдається. Неправильні облікові дані.');
    }
}

// Функція для очищення форми реєстрації
function resetRegistrationForm() {
    document.getElementById('reg-name').value = '';
    document.getElementById('reg-email').value = '';
    document.getElementById('reg-password').value = '';
}

// Функція для очищення форми входу
function resetLoginForm() {
    document.getElementById('login-email').value = '';
    document.getElementById('login-password').value = '';
}