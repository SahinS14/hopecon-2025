# HOPECON 2025 - Modern Medical Conference Website

A modern, responsive HTML/CSS/JavaScript website for HOPECON 2025 - a comprehensive medical conference event.

## 📁 Project Structure

```
wj-modern/
├── index.html           (Landing/Home page)
├── register.html        (Registration form)
├── schedule.html        (Event schedule)
├── css/
│   └── style.css        (All styles - modern design)
├── js/
│   └── script.js        (Interactive features)
└── README.md           (This file)
```

## 🚀 Quick Start

### Option 1: Python HTTP Server (Recommended for Mac/Linux)
```bash
cd /Users/sahin/Desktop/wj-modern
python3 -m http.server 8000
```
Visit: `http://localhost:8000`

### Option 2: PHP Development Server
```bash
cd /Users/sahin/Desktop/wj-modern
php -S localhost:8000
```
Visit: `http://localhost:8000`

### Option 3: Node.js http-server
```bash
cd /Users/sahin/Desktop/wj-modern
npx http-server -p 8000
```
Visit: `http://localhost:8000`

## 📄 Pages

### 1. **index.html** (Landing Page)
- Hero section with countdown timer
- Why Join section (6 key features)
- Conference statistics
- Pricing plans
- Event schedule overview
- Contact form
- Registration modal

### 2. **register.html** (Registration)
- Comprehensive registration form
- Personal information section
- Professional details
- Competition options
- Real-time price calculation
- Form validation

### 3. **schedule.html** (Event Schedule)
- Three-day schedule breakdown
- Time-based event display
- Venue information
- Important notes

## 🎨 Modern Design Features

✨ **Contemporary Design**
- Gradient backgrounds
- Smooth animations
- Clean typography (Inter font)
- Modern color palette
- Glass-morphism effects

📱 **Fully Responsive**
- Mobile-first approach
- Tablet optimization
- Desktop layouts
- Touch-friendly buttons

🎯 **User Experience**
- Smooth scrolling
- Intuitive navigation
- Interactive modals
- Form validation
- Loading animations

♿ **Accessibility**
- Semantic HTML
- Keyboard navigation
- ARIA labels
- Color contrast compliance

## 🎯 Key Features

### Countdown Timer
- Live countdown to June 27, 2025
- Updates every second
- Displays days, hours, minutes, seconds

### Dynamic Pricing
- Different rates for Virtual/Physical/Faculty
- Add-on competition fees
- Real-time total calculation
- Early bird discounts

### Interactive Forms
- Registration form with validation
- Contact form
- Data stored in browser (localStorage)
- Confirmation messages

### Navigation
- Fixed navbar with responsive menu
- Mobile hamburger menu
- Smooth anchor links
- Active state indicators

## 🛠️ Customization

### Change Colors
Edit `css/style.css` root variables:
```css
:root {
  --primary-color: #7c3aed;      /* Purple */
  --secondary-color: #06b6d4;    /* Cyan */
  --accent-color: #ec4899;       /* Pink */
  /* ... more colors ... */
}
```

### Modify Content
- Edit text directly in HTML files
- Update dates in countdown (search "June 27, 2025")
- Change pricing in register.html
- Modify schedule times in schedule.html

### Add Images
1. Create an `assets/` folder
2. Add your images
3. Reference in HTML: `<img src="assets/image.jpg">`

## 📊 Website Statistics

**Original Project (HOPECON 2025):**
- 37+ Medical Fraternities
- 800+ Expert Faculties
- 300+ Sessions
- 70+ Case Discussions
- 20+ Live Workshops
- 12+ Symposia
- Event Duration: 3 days (Jun 27-29, 2025)
- Location: ITC Royal Bengal, Kolkata

## 📞 Contact Information

**Helpdesk:** +91-8100881622
**Email:** helpdesk@knfunihealth.com
**Venue:** ITC Royal Bengal, 1 JBS Haldane Ave, Kolkata 700046

## 💻 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Registration Types & Pricing

| Type | Price | Includes |
|------|-------|----------|
| Virtual Attendance | ₹2,500 | Full access via Zoom |
| Physical Attendance | ₹4,000 | Live at venue + meals |
| Faculty Pass | ₹3,500 | All-access + VIP area |

**Add-ons:**
- Paper Presentation: +₹1,000
- Poster Presentation: +₹1,000
- Mediquiz: +₹500

## 🔧 Technical Stack

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with gradients & animations
- **JavaScript (Vanilla)** - No dependencies, pure JS
- **Responsive Design** - Mobile-first approach
- **LocalStorage** - Client-side data storage

## 📱 Mobile Optimization

- Hamburger menu for small screens
- Touch-friendly buttons (min 48x48px)
- Optimized grid layouts
- Readable font sizes
- Single-column on mobile
- Proper viewport settings

## ⚡ Performance Features

- CSS-only animations (GPU accelerated)
- Minimal JavaScript for fast loading
- No external dependencies
- Optimized font loading
- Smooth scrolling
- Lazy loading ready

## 🔐 Security Notes

- No sensitive data transmitted
- Forms use client-side validation
- Data stored only in browser localStorage
- No external API calls
- Safe for local deployment

## 📄 File Sizes

- index.html: ~20 KB
- register.html: ~18 KB
- schedule.html: ~16 KB
- css/style.css: ~35 KB
- js/script.js: ~8 KB
- **Total:** ~97 KB (very lightweight)

## 🚀 Deployment Options

### 1. Local Server (Development)
```bash
python3 -m http.server 8000
```

### 2. GitHub Pages (Free Hosting)
- Push to GitHub
- Enable Pages in settings
- Site available at: yourusername.github.io/wj-modern

### 3. Netlify (Easy Deployment)
- Drag & drop the folder
- Automatic SSL
- Fast CDN

### 4. Traditional Web Hosting
- Upload HTML files via FTP
- No server-side processing needed
- Works everywhere

## 📚 Content Sections

1. **Hero** - Eye-catching introduction
2. **Features** - Why join the conference
3. **Statistics** - By-the-numbers impact
4. **Pricing** - Clear pricing structure
5. **Schedule** - Three-day itinerary
6. **Contact** - Get in touch options
7. **Footer** - Navigation & info

## 🎓 Learning Resources

This project demonstrates:
- ✓ Responsive web design
- ✓ Modern CSS techniques
- ✓ Vanilla JavaScript
- ✓ Form handling
- ✓ Modal dialogs
- ✓ Countdown timers
- ✓ Animation principles
- ✓ Mobile optimization
- ✓ Accessibility best practices
- ✓ Web performance

## 📞 Support

For issues or questions:
1. Check the HTML comments in code
2. Open browser DevTools (F12)
3. Check console for errors
4. Verify all files are in correct folders

## 📄 License

Free to use and modify for the HOPECON 2025 conference.

---

**Built with ❤️ for HOPECON 2025**
Medical Conference for Clinical Excellence
June 27-29, 2025 | Kolkata, India
