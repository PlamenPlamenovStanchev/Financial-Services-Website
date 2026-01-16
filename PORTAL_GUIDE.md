# Client Portal Documentation

## Overview

A simple yet professional client portal for Pinnacle Wealth Management that allows clients to:
- **Sign Up** and create an account
- **Sign In** with their credentials
- **View Investment Performance** including account balance, returns, and holdings
- **Monitor Portfolio** with visual charts and allocation breakdowns
- **Access Quick Actions** for additional services

## Features

### Authentication
- **Sign In**: Existing clients can log in with email and password
- **Sign Up**: New clients can create an account with basic information
- **Session Management**: Client information is stored in browser session
- **Secure Logout**: Clients can safely exit their account

### Dashboard

#### Performance Metrics
- **Account Balance**: Total assets under management
- **Year-to-Date Return**: Performance metrics for current year
- **1-Year Return**: 12-month performance tracking
- **Total Gain/Loss**: Cumulative gains since account inception

#### Visual Displays
- **Performance Chart**: Interactive line chart showing 12-month portfolio performance
- **Holdings Table**: Breakdown of current investments by asset class
  - Asset allocation percentages
  - Current values by holding type
  - Gains/losses by position

#### Quick Actions
- **Request Documents**: Contact advisors for account documents
- **Schedule Consultation**: Book meetings with wealth advisors
- **View Reports**: Access detailed quarterly reports
- **Account Settings**: Manage account preferences

## Files Created

### 1. portal.html
Main portal page with authentication forms and dashboard interface.

**Structure**:
- Header with navigation and logo
- Authentication section (Sign In / Sign Up forms)
- Dashboard section with performance metrics and holdings
- Footer with links and information

### 2. portal.css
Styling for the portal interface.

**Features**:
- Clean, professional design matching main site
- Responsive layout for all devices
- Dashboard grid system
- Form styling with focus states
- Table styling for holdings
- Notification animations

### 3. portal.js
JavaScript for functionality and interactivity.

**Functions**:
- `signIn()`: Authenticate user with credentials
- `signUp()`: Create new account
- `loadDashboard()`: Display user dashboard
- `logout()`: Sign user out
- `toggleForms()`: Switch between sign in/up
- `showMessage()`: Display notifications
- `formatCurrency()`: Format numbers as currency
- `checkSession()`: Check for active session on load

## Demo Accounts

For testing purposes, the following accounts are available:

1. **Account 1**
   - Email: john@example.com
   - Password: password123
   - Account: PWM-2024-001
   - Balance: $500,000

2. **Account 2**
   - Email: jane@example.com
   - Password: password456
   - Account: PWM-2024-002
   - Balance: $750,000

3. **Account 3**
   - Email: robert@example.com
   - Password: password789
   - Account: PWM-2024-003
   - Balance: $1,200,000

## Usage Instructions

### For Existing Clients (Sign In)
1. Click "Client Portal" in the main navigation
2. Enter your email address and password
3. Click "Sign In"
4. View your investment performance and account details
5. Click "Sign Out" when finished

### For New Clients (Sign Up)
1. Click "Client Portal" in the main navigation
2. Click "Sign Up" link
3. Enter your full name, email, account number, and desired password
4. Click "Create Account"
5. You can now sign in with your credentials

### Dashboard Navigation
Once logged in:
- View account balance and performance metrics at the top
- Scroll down to see portfolio performance chart
- Review current holdings in the table
- Use Quick Actions for additional services

## Technical Details

### Session Management
- Uses browser `sessionStorage` to maintain login state
- Session persists during the current browser session
- Session is cleared when the browser tab is closed
- Can be cleared manually by signing out

### Data Storage
- Sample account data is stored in JavaScript arrays
- Data persists during the session
- New accounts created during session are temporary (for demo purposes)
- Refresh clears temporary accounts

### Responsive Design
- **Desktop**: Full dashboard grid layout
- **Tablet**: Adjusted card sizes and spacing
- **Mobile**: Single column layout with optimized tables
- All elements remain functional and readable on small screens

## Customization Options

### To Add More Demo Accounts
Edit the `sampleAccounts` object in `portal.js`:

```javascript
sampleAccounts['newemail@example.com'] = {
    password: 'password',
    name: 'Client Name',
    accountNumber: 'PWM-2024-004',
    accountBalance: 600000,
    ytdReturn: 8.5,
    oneYearReturn: 12.3,
    totalGain: 75000,
    holdings: {
        usstocks: 240000,
        intl: 150000,
        bonds: 120000,
        alt: 90000
    }
};
```

### To Change Colors
Update the color variables in `portal.css` or use existing CSS custom properties from `styles.css`.

### To Modify Dashboard Cards
Edit the HTML in `portal.html` in the `dashboard-grid` or `holdings-table` sections.

## Future Enhancements

Potential features for future development:
1. **Backend Database**: Replace in-memory data with server database
2. **Real-time Data**: Connect to actual investment tracking systems
3. **PDF Reports**: Generate downloadable quarterly statements
4. **Email Notifications**: Send performance updates to clients
5. **Two-Factor Authentication**: Enhanced security measures
6. **Document Upload**: Secure file sharing
7. **Tax Reporting**: Downloadable tax documents
8. **Expense Tracking**: Detailed fee breakdowns
9. **Goal Tracking**: Monitor progress toward financial goals
10. **Mobile App**: Native mobile application

## Security Notes

**Current Implementation** (Demo Only):
- This is a client-side demonstration
- No real data is transmitted to servers
- Credentials are not encrypted
- Session data is stored locally

**For Production Use**, you would need:
- HTTPS encryption
- Secure password hashing
- Server-side authentication
- Database encryption
- Compliance with regulations (SEC, FINRA, etc.)

## Browser Compatibility

The portal works on all modern browsers:
- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## Support

For questions about the client portal:
1. Visit the Contact page for assistance
2. Call: +1 (212) 555-0100
3. Email: support@pinnaclewealth.com

## Files Modified

- **portal.html**: New file - Portal main page
- **portal.css**: New file - Portal styling
- **portal.js**: New file - Portal functionality
- **index.html**: Updated navigation link to portal

---

**Last Updated**: January 16, 2026
