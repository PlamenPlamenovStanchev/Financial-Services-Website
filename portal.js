// Client Portal JavaScript

// Sample investment data for demonstration
const sampleAccounts = {
    'john@example.com': {
        password: 'password123',
        name: 'John Smith',
        accountNumber: 'PWM-2024-001',
        accountBalance: 500000,
        ytdReturn: 8.5,
        oneYearReturn: 12.3,
        totalGain: 65000,
        holdings: {
            usstocks: 200000,
            intl: 125000,
            bonds: 100000,
            alt: 75000
        }
    },
    'jane@example.com': {
        password: 'password456',
        name: 'Jane Doe',
        accountNumber: 'PWM-2024-002',
        accountBalance: 750000,
        ytdReturn: 9.2,
        oneYearReturn: 14.1,
        totalGain: 105000,
        holdings: {
            usstocks: 300000,
            intl: 187500,
            bonds: 150000,
            alt: 112500
        }
    },
    'robert@example.com': {
        password: 'password789',
        name: 'Robert Johnson',
        accountNumber: 'PWM-2024-003',
        accountBalance: 1200000,
        ytdReturn: 7.8,
        oneYearReturn: 11.5,
        totalGain: 145000,
        holdings: {
            usstocks: 480000,
            intl: 300000,
            bonds: 240000,
            alt: 180000
        }
    }
};

// Toggle between Sign In and Sign Up forms
function toggleForms() {
    const signinForm = document.getElementById('signin-form');
    const signupForm = document.getElementById('signup-form');
    
    signinForm.classList.toggle('active');
    signupForm.classList.toggle('active');
}

// Sign In function
function signIn() {
    const email = document.getElementById('signin-email').value.trim();
    const password = document.getElementById('signin-password').value;
    
    if (!email || !password) {
        showMessage('Please enter your email and password.', 'error');
        return;
    }
    
    // Check credentials
    if (sampleAccounts[email] && sampleAccounts[email].password === password) {
        // Store session
        sessionStorage.setItem('currentUser', email);
        showMessage('Successfully signed in!', 'success');
        
        // Load dashboard after short delay
        setTimeout(() => {
            loadDashboard(email);
        }, 500);
    } else {
        showMessage('Invalid email or password. Try: john@example.com / password123', 'error');
    }
}

// Sign Up function
function signUp() {
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const account = document.getElementById('signup-account').value.trim();
    const password = document.getElementById('signup-password').value;
    
    if (!name || !email || !account || !password) {
        showMessage('Please fill in all fields.', 'error');
        return;
    }
    
    if (sampleAccounts[email]) {
        showMessage('This email is already registered.', 'error');
        return;
    }
    
    // Create new account
    sampleAccounts[email] = {
        password: password,
        name: name,
        accountNumber: account,
        accountBalance: Math.random() * 1000000 + 100000,
        ytdReturn: Math.random() * 10,
        oneYearReturn: Math.random() * 15 + 5,
        totalGain: Math.random() * 200000,
        holdings: {
            usstocks: Math.random() * 400000 + 100000,
            intl: Math.random() * 300000 + 50000,
            bonds: Math.random() * 200000 + 50000,
            alt: Math.random() * 150000 + 25000
        }
    };
    
    showMessage('Account created successfully! You can now sign in.', 'success');
    
    // Clear form and switch to sign in
    setTimeout(() => {
        document.getElementById('signup-form').reset();
        toggleForms();
        document.getElementById('signin-email').value = email;
    }, 1000);
}

// Load dashboard with user data
function loadDashboard(email) {
    const user = sampleAccounts[email];
    
    // Show dashboard, hide auth
    document.getElementById('auth-section').style.display = 'none';
    document.getElementById('dashboard-section').style.display = 'block';
    
    // Update welcome message
    document.getElementById('welcome-message').textContent = `Welcome, ${user.name}!`;
    
    // Update dashboard values
    document.getElementById('account-balance').textContent = formatCurrency(user.accountBalance);
    document.getElementById('ytd-return').textContent = '+' + user.ytdReturn.toFixed(2) + '%';
    document.getElementById('one-year-return').textContent = '+' + user.oneYearReturn.toFixed(2) + '%';
    document.getElementById('total-gain').textContent = formatCurrency(user.totalGain);
    
    // Update holdings
    document.getElementById('usstocks-value').textContent = formatCurrency(user.holdings.usstocks);
    document.getElementById('intl-value').textContent = formatCurrency(user.holdings.intl);
    document.getElementById('bonds-value').textContent = formatCurrency(user.holdings.bonds);
    document.getElementById('alt-value').textContent = formatCurrency(user.holdings.alt);
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Format currency
function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value);
}

// Show notification message
function showMessage(message, type = 'success') {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    if (type === 'error') {
        notification.style.backgroundColor = '#dc3545';
    }
    
    document.body.appendChild(notification);
    
    // Auto-remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideDown 0.3s ease reverse';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// Generic action button handler
function showMessage(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.backgroundColor = '#17a2b8';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideDown 0.3s ease reverse';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// Logout function
function logout() {
    sessionStorage.removeItem('currentUser');
    
    // Hide dashboard, show auth
    document.getElementById('dashboard-section').style.display = 'none';
    document.getElementById('auth-section').style.display = 'block';
    
    // Reset forms
    document.getElementById('signin-form').classList.add('active');
    document.getElementById('signup-form').classList.remove('active');
    document.getElementById('signin-form').reset();
    
    showMessage('You have been signed out.', 'success');
    window.scrollTo(0, 0);
}

// Check if user is already logged in
function checkSession() {
    const currentUser = sessionStorage.getItem('currentUser');
    if (currentUser && sampleAccounts[currentUser]) {
        loadDashboard(currentUser);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', checkSession);
