# Pinnacle Wealth Management Website

A professional financial services website showcasing private banking, investment management, and wealth preservation services. The site features an elegant "old money" aesthetic with sophisticated design elements and responsive layout.

## Project Overview

This is a static HTML website for **Pinnacle Wealth Management**, a fictional premium financial advisory firm established in 1987. The website presents comprehensive information about the company's services, values, and contact information to potential high-net-worth clients.

## File Structure

```
Financial-Services-Website/
├── index.html          # Main HTML file - homepage with overview
├── services.html       # Detailed services page with comprehensive information
├── styles.css          # External CSS stylesheet with all styling
└── README.md           # This file
```

## Website Sections

### 1. **Header & Navigation**
   - **Headline**: "Private Wealth Management"
   - **Tagline**: "Preserving and Growing Generational Wealth Since 1987"
   - **Description**: Introductory paragraph explaining the company's philosophy
   - **Call-to-Action Button**: "Schedule a Consultation" button

### 3. **Services Section**
   Six key service offerings presented in elegant card layout:
   
   - **Private Banking** - Exclusive banking privileges for high-net-worth individuals
   - **Investment Management** - Strategic portfolio management with tailored strategies
   - **Trust & Estate Planning** - Legacy protection and multi-generational wealth transfer
   - **Wealth Preservation** - Capital protection strategies across market cycles
   - **Tax Optimization** - Expert tax planning to minimize liability
   - **Philanthropic Advisory** - Guidance on charitable giving strategies

### 4. **About Section**
   - **Company Background**: Founded in 1987 by Edmund Whitmore III
   - **Company Philosophy**: 30+ years of experience with timeless principles
   - **Core Values** (displayed in 4-column grid):
     - **Integrity** - Ethical conduct and transparent communication
     - **Prudence** - Conservative capital preservation approach
     - **Excellence** - Highest standards in advisory and service
     - **Legacy** - Multi-generational wealth focus

### 5. **Footer**
   - **Contact Information**: Address, phone, and email
   - **Services Links**: Quick links to main services
   - **Company Links**: About, Team, Careers, News & Insights
   - **Legal Links**: Privacy Policy, Terms of Service, Compliance
   - **Copyright Notice**: Legal disclaimers and compliance statements

## Design Features

### Color Palette (Old Money Aesthetic)
- **Primary Gold**: `#b8860b` - Luxury accent color
- **Dark Blue**: `#1a2b4d` - Professional, trustworthy primary color
- **Cream**: `#f5f1e8` - Elegant background
- **Charcoal**: `#2c2c2c` - Main text color
- **Light Gray**: `#e8e3db` - Secondary text color

### Typography
- **Font Family**: Georgia, Garamond (serif) - Classic, elegant appearance
- **Letter Spacing**: Generous spacing for refined look
- **Font Weights**: Mix of normal and bold for hierarchy

### Visual Elements
- **Gradients**: Subtle blue gradient in header
- **Shadows**: Soft shadows on cards for depth
- **Borders**: Gold accent borders and dividers
- **Animations**: Smooth hover effects on navigation and buttons
- **Responsive Grid**: Service cards adapt to screen size

### Responsive Design
The website is fully responsive with breakpoints for:
- **Desktop** (1200px+): Full multi-column layouts
- **Tablet** (768px-1199px): Adjusted spacing and typography
- **Mobile** (<768px): Stacked layouts, single column navigation

## Key Features

✨ **Professional Design**
- Sophisticated "old money" aesthetic with gold and blue color scheme
- Clean, organized layout with generous whitespace
- Serif typography for classical elegance

📱 **Responsive & Mobile-Friendly**
- Works seamlessly on desktop, tablet, and mobile devices
- Flexible grid layouts that adapt to screen size
- Optimized touch targets for mobile navigation

🎯 **User Experience**
- Sticky header for easy navigation access
- Smooth hover animations and transitions
- Clear call-to-action buttons
- Intuitive information hierarchy

🔍 **SEO-Friendly Structure**
- Semantic HTML with proper heading hierarchy
- Meta tags for charset and viewport configuration
- Descriptive title tag for search engines

## How to Use

1. **Open the Website**
   - Open `index.html` in any modern web browser
   - The stylesheet (`styles.css`) will automatically load

2. **Navigate**
   - Use the sticky header navigation to jump to different sections
   - Click "Schedule a Consultation" for call-to-action
   - Explore all footer links for additional information

3. **Customize**
   - Update company information in `index.html`
   - Modify colors in the `:root` CSS variables in `styles.css`
   - Add more service cards by duplicating the `.service-card` div
   - Update footer contact information as needed

## Technical Details

- **HTML Version**: HTML5
- **CSS Version**: CSS3
- **Compatibility**: All modern browsers (Chrome, Firefox, Safari, Edge)
- **No Dependencies**: Pure HTML and CSS, no JavaScript required

## Customization Guide

### Change Brand Colors
Edit the CSS variables at the top of `styles.css`:
```css
:root {
    --primary-gold: #b8860b;      /* Change this */
    --dark-blue: #1a2b4d;         /* Change this */
    --cream: #f5f1e8;             /* Change this */
}
```

### Update Company Name
Search and replace "Pinnacle Wealth Management" with your company name throughout `index.html`

### Modify Contact Information
Update the footer section in `index.html` with actual contact details:
- Address
- Phone number
- Email address

### Add More Services
Duplicate a `.service-card` div and modify the title and description:
```html
<div class="service-card">
    <h3>Your Service Name</h3>
    <p>Your service description here...</p>
</div>
```

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Notes

- All content is placeholder text and can be updated with real company information
- The design emphasizes trust, stability, and professionalism suitable for financial services
- No external libraries or frameworks are used, keeping the site lightweight and fast
- The website is production-ready and can be deployed to any web hosting service

## Future Enhancements

Potential additions to expand functionality:
- JavaScript for interactive elements (form validation, modals)
- Additional pages (Team, Insights, Blog)
- Contact form with backend integration
- Client login portal
- Image gallery/testimonials section
- Animation on scroll effects
- Dark mode toggle

---

**Created**: January 2026  
**Version**: 1.0  
**License**: Available for personal and commercial use
